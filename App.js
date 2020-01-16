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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import AppContainer from './screens/HomeScreen';

import { WebView } from 'react-native-webview';
import RNBootSplash from "react-native-bootsplash"

const App = () => {
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
    <AppContainer/>
  );
};

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
  body: {
    backgroundColor: "#006c80",
  },
  sectionContainer: {
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
