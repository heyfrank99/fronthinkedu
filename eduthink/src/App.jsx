import {BrowserRouter, Routes, Route} from "react-router-dom"
//import RouterApp from "../routes/routerapp"
//import Footer from "./components/layout/footer"
//import NavBar from "./components/layout/navbar"
import Aboutus from "../src/components/pages/Aboutus"
import Subjects from "../src/components/pages/subjects"
import Error from "../src/components/pages/Error404"
import Home from "../src/components/pages/home"
import Login from "../src/components/pages/login"
import Studentstable from "../src/components/pages/studentstable"
import Navbar from "../src/components/layout/navbar"

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route>
          <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/Studentstable" element={<Studentstable />} />
      <Route exact path="/Subjects" element={<Subjects />} />
      <Route exact path="/Aboutus" element={<Aboutus />} />
      <Route exact path="*" element={<Error />} />



            
          </Route>




        </Routes>

        
        
          
        
      </BrowserRouter>

  
    </div>
  )
}

export default App
