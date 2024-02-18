import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './rowCard.styles'
import { Image } from 'react-native'

const RowCard = ({ onPress, title, icon, color }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(color)}>
            <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={icon} />
                </View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RowCard