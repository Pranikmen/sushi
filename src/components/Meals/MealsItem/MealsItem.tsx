import {FC} from "react"
import styles from './MealsItem.module.scss'

interface IProps {
    id: string
    name: string
    description: string
    price: number
}


export const MealsItem:FC<IProps> = ({id, name, description, price}):JSX.Element => {
    return (
        <li>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{price}</div>
            </div>
        </li>
    )
}