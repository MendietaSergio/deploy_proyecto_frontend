import { ContainerFlex, Button, Image, Container } from "../../styles/CommonComponents";
import {
    HeaderStyled,
    Search,
    Find,
    ButtonSearch,
    BtnLink
} from "./HeaderStyles";
import {useRef} from "react";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { ProfileModal, Name, Welcome, Bar, MenuItem, MenuItemLink, Menu } from "./profile/ProfileStyles";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import UserImageLogged from "../../public/images/userExampleSVG.svg";
import UserImageDefault from "../../public/images/user-circle.svg";
import { useNavigate } from "react-router-dom";

const MenuIcon = styled(AiOutlineMenu)`
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    color: #495057;
    width: 25px;
`;

const MenuCloseIcon = styled(AiOutlineClose)`
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    color: #495057;
    width: 25px;
`;

const MenuActive = styled(ProfileModal)`
  &:before {
    right: 12px;
  }
`;

const BtnLinkStlyed = styled(BtnLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 4px 16px;
`;
const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
  width: 24px;
  font-size: 18px;
  font-weight: 18px;
  height: 24px;
`;

const HeaderResponsive = ({user, setUser}) => {
    const ref = useRef();
    const [active, setActive] = useState(false);
    const [isOpen, openModal, closeModal] = useModal();
    const Nav = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data.search);
        Nav(`/search/${data.search}`);
    }
    const handleClickOutside = (e) => {
        console.log(e.target);
        if(ref.current && ref.current.contains(e.target)) {
            handleActive()
        }
    };
    const handleChange = () => {
        setActive(!active);
        !active ? openModal() : closeModal();
    };
    const handleActive = () => {
        if(active) {
            setActive(!active);
            closeModal();
        }
    }
    const handleLogOut = () => {
        setUser(null)
    };

    return (
        <ContainerFlex width="100%" height="50px">
            <HeaderStyled background="#FFF" height="50px !important" onClick={handleClickOutside}>
                <ContainerFlex  ref={ref} as="nav" width="100%" height="100%" justifyContent="space-between" padding="0 0 0 10px">
                    <ContainerFlex as="form" onSubmit={handleSubmit} borderRadius="5px" height="100%">
                        <Search name="search" placeholder="Search"/>
                        <ButtonSearch height="100%"><Find /></ButtonSearch>
                    </ContainerFlex>
                </ContainerFlex>
                <ContainerFlex position="absolute" right="10px">
                    <Button height="40px" width="25px" onClick={handleChange}>{active ? <MenuCloseIcon /> : <MenuIcon />}</Button>
                    <Modal isOpen={isOpen} closeModal={closeModal} clickOutside={true} onClose={handleActive}
                    marginOverlay="51px 0 0 0" 
                    borderRadius="0"
                    position="absolute"
                    top="0"
                    width="100%"
                    >
                        <MenuActive>
                            <ContainerFlex direction="column" justifyContent="center" alignItems="flex-start" gap="20px" margin="20px 0" height="100%">
                                {user === null ?
                                <>
                                    <ContainerFlex gap="20px" padding="0 14px" width="100%" justifyContent="flex-start">
                                        <Image width="50px" height="50px"  radius="50px" src={UserImageDefault} />
                                        <ContainerFlex direction="column" alignItems="flex-start">
                                            <Welcome>¡Te damos la bienvenida!</Welcome>
                                            <Name>Ingresá a tu cuenta para gestionar tus datos y servicios de forma rápida y sencilla.</Name>
                                        </ContainerFlex>
                                    </ContainerFlex>
                                    <ContainerFlex width="100%">
                                        <BtnLinkStlyed color="#8C30F5" background="#F1E4FF" radius="25px" to='/login'>
                                            Inicia sesion con tu cuenta
                                            <ArrowIcon />
                                        </BtnLinkStlyed>
                                    </ContainerFlex>
                                    <Bar margin="0"/>
                                    <Menu>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">Mercado</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">Sobre nosotros</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">FAQ</MenuItemLink>
                                        </MenuItem>
                                    </Menu>
                                    <Bar margin="0" />
                                    <ContainerFlex width="100%">
                                        <BtnLinkStlyed color="#FFFFFF" background="#8C30F5" to='/register' radius="25px !important">Registrarme</BtnLinkStlyed>
                                    </ContainerFlex>
                                </> : 
                                <>
                                    <ContainerFlex gap="20px" padding="0 14px" width="100%" justifyContent="flex-start">
                                        <Image width="50px" height="50px"  radius="50px" src={UserImageLogged} />
                                        <ContainerFlex direction="column" alignItems="flex-start">
                                            <Welcome>¡Te damos la bienvenida!</Welcome>
                                            <Name>{user.usuario?.nombre ?? "Default Name"}</Name>
                                        </ContainerFlex>
                                    </ContainerFlex>
                                    <Bar margin="0"/>
                                    <Menu>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to={`/perfil/${user.usuario?._id ?? "Default id"}`}>Mi perfil</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">Compras</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/uploadart">Publicar obra</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">Configuracion</MenuItemLink>
                                        </MenuItem>
                                        <Bar margin="20px 0" />
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">Mercado</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">Sobre nosotros</MenuItemLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuItemLink onClick={handleActive} to="/">FAQ</MenuItemLink>
                                        </MenuItem>
                                    </Menu>
                                    <Bar margin="0" />
                                    <ContainerFlex width="100%">
                                        <BtnLinkStlyed as="button" onClick={handleLogOut} color="#FFFFFF" background="#8C30F5" radius="25px !important">Cerrar sesion</BtnLinkStlyed>
                                    </ContainerFlex>
                                </>
                                }
                            </ContainerFlex>
                        </MenuActive>
                    </Modal>
                </ContainerFlex>
            </HeaderStyled> 
        </ContainerFlex>
    );
}

export default HeaderResponsive;