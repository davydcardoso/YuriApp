import React, {useState} from 'react';
import {Image, View} from 'react-native';

import {
  AlertType,
  useDropdownAlert,
} from '../../../Contexts/DropdownAlertContext';

import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';

import * as S from './styles';
import {useAuth} from '../../../Contexts/AuthContexts';

const accounts = [
  {
    login: 'admin',
    pasword: '123456',
  },
  {
    login: 'admin1',
    pasword: '123456',
  },
];

export const Login: React.FC = () => {
  //@ts-ignore
  const {ref} = useDropdownAlert();

  const {signIn} = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (
      !username ||
      username.trim().length < 5 ||
      username.trim().length > 255
    ) {
      ref.current.alertWithType(
        AlertType.WARN,
        'OPS',
        'Por favor, informe um login valido!',
      );
      return;
    }

    if (
      !password ||
      password.trim().length < 5 ||
      password.trim().length > 255
    ) {
      ref.current.alertWithType(
        AlertType.WARN,
        'OPS',
        'Por favor, informe uma senha valido!',
      );
      return;
    }

    const account = accounts.find(item => item.login === username);

    if (!account) {
      ref.current.alertWithType(
        AlertType.WARN,
        'OPS',
        'Usuario não existe no sistema',
      );
      return;
    }

    if (account.pasword !== password) {
      ref.current.alertWithType(
        AlertType.WARN,
        'OPS',
        'A senha informada está incorreta!!',
      );
      return;
    }

    signIn({username, password});
  };

  return (
    <S.Container>
      <S.FormBox>
        <S.LogoBox>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 140, height: 140}}
            source={require('../../../assets/images/146manmechanic2_100581.png')}
          />
        </S.LogoBox>

        <Input
          title="Usuário"
          placeholder="@userteste"
          value={username}
          onChange={setUsername}
        />

        <Input
          title="Senha"
          placeholder="@password"
          isPass
          value={password}
          onChange={setPassword}
        />

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{height: 30}}
        />

        <Button onPress={handleSignIn} />
      </S.FormBox>
    </S.Container>
  );
};
