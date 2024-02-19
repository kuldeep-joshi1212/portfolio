import "./skills.scss";

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
                        <object data="./assets/postman.svg" ></object>
                        <span>Postman</span>
                    </div>
                    <div className="skill">
                        <object data="./assets/jmeter.svg" ></object>
                        <span>JMeter</span>
                    </div>
                    <div className="skill">
                        <object data="./assets/docker.svg" ></object>
                        <span>Docker</span>
                    </div>
                </div>
                <div className="other section">
                    <div className="skill">
                        <object data="./assets/dsa.svg" ></object>
                        <span>DSA</span>
                    </div>
                    <div className="skill">
                        <object data="./assets/design.svg" ></object>
                        <span>Design Patterns</span>
                    </div>
                    <div className="skill">
                        <object data="./assets/micro.svg" ></object>
                        <span>Micro-Services</span>
                    </div>
                    <div className="skill">
                        <object data="./assets/rest.svg" ></object>
                        <span>Rest APIs</span>
                    </div>

                </div>

            </div>
    </>);
};

export default Skills;

