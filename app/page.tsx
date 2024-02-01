import dynamic from 'next/dynamic'

const Videocall = dynamic(() => import('@/components/videocall'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-1 h-screen">
      <Videocall />
    </main>
  );
}
