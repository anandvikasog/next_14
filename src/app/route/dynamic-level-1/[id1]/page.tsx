import Link from "next/link";

const Page = ({ params }: { params: { id1: number } }) => {
  const { id1 } = params;
  return (
    <div>
      <div>Dynamin level 1 of id {id1}</div>
      <div>
        <Link href={`/route/dynamic-level-1/${id1}/dynamic-level-2/1`}>
          See 1 of dynamic ({id1})
        </Link>
      </div>
      <div>
        <Link href={`/route/dynamic-level-1/${id1}/dynamic-level-2/2`}>
          See 2 of dynamic ({id1})
        </Link>
      </div>
    </div>
  );
};

export default Page;
