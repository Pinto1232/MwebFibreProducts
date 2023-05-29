import { Select, VStack } from "@chakra-ui/react";

const FilterBy = ({
  speedOptions,
  priceOptions,
  selectedSpeed,
  selectedPrice,
  onSpeedChange,
  onPriceChange,
}) => {
  return (
    <VStack spacing={4}>
      <Select value={selectedSpeed} onChange={onSpeedChange}>
        {speedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Select value={selectedPrice} onChange={onPriceChange}>
        {priceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </VStack>
  );
};

export default FilterBy;
