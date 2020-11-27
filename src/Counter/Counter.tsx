import React from 'react'
import s from './Count.module.css'

export type CounterPropsType = {
    count: number | string,
    maxNumber: number | string,
    startNumber: number | string
}

export function Counter(props: CounterPropsType) {
    return <div className={s.counter}>
        <div  className={props.count === props.maxNumber && props.count !== 0 ? "red_number" : ""}>
           <p>{props.count}</p>
        </div>
    </div>
}