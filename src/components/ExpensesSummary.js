import React from 'react';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';

export const ExpensesSummary = (props) => (
  <div>
    { props.expensesCount === 0 ? '' : `Viewing ${props.expensesCount} expense${props.expensesCount === 1 ? '' : 's'} totalling ${numeral(props.expensesTotal).format('$0,0.00')}`}
  </div>
);

const mapStateToProps = (state) => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
      expensesCount: selectedExpenses.length,
      expensesTotal: selectExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
