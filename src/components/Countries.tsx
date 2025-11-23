"use client";

import { useGetCountriesQuery } from "../gql/generated";

export const Countries = () => {
  const { data } = useGetCountriesQuery();

  if (!data) return null;

  return (
    <div>
      <h2>Countries Component</h2>
      <pre>{JSON.stringify(data.countries[0], null, 2)}</pre>
    </div>
  );
};
