import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";
import { Box, Flex } from "@chakra-ui/react";
import CustomHeading from "../components/CustomHeading";
import CustomParagraph from "../components/CustomParagraph";
import FilterBy from "../components/FilterBy";
import speedOptions from "../data/priceOptions.json";
import priceOptions from "../data/priceOptions.json";
import Card from "../components/Card";
import imageUrl from "../assets/provider-evotel.png"

const Home = () => {
  const dispatch = useDispatch();
  const { providerInfo, loading, error } = useSelector(
    (state) => state.provider
  );

  const [selectedSpeed, setSelectedSpeed] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
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

      <Flex justify="center" align="center" gap={8}>
        {providerInfo.slice(0, 10).map((provider) => (
          <div key={provider.code}>
            <img src={provider.url} alt={provider.name} />
          </div>
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
        justify={'center'}
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
        justify={'center'}
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
    </Box>
  );
};

export default Home;
