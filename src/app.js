import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 1000, createdAt: 50 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 60 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 30000, createdAt: 6 }));
//store.dispatch(setTextFilter('bill'));

const state = store.getState();
console.log(state);
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
