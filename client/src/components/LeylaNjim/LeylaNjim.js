import React from 'react'
import {useSelector} from 'react-redux'



function LeylaNjim() {
  const currentUser = useSelector(state => state.UserReducer.currentUser)

  return (
    <div>
      {currentUser.role != 'admin' ? 'this is a guest' : 'this is admin'}
    </div>
  )
}

export default LeylaNjim