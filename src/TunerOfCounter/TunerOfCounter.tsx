import React, {ChangeEvent} from 'react'
/*import './../App.css'*/
import s from "./TunerOfCounter.module.css"

export type TunerOfCounter = {
    id: string
    title: string
    setNumber: (number: number | string) => void
    number: { max: number | string, start: number | string }
    setCount: (count: number | string) => void

    finalInputClassName: string
}

export function TunerOfCounter({id, title, setNumber, number, setCount, finalInputClassName}: TunerOfCounter) {

    let onChangeInputTuner = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = Number(e.currentTarget.value)

        //Функция для сравнения значения из инпута со значением пришедшим из стейта
        //compare - функция для обозначения способа сравнения двух значений
        /*let checkedNumber = (inputValue: number, num: number | string, compare: (a: number, b: number) => boolean) => {
            let n = Number(num)

            if (!isNaN(n) && (inputValue < 0 || compare(inputValue,  n))) {
                props.setCount('Incorrect value')
            }
        }
        checkedNumber(inputValue, props.number.max, (a, b) => a>=b)*/

        //Функция возвращает проверку в зависимости от входящего id
        let checkedNumber = (inputValue: number, num: number | string, id: string) => {
            switch (id) {
                case "1":
                    return inputValue < 0 || inputValue <= num
                case "2":
                    return inputValue < 0 || inputValue >= num
                default:
                    break
            }
        }

        //Валидация для инпута
        if (checkedNumber(inputValue, number.start, id) || checkedNumber(inputValue, number.max, id)) {
            setCount('Incorrect value')

        } else {
            setCount("enter values and press 'set'")
        }

        setNumber(inputValue)
    }

    /*console.log(finalInputClassName)*/
    /*const finalInputClassName = error ? `${s.errorInput} ${className}` : s.superInput;*/
    return (

        <div className={s.tuner_item}>
            <label htmlFor="1">
                {title}
            </label>
            <input
                className={((number.max <= number.start) && (number.max !== 0 || number.start !== 0) ? `${s.error}` : finalInputClassName)}
                id="1" type="number" onChange={onChangeInputTuner}/>
        </div>
    )
}