import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from "react-native";
import { WebView } from "react-native-webview";

const WebViewApp = ({ navigation }) => {
  const params = navigation.state.params.link || "";

  const screenHeight = Math.round(Dimensions.get("window").height);

  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#006c80" }}>
        <ScrollView style={styles.scrollView}>
          <View>
            <WebView
              style={{ width: "100%", height: screenHeight - 30 }}
              source={{ uri: params }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    height: "100%",
    flexGrow: 1
  },
  engine: {
    position: "absolute",
    right: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    backgroundColor: "#006c80"
  },
  sectionContainer: {
    marginTop: 0
  },
  button: {
    display: "flex",
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#FFFFFF"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "#000000"
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default WebViewApp;
