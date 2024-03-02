import { Routes, Route } from "react-router-dom";
import "./App.css";
//import firebaseApp from "./components/Firebase.jsx";
//import Main from "./components/Main.jsx";
//import RegisterForm from "./components/RegisterForm.jsx";
//import Card from "./components/Card.jsx";

import Home from "./views/Home/home.jsx";
//import Favoritos from "./views/Favoritos/Favoritos.jsx";
//import Admin from "./views/Admin/Admin.jsx";


function App() {
  
  // aca van las vistas y modificarlas para que se vean las rutas y views

  return (
    <>

   
       {/* <NavigationBar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/favoritos" element={<Favoritos />} />*/}
        {/*<Route path="/administrador" element={<Admin />} />*/}
        
        {/* <Route path="/menu" element={<Profile />} /> */}
        {/* <Route path="/pizza/:id" element={<LogIn />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/store" element={<Store />} /> */}
        {/* <Route
          path="/product/:id"
          element={<StorePeroParaElDetalleDeProductosDeLaBaseDeDatos />}
        /> */}
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes> 
    
    </>
  );
}

export default App;
