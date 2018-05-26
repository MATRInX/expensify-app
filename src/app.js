import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';   
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 15400, createdAt: 2500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2300, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 9500, createdAt: 3000 }));

//store.dispatch(setTextFilter('bill'));
//store.dispatch(sortByAmount());
//store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
