import styled from "styled-components";

export const ContainerContent = styled.div`
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 16px;
  min-height: 120px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0px;
  font-size: 16px;
`;

export const ContainerTitle = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  height: 32px;
  margin-bottom: 4px;
  svg {
    cursor: pointer;
    height: 100%;
    padding: 0px 8px;
    border-radius: 100%;
    fill: #fff;
    background-color: ${({ theme }) => theme.colors.primaryColorText};
  }
`;

export const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding-top: 8px;
  svg {
    cursor: pointer;
  }
`;
export const EditButton = styled.p``;
