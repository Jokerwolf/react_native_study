import {Box, Center, HStack, Icon, ZStack} from 'native-base';
import React from 'react';
import {Tab} from './Tab';

interface TabBarProps {
  tabs: Array<string>;
  TabIndicator?: JSX.Element;
  onTabPress: (i: number) => void;
}

export const TabBar = (props: TabBarProps) => {
  return (
    <ZStack height="45" background="red.800">
      <HStack borderColor="blue.700" borderStyle="solid" borderWidth="1">
        {props.TabIndicator}
        {props.tabs.map((x, i) => (
          <Tab key={x} value={x} onPress={() => props.onTabPress(i)} />
        ))}
      </HStack>
    </ZStack>
  );
};
