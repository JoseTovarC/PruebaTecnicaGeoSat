import Image from 'next/image';



export default function GeosatBanner() {
  return (
    <div
      className={` flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/Geosat_banner.png"
        width={250}
        height={170}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      
    </div>
  );
}
