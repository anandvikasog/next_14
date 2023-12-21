export const metadata = {
  // title: "Metadata", // this is absolute title by default
  title: {
    absolute: "Metadata", // this will be set if not provided in children
    default: "Metadata", // looks same as "absolute", don't know the difference
    template: "%s | Metadata" // %s will be replaced by one which is provided in children
  },
  description: "This is metadata layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
