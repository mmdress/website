import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/logo.svg" alt="MMDress" width={100} height={100} className="mb-4" />
      <h1 className="text-4xl font-bold">MMDress - Arquitetura e Interiores</h1>
    
      <p className="text-md text-gray-500 mt-4">
        🚧 Site em construção <span className="animate-pulse">...</span> 🚧
      </p>
    </div>
  );
}
