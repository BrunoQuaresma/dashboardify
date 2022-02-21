import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  InputGroupProps,
  InputProps,
  BoxProps,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

type SearchForm = {
  formProps?: BoxProps;
  inputGroupProps?: InputGroupProps;
  inputProps?: InputProps;
};

export const SearchForm: React.FC<SearchForm> = ({
  inputGroupProps,
  inputProps,
  formProps,
}) => {
  return (
    <Box as="form" action="/dashboard" {...formProps}>
      <InputGroup {...inputGroupProps}>
        <InputLeftElement>
          <Icon as={FiSearch} />
        </InputLeftElement>
        <Input type="url" name="url" required {...inputProps} />
      </InputGroup>
    </Box>
  );
};
