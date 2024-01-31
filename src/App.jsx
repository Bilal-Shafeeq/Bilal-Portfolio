import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MySkills from './components/MySkills'
import LatestBlogPost from './components/LatestBlogPost';
import Testimonials from './components/Testimonials';
import MyEducation from './components/MyEducation';
import MyBestClients from './components/MyBestClients';
import MyAllProjects from './components/MyAllProjects';
import MyExpertise from './components/MyExpertise';
import Footer from './components/Footer';
import Form from './components/Form'
import 'aos/dist/aos.css';
import AOS from 'aos';
import GoToTop from './components/GoToTop';
import ConfettiAnimation from './components/ConfettiAnimation';


const App = () => {

  useEffect(() => {
    AOS.init({
      // duration: "1200",
      // easing: 'ease-in-sine',
      // delay: 100,
    })
  }, []);


  return (
    <>
      <Navbar />
      <HeroSection />
      <MyExpertise />
      <MyAllProjects />
      <MySkills />
      <MyEducation />
      <Testimonials />
      <MyBestClients />
      <LatestBlogPost />
      <Form />
      <GoToTop />
      <Footer />
      <ConfettiAnimation/>
    </>
  )
}

export default App