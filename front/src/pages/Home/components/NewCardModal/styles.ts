import styled from "styled-components";

export const Modal = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  transition: opacity 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div``;
