import React from "react"
import './NotFoundPage.css'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return(
        <>
            <div className="error-container">
                <h1>Oops!</h1>
                <h3>예상치 못한 에러가 발생했습니다: '^'</h3>
                <h3 id="error-eng">Not Found</h3>
                <Link to='/'><h2 className='move-to-main'>메인으로 이동하기</h2></Link>
                {/* <h2 id="move-to-main">메인으로 이동하기</h2> */}
            </div>
        </>
    )
}

export default NotFoundPage;