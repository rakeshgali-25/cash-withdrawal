import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deductCash = cash => {
    this.setState(prevState => ({amount: prevState.amount - cash}))
  }

  render() {
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="letter">s</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="amount-container">
            <p className="heading">Your Balance</p>
            <div className="small">
              <p className="amount">{amount}</p>
              <p className="para">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="para2">Withdraw</p>
            <p className="heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="button-container">
              <DenominationItem
                cash={50}
                key={1}
                deductCash={this.deductCash}
              />
              <DenominationItem
                cash={100}
                key={2}
                deductCash={this.deductCash}
              />
              <DenominationItem
                cash={200}
                key={3}
                deductCash={this.deductCash}
              />
              <DenominationItem
                cash={500}
                key={4}
                deductCash={this.deductCash}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
