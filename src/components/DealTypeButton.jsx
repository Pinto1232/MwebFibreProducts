import React from "react";
import { Button } from "@chakra-ui/react";

const DealTypeButton = ({ label, shadow, colorScheme, color, bgColor, borderRadius, size, width, ...rest }) => {
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      width={width}
      color={color}
      bg={bgColor}
      borderRadius={borderRadius}
      shadow={shadow}
      px={4}
      py={2}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default DealTypeButton;
