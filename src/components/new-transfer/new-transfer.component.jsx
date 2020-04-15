import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAccountBalance} from '../../redux/balance/balance.selectors';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

import XHR from '../../lib/xhr';

import "./new-transfer.style.scss";

class NewTransfer extends React.Component {
  constructor() {
    super();
    this.state = {
      originAccount : '',
      destinationAccount: '',
      amount: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { destinationAccount, amount, originAccount } = this.state;
    const params = {
      fromAccount : originAccount,
      toAccount : destinationAccount,
      amount : amount
    }
    XHR.createTransfer(params).then(response => {
      console.log(response)
    })
}

  clearForm = (event) => {
    event.preventDefault();
    this.setState({destinationAccount: '', amount: '', originAccount: ''});
  }

  render() {
    const { destinationAccount, amount, originAccount } = this.state;
    const { balance } = this.props.currentBalance;
    const options = balance.reduce((accumulator, account) => {
      const ac = {key: account.account, value: account.balance.currency + ' ' + account.balance.value}
      accumulator.push(ac)
      return accumulator;
    },[])

    return (
      <div className="transfer">
        <div className="transfer-content">
          <h2>Create New Transfer</h2>
          <form onSubmit={this.handleSubmit}>
            <CustomDropdown options={options} value={originAccount} name="originAccount" handleChange={this.handleChange} required/>
            <FormInput
            type="number"
            name="destinationAccount"
            label="Destination Account"
            value={destinationAccount}
            handleChange={this.handleChange}
            required
            />
            <FormInput
            type="number"
            name="amount"
            label="Amount"
            value={amount}
            handleChange={this.handleChange}
            required
            />
            <div className="buttons">
                <CustomButton type="submit">Transfer</CustomButton>
                <CustomButton onClick={this.clearForm}>Cancel</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentBalance : selectAccountBalance
})

export default connect(mapStateToProps)(NewTransfer);
