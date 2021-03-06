import {
  Grid,
  Box,
  Stat as StatComponent,
  StatNumber,
  StatLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { formatValue } from "../../libs/format";
import { Stat } from "../../types";

export const Stats: React.FC<{ stats: Array<Stat> }> = ({ stats }) => {
  return (
    <Grid
      gap={3}
      gridTemplateColumns={["1fr", null, "repeat(4, 1fr)"]}
      w="full"
    >
      {stats.map((stat, i) => (
        <Box key={i} shadow="sm" p={[4, 6]} rounded="md" w="full" bg="white">
          <StatComponent
            sx={{
              dl: {
                display: { base: "flex", md: "initial" },
                w: "full",
                flexDir: "row-reverse",
                alignItems: "center",
              },
            }}
          >
            <StatNumber
              fontWeight="light"
              fontSize={["2xl", "4xl"]}
              lineHeight={[null, "shorter"]}
            >
              {stat.prefix && (
                <Text as="span" fontSize={["lg", "2xl"]} mr={1}>
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
              mr="auto"
            >
              {stat.label}
            </StatLabel>
          </StatComponent>
        </Box>
      ))}
    </Grid>
  );
};
