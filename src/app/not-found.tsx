export default function NotFoundPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/404.png')",
        }}
      />

      {/* Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="prose lg:prose-xl text-center text-white bg-black/70 p-6 rounded-xl border border-gray-700 shadow-2xl">
          <h1 className="text-5xl font-bold">404 – Sidan hittades inte</h1>
          <p className="mt-4 text-lg">
            Världen du letar efter finns inte längre. Kanske har AI:ns järnhand
            raderat den.
          </p>
        </div>
      </div>
    </div>
  );
}
