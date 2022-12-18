//import liraries
import { A } from '@expo/html-elements';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';




var screenWidth = Dimensions.get('window').width;

// create a component
export default function StudyCanada({ navigation }) {

    return (
        <>

            <ScrollView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={{ flex: 4 }}>

                            <Image
                                style={{ height: 200, width: screenWidth - 30, borderRadius: 10 }} source={require('../../assets/images/study-in-canada2.jpg')} />
                            <Text style={{ marginTop: 20, marginHorizontal: 5, fontFamily: 'antonio-bold', fontSize: 24, textAlign: "left", color: "black", borderBottomWidth: 1 }}>WHY STUDY IN Canada ?</Text>

                            <Text style={styles.sisterConcerTxt}>
                                One of the biggest reasons students choose to come to Canada is the quality of Canadian education. Canada’s high academic standards and rigorous quality controls mean that you’ll be earning a high-quality education that will open doors for your future and benefit your career over the long term. A Canadian degree, diploma, or certificate is globally recognized as being equivalent to those obtained from the United States or Commonwealth countries.
                            </Text>
                            <Text style={styles.sisterConcerTxt}>
                                The Canadian government offers a work program to students who have obtained a diploma from a post-secondary school in Canada and are looking to gain work experience. This is an excellent way to continue to live in Canada while diversifying and developing your professional skills. Living and tuition fees for international students in Canada are generally lower than in other countries such as the United States and the United Kingdom.

                                The cost of going to school in Canada is affordable and you’ll earn globally recognized qualifications that will set you on the path to career success. As a student living in Canada you can expect a peaceful, multicultural environment with people who are friendly and interested in learning about new cultures. With almost all of the world’s ethnic groups represented in Canada, it’s hard not to find ethnic foods and recreation activities associated with specific cultures.
                            </Text>

                            <Text style={styles.sisterConcerTxt}>
                                Did you know that Canada is a bilingual country and is considered a world leader in language training? Since teaching French and English as a first and second language is an integral part of a Canadian education, you will be able to improve your fluency and capacity for either language as you further your studies. The United Nations consistently ranks Canada as one of the best places in the world to live. As an international student in Canada, you’ll enjoy all of the same freedoms which protect Canadians – respect for human rights, equality, and a stable and peaceful society.

                                Under Canada’s highly dynamic and hands-on academic environment, you will not only acquire knowledge and skills in analysis and communication, but you will also learn how to express yourself, demonstrate your creativity, and develop your self-confidence! Teachers and professors are always available and eager to help with lessons, and studies fuse academic excellence with interaction and collaboration in the classroom.
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




// define your styles.................................................

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

