import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPriceRanges, updatePriceRanges } from "../redux/actions";
import CustomHeading from "./CustomHeading";
import { Box, Flex } from "@chakra-ui/react";

const PriceRangesFilter = () => {
  const priceRanges = useSelector((state) => state.provider.priceRanges);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPriceRanges());
  }, [dispatch]);

  const handleRangeChange = (min, max, checked) => {
    const updatedRanges = priceRanges.map((range) => {
      if (range.min === min && range.max === max) {
        return { ...range, checked };
      }
      return range;
    });
    dispatch(updatePriceRanges(updatedRanges));
  };

  return (
    <Box mt={10} shadow={'sm'} borderWidth={1} mx="auto" maxW="6xl" gap={4}>
    <Box mx="auto" maxW="5xl">
        <CustomHeading marginTop={10} align="start" size="lg">
          Price ranges
        </CustomHeading>
      </Box>
      <Flex whiteSpace="nowrap" mx="auto" maxW="5xl" mt={4} gap={8}>
        {Array.isArray(priceRanges) &&
          priceRanges.slice(0, 6).map((range) => (
            <Box key={`${range.min}-${range.max}`}>
              <input
                type="checkbox"
                checked={range.checked}
                onChange={(e) =>
                  handleRangeChange(range.min, range.max, e.target.checked)
                }
              />
              <label>{range.label}</label>
            </Box>
          ))}
      </Flex>
    </Box>
  );
};

export default PriceRangesFilter;
