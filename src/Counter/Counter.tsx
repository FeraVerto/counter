import React from 'react'
import './../App.css'

export type CounterPropsType = {
    count: number,
    maxNumber: number
}

export function Counter(props: CounterPropsType) {
    return <div className="counter">
        <div  className={props.count === props.maxNumber ? "red_number" : ""}>
           <p>{props.count}</p>
        </div>
    </div>
}