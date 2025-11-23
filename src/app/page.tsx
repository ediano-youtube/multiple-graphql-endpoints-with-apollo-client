import { Countries } from "../components/Countries";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <header className="border-b p-8">
        <h1>Home - Ediano Silva Santos</h1>
        <h2>Multiple GraphQL Endpoints with Apollo Client</h2>
      </header>

      <Countries />
    </div>
  );
}
