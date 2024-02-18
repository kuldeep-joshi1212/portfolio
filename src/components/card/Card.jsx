import styles from "./card.module.scss"
const Card = (props) => {
    return(
        <>
            <div className={styles.card}>
                <span className={styles.project}>Project 1 <a href={props.link}><i className='bx bx-link'></i></a></span>
                <span className={styles.project}></span>
                <span className={styles.tech}>
                    <ul>
                        {

                        }
                    </ul>
                </span>
            </div>
        </>
    )
}

export default Card;