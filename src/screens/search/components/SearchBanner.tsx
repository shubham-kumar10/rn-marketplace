import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ALL_CATEGORIES } from '../../../data/category/categories/categories';
import { CategoryCircle } from '../../../design-system/organisms/Category';

const AvailableCategories = () => {
  const handleCategoryPress = () => {};
  return (
    <View style={{ flexDirection: 'row' }}>
      {ALL_CATEGORIES.map(category => (
        <View key={category.name} style={{ marginHorizontal: 5 }}>
          <CategoryCircle
            size={50}
            key={category.id}
            category={category}
            onPress={handleCategoryPress}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AvailableCategories;
