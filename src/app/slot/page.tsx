import Link from "next/link";

const Page = () => {
  return (
    <div>
      Parallel-routes / slots <Link href="/slot/child">Child</Link>
    </div>
  );
};

export default Page;
