import styled from 'styled-components'
import Background from '../../images/bg image.svg'

export const Container = styled.div` 
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
    width: 100%;
`;

export const Image = styled.img`
    margin-top: 30px;
`;



export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
    
`;

export const Input = styled.input`
    color: white;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    padding-left: 25px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 30px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 25px;
    p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    &:hover {
        opacity: 0.5;
    }

    &:active {
        color:red;
    }

`;

