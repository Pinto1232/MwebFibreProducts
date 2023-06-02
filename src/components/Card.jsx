import { Box, Flex, Image, Text } from "@chakra-ui/react";
import DealTypeButton from "./DealTypeButton";
import CustomParagraph from "./CustomParagraph";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import CustomHeading from "./CustomHeading";

const Card = ({ title, description, imageUrl, cardWidth }) => {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      w={cardWidth}
      whiteSpace="nowrap"
      py={2}
    >
      <Flex direction={{ base: "column", sm: "row" }} p={4} gap={2}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
          <CustomParagraph>
            Unthrottled
          </CustomParagraph>
          <CustomParagraph>
            FREE installation + Router
          </CustomParagraph>
          <CustomHeading>
            R999pm
          </CustomHeading>
        </Text>
        <Box>
          <Image mt={20} src={imageUrl} maxW={"80%"} objectFit="cover" />
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            <Flex gap={4}>
              <Box>
                <ArrowDownIcon boxSize={6} color="blue.700" />
                <CustomParagraph size="sm">Download</CustomParagraph>
                <CustomParagraph size="md">20Mbps</CustomParagraph>
              </Box>
              <Box>
                <ArrowUpIcon boxSize={6} color="blue.700" />
                <CustomParagraph size="sm">Upload</CustomParagraph>
                <CustomParagraph size="md">20Mbps</CustomParagraph>
              </Box>
            </Flex>
          </Text>
          <DealTypeButton
            bgColor="red.400"
            color="#fff"
            size={"sm"}
            width={"120px"}
            label={"Check coverage"}
            borderRadius={0}
            shadow={"lg"}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
