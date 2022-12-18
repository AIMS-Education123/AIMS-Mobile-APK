//import liraries
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
export default function ApplyNow({ navigation }) {
    const [isConnected, setIsConnected] = useState(true);




    // some code to remove the header section of website in webview
    //     const runFirst = `
    //     let selector = document.querySelector("fusion-builder-row-2")
    //     selector.style.display = "none"
    //     true;
    //   `;





    // detecting netinfo ,,,repetative section , have to optimize this part
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, []);




    // rendering ui according netinfo
    if (isConnected) {
        return (
            <>
                <ScrollView>
                    <WebView
                        nestedScrollEnabled
                        javaScriptEnabled={true}
                        scalesPageToFit={true}
                        source={{
                            uri: "https://www.aims-education.com/apply-now/"
                        }}
                        // injectedJavaScript={runFirst}
                        renderLoading={IndicatorLoadingView}
                        startInLoadingState={true}
                        style={{ flex: 1, height: 950, width: screenWidth }}
                    />
                </ScrollView>
            </>
        );

    }

    return (
        <TopBar />
    );
}





// define your styles
const styles = StyleSheet.create({
    container: {

    },

});

