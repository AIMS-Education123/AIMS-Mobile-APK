//import liraries
import { A } from '@expo/html-elements';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';




var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

// create a component
export default function Frontpage({ navigation }) {

    return (
        <>

            <ScrollView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={{ flex: 4 }}>

                            <Image
                                style={{ height: screenHeight, width: screenWidth, borderRadius: 10 }} source={require('../../assets/images/splash1.png')} />
                            <Text style={{ marginTop: 20, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", borderBottomWidth: 1 }}>WHY STUDY IN Canada ?</Text>


                        </View>
                    </View>
                </SafeAreaView>

            </ScrollView>

        </>
    );

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14,
        marginTop: 30
    },

});

