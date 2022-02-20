import React from "react";
import { LineChart as LineChartType } from "../../types";
import { ResponsiveLine } from "@nivo/line";
import { Box, Heading } from "@chakra-ui/react";

export const LineChart: React.FC<{ chart: LineChartType }> = ({ chart }) => {
  return (
    <Box shadow="sm" p={[4, 6]} rounded="md" bg="white" w="full" height="md">
      <Heading as="h4" fontSize="sm" mb={4} fontWeight="medium">
        {chart.label}
      </Heading>

      <ResponsiveLine
        enableSlices="x"
        animate
        colors={chart.lines.map((l) => l.color)}
        data={chart.lines}
        margin={{ top: 10, right: 110, bottom: 60, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
      />
    </Box>
  );
};
