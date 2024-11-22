import React from "react";

import {Routes, Route} from "react-router-dom"
import Landing from "./Pages/Landing/Landing";
import AdmissionPage from "./Pages/AdmissionPage/AdmissionPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";


const App = () => {
  return (
    <div>
        
        <Routes>
         
            


                <Route path="/" element={<Landing/>}>

                </Route>
                <Route path="/admission" element={<AdmissionPage/>}>

                </Route>
                <Route path="/about" element={<AboutPage/>}>

                </Route>
                <Route path="/gallery" element={<GalleryPage/>}>

                </Route>
                <Route path="/contact" element={<ContactPage/>}>

                </Route>

              
           

                
            </Routes>
      
    </div>
  );
};

export default App;
