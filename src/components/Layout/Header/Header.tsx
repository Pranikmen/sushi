import React from "react"
import styles from './Header.module.scss'
// import sushiImage from '../../../assets/sushi.jpg'
export const Header = () => {
    return(
        <React.Fragment>
        <header className={styles.header}>
            <h1>Японская кухня</h1>
        </header>
        <div>
            <img src='/sushi.jpg' alt="Japanese meals" />
        </div>
        </React.Fragment>
    )
}