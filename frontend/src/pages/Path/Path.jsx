import { View, Text } from 'react-native'

const Path = () => {
    const image = { uri: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg' };
    // to be passed from page to preview card
    const mockPathTile = {
        id: 123,
        title: "Foundations of Financial Literacy",
        description: "Description of learning some finance bullshit idk",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    };

    // <View style={{flexDirection: 'row', gap: 20, margin: 10}}>


    return (
        <View>
            <Text>Path</Text>
        </View>
    )
}

export default Path