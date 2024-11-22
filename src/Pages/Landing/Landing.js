import React from 'react'

import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import CTASection from "../../Components/CTASection/CTASection";
import OurServices from "../../Components/OurServices/OurServices";
import OurVision from "../../Components/OurVision/OurVision";
import OurChildren from "../../Components/OurChildren/OurChildren";
import OurPartners from "../../Components/OurPartners/OurPartners";
import Application2025 from "../../Components/Application2025/Application2025";
import SupportUs from "../../Components/SupportUs/SupportUs";
import Footer from "../../Components/Footer/Footer";




function Landing() {
  return (
    <div>   

<NavBar />
      <HeroSection/>
      <CTASection/>
      <OurServices/>
      <OurVision/>
      <OurChildren/>
      <OurPartners/>
      <Application2025/>
      <SupportUs/>
      <Footer/>

    </div>
  )
}

export default Landing