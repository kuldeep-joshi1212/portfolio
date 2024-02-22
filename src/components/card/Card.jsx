import styles from "./card.module.scss"
const Card = (props) => {

        let techList=props.project.tech[0];
        // console.log(techList)
        for(let i=1;i<props.project["tech"].length;i++){
            techList+=", "+props.project["tech"][i];
        }


    return(
        <>
            <div className="card-cnt">
                <div className={styles.card}>
                    <div className={styles.project}> <a href={props.project.link}>{props.project.name} <i
                        className='bx bx-link'></i></a></div>
                    <div className={styles.description}>{props.project.description}</div>
                    <div className={styles.tech}>
                        <div className="tech-list">
                            {`Tech used: ${techList}`}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;