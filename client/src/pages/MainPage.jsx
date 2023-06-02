import React from 'react'
import BgVideo from '../media/bg2.mp4'
//import { Link } from 'react-router-dom'
import '../styles/mainpage.css'

//import { useHistory } from 'react-router-dom';


const MainPage = () => {
  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop className="video-bg" /> 
      <div className="bg-overlay"></div>

      <div className="home-text">
        <h1>Создай свой тест</h1>
        <p>Проходи и создавай психологические тесты вместе с <i>Online-tests</i>!</p>
      </div>

      <div className="home-btn"><a href='/login'>Перейти</a></div>
    </div>
  )
}

export default MainPage 