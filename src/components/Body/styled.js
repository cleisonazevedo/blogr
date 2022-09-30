import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 375px; 
`
export const BodyStart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    width: 295px;
    margin-bottom: 200px;

    h1 {
        font-size: 25px;
        color: hsl(208, 49%, 24%);
    }
    h2 {
        font-size: 25px;
        text-align: center;
        text-indent: 15px;
        margin-bottom: 20px;
        color: hsl(208, 49%, 24%);
    }
    p {
        text-align: center;
        margin-bottom: 20px;
        line-height: 25px;
        color: hsl(207, 13%, 34%);
    }
`
export const ImgStart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 200px;
`
export const BodyMiddle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    width: 295px;
    background-color: hsl(237, 23%, 32%);
    position: relative;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;

    h1 {
        font-size: 25px;
        color: hsl(0, 0%, 100%);
        text-align: center;
        margin-bottom: 20px;
        margin-top: 100px;
    }
    p {
        text-align: center;
        margin-bottom: 20px;
        line-height: 25px;
        color: hsl(240, 2%, 79%);
    }
    img {
        position: absolute;
        width: 300px;
        right: 40px;
        top: -40%;
    }

`

export const BodyEnd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    width: 295px;


    h1 {
        font-size: 25px;
        color: hsl(208, 49%, 24%);
        text-align: center;
        margin-bottom: 20px;
    }
    p {
        text-align: center;
        margin-bottom: 20px;
        line-height: 25px;
        color: hsl(207, 13%, 34%);
    }
`
export const ImgEnd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 200px;
`
export const Footer = styled.div`
    
    background-color: hsl(240, 10%, 16%);
    color: hsl(0, 0%, 100%);
    
    padding-top: 30px;
    padding-bottom: 30px; 
    border-top-right-radius: 100px;
    h1 {
        text-align: center;
        margin-bottom: 60px;
        margin-top: 20px;
    }
    div {
        margin-bottom: 30px;
    }
    div h1 {
        margin-bottom: 20px;
        font-size: 18px;
    }
    div p {
        text-align: center;
        line-height: 25px;
        color: hsl(240, 2%, 79%);
    }
`
