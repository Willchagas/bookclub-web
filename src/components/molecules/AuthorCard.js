import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const AuthorCard = ({ id, avatar_url, name }) => {
  const navigate = useNavigate()

  return (
    <Flex
      mr={['40px', '16px']}
      mb="18px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={() => navigate(`/author-detail/${id}`)}
    >
      <Flex
        backgroundImage={`url(${avatar_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        h={['180px', '230px']}
        w={['120px', '154px']}
        borderRadius="12px"
      />
      <Text
        textAlign="center"
        maxWidth={['120px', '154px']}
        noOfLines={1}
        mt="16px"
        fontSize="12px"
        fontWeight="600"
      >
        {name}
      </Text>
    </Flex>
  )
}
