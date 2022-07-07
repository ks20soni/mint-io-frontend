import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import Button from '../Button';
import './Post.css';
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined';
import ReapeatOutlined from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlined from '@material-ui/icons/ChatBubbleOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Post() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Close = <CloseIcon/>

  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar/>
            <h4>User Name</h4>
            <small>Timestamp</small>
        </div>
        <div className='post__body'>
        <div className='post__question'>
            <p>
                This is a test question.
            </p>
            <button className='post_btnAnswer' onClick={() => setIsModalOpen(true)}>Answer</button>
            <Modal 
            open = {isModalOpen}
                    closeIcon = {Close}
                    onClose = {() => setIsModalOpen(false)}
                    closeOnEsc 
                    center
                    closeOnOverlayClick = {false}
                    style = {{
                        overlay : {
                            height: "auto",
                        },
                    }}
            >
            <div className='modal__question'>
                <h1>This is test question</h1>
                <p>asked by {" "} <span className='name'>Username</span> {" "} on <span className='name'>Timestamp</span></p>
            </div>
            <div className='modal__answer' style={{
                width: "100%"
            }}>
                <ReactQuill 
                    placeholder='Enter your answer'
                />
            </div>
            <div className='modal__button'>
            <button className='cancel' onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button className='add'
                            type='submit' 
                            onClick={() => setIsModalOpen(false)}>
                                Add Answer
                            </button>
            </div>
            </Modal>
            </div>
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <ArrowUpwardOutlined/>
                <ArrowDownwardOutlined/>
            </div>
            <ReapeatOutlined/>
            <ChatBubbleOutlined/>
            <div className='post__footerLeft'>
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>
        </div>
        <p style={{
            color: "rgba(0,0,0,0.5)",
            fontSie: "12px",
            fontWeight: "bold",
            margin: "10px 0",
        }}>1 Answer</p>
        <div style={{
            margin: "5px 0px 0px 0px",
            padding: "5px 0px 0px 20px",
            borderTop: "1px solid lightgray",
        }} className='post__answer'>

        
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
        }} className='post-answer-container'>
            <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#888"
        }} className='post-answered'>
                <Avatar/>
                <div style={{
                    margin: "0px 10px"
                }} className='post-info'>
                    <p>
                        UserName
                    </p>
                    <span>
                        Timestamp
                    </span>
                </div>
            </div>
            <div className='post-answer'>
                <p>This is test answer</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Post