import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    const name = 'Vignesh Kumar Korakki'

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React native!</Text>
            <Text style={styles.textStyle2}>My Name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen