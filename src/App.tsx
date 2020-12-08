import React, {useState} from 'react';
import s from './App.module.css';
import {TunerBlock} from "./TunerBlock/TunerBlock";
import {Route} from "react-router-dom";
import {CounterBlock} from "./CounterBlock/CounterBlock";
import {restoreState, saveState} from "./localStorage/localStorage";

function App() {
    //стейт для максимального и стартового числа
    let [maxNumber, setMaxNumber] = useState<number | string>(restoreState().max)
    let [startNumber, setStartNumber] = useState<number | string>(restoreState().min)
    //стейт для выведения ошибок в каждом инпуте по отдельности
    let [classMax, setClassMax] = useState<string>(`${s.input}`)
    let [classStart, setClassStart] = useState<string>(`${s.input}`)
    //стейт для числа, которое выводится в Counter
    let [count, setCount] = useState<number | string>("enter values and press 'set'")
    //стейт для дизэйбла кнопки set при ошибке или после установки значений в maxNumber и startNumber
    let [disabled, setDisabled] = useState<boolean>(false)

    let error = `${s.error}`
    let input = `${s.input}`

    //Функция для сравнения значения инпутов  max и start
    let compare = (max: string | number, start: string | number) => {
        if (max <= start || (max < 0 || start < 0)) {
            setCount('Incorrect value')
            if (max === start) {
                setClassStart(error)
                setClassMax(error)
                setDisabled(true)
            }
        } else {
            setCount("enter values and press 'set'")
            setClassStart(input)
            setClassMax(input)
            setDisabled(false)
        }
    }

    //Функции compareMax и compareStart - обертка для функции compare,
    //которая принимает значение из инпута и отдает для сравнения compare
    let compareMax = (value: string | number) => {
        compare(value, startNumber)
        //Валидация для инпута "max value..."
        if(value < 0 || value <= startNumber) {
            setClassMax(error)
            setDisabled(true)
        } else {
            setClassMax(input)
            setDisabled(false)
        }
    }

    let compareStart = (value: string | number) => {
        compare(maxNumber, value)
        //Валидация для инпута "start value..."
        if(value < 0 || value >= maxNumber) {
            setClassStart(error)
            setDisabled(true)
        } else {
            setClassStart(input)
            setDisabled(false)
        }
    }

    function increment() {
        if (count < maxNumber) {
            //не изменяем state напрямую!
            let newValue = Number(count) + 1
            setCount(newValue)
        }
    }

    function reset() {
        if (count > startNumber) {
            setCount(startNumber)
        }
    }

//устанавливаем стартовое значение в counter
    function set() {
        setCount(startNumber)
        setDisabled(true)
        saveState(maxNumber, startNumber)
    }

    return (
        <div className={s.App}>
            <Route exact path="/tuner" render={() => <TunerBlock setMaxNumber={setMaxNumber}
                                                                 compareMax={compareMax}
                                                                 classMax={classMax}
                                                                 setStartNumber={setStartNumber}
                                                                 compareStart={compareStart}
                                                                 classStart={classStart}
                                                                 set={set}
                                                                 disabled={disabled}
            />}/>
            <Route exact path="/counter" render={() => <CounterBlock count={count}
                                                                     maxNumber={maxNumber}
                                                                     startNumber={startNumber}
                                                                     increment={increment}
                                                                     reset={reset}
                                                                     set={set}
            />}/>
        </div>
    );
}

export default App;