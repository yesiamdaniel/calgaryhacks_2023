import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import PreviewCard from '../../components/cards/PreviewCard';
import { FlatList } from 'react-native';
import styles from './explore.style';
import Header from '../../components/layout/Header/Header';
import Search from '../../components/layout/Search/Search';
import RowCard from '../../components/cards/rowCard/RowCard';
import { categories } from '../../constants/data/categories';
import { preview } from '../../constants/data/categories';

const Explore = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {

  }

  return (
    <ScrollView style={styles.mainContainer} >
      <Header text="explore" />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick={handleSearch}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Recommended Paths</Text>
        <FlatList
          style={styles.horizontalList}
          horizontal
          data={preview}
          renderItem={({ item }) => <View style={styles.horizontalCardContainer}><PreviewCard preview={item} /></View>}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={styles.heading}>Explore Different Topics</Text>
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

export default Explore