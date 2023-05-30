import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Box } from "@chakra-ui/react";
import PriceRangesFilter from "./components/PriceRangesFilter";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <PriceRangesFilter />
    </Box>
  );
}

export default App;
