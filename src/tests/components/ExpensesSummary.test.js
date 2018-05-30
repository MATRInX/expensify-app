import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} expensesTotal={195}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 2 expeneses', () => {
    const wrapper = shallow(
    <ExpensesSummary 
        expenses={[expenses[0], expenses[2]]}
        expensesTotal={4695}
    />);
    expect(wrapper).toMatchSnapshot();
});