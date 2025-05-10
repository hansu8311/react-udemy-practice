import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="1"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business .....</p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="2"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business .....</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
