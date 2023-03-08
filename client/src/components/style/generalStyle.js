import styled from "styled-components";
//NAVBAR COMPONENT
export const InputStyle = styled.input`
    background-color: white;
    height: 40px;
    width: 200px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
    margin: 10px ;
    text-align: center;
    display: column;
`
export const NavbarStyle = styled.nav`
    display:flex;
    justify-content: space-between;
    background-color: #398EC8
`
export const TitleStyle = styled.h1`
    margin: 10px ;
    color: white;
`
//DASHBOARDS COMPONENTS
export const DashboardStyle = styled.div`
    margin: 20px;
    background-color:#AAD3EE;
`
export const RowStyle = styled.div`
    
    display:flex;
    align-content: center;
    justify-content: space-around;
    border: 1px solid white;
    padding: 20px;
`
export const ColumnStyle = styled.div`
    align-items: center;
    text-align: center;
    vertical-align: middle;
    width:100px;
   
`
export const ButtonPrimaryStyle = styled.button`
    color: black;
    height: 30px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: bold;
    border-radius: calc(40px * .5);
    cursor: pointer;
    margin: 10px auto;
    transition: 300ms;
    &:hover{
        transform: scale(1.1);
    }
    `