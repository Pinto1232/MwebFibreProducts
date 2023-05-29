import { Box, Flex, Image, Text } from "@chakra-ui/react";
import DealTypeButton from "./DealTypeButton";

const Card = ({ title, description, imageUrl, cardWidth }) => {
  return (
    <Flex
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      w={cardWidth}
      whiteSpace="nowrap"
    >
      <Flex p={4} gap={2}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Box>
          <Image mt={8} src={imageUrl}  objectFit="cover" />
        </Box>
        <Text>{description}</Text>
        <DealTypeButton
          bgColor="red.400"
          color="#fff"
          size={"sm"}
          width={"160px"}
          label={"Check coverage"}
          borderRadius={0}
          shadow={"lg"}
        />
      </Flex>
    </Flex>
  );
};

export default Card;
