// src/components/molecules/CategoryCircle.tsx
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../atoms/Text';
import theme from '../theme';
import {Category} from '../../data/type';

interface CategoryCircleProps {
  category: Category;
  size?: number;
  onPress?: (category: Category) => void;
}

export const CategoryCircle: React.FC<CategoryCircleProps> = ({
  category,
  size = 80,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(category)}
      style={styles.container}>
      <View style={[styles.imageContainer, {width: size, height: size}]}>
        <Image
          source={{uri: category.image}}
          style={[styles.image, {width: size, height: size}]}
        />
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: theme.spacing.xs,
  },
  imageContainer: {
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: theme.colors.neutral.neutral200,
  },
  image: {
    resizeMode: 'cover',
  },
  name: {
    fontSize: 12,
    marginTop: theme.spacing.xs,
    color: theme.colors.neutral.neutral800,
    maxWidth: 80,
    textAlign: 'center',
  },
});

// Usage example in a horizontal list:
// src/components/organisms/CategoriesList.tsx
// import {ScrollView} from 'react-native';
// import {CategoryCircle} from '../molecules/CategoryCircle';
// import {ALL_CATEGORIES} from '../../data/categories';
// import { Category } from '../../data/type';

// export const CategoriesList = () => {
//   const handleCategoryPress = (category: Category) => {
//     // Handle category selection
//     console.log('Selected category:', category.name);
//   };

//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.container}>
// {ALL_CATEGORIES.map(category => (
//   <CategoryCircle
//     key={category.id}
//     category={category}
//     onPress={handleCategoryPress}
//   />
// ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: theme.spacing.sm,
//     paddingVertical: theme.spacing.md,
//   },
// });
