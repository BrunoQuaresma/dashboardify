import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { exampleDataStr } from "../libs/example";
import { Dashboard } from "../components/dashboard/Dashboard";
import { DashboardSchema } from "../types";

const usePreviousValidSchema = (schemaStr: string) => {
  const prevSchema = useRef<DashboardSchema>();

  useEffect(() => {
    try {
      prevSchema.current = DashboardSchema.parse(JSON.parse(schemaStr));
    } catch {}
  }, [schemaStr]);

  return prevSchema.current;
};

export const PlaygroundPage = () => {
  const initialSchemaStr = exampleDataStr;
  const [schemaStr, setSchemaStr] = useState(initialSchemaStr);
  const prevSchema = usePreviousValidSchema(schemaStr);
  const schema = useMemo(() => {
    try {
      return DashboardSchema.parse(JSON.parse(schemaStr));
    } catch {
      return prevSchema;
    }
  }, [prevSchema, schemaStr]);

  return (
    <Grid bgColor="gray.50" gridTemplateColumns="1fr 1fr" h="100vh">
      <Box w="full" h="100vh" borderRightWidth={1}>
        <CodeMirror
          value={schemaStr}
          style={{ height: "100%", overflow: "auto" }}
          width="100%"
          height="100%"
          extensions={[json()]}
          onChange={(value) => {
            setSchemaStr(value);
          }}
        />
      </Box>

      <Box w="full" h="full" overflow="auto" p={2}>
        {schema && <Dashboard schema={schema} />}
      </Box>
    </Grid>
  );
};

export default PlaygroundPage;
