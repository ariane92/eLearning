import React, {useState, useCallback, useEffect} from 'react';

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
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import {Text, AsyncStorage} from 'react-native';
import api from '../../services/api';

const TeacherList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [week_day, setWeekDay] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  const [favorites, setFavorite] = useState<number[]>([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          },
        );
        setFavorite(favoritedTeachersIds);
      }
    });
  }, []);

  const handleToggleFilterVisible = useCallback(() => {
    setIsFilterVisible(!isFilterVisible);
  }, [isFilterVisible]);

  const handleFilterSubmit = useCallback(async () => {
    loadFavorites();
    const response = await api.get('classes', {
      params: {subject, week_day, time},
    });

    setIsFilterVisible(false);
    setTeachers(response.data);
  }, [subject, week_day, time]);
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
            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFilterSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>
      <Scroll>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </Scroll>
    </Container>
  );
};

export default TeacherList;
