import React, { useRef } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { goBack } from '../../navigation/utils';
import TextInput from '../atoms/TextInput';

const SearchBar: React.FC = ({ leftIcon, setQuery }) => {
  const searchQueryRef = useRef<RNTextInput | null>(null);

  const clearSearch = () => {
    if (searchQueryRef.current) {
      searchQueryRef.current.clear();
    }
  };

  return (
    <View style={{ paddingTop: 16 }}>
      <TextInput
        autoFocus={true}
        placeholder="Search products..."
        ref={searchQueryRef}
        onRightIconPress={clearSearch}
        leftIcon={leftIcon}
        rightIcon={searchQueryRef.current?.value && 'close'}
        onChangeText={setQuery}
        onLeftIconPress={goBack}
      />
    </View>
  );
};

export default SearchBar;
