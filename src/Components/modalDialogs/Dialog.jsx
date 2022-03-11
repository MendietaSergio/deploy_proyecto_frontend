import { ContainerFlex } from "../../styles/CommonComponents";
import {
    ArrowIcon, 
    ModalHeader,
    IconBox,
    ModalTitle,
    P,
    Span,
    ExploreButton,
    CorrectIcon,
    ErrorIcon,
    CloseButton,
} from "./Styles";

const Dialog = ({closeModal, title, content, btnText, type}) => {
    return (
        <ContainerFlex direction="column" width="550px" height="100%" borderRadius="5px">
            <ModalHeader width="100%" height="100%" background={type} padding="20px">
                <IconBox>
                    {type === 'success' && <CorrectIcon />}
                    {type === 'error' && <ErrorIcon />}
                </IconBox>
                <CloseButton onClick={closeModal}>x</CloseButton>
            </ModalHeader>
            <ContainerFlex direction="column" width="100%" height="100%" padding="40px">
                <ModalTitle>{title}</ModalTitle>
                <P>{content}</P>
                {type === 'success' &&
                    <ExploreButton primary medium height="50px" radius="30px" margin="10px 0 0 0"><Span margin="0 5px 0 0">{btnText}</Span><ArrowIcon /></ExploreButton>
                }
                {type === 'error' &&
                    <ExploreButton primary medium height="50px" radius="30px" margin="10px 0 0 0"><Span>{btnText}</Span></ExploreButton>
                }
            </ContainerFlex>
        </ContainerFlex>
    );
}

export default Dialog;