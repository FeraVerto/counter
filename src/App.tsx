import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter/Counter";
import Button from "./Button/Button";
import {TunerOfCounter} from "./TunerOfCounter/TunerOfCounter";

function App() {

    let [maxNumber, setMaxNumber] = useState<number | string>(0)
    let [startNumber, setStartNumber] = useState<number | string>(0)
    let [count, setCount] = useState<number | string>("enter values and press 'set'")
    let [errorMax, setErrorMax] = useState<string>(`${s.input}`)
    let [errorStart, setErrorStart] = useState<string>(`${s.input}`)

    let error = `${s.error}`
    let input = `${s.input}`

    //Функция для сравнения значения инпутов  max и start
    let compare = (max: string | number, start: string | number) => {
        if (max <= start || (max < 0 || start < 0)) {
            setCount('Incorrect value')
            if (max === start) {
                setErrorStart(error)
                setErrorMax(error)
            }
        } else {
            setCount("enter values and press 'set'")
            setErrorStart(input)
            setErrorMax(input)
        }
    }

    //Функции compareMax и compareStart - обертка для функции compare,
    //которая принимает значение из инпута и отдает для сравнения compare
    let compareMax = (value: string | number) => {
        compare(value, startNumber)
        //Валидация для инпута "max value..."
        value < 0 || value <= startNumber
            ? setErrorMax(error)
            : setErrorMax(input)
    }

    let compareStart = (value: string | number) => {
        compare(maxNumber, value)
        //Валидация для инпута "start value..."
        value < 0 || value >= maxNumber
            ? setErrorStart(error)
            : setErrorStart(input)
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
    }

    return (

        <div className={s.App}>

            <div className={s.tuner_block}>
                <div className={s.tuner}>

                    <TunerOfCounter
                        title={"max value:"}
                        setNumber={setMaxNumber}
                        compareNumbers={compareMax}
                        error={errorMax}
                    />

                    <TunerOfCounter
                        title={"start value:"}
                        setNumber={setStartNumber}
                        compareNumbers={compareStart}
                        error={errorStart}
                    />

                </div>
                <div className={s.button_block}>
                    <Button onClick={set} title={"set"}
                            disabled={(maxNumber < 0 || startNumber < 0) || (maxNumber <= startNumber)}/>
                </div>
            </div>

            <div className={s.count_block}>
                <Counter count={count} maxNumber={maxNumber} startNumber={startNumber}/>
                <div className={s.button_block}>
                    <Button onClick={increment} title={"inc"} disabled={count === maxNumber}/>
                    <Button onClick={reset} title={"reset"} disabled={count === startNumber}/>
                </div>
            </div>

        </div>
    );
}

export default App;