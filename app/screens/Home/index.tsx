import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';
import ChangeLanguage from '@/components/ChangeLanguage';

const Home = () => {
  return (
    <LinearGradient
      // Les couleurs du dégradé, du haut gauche au bas droite
      colors={['#09AFAF', 'white']}
      // Le commencement du gradient (haut gauche)
      start={[0, 0]}
      // La fin du gradient (bas droite)
      end={[12, 1]}
      style={style.screeStyle}
    >
      <ChangeLanguage />
      <Text style={style.textStyle}>Home</Text>
    </LinearGradient>
  );
};

export default Home;