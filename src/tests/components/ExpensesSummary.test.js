import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render summary for single expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={expenses[0].amount / 100} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render summary for multiple expenses', () => {
  const expensesTotal = (expenses[0].amount + expenses[1].amount + expenses[2].amount) / 100;
  const wrapper = shallow(<ExpensesSummary expensesCount={expenses.length} expensesTotal={expensesTotal} />);
  expect(wrapper).toMatchSnapshot();
});
