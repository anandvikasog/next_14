export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      {children}
      <p style={{border: "1px solid black"}}>Laout Content of nestead layout</p>
      </>
    );
  }
  