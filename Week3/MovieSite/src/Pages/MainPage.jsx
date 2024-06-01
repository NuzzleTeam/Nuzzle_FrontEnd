import React, {useState} from 'react'
import styled from 'styled-components';

function MainPage(){
    return (
        <MainpageWrapper>
            <MainpageWelcome>
                <h2>환영합니다</h2>
            </MainpageWelcome>
            <MainpageSearch>
                <MainpageSearchFind>
                    <h2>Find your movies !</h2>
                </MainpageSearchFind>
                <div className='mainpage-searbox'>
                    <SearchBox type='text'></SearchBox>
                </div>
            </MainpageSearch>
        </MainpageWrapper>
    )
}

export default MainPage;

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: #1E2041;
//     color: white;
//     margin: 0; padding: 0;
//     width: 100%; height: 100%;
//   }
// `;

const MainpageWrapper = styled.div`
    width: 100%; height: 100%;
    margin: 0; padding: 0;
    display: flex;
    flex-direction: column;
`; 

const MainpageWelcome = styled.div`
    background-color: black;
    position: relative;
    width: 100%; height: 30%;

    h2 {
        position: relative;
        top: 30%;
    }
`;

const MainpageSearch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const MainpageSearchFind = styled.div`
    position: relative;
    top: 30%;
`;

const SearchBox = styled.input`
    border-radius: 15px;
    height: 30px;
    width: 50%;
    position: relative;
    top: 150%;
`;