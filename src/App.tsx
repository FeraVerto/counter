import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import Button from "./Button/Button";
import {TunerOfCounter} from "./TunerOfCounter/TunerOfCounter";

function App() {

    let [count, setCount] = useState(0)
    let maxNumber = 5
    let minNumber = 0

    function increment() {
        if (count < maxNumber) {
            //не изменяем state напрямую!
            let newValue = count + 1
            setCount(newValue)
        }
    }

    function reset() {
        if (count > minNumber) {
            setCount(minNumber)
        }
    }

    return (
        <div className="App">
            <div className="tuner_block">
                <TunerOfCounter/>
                <div  className="button_block">
                    {/*Логика скопирована с предыдущей кнопки*/}
                    <Button onClick={increment} title={"set"} disabled={count === maxNumber}/>
                </div>
            </div>
            <div className="count_block">
                <Counter count={count} maxNumber={maxNumber}/>
                <div className="button_block">
                    <Button onClick={increment} title={"inc"} disabled={count === maxNumber}/>
                    <Button onClick={reset} title={"reset"} disabled={count === minNumber}/>
                </div>
            </div>
        </div>
    );
}

export default App;
