import React from 'react'
import airCleaning from './assets/aircleaning.jpg'


function MyComponent2(){

    return(
        <div className='profile1'>
            <img   className='img1' src={airCleaning}/>
            <div className='imgText'>
                <span className='t1'>Hello I'm</span> <br />
                <span className='t2'>Godwin</span> <br />
                <span className='t3'>FullStack Developer</span> <br />
                <button className='Button1'>My Works</button>
                <button className='Button1'>Contact Me</button>
            </div>
        </div>
    );
}
export default MyComponent2