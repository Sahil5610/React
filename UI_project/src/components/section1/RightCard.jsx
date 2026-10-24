import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    
  return (
    <div className='h-full w-67 shrink-0 relative overflow-hidden bg-amber-800 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img}></img>
    <RightCardContent id={props.id}  tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard
