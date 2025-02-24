import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../../../../src/design-system/atoms/Text';

describe('Text', () => {
  it('renders correctly with default props', () => {
    const { toJSON } = render(<Text>Default Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with body variant', () => {
    const { toJSON } = render(<Text variant="body">Body Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with heading variant', () => {
    const { toJSON } = render(<Text variant="heading">Heading Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom color', () => {
    const { toJSON } = render(<Text color="primary">Colored Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom style', () => {
    const { toJSON } = render(
      <Text style={{ fontSize: 20 }}>Styled Text</Text>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
