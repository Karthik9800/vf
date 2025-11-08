
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri: 'https://creator.voiceflow.com/share/690eca03393f63b000224a42/production' }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={true}
        style={{ flex: 1 }}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:30,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
 