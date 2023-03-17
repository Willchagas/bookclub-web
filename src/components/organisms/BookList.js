import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text, Loader, EmptyMessage } from 'components/atoms'

export const BookList = ({ title, data, isLoading }) => {
  return (
    <Flex
      flexDirection="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
      {isLoading && <Loader />}
      {(!data || data?.length === 0) && (
        <EmptyMessage>Nenhum livro relacionado encontrado!</EmptyMessage>
      )}

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
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
