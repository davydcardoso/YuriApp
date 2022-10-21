import React from 'react';

import * as S from './styles';

type Props = {
  title?: string;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <S.Container onPress={onPress}>
      <S.TitleButton>{title || 'Enviar'}</S.TitleButton>
    </S.Container>
  );
};
