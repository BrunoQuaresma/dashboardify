import { Box, Container, Link, Heading } from "@chakra-ui/react";
import React from "react";
import { SearchForm } from "../components/SearchForm";
import NextLink from "next/link";
import { Logo } from "../components/Logo";
import { Doc } from "../components/Doc";
import { SEO_URL, SITE_URL } from "../constants";
import Head from "next/head";
import { Footer } from "../components/Footer";

const SEO_TITLE = "Create dashboards using JSON - Dashboardify";
const SEO_DESCRIPTION =
  "Create dashboards providing a simple JSON schema to create a dashboard that can be shared with your team, company or users.";
const SEO_IMG = `${SEO_URL}/cover.png`;

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={SEO_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content={SEO_IMG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SEO_URL} />
        <meta property="twitter:title" content={SEO_TITLE} />
        <meta property="twitter:description" content={SEO_DESCRIPTION} />
        <meta property="twitter:image" content={SEO_IMG} />
      </Head>

      <Container maxW="container.lg" py={[10, 20]} px={5}>
        <Box maxW="container.lg">
          <Box mb={[4, 10]}>
            <Logo />
          </Box>

          <Heading as="h1" fontSize={["5xl", "8xl"]} lineHeight="1.15">
            Create dashboards using JSON
          </Heading>

          <Heading
            mt={[4, 6]}
            as="h2"
            fontSize={["xl", "4xl"]}
            color="gray.600"
            fontWeight="regular"
            maxW="container.md"
            lineHeight="short"
          >
            Provide a simple JSON schema to create a dashboard that can be
            shared with your team, company or users.
          </Heading>
        </Box>

        <Box maxW="container.md" mt={[6, 10]}>
          <SearchForm
            inputGroupProps={{ size: "lg" }}
            inputProps={{
              autoFocus: true,
              placeholder: "https://myapi.com.br/dashboard",
            }}
          />

          <Box mt={[2, 6]} fontSize={["sm", "lg"]} color="gray.600">
            Want to see how it looks like?{" "}
            <NextLink passHref href={`/dashboard?url=${SITE_URL}/api/example`}>
              <Link>Try an example</Link>
            </NextLink>
          </Box>
        </Box>

        <Doc mt={[20, 40]} maxW="container.md" />
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
