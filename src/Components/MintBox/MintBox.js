import { Avatar } from '@material-ui/core'
import React from 'react'
import './MintBox.css';

function MintBox() {
  return (
    <div className='mintBox'>
    <div className='mintBox__info'>
        <Avatar/>
    </div>
    <div className='mintBox__mint'>
        <h5>What is your question or link?</h5>
    </div>
    </div>
  )
}

export default MintBox