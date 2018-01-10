import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for empty array', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should return amount from a single expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount / 100);
});

test('should return total amount for all expenses', () => {
  const expensesTotal = (expenses[0].amount + expenses[1].amount + expenses[2].amount) / 100;
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(expensesTotal);
});
