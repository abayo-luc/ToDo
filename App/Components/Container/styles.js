import React from 'react';
import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$primaryBackground',
        paddingVertical: StatusBar.currentHeight,
        
    },
})

export default styles;