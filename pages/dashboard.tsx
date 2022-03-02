import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { SearchForm } from "../components/SearchForm";
import { dashboardMachine } from "../machines/dashboardMachine";
import Head from "next/head";
import { LogoIcon } from "../components/LogoIcon";
import NextLink from "next/link";
import { Error } from "../components/dashboard/Error";
import { Dashboard } from "../components/dashboard/Dashboard";

const DashboardPage: NextPage = () => {
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
            {matches("notStarted.error") && <Error error={context.error} />}

            {matches("loading") && !context.schema && (
              <Center h="full">
                <Spinner />
              </Center>
            )}

            {context.schema && <Dashboard schema={context.schema} />}
          </Box>
        </Container>

        <Footer />
      </Flex>
    </>
  );
};

export default DashboardPage;
