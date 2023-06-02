import React from "react";
import { Button } from "@chakra-ui/react";

const DealTypeButton = ({ label, shadow, colorScheme, marginTop, color, bgColor, borderRadius, size, width, ...rest }) => {
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      width={width ? width : ["100%", "auto"]} 
      color={color}
      bg={bgColor}
      borderRadius={borderRadius}
      shadow={shadow}
      mt={marginTop}
      px={4}
      py={2}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default DealTypeButton;
