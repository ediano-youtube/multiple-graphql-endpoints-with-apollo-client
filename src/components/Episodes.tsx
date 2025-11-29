"use client";

import { useGetEpisodesQuery } from "../gql/rickandmortyapi/generated";

export const Episodes = () => {
  const { data } = useGetEpisodesQuery({
    context: {
      apiName: "rickandmortyapi",
    },
  });

  // if (!data) return null;

  return (
    <div>
      Episodes Component
      <pre>
        {JSON.stringify(data?.episodes?.results?.[0]?.characters[0], null, 2)}
      </pre>
    </div>
  );
};
