import React from 'react'
import Navbar from './navbar.jsx'
import Page1Content from './page1Content.jsx'


const Section_1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <Page1Content users={props.users}/>
      
    </div>
  )
}

export default Section_1