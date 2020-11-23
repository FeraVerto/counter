import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import Button from "./Button/Button";
import {TunerOfCounter} from "./TunerOfCounter/TunerOfCounter";
import {NavLink} from "react-router-dom";
import s from "./TunerOfCounter/TunerOfCounter.module.css";

function App() {

    let [maxNumber, setMaxNumber] = useState<number | string>(0)
    let [startNumber, setStartNumber] = useState<number | string>(0)
    let [count, setCount] = useState<number | string>("enter values and press 'set'")

    let classNameMax = maxNumber < 0  ? `${s.error_max}` : `${s.input}`;
    let classNameStart = startNumber < 0 ? `${s.error_start}` : `${s.input}`;


    let objNumber = {
        max: maxNumber,
        start: startNumber
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

        <div className="App">

            <div className="tuner_block">
                {/*передаем в компонент с инпутом функции из локального стейта, setMaxNumber и setStartNumber*/}
                <div className="tuner">
                    <TunerOfCounter id="1"
                                    title={"max value:"}
                                    setNumber={setMaxNumber}
                                    number={objNumber}
                                    setCount={setCount}

                                    finalInputClassName={classNameMax}
                    />
                    <TunerOfCounter id="2"
                                    title={"start value:"}
                                    setNumber={setStartNumber}
                                    number={objNumber}
                                    setCount={setCount}

                                    finalInputClassName={classNameStart}
                    />
                </div>
                <div className="button_block">
                    <Button onClick={set} title={"set"}
                            disabled={(maxNumber < 0 && startNumber < 0) || (maxNumber <= startNumber)}/>
                </div>
            </div>

            <div className="count_block">
                <Counter count={count} maxNumber={maxNumber} startNumber={startNumber}/>
                <div className="button_block">
                    <Button onClick={increment} title={"inc"} disabled={count === maxNumber}/>
                    <Button onClick={reset} title={"reset"} disabled={count === startNumber}/>
                    <Button onClick={set} title={"set"} disabled={maxNumber < 0 && startNumber < 0}/>
                </div>
            </div>

        </div>
    );
}

export default App;
