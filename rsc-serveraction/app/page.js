import fs from "node:fs/promises";

import { Suspense } from "react";

import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      // resolve(users);
      reject(new Error("Error!"));
    }, 2000)
  );
  return (
    <main>
      <ClientDemo>
        <RSCDemo></RSCDemo>
        {/* children으로 간접적으로 가능. */}
      </ClientDemo>
      <DataFetchingDemo></DataFetchingDemo>
      <ServerActionsDemo></ServerActionsDemo>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
