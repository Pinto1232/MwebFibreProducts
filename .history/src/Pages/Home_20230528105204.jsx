import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";
import { html, render } from 'lit-html';

const Home = () => {
  const dispatch = useDispatch();
  const { providerInfo, loading, error } = useSelector(
    (state) => state.provider
  );

  console.log('Provider data', providerInfo)

  useEffect(() => {
    dispatch(fetchProviderInfo())
      .then((data) => {
        console.log(data);
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
      {Array.isArray(providerInfo) && providerInfo.map((provider) => (
        <img key={provider.code} src={provider.url} alt={provider.name} />
      ))}
    </div>
  );
};

export default Home;
