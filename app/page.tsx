"use client"

import { Button } from "@chakra-ui/react"
import { Flex,Heading,Input,useColorMode,useColorModeValue} from "@chakra-ui/react"
export default function Home(){
const {toggleColorMode} = useColorMode();
const formBackground = useColorModeValue("MoonIcon","SunIcon")
  return(
    <Flex height="100vh" alignItems={"center"} justifyContent="center">
      <Flex direction={"column"} background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="faranbutt789@gmail.com" variant={"filled"} type="email"/>
        <Input placeholder="*******" variant={'filled'} mb={6} type="password"/>
        <Button colorScheme={"teal"} mb={6}>Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Button</Button>
      </Flex>

    </Flex>
  )
}