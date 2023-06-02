import React from "react";
import { Select, Flex, Box } from "@chakra-ui/react";
import CustomParagraph from "./CustomParagraph";
import DealTypeButton from "./DealTypeButton";

const FilterBy = ({
  speedOptions,
  priceOptions,
  selectedSpeed,
  selectedPrice,
  onSpeedChange,
  onPriceChange,
}) => {

  return (
    <Flex
      spacing={4}
      align="start"
      direction={{ base: 'column', md: 'row' }} 
      maxW="7xl"
      mt={10}
      mx="auto"
      p={3}
      borderWidth={1}
      rounded="md"
      alignItems="center"
      justify="space-around"
      shadow={'md'}
    >
      <Box>
        <CustomParagraph align="start" fontSize="lg">
          Filter By:
        </CustomParagraph>
        <Flex direction={{ base: 'column', md: 'row' }} gap={4} align="center"> 
          <Select
            placeholder="Speed"
            value={selectedSpeed}
            onChange={onSpeedChange}
            width="120px"
          >
            {Array.isArray(speedOptions) &&
              speedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </Select>
          <Select
            placeholder="Price"
            value={selectedPrice}
            onChange={onPriceChange}
            width="120px"
          >
            {Array.isArray(priceOptions) &&
              priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </Select>
        </Flex>
      </Box>
      <Box mt={{ base: 4, md: 0 }}> 
        <CustomParagraph align="start" fontSize="lg">
          Deal Type:
        </CustomParagraph>
        <DealTypeButton
          label="Free setup + Router"
          bgColor="blue.800"
          color={'#fff'}
          size="md"
          borderRadius={0}
          width={{ base: '100%', md: '500px' }} 
        />
      </Box>
    </Flex>
  );
};

export default FilterBy;
