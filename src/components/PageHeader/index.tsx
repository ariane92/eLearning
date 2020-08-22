import React, {useCallback, ReactNode} from 'react';
import {Image} from 'react-native';

import {Container, TopBar, Header} from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import {Title} from '../../pages/GiveClasses/styles';
import {useNavigation} from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const navigation = useNavigation();
  const handleGoBack = useCallback(() => {
    navigation.navigate('Landing');
  }, [navigation]);
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} />
        </BorderlessButton>
        <Image source={logoImg} />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
