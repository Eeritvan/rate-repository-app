import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    MainBG: '#e1e4e8'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    tabFont: 20
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
};
  
export const styles = StyleSheet.create({
  TabContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  Tab: {
    color: 'white',
    fontSize: theme.fontSizes.tabFont,
    fontWeight: theme.fontWeights.bold,
    margin: 10
  },
  MainContainer: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.MainBG
  },
  LanguageBG: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 4,
    marginTop: 10,
    borderRadius: 5
  }
});

export const RepoStyle = StyleSheet.create({
  Container: {
    display: 'flex',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15
  },
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 15
  },
  Top: {
    flex: 1,
    flexDirection: 'row'
  },
  TopAvatar: {
    display: 'flex',
    flexDirection: 'row'
  },
  TopInfo: {
    marginTop: 20,
    flexShrink: 1,
  },
  Bottom: {
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    margin: 30
  },
  BottomContainer: {
    alignItems: 'center',
  }
});