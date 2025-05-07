import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "./components/ClientDemo";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo></RSCDemo>
        {/* children으로 간접적으로 가능. */}
      </ClientDemo>
    </main>
  );
}
