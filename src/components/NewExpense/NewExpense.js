import './NewExpense.css'
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{


    const [isFormVisible, setIsFormVisible] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData =  {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //we are calling props.onAddExpense from a function we defined in App.js
        props.onAddExpense(expenseData)
        setIsFormVisible(false);
    };

    const addExpenseHandler = () =>{
        setIsFormVisible(true) 
    }

    const cancelExpenseHandler = () =>{
        setIsFormVisible(false)
    }
    
    const addNewExpenseBtn = (
        <div className="new-expense__action">
            <button onClick={addExpenseHandler}>Add New Expense</button>
        </div>
    )

    return (
        <div className="new-expense">
            {/* 
                here because we define the onSaveExpenseData prop, we can then have access to the function outisde this component to its parent component
            */}
            <div>
            {!isFormVisible && addNewExpenseBtn}
            {isFormVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseHandler}/>}
        </div>
            
        </div>
    )
}

export default NewExpense;