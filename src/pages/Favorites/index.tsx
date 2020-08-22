import React from 'react';
import {View} from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import {Container, Scroll} from './styles';

const Favorites = () => {
  return (
    <Container>
      <PageHeader title="Favoritos" />
      <Scroll>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Scroll>
    </Container>
  );
};

export default Favorites;
