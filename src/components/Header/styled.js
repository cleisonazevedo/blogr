import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    width: 295px;
    color: hsl(0, 0%, 100%);
    background-color:hsl(356, 100%, 66%);
    border-bottom-left-radius: 80px;
    
`
export const HeaderMenu = styled.div`
   
    
`
export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    svg {
        color: hsl(0, 0%, 100%);
        cursor: pointer;
    }
    /* h1 {
        margin-right: 40px;
    }
    display: flex;
    a {
        color: hsl(0, 0%, 100%);
        text-decoration: none;
        margin-top: 10px;
        margin-right: 20px;
        :hover {
            text-decoration: underline;
        }
    } */
`
// export const Login = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     margin-right: 60px;
    
//     a {
//         color: hsl(0, 0%, 100%);
//         text-decoration: none;
//         margin-right: 10px;
//     }
//     button {
//         background-color: hsl(0, 0%, 100%);
//         width: 100px;
//         height: 35px;
//         border-radius: 20px;
//         border: none;
//         cursor: pointer;
//         :hover {
//             color: hsl(0, 0%, 100%);
//             background-color: hsl(355, 100%, 74%);
//         }
//     }
// `
export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-indent: 15px;
    margin-top: 100px;
    h1 {
        font-size: 30px;
        font-weight: 500;
    }
    p {
        margin-top: 10px;
        font-size: 16px;
    }
`
export const HeaderButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 80px;
    
`
export const Button1 = styled.button`
    background-color: hsl(0, 0%, 100%);
    color: hsl(356, 100%, 66%);
    margin-right: 10px;
    font-weight: 700;
    width: 120px;
    height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    :hover {
        color: hsl(0, 0%, 100%);
        background-color: hsl(355, 100%, 74%);
    }
`
export const Button2 = styled.button`
    width: 120px;
    height: 40px;
    font-weight: 700;
    background-color: hsl(356, 100%, 66%);
    color: hsl(0, 0%, 100%);
    border-radius: 20px;
    border: 1px solid hsl(0, 0%, 100%);
    cursor: pointer;
    :hover {
        color: hsl(356, 100%, 66%);
        background-color: hsl(0, 0%, 100%);
    }
`