import Link from "next/link";

const Page = ({ params }: { params: { id1: number; id2: number } }) => {
  const { id1, id2 } = params;
  return (
    <div>
      <div>
        Dynamin level 2 of {id2} of {id1}
      </div>
    </div>
  );
};

export default Page;
