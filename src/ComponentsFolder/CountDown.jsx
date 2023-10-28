import React from 'react'

const CountDown = (props) => {
  return (
    <div className='count'>
        <h3>Countdown to DSP {props.cohort}</h3>
        <p>AltSchool Africa helps you learn the skills you need to build and grow the career you want.</p>
        <div className='counting'>
            <div className='count-c'>
                <div>
                    <h2>24 </h2>
                    <h3>:</h3>
                    
                </div>
                <p>Days</p>
                
            </div>

            <div className='count-c'>
                <div>
                    <h2>24 </h2>
                    <h3>:</h3>
                </div>
                <p>Hours</p>
                
            </div>

            <div className='count-c'>
                <div>
                    <h2>24 </h2>
                    <h3>:</h3>
                </div>
                <p>Minutes</p>
                
            </div>
                
            <div className='count-c'>
                <div>
                    <h2>24 </h2>
                </div>
                <p>Seconds</p>
                
            </div>
        </div>
        
    </div>
  )
}

export default CountDown