/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
    useEffect
} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WebViewApp from '../screens/WebView';
import RNBootSplash from "react-native-bootsplash"

const HomeScreen = ({navigation}) => {
    let init = async () => {
        // …do multiple async tasks
        // return await fetch("www.ggogle.com");
    };

    useEffect(() => {
        // init().finally(() => {
        //   // without fadeout: RNBootSplash.hide()
        RNBootSplash.hide({ duration: 250 });
        // });
    });

    const screenHeight = Math.round(Dimensions.get('window').height);
    return (
        <View style={styles.body}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <ScrollView
                    style={styles.scrollView}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Article", {link: "https://www.psa.gov.qa/en/statistics1/StatisticsSite/census/census2020/Pages/validate.aspx"})}>
                            <View>
                                <Text style={styles.text}>Option 1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Article", {link: "https://www.psa.gov.qa/en/statistics1/StatisticsSite/Census/census2020/Pages/CensusRegistration2020.aspx"})}>
                            <View>
                                <Text style={styles.text}>Option 2</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <View>
                                <Text style={styles.text}>Option 3</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <View>
                                <Text style={styles.text}>Option 4</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Article: {screen: WebViewApp},
    },
    {
        // Specifing Initial Screen
        initalRoute: 'Home'
  });

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    scrollView: {
        // backgroundColor: Colors.lighter,
        height: "100%",
        flexGrow: 1
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        backgroundColor: "#006c80",
    },
    sectionContainer: {
        marginTop: 0,
    },
    button: {
        display: 'flex',
        height: 50,
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "#000000",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: "#000000",
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: "#000000",
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default AppContainer;
