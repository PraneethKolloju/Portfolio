import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../Styles/Home.css'
import { GitHub } from '@material-ui/icons';
function Home() {
    return (
        <div className='home'>
            <div>
                <div className='about'>
                    <h2>Hi, I'm Praneeth</h2>
                    <div className='prompt'>
                        <p>A Software Developer with passion for learning and creating</p>
                        <a href='https://www.linkedin.com/in/praneeth-kolloju-0443a7195/'><LinkedInIcon /></a>
                        <a href='https://outlook.live.com/'><EmailIcon /></a>
                        <a href='https://github.com/PraneethKolloju'><GithubIcon /></a>
                    </div>
                </div>
                <div className='skills'>
                    <h1>Skills</h1>
                    <ol className='list'>
                        <li className='item'>
                            <h2>Front-End</h2>
                            <span><b>HTML,CS,ReactJS,NPM,MaterialUI,BootStrap</b></span>
                        </li>

                        <li className='item'>
                            <h2>Back-End</h2>
                            <span><b>NodeJS,Express.JS,MySQL,MongoDB</b></span>
                        </li>
                        <li className='item'>
                            <h2>Languages</h2>
                            <span><b>JavaScript,Python,C programming</b></span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Home;