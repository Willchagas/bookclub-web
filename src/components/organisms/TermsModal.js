import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const TermsModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Termos de uso</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody
          css={{
            '::-webkit-scrollbar': { display: 'none' }
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            tincidunt ultrices feugiat. Nunc tincidunt gravida pellentesque. In
            hac habitasse platea dictumst. Donec aliquet erat sit amet euismod
            ullamcorper. Donec dignissim velit tortor, eu blandit nisl ultricies
            quis. Vestibulum iaculis facilisis iaculis. Maecenas tincidunt, nibh
            in rutrum rhoncus, purus quam tristique nibh, vel lobortis erat leo
            eu dolor. Nam gravida neque eros, ac malesuada sem lacinia vel.
            Nullam non vehicula erat, nec molestie tortor. Suspendisse quis
            tortor ut nisi dignissim ultricies. In scelerisque ac eros at
            hendrerit. Maecenas ornare massa nec ultricies eleifend. Maecenas
            nibh quam, viverra sit amet magna a, gravida venenatis neque. Cras
            dignissim, diam id porta hendrerit, ex erat finibus ligula, in
            viverra nibh enim eleifend est. Vestibulum mi libero, facilisis et
            nulla eu, molestie lacinia orci. Nam at sapien facilisis, iaculis
            felis eget, laoreet dui. Duis pretium, neque eget semper malesuada,
            metus leo interdum tellus, sed varius magna velit quis mauris.
            Aliquam erat volutpat. Morbi non odio odio. Morbi in sapien urna.
            Maecenas egestas risus urna, et sollicitudin augue tempus tempus.
            Maecenas sit amet venenatis augue. Phasellus nec dignissim mauris,
            quis tempor turpis. Duis eget magna odio. Donec elementum auctor
            mauris, at porttitor urna tempus non. Quisque ac nulla vel eros
            fringilla placerat at et purus. Nulla euismod pulvinar dapibus.
            Pellentesque at elementum magna. Vestibulum eget diam faucibus,
            semper turpis sit amet, fringilla massa. Pellentesque facilisis
            risus a erat eleifend semper. Quisque bibendum pretium enim, non
            rutrum ex mollis nec. Vivamus urna massa, malesuada hendrerit est
            sed, commodo sollicitudin sem. In sit amet velit eros. Donec luctus
            at lacus eget cursus. Praesent suscipit enim eget nulla placerat
            rhoncus. Proin at lorem at urna semper dapibus. Nulla tellus urna,
            iaculis vitae ante vestibulum, tempus viverra massa. Suspendisse
            interdum justo mauris, nec varius leo congue ac. In lacinia
            condimentum orci aliquet interdum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut mollis enim bibendum, suscipit ex
            eget, feugiat urna. Praesent consequat ipsum eget nisl tincidunt
            scelerisque. Cras a quam eu ex sodales dictum. Morbi mollis nulla et
            tincidunt tincidunt. Sed facilisis malesuada nisi euismod blandit.
            Integer ac urna nec augue finibus vulputate a a leo. Maecenas
            laoreet egestas ipsum, et mattis magna molestie eget. Pellentesque
            rhoncus, ex vel euismod consequat, magna tellus ultrices augue, a
            eleifend magna leo eu felis. Quisque euismod pharetra mi, nec
            interdum mauris iaculis at. Pellentesque et lobortis urna, at
            vestibulum purus. Phasellus vestibulum pulvinar urna, eu suscipit
            urna sodales ultricies. Nam mattis volutpat augue. Nam feugiat purus
            eu eros maximus, a imperdiet mauris suscipit. Ut a accumsan eros, id
            convallis nisi. Fusce iaculis ac tortor ac dignissim. Nulla laoreet
            semper bibendum. Suspendisse facilisis, metus id luctus pretium,
            nunc leo maximus tortor, et vestibulum dui massa vel urna. Donec
            massa lectus, placerat eget ex sagittis, vestibulum blandit purus.
            Cras nec arcu non purus sollicitudin cursus. Aliquam eget ultrices
            nunc. Duis vitae risus sed velit molestie auctor. Mauris nulla
            lectus, aliquet nec porta vel, laoreet et dui. In mattis porttitor
            lorem, sit amet porttitor nisl.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
