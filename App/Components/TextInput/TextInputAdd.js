import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Button from 'react-native-button';

// my import 
import styles from './styles';


const TextInputAdd = (props) => {
    const {onPress, onChangeText, value} = props;
    return(
        <View style={styles.warper} maxHeight={100} maxLength={5}>
            <View style={styles.inputLayout}>
                <TextInput
                    value={value}
                    style={styles.textInput}
                    onChangeText={onChangeText}
                />
            </View>
            <Button
                containerStyle={{paddingVertical: 5, paddingHorizontal: 10, height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#E91E63'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 20, color: 'green'}} 
                onPress={onPress}>
                Add
            </Button>
        </View>
    )
}

TextInputAdd.propTypes = {
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
}

export default TextInputAdd;