import React, {useRef} from 'react';
import {TextInput as RNTextInput, View} from 'react-native';
import TextInput from '../atoms/TextInput';
import {AppIcon} from '../atoms/AppIcon';
import {goBack} from '../../navigation/utils';

const SearchBar: React.FC = ({leftIcon, onLeftIconPress, setQuery}) => {
  const searchQueryRef = useRef<RNTextInput | null>(null);
  const query = useRef('');

  const clearSearch = () => {
    if (searchQueryRef.current) {
      searchQueryRef.current.clear();
    }
  };

  console.log(searchQueryRef.current);

  return (
    <View style={{paddingTop: 16}}>
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
