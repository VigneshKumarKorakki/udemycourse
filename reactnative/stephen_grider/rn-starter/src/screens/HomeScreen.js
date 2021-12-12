import React from "react";
import { Text, StyleSheet, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home!!</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate('Component')}
      />

      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate('Square')}
      />

      <Button
        title="Go to Text demo"
        onPress={() => navigation.navigate('Text')}
      />

      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate('Box')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
