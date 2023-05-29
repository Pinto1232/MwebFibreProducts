import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";
import { Box, Flex } from "@chakra-ui/react";
import CustomHeading from "../components/CustomHeading";

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
    <Flex justify="center" align="center" gap={8}>
      <Box>
      <CustomHeading size="xl" align="left">
        Fibre Products
      </CustomHeading>
      </Box>

      {providerInfo.slice(0, 10).map((provider) => (
        <div key={provider.code}>
          <img src={provider.url} alt={provider.name} />
        </div>
      ))}
    </Flex>
  );
};

export default Home;
