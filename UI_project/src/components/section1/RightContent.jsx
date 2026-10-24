import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {

  return (
  <div id='right' className="h-full flex flex-nowrap gap-10 rounded-4xl overflow-x-auto w-2/3 p-6">
    {props.users.map(function (user, idx) {
      return (
        <RightCard key={idx} id={idx} img={user.img} tag={user.tag} intro={user.intro} ind={idx}  />
      )
    })}
  </div>
)
}
export default RightContent
