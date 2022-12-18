import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


var screenWidth = Dimensions.get('window').width;

export default function Services() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView >
                <View style={styles.container}>
                    <View style={{ flex: 1, marginTop: 10, marginHorizontal: 14 }}>
                        <Image
                            style={{ height: 180, width: screenWidth - 30, borderRadius: 10 }} source={require('../../assets/images/services.jpg')} />
                    </View>

                    <View style={{ flex: 1, marginHorizontal: 14 }}>
                        <Text style={{ marginTop: 20, fontFamily: 'antonio-bold', fontSize: 22, textAlign: "left", color: "black", fontWeight: "bold", paddingBottom: 8 }}>
                            WE OFFER A VARIETY OF SERVICES FOR STUDENTS
                        </Text>
                    </View>


                    <View style={styles.serviceListContainer}>

                        <TouchableOpacity style={styles.singleList}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <AntDesign name="rightcircle" size={24} color="orange" />
                                <Text style={styles.serviceTitle}>Course Finding</Text>
                            </View>
                            <Text style={styles.serviceDescription} >We help you to find the right course within an affordable budget to meet your career goal.</Text>
                        </TouchableOpacity>

                        <View style={styles.line} />

                        <TouchableOpacity style={styles.singleList}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <AntDesign name="rightcircle" size={24} color="orange" />
                                <Text style={styles.serviceTitle}>University Finding</Text>
                            </View>
                            <Text style={styles.serviceDescription} >We will help you to find the right University within your preferable location.</Text>
                        </TouchableOpacity>

                        <View style={styles.line} />

                        <TouchableOpacity style={styles.singleList}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <AntDesign name="rightcircle" size={24} color="orange" />
                                <Text style={styles.serviceTitle}>Application</Text>
                            </View>
                            <Text style={styles.serviceDescription} >We will help to apply to Universities and provide you with the guidance on required documents</Text>
                        </TouchableOpacity>

                        <View style={styles.line} />

                        <TouchableOpacity style={styles.singleList}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <AntDesign name="rightcircle" size={24} color="orange" />
                                <Text style={styles.serviceTitle}>Internal English Test</Text>
                            </View>
                            <Text style={styles.serviceDescription} >Our sister company AIMS English will arrange the internal English test with our partner institutes.</Text>
                        </TouchableOpacity>

                        <View style={styles.line} />

                        <TouchableOpacity style={styles.singleList}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <AntDesign name="rightcircle" size={24} color="orange" />
                                <Text style={styles.serviceTitle}>Interview Preparation</Text>
                            </View>
                            <Text style={styles.serviceDescription} >Our sister company AIMS English will arrange the internal English test with our partner institutes.</Text>
                        </TouchableOpacity>

                        <View style={styles.line} />

                        <TouchableOpacity style={styles.singleList}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <AntDesign name="rightcircle" size={24} color="orange" />
                                <Text style={styles.serviceTitle}>Accomodation Support</Text>
                            </View>
                            <Text style={styles.serviceDescription} >Our sister company AIMS English will arrange the internal English test with our partner institutes.</Text>
                        </TouchableOpacity>


                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>

    );
}



// stylesheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // marginHorizontal: 14,
        marginTop: 30
    },
    serviceListContainer: {
        flex: 3,
        marginTop: 25,
        marginBottom: 5,
        alignItems: 'flex-start',
        justifyContent: "flex-start",


    },
    singleList: {
        backgroundColor: "#e0e9f0",
        width: screenWidth,
        padding: 10,
        // borderRadius: 14,
        // marginBottom: 5,
        // marginVertical: 10



    },
    line: {

        borderBottomColor: 'black',
        borderBottomWidth: 1,

    },
    serviceTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "500",
        color: "black"
    },
    serviceDescription: {
        marginVertical: 10,
        paddingHorizontal: 10,
        color: 'black'
    },
    button: {
        backgroundColor: "white",
        color: "black",
        width: 100,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 5,
        textAlign: "center",
        borderRadius: 50

    }
})