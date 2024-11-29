import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const AppPro: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
            Hello World
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
  textStyle: {
    alignItems: 'center',
    display: 'flex',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
