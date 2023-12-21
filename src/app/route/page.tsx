import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div>
        <Link href="/route/route1">Route 1</Link>
      </div>
      <div>
        <Link href="/route/route2">Route 2</Link>
      </div>
      <div>
        <Link href="/route/dynamic-level-1">Dynamic</Link>
      </div>
      <div>
        <Link href="/route/catch-all-segment">Catch all segments</Link>
      </div>
    </div>
  );
};

export default Page;
