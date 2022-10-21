import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {useAuth} from '../../Contexts/AuthContexts';

import * as S from './styles';

export const Header: React.FC = () => {
  const {signOut} = useAuth();

  const handleSignOutAccount = () => {
    signOut();
  };

  return (
    <S.Contrainer>
      <TouchableOpacity onPress={handleSignOutAccount}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 40, height: 40, tintColor: '#FFF'}}
          source={require('../../assets/images/4213459-common-door-exit-logout-out-signout_115411.png')}
        />
      </TouchableOpacity>
    </S.Contrainer>
  );
};
