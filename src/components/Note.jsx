import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import { auth,db } from '../config/firebase';
import { doc,deleteDoc } from 'firebase/firestore';



const Note = ({title,id}) => {

  const handleDelete = () => {
    if (auth.currentUser) {
        const notesRef = doc(db, 'notes', id);
        deleteDoc(notesRef)
            .then(() => {
                // console.log("Document successfully deleted!");
               
            })
            .catch(error => {
                console.error("Error deleting document:", error);
            });
    }
};

  return (
    <div className="w-80  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <h5 className="mb-2  text-2xl font-bold tracking-tight text-white">{title}</h5>
    
   <div className='flex gap-x-2 justify-center bg-gray-800 '>
    <Link to={`/note/${id}`} className=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        
    </Link>
    <button onClick={handleDelete} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        Delete
        
    </button>

    </div>
</div>
  )
}

export default Note;

Note.propTypes = {
    title : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}
