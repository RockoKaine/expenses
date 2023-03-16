//this is a react hook, the have the word use in them. they can only be called inside the funtion using them.
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props){
// this always returns an array with two elements, the current state, and a funtion for updating the state
    // const [title, setTitle] = useState(props.title)

    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </Card>
    )

}

export default ExpenseItem;