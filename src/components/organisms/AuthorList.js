import { Flex, Spinner } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const AuthorList = ({ data, isLoading }) => {
  return (
    <Flex
      flexDirection="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle>Autores</Text.ScreenTitle>
      <Flex
        mt="24px"
        flexDir="row"
        overflowX="scroll"
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {isLoading && (
          <Flex align="center" justifyContent="center" h="230px">
            <Spinner />
          </Flex>
        )}
        {((!isLoading && data?.length === 0) || !data) && (
          <Text> Nenhum autor encontrado!</Text>
        )}
        {data &&
          data?.map((item) => (
            <AuthorCard key={`author_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
