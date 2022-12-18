import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { MaterialIcons } from '@expo/vector-icons';




var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
export const TopBar = () => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="signal-wifi-off" size={40} color="black" />
            <Text style={styles.text}> No Internet Connection</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 20
    },
});