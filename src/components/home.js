import Navbar from "./navbar"
import me from '../gif/me.gif'
import info from '../gif/info.gif'
import screenshot from '../gif/screenshot.png'
import move from '../gif/move.png'
import pedal from '../gif/pedal.png'
import download from '../gif/download.gif'
import car from '../gif/car.gif'
import embodiedgames from '../gif/embodiedgames.png'
import edplus from '../gif/edplus.png'
import apitite from '../gif/apitite.png'
import laptop from '../gif/laptop.gif'
import kylo from '../gif/kylo.png'
import vracademi from '../gif/vracademi.png'
import { useRef } from "react"
import { Link } from "react-router-dom"

const Home = () =>{
    const gamesref = useRef(null)
    const projectsref = useRef(null)
    const workref = useRef(null)
    return(
        <div className="page">
            <Navbar gamesref={gamesref} projectsref={projectsref} workref={workref}/>
            <div className="content">
                <div className="intro">
                    <div>
                        <h1>I'm <strong>Neel</strong></h1>
                        <h2>and I make <strong>stuff</strong></h2>
                    </div>
                    <div>
                        <img src={me}></img>
                    </div>
                </div>
                <div id='games' className="games" ref={gamesref}>
                    <div className="column1">
                        <div className="info">
                            <img className='infoimg' src={info}></img>
                            <p>In July, 2022, my games were unexpectedly removed from the Google Play Store owing to a change in Google's policy. It's sad, I know.</p>
                        </div>
                        <div className="gamebox">
                                <img src={move}></img>
                                <p>Move the sphere. Simple. Or is it? A hypercasual title that challenges your brain to work through the seemingly easy task of moving a ball through a procedurally generated path.<br/><strong>Unity, C#, GIMP</strong></p>
                                <a href="https://drive.google.com/file/d/15JLLLP93uDSW0vT6U6rfFEApiYhtt5FA/view?usp=sharing"><img className='download' src={download}></img></a>
                        </div>
                        <div className="gamebox">
                                <img src={pedal}></img>
                                <p>All about you and your bike traversing landscapes in an undending journey. Sit back and relax as you explore the side-scrolling open world on your trusty red bike. Make sure to befriend smiling faces, and stock up on supplies for the long journey ahead.  <br/> <strong>Unity, C#, GIMP</strong></p>   
                                <a href="https://drive.google.com/file/d/137kmPWcinNPVwMiwh9amE3lSZ_0euOSe/view?usp=sharing"><img className='download' src={download}></img></a>
                        </div>
                    </div>
                    <div className="column2">
                        <img src={screenshot}/>
                    </div>
                </div>
                <div className="project" ref={projectsref}>
                    <div className="column1">
                        <h1>Here's what I<strong>do</strong></h1>
                        <h2>..and have done</h2>
                        <img src={car}></img>
                    </div>
                    <div className="column2">
                        <div className="item">
                            <img src={apitite}></img>
                            <p><strong>@APItite</strong> <br/> Developed a REST API for restaurants to display nutritional facts about menu items on their websites. Made under 48 hours at the Amazon Cloud Scholars' Hackathon.</p>
                        </div>
                        <div className="item">
                            <img src={embodiedgames}></img>
                            <p><strong>@EmbodiedGamesLab</strong> <br/> Working on an educational AR experience to assist youngsters identify mosquito breeding grounds. Currently part of the research group as a research assistant.</p>
                        </div>
                        <div className="item">
                            <img src={edplus}></img>
                            <p><strong>@EdPlus</strong> <br/> Creating online XR experiences for Arizona State University's online learning platform. Ongoing project involves a sailing simulation of the polynesian Hōkūleʻa to foster understanding of its working. </p>
                        </div>
                    </div>
                </div>
                <div className="work" ref={workref}>
                    <h1>About past <strong>summers,</strong> <br/>and a few lines of <strong>code</strong></h1>
                    <div className="section1">
                        <div className="item">
                            <img src={kylo}></img>
                            <h2><strong>Frontend Development Intern</strong><i> @KyloApps</i> </h2> <p>Developed front-end for web-based applications utilizing React.JS, CSS and the Material UI design framework for early-stage startups and other clients. </p>
                        </div>
                        <img src={laptop}></img>
                        <div className="item">
                            <img src={vracademi}></img>
                            <h2><strong>Design Intern</strong> <i>@VRAcademi</i></h2> <p>Created educational and interactive visual content in Unity3D, C#, and Premiere Pro for students and the company's marketing campaign. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;