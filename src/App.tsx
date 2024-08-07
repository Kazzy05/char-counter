import React from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import CharCounter from './CharCounter';

function App() {
  return (
    <Container maxW='1000px'>
      <Box padding="4">
        <Heading as="h1" size="xl" marginBottom="4">
          文字数カウンター
        </Heading>
        <CharCounter />
      </Box>
    </Container>
  );
}

export default App;
