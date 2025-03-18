import "./globals.css";
import crownLogo from '../images/crown-logo.png';

export const metadata = {
  title: 'BlackCard',
  description: 'Your premium destination for exclusive experiences',
  icons: {
    icon: crownLogo.src,
    shortcut: crownLogo.src,
    apple: crownLogo.src,
    other: {
      rel: 'apple-touch-icon',
      url: crownLogo.src,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={crownLogo.src} />
        <link rel="shortcut icon" href={crownLogo.src} />
        <link rel="apple-touch-icon" href={crownLogo.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
