import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={195}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 2 expeneses', () => {
    const wrapper = shallow(
    <ExpensesSummary 
        expensesCount={13}
        expensesTotal={2344695}
    />);
    expect(wrapper).toMatchSnapshot();
});