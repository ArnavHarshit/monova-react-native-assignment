// src/screens/SavedScreen.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Collection } from '../types';
import { mockCollections } from '../data/mockData';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../constants/styles';

const SavedScreen: React.FC = () => {
  const renderCollection = ({ item }: { item: Collection }) => (
    <TouchableOpacity style={styles.collectionCard}>
      <Image source={{ uri: item.image }} style={styles.collectionImage} />
      <View style={styles.collectionInfo}>
        <Text style={styles.collectionName}>{item.name}</Text>
        <Text style={styles.collectionCount}>{item.count} items</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Collections</Text>
        <FlatList
          data={mockCollections}
          renderItem={renderCollection}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.collectionRow}
        />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add new</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  collectionRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  collectionCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  collectionImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  collectionInfo: {
    padding: 12,
  },
  collectionName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  collectionCount: {
    fontSize: 14,
    color: COLORS.gray,
  },
  addButton: {
    margin: 16,
    padding: 16,
    backgroundColor: COLORS.black,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SavedScreen;