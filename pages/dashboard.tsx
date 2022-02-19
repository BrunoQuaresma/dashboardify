import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FiClock } from "react-icons/fi";
import { Footer } from "../components/Footer";
import { SearchForm } from "../components/SearchForm";
import { Stats } from "../components/dashboard/Stats";
import { dashboardMachine } from "../machines/dashboardMachine";
import { Table } from "../components/dashboard/Table";
import Head from "next/head";

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
            <SearchForm
              inputProps={{ defaultValue: url }}
              inputGroupProps={{ bg: "white" }}
            />

            {context.lastUpdate && (
              <Flex
                mt={4}
                display="inline-flex"
                alignItems="center"
                title="It is updated every 5 minutes."
                background="gray.200"
                p={2}
                pr={4}
                rounded="full"
                lineHeight={0}
                fontSize="sm"
                color="gray.900"
              >
                <Icon as={FiClock} fontSize="xs" mr={2} />
                Last update at {context.lastUpdate.toLocaleTimeString()}
              </Flex>
            )}
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
