import { Redirect } from "expo-router";
import React from "react";
import styles from "../../styles/styles";
import { View, TouchableOpacity, Text, Image, ImageBackground, Button } from "react-native";

const PreviewCard = () => {
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

    return (
        <View>
            <ImageBackground
                source={image}
                resizeMode='cover'
                imageStyle={styles.card}>
                <TouchableOpacity style={styles.cardTextContainer}>
                    <View style={styles.cardTextTopRow}>
                        <Text style={styles.cardText}>20 minutes</Text>
                        <Text style={styles.cardText}>Progression</Text>
                    </View>

                    <View style={styles.cardTextMidRow}>
                        <Text style={styles.cardTextTitle}>Foundations of Financial Literacy</Text>
                        <Text style={styles.cardText}>Description of shit</Text>
                    </View>

                    <View style={styles.cardTextBotRow}>
                        <Text style={styles.cardText}>$10000</Text>
                    </View>

                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default PreviewCard;