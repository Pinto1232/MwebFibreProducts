import { Text } from "@chakra-ui/react";

const CustomParagraph = ({
  size = "md",
  align = "left",
  color = "black",
  marginTop,
  marginButton,
  children,
}) => {
  return (
    <Text fontSize={size} textAlign={align} color={color} mt={marginTop} mb={marginButton}>
      {children}
    </Text>
  );
};

export default CustomParagraph;
