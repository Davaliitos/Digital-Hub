import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from 'moment'

import { selectAccountBalance } from "../../redux/balance/balance.selectors";
import {
  selectTransactionPerAccount,
  selectTransactionHistoryPerAccount,
} from "../../redux/transactions/transactions.selectors";

import PieChart from "../../components/pie-chart/pie-chart.component";
import CustomTable from "../../components/custom-table/custom-table.component";
import CustomTableRow from "../../components/custom-table-row/custom-table-row.component";
import CustomTableCell from "../../components/custom-table-cell/custom-table-cell.component";
import NewTransfer from "../../components/new-transfer/new-transfer.component";

import "./transfer.style.scss";

const TransferPage = ({
  accountsBalance,
  transactionsPerAccount,
  transactionsHistoryPerAccount,
}) => (
  <div className="transfer-page">
    <div className="first-row">
      <NewTransfer/>
      <PieChart data={transactionsPerAccount} />
    </div>
    {Object.keys(transactionsHistoryPerAccount).map((account,index) => {
      return (
        <div key={index}>
          <CustomTable>
            <CustomTableRow>
              <CustomTableCell>Origin Account</CustomTableCell>
              <CustomTableCell>Destination Account</CustomTableCell>
              <CustomTableCell>Transfer Date</CustomTableCell>
              <CustomTableCell>Amount</CustomTableCell>
            </CustomTableRow>
            {
                Object.values(transactionsHistoryPerAccount[account]).map((transaction, index2) => (
                    <CustomTableRow key={index2}>
                        <CustomTableCell>{account}</CustomTableCell>
                        <CustomTableCell>{transaction.toAccount}</CustomTableCell>
                        <CustomTableCell>{moment(transaction.sentAt).format("YYYY-MM-DD")}</CustomTableCell>
                        <CustomTableCell>{transaction.amount.value}</CustomTableCell>
                    </CustomTableRow>
                ))
            }
          </CustomTable>
        </div>
      );
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  accountsBalance: selectAccountBalance,
  transactionsPerAccount: selectTransactionPerAccount,
  transactionsHistoryPerAccount: selectTransactionHistoryPerAccount,
});

export default connect(mapStateToProps)(TransferPage);
