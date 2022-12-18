//import liraries
import { A } from '@expo/html-elements';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { TopBar } from '../../assets/components/Netinfobar';
import NetInfo from '@react-native-community/netinfo';
import { IndicatorLoadingView } from '../utilities/Loading';



var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;


// create a component
export default function NewsBlogs({ navigation }) {
    const [isConnected, setIsConnected] = useState(true);


    // detecting net connection
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    // rendering UI according netinfo
    if (isConnected) {
        return (
            <>
                <ScrollView>
                    <WebView
                        nestedScrollEnabled
                        javaScriptEnabled={true}
                        scalesPageToFit={true}
                        source={{
                            uri: "https://www.aims-education.com/blogs/"
                        }}
                        renderLoading={IndicatorLoadingView}
                        startInLoadingState={true}
                        style={{ flex: 1, height: 950, width: screenWidth }}
                    />
                </ScrollView>
            </>
        );
    }

    return (
        <TopBar></TopBar>
    )
}



// define your styles
const styles = StyleSheet.create({
    container: {

    },

});

