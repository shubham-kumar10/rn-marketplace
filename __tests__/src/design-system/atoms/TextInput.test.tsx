import React from 'react';
import { render } from '@testing-library/react-native';
import TextInput from '../../../../src/design-system/atoms/TextInput';

describe('TextInput', () => {
  it('renders correctly with default props', () => {
    const { toJSON } = render(<TextInput />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with label', () => {
    const { toJSON } = render(<TextInput label="Input Label" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const { toJSON } = render(<TextInput error="Error message" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with left icon', () => {
    const { toJSON } = render(<TextInput leftIcon="search" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with right icon', () => {
    const { toJSON } = render(<TextInput rightIcon="close" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with placeholder', () => {
    const { toJSON } = render(<TextInput placeholder="Enter text here" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with value', () => {
    const { toJSON } = render(<TextInput value="Input value" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom style', () => {
    const { toJSON } = render(<TextInput style={{ marginTop: 10 }} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
