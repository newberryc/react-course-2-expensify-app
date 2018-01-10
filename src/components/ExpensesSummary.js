import React from 'react';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseWord = (expensesCount === 1 ? 'expense' : 'expenses');

  return (
    <div>
      <h1>{`Viewing ${expensesCount} ${expenseWord} totalling ${formattedExpensesTotal}`}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
      expensesCount: selectedExpenses.length,
      expensesTotal: selectExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
