import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png"
          alt="logo"
          width="300"
          height="100"
        />

        <HomeSearch />
      </div>
    </>
  );
}
