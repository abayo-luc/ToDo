import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

// my import
import styles from './styles';

 const TaskList = ({details, date, onPress}) => {
    return (
        <View  style={styles.note}>
            <Text style={styles.noteText}>{date}</Text>
            <Text style={styles.noteText}>{details}</Text>

            <TouchableOpacity onPress={onPress} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>D</Text>
            </TouchableOpacity>
        </View>
    );
}


TaskList.propTypes = {
    details: PropTypes.string,
    date: PropTypes.string,
    onPress: PropTypes.func,
}

export default TaskList;