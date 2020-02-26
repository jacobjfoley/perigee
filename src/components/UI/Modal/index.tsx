import React, { MouseEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Anchor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Shroud = styled.div`
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(0.2rem);
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Dialog = styled.div`
  border: 2px solid #444;
  width: calc(100% - 4rem);
  max-width: 58rem;
  min-height: 20rem;
  max-height: calc(100vh - 4rem);
  background-color: #333;
`;

const Header = styled.div`
  background-color: #3e3e3e;
  padding: 0.4rem;
  border-bottom: 2px solid #444;
  display: flex;
`;

const Title = styled.span`
  flex: 1 1 0;
  padding: 0 2rem;
  text-align: center;
  align-content: center;
  font-size: 1.4rem;
  line-height: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Close = styled.button`
  flex: 0 0 auto;
  height: 2rem;
  width: 2rem;
`;

const Content = styled.div`
  padding: 2rem;
`;

interface Props {
  onClose: () => void;
}

const Modal = (props: Props): JSX.Element => {
  const [modalContainer] = useState(document.createElement("div"));

  // Render the modal using a portal to avoid styling issues.
  useEffect(() => {
    const modalPortal = document.getElementById("modalPortal");
    if (modalPortal) {
      modalPortal.appendChild(modalContainer);
      return (): void => {
        modalPortal.removeChild(modalContainer);
      };
    }
  });

  // Handle direct clicks (by closing the modal) and stop propagation.
  const handleClose = (event: MouseEvent): void => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Anchor>
      <Shroud onClick={handleClose}>
        <Dialog>
          <Header>
            <Title>A Nice Modal</Title>
            <Close onClick={handleClose}>✕</Close>
          </Header>
          <Content>Hi</Content>
        </Dialog>
      </Shroud>
    </Anchor>,
    modalContainer
  );
};

export default Modal;
