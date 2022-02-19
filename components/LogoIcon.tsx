import Icon, { IconProps } from "@chakra-ui/icon";
import React from "react";

export const LogoIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 1024 1024" fill="none" {...props}>
      <rect
        x="50"
        y="50"
        width="924"
        height="924"
        stroke="currentColor"
        strokeWidth="100"
      />
      <rect
        x="328"
        y="322"
        width="646"
        height="652"
        stroke="currentColor"
        strokeWidth="100"
      />
      <rect
        x="604"
        y="600"
        width="370"
        height="374"
        stroke="currentColor"
        strokeWidth="100"
      />
    </Icon>
  );
};
