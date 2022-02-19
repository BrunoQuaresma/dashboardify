import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" py={8} textAlign="center" fontSize="sm">
      Dashboardify {currentYear} - Made with <span aria-label="love">❤️</span>{" "}
      by <Link href="https://twitter.com/bruno__quaresma">Bruno Quaresma</Link>{" "}
      and available on GitHub
    </Box>
  );
};
