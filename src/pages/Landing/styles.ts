import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const ImageLanding = styled.Image`
  width: 100%;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TextTitleBold = styled.Text`
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const ButtonStudy = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #9871f5;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonClass = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #04de61;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const TextButtonStudy = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const TotalConnections = styled.Text`
  font-weight: bold;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
