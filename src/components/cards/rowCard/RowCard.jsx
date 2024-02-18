import { View, Text } from 'react-native'
import React from 'react'
import styles from './rowCard.styles'
import { Image } from 'react-native'

const RowCard = ({ title, icon, color }) => {
    return (
        <View style={styles.container(color)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image}/>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

export default RowCard