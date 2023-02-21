import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontSize="16px"
    borderRadius="16px"
    h="56px"
    bg="brand.primary"
    {...props}
  >
    {children}
  </ChakraButton>
)
