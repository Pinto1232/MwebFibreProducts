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
    <div >
  ${providerInfo.slice(0, 10).map(p => html`<img src="${p.url}" alt="${p.name}">`)}
</div>


  );
};

export default Home;
