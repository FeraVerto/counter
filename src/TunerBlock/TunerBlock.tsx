import React from 'react';
import s from "../TunerBlock/TunerBlock.module.css";
import {TunerOfCounter} from "./TunerOfCounter/TunerOfCounter";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

export type TunerBlockType = {
    setMaxNumber: (maxNumber: number | string) => void
    compareMax: (value: string | number) => void
    classMax: string
    setStartNumber: (startNumber: number | string) => void
    compareStart: (value: string | number) => void
    classStart: string
    set: () => void
    disabled: boolean
}


export function TunerBlock({setMaxNumber, compareMax, classMax, setStartNumber, compareStart, classStart, set, disabled}: TunerBlockType) {
    return (
        <div className={s.tuner_block}>
            <div className={s.tuner}>

                <TunerOfCounter
                    title={"max value:"}
                    setNumber={setMaxNumber}
                    compareNumbers={compareMax}
                    classNameInput={classMax}
                />

                <TunerOfCounter
                    title={"start value:"}
                    setNumber={setStartNumber}
                    compareNumbers={compareStart}
                    classNameInput={classStart}
                />

            </div>
            <div className={s.button_block}>
                <NavLink to="/counter"><Button onClick={set}
                                               title={"set"}
                                               disabled={disabled}
                /></NavLink>
            </div>
        </div>
    )
}