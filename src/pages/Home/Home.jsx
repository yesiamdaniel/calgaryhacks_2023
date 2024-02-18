import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from "react";
import styles from "../../styles/styles";
import { COLORS } from '../../constants/themes';
import PreviewCard from '../../components/cards/PreviewCard';
import { portfolio, progress } from '../../assets/images/images';

const Home = () => {

    const data = {
        id: 134,
        title: "Foundations of Financial Literacy",
        description: "Description of learning some finance bullshit idk",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    };

    return (
        <View style={styles.homePage}>
            <ScrollView horizontal='false'>
                <Text style={styles.homePageTitle}>Hi, Ayomibo</Text>
                <View style={styles.homePickUpContainer}>
                    <Text style={styles.homePickUpTitle}>Pick up where you left off</Text>
                    <PreviewCard preview={data} />
                </View>

                <View style={styles.homeProgressContainer}>
                    <Text style={styles.homePickUpTitle}>Track your progress</Text>
                    <View style={styles.homePickUpProgressContainer}>
                        <Image style={styles.homeProgressImage} source={require('../../assets/images/progress.png')} />
                    </View>
                </View>

                <View style={styles.homePortfolioContainer}>
                    <Text style={styles.homePickUpTitle}>Your Portfolio</Text>
                    <View style={styles.homePickUpImageContainer}>
                        <Image style={styles.homePickUpImage} source={require('../../assets/images/portfolio.png')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home