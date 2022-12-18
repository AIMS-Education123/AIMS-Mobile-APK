//import liraries
import { A } from '@expo/html-elements';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';




var screenWidth = Dimensions.get('window').width;

// create a component
export default function StudyUSA({ navigation }) {

    return (
        <>

            <ScrollView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={{ flex: 4 }}>

                            <Image
                                resizeMode="contain"
                                style={{ height: 200, width: screenWidth - 30, borderRadius: 10 }} source={require('../../assets/images/study-in-usa.jpg')} />
                            <Text style={{ marginTop: 20, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", borderBottomWidth: 1 }}>WHY STUDY IN USA ?</Text>

                            <Text style={styles.sisterConcerTxt}>
                                The United States has one of the world’s finest university systems, with outstanding programs in virtually all fields. At the undergraduate level, excellent programs exist in traditional disciplines, as well as in professional fields. At the graduate level, students have the opportunity to work directly with some of the finest minds in their field of study, with the chance to become involved with exclusive research and educational opportunities. U.S. degrees are recognized throughout the world for their excellence.
                            </Text>
                            <Text style={styles.sisterConcerTxt}>
                                US education is recognized all over the world. According to the QS world university ranking 2023, 5 universities in the USA are in the top 10. According to the QS world university ranking by subject 2022, in “ Arts and Humanities,” there are 7 universities in the top 10. In “ Engineering and Technology,” 3 universities are in the top 10. In “ Life Sciences and Medicine,” there are 5 universities in the top 10. In “ Natural Sciences,” 5 universities are in the top 10. Lastly, in “ Social Sciences and Management,” 5 US universities are in the top 10. However, the most popular degree in the USA is the STEM degree. In the US, STEM degrees are supported through the America COMPETES ( Creating Opportunities to Meaningfully Promote Excellence in Technology, Education and Science). STEM graduates are high in demand across various industries. A student will get transferable skills like problem-solving, research and analysis, and critical thinking by taking a STEM degree in the US.

                                US universities place great significance on diversity, meaning classes will consist of students of all ages, religions, and countries of origin. This provides a stimulating and rich learning environment that encourages cross-cultural understanding and networking. Most classes will contain no more than 20 students and the professors will take the time to get to know students and support their learning even outside the classroom.
                            </Text>

                            <Text style={styles.sisterConcerTxt}>
                                There is also always a very active social life on US campuses, with many clubs and organizations students can join that will help further career opportunities and allow interaction with students who have similar tastes and interests.

                                International students in the US can work on a job on campus up to 20 hours a week. Most find that their time is better spent taking internships, or Curricular Practical Training, which allows students to work for university credit in a job in a related field. Nearly every university, even those not located in big cities, has employees dedicated to helping students secure internships.

                                All US universities also offer numerous extra-curricular activities that provide real-world job experience. This could include writing for the school newspaper, participating in science fairs, joining the debate team, and much more. The idea is to give you practical experience to hone what you learn in class. This becomes invaluable when interviewing for a job.
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

