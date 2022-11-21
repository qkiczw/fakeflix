import React from "react";

const Providers = ({ movieProviders }) => {
  const providers = movieProviders.flatrate || [];

  return (
    <div className="mt-5 mb-5 providers">
      <h3 className="providers__title">Available on:</h3>
      <ul className="providers__list mt-4">
        {providers.map((provider) => (
          <li key={provider.provider_id} className="providers provider">
            <img
              className="provider__logo"
              src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
              alt={provider.provider_name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Providers;
