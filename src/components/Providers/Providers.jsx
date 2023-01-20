import React from "react";

// Icons
import { BsFillEmojiFrownFill } from "react-icons/bs";

const Providers = ({ movieProviders }) => {
  const providers = movieProviders.flatrate || [];

  return (
    <div className="mt-5 mb-5 providers">
      <h3 className="providers__title">Available on:</h3>
      <ul className="providers__list mt-4">
        {!providers[0] ? (
          <span>
            <BsFillEmojiFrownFill /> Sorry, the movie is unavailable on any
            platform
          </span>
        ) : (
          providers.map((provider) => (
            <li key={provider.provider_id} className="providers provider">
              <img
                className="provider__logo"
                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                alt={provider.provider_name}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Providers;
