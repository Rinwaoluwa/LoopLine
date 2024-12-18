import React from 'react';
import { ScrollView, Pressable, StyleSheet, View } from 'react-native';
import { styles } from './styles';
import { Category, CategoryFilterProps } from './types';
import { AppText } from '../AppText/AppText';

export function CategoryTile ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const renderCategory = (category: Category) => {
    const isSelected = category.id === selectedCategory;

    return (
      <Pressable
        key={category.id}
        onPress={() => onSelectCategory(category.id)}
        style={[
          styles.categoryButton,
          isSelected && styles.categoryButtonActive
        ]}
      >
        <AppText
          fontSize={14}
          fontFamily={'OpenSans-Regular'}
          color={isSelected ? 'white' : 'grey'}
        >
          {category.label}
        </AppText>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map(renderCategory)}
      </ScrollView>
    </View>
  );
};



