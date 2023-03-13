import { Text, MenuItem } from 'components/atoms'
import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkHeart, BsClipboard2Check } from 'react-icons/bs'
import { GiVampireDracula, GiCheckedShield, GiExitDoor } from 'react-icons/gi'
import { HiOutlineDocumentText } from 'react-icons/hi'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: 'Favoritos',
      divider: false
    },
    {
      id: 1,
      icon: GiVampireDracula,
      text: 'Dados Pessoais',
      divider: false
    },
    {
      id: 2,
      icon: GiCheckedShield,
      text: 'Alterar Senha',
      divider: true
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: 'Termo de Uso',
      divider: false
    },
    {
      id: 4,
      icon: BsClipboard2Check,
      text: 'Política de Privacidade',
      divider: true
    },
    {
      id: 5,
      icon: GiExitDoor,
      text: 'Sair',
      divider: false
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            w={['36px', '48px']}
            h={['36px', '48px']}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.black"
            color="brand.white"
            mr={['6px', '12px']}
          />
          <Text display={['none', 'flex']} fontWeight="bold" maxLength="40px">
            {userStore?.user?.name}
          </Text>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem key={`manu_item_${item.id}`} {...item} />
        ))}
      </MenuList>
    </Menu>
  )
}
