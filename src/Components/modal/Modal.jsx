import styled from "styled-components";
import { useRef } from "react";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.margin && props.margin};
`;

const ModalContainer = styled.div`
    width: ${props => props.width && props.width};
    height: ${props => props.height && props.height};
    background: ${props => props.background ? props.background : "#fff"};
    position: ${props => props.position ? props.position : "relative"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "5px"};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : "rgba(100,100,111,0.2) 0px 7px 29px 0px"};
    padding: ${props => props.padding && props.padding};
    top: ${props => props.top ? props.top : null};
    right: ${props => props.right ? props.right : null};
    left: ${props => props.left ? props.left : null};
    bottom: ${props => props.bottom ? props.bottom : null};
`;

const ContainChildren = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    max-width: 1200px;
`

const Modal = ({
    isOpen,
    closeModal, 
    children, 
    clickOutside = false,
    marginOverlay,
    width,
    height,
    borderRadius,
    padding,
    boxShadow,
    left,
    top,
    right,
    bottom,
    position,
    onClose
    }) => {
    const ref = useRef();
    const handleClickOutside = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        onClose ? onClose() : closeModal();
      }
    }
    return (
      <>
        {isOpen &&
          <Overlay margin={marginOverlay} onClick={clickOutside ? handleClickOutside : undefined}>
            <ContainChildren>

            <ModalContainer 
            ref={ref} 
            width={width} 
            height={height} 
            borderRadius={borderRadius} 
            padding={padding} 
            boxShadow={boxShadow}
            top={top}
            right={right}
            left={left}
            bottom={bottom}
            position={position}
            >
              {children}
            </ModalContainer>
            </ContainChildren>
          </Overlay>
        }
      </>
    );
};

export default Modal;