import React,{useContext} from 'react'
import Transtion from './Transtion'
import {GlobleContext} from '../Context/GlobleState'

const TransctionList = () => {
   const { transitions} = useContext(GlobleContext)
  return (
    <>
    
    
    <h3>History</h3>
    <ul id="list" class="list">
    {transitions.map(transition =>( <Transtion  key={transition.id} transition={transition} />))}
      
    </ul>
    
    </>
  )
}

export default TransctionList