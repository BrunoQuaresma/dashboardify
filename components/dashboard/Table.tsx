import {
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Table as TableComponent,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Table as TableType } from "../../types";

export const Table: React.FC<{ table: TableType }> = ({ table }) => {
  return (
    <Box shadow="sm" rounded="lg" overflow="auto" bg="white" w="full">
      <TableComponent variant="simple">
        <Thead>
          <Tr>
            {table.columns.map((c) => (
              <Th whiteSpace="nowrap" key={c}>
                {c}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {table.data.map((row, index) => (
            <Tr key={index}>
              {row.map((value, indexRow) => (
                <Td key={indexRow}>{value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableComponent>
    </Box>
  );
};
