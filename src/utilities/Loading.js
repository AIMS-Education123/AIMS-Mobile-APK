import { ActivityIndicator, StyleSheet } from "react-native";



export const IndicatorLoadingView = () => {
    return (
        <ActivityIndicator
            color="black"
            size="large"
            style={styles.IndicatorStyle}
        />
    );
}
const styles = StyleSheet.create({
    IndicatorStyle: {
        flex: 1,
        position: 'absolute',
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});