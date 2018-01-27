import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const action = { type: '@@INIT' };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([expenses[0]]);
});

test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if ide not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2xxx'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense', () => {
    const id = '3';
    const updates = {
        description: 'Credit Cardxx',
        note: 'xx',
        amount: 45000,
        createdAt: moment(expenses[2].createdAt).add(6, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], { id, ...updates }]);
});

test('should not edit expense if id not found', () => {
    const id = '3xxx';
    const updates = {
        description: 'Credit Cardxx',
        note: 'xx',
        amount: 45000,
        createdAt: moment(expenses[2].createdAt).add(6, 'days').valueOf()
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
