export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="overlay-dark" />
      <div className="z-10 w-full max-w-2xl rounded-2xl p-6 panel">
        <h1 className="text-2xl font-bold neon-title text-center">About</h1>
        <p className="mt-2 text-sm text-white/80 text-center">
          This is a demo Next.js app.
        </p>
      </div>
    </main>
  );
}


