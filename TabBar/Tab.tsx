import {Box, Center, HStack, Icon, Pressable, Text, VStack} from 'native-base';
import React from 'react';

interface TabProps {
  value: string;
  onPress: () => void;
}

export const Tab = (props: TabProps) => {
  return (
    <VStack height="100%" flex={1} alignContent="center">
      <Pressable
        onPress={props.onPress}
        background="blue.400"
        _hover={{
          background: 'amber.300',
        }}>
        <Center>
          <Box
            _text={{
              fontWeight: 'bold',
              color: 'white',
            }}>
            {props.value}
          </Box>
          <Text>{props.value}</Text>
        </Center>
      </Pressable>
    </VStack>
  );
};
