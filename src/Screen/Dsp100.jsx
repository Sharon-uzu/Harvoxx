import React from 'react';
import Enroll from '../ComponentsFolder/Enroll';
import CountDown from '../ComponentsFolder/CountDown';
import AboutDsp from '../ComponentsFolder/AboutDsp';
import CoursesOffered from '../ComponentsFolder/CoursesOffered';
import Memories from '../ComponentsFolder/Memories';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';

const Dsp100 = () => {
  return (
    <div>
        <Navbar/>
        <Enroll title='Digital Training program 100 (DSP-100)' subtitle='Building this next generation of female techies'/>
        <CountDown cohort='100'/>
        <AboutDsp cohort='100' info='Unlock the key to success and join a community of like-minded individuals in a state-of-the-art co-working environment. Take advantage of high-speed internet, peer support, and a vibrant space to help you thrive.Our hubs are designed to take your productivity and growth to new heights, where the rigour of online training is deepened through in-person experiences and practised in context.'/>
        <CoursesOffered/>
        <Memories/>
        <Footer/>
        
    </div>
  )
}

export default Dsp100