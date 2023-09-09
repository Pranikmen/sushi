import styles from './MealsList.module.scss'
import {Meals} from './MealsList.const'
import { MealsItem } from '../MealsItem/MealsItem'
import {Card} from  '../../UI'



export const MealsList = () => {

    const mealsList = Meals.map((el, idx) => (
       <MealsItem
         key={idx}
         id={el.id}
         name={el.name}
         description={el.description}
         price={el.price}
       />
    ))

    return (
        <section className={styles.meals}>
          <Card>
            <ul>{mealsList}</ul>
          </Card>

        </section>
    )
}