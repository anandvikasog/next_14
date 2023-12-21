import { notFound } from "next/navigation";

const Home = () => {
  if (true) {
    notFound();
  }
  return (
    <>
      <h1>404 programatically</h1>
    </>
  );
};

export default Home;
