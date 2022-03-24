import {Center, Flex} from "@chakra-ui/react";


export const Header = () =>{
return (
    <div>
  <Flex direction='row'
  bg='blue.700'
  h={['6em','3em']} 
  justifyContent='left'
  >
<Center 
  paddingLeft='.5em'
  color='white'
  fontFamily='monospace'
  fontSize='3xl' 
  fontWeight='bold'>
BlueCollar
</Center>
</Flex>
</div>
)
}