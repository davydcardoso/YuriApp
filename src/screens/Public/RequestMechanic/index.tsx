import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  AlertType,
  useDropdownAlert,
} from '../../../Contexts/DropdownAlertContext';

import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';
import {SelectInput} from '../../../components/SelectInput';

import * as S from './styles';

const services: {label: string; value: string}[] = [
  {
    label: 'Recarga de bateria',
    value: 'd6d0831e-5205-429a-af56-5905eb782826',
  },

  {
    label: 'Troca de Pneus',
    value: '68a9085b-49ef-4629-bb85-041a15d9749f',
  },
  {
    label: 'Reboque',
    value: '3ebf2713-faa8-4c24-8ff6-dfbc3fbbcefe',
  },
];

export const RequestMechanic: React.FC = () => {
  //@ts-ignore
  const {ref} = useDropdownAlert();
  const {navigate} = useNavigation();

  const [username, setUsername] = useState('');
  const [telephone, setTelephone] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleRedirectToLoginScreen = () => navigate('Login' as never);

  const handleRequestMechanic = () => {
    if (
      !username ||
      username.trim().length < 5 ||
      username.trim().length > 255
    ) {
      ref.current.alertWithType(
        AlertType.WARN,
        'OPS',
        'Por favor, informe um nome valido!',
      );
      return;
    }

    if (
      !telephone ||
      telephone.trim().length < 5 ||
      telephone.trim().length > 255
    ) {
      ref.current.alertWithType(
        AlertType.WARN,
        'OPS',
        'Por favor, informe um telefone valido',
      );
      return;
    }

    ref.current.alertWithType(
      AlertType.SUCCESS,
      'Sucesso',
      'Seu pedido foi efetuado com sucesso! Aguarde que em instante ele será atendido por um tecnico!',
    );
    return;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.HeaderContainer>
            <TouchableOpacity onPress={handleRedirectToLoginScreen}>
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: 40, height: 40, tintColor: '#FFF'}}
                source={require('../../../assets/images/register_login_signup_icon_219991.png')}
              />
            </TouchableOpacity>
          </S.HeaderContainer>

          <S.TitlePage>Solicitar Serviço</S.TitlePage>

          <S.Form>
            <Input
              title="Informe seu Nome"
              value={username}
              onChange={setUsername}
            />

            <SelectInput
              title="Selecione o Serviço"
              items={services}
              value={selectedService}
              onChangeValue={setSelectedService}
            />

            <Input
              title="Informe seu Telefone"
              value={telephone}
              onChange={setTelephone}
            />
          </S.Form>

          <S.BoxButton>
            <Button title="Solicitar" onPress={handleRequestMechanic} />
          </S.BoxButton>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
