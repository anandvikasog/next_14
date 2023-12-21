import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div>
        <Link href="/route/dynamic-level-1/1">Dynamic 1</Link>
      </div>
      <div>
        <Link href="/route/dynamic-level-1/2">Dynamic 2</Link>
      </div>
    </div>
  );
};

export default Page;
