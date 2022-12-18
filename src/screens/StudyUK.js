//import liraries
import { A } from '@expo/html-elements';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';




var screenWidth = Dimensions.get('window').width;

// create a component
export default function StudyUK({ navigation }) {

    return (
        <>

            <ScrollView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={{ flex: 4 }}>

                            <Image
                                resizeMode="contain"
                                style={{ height: 200, width: screenWidth - 30, borderRadius: 10 }} source={require('../../assets/images/study-in-uk1.jpg')} />
                            <Text style={{ marginTop: 20, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", borderBottomWidth: 1 }}>WHY STUDY IN UK ?</Text>

                            <Text style={styles.sisterConcerTxt}>
                                The UK is fast emerging as one of the most popular study destinations for international students. There are numerous factors that prompt international students to pursue their education in the UK. UK education equips students with unparalleled academic and professional skills and augments their personal development with an unforgettable cultural experience.

                                Quality standards for UK institutions are amongst the best in the world. According to the QS world university ranking 2023, 4 out of the top 10 universities in the world are from the UK. Besides, 8 universities in the UK are in the top 50 in the QS ranking 2022. Moreover, Quality Assurance Agency (QAA) monitors the academic standards and quality of learning. At the same time, the Teaching Excellence Framework (TEF) maintains and controls teaching excellence standards amongst all the educational institutes, ensuring the best education and learning outcomes for their students.
                            </Text>
                            <Text style={styles.sisterConcerTxt}>
                                UK qualifications are recognized internationally and valued by employers, universities and governments throughout the world. The UK is also renowned for the excellence of its research and teaching. According to the Research Excellence Framework (REF) 2014, 30% of UK universities research is classified as ‘world-leading’ and 46% as ‘internationally excellent’.

                                UK institutions use a variety of teaching and assessment methods to encourage independence, as well as mastery of the subject. The teaching is interactive and extremely relevant to the industry with emphasis on practical knowledge and skills-based approach. A lot of education systems around the world have modelled themselves around the British education system. Institutions offer the option of taking up a work placement as part of its program for many undergraduate and postgraduate courses.
                            </Text>

                            <Text style={styles.sisterConcerTxt}>
                                Having a work placement integrated into the course gives the students cutting edge knowledge and proficiency as well as on-the-job training in the area of study. International students in the UK can work up to 20 hours during term time and full time during the holidays. After completion of the course, students gain a 2 year ‘Post Study Work’ visa to acquire more experience. In addition, students can also switch to a number of work visas including Skilled Worker visa, Global Talent visa, Start-up and Innovator Visa, Health and Care visa, Creative Route visa and so on.
                            </Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ApplyNow")}>
                                <Text style={styles.buttonText}>
                                    REGISTER NOW

                                </Text>
                            </TouchableOpacity>
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
    sisterConcerTxt: {
        marginHorizontal: 5,
        marginVertical: 10,
        textAlign: "justify",
        fontFamily: "spartan-light",
        fontSize: 16,
        lineHeight: 20
    },
    button: {
        backgroundColor: "#CF9A2C",
        padding: 12,
        borderRadius: 10,
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

