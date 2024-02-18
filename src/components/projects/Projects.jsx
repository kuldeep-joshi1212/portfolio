import "./projects.scss"
import Card from "../card/Card";
let prop={
  name:"p1project name",
  link:"https://localhost:3000",
}
const Projects = () => {
  return (
      <>
        <div className="heading">Projects</div>
          <div className="projects">
              <section className="card-sec"><Card props={prop}/></section>
              {/*<section className="card-sec"><Card props={prop}/></section>*/}
              {/*<section className="card-sec"><Card props={prop}/></section>*/}
              {/*<section className="card-sec"><Card props={prop}/></section>*/}
              {/*<section className="card-sec"><Card props={prop}/></section>*/}
              {/*<section className="card-sec"><Card props={prop}/></section>*/}

          </div>
      </>
  )
}

export default Projects
