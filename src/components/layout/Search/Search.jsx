import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../../assets/Icons'
import styles from './search.styles'
import { COLORS } from '../../../constants/themes'

const Search = ({ searchTerm, setSearchTerm, handleClick }) => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder="What do you want to learn?"
                    placeholderTextColor={COLORS.white[800]}
                />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                <Image
                    source={ICONS.Explore}
                    resizeMode='contain'
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Search