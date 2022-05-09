import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  max-height: 550px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  gap: 8px;

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

export const ContainerChips = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0px;
  gap: 8px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const TabTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  font-size: 14px;
`;
export const Tab = styled.div<{ selected?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ selected, theme }) =>
    selected && theme.colors.primaryColor};

  ${TabTitle} {
    color: ${({ selected, theme }) => theme.colors.primaryColorText};
    font-weight: 600;
  }

  cursor: pointer;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
`;
