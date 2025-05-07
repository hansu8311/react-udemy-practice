import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "./components/ClientDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";
import ServerActionsDemo from "./components/ServerActionsDemo";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo></RSCDemo>
        {/* children으로 간접적으로 가능. */}
      </ClientDemo>
      <DataFetchingDemo></DataFetchingDemo>
      <ServerActionsDemo></ServerActionsDemo>
    </main>
  );
}
