// types.ts
import {TextStyle, ViewStyle} from 'react-native';

type KeyUnion<T> = keyof T;

type SpacingKey = KeyUnion<typeof spacing>;
type ColorKey = KeyUnion<typeof colors>;
type ColorShade =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type TextStyleKey = KeyUnion<typeof typography.textStyles>;

type Direction = 'Top' | 'Bottom' | 'Left' | 'Right' | 'X' | 'Y' | '';

type MarginStyleName = `margin${Direction}${Capitalize<SpacingKey>}`;
type PaddingStyleName = `padding${Direction}${Capitalize<SpacingKey>}`;
type BackgroundStyleName = `bg${Capitalize<ColorKey>}${ColorShade}`;
type TextColorStyleName = `${TextStyleKey}${Capitalize<ColorKey>}${ColorShade}`;
type FlexStyleName =
  | 'flexRow'
  | 'flexColumn'
  | 'justifyCenter'
  | 'alignCenter'
  | 'flex1';
type BorderStyleName =
  | 'radiusSm'
  | 'radiusMd'
  | 'radiusLg'
  | 'radiusXl'
  | 'radiusRound';
type UtilityStyleName = 'container' | 'row' | 'centerContent' | 'shadow';

export type GlobalStyleName =
  | MarginStyleName
  | PaddingStyleName
  | BackgroundStyleName
  | TextColorStyleName
  | FlexStyleName
  | BorderStyleName
  | UtilityStyleName;

type MarginStyles = Record<MarginStyleName, ViewStyle>;
type PaddingStyles = Record<PaddingStyleName, ViewStyle>;
type BackgroundStyles = Record<BackgroundStyleName, ViewStyle>;
type TextStyles = Record<TextColorStyleName, TextStyle>;
type FlexStyles = Record<FlexStyleName, ViewStyle>;
type BorderStyles = Record<BorderStyleName, ViewStyle>;
type UtilityStyles = Record<UtilityStyleName, ViewStyle>;

export type GlobalStyles = MarginStyles &
  PaddingStyles &
  BackgroundStyles &
  TextStyles &
  FlexStyles &
  BorderStyles &
  UtilityStyles;
