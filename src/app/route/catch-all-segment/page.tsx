import Link from "next/link";

const Page = () => {
  return (
    <div>
        <div>Go to any one route</div>
      <div>
        <Link href="/route/catch-all-segment/animal/wild/lion">animal/wild/lion</Link>
      </div>
      <div>
        <Link href="/route/catch-all-segment/animal/domestic/cow">animal/domestic/cow</Link>
      </div>
      <div>
        <Link href="/route/catch-all-segment/plant/flower/rose">plant/flower/rose</Link>
      </div>
      <div>
        <Link href="/route/catch-all-segment/human/female/women">human/female/women</Link>
      </div>
    </div>
  );
};

export default Page;
