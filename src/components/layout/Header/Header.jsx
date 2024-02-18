import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './header.styles';

const Header = ({ text }) => {
    return (
        <View style={styles.headerTextContainer}>
            <Text style={styles.headerText} >{text}</Text>
        </View>
    )
}

export default Header;