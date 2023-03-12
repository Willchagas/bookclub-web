import { Text } from 'components/atoms'
import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'

export const MenuItem = ({ icon, text, divider }) => (
  <ChakraMenuItem
    h="48px"
    borderBottomWidth={divider ? '1px' : '0px'}
    borderBottomStyle="solid"
    borderBottomColor="brand.greyLight"
  >
    <Icon mr="8px" color="brand.greyDark" boxSize="22px" as={icon} />
    <Text color="brand.greyDark" fontWeight="600" size="14px">
      {text}
    </Text>
  </ChakraMenuItem>
)
