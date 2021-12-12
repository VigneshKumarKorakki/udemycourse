import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hello Viki'
    const greeting2 = <Text>'Hello Viki2</Text>

    return (
        <View>
            <Text style={styles.textStyle}>This is components screen</Text>
            <Text>{greeting}</Text>
            {greeting2}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen
