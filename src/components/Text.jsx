import { Text as NativeText } from 'react-native';
import { styles, theme } from '../style/style';

export const Text = ({ color, fontSize, fontWeight, style, backGround, ...props }) => {
  const textStyle = [
    styles.Text,
    fontSize === 'Tab' && styles.Tab,
    color === 'textSecondary' && { color: theme.colors.textSecondary },
    color === 'primary' && { color: theme.colors.textPrimary },
    color === 'white' && { color: 'white' },
    fontSize === 'subheading' && {fontSize: theme.fontSizes.subheading },
    fontWeight === 'bold' && { fontWeight: theme.fontWeights.bold },
    backGround === 'blue' && styles.LanguageBG,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};