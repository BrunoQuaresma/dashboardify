import {
  Grid,
  Box,
  Stat as StatComponent,
  StatNumber,
  StatLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Stat } from "../../types";

function formatValue(value: string | number) {
  if (typeof value === "number") {
    return value.toLocaleString();
  }

  return value;
}

export const Stats: React.FC<{ stats: Array<Stat> }> = ({ stats }) => {
  return (
    <Grid gap={3} gridTemplateColumns={["1fr", null, "repeat(4, 1fr)"]}>
      {stats.map((stat, i) => (
        <Box key={i} shadow="sm" p={[4, 6]} rounded="md" w="full" bg="white">
          <StatComponent>
            <StatNumber
              fontWeight="light"
              fontSize={["2xl", "4xl"]}
              lineHeight={[null, "shorter"]}
            >
              {stat.prefix && (
                <Text as="span" fontSize="2xl" mr={1}>
                  {stat.prefix}
                </Text>
              )}
              {formatValue(stat.value)}
            </StatNumber>
            <StatLabel
              fontWeight="medium"
              color="gray.600"
              fontSize={[null, "md"]}
              mt={1}
            >
              {stat.label}
            </StatLabel>
          </StatComponent>
        </Box>
      ))}
    </Grid>
  );
};
