import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { setInvitationCode } from "../../features/userSlice"; 

// 가족 연결 페이지
// familyCreate -> fetchInvitationCode -> familyJoin(handleSubmit) -> familyLeave -> checkMember

function Connect() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const baseUrl = "http://localhost:3000"; // 3000으로 변경 
  const userName = useSelector((state) => state.user.userName);
  const familyId = useSelector((state) => state.user.familyId);
  const userId = useSelector((state) => state.user.userId);
  const invitationCode= useSelector((state) => state.user.invitationCode);


  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = `https://api.nuz2le.com/api/family/${familyId}/invitation-code`;


  const [linkModal, setLinkModal] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const [codeInputModal, setCodeInputModal] = useState(false);
  const [changePwModal, setChangePwModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  

  useEffect(() => {
    const fetchInvitationCode = async () => {
      try {
        const response = await fetch(proxyUrl + targetUrl, {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(setInvitationCode(data.invitation_code));
        } else if (response.status === 404) {
          console.error("가족을 찾을 수 없습니다.");
        } else {
          console.error("서버 응답 에러:", response.statusText);
        }
      } catch (error) {
        console.error("오류:", error);
      }
    };
    fetchInvitationCode();
  }, []);

  const openLinkModal = () => {
    setLinkModal(true);
  };
  const closeLinkModal = () => {
    setLinkModal(false);
  };

  const openCodeModal = () => {
    setCodeModal(true);
  };
  const closeCodeModal = () => {
    setCodeModal(false);
  };

  const openCodeInputModal = () => {
    setCodeInputModal(true);
  };
  const closeCodeInputModal = () => {
    setCodeInputModal(false);
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCopyCode = async (text) => { // 초대코드 입력했을 때 fetch
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  };
  const goToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.nuz2le.com/api/family/join';

    const requestBody = {
      "userId": userId,
      "invitationCode": inputValue
    };

    try {
      const response = await fetch(proxyUrl + targetUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Success:', responseData);
      } else {
        if (responseData.message === 'User is already in a family') {
          console.error('Error: User is already in a family');
        } else if (responseData.message === 'Invalid invitation code') {
          console.error('Error: Invalid invitation code');
        } else {
          console.error('Unknown error:', responseData);
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const familyCreate = async (event) => {
    event.preventDefault();

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.nuz2le.com/api/family/create';

    const request = {
      "userId": userId
    };

    try {
      const response = await fetch(proxyUrl + targetUrl, {
        method: 'POST',
        body: JSON.stringify(request),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Success:', responseData);
      } else {
        if (responseData.status === 409) {
          console.error('Error: User is already in a family');
        } else {
          console.error('Unknown error:', responseData);
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const familyLeave = async (event) => {
    event.preventDefault();

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.nuz2le.com/api/family/leave';

    const request = {
      "userId": userId
    };

    if (window.confirm("현재 존재하는 가족 모임이 있습니다. 기존 모임에서 탈퇴하시겠습니까?")) {
      try {
        const response = await fetch(proxyUrl + targetUrl, {
          method: 'POST',
          body: JSON.stringify(request),
        });
  
        const responseData = await response.json();
  
        if (response.ok) {
          console.log('Success:', responseData);
        } else {
          if (responseData.status === 400) {
            console.error('Error: User is not in a family');
          } else {
            console.error('Unknown error:', responseData);
          }
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  return (
    <>
      <ConnectWrapper>
        <ConnectContentWrapper>
          <Top>
            <ProgressBar>
              <InnerProgreeBar />
              <InnerProgreeBar style={{ backgroundColor: "#FFB1D0" }} />
              <InnerProgreeBar />
            </ProgressBar>
          </Top>
          <Title>가족 연결을 해주세요</Title>
          <Img src="src/assets/img/connect.png"></Img>
          <Share>
            <ConnectBox
              onClick={() => {
                handleCopyClipBoard(`${baseUrl}${location.pathname}`);
                openLinkModal();
              }}
            >
              <ConnectTitle>링크 공유하기</ConnectTitle>
              <InnerBox>버튼을 누르면 링크가 자동으로 복사돼요!</InnerBox>
              <img
                src="src/assets/img/link_chain.png"
                style={{ width: "44px", height: "44px", marginLeft: "135px" }}
              ></img>
            </ConnectBox>
            <ConnectBox
              onClick={() => {
                handleCopyCode(``);
                openCodeModal();
              }}
            >
              <ConnectTitle>코드 공유하기</ConnectTitle>
              <InnerBox>{userName}님의 코드는 {invitationCode} 입니다.</InnerBox>
              <InnerBox>코드를 누르면 복사돼요!</InnerBox>
            </ConnectBox>
            <ConnectBox onClick={openCodeInputModal}>
              <ConnectTitle>가족의 코드를 공유 받았나요?</ConnectTitle>
              <ConnectInput
                style={{ marginLeft: "60px" }}
                placeholder="직접 입력해보세요!"
              ></ConnectInput>
            </ConnectBox>
          </Share>
          <ConnectBtnWrapper>
            <AddBtn>구성원 추가하기</AddBtn>
            <CompleteBtn onClick={goToHome}>우리 가족 완성!</CompleteBtn>
          </ConnectBtnWrapper>
        </ConnectContentWrapper>
      </ConnectWrapper>
      {linkModal && (
        <ModalWrapper>
          <ModalContentWrapper>
            <CheckImg src="/src/assets/pinkCheck.png"></CheckImg>
            <ModalTitle>링크가 복사되었습니다</ModalTitle>
            <ModalBtn onClick={closeLinkModal} >
              확인
            </ModalBtn>
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {codeModal && (
        <ModalWrapper>
          <ModalContentWrapper>
            <CheckImg src="/src/assets/pinkCheck.png"></CheckImg>
            <ModalTitle>코드가 복사되었습니다</ModalTitle>
            <ModalBtn onClick={closeCodeModal} >
              확인
            </ModalBtn>
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {codeInputModal && (
        <ModalWrapper>
        <ModalContentWrapper style={{ backgroundColor: "#fcfdf5" }}>
          <ModalTitle onClick={closeCodeInputModal}>
            가족의 코드를 공유 받았나요?
          </ModalTitle>
          <form onSubmit={handleSubmit}>
            <ModalInput
              placeholder="직접 입력해보세요!"
              style={{ textAlign: "left" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ModalBtn type="submit">제출</ModalBtn>
          </form>
        </ModalContentWrapper>
      </ModalWrapper>
      )}
      {/* <ModalWrapper>
                <ModalContentWrapper>
                    <ModalTitle>비밀번호가 변경되었습니다</ModalTitle>
                    <ModalSmallTitle>비밀번호가 변경되었습니다.</ModalSmallTitle>
                    <ModalSmallTitle>다시 로그인해 주세요</ModalSmallTitle>
                    <ModalBtn>확인</ModalBtn>
                </ModalContentWrapper>
            </ModalWrapper> */}
      {/* <ModalWrapper>
                <ModalContentWrapper>
                    <ModalTitle>이미 가입된 계정이 있어요</ModalTitle>
                    <ModalSmallTitle>이미 인증된 휴대폰번호로</ModalSmallTitle>
                    <ModalSmallTitle>가입된 계정이 있어요.</ModalSmallTitle>
                    <ModalBtn>확인</ModalBtn>
                </ModalContentWrapper>
            </ModalWrapper> */}
    </>
  );
}

export default Connect;

const ConnectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
`;

const ConnectContentWrapper = styled.div`
  width: 348px;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(3.8%, 2%);
`;

const Top = styled.div`
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(0%, 2%);
  margin-top: -80px;
  margin-bottom: 19px;
`;

const ProgressBar = styled.div`
  width: 229px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(8%, 550%);
  margin-left: 50px;
`;

const InnerProgreeBar = styled.div`
  width: 76.33px;
  height: 6px;
  background-color: #d9d9d9;
`;

const Title = styled.div`
  /* border: 1px solid black; */
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(2%, 150%);
`;

const Img = styled.img`
  width: 162.78px;
  height: 83px;
  top: 50%;
  left: 50%;
  transform: translate(0%, 60%);
  margin-left: 90px;
`;

const CheckImg = styled.img`
  width: 45.42px;
  height: 25.42px;
  top: 50%;
  left: 50%;
`;

const Share = styled.div`
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(8%, 15%);
`;

const ConnectBox = styled.div`
  width: 314px;
  height: 105px;
  border-radius: 31px;
  border: 1px solid #ffb1d0;
  gap: 5px;
  box-shadow: 0.5px 0.5px 3px gray;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const ConnectTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
  text-align: center;
  color: #353535;
  margin-top: 10px;
  font-family: "Pretendard";
`;

const InnerBox = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #353535;
  font-family: "Pretendard";
`;

const ConnectInput = styled.input`
  background-color: #f3f3f3;
  width: 189px;
  height: 44px;
  background-color: #f2f2f2;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  padding-left: 10px;
  font-family: "Pretendard";

  &::placeholder {
    color: #959595;
  }
`;

const ConnectBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  gap: 10px;
  transform: translate(5%, -20%);
`;

const AddBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffb1d0;
  top: 50%;
  left: 50%;
  transform: translate(4%, 200%);
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 16px;
  line-height: 16.8px;
  border: none;
`;

const CompleteBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffb1d0;
  top: 50%;
  left: 50%;
  transform: translate(4%, 200%);
  font-weight: bold;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 16.8px;
  border: none;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContentWrapper = styled.div`
  width: 320px;
  padding: 20px;
  background-color: #ffe6f0;
  border: 1px solid #ff87b7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  margin-bottom: 10px;
  font-family: "Pretendard";
`;

const ModalBtn = styled.button`
  width: 70%;
  height: 40px;
  border-radius: 30px;
  background-color: #ffb1d0;
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  border: none;
  cursor: pointer;
  top: 50%; left: 50%;
  transform: translate(22%, 20%);
`;

const ModalInput = styled.input`
  background-color: #f3f3f3;
  width: 189px;
  height: 44px;
  background-color: #f2f2f2;
  border-radius: 12px;
  border: none;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  line-height: 19.6px;
  padding-left: 10px;
  margin-bottom:5px;
  margin-left: 40px;

  &::placeholder {
    color: #717171;
  }
`;