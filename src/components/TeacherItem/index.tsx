import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
  ButtonsContainer,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

const TeacherItem = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{uri: 'https://github.com/ariane92.png'}} />
        <ProfileInfo>
          <Name>Ariane Mateus</Name>
          <Subject>Prog</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>Entusiasta por conversa de bar, filosofa de boteco</Bio>
      <Footer>
        <Price>
          Preço/hora{'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>
        <ButtonsContainer>
          <FavoriteButton>
            <Image source={unFavoriteIcon} />
          </FavoriteButton>
          <ContactButton>
            <Image source={whatsAppIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
