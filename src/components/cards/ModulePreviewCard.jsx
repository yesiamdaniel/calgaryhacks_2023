import { Redirect } from "expo-router";
import React from "react";
import styles from "../../styles/styles";
import { View, TouchableOpacity, Text, Image, ImageBackground, Button } from "react-native";
import ProgressBarContainer from "../utilities/ProgressBarContainer";

const ModulePreviewCard = ({ onPress, preview }) => {
    return (
        <View style={styles.moduleCardContainer}>
            <ImageBackground
                source={{ uri: preview.imageURL }}
                resizeMode='cover'
                imageStyle={styles.card}>
                <TouchableOpacity onPress={onPress} style={styles.moduleCardTextContainer}>
                    <View style={styles.cardTextTopRow}>
                        <Text style={styles.cardTextTitle}>Module</Text>
                    </View>

                    <View>
                        <Text style={styles.cardText}>{preview.title}</Text>
                    </View>

                    <View style={styles.cardTextMidRow}>
                        <Text style={styles.cardTextMoney}>+${preview.cashReward}</Text>
                        <Text style={styles.cardText}>{preview.timeMinutes} minutes</Text>
                    </View>

                    <View style={styles.moduleCardTextBotRow}>
                        <Text style={styles.cardText}>Progression</Text>
                        <ProgressBarContainer progress={preview.progress}></ProgressBarContainer>
                    </View>

                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default ModulePreviewCard;