import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props)=>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)

        //here we are one state instead of multiple. we have to destructure the old data and then update the changed value.
        //if we don't use the old data on the update it will gwt tossed out.
        //
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })


        // it is better to use this approach using an annonymous function in the set state, if we are using a singular state. the updates are scheduled by react, 
        // because of this when the updates do go through, especially with a lot of state updates, you may be relying on old data.
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // });

        console.log(event.target.value)
    }
    const amounChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        console.log(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        console.log(event.target.value)
    }


    const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            // using new Date to create a new date component and then setting it to the entered date to translate it.
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

    }
    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* because there is nothing inbetween the input tag, we can make it self closing */}
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amounChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;