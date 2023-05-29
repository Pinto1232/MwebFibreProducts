import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { providerInfo, loading, error } = useSelector(
    (state) => state.provider
  );

  useEffect(() => {
    dispatch(fetchProviderInfo())
      .then((data) => {
        // Parse the HTML payload
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.payload, "text/html");

        // Extract the data from the parsed HTML
        const extractedData = doc.body.textContent;
        console.log(extractedData);
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
    <div style={{ display: "grid" }}>
      <h1>Home</h1>
      {Array.isArray(providerInfo) &&
        providerInfo.map((provider) => (
          <img
            key={provider.code}
            src={`https://www.mweb.co.za/media/images/providers/${provider.code}.png`}
            alt={provider.name}
          />
        ))}
    </div>
  );
};

export default Home;
