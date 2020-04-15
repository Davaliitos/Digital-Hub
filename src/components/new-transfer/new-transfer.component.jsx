import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAccountBalance} from '../../redux/balance/balance.selectors';
import { createTransaction} from '../../redux/transactions/transactions.actions'
import { addMoney, removeMoney} from './../../redux/balance/balance.actions'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

import XHR from '../../lib/xhr';

import "./new-transfer.style.scss";

class NewTransfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originAccount : '',
      destinationAccount: '',
      amount: '',
      validAccount : undefined,
      validAmount : undefined,
      currentAmount : ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    if(name === 'originAccount'){
      const { balance } = this.props.currentBalance;
      const amount = balance.reduce((accumulator,account) => {
        if(account.account === parseInt(value)){
          accumulator = account.balance.value
        }
        return accumulator
      },0)
      this.setState({currentAmount : amount})
    }

    this.setState({ [name]: value });
  };

  updateBalance = balance => {
    this.setState({balance : balance})
  }

  handleSubmit = event => {
    event.preventDefault();
    const { destinationAccount, amount, originAccount } = this.state;
    const params = {
      fromAccount : originAccount,
      toAccount : destinationAccount,
      amount : amount
    }

    let self = this;
    XHR.createTransfer(params).then(response => {
      const obj = JSON.parse(response.data.config.data)
      const {createTransaction, addMoney, removeMoney} = self.props;
      createTransaction(obj)
      removeMoney(obj)
      addMoney(obj)
    })
}

  clearForm = (event) => {
    event.preventDefault();
    this.setState({destinationAccount: '', amount: '', originAccount: '', validAccount: undefined, validAmount: undefined});
  }

  validateAccount = event => {
    const account = event.target.value;
    const regex =  /^[0-9]{8}$/;
    const valid = regex.test(account)
    this.setState({validAccount : valid})
  }

  validateAmount = event => {
    const amount = event.target.value;
    if(amount > 100000)
    {
      this.setState({validAmount : false})
    }
    else{
      if(amount > this.state.currentAmount){
        this.setState({validAmount : false})
      }
      else{
        this.setState({validAmount : true})
      }
    }
  }

  enableButton = () =>{
    const {validAccount, validAmount, originAccount} = this.state;
    return (validAccount && validAmount && originAccount !== '')
}
  

  render() {
    const { destinationAccount, amount, originAccount, validAccount, validAmount} = this.state;
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
            onBlur={this.validateAccount}
            valid={validAccount}
            errorLabel="Please enter a valid account"
            required
            />
            <FormInput
            type="number"
            name="amount"
            label="Amount"
            value={amount}
            handleChange={this.handleChange}
            onBlur={this.validateAmount}
            valid={validAmount}
            errorLabel="Please enter a valid amount"
            required
            />
            <div className="buttons">
                <CustomButton type="submit" disabled={!this.enableButton()}>Transfer</CustomButton>
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

const mapDispatchToProps = dispatch => ({
  createTransaction : transaction => dispatch(createTransaction(transaction)),
  addMoney : transaction => dispatch(addMoney(transaction)),
  removeMoney : transaction => dispatch(removeMoney(transaction))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTransfer);
