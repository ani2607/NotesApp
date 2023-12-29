import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Edit = lazy(() => import("./pages/Edit"));
const Create = lazy(() => import("./pages/Create"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Loader = lazy(()=> import('./components/Loader'))
const NoteRendering = lazy(()=> import('./pages/NoteRendering'))


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path={`/edit/:id`} element={<Edit />} />
          <Route path={`/note/:id`} element = {<NoteRendering/>}/>
        </Routes>

        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
