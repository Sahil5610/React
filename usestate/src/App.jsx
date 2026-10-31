import React, { useState } from 'react'

const App = () => {
  const [num,setNum]=useState(10)
  function changeVal (){
    if (num==10){
    setNum(30)
    }

    else{
      setNum(10)

    }
  }
  
  return (
    <div>
      <h1>The value of num  is {num}</h1>
      <button onClick={changeVal}>change</button>
    </div>
  )
}

export default App
