/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {NativeBaseProvider} from '~ui-lib/components';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TabBar, TabIndicator} from './TabBar';
import {Box, Center, VStack} from 'native-base';

const tabs = ['Chats', 'Calls', 'Contacts', 'Activity'];

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';
  const onTabPress = useCallback(
    (i: number) => {
      if (activeTabIndex !== i) {
        setActiveTabIndex(i);
      }
    },
    [activeTabIndex, setActiveTabIndex],
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const tabWidth = Dimensions.get('window').width / tabs.length;

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <VStack height="100%" background="yellow.800" justifyContent="flex-end">
          {/* <Box w="100" h="100" bg="blue.400" />
          <Box w="100" h="100" bg="black" /> */}
          <TabBar
            TabIndicator={
              <TabIndicator
                activeTabIndex={activeTabIndex}
                width={60}
                offset={tabWidth}
              />
            }
            tabs={tabs}
            onTabPress={onTabPress}
          />
        </VStack>
        {/* <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            
          </View> */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          
        </ScrollView> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
