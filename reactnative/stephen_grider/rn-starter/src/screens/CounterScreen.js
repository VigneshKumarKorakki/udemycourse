import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    return { ...state, counter: state.counter + action.value }
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return <View>

        <Button
            title="Increase"
            onPress={() => dispatch({ value: 1 })}
        />

        <Button
            title="Decrease"
            onPress={() => dispatch({ value: -1 })}
        />

        <Text>Current Count: {state.counter}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen