import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FDC830", "#F37335"],
    title: "Clear",
    subtitle: "Have a good day!",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#544a7d", "#ffd452"],
    title: "Thunderstorm",
    subtitle: "Please stay home",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#8360c3", "#2ebf91"],
    title: "Drizzle",
    subtitle: "It rains a little",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "Rain",
    subtitle: "Bring an umbrella",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "Snow",
    subtitle: "Wow! it's snowing",
  },
  Atmosphere: {
    iconName: "weather-windy",
    gradient: ["#A5FECB", "#20BDFF", "#5433FF"],
    title: "Atmosphere",
    subtitle: "How is the atmosphere",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Clouds",
    subtitle: "It's dark because there are many clouds",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#536976", "#292E49"],
    title: "Mist",
    subtitle: "Moisturizing",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5", "#536976", "#292E49"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#B79891", "#94716B"],
    title: "Dust",
    subtitle: "Get your mask!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Haze",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 44,
    fontWeight: "300",
    color: "white",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
});
