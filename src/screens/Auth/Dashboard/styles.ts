import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: #fff;
`;

export const ContainerList = styled.View`
  width: 100%;
  height: 90%;

  align-items: center;
`;

export const CardRequest = styled.View`
  width: 95%;
  height: 120px;

  border-radius: 10px;

  background-color: #fff;

  margin: 10px;
  padding: 10px;

  elevation: 5;
`;

export const TextCard = styled.Text`
  color: #000;

  font-size: 17px;

  margin-top: 4px;
`;

export const ButtonCard = styled.TouchableOpacity`
  width: 100px;
  height: 40px;

  background-color: #12a6ff;

  position: absolute;
  right: 10px;
  bottom: 10px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  elevation: 5;
`;

export const TextButton = styled.Text`
  color: #fff;

  font-size: 16px;
`;
