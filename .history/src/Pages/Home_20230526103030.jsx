import React from "react";
import { useGetFibreIconsApiQuery } from "../services/fibreIconsApi";

const Home = () => {
    const { data: iconsData, error: errorIcon, isLoading: isLoadingIcon } = useGetFibreIconsApiQuery();

  console.log("Icons data", iconsData);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
