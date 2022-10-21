import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

export const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color={'#12a6ff'} size={50} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;
