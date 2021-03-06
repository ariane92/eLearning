import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const Scroll = styled(ScrollView)`
  margin-top: -20px;
  padding-horizontal: 16px;
  padding-bottom: 24px;
`;
