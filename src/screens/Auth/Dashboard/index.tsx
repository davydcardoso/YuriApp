import React from 'react';
import {Dimensions, FlatList, RefreshControl} from 'react-native';

import {Header} from '../../../components/Header';

import * as S from './styles';

type RequestsProps = {
  id: string;
  client: string;
  phone: string;
  service: string;
};

const wait = (timeout: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, timeout));
};

const requests: RequestsProps[] = [
  {
    id: '4a7281f3-05c0-40db-9490-2bebdab7dc29',
    client: 'Yuri Lucas',
    phone: '062 9.9444-2221',
    service: 'Recarga de Bateria',
  },
  {
    id: '646170d5-74d1-40f1-9df9-b0c80aefb12c',
    client: 'Lucas Coelho',
    phone: '062 9.9444-2221',
    service: 'Recarga de Bateria',
  },
];

export const Dashboard: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <S.Container>
      <Header />

      <S.ContainerList>
        <FlatList
          data={requests}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{width: Dimensions.get('screen').width - 30}}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <S.CardRequest key={item.id}>
              <S.TextCard>Cliente: {item.client}</S.TextCard>
              <S.TextCard>Serviço: {item.service}</S.TextCard>
              <S.TextCard>Telefone: {item.phone}</S.TextCard>

              <S.ButtonCard>
                <S.TextButton>Atender</S.TextButton>
              </S.ButtonCard>
            </S.CardRequest>
          )}
        />
      </S.ContainerList>
    </S.Container>
  );
};
