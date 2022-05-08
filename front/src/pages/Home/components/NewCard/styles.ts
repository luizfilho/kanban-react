import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  gap: 8px;

  input {
  }

  textarea,
  input {
    border-radius: 4px;
    resize: none;
    font-family: "Arimo", sans-serif;
    padding: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 1px solid rgba(100, 100, 111, 0.2);
    &:focus {
      outline: none;
    }
  }

  input {
    height: 20px;
  }
`;

export const Title = styled.h4`
  margin: 0px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerChips = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0px;
  gap: 8px;
`;
