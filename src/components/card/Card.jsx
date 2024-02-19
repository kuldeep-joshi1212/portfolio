import styles from "./card.module.scss"
import {useState} from "react";
const Card = (props) => {
    const[data, setData] = useState([]);

        let techList=props.project.tech[0];
        // console.log(techList)
        for(let i=1;i<props.project["tech"].length;i++){
            techList+=", "+props.project["tech"][i];
        }
        console.log(techList);




    return(
        <>
            <div className="card-cnt">
                <div className={styles.card}>
                    <div className={styles.project}>{props.project.name} <a href={props.project.link}><i
                        className='bx bx-link'></i></a></div>
                    <div className={styles.description}>{props.project.description}</div>
                    <div className={styles.tech}>
                        <div className="tech-list">
                            {`Tech used: ${techList}`}
                            {/*{props.project.tech.map((tech, i) => {*/}
                            {/*    return <span>{tech} ,</span>*/}
                            {/*})}*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;