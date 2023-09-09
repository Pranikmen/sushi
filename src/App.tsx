import { MealsList } from './components/Meals'
import styles from './App.module.scss'

import {Header} from "./components/Layout/Header"
export const App = () => {
  return (
    <div>
      <Header/>
      <MealsList/>
    </div>
  )
}

