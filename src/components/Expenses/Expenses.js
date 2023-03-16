import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);

  }
  const filteredExpenses = props.item.filter(x =>{
     return x.date.getFullYear().toString() === filteredYear;
   })
    
   let expensesContent = <p className='expenses-text'> No Expenses found</p>;
   if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((x) => (<ExpenseItem key={x.id} title={x.title} date={x.date} amount={x.amount}/>))
   }

      return (

        <div>
          <Card className="expenses ">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />


          {/* 
            doing it as below is aven cleaner for our JSX code, we set the content to the value we want as default and if our conditonal is met then we 
            change the content elsewhere to maintain readability 
          */}
          {expensesContent}

            {/* 
              it is common to use ternary like below. if the condition is true the part after the && will be rendered. it works the same 
              as the other way of doing it, but this way is just a bit cleaner of a way 

            {filteredExpenses.length === 0 && <p className="expenses-text">No Expenses found</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map((x) => (<ExpenseItem key={x.id} title={x.title} date={x.date} amount={x.amount}/>))}

            */}
            {/* {

            filteredExpenses.length === 0 ? (<p>There are no expenses.</p>) : (
            filteredExpenses.map((x) => (<ExpenseItem key={x.id} title={x.title} date={x.date} amount={x.amount}/>)))} 
            
            */}

          
            
          
          
            </Card>
        </div>
        
      );
}

export default Expenses;