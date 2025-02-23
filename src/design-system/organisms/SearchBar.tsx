import React, { memo, useRef } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { goBack } from '../../navigation/utils';
import TextInput from '../atoms/TextInput';
import GlobalStyles from '../../styles/global';

const SearchBar: React.FC = ({ leftIcon, query, setQuery }) => {
  const searchQueryRef = useRef<RNTextInput | null>(null);

  const clearSearch = () => {
    if (searchQueryRef.current) {
      searchQueryRef.current.clear();
    }
  };

  return (
    <View style={GlobalStyles.paddingTopMd}>
      <TextInput
        autoFocus={true}
        value={query}
        ref={searchQueryRef}
        leftIcon={leftIcon}
        onChangeText={setQuery}
        onLeftIconPress={goBack}
        onRightIconPress={clearSearch}
        placeholder="Search products..."
        rightIcon={query && 'close'}
      />
    </View>
  );
};

export default SearchBar;
