import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from "react";
import styles from "../../styles/styles";
import { COLORS } from '../../constants/themes';
import PreviewCard from '../../components/cards/PreviewCard';
import { portfolio, progress } from '../../assets/images/images';
import { preview } from '../../constants/data/categories';

const Home = () => {


    return (
        <View style={styles.homePage}>
            <ScrollView horizontal='false'>
                <Text style={styles.homePageTitle}>Hi, Ayomibo</Text>
                <View style={styles.homePickUpContainer}>
                    <Text style={styles.homePickUpTitle}>Pick up where you left off</Text>
                    <PreviewCard preview={preview[0]} />
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