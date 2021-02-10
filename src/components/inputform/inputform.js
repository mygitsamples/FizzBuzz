import React,{useState} from 'react'
import FizzBuzz from '../fizzbuzz/fizzbuzz'
import './inputform.css'

function Inputform (props) {
    const [txtArray,setTxtArray]=useState("")
    const [isSubmitted,setIsSubmitted]=useState(false)
    const handleSubmit=()=>{
         setIsSubmitted(true)
    }
    const handleOnChange=(e)=>{
        setIsSubmitted(false)
        setTxtArray(e.target.value)
        
    }
    const handleClear=(e)=>{
        setIsSubmitted(false)
        setTxtArray("")
    }
    return(
        <div className="inputForm">
            
        <label>Enter Values:</label>
        <input className="txtArray" type="text" onChange={handleOnChange} value={txtArray} placeholder="comma seperated values.."/>
      <div>
        <button className="btnSubmit" disabled={!txtArray} onClick={handleSubmit}>Submit</button>
        <span className="btnSpan"/>
        <button className="btnClear" disabled={!txtArray} onClick={handleClear}>Clear</button>
        </div>
       {isSubmitted && (<FizzBuzz props={txtArray}/>)} 
        </div>
        
    )
}

export default Inputform