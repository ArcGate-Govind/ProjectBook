
import {GlobleContext} from '../Context/GlobleState'
import { useContext } from 'react'

const Balance = () => {
  const { transitions} = useContext(GlobleContext)

  const amounts = transitions.map(transaction => transaction.amount);
  localStorage.setItem('items', JSON.stringify(amounts));
  console.log(amounts)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
    
    </div>
  )
}

export default Balance