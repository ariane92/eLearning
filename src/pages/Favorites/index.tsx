import React, {useCallback, useState, useEffect} from 'react';
import {View, AsyncStorage} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import {Container, Scroll} from './styles';

const Favorites = () => {
  const [favorites, setFavorite] = useState([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorite(favoritedTeachers);
      }
    });
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });
  return (
    <Container>
      <PageHeader title="Favoritos" />
      <Scroll>
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
          );
        })}
      </Scroll>
    </Container>
  );
};

export default Favorites;
