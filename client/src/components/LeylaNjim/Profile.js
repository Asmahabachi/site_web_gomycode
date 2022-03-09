import React from 'react'
import {useSelector} from 'react-redux'
import ListePersonnes from './listePersonnes'


function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('current_user'))

  return (
    <div>
      {currentUser.role != 'admin' ? 'this is a guest' : 'this is an admin'}

<ListePersonnes/>
      
    </div>
  )
}

export default Profile