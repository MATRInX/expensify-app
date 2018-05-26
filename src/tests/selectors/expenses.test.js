import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

test('should filter by text value', () => {
    const result = selectExpenses(expenses, {...filters, text: 'e'});
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date value', () => {
    const result = selectExpenses(expenses, {...filters, startDate: moment(0)});
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const result = selectExpenses(expenses, {...filters, endDate: moment(0)});
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const result = selectExpenses(expenses, {...filters, sortBy: 'amount'});
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

// test('should sort by amount and by text filter value', () => {
//     const result = selectExpenses(expenses, {...filters, sortBy: 'amount', text: 'm'});
//     expect(result).toEqual([expenses[1], expenses[0]]);
// });