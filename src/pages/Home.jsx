import { useState, useEffect } from "react";
import NoNote from "../components/NoNote";
import Note from "../components/Note";

import { auth, db } from "../config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const [navigate, setNavigate] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
        setNavigate(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const notesCollection = collection(db, "notes");
      getDocs(notesCollection)
        .then((snapshot) => {
          let notes = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          // console.log(notes)
          const  filteredNotes = notes.filter(note => (note.userId === user.uid));
          // console.log(filteredNotes)

          setData(filteredNotes);
        })
        .catch(error => {
          console.error("Error fetching notes:", error);
        });
    }
  }, [user,data]); // Depend on the user state

  if (navigate) {
    return <Navigate to="/login" />;
  }



  return (
    <div className="text-center flex flex-col justify-center items-center flex-wrap  sm:grid gap-3   sm:ml-8  md:ml-20  grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 grid-rows-6   mt-10  text-white text-xl mb-16 ">
      {data.length === 0 ? <NoNote /> : data.map((note) =>  (
              
        <Note key={note.id} title={note.title} id={note.id} />

      ))}
    </div>
  );
};

export default Home;