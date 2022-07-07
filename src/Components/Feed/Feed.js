import React from 'react'
import MintBox from '../MintBox/MintBox'
import Post from '../Post/Post';
import Widget from '../Widget/Widget';
import './Feed.css';

function Feed() {
  return (
    <div className='feed'>
        <MintBox/>
        <Post/>
    </div>
  )
}

export default Feed;