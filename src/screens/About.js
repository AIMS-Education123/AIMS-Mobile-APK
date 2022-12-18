import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Dimensions, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from "../../Theme/Color";
import { A } from "@expo/html-elements";




var screenWidth = Dimensions.get('window').width;
export default function About({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView >
                <View style={styles.container}>

                    {/* logo section */}
                    <View style={styles.banner}>
                        <Image source={require("../../assets/icons/aims-icon.png")} />
                        <Text style={{ marginVertical: 14, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 20, textAlign: "left", color: "black", fontWeight: "bold" }}>AIMS EDUCATION</Text>
                    </View>

                    {/* image and about us text section */}
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        {/* <AntDesign name="rightcircle" size={24} color="#cf9a2c" /> */}
                        <Text style={styles.sectionTitle}>LITTLE BIT ABOUT US</Text>
                    </View>
                    {/* <View style={{ flex: 1, marginTop: 10 }}>
                        <Image
                            style={{ height: 250, width: screenWidth - 30, borderRadius: 10, marginBottom: 20 }} source={require('../../assets/images/london-city.jpg')} />
                    </View> */}
                    <View style={{ flex: 4 }}>
                        <Text style={{ marginHorizontal: 5, marginVertical: 10, textAlign: "justify", fontFamily: "spartan-light", fontSize: 16, lineHeight: 20 }}>
                            AIMS Education is an overseas education consulting firm that helps students to study abroad. Through AIMS Education, overseas intending students can study in the UK, USA and Canada. The experienced team of AIMS Education offers authentic and resourceful information and solutions to students interested in studying abroad. The experienced and well-trained counsellors of AIMS Education are dedicated to offering multiple services and help to the students anytime they need it. They have real-life experience studying abroad. Moreover, they get training from the experts to be up-to-date with their knowledge.
                            Furthermore, besides helping students to study abroad, we are also committed to offering top-quality marketing services to our partner education recruitment organisations. Our main purpose is to create a bridge between students and overseas education institutes to find their best match.
                        </Text>
                    </View>

                    {/* features section */}
                    <View style={styles.featuresContainer}>

                        <View style={styles.singleFeatures}>
                            <MaterialCommunityIcons name="home-analytics" size={50} color="orange" />
                            <Text style={styles.featuresTitle}>OUR BRANCHES</Text>
                            <Text style={styles.featuresTxt}>We have international branches in the UK, Morocco, Pakistan, Ghana, Algeria and Bangladesh. Besides, we are working to expand our branches worldwide to help aspiring students study abroad.</Text>
                        </View>
                        <View style={styles.singleFeatures}>
                            <FontAwesome name="bookmark" size={50} color="orange" />
                            <Text style={styles.featuresTitle}>OUR MISSION</Text>
                            <Text style={styles.featuresTxt}>Our mission is to be the most reliable platform for our associate universities and students wishing to study in the UK, USA, and Canada. Our goal is to make overseas education accessible to students who want to study abroad.</Text>
                        </View>
                        <View style={styles.singleFeatures}>
                            <FontAwesome5 name="graduation-cap" size={50} color="orange" />
                            <Text style={styles.featuresTitle}>OUR VISION</Text>
                            <Text style={styles.featuresTxt}>We envision making overseas education accessible to every student who wishes to study abroad. Our vision is to be one of the top agents in the South Asia and Africa region by 2025.</Text>
                        </View>
                    </View>

                    {/* sister concern section */}
                    <View style={styles.sisterConcer}>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                            {/* <AntDesign name="rightcircle" size={24} color="#cf9a2c" /> */}
                            <Text style={styles.sectionTitle}>OUR SISTER CONCERNS</Text>
                        </View>

                        <View style={styles.singlesisterConcer}>
                            <A href="https://www.aims-academy.com/" style={styles.sisterConcerTitle}>AIMS ACADEMY</A>
                            <Text style={styles.sisterConcerTxt}>
                                AIMS Academy offer ranges of professional and vocational courses in business studies, accounting and finance, tourism and hospitality management, IT and so on. We offer courses starts from RQF Level 3 to 7 that accredited by OTHM Qualification UK. Other courses are accredited by Bangladesh Technical Education Board.

                                We have industry-experienced tutors and a dedicated support team to make your learning journey smoother and memorable. We have a dedicated team to place you in local and international universities for further studies and transferring credits while the employability team helps you to find internships and job in the local market.
                            </Text>
                        </View>

                        <View style={styles.singlesisterConcer}>
                            <A href="https://www.aims-english.com/" style={styles.sisterConcerTitle}>AIMS ENGLISH</A>
                            <Text style={styles.sisterConcerTxt}>
                                AIMS English is an excellent English teaching, learning, and practice center where we use unique training and studying methods in order to develop the level of English for all of our students. We have unique course materials and experienced tutors to make learning English as smooth and easy as possible.
                            </Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20, borderTopWidth: 1, padding: 10 }}>
                        <FontAwesome name="copyright" size={10} color="black" />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>AIMS EDUCATION</Text>
                    </View>


                </View>
            </SafeAreaView>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 15,
        fontFamily: "spartan-regular"
    },
    sectionTitle: {
        fontSize: 18,
        borderBottomWidth: .2,
        marginLeft: 5,
        marginBottom: 10,
        color: "#CF9A2C",
        fontWeight: "bold",
        marginTop: 20
    },
    banner: {
        flex: 1,
        justifyConten: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 20,

    },

    featuresContainer: {
        flex: 3,
        paddingVertical: 10

    },
    singleFeatures: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#e0e9f0",
        // borderBottomWidth: 1,
        // borderBottomColor: "orange",
        borderRadius: 10,
        marginTop: 8
    },
    featuresTitle: {
        fontSize: 16,
        fontFamily: "antonio-bold",
        fontWeight: "500",
        color: "black"
    },
    featuresTxt: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'light',
        marginTop: 5,
        color: "black",
        fontFamily: "spartan-light",
        lineHeight: 20

    },
    sisterConcer: {
        flex: 3,
        padding: 10

    },
    singlesisterConcer: {
        marginVertical: 10

    },
    sisterConcerTitle: {
        fontSize: 18,
        backgroundColor: "#007089",
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontFamily: "antonio-bold",
        color: 'white',
        marginBottom: 8,
        borderRadius: 30,
        width: 200
    },

    sisterConcerTxt: {
        marginVertical: 10,
        textAlign: "justify",
        fontFamily: "spartan-light",
        fontSize: 16,
        lineHeight: 20
    }


})