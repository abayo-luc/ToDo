import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

// style components
import EStyleSheet from 'react-native-extended-stylesheet';


// my UI components
import Home from './Screens/Home';



EStyleSheet.build({
    $primaryBackground: '#f5f5f5',
})

export default class App extends Component{
    componentWillMount(){
        console.ignoredYellowBox = ['Setting a timer'];
        firebase.initializeApp({
            apiKey: "AIzaSyDopteKHDKZnU5xPqQzAu9m_ZVWBkT-FwY",
            authDomain: "todo-65dfa.firebaseapp.com",
            databaseURL: "https://todo-65dfa.firebaseio.com",
            projectId: "todo-65dfa",
            storageBucket: "",
            messagingSenderId: "850414509662"
        })
    }
    render(){
        return(
            <Home/>
        )
    }
}