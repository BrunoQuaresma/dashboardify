import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { HTTPError } from "ky";
import { useRouter } from "next/router";
import React, { FormEventHandler, useEffect, useState } from "react";

const isHttpError = (error: unknown): error is HTTPError => {
  return error instanceof HTTPError;
};

const useErrorMessage = (error: unknown) => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    if (isHttpError(error) && !error.response.bodyUsed) {
      error.response.json().then((res) => {
        setMessage(res.message);
      });
    }
  }, [error]);

  return message;
};

export const Error: React.FC<{ error: unknown }> = ({ error }) => {
  const router = useRouter();
  const errorMessage = useErrorMessage(error);

  const handleSecretSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const urlString = decodeURI(router.query.url as string);
    const url = new URL(urlString);
    url.searchParams.set("secret", data.get("secret") as string);
    router.push(`/dashboard?url=${encodeURI(url.toString())}`);
  };

  let errorView = (
    <Box textAlign="center">
      <Heading as="h2" mb={4} fontSize="6xl" fontWeight="medium">
        Oops
      </Heading>
      <Text as="span" fontSize="lg">
        Something went wrong and we are not able to load your dashboard schema.
        Please, check if the URL is correct and your JSON is valid.
      </Text>
    </Box>
  );

  if (isHttpError(error) && error.response.status === 401) {
    errorView = (
      <>
        <Box
          bg="white"
          p={6}
          pl={8}
          rounded="sm"
          borderLeftWidth={4}
          borderColor="yellow.300"
          mb={8}
          shadow="sm"
        >
          <Heading as="h3" fontSize="lg" fontWeight="medium">
            Unauthorized
          </Heading>
          {errorMessage && <Box mt={2}>{errorMessage}</Box>}
        </Box>

        <form onSubmit={handleSecretSubmit}>
          <FormControl>
            <FormLabel>Secret</FormLabel>
            <Input type="password" name="secret" bg="white" autoFocus />
          </FormControl>

          <Button w="full" type="submit" mt={4} colorScheme="blue">
            Access dashboard
          </Button>
        </form>
      </>
    );
  }

  if (isHttpError(error) && error.response.status === 404) {
    errorView = (
      <Box textAlign="center">
        <Heading as="h2" mb={4} fontSize="6xl" fontWeight="medium">
          Not found
        </Heading>
        <Text as="span" fontSize="lg">
          We couldn&apos;t find your JSON schema. You may have mistyped the URL
          or it is no longer available.
        </Text>
      </Box>
    );
  }

  return (
    <Box maxW="md" mx="auto">
      {errorView}
    </Box>
  );
};
