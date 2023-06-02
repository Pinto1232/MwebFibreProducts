import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPriceRanges, updatePriceRanges } from "../redux/actions";
import CustomHeading from "./CustomHeading";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const PriceRangesFilter = () => {
  const priceRanges = useSelector((state) => state.provider.priceRanges);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedRangeData, setSelectedRangeData] = useState([]);
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

    if (checked) {
      setSelectedRange({ min, max });
      fetchData(min, max);
    } else {
      setSelectedRange(null);
      setSelectedRangeData([]);
    }
  };

  const fetchData = (min, max) => {
    const endpoint = `https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-CLAWBACK-PROMO4,FTTH-VUMA-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CLEARACCESS-CLAWBACK,FTTH-VODA-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-MFN-SETUP-CLAWBACK-100MBUP,FTTH-VUMA-12MONTH-CLAWBACK-25MBPS,FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-FROGFOOTAIR-CLAWBACK,FTTH-CCC-SETUP-100MBUP,FTTH-CCC-ALT-SETUP-100MBUP,FTTH-ZOOM-CLAWBACK,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP?sellable_online=true`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setSelectedRangeData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Box
      mt={10}
      mb={10}
      shadow="sm"
      borderWidth={1}
      mx="auto"
      maxW="6xl"
      px={{ base: 4, md: 8 }} // responsive padding
    >
      <Box mx="auto" maxW="5xl">
        <CustomHeading marginTop={5} align="start" size="lg">
          Price ranges
        </CustomHeading>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        whiteSpace="nowrap"
        mx="auto"
        maxW="5xl"
        mt={4}
        gap={8}
      >
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
      <Stack spacing={4} mx="auto" maxW="5xl" mb={8}>
        {selectedRangeData &&
          selectedRangeData
            .flatMap((item) => item.products)
            .slice(0, 5)
            .map((product, index) => (
              <Text key={`${product.promoCode}-${index}`}>
                <Flex gap={4}>
                  {product.productDescription}
                  <Text fontWeight="bold">R{selectedRange.max}</Text>
                </Flex>
              </Text>
            ))}
      </Stack>
    </Box>
  );
};
export default PriceRangesFilter;
