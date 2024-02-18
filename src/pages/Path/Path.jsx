import { View, Text, SafeAreaView, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import ModulePreviewCard from '../../components/cards/ModulePreviewCard';
import styles from '../../styles/styles';

const Path = () => {
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

    const renderItem = ({ item }) => {
        console.log(item.id);
        return (
            <ModulePreviewCard preview={item} />
        );
    };


    return (
        <View>
            <ImageBackground
                source={{ uri: mockData[0].imageURL }}
                resizeMode='cover'
                imageStyle={styles.card}>
                <TouchableOpacity style={styles.pathCardTextContainer}>
                    <View style={styles.cardTextMidRow}>
                        <Text style={styles.cardText}>{mockPath.timeMinutes} minutes</Text>
                    </View>

                    <View style={styles.pathCardWrapper}>
                        <View style={styles.pathCardTextMidRow}>
                            <Text style={styles.cardTextTitle}>{mockPath.title}</Text>
                            <Text style={styles.cardText}>{mockPath.description}</Text>
                        </View>

                        <View style={styles.pathCardTextBotRow}>
                            <Text style={styles.cardTextMoney}>+${mockPath.cashReward}</Text>
                        </View>
                    </View>

                </ TouchableOpacity>
            </ImageBackground>

            <FlatList
                style={styles.flatListContainer}
                data={mockData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
};

export default Path