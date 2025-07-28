// app/layout.js
export const metadata = {
  title: 'Emirates Flight Dashboard',
  description: 'Live flight information for Emirates Airlines',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
