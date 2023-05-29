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
        console.log(data.slice(0, 5));
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

  const logoBaseURL = "https://www.mweb.co.za/media/images/providers";

  return (
    <div style={{ display: "grid" }}>
      <h1>Home</h1>
      <div style={{ display: "grid" }}>
        {Array.isArray(providerInfo) &&
          providerInfo.slice(0, 5).map((provider) => (
            <img
              key={provider.code}
              src={`${logoBaseURL}/provider-${provider.code}.png`}
              alt={provider.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
