import { Flex, Spinner } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const BookList = ({ title, data, isLoading }) => {
  return (
    <Flex
      flexDirection="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
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
        {!data ||
          (!isLoading && data?.length === 0 && (
            <Text> Nenhum livro relacionado encontrado!</Text>
          ))}
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
