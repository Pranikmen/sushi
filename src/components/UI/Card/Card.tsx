import {FC} from 'react'
import './Card.css'

interface IProps {
    children: JSX.Element
}

export const Card:FC<IProps> = ({children}):JSX.Element => {
    return <div className="card">{children}</div> 

    
}