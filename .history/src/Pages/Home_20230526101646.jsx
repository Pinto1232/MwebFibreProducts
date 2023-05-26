import React from 'react'
import { useGetPackagesQuery } from "../services/fibreIconsApi";

const Home = () => {
    const {data: iconsDada, error: errorIcons, isLoading: isLoadingIcons,} = useGetPackagesQuery();
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default Home
