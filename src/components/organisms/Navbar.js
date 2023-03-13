import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48x', '80px', '112px']}
      paddingTop={['24px']}
    >
      <Image
        src="/img/logo.svg"
        alt="BookClub Logo"
        w={['100px', '160px']}
        h="48px"
      />
      <Flex display={['none', 'flex']}>
        <SearchBar />
      </Flex>

      <UserMenu />
    </Flex>
  )
}
