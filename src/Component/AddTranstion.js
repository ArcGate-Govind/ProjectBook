
import React,{useState,useContext}from 'react'
import {GlobleContext} from '../Context/GlobleState'

const AddTranstion = () => {
  const [text,setText] = useState('')
  const [amount, setAmount]=useState('')
  const { addTranstions} =  useContext(GlobleContext)

  const onSubmit = (e) =>{
    e.preventDefault()
    const newTranstion={
      id:Math.floor(Math.random()*100000000),
      text,
      amount:+amount
    }
    
     const allValue = addTranstions(newTranstion)
     
   
  }


  return (
    <div>
    
    <h3>Add new transaction</h3>
    <form >
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label>
        
        <input type="number" onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
      </div>
      <button onClick={(e)=>onSubmit(e)} className="btn">Add transaction</button>
    </form>
    
    </div>
  )
}

export default AddTranstion