import React, {useState} from 'react';
// import Logo from '../../Assets/mint.svg';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlaylistOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Search from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import './Header.css';
import Logo from '@material-ui/icons/ChatBubble';
import { Modal } from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import 'react-responsive-modal/styles.css';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Input } from '@material-ui/core';


function Header() {

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [inputUrl, setInputUrl] = useState('');
    const Close = <CloseIcon/>;

    return (
        <div className='mHeader'>
            <div className='mHeader-content'>
                <div className='mHeader__logo'>
                    <Logo/>
                        </div>
                    <div className='mHeader__icons'>
                        <div className='mHeader__icon'><HomeIcon /></div>
                        <div className='mHeader__icon'><FeaturedPlaylistOutlinedIcon /></div>
                        <div className='mHeader__icon'><AssignmentTurnedInOutlinedIcon /></div>
                        <div className='mHeader__icon'><PeopleAltOutlinedIcon /></div>
                        <div className='mHeader__icon'><NotificationsOutlinedIcon /></div>
                    </div>
                    <div className='mHeader__input'>
                        <Search />
                        <input type="text" placeholder='Search Questions' />
                    </div>
                    <div className='mHeader__Rem'>
                        <Avatar />
                    </div>
                    <Button className='mHeader__addQues'
                    onClick={() => setIsModalOpen(true)}>Add Question</Button>
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
                        <div className='modal__title'>
                            <h5>Add Question</h5>
                            <h5>Share Link</h5>
                        </div>
                        <div className='modal__info'>
                            <Avatar className='avatar'/>
                            <div className='modal__scope'>
                                <PeopleAltOutlinedIcon/>
                                <p>Public</p>
                                <ExpandMore/>
                            </div>
                        </div>
                        <div className='modal__field'>
                            <Input type="text" placeholder="Start your question with 'what', 'how', 'why', etc."/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                            <input type= 'text'
                            value={inputUrl}
                            onChange = {(e) => setInputUrl(e.target.value)}
                            style={{
                                margin: "5px 0",
                                border: "1px solid lightgray",
                                padding: "10px",
                                outline: "2px solid #000",
                            }} 
                            placeholder = "Optional: include a link that gives content"/>
                            {
                                inputUrl !== "" &&  <img 
                                style={{
                                    height: "40vh",
                                    objectFit: "contain",
                                }}
                                src={inputUrl} alt='displayImage' />
                            }
                            </div>
                        </div> 
                        <div className='modal__buttons'>
                            <button className='cancel' onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button className='add'
                            type='submit' 
                            onClick={() => setIsModalOpen(false)}>
                                Add Question
                            </button>
                        </div>
                    </Modal>
            </div>
        </div>
    )
}

export default Header;