import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const action = { type: '@@INIT'};
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test('should add expense to state', () => {
    const expense = {
        id: '109',
        description: 'Rent',
        note: 'Last month',
        amount: 150000,
        createdAt: moment(0).add(5, 'days')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense  
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense with right id', () => {
    const id = expenses[0].id;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense with wrong id', () => {
    const id = '5';
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense with right id', () => {
    const id = expenses[1].id;
    const amount = 145000;
    const note = 'Small discount';
    const updates = {
        amount,
        note
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {...expenses[1], ...updates}, expenses[2]]);    
});

test('should not edit expense with wrong id', () => {
    const id = '5';
    const amount = 145000;
    const note = 'Small discount';
    const updates = {
        amount,
        note
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});