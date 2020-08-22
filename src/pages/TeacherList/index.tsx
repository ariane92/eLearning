import React, {useState, useCallback} from 'react';

import {
  Container,
  Scroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  FilterButton,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import {Text} from 'react-native';

const TeacherList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleToggleFilterVisible = useCallback(() => {
    setIsFilterVisible(!isFilterVisible);
  }, [isFilterVisible]);
  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <FilterButton onPress={handleToggleFilterVisible}>
            <Text>Filter</Text>
          </FilterButton>
        }>
        {isFilterVisible && (
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

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
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
