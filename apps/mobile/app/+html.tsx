export default function Html({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>My Expo Web App</title>
        </head>
        <body>{children}</body>
      </html>
    );
  }
  