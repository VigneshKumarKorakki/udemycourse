import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {

    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Box Screen</Text>
        <Text style={styles.textTwoStyle}>Box Screen</Text>
        <Text style={styles.textThreeStyle}>Box Screen</Text>
        {/* <Text style={styles.textFourStyle}>Box Screen</Text> */}
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'center',
        // flexDirection: 'row',
        height: 200,
        // justifyContent: 'flex-end',
        // flexDirection: 'row'
    },

    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // margin: 1,
        padding: 5,
        // flex: 1,
        // alignSelf: 'center'
        position: 'absolute'
    },

    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'yellow',
        // margin: 1,
        padding: 5,
        // flex: 1,
        // alignSelf: 'center',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // ...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end'
    },

    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // margin: 1,
        padding: 5,
        // flex: 1,
        alignSelf: 'center'
    }
})

export default BoxScreen