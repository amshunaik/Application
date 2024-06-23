import React from 'react';
import classes from './input.module.css'

const Input=React.forwardRef((props,ref) => {
    return(
        
        <div className={classes.input}>
            <button htmlFor={props.input.id} className={classes.bt1}>{props.label}</button>
            <input ref={ref}{...props.input} />
        </div>

    );

});
export default Input;