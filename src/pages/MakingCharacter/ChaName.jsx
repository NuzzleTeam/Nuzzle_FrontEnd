import { useSelector, useDispatch } from "react-redux";
import { setName, setSavedName } from "../../features/nameSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";

const ChaName = () => {
  const name = useSelector((state) => state.name.name);
  const familyId = useSelector((state) => state.user.familyId);
  const characterImage = useSelector((state) => state.character.characterImage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const handleChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleConfirm = () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://api.nuz2le.com/api/family/${familyId}/pet-name`;

    fetch(proxyUrl + targetUrl, {
      method: "POST",
      headers: {
        "Authorization":"Bearer eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjoyLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyMzg5MzA2NCwiZXhwIjoxNzI0NDk3ODY0fQ.a1hl17fFj5bmo0fRLWli4vNQtZSeg2YZYxKhyFpR5xgjqRYW58T1svkabn76kEL_t0j4PsiX7USZ9YQ0cbA03g"
      },
      body: JSON.stringify({ "petName": name }),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(setSavedName(name));
          navigate("/ChaNameComplete"); // POST 요청이 성공하면 페이지 이동
        } else {
          console.error("이름 전송 실패");
          dispatch(setSavedName(name)); // 나중에 지우기
          navigate("/ChaNameComplete");
        }
      })
      .catch((error) => {
        console.error("이름 전송 에러 발생:", error);
      });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Container>
      {name.length > 0 ? (
        <Title>정말 멋진 아이디어 같아요!</Title>
      ) : (
        <Title>
          아직 <span style={{ color: "#FFB1D0" }}>애착이의 애칭이</span> 없네요.{" "}
          <br />
          가족들과 상의하여 이름을 정해주면 어떨까요?
        </Title>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        {" "}
        {/* Prevent form submission */}
        <Input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="애착이 이름"
          hastext={name.length > 0 ? "true" : "false"}
          ref={inputRef} // Attach ref to input
        />
        <Subtitle>애칭은 수정이 불가능하니 신중하게 정해주세요!</Subtitle>
        <ImageContainer>
          <Image src={characterImage} alt="애착이" />
        </ImageContainer>
        {name.length > 0 && (
          <>
            <Message>정말 {name}로 지으실 건가요? 🤔</Message>
            <ButtonGroup>
              <StyledButton onClick={handleEdit}>수정하기</StyledButton>
              <StyledButton onClick={handleConfirm}>YES</StyledButton>
            </ButtonGroup>
          </>
        )}
      </form>
    </Container>
  );
};

export default ChaName;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
  position: relative;
  padding-top: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: bold;
  text-align: left;
  padding: 0 5px;
  margin-left: 10px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  margin-top: -5px;
  margin-bottom: 40px;
  color: #ffb1d0;
  text-align: left;
  padding: 0 15px;
`;

const Input = styled.input`
  margin: 10px 12px;
  border: none;
  border-radius: 10px;
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 18px;
  padding-left: 15px;
  width: 343px;
  height: 51px;
  background-color: ${(props) =>
    props.hastext === "true" ? "#FFB1D0" : "#eeeeee"};
  z-index: 3;
  position: relative;
  &:focus {
    border: none;
    outline: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  position: absolute;
  width: 350px;
  height: auto;
  z-index: 1;
`;

const Message = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight:600;
  font-family: "Pretendard";
`;

const ButtonGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 90%;
  z-index: 2;
`;

const StyledButton = styled.button`
  background-color: #ffb1d0;
  color: black;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 30px;
  width: 168px;
  font-size: 16px;
  font-weight:bold;
  font-family: "Pretendard";
  height: 50px;
  z-index: 2;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)}; // 비활성화 시 투명도 변경
  pointer-events: ${(props) =>
    props.disabled ? "none" : "auto"}; // 비활성화 시 클릭 막기
`;
