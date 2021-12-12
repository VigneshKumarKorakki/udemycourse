import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15


const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        // if (color === 'red') {
        //     if (red + change > 255 || red + change < 0) {
        //         return;
        //     } else {
        //         setRed(red + change);
        //     }
        // } else if (color === 'blue') {
        //     if (blue + change > 255 || blue + change < 0) {
        //         return;
        //     } else {
        //         setBlue(blue + change);
        //     }
        // } else if (color === 'green') {
        //     if (green + change > 255 || green + change < 0) {
        //         return;
        //     } else {
        //         setGreen(green + change)
        //     }
        // }

        // Alternative

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    };

    return <View>
        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="red"
        />
        <ColorCounter
            // onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            // onDecrease={() => setGreen(green - COLOR_INCREMENT)}
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color="green"
        />
        <ColorCounter
            color="blue"
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} >

        </View>

    </View>
};

styles = StyleSheet.create({
    square: {
        height: 100,
        width: 100,
        // backgroundColor: {}

    }
});

export default SquareScreen