import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Filter } from '../types';

interface FilterChipProps {
  filter: Filter;
  isActive: boolean;
  onPress: (filter: Filter) => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ filter, isActive, onPress }) => {
  const scaleValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      damping: 10,
      mass: 0.5,
      stiffness: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        style={[styles.chip, isActive && styles.activeChip]}
        onPress={() => onPress(filter)}
        activeOpacity={0.7}
      >
        <Text style={[styles.chipText, isActive && styles.activeChipText]}>
          {filter.label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    marginRight: 8,
    marginBottom: 8,
  },
  activeChip: {
    backgroundColor: '#000',
  },
  chipText: {
    fontSize: 14,
    color: '#666',
  },
  activeChipText: {
    color: '#fff',
  },
});

export default FilterChip;