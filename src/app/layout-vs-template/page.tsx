import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>Layout v/s Template</h1>
      <div>
        <Link href="/layout-vs-template/see-layout/page-1">Layout</Link>
      </div>
      <div>
        <Link href="/layout-vs-template/see-template/page-1">Template</Link>
      </div>
    </>
  );
};

export default Page;
