import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
const Navbar = () => {
    return (
        <Stack
            p={15}
            // bg={'blue.50'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}   
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='3xl' fontWeight={'bold'} color='purple.500' style={{ fontFamily: "Pacifico" }}>Resumegen</Heading>
                <Spacer></Spacer>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    {/* <Text as='a' href='#' fontSize='lg'>Home</Text>
                    <Button href={'#Footer'} colorScheme={'purple'} fontWeight={'medium'}>Contact</Button> */}
                </HStack>
            </Flex>

        </Stack>
    )
}

export default Navbar
