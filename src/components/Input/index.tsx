import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  isPass?: boolean;
};

export const Input: React.FC<Props> = ({
  title,
  value,
  onChange,
  isPass,
  placeholder,
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.InputArea
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={isPass}
      />
    </S.Container>
  );
};
