import React from "react";
import { useGetFibreIconsQuery } from "../services/fibreIconsApi";

const Home = () => {
  const {
    data: iconsData,
    error: errorIcon,
    isLoading: isLoadingIcon,
  } = useGetFibreIconsQuery();

  console.log("Icons data", iconsData);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
