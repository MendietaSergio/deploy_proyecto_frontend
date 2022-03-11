import { ContainerFlex, Image, Button, ContainerGrid } from "../../../styles/CommonComponents";
import UserImage from "../../../public/images/userExampleSVG.svg";
import {
    Name,
    ProfileModal,
    Welcome,
    Menu,
    MenuItem,
    MenuItemLink,
    Bar
} from "./ProfileStyles";
import useModal from "../../../hooks/useModal";
import Modal from "../../modal/Modal";

const Profile = ({user, setUser}) => {
    const [isOpen, openModal, closeModal] = useModal();
    const handleLogOut = () => {
        setUser(null)
    };
    return (
        <>
            <ContainerFlex gap="10px" width="auto" justifyContent="flex-start">
                <Button width="30px" height="30px" onClick={openModal}><Image src={UserImage} width="30px" height="30px" radius="50%" /></Button>
                <Name>{user.usuario?.nombre}</Name>
            </ContainerFlex>
            <Modal isOpen={isOpen} closeModal={closeModal} clickOutside={true}
                position= "absolute"
                right="25px"
                top="70px"
            >
                <ProfileModal>
                    <ContainerFlex direction="column" padding="15px 0">
                        <ContainerFlex gap="20px" padding="0 14px">
                            <Image src={UserImage} width="50px" height="50px" radius="50%" />
                            <ContainerFlex direction="column" alignItems="flex-start">
                                <Welcome>¡Te damos la bienvenida!</Welcome>
                                <Name>{user.usuario?.email}</Name>
                            </ContainerFlex>
                        </ContainerFlex>
                        <Bar />
                        <Menu>
                            <MenuItem>
                                <MenuItemLink onClick={closeModal} to={`/perfil/${user.usuario?._id}`}>Mi perfil</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={closeModal} to="/uploadart">Publicar obra</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={closeModal} to="/">Compras</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={closeModal} to="/">Configuracion</MenuItemLink>
                            </MenuItem>
                        </Menu>
                        <Bar />
                        <MenuItemLink as="button" onClick={handleLogOut}>Cerrar sesion</MenuItemLink>
                    </ContainerFlex>
                </ProfileModal>
            </Modal>
        </>
    );
}

export default Profile;
