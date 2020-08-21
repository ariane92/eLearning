import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />
      <TeacherItem />
    </Container>
  );
};

export default TeacherList;
