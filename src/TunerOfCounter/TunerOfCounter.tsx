import React from 'react'
import './../App.css'

export type TunerOfCounter = {}

export function TunerOfCounter(props: TunerOfCounter) {
    return (
        <div className="tuner">
            <div className="tuner_item">
                <label htmlFor="max">
                    max value:
                </label>
                <input id="max" type="number"/>
            </div>
            <div className="tuner_item">
                <label htmlFor="start">
                    start value:
                </label>
                <input id="start" type="number"/>
            </div>
        </div>
    )
}