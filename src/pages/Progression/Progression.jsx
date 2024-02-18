import { View, Text, SafeAreaView, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import ModulePreviewCard from '../../components/cards/ModulePreviewCard';
import ProgressBarContainer from '../../components/utilities/ProgressBarContainer';
import styles from '../../styles/styles';
import { COLORS } from '../../constants/themes';
import { preview } from '../../constants/data/categories';

const Progression = () => {

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