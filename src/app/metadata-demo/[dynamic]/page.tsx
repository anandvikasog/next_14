import { Metadata } from "next";

type PropType = { params: { dynamic: string } };

export const generateMetadata = ({ params }: PropType): Metadata => {
  const { dynamic } = params;
  return {
    title: dynamic,
  };
};

const Home = ({ params }: PropType) => {
  const { dynamic } = params;
  return (
    <>
      <h1>Dynamic metadata page ({dynamic})</h1>
    </>
  );
};

export default Home;
