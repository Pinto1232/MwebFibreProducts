import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProviderInfo } from "../redux/actions";
import { html, render } from "lit-html";

const Home = () => {
  const dispatch = useDispatch();
  const { providerInfo, loading, error } = useSelector(
    (state) => state.provider
  );

  useEffect(() => {
    dispatch(fetchProviderInfo())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  useEffect(() => {
    const container = document.getElementById("provider-container");

    const providersTemplate = () => html`
      <div style="display: grid">
        ${Array.isArray(providerInfo) && providerInfo.map((provider) => html`<img src="${provider.url}" alt="${provider.name}">`)}
      </div>
    `;

    render(providersTemplate(), container);

    return () => {
      render(html``, container);
    };
  }, [providerInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div id="provider-container"></div>;
};

export default Home;
