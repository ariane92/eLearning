import React, {useCallback} from 'react';
import {Image} from 'react-native';

import {Container, TopBar} from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import {Title} from '../../pages/GiveClasses/styles';
import {useNavigation} from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  const navigation = useNavigation();
  const handleGoBack = useCallback(() => {
    navigation.navigate('Landing');
  }, []);
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} />
        </BorderlessButton>
        <Image source={logoImg} />
      </TopBar>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
