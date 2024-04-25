import { useCallback, useRef, useState,useEffect } from 'react'

import './App.css'


export default function App() {
const [length, setlength] = useState(8);
const[char, setChar] = useState(false);
const[Number, setNumber] = useState(false);
const [password, setPassword] = useState('')
  const password_generator = useCallback(() =>{
    let pass = ""
    let char
    let str = "ABCDEFGHJKLZXCVBNMabcqwertyuioplkjhgfdsazxcvbnm"
    if(Number=== true) str += "1,2,3,4,5,6,7,8,9,0";
    if(char=== true) str += "@#$%&*";
   

    for (let i = 0; i < length; i++) {
      char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length, char, Number, password])

  useEffect(()=>{
    password_generator()
  },[length,char,Number])

  let  cpassword = useRef(null)

  const copyPassword = useCallback(()=>{
    cpassword.current?.select();
    window.navigator.clipboard.writeText(password)
    
  },[password])
   
  return (
    <>
  <div >
    <div >
    <button onClick={copyPassword}>Copy</button>

      <input type="text" value={password} placeholder='password' readOnly   ref={cpassword}/>
      
    </div> 
    <div >
    <div >
        <input type="range" 
        min= {6}
        max= {100} 
        value={length}
        className='cursor-pointer'
        onChange = {(e)=>{setlength(e.target.value)}}
        />
        <label >length:{length}</label>

      </div>
    </div> 
    <div>
    <div >
        <input type="checkbox"
        defaultChecked ={Number} 
        id= "numberInput"       
        onChange = {(e)=>{setNumber((pre)=> !pre)}}
        />
        <label >Number</label>

      </div>
    </div> 
    <div >
    <div >
        <input type="checkbox"
        defaultChecked ={char} 
        id= "charinput"  

        onChange = {(e)=>{setChar((pre)=> !pre)}}
       
        />
        
        <label >character</label>

      </div>
    </div> 
   
  </div>
 
</>
  
  )
}