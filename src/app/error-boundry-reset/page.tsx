"use client";

const random = (count: number) => {
  return Math.floor(Math.random() * count);
};
const Page = () => {
  const randomNumber = random(2);
  console.log(randomNumber);

  if (randomNumber === 1) {
    // throw new Error("Custom errom");
  }
  let data;
  return <div>Hello Error page</div>;
};

export default Page;
