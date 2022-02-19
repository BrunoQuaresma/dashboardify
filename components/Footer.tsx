import { Box, Link } from "@chakra-ui/react";
import React from "react";
import { GITHUB_URL } from "../constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" py={8} textAlign="center" fontSize="sm">
      Dashboardify {currentYear} - Made with <span aria-label="love">❤️</span>{" "}
      by{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/bruno__quaresma"
      >
        Bruno Quaresma
      </Link>{" "}
      and available on{" "}
      <Link target="_blank" rel="noreferrer" href={GITHUB_URL}>
        GitHub
      </Link>
    </Box>
  );
};
