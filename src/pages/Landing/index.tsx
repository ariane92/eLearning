import React from 'react';
import {View, Image} from 'react-native';

import {
  Container,
  ImageLanding,
  ButtonClass,
  TextTitle,
  ButtonsContainer,
  ButtonStudy,
  TextTitleBold,
  TextButtonStudy,
  TotalConnections,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
const Landing = () => {
  return (
    <Container>
      <ImageLanding source={landingImg} />
      <TextTitle>
        Seja bem vindo, {'\n'}
        <TextTitleBold>O que deseja fazer?</TextTitleBold>
      </TextTitle>
      <ButtonsContainer>
        <ButtonStudy>
          <Image source={studyIcon} />
          <TextButtonStudy>Estudar</TextButtonStudy>
        </ButtonStudy>
        <ButtonClass>
          <Image source={giveClassesIcon} />
          <TextButtonStudy>Dar aulas</TextButtonStudy>
        </ButtonClass>
      </ButtonsContainer>
      <TotalConnections>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
