import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import PreviewCard from '../../components/cards/PreviewCard';
import { FlatList } from 'react-native';
import styles from './module.style';
import Header from '../../components/layout/Header/Header';
import Search from '../../components/layout/Search/Search';
import RowCard from '../../components/cards/rowCard/RowCard';
import { categories } from '../../constants/data/categories';
import { useRouter } from 'expo-router';

const Module = () => {
    const router = useRouter();
    const path = [{
        id: 789,
        title: "Foundations of Financial Literacy",
        description: "Description of learning some finance bullshit idk",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    }, {
        id: 783,
        title: "Foundations of Financial Literacy",
        description: "Description of learning some finance bullshit idk",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    }];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {

    }

    const handleModuleClick = () => {
        router.push('/Module')
    }

    return (
        <ScrollView style={styles.mainContainer} >
            <Header text={path[0].title} />
            <View style={styles.container}>
                <PreviewCard showDetails={false} onClick={handleModuleClick} preview={path[0]} />
                <Text style={styles.body}>{path[0].description}</Text>
            </View>
            <View>
                <Text style={styles.heading}>The module contains...</Text>
                <FlatList
                    style={styles.verticalCardListContainer}
                    data={categories}
                    renderItem={({ item }) =>
                        <View style={styles.verticalCardContainer}>
                            <RowCard title={item.title} icon={item.icon} color={item.color} />
                        </View>}
                    keyExtractor={(item) => item.title}
                />
            </View>
        </ScrollView>
    )
}

export default Module;