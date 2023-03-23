/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Box = (props) => {
    const TextColor = {
        color: props.color,
    };


    // Given Below decleration Is To set (TEXT)Color According To BackGround Color
    // const UpdateColor = {
        // color: parseInt(props.color.replace('#', ''), 16) > 0xffffff / 1.1 ? "#fff" : "#000"
    // };

    return (
            <View style={styles.container}>
                <Text style={[styles.StayBlessed , TextColor]}> {props.quote} </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    StayBlessed:{
        fontWeight: 'bold',
    },
});

export default Box;
