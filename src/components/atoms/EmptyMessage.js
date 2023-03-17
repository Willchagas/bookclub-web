import { Flex } from '@chakra-ui/react'
import { Text } from './Text'

export const EmptyMessage = ({ children }) => (
  <Flex mt={['24px', '48px']} align="center" justifyContent="center">
    <Text>{children}</Text>
  </Flex>
)
