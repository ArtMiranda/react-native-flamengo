import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <>
    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', top:15}}>
        <Image
          source={require('@/assets/images/iftm-778055454.png')}
          style={styles.reactLogo}
        /></View>
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="title">Eu sou o Artur</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Etapa 1:</ThemedText>
        <ThemedText>
          <ThemedText>
            Primeiro App Concluído! 🎉
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Etapa 2:</ThemedText>
        <ThemedText>
          <ThemedText>
            Vamos aprender um pouco sobre a estrutura de arquivos.
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: 200,
    height: 200,
  },
});
