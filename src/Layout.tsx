import React from 'react';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export default Layout;
