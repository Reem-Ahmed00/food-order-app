import {useState, useEffect} from 'react'
import MealItem from './MealItem'


export default function MealsList() {
    const [meals, setMeals] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            // .then(console.log)
            .then(data => setMeals(data.recipes))
    }, [])
    return (
        <>
            {meals && meals.map((meal) => (
                <MealItem key={meal.id} meal={meal}/>
                ))}
        </>
    )
}