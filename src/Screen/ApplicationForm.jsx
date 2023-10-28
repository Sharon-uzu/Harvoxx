import React, {useState} from 'react';
import logo from '../Images/harvoxx.png';
import pix from '../Images/business-3d-three-young-women-with-phones 1.png';
import shape from '../Images/Ellipse 11.png';
import { Link, useNavigate } from 'react-router-dom';

const ApplicationForm = () => {

    const [dsp100, setDsp100] = useState(true);
    const [dsp300, setDsp300] = useState();

    const navigate = useNavigate();

    const saveItem = () => {
        navigate('/Congrat')
      }


  return (
    <div className='application'>
       <div className='form-text'>
        <div className='logo'>
            <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <h2>"Embrace the power of learning tech skills, for with each new skill you acquire, you unlock the door to innovation and shape a brighter future for yourself and the world."</h2>
        <div className='pix1'>
            <img src={pix} alt=""/>

        </div>
        <img src={shape} alt="" className='pix2'/>

       </div>

       {
        dsp300 ? (

        

                    <form>
                            <h4>Application for DSP-300</h4>
                            <p>Fill in your Details</p>
                            <div className='form'>
                                <label htmlFor=""> 
                                <p>First Name</p>
                                    <input type="text" placeholder='Enter First Name'/>
                                </label>

                                <label htmlFor=""> <p>Last Name</p>
                                    <input type="text" placeholder='Enter Last Name'/>
                                </label>

                                <label htmlFor=""> <p>Gender</p>
                                    <select name="" id="">
                                        <option value="" style={{fontSize:'10px'}}>Select Gender</option>
                                        <option value="1">Female</option>
                                        <option value="2">Male</option>
                                    </select>
                                </label>

                                <label htmlFor=""><p>Date Of Birth</p>
                                    <input type="date" name="" id="" />
                                </label>

                                <label htmlFor=""><p>Email Address</p>
                                    <input type="email" name="" id="" placeholder='Email Address'/>
                                </label>

                                <label htmlFor=""> <p>Education Level</p>
                                    <select name="" id="">
                                        <option value="">Select Education level</option>
                                        <option value="1">SSCE</option>
                                        <option value="2">OND</option>
                                        <option value="3">BSc</option>
                                        <option value="4">Master</option>
                                    </select>
                                </label>

                                <label htmlFor=""><p>State of Residence</p>
                                    <input type="text" name="" id="" placeholder='Enter your state of residence'/>
                                </label>

                                <label htmlFor=""><p>Address</p>
                                    <input type="text" name="" id="" placeholder='Enter your home address'/>
                                </label>

                                <label htmlFor=""> <p>Employment Status</p>
                                    <select name="" id="">
                                        <option value="">Select Employment Status</option>
                                        <option value="1">Unemployed</option>
                                        <option value="2">Self-employed</option>
                                        <option value="3">Employed</option>
                                    </select>
                                </label>

                                <label htmlFor=""><p>Phone Number</p>
                                    <input type="tel" name="" id="" placeholder='07012345575'/>
                                </label>

                                <label htmlFor=""> <p>Phone Number</p>
                                    <select name="" id="">
                                        <option value="">Select your availability</option>
                                        <option value="1">Daily</option>
                                        <option value="2">Weekly</option>
                                    </select>
                                </label>

                                
                            </div>
                            <div className='submit'>
                                <button type="submit" onClick={saveItem}>Enroll</button>
                            </div>
                            
                    </form>

): null
       
                    



        }


{/* DSP 100 FORM */}


{
        dsp100 ? (

       <form>
            <h4>Application for DSP-100</h4>
            <p>Fill in your Details</p>
            <div className='form'>
                <label htmlFor=""> 
                <p>First Name</p>
                    <input type="text" placeholder='Enter First Name'/>
                </label>

                <label htmlFor=""> <p>Last Name</p>
                    <input type="text" placeholder='Enter Last Name'/>
                </label>

                <label htmlFor=""> <p>Gender</p>
                    <select name="" id="">
                        <option value="" style={{fontSize:'10px'}}>Select Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                    </select>
                </label>

                <label htmlFor=""><p>Date Of Birth</p>
                    <input type="date" name="" id="" />
                </label>

                <label htmlFor=""><p>Email Address</p>
                    <input type="email" name="" id="" placeholder='Email Address'/>
                </label>

                <label htmlFor=""> <p>Education Level</p>
                    <select name="" id="">
                        <option value="">Select Education level</option>
                        <option value="1">SSCE</option>
                        <option value="2">OND</option>
                        <option value="3">BSc</option>
                        <option value="4">Master</option>
                    </select>
                </label>

                <label htmlFor=""><p>State of Residence</p>
                    <input type="text" name="" id="" placeholder='Enter your state of residence'/>
                </label>

                <label htmlFor=""><p>Address</p>
                    <input type="text" name="" id="" placeholder='Enter your home address'/>
                </label>

                <label htmlFor=""> <p>Employment Status</p>
                    <select name="" id="">
                        <option value="">Select Employment Status</option>
                        <option value="1">Unemployed</option>
                        <option value="2">Self-employed</option>
                        <option value="3">Employed</option>
                    </select>
                </label>

                <label htmlFor=""><p>Phone Number</p>
                    <input type="tel" name="" id="" placeholder='07012345575'/>
                </label>

                <label htmlFor=""> <p>Phone Number</p>
                    <select name="" id="">
                        <option value="">Select your availability</option>
                        <option value="1">Daily</option>
                        <option value="2">Weekly</option>
                    </select>
                </label>

                
            </div>
            <div className='submit'>
                <button type="submit" onClick={saveItem}>Enroll</button>
            </div>
            
       </form>

): null
       
                    



}

    </div>
  )
}

export default ApplicationForm