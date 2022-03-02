import { VStack, Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { DashboardSchema } from "../../types";
import { LineChartProps } from "./LineChart";
import { Stats } from "./Stats";
import { Table } from "./Table";

const LineChart = dynamic<LineChartProps>(
  () => import("./LineChart").then((module) => module.LineChart),
  { ssr: false }
);

export const Dashboard: React.FC<{ schema: DashboardSchema }> = ({
  schema,
}) => {
  return (
    <VStack mt={8} spacing={[12, 16]}>
      {schema.sections.map((section) => (
        <Box
          w="full"
          as="section"
          key={section.title}
          id={encodeURI(section.title.toLowerCase())}
        >
          <Heading
            as="h2"
            ml={[4, 6]}
            mb={[2, 4]}
            fontSize="lg"
            fontWeight="regular"
          >
            {section.title}
          </Heading>

          <VStack spacing={3}>
            {section.chart && <LineChart chart={section.chart} />}
            {section.stats && <Stats stats={section.stats} />}
            {section.table && <Table table={section.table} />}
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};
