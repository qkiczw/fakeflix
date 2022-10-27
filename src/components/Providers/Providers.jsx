import React from "react";

const Providers = ({ movieProviders }) => {
  const providers = movieProviders.flatrate || [];
  //   console.log(
  //     `providers: `,
  //     providers.map((provider) => provider.provider_name)
  //   );
  return (
    <>
      <div className="mt-5 mb-5 providers">
        <h3 className="providers__title">Available on:</h3>
        <ul className="providers__list">
          {providers.map((provider) => (
            <li className="providers__provider">{provider.provider_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Providers;
