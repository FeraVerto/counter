import React from 'react';
/*import s from "../App.module.css";*/
import s from "./CounterBlock.module.css"
import {Counter} from "./Counter/Counter";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

export type CounterBlockType = {
    count: number | string
    maxNumber: number | string
    startNumber: number | string
    increment: () => void
    reset: () => void
    set: () => void
}

export function CounterBlock({count, maxNumber, startNumber, increment, reset, set}: CounterBlockType) {
    return (
        <div className={s.count_block}>
            <Counter count={count} maxNumber={maxNumber} startNumber={startNumber}/>
            <div className={s.button_block}>
                <Button onClick={increment} title={"inc"} disabled={count === maxNumber}/>
                <Button onClick={reset} title={"reset"} disabled={count === startNumber}/>
                <NavLink to="/tuner"><Button onClick={set} title={"set"} disabled={false}/></NavLink>
            </div>
        </div>
    )
}