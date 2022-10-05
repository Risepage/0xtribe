import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        0xTRIBE Roadmap
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Launch 0xTRIBE Mint
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Mint-Out 0xTRIBE Collection
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Launch Ethereum dApp as Utility
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Roadmap Item #4
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          ... and more
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
