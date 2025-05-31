import '../styles/globals.css';
import Navbar from '../components/Nav/Navbar'


export const metadata = {
  title: 'Joseph Owang Portfolio',
  description: 'App using the App Router inside src',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {children}
        </body>
    </html>
  );
}
