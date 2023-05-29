import { Text } from "@chakra-ui/react";

const CustomParagraph = ({
  size = "md",
  align = "left",
  color = "black",
  marginTop,
  children,
}) => {
  return (
    <Text fontSize={size} textAlign={align} color={color} mt={ mt={marginTop}}>
      {children}
    </Text>
  );
};

export default CustomParagraph;
