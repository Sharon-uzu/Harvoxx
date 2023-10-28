import React from 'react';
import logo from '../Images/harvoxx.png'

const Footer = () => {
  return (
    <div className='foot'>
        <footer>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <ul>
                    <h4>Our Program</h4>
                    <li>Paid Training</li>
                    <li>DSP 100</li>
                    <li>DSP 100</li>
                </ul>

            </div>

            <div>
                <ul>
                    <h4>Harvoxx School</h4>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>News</li>
                    <li>alumina</li>
                </ul>
            </div>

            <div>

                <ul>
                    <h4>Companies</h4>
                    <li>Hire out Grad</li>
                    <li>Collaborate with us</li>
                </ul>

            </div>

        </footer>
    </div>
  )
}

export default Footer