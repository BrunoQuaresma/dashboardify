import React from "react";
import { LineChart as LineChartType } from "../../types";
import { ResponsiveLine } from "@nivo/line";
import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

export const LineChart: React.FC<{ chart: LineChartType }> = ({ chart }) => {
  const isSimple = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      shadow="sm"
      rounded="md"
      bg="white"
      w="full"
      height={{ base: "xs", md: "md" }}
      flexDir="column"
    >
      <Heading as="h4" fontSize="sm" fontWeight="medium" p={[4, 6]}>
        {chart.label}
      </Heading>

      <Box p={{ base: 0, md: 6 }} pt={0} w="full" flex="1">
        <ResponsiveLine
          animate
          enablePoints={!isSimple}
          enableSlices="x"
          colors={chart.lines.map((l) => l.color)}
          data={chart.lines}
          margin={
            isSimple
              ? { top: 0, right: 0, bottom: 0, left: 0 }
              : { top: 10, right: 40, bottom: 40, left: 40 }
          }
          yScale={{
            type: "linear",
            max: "auto",
          }}
          enableGridX={!isSimple}
          enableGridY={!isSimple}
          axisBottom={isSimple ? null : undefined}
          axisLeft={isSimple ? null : undefined}
        />
      </Box>
    </Flex>
  );
};
