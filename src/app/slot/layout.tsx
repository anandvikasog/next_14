export const metadata = {
  title: "Slots",
};

export default function Layout({
  children,
  section1,
  section2,
  section3,
}: {
  children: React.ReactNode;
  section1: React.ReactNode;
  section2: React.ReactNode;
  section3: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {section1}
        {children}
        {section2}
      </div>
      <div>{section3}</div>
    </div>
  );
}
