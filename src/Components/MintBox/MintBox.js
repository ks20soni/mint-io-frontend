import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../feature/userSlice';
import './MintBox.css';

function MintBox() {
  const user = useSelector(selectUser);
  return (
    <div className='mintBox'>
    <div className='mintBox__info'>
        <Avatar src={user?.photo}/>
    </div>
    <div className='mintBox__mint'>
        <h5>What is your question or link?</h5>
    </div>
    </div>
  )
}

export default MintBox