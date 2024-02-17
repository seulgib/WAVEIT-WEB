import styled from 'styled-components';
import React,{useState} from 'react';
import { Link, Component } from 'react-router-dom';
import '../css/MyPage.css';

const Page = styled.div`
  position: absolute; // 절대 위치 지정
  top: 50%; // 상하 중앙에 위치
  left: 50%; // 좌우 중앙에 위치
  transform: translate(-50%, -50%); // 위치 조정
  margin-top:50px;
  border-style:none;
  width: 800px;
  height: 500px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
`

const Wrapper=styled.div`
  background-color:white;
`
// 상단 네브바
const Navbar = styled.div`
  background-color:white;
  display:grid;
  display: flex;
  justify-content: space-between; /* 가운데 정렬과 오른쪽 정렬을 동시에 설정 */
  align-items: center;

  width: 100%;
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  z-index: 1000; /* 다른 요소들 위에 상단바가 오도록 설정 */
`

const Title = styled.div`
  font-weight: bold;
  text-align: center; 
  margin-top: 50px;
`


const NavbarItem=styled.a`

  margin-right: 20px;
  text-decoration-line:none;
  font-weight:bold;
  color: black;
`
const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* 항목들 사이의 간격 */
  margin-left: auto; /* 항목들을 오른쪽으로 이동 */
  margin-right : 50px;
`

const Label = styled.label`
  margin-right: 0.5rem;
  width: 150px;
`;

const Row = styled.div`

  display: flex;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
`

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${(props) => props.inputWidth};
  
  &:focus {
    border-color: black;  
    outline: none;  
  }
`

const Textarea  = styled.textarea`
  width: 500px;
  height: 80px
`

export default function WritePortfolio(){

    const [state, setState] = useState({
        name: '',
        universityAndMajor: '',
        contact: '',
        projectExperience: '',
        etc: '',
        Java: '',
        Python: '',
        C: '',
        JS: '',
    });
    
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return(
        <div className="my-page">
        <Wrapper>
            <Navbar>
            <NavbarItems>
                <NavbarItem href="/pages/Matching">매칭 모집</NavbarItem>
                <NavbarItem href="/pages/postingpage">매칭 등록</NavbarItem>
            </NavbarItems>
            </Navbar>
            
            <Title>포트폴리오 작성</Title>
            <Page>
                <Row>
                    <Label>이름 :</Label>
                    <InputField
                     type="text" 
                     name="name" 
                     value={state.name} 
                     onChange={handleChange}/>
                </Row>
                <Row>
                    <Label>대학 및 전공 :</Label>
                    <InputField
                     type="text" 
                     name="universityAndMajor" 
                     value={state.universityAndMajor} 
                     onChange={handleChange} 
                     style={{width : '500px'}}/>
                </Row>
                <Row>
                    <Label>연락처 :</Label>
                    <InputField
                     type="text" 
                     name="contact" 
                     value={state.contact} 
                     onChange={handleChange}
                     style={{width : '500px'}}
                     placeholder="ex) 이메일을 입력해주세요."/>
                </Row>
                
                <Row>
                    <Label>사용 가능 언어 :</Label>
                    {['Java', 'Python', 'C', 'JS'].map((language) => (
                        <div key={language} style={{ marginRight: '0.5rem' }}>
                            <h3 style={{ marginRight: '0.5rem' }}>{language}</h3>
                            {['상', '중', '하'].map((level) => (
                                <label 
                                key={level} 
                                style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center'}}>
                                    <InputField
                                        type="radio"
                                        name={language}
                                        value={level}
                                        checked={state[language] === level}
                                        onChange={handleChange}
                                    />
                                    {level}
                                </label>
                            ))}
                        </div>
                    ))}
                </Row>
                <Row>
                    <Label>프로젝트 경력 :</Label>
                    <Textarea 
                    name="projectExperience"
                    value={state.projectExperience} 
                    onChange={handleChange} />
                </Row>
                <Row>
                    <Label>기타 :</Label>
                    <Textarea 
                    name="etc" 
                    value={state.etc} 
                    onChange={handleChange} />
                </Row>
            </Page>

        </Wrapper>
        </div>
    );
    
} 

    