import React, {useCallback} from 'react';

import {
  Container,
  ImageBackground,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';
import giveClassBgImage from '../../assets/images/give-classes-background.png';
import {useNavigation} from '@react-navigation/native';

const GiveClasses = () => {
  const navigation = useNavigation();

  const handleBackToLanding = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <Container>
      <ImageBackground resizeMode="contain" source={giveClassBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma
        </Description>
      </ImageBackground>
      <OkButton onPress={handleBackToLanding}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;
