// src/screens/ItemsScreen.tsx
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Item, Filter } from '../types';
import { mockItems, mockFilters } from '../data/mockData';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../constants/styles';

const ItemsScreen: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const filteredItems = useMemo(() => {
    if (activeFilters.length === 0) return mockItems;
    
    return mockItems.filter(item => 
      activeFilters.some(filter => 
        item.tags.includes(filter.label) ||
        item.category === filter.label ||
        item.color === filter.label ||
        item.style === filter.label
      )
    );
  }, [activeFilters]);

  const handleFilterPress = (filter: Filter) => {
    const isAlreadyActive = activeFilters.some(f => f.id === filter.id);
    
    if (isAlreadyActive) {
      setActiveFilters(activeFilters.filter(f => f.id !== filter.id));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Items</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {mockFilters.map(filter => {
          const isActive = activeFilters.some(f => f.id === filter.id);
          return (
            <TouchableOpacity
              key={filter.id}
              style={[styles.filterChip, isActive && styles.activeFilterChip]}
              onPress={() => handleFilterPress(filter)}
            >
              <Text style={[styles.filterText, isActive && styles.activeFilterText]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {activeFilters.length > 0 && (
        <View style={styles.activeFilters}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {activeFilters.map(filter => (
              <View key={filter.id} style={styles.activeFilter}>
                <Text style={styles.activeFilterText}>{filter.label}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
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
  filterContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: COLORS.black,
  },
  filterText: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  activeFilterText: {
    color: COLORS.white,
  },
  activeFilters: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  activeFilter: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: COLORS.black,
    marginRight: 8,
  },
  list: {
    padding: 16,
  },
  itemCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemInfo: {
    padding: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.darkGray,
  },
});

export default ItemsScreen;