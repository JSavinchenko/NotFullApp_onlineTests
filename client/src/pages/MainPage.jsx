import BgVideo from '../media/bg2.mp4'
import { NavLink } from 'react-router-dom'
import '../styles/mainpage.css'
import { checkIsAuth } from '../redux/features/auth/authSlice'
import { useSelector } from 'react-redux'

export const MainPage = () => {
    const isAuth = useSelector(checkIsAuth)

    return (
        <div className='landingpage'>
            <video src={BgVideo} autoPlay muted loop className='video-bg' />
            <div className='bg-overlay'></div>

            <div className='home-text'>
                <h1>Создай свой тест</h1>
                <p>
                    Проходи и создавай психологические тесты вместе с <i>Online-tests</i>!
                </p>
            </div>

            <div className='home-btn'>
                {isAuth ? <NavLink to='/tests'>Перейти</NavLink> : <NavLink to='/login'>Перейти</NavLink>}
            </div>
        </div>
    )
}
