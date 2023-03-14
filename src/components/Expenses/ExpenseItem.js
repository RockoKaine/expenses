//this is a react hook, the have the word use in them. they can only be called inside the funtion using them.
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props){
// this always returns an array with two elements, the current state, and a funtion for updating the state
    const [title, setTitle] = useState(props.title)

    const clickHandler = ()=>{
        //calling the returned function and updating it
        setTitle("Updated!")
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )

}

export default ExpenseItem;