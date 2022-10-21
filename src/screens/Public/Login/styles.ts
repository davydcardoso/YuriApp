import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  width: 100%;
  height: 100%;

  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

export const FormBox = styled.View`
  width: 90%;
  min-height: 470px;

  align-items: center;

  elevation: 6;

  padding: 10px;

  border-radius: 10px;

  background-color: white;
`;

export const LogoBox = styled.View`
  width: 150px;
  height: 150px;

  elevation: 2;

  margin-bottom: 20px;

  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;
