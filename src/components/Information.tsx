"use client";

import { useGetInformationQuery } from "../gql/catalysishub/generated";

export const Information = () => {
  const { data } = useGetInformationQuery({
    context: {
      apiName: "catalysishub",
    },
  });

  // if (!data) return null;

  return (
    <div>
      Information Component
      <pre>{JSON.stringify(data?.information, null, 2)}</pre>
    </div>
  );
};
