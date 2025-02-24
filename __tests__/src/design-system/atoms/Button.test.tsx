import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../../../../src/design-system/atoms/Button';

describe('Button', () => {
  it('renders primary button correctly', () => {
    const { toJSON } = render(
      <Button title="Primary Button" onPress={() => {}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders secondary button correctly', () => {
    const { toJSON } = render(
      <Button
        title="Secondary Button"
        variant="secondary"
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders disabled button correctly', () => {
    const { toJSON } = render(
      <Button title="Disabled Button" disabled onPress={() => {}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders button with custom style correctly', () => {
    const { toJSON } = render(
      <Button
        title="Custom Style"
        style={{ marginTop: 10 }}
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
