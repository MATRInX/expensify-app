import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({expenses}) => (
    <div>
        {
            expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id}{...expense}/>})
            )
        }    
    </div>
);

const mapStateToProps = ({expenses, filters})=> {
    return{
        expenses: selectExpenses(expenses, filters)     
    }
}; 

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state)=>{
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList; 