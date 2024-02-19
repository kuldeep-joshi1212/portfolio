import "./projects.scss"
import Card from "../card/Card";
import {useEffect, useState} from "react";
const Projects =   () => {
    const [listProjects , setListProjects] = useState([]);
    let json;
    useEffect(() => {
        const fun= async ()=>{
            json=await fetch("./assets/projects.json");
            json=await json.json();

            // console.log(json);
            setListProjects(Object.values(json));
        }
       fun();

    },[])



  return (
      <>
        <div className="heading">Projects</div>
          <div className="projects">
              {
                    // console.log(typeof json)
                    listProjects.map((project,id) =>{
                      return <div><Card project={project} key={id} /></div>
                  })
              }

          </div>
      </>
  )
}

export default Projects
