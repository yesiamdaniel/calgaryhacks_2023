import { View, Text, SafeAreaView, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import ModulePreviewCard from '../../components/cards/ModulePreviewCard';
import ProgressBarContainer from '../../components/utilities/ProgressBarContainer';
import styles from '../../styles/styles';
import { COLORS } from '../../constants/themes';

const Progression = () => {
    // to be passed from page to preview card
    const mockData = [
        {
            id: 123,
            title: "Foundations of Financial Literacy",
            description: "Description of learning some finance bullshit idk",
            cashReward: 1500,
            timeMinutes: 20, // could be a time object
            timeHours: 0,
            progress: 0.75, // this will be stored in the user object
            imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
        },
        {
            id: 456,
            title: "Foundations of Financial Literacy",
            description: "Description of learning some finance bullshit idk",
            cashReward: 1500,
            timeMinutes: 20, // could be a time object
            timeHours: 0,
            progress: 0.75, // this will be stored in the user object
            imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
        },
        {
            id: 567,
            title: "Foundations of Financial Literacy",
            description: "Description of learning some finance bullshit idk",
            cashReward: 1500,
            timeMinutes: 20, // could be a time object
            timeHours: 0,
            progress: 0.75, // this will be stored in the user object
            imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
        },
        {
            id: 789,
            title: "Foundations of Financial Literacy",
            description: "Description of learning some finance bullshit idk",
            cashReward: 1500,
            timeMinutes: 20, // could be a time object
            timeHours: 0,
            progress: 0.75, // this will be stored in the user object
            imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
        },
        {
            id: 134,
            title: "Foundations of Financial Literacy",
            description: "Description of learning some finance bullshit idk",
            cashReward: 1500,
            timeMinutes: 20, // could be a time object
            timeHours: 0,
            progress: 0.75, // this will be stored in the user object
            imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
        },
    ];

    const mockPath = {
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
        <View style={styles.progressionPage}>
            <View>
                <Text style={styles.progressPageTitle}>Progression</Text>
            </View>

            <View style={styles.progressContainer}>
                <View style={[styles.progressBarTextContainer, { backgroundColor: COLORS.green[100] }]}>
                    <View style={styles.progressBarTextLeftContainer}>
                        <Text style={styles.progressBarTextTitle}>Investment Knowledge: </Text>
                        <Text style={styles.progressBarTextScore}>3421</Text>
                    </View>
                    <Text style={styles.progressBarTextLevel}>Intermediate</Text>
                </View>
                <View>
                    <ProgressBarContainer barColor={COLORS.green[300]} progress={0.5}></ProgressBarContainer>
                </View>
            </View>

            <View style={styles.progressContainer}>
                <View style={[styles.progressBarTextContainer, { backgroundColor: COLORS.green[100] }]}>
                    <View style={styles.progressBarTextLeftContainer}>
                        <Text style={styles.progressBarTextTitle}>Investment Knowledge: </Text>
                        <Text style={styles.progressBarTextScore}>3421</Text>
                    </View>
                    <Text style={styles.progressBarTextLevel}>Intermediate</Text>
                </View>
                <View>
                    <ProgressBarContainer barColor={COLORS.green[100]} progress={0.75}></ProgressBarContainer>
                </View>
            </View>

            <View style={styles.progressContainer}>
                <View style={[styles.progressBarTextContainer, { backgroundColor: COLORS.blue[100] }]}>
                    <View style={styles.progressBarTextLeftContainer}>
                        <Text style={styles.progressBarTextTitle}>Investment Knowledge: </Text>
                        <Text style={styles.progressBarTextScore}>3421</Text>
                    </View>
                    <Text style={styles.progressBarTextLevel}>Intermediate</Text>
                </View>
                <View>
                    <ProgressBarContainer barColor={COLORS.blue[100]} progress={0.20}></ProgressBarContainer>
                </View>
            </View>

            <View style={styles.progressContainer}>
                <View style={[styles.progressBarTextContainer, { backgroundColor: COLORS.plum[100] }]}>
                    <View style={styles.progressBarTextLeftContainer}>
                        <Text style={styles.progressBarTextTitle}>Investment Knowledge: </Text>
                        <Text style={styles.progressBarTextScore}>3421</Text>
                    </View>
                    <Text style={styles.progressBarTextLevel}>Intermediate</Text>
                </View>
                <View>
                    <ProgressBarContainer barColor={COLORS.plum[400]} progress={0.5}></ProgressBarContainer>
                </View>
            </View>

            <View style={styles.progressContainer}>
                <View style={[styles.progressBarTextContainer, { backgroundColor: COLORS.green[100] }]}>
                    <View style={styles.progressBarTextLeftContainer}>
                        <Text style={styles.progressBarTextTitle}>Investment Knowledge: </Text>
                        <Text style={styles.progressBarTextScore}>3421</Text>
                    </View>
                    <Text style={styles.progressBarTextLevel}>Intermediate</Text>
                </View>
                <View>
                    <ProgressBarContainer barColor={COLORS.green[300]} progress={0.6}></ProgressBarContainer>
                </View>
            </View>

        </View>
    )
};

export default Progression;