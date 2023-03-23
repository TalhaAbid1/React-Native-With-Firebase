import React, {Component} from 'react';
import WebView from 'react-native-webview';

const MyGiHubWebView = () =>{
    return (
        <WebView source={{ uri: 'https://github.com/talhaAbid1'}}/>
    );
}
const GhatGPT = () =>{
    return (
        <WebView source={{ uri: 'https://chat.openai.com/auth/login'}}/>
    );
}
export {MyGiHubWebView, GhatGPT};