import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    return <View>
        <Text>{props.title}</Text>
        <Image
            source={props.imageSource}
        />
        <Text>Image score: {props.score}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;