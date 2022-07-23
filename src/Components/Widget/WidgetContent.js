import React from 'react'
import './WidgetContent.css';

function WidgetContent() {
  return (
    <div className='wdiget__contents'>
      <div className='widget__content'>
        <img src='https://res.cloudinary.com/dbnriwv0g/image/upload/v1658567303/Mint-io/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua_dys9cu.jpg' alt='' />
        <div className='widget__contentTitle'>
          <h5>
            Mobile App programmer
          </h5>
          <p>The best Mobile App Development company</p>
        </div>
      </div>
      <div className='widget__content'>
        <img src='https://res.cloudinary.com/dbnriwv0g/image/upload/v1658567500/Mint-io/127-1272123_web-application-development-icon-web-application-icon-png_yjizz9.png' alt='' />
        <div className='widget__contentTitle'>
          <h5>
            Web App programmer
          </h5>
          <p>The best Mobile App Development company</p>
        </div>
      </div>
      <div className='widget__content'>
        <img src='https://res.cloudinary.com/dbnriwv0g/image/upload/v1658567671/Mint-io/zi3mtfvk2vvvdinhzmhm.png' alt='' />
        <div className='widget__contentTitle'>
          <h5>
            Data Analyst
          </h5>
          <p>The best Mobile App Development company</p>
        </div>
      </div>
    </div>
  )
}

export default WidgetContent