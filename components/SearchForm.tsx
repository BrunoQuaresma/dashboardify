import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  InputGroupProps,
  InputProps,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

type SearchForm = {
  inputGroupProps?: InputGroupProps;
  inputProps?: InputProps;
};

export const SearchForm: React.FC<SearchForm> = ({
  inputGroupProps,
  inputProps,
}) => {
  return (
    <form action="/dashboard">
      <InputGroup {...inputGroupProps}>
        <InputLeftElement>
          <Icon as={FiSearch} />
        </InputLeftElement>
        <Input type="url" name="url" {...inputProps} />
      </InputGroup>
    </form>
  );
};
