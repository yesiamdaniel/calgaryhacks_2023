import { Redirect } from "expo-router";
import styles from "../../styles/styles";
import { View, TouchableOpacity, Text, Image, ImageBackground, Button } from "react-native";
import ProgressBarContainer from "../utilities/ProgressBarContainer";

const PreviewCard = ({ preview }) => {
    return (
        <View style={styles.cardContainer}>

            <ImageBackground
                source={{ uri: preview.imageURL }}
                resizeMode='cover'
                imageStyle={styles.card}>
                <View style={styles.imageOverlay}></View>
                <TouchableOpacity style={styles.cardTextContainer}>
                    <View style={styles.cardTextTopRow}>
                        <Text style={styles.cardText}>{preview.timeMinutes} minutes</Text>
                        <View>
                            <Text style={styles.cardText}>Progression</Text>
                            <ProgressBarContainer progress={preview.progress}></ProgressBarContainer>
                        </View>
                    </View>

                    <View style={styles.cardTextMidRow}>
                        <Text style={styles.cardTextTitle}>{preview.title}</Text>
                        <Text style={styles.cardText}>{preview.description}</Text>
                    </View>

                    <View style={styles.cardTextBotRow}>
                        <Text style={styles.cardTextMoney}>+${preview.cashReward}</Text>
                        <Text style={styles.cardText}>Click to get started</Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default PreviewCard;
