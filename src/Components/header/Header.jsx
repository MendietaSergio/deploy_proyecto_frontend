import {
    HeaderStyled,
    Menu,
    NavItem,
    Search,
    Find,
    ButtonSearch,
    NavLink,
    BtnLink
} from "./HeaderStyles";
import { ContainerFlex } from "../../styles/CommonComponents";
import Profile from "./profile/Profile";
import UserContext from "../../context/user/UserContext";
import { useContext } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import HeaderResponsive from "./HeaderResponsive";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = () => {
    const {user, setUser} = useContext(UserContext);
    const [height, width] = useWindowSize();
    const Nav = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data.search);
        Nav(`/search/${data.search}`);
    }
    return (
        <>  {width < 1024 ?
            <HeaderResponsive user={user} setUser={setUser} />
            :
            <ContainerFlex width="100%" height="70px">
                <HeaderStyled>
                    <ContainerFlex as="nav" width="1200px" height="100%" padding="0rem 1rem" justifyContent="space-between"> 
                            <Link to='/'>Logo</Link>
                        <Menu>
                            <NavItem><NavLink to='/marketplace'>Mercado</NavLink></NavItem>
                            <NavItem><NavLink to='/about-us'>Sobre nosotros</NavLink></NavItem>
                            <NavItem><NavLink to='/faq'>FAQ</NavLink></NavItem>
                        </Menu>
                        <ContainerFlex as="form" onSubmit={handleSubmit} borderRadius="5px" height="100%">
                            <Search name="search" placeholder="Search"/>
                            <ButtonSearch height="100%" type="submit"><Find /></ButtonSearch>
                        </ContainerFlex>
                        {user ? 
                            <Profile user={user} setUser={setUser}/>
                            :
                            <ContainerFlex gap="15px" margin="0 165px 0 0" height="100%">
                                <BtnLink color="#8C30F5" background="#F1E4FF" to='/login'>Login</BtnLink>
                                <BtnLink color="#FFFFFF" background="#8C30F5" to='/register'>Sign up</BtnLink>
                            </ContainerFlex>
                        }
                    </ContainerFlex>
                </HeaderStyled>
            </ContainerFlex>
            }
        </>
    );
}

export default Header;
