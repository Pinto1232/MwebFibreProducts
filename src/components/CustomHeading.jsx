import { Heading } from "@chakra-ui/react";

const CustomHeading = ({
  size = "lg",
  align = "center",
  marginTop,
  children,
}) => {
  return (
    <Heading as="h2" size={size} textAlign={align} mt={marginTop}>
      {children}
    </Heading>
  );
};

export default CustomHeading;
