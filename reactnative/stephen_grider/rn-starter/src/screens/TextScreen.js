import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, } from 'react-native'

const TextScreen = () => {

    // uncomment and run

    // const [name, setName] = useState('');

    // return <View>
    //     <Text>Enter Name:</Text>
    //     <TextInput
    //         style={styles.input}
    //         autoCapitalize="none"
    //         autoCorrect={false}
    //         value={name}
    //         onChangeText={newValue => setName(newValue)}
    //     />
    //     <Text>My Name is : {name}</Text>
    // </View>

    // Uncomment and run

    const [password, setPassword] = useState('')

    return <View>
        <Text>Enter Password: </Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newValue => setPassword(newValue)}
        />
        {password.length < 5 ? <Text>Password should be of above 5</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;