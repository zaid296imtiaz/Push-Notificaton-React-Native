import { AppRegistry } from 'react-native';
import App from './App';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyACxpTaZi9QtnxGivz3QIMzlRyBBkbE2e8",
    authDomain: "practice-3e07f.firebaseapp.com",
    databaseURL: "https://practice-3e07f.firebaseio.com",
    projectId: "practice-3e07f",
    storageBucket: "practice-3e07f.appspot.com",
    messagingSenderId: "845894481813"
};
firebase.initializeApp(config);


AppRegistry.registerComponent('app', () => App);
