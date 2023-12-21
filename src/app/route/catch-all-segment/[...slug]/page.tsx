import Link from "next/link";

const Page = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  return (
    <div>
      <div>Segments</div>
      <div>
        {slug.map(elem => <i key={elem}>/{elem}</i>)}
      </div>
    </div>
  );
};

export default Page;
