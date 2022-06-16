import React, {useState} from "react"
import styled from "styled-components"
const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 10vh;
    background: #4C5973;
`; 
const MenuDropDown = styled.div`
    width: 30%;
   
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #4C5973;
    button{
        width: 5vw;

    }
`;
const MenuList = styled.ul`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 42px;
    background-color: rgba(191,96,113,1);
    li{
        list-style: none;
        margin: 15px;
    }
`;
const Title = styled.h1`
    color: #BF6071;
    font-size: 2em;
    text-shadow: 1px 1px 1px  #000;
    margin: 10%;
` 
const menuList = ()=>{
    return(
        <MenuList>
            <li>Início</li>
            <li>Filmes</li>
            <li>Personagens</li>
            <li>Imagens</li>
        </MenuList>
    )
};
const title = () =>{
    return <Title>Studio Ghibli </Title>
};
export default function NavBar (){
    const [dropdown, setDropdown] = useState(false)
    return(
        <Menu>
            <MenuDropDown>
                <button onClick={()=>{ setDropdown(!dropdown) }}>Menu</button>
                {dropdown && menuList()}
            </MenuDropDown>
            
            {title()}
        </Menu>
    )
};