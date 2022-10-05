import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://twitter.com/0xTribe_NFT',
  forum: 'https://appdesignerpro.com/mint-0xtribe',
  moralis: 'https://medium.com/@0xTribe',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        ⭐️ Follow Us on{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
          Twitter <ExternalLinkIcon />
        </Link>
        , every follower counts!!
      </Text>
      <Text>
        🙋 Looking to Mint your 0xTRIBE? Head over to our{' '}
        <Link href={links.forum} isExternal alignItems={'center'}>
          Mint Portal <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Read more about 0xTRIBE on{' '}
        <Link href={links.moralis} isExternal alignItems={'center'}>
          Medium <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
