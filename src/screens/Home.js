import React, { useState } from "react";
import { ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import "react-native-gesture-handler"


var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;



export default function Home({ navigation }) {




    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 1, marginHorizontal: 0, marginTop: 0 }}>
                        <Image
                            style={{ height: 290, width: screenWidth, borderRadius: 0 }} source={require('../../assets/images/uk-banner-image.jpg')} />
                    </View>
                    <View style={styles.slogan}>
                        <Text style={{ marginTop: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 28, textAlign: "center", color: "white", fontWeight: "bold" }}>
                            YOUR ONE STOP STUDY SOLUTION
                        </Text>

                    </View>


                    {/* our features */}
                    <View style={{
                        flex: 3, flexDirection: 'row', justifyContent: "space-around",
                        alignItems: 'center', marginVertical: 20, marginHorizontal: 14
                        , marginBottom: 10
                    }}>
                        <View style={{
                            flex: 1, height: 120, backgroundColor: "#e0e9f0", justifyContent: "center",
                            alignItems: 'center', padding: 5, marginHorizontal: 5, borderRadius: 10
                        }}>
                            <Ionicons name="stopwatch-outline" size={45} color="orange" />
                            <Text style={{ textAlign: 'center', fontFamily: 'spartan-regular', fontSize: 13, fontWeight: "500", marginTop: 5 }}>One Stop Study Solution</Text>
                        </View>
                        <View style={{
                            flex: 1, height: 120, backgroundColor: "#e0e9f0", justifyContent: "center",
                            alignItems: 'center', padding: 5, marginHorizontal: 5, borderRadius: 10
                        }}>
                            <MaterialIcons name="people-alt" size={45} color="orange" />
                            <Text style={{ textAlign: 'center', fontFamily: 'spartan-regular', fontSize: 13, fontWeight: "500", marginTop: 5 }}>One To One Discussion Session</Text>
                        </View>
                        <View style={{
                            flex: 1, height: 120, backgroundColor: "#e0e9f0", justifyContent: "center",
                            alignItems: 'center', padding: 5, marginHorizontal: 5, borderRadius: 10
                        }}>
                            <MaterialIcons name="support-agent" size={45} color="orange" />
                            <Text style={{ textAlign: 'center', fontFamily: 'spartan-regular', fontSize: 13, fontWeight: "500", marginTop: 5 }}>End To End Student
                                Support</Text>
                        </View>
                    </View>



                    {/* study destination  */}
                    <View style={{ flex: 4, marginTop: 20, marginHorizontal: 14 }}>
                        <Text style={{ marginVertical: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 26, textAlign: "left", color: "black", fontWeight: "bold" }}>CHOOSE YOUR STUDY DESTINATION</Text>


                        <View style={styles.studyImageContainer}>

                            <TouchableOpacity onPress={() => navigation.navigate("StudyUK")}>
                                <ImageBackground source={require('../../assets/images/study-in-uk1.jpg')} resizeMode="contain" imageStyle={{
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                }} style={{ flex: 1, height: 180, width: screenWidth - 30 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("StudyUK")}
                                        style={{ backgroundColor: "black", opacity: .8, width: 200, height: 50, marginTop: 90, padding: 5, alignSelf: "flex-end", borderRadius: 20, marginRight: 5 }}>
                                        <Text style={{ color: 'white', fontSize: 28, textAlign: 'center', fontFamily: "antonio-bold" }}>Study In Uk</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("StudyUSA")}>
                                <ImageBackground style={{ flex: 1 / 2, marginRight: 5, width: screenWidth / 2 - 20, height: 120 }} source={require('../../assets/images/study-in-usa.jpg')} imageStyle={{
                                    borderRadius: 10,
                                }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("StudyUSA")} style={{ backgroundColor: "black", opacity: .9, width: 140, height: 35, marginTop: 70, padding: 5, borderRadius: 20, marginLeft: 3 }}>
                                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontFamily: 'antonio-bold' }}>Study In USA</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => navigation.navigate("StudyCanada")}>
                                <ImageBackground style={{ flex: 1 / 2, marginleft: 5, width: screenWidth / 2 - 20, height: 120 }} source={require('../../assets/images/study-in-canada.jpg')} imageStyle={{
                                    borderRadius: 10,
                                }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("StudyCanada")} style={{ backgroundColor: "black", opacity: .9, width: 145, height: 35, marginTop: 70, padding: 5, borderRadius: 20, marginLeft: 3 }}>
                                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontFamily: 'antonio-bold' }}>Study In Canada</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </TouchableOpacity>



                        </View>

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("ApplyNow")} style={styles.button}>
                        <Text style={styles.buttonText}>
                            APPLY NOW

                        </Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </ScrollView >
    )
}




// stylesheet
// ..................................................................................

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdeed',
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight

    },
    studyImageContainer: {

    },
    slogan: {
        flex: 2,
        marginHorizontal: 15,
        backgroundColor: "orange",
        marginTop: 20,
        position: 'relative',
        zIndex: 10, borderRadius: 10,
        height: 150,
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#007089",
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 14,
        marginTop: 25,
        marginBottom: 10,

    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"

    }
});