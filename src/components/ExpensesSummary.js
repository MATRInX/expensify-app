import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expensesWord = expensesCount.length === 1 ? 'expense ' : 'expenses ';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('0,0[.]00 $');
    return (
        <div>
            <p>
                Viewing {expensesCount} {expensesWord} 
                totaling {formattedExpensesTotal}
            </p>
        </div>
    );
};

const mapStateToProps = ({expenses, filters}) => {
    const visibleExpenses = selectExpenses(expenses, filters)
    const expensesTotal = selectExpensesTotal(visibleExpenses)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal
    }
};

export default connect(mapStateToProps)(ExpensesSummary);