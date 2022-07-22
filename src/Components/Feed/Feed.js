import React, { useEffect, useState } from 'react'
import MintBox from '../MintBox/MintBox'
import Post from '../Post/Post';
import Widget from '../Widget/Widget';
import './Feed.css';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('api/questions').then((res) => {
      console.log(res.data.reverse());
      setPosts(res.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  return (
    <div className='feed'>
        <MintBox/>
        {
          posts.map((post, index) => (<Post key= {index} post = {post}/>))
        }
        {/* <Post/> */}
    </div>
  )
}

export default Feed;