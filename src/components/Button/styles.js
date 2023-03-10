import styled from 'styled-components'

export const Button = styled.button`
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    width: 342px;
    height: 74px;
    margin-top: 130px;
    background: ${props => props.isBackground ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${props => props.isBackground ? '1px solid #fff' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }

    &:active {
        color:red;
    }

    img{
        transform: ${props => props.isBackground && 'rotateY(180deg)'};
        }

`;