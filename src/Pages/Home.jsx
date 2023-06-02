import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";
import { Box, Flex, Image, Spinner } from "@chakra-ui/react";
import CustomHeading from "../components/CustomHeading";
import CustomParagraph from "../components/CustomParagraph";
import FilterBy from "../components/FilterBy";
import speedOptions from "../data/priceOptions.json";
import priceOptions from "../data/priceOptions.json";
import Card from "../components/Card";
import imageUrl from "../assets/provider-evotel.png";

const Home = () => {
  const dispatch = useDispatch();
  const { providerInfo, loading, error } = useSelector(
    (state) => state.provider
  );

  const [selectedSpeed, setSelectedSpeed] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [showSpinner, setShowSpinner] = useState(true);

  const handleSpeedChange = (event) => {
    setSelectedSpeed(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchProviderInfo())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log(data.slice(0, 5));
        } else {
          console.log("data is not an array");
        }
        setTimeout(() => {
          setShowSpinner(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setShowSpinner(false);
      });
  }, [dispatch]);

  if (loading || showSpinner) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box mt={10}>
      <CustomHeading size="xl" align="center">
        Fibre Products
      </CustomHeading>

      <CustomParagraph
        size="lg"
        align="center"
        color="black"
        marginTop={4}
        marginButton={4}
      >
        Select a Fibre infrastructure provider below, browse the products
        available and complete a coverage search
      </CustomParagraph>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap={{ base: 4, md: 8 }}
        wrap="wrap"
      >
        {providerInfo.slice(0, 10).map((provider) => (
          <Box key={provider.code}>
            <Image src={provider.url} alt={provider.name} />
          </Box>
        ))}
      </Flex>

      <FilterBy
        speedOptions={speedOptions}
        priceOptions={priceOptions}
        selectedSpeed={selectedSpeed}
        selectedPrice={selectedPrice}
        onSpeedChange={handleSpeedChange}
        onPriceChange={handlePriceChange}
      />

      <Flex
        align="start"
        maxW="5xl"
        mx="auto"
        mt={10}
        borderWidth={0}
        rounded="md"
        alignItems="center"
        justify={"center"}
        gap={8}
      >
        <Card
          title="100Mbs uncapped Fibre"
          description="Description card"
          imageUrl={imageUrl}
        />
        <Card
          title="50Mbs uncapped Fibre"
          description="Description card"
          imageUrl={imageUrl}
        />
      </Flex>

      <Flex
        align="start"
        maxW="5xl"
        mx="auto"
        mt={10}
        borderWidth={0}
        rounded="md"
        alignItems="center"
        justify={"center"}
        gap={8}
      >
        <Card
          title="100Mbs uncapped Fibre"
          description="Description card"
          imageUrl={imageUrl}
        />
        <Card
          title="50Mbs uncapped Fibre"
          description="Description card"
          imageUrl={imageUrl}
        />
      </Flex>
      <Box
        maxW="5xl"
        mx="auto"
        borderWidth={0}
        alignItems="center"
        justify={"center"}
        textAlign={"center"}
      ></Box>
    </Box>
  );
};

export default Home;
