import MyComponent1 from "./MyComponent1";
import picture1 from "./assets/airway.jpg"
import {FaBeer, FaCertificate, FaPeopleCarry, FaQuoteRight, FaRadiation, FaRegIdBadge} from 'react-icons/fa'


function MyComponent4(){

    return(
        <div id="knowMore">
            <div className='imgText1'>
                <span className='t4'>Get to know more</span> <br />
                <span className='t5'>About Me</span>
            </div>
            <div className="imgText2">
                <img src={picture1} className="img2" />
                <div className="b1">
                    <span className="t6"><FaCertificate /></span> <br />
                    <span className="t7">Experience</span> <br />
                    <span className="t8">2+ years</span> <br />
                    <span className="t8">FullStack Developer</span>
                </div>
                <div className="b1">
                    <span className="t6"><FaRegIdBadge /></span> <br />
                    <span className="t7">Education</span> <br />
                    <span className="t8">B.S.c (I.T) degree</span> <br />
                    <span className="t8">FullStack Developer</span>
                </div>
            </div>
            <div className='imgText1'>
                <span className='t4'>Explore my</span> <br />
                <span className='t5'>Experience</span>
            </div>
            <div className="imgText3">
                <div className="b2">
                    <p className="t9">Frontend Development</p>
                    <li>HTML <br /><span className="t8">Experienced</span></li>
                    <li>CSS <br /><span className="t8">Experienced</span></li>
                    <li>JavaScrip <br /><span className="t8">Basic</span></li>
                    <li>React-Native <br /><span className="t8">Experienced</span></li>
                    <li>TypeScrip <br /><span className="t8">Basic</span></li>
                    <li>Material UI <br /><span className="t8">Basic</span></li>
                </div>
                <div className="b2">
                    <p className="t9">Backend Development</p>
                    <li>SQL <br /><span className="t8">Experienced</span></li>
                    <li>Node JS <br /><span className="t8">Basic</span></li>
                    <li>Express JS <br /><span className="t8">Basic</span></li>
                </div>
            </div>
        </div>
    );
}
export default MyComponent4