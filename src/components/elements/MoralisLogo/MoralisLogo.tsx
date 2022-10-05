import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? 'https://appdesignerpro.com/wp-content/uploads/2022/10/transparent-logo.png' : 'https://appdesignerpro.com/wp-content/uploads/2022/10/transparent-logo.png'}
      height={70}
      width={70}
      alt="ADP Thirdbridge"
    />
  );
};

export default MoralisLogo;
