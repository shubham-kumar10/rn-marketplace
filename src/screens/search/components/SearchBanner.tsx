import React from 'react';
import { View } from 'react-native';
import { ALL_CATEGORIES } from '../../../data/category/categories/categories';
import Text from '../../../design-system/atoms/Text';
import { CategoryCircle } from '../../../design-system/organisms/Category';
import GlobalStyles from '../../../styles/global';

const SearchBanner: React.FC = () => {
  const handleCategoryPress = () => {};

  return (
    <View style={[GlobalStyles.alignCenter]}>
      <Text variant="subheading" style={[GlobalStyles.marginVerticalMd]}>
        Most Searched Categories
      </Text>
      <View style={GlobalStyles.row}>
        <View style={GlobalStyles.flexRow}>
          {ALL_CATEGORIES.map(category => (
            <View key={category.name} style={GlobalStyles.marginHorizontalSm}>
              <CategoryCircle
                size={50}
                key={category.id}
                category={category}
                onPress={handleCategoryPress}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SearchBanner;
