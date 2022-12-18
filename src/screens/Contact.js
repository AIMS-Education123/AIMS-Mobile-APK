import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Dimensions, FlatList } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';



var screenWidth = Dimensions.get('window').width;


// bracnces json data..................................................................
export const brances = [
    {
        name: "UK Office (Head Office)",
        location: "The Gateway Building 4th Floor 10 Elmer Approach ​Southend on Sea",
        phone: "0333 224 9183",
        email: "uk@aims-education.com"

    },
    {
        name: "Dhaka Branch",
        location: "First Floor, Block F, Road 7 House 3 Banani, Dhaka 1213 Bangladesh",
        phone: "+880 1888-051115",
        email: "dhaka@aims-education.com"

    },
    {
        name: "Sylhet (Zindabazar Branch",
        location: "City Centre (9th Floor) Zindabazar, Sylhet-3100 Bangladesh",
        phone: "+8801888051115, +8801888051116",
        email: "sylhet@aims-education.com"

    },
    {
        name: "Sylhet (Uposhahar Branch",
        location: "House No.34, ABC Point Uposhahar Sylhet Bangladesh",
        phone: "+8801888051117",
        email: "info@aims-education.com"

    },
    {
        name: "Pakistan Branch",
        location: "Ward number x111 , property nu 800/5/E, Gouse Azam Road, Near Nadala Chowk, Multan, Bosan Town, MULTAN, Punjab",
        phone: "+00000000000",
        email: "sylhet@aims-education.com"

    },
    {
        name: "Ghana Branch",
        location: "PRX8+XJW, Joylove Road, Pantang West",
        phone: "+233257095666",
        email: "ghana@aims-education.com"

    },
    {
        name: "Algeria Branch",
        location: "N°01, Bat N°08, Cité Sonatrach, Boulevard Des Grands Vents, Chéraga, 16014, Algiers",
        phone: "+213 54-925-9157",
        email: "algeria@aims-education.com"

    }


]



var screenWidth = Dimensions.get('window').width;



export default function Contact() {

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView >
                <View style={styles.container}>
                    <View style={{ flex: 1, marginTop: 10 }}>

                        <Image
                            style={{ height: 180, width: screenWidth - 30, borderRadius: 10 }} source={require('../../assets/images/maps.jpg')} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginTop: 20, fontFamily: 'antonio-bold', fontSize: 22, textAlign: "left", color: "black", paddingBottom: 8, fontWeight: "bold" }}>
                            WE HAVE SERVERAL BRANCES AROUND THE WORLD
                        </Text>
                    </View>

                    {/* brance section */}
                    <Text style={{ marginTop: 20, fontFamily: 'antonio-bold', fontSize: 18, textAlign: "left", color: "black", fontWeight: "bold", paddingBottom: 8, borderBottomWidth: 1 }}>
                        OUR BRANCES
                    </Text>
                    <ScrollView horizontal={true} style={{ width: screenWidth }}>
                        <FlatList
                            contentContainerStyle={styles.list}
                            keyExtractor={(item, index) => item.name}
                            data={brances}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.item}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        {/* <View style={styles.line}></View> */}
                                        <View style={{ flex: .8, flexDirection: "row", marginTop: 5, alignItems: "flex-start", marginLeft: -6 }}>
                                            <Entypo name="location-pin" size={26} color="orange" />
                                            <Text style={{ marginHorizontal: 5, width: screenWidth - 20 }}>{item.location}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 5, alignItems: "flex-start" }}>
                                            <Foundation name="telephone" size={24} color="orange" />
                                            <Text style={{ marginLeft: 5 }}>{item.phone}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 5, alignItems: "flex-start" }}>
                                            <Entypo name="email" size={22} color="orange" />
                                            <Text style={{ marginLeft: 5 }}>{item.email}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>

                </View>
            </SafeAreaView>
        </ScrollView>)
}





// StyleSheet.absoluteFill.......................................................

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 16,
        fontFamily: "spartan-regular",

        marginTop: 40
    },
    item: {
        marginVertical: 15

    },
    title: {
        fontSize: 16,
        fontFamily: "antonio-bold",
        backgroundColor: "#007089",
        paddingVertical: 8,
        paddingHorizontal: 15,
        color: 'white',
        marginBottom: 8,
        borderRadius: 30,
        width: 250
    },
    // line: {
    //     height: 2,
    //     width: 250,
    //     backgroundColor: "#368ea2"
    // },
    list: {
        paddingVertical: 20,
        // paddingHorizontal: 15
    },

}
)