import "./projects.scss"
import Card from "../card/Card";
import {useEffect, useState} from "react";
const Projects =   () => {
    const [listProjects , setListProjects] = useState(()=>{
        return [];
    });
    let json;
    useEffect(async () => {
            json=await fetch("./assets/projects.json");
            json=await json.json();
            setListProjects(Object.values(json));
            return ()=>{
                console.log("cleanup");
            }
    },[]);



  return (
      <>
        <div className="heading">Projects</div>
          <div className="projects">
              {
                    // console.log(typeof json)
                    listProjects.map((project,id) =>{
                      return <div className="project-card"><Card project={project} key={id} /></div>
                  })
              }

          </div>
      </>
  )
}

export default Projects
