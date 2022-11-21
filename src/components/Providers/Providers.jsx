import React from "react";

const Providers = ({ movieProviders }) => {
  const providers = movieProviders.flatrate || [];
    console.log(
      `providers: `, providers
      // providers.map((provider) => provider.provider_name)
    );
  return (
    <>
      <div className="mt-5 mb-5 providers">
        <h3 className="providers__title">Available on:</h3>
        <ul className="providers__list">
          {providers.map((provider) => (
            <li key={provider.provider_id} className="providers__provider">
             
              <img
                    className="logos__imdb"
                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                    alt={"xxx"}
                  />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Providers;
