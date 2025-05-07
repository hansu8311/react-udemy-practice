import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "./components/ClientDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo></RSCDemo>
        {/* children으로 간접적으로 가능. */}
      </ClientDemo>
      <DataFetchingDemo></DataFetchingDemo>
    </main>
  );
}
