import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;

  align-items: center;

  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 80px;

  background-color: #12a6ff;

  margin-bottom: 10px;

  elevation: 2;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 10px;
`;

export const TitlePage = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Form = styled.View`
  width: 90%;

  margin-top: 40px;

  align-items: center;

  gap: 10px;
`;

export const BoxButton = styled.View`
  width: 90%;

  align-items: center;

  position: absolute;
  bottom: 20px;
`;
