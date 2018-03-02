import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

// my components
import styles from './styles';

const Container = ({children}) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

Container.propTypes = {
    children: PropTypes.any,
}

export default Container;