import React from 'react';

import {
  Container,
  Scroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis">
        <SearchForm>
          <Label>Matéria</Label>
          <Input placeholder="Qual a matéria?" />
          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <Input placeholder="Qual o dia?" />
            </InputBlock>
            <InputBlock>
              <Label>Horário</Label>
              <Input placeholder="Qual horário" />
            </InputBlock>
          </InputGroup>
        </SearchForm>
      </PageHeader>
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

export default TeacherList;
