import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  background-color: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-vertical: 40px;
`;

export const OkButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
