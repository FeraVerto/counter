import React from 'react';

type ButtonPropsType = {
    onClick: () => void,
    title: string,
    disabled: boolean
}


function Button(props: ButtonPropsType) {

    return (
        <button onClick={props.onClick}
                disabled={props.disabled}>{props.title}</button>
    );
}

export default Button;
