import { Image, StyleSheet, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            top: 15,
          }}
        >
          <Image
            source={require("@/assets/images/fla.png")}
            style={styles.reactLogo}
          />
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CRF</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Clube de Regatas do Flamengo</ThemedText>
        <ThemedText>O melhor e maior time do Brasil.</ThemedText>
      </ThemedView>

      <View style={styles.hr}></View>
      <ThemedText type="subtitle">Última partida:</ThemedText>
      <ThemedView style={styles.scoreContainer}>
        <Image
          source={require("@/assets/images/vasc.png")}
          style={styles.shieldStyle}
        />
        <ThemedText type="title">1 x 6</ThemedText>
        <Image
          source={require("@/assets/images/fla.png")}
          style={styles.shieldStyle}
        />
      </ThemedView>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ThemedText type="defaultSemiBold">
          Estádio do Maracanã - 02/06/2024
        </ThemedText>
        <ThemedText type="defaultSemiBold">16:00h</ThemedText>
        <ThemedText type="defaultSemiBold">
          Campeonato Brasileiro - Série A
        </ThemedText>
      </View>
      <View style={styles.hr}></View>

      <ThemedText type="subtitle">Próxima partida:</ThemedText>
      <ThemedView style={styles.scoreContainer}>
        <Image
          source={require("@/assets/images/gremio.png")}
          style={styles.shieldStyle}
        />
        <ThemedText type="title"> x </ThemedText>
        <Image
          source={require("@/assets/images/fla.png")}
          style={styles.shieldStyle}
        />
      </ThemedView>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ThemedText type="defaultSemiBold">
          Estádio do Maracanã - 13/06/2024
        </ThemedText>
        <ThemedText type="defaultSemiBold">20:00h</ThemedText>
        <ThemedText type="defaultSemiBold">
          Campeonato Brasileiro - Série A
        </ThemedText>
      </View>

      <View style={styles.hr}></View>
      <View>
        <ThemedText type="subtitle">História:</ThemedText>
        <ThemedText type="defaultSemiBold" style={{top: 15}}>
          O Clube de Regatas do Flamengo (mais conhecido simplesmente como
          Flamengo, e popularmente pelos apelidos de Mengo, Mengão e Fla) é uma
          agremiação poliesportiva brasileira com sede na cidade do Rio de
          Janeiro. Fundado no bairro de mesmo nome para disputas de remo em 17
          de novembro de 1895, tornou-se um dos clubes mais bem-sucedidos e
          populares do esporte brasileiro, especialmente pelo futebol.
          </ThemedText>
            
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  scoreContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  reactLogo: {
    height: 200,
    width: 200,
  },
  shieldStyle: {
    margin: 10,
    width: 70,
    height: 70,
    resizeMode: "contain",
},
  hr: {
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: 1,
    width: "100%",
  },
});
