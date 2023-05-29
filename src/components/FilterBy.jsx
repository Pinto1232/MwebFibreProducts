import { useState } from "react";
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
  const [showSpeedDropdown, setShowSpeedDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const handleSpeedClick = () => {
    setShowSpeedDropdown(true);
  };

  const handlePriceClick = () => {
    setShowPriceDropdown(true);
  };

  return (
    <Flex
      spacing={4}
      align="start"
      maxW="6xl"
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
        <Flex gap={4} align="center">
          <Select
            value={selectedSpeed}
            onChange={onSpeedChange}
            onClick={handleSpeedClick}
            onFocus={handleSpeedClick}
            width="120px"
          >
            {!showSpeedDropdown && (
              <option disabled selected hidden>
                Speed
              </option>
            )}
            {showSpeedDropdown &&
              Array.isArray(speedOptions) &&
              speedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </Select>
          <Select
            value={selectedPrice}
            onChange={onPriceChange}
            onClick={handlePriceClick}
            onFocus={handlePriceClick}
            width="120px"
          >
            {!showPriceDropdown && (
              <option disabled selected hidden>
                Price
              </option>
            )}
            {showPriceDropdown &&
              Array.isArray(priceOptions) &&
              priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </Select>
        </Flex>
      </Box>
      <Box>
        <CustomParagraph align="start" fontSize="lg">
          Deal Type:
        </CustomParagraph>
        <DealTypeButton
          label="Free setup + Router"
          bgColor="blue.800"
          color={'#fff'}
          size="md"
          borderRadius={0}
          width={400}
        />
      </Box>
    </Flex>
  );
};

export default FilterBy;
