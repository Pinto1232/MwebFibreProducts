import { Heading } from "@chakra-ui/react";

const CustomHeading = ({ size = "lg", align = "center", children }) => {
  return (
    <Heading as="h2" size={size} textAlign={align}>
      {children}
    </Heading>
  );
};

export default CustomHeading;
