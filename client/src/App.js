import {Route,Routes} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from "./components/Headers/headers"
import Home from "./pages/Home/home"
import Register from "./pages/Register/register"
import Edit from "./pages/Edit/edit"
import Profile from "./pages/Profile/profile"

function App() {
  return (
   <>
   
   <Headers/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    <Route path="/userprofile/:id" element={<Profile/>} />
   </Routes>
   </>
  );
}

export default App;
