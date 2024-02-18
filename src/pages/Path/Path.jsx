import { View, Text, SafeAreaView, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import ModulePreviewCard from '../../components/cards/ModulePreviewCard';
import styles from '../../styles/styles';
import { preview } from '../../constants/data/categories';

const Path = () => {

    const renderItem = ({ item }) => {
        console.log(item.id);
        return (
            <ModulePreviewCard preview={item} />
        );
    };

    return (
        <View>
            <ImageBackground
                source={{ uri: preview[0].imageURL }}
                resizeMode='cover'
                imageStyle={styles.card}>
                <View style={styles.imageOverlay(true)}></View>
                <TouchableOpacity style={styles.pathCardTextContainer}>
                    <View style={styles.cardTextMidRow}>
                        <Text style={styles.cardText}>{preview[0].timeMinutes} minutes</Text>
                    </View>

                    <View style={styles.pathCardWrapper}>
                        <View style={styles.pathCardTextMidRow}>
                            <Text style={styles.cardTextTitle}>{preview[0].title}</Text>
                            <Text style={styles.cardText}>{preview[0].description}</Text>
                        </View>

                        <View style={styles.pathCardTextBotRow}>
                            <Text style={styles.cardTextMoney}>+${preview[0].cashReward}</Text>
                        </View>
                    </View>

                </ TouchableOpacity>
            </ImageBackground>

            <FlatList
                style={styles.flatListContainer}
                data={preview}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
};

export default Path