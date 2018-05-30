import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expenses, expensesTotal}) => {
    return (
        <div>
            <p>
                Viewing {expenses.length} {expenses.length === 1 ? 'expense ' : 'expenses '} 
                totaling {numeral(expensesTotal / 100).format('0,0[.]00 $')}
            </p>
        </div>
    );
};

const mapStateToProps = ({expenses, filters}) => ({
    expenses: selectExpenses(expenses, filters),
    expensesTotal: selectExpensesTotal(expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);