
import {GlobleContext} from '../Context/GlobleState'
import { useContext } from 'react'

const Transtion = ({transition}) => {
    const { deleteTranstions} = useContext(GlobleContext)
    const sign = transition.amount < 0 ? '-' : '+';
  return (
    <div>
    <li className={transition.amount <0? 'minus':'plus'}>
    {transition.text} <span>{sign}${Math.abs(transition.amount)}</span><button   onClick={()=>deleteTranstions(transition.id)} className="delete-btn">x</button>
  </li>
    </div>
  )
}

export default Transtion