import { Text } from "@chakra-ui/react";

const CustomParagraph = ({
  size = "md",
  align = "left",
  color = "black",
  children,
}) => {
  return (
    <Text fontSize={size} textAlign={align} color={color}>
      {children}
    </Text>
  );
};

export default CustomParagraph;
