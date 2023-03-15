import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData =  {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //we are calling props.onAddExpense from a function we defined in App.js
        props.onAddExpense(expenseData)
    };

    return (
        <div className="new-expense">
            {/* 
                here because we define the onSaveExpenseData prop, we can then have access to the function outisde this component to its parent component
            */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;