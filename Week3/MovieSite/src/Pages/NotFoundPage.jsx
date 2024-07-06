import React from "react"
import './NotFoundPage.css'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return(
        <>
            <div className="error-container">
                <h1>해당 페이지를 찾지 못했습니다.</h1>
                <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
                <Link to='/' style={{ textDecoration: "none" }}><h4 className='move-to-main'>메인으로 이동하기</h4></Link>
            </div>
        </>
    )
}

export default NotFoundPage;