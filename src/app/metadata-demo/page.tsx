import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Metadata</h1>
      <div>
        <Link href="/metadata-demo/static">Static</Link>
      </div>
      <div>
        <Link href="/metadata-demo/lion">Dynamic (lion)</Link>
      </div>
      <div>
        <Link href="/metadata-demo/tiger">Dynamic (tiger)</Link>
      </div>
    </>
  );
};

export default Home;
