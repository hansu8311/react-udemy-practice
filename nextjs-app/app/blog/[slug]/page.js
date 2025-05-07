export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>BlogPostPage</h1>
      <p>{params.slug}</p>
    </main>
  );
}
