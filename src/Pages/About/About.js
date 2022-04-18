import React from 'react';
import './About.css';
import Images from '../../Images/IMG_20210313_173559.jpg'

const About = () => {
    return (
        <div className='goal-container'>
            <div>
                 <img width={300} height={300} src={Images} alt="" />
            </div>
            <h1>It has already been six month past I started of 2021!</h1>
            <h3>My goal below there </h3>
            <li>1.I want to become a web devoloper.</li>   
            <li> 2. Now i learn javascript, react HTML,CSS.</li>
            <li> 3. As a beginner firstly i want to get a internship.</li>
            <li> 4. After that work I want to get a job.</li>
            <li>5.I believe as soon as perfect time i become a web devoloper.</li>
           
            

        </div>
    );
};

export default About;