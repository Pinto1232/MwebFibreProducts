import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";
import { Box, Flex } from "@chakra-ui/react";
import CustomHeading from "../components/CustomHeading";
import CustomParagraph from "../components/CustomParagraph";

const Home = () => {
  const dispatch = useDispatch();
  const { providerInfo, loading, error } = useSelector(
    (state) => state.provider
  );

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
    <Box>
      <CustomHeading size="xl" align="center">
        Fibre Products
      </CustomHeading>

      <CustomParagraph size="lg" align="center" color="blue">
        Select a Fibre insfrastructure provider below, browse the products
        available and complete a coverage search
      </CustomParagraph>

      <Flex justify="center" align="center" gap={8}>
        {providerInfo.slice(0, 10).map((provider) => (
          <div key={provider.code}>
            <img src={provider.url} alt={provider.name} />
          </div>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
