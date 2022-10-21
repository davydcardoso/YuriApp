import React from 'react';

import {Picker} from '@react-native-picker/picker';

import * as S from './styles';

type Props = {
  title: string;
  value: string;
  onChangeValue: (value: string) => void;
  items: {
    value: string;
    label: string;
  }[];
};

export const SelectInput: React.FC<Props> = ({
  items,
  title,
  value,
  onChangeValue,
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ContainerSelect>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onChangeValue(itemValue)}>
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </S.ContainerSelect>
    </S.Container>
  );
};
