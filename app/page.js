"use client";

export default function Home() {
  return (
    <main className="relative flex w-full h-full min-h-screen ">
      <div className="absolute -top-4 -left-4 flex before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-[#ffacee] before:to-transparent before:blur-xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[340px]  after:bg-gradient-conic after:from--[#ffacee] after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:via-[#ffacee] before:dark:opacity-10 after:dark:from-[#ffacee] after:dark:via-[#ffacee] after:dark:opacity-80 before:lg:h-[360px] z-[-1]"></div>
      <div className="grid flex-1 w-full h-full grid-cols-2"></div>
    </main>
  );
}
