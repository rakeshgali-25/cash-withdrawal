import './index.css'

const DenominationItem = props => {
  const {cash, deductCash} = props

  const buttonPressed = () => {
    deductCash(cash)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={buttonPressed}>
        {cash}
      </button>
    </li>
  )
}

export default DenominationItem
