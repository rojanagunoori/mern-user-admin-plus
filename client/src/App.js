import { Route,Routes} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import { Suspense, lazy } from 'react';

import Headers from "./components/Headers/headers"
//import Home from "./pages/Home/home"
//import Register from "./pages/Register/register"
//import Edit from "./pages/Edit/edit"
//import Profile from "./pages/Profile/profile"

const Home = lazy(() => import("./pages/Home/home"));
const Register = lazy(() => import("./pages/Register/register"));
const Edit = lazy(() => import("./pages/Edit/edit"));
const Profile = lazy(() => import("./pages/Profile/profile"));


function App() {
  return (
   <>




   <Headers/>
   <Suspense fallback={<div>Loading...</div>}>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    <Route path="/userprofile/:id" element={<Profile/>} />
   </Routes>
   </Suspense>
   </>
  );
}

export default App;
