import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {Box, Circle} from 'native-base';

interface TabIndicatorProps {
  activeTabIndex: number;
  offset: number;
  width: number;
}
function calcOffset(
  index: number,
  offset: number,
  indicatorSize: number,
): number {
  return index * offset + (offset / 2 - indicatorSize / 2);
}

const animateTabIndicator = (
  offset: number,
  indicatorSize: number,
  animatedValue: Animated.Value,
  index: number,
) => {
  Animated.spring(animatedValue, {
    // Move to the center of the tab
    toValue: calcOffset(index, offset, indicatorSize),
    velocity: 1,
    useNativeDriver: true,
  }).start();
};

export const TabIndicator = (props: TabIndicatorProps) => {
  const [tabIndicatorTranslateX] = useState(
    new Animated.Value(
      calcOffset(props.activeTabIndex, props.offset, props.width),
    ),
  );
  useEffect(
    () =>
      animateTabIndicator(
        props.offset,
        props.width,
        tabIndicatorTranslateX,
        props.activeTabIndex,
      ),
    [tabIndicatorTranslateX, props.activeTabIndex],
  );

  return (
    <Animated.View
      style={[
        {
          transform: [{translateX: tabIndicatorTranslateX}],
          position: 'absolute',
          top: -props.width / 4,
        },
      ]}>
      <Circle
        size={props.width}
        borderWidth="1"
        background="blue.400"
        borderColor="blue.800"
      />
    </Animated.View>
  );
};
