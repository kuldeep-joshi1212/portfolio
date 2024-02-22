import "./skills.scss";
import design from "./svg/design.svg"
import docker from "./svg/docker.svg"
import DSA from "./svg/DSA.svg"
import jmeter from "./svg/jmeter.svg"
import micro from "./svg/micro.svg"
import postman from "./svg/postman.svg"
import rest from "./svg/rest.svg"

function Skills(){
    return (<>
            <div className="heading">
                Skills
            </div>
            <div className="skills">
                <div className="language section">
                    <div className="skill">
                        <i className='bx bxl-java'></i>
                        <span>Java</span>
                    </div>
                    <div className="skill">
                        <i className='bx bxl-nodejs'></i>
                        <span>Javascript</span>
                    </div>
                    <div className="skill">
                        <i className='bx bxl-html5'></i>
                        <span>HTML</span>
                    </div>
                    <div className="skill">
                        <i className='bx bxl-css3'></i>
                        <span>CSS</span>
                    </div>
                </div>
                <div className="frameworks section">
                <div className="skill">
                    <i className='bx bxl-spring-boot'></i>
                    <span>Spring</span>
                </div>
                    <div className="skill">
                        <i className='bx bxl-react'></i>
                        <span>React</span>
                    </div>
                    <div className="skill">
                        <i className='bx bxl-postgresql'></i>
                        <span>PostgreSQL</span>
                    </div>
                    <div className="title">
                        Frameworks
                    </div>

                </div>
                <div className="tools section">
                    <div className="skill">
                        <i className='bx bxl-git'></i>
                        <span>Git</span>
                    </div>
                    <div className="skill">
                        <i className='bx bxl-aws'></i>
                        <span>AWS</span>
                    </div>
                    <div className="skill">
                        <img src={postman} alt={postman} />
                        <span>Postman</span>
                    </div>
                    <div className="skill">
                        <img src={jmeter} alt={jmeter} />
                        <span>JMeter</span>
                    </div>
                    <div className="skill">
                        <img src={docker} alt={docker} />
                        <span>Docker</span>
                    </div>
                </div>
                <div className="other section">

                    <div className="skill">
                        <img src={DSA} alt={DSA} />
                        <span>DSA</span>
                    </div>
                    <div className="skill">
                        <img src={design} alt={design} />
                        <span>Design Patterns</span>
                    </div>
                    <div className="skill">
                        <img src ={micro} alt={micro} />
                        <span>Micro-Services</span>
                    </div>
                    <div className="skill">
                        <img src={rest} alt={rest} />
                        <span>Rest APIs</span>
                    </div>

                </div>

            </div>
    </>);
};

export default Skills;

