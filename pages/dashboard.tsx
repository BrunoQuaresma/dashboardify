import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { SearchForm } from "../components/SearchForm";
import { Stats } from "../components/dashboard/Stats";
import { dashboardMachine } from "../machines/dashboardMachine";
import { Table } from "../components/dashboard/Table";
import Head from "next/head";
import { LogoIcon } from "../components/LogoIcon";
import NextLink from "next/link";

const StatsPage: NextPage = () => {
  const router = useRouter();
  const url = router.query.url as string | undefined;
  const [{ context, matches }, send] = useMachine(dashboardMachine);

  useEffect(() => {
    if (url) {
      send({ type: "START", url });
    }
  }, [send, url]);

  return (
    <>
      <Head>
        <title>Dashboard - Dashboardify</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Flex bg="gray.50" flexDir="column" flex="1">
        <Box as="header" py={4}>
          <Container maxW="container.xl">
            <HStack spacing={4} pl={4}>
              <NextLink passHref href="/">
                <a title="Back to Dashboardify home">
                  <LogoIcon h="full" fontSize="2xl" />
                </a>
              </NextLink>

              <SearchForm
                inputProps={{ defaultValue: url }}
                inputGroupProps={{ bg: "white" }}
                formProps={{ w: "full" }}
              />
            </HStack>
          </Container>
        </Box>

        <Container maxW="container.xl" flex="1">
          <Box h="full" mt={[2, 8]}>
            {matches("idle.error") && (
              <Box h="full" maxW="container.sm">
                <Heading as="h2" mb={4}>
                  Oops
                </Heading>
                <Text as="span">
                  Something went wrong and we are not able to load your stats.
                  Please, check if the URL is correct and your JSON is valid.
                </Text>
              </Box>
            )}

            {matches("loading") && !context.schema && (
              <Center h="full">
                <Spinner />
              </Center>
            )}

            {context.schema && (
              <VStack mt={8} spacing={16}>
                {context.schema.sections.map((section) => (
                  <Box
                    w="full"
                    as="section"
                    key={section.title}
                    id={encodeURI(section.title.toLowerCase())}
                  >
                    <Heading
                      ml={6}
                      as="h2"
                      mb={4}
                      fontSize="lg"
                      fontWeight="regular"
                    >
                      {section.title}
                    </Heading>
                    {section.stats && <Stats stats={section.stats} />}
                    {section.table && <Table table={section.table} />}
                  </Box>
                ))}
              </VStack>
            )}
          </Box>
        </Container>

        <Footer />
      </Flex>
    </>
  );
};

export default StatsPage;
