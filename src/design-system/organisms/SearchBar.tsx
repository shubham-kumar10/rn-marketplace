import React, {useRef} from 'react';
import {TextInput as RNTextInput, View} from 'react-native';
import TextInput from '../atoms/TextInput';

const SearchBar: React.FC = () => {
  const searchQueryRef = useRef<RNTextInput | null>(null);

  const clearSearch = () => {
    if (searchQueryRef.current) {
      searchQueryRef.current.clear();
    }
  };

  return (
    <View style={{paddingTop: 16}}>
      <TextInput
        placeholder="Search products..."
        ref={searchQueryRef}
        onRightIconPress={clearSearch}
      />
    </View>
  );
};

export default SearchBar;
