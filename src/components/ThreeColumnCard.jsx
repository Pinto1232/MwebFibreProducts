import { Flex, Box } from "@chakra-ui/react";
import Card from "../components/Card";

const ThreeColumnCard = ({ cards }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {cards.map((card, index) => (
        <Box key={index} m={4}>
          <Card {...card} />
        </Box>
      ))}
    </Flex>
  );
};

export default ThreeColumnCard;
