import { Flex, Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="14px" color="brand.darkGrey" {...props}>
    {children}
  </ChakraLink>
)

Link.Action = ({ text, actionText, ...props }) => (
  <Flex
    flexDir={['column', 'row']}
    w="100%"
    alignItems="center"
    justifyContent="center"
  >
    <ChakraLink
      _hover={{ textDecoration: 'none', cursor: 'default' }}
      mr="7px"
      fontSize="16px"
      color="brand.darkGrey"
      {...props}
    >
      {text}
    </ChakraLink>
    <ChakraLink
      fontWeight="bold"
      fontSize="16px"
      color="brand.black"
      {...props}
    >
      {actionText}
    </ChakraLink>
  </Flex>
)
