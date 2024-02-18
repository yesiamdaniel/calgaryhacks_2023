import { Redirect } from "expo-router";
import React from "react";
import styles from "../../styles/styles";
import { View, TouchableOpacity, Text, Image, ImageBackground, Button } from "react-native";

const PreviewCard = ({ preview }) => {
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

    return (
        <View>
            <ImageBackground
                source={image}
                resizeMode='cover'
                imageStyle={styles.card}>
                <TouchableOpacity style={styles.cardTextContainer}>
                    <View style={styles.cardTextTopRow}>
                        <Text style={styles.cardText}>{preview.timeMinutes} minutes</Text>
                        <Text style={styles.cardText}>Progression</Text>
                    </View>

                    <View style={styles.cardTextMidRow}>
                        <Text style={styles.cardTextTitle}>{preview.title}</Text>
                        <Text style={styles.cardText}>{preview.description}</Text>
                    </View>

                    <View style={styles.cardTextBotRow}>
                        <Text style={styles.cardText}>{preview.cashReward}</Text>
                        <Text style={styles.cardText}>Click to get started</Text>
                    </View>

                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default PreviewCard;