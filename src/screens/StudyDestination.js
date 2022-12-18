import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Dimensions, ImageBackground, Pressable, TouchableOpacity } from "react-native";


var screenWidth = Dimensions.get('window').width;




export default function StudyDestination({ navigation }) {

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <SafeAreaView >
                    <View style={styles.container}>


                        {/* study destination  */}
                        <View style={{ flex: 4 }}>
                            <Text style={{ marginVertical: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", fontWeight: "bold" }}>CHOOSE YOUR STUDY DESTINATION</Text>
                            <View style={styles.destinationContainer}>

                                <Image source={require('../../assets/images/uk-banner-image.jpg')} resizeMode="contain" style={styles.destinationImage}>
                                </Image>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={{ marginVertical: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", fontWeight: "bold" }}>Study In Uk</Text>
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StudyUK")}>
                                        <Text style={styles.buttonText}> Learn More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.destinationContainer}>

                                <Image source={require('../../assets/images/study-in-usa.jpg')} resizeMode="contain" style={styles.destinationImage}>
                                </Image>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={{ marginVertical: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", fontWeight: "bold" }}>Study In USA</Text>
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StudyUSA")}>
                                        <Text style={styles.buttonText}> Learn More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.destinationContainer}>

                                <Image source={require('../../assets/images/study-in-canada2.jpg')} resizeMode="contain" style={styles.destinationImage}>
                                </Image>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={{ marginVertical: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", fontWeight: "bold" }}>Study In Canada</Text>
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StudyCanada")}>
                                        <Text style={styles.buttonText}> Learn More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </SafeAreaView>
            </ScrollView>
        </>



    )
}


// stylesheet.....................................................

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 14,
        marginTop: 20
    },
    destinationContainer: {
        flex: 1,
        height: 200,
        backgroundColor: '#e0e9f0',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10
    },
    destinationImage: {
        flex: 1,
        height: 150,
        width: screenWidth - 50,
        borderRadius: 10,


    },
    button: {
        backgroundColor: "black",
        padding: 7,
        borderRadius: 50,
        width: 100,
        marginRight: 5


    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400"

    }
})