import GeosatBanner from '@/app/ui/geosat-banner';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default async function HomePage() {


  return (
    <main className="flex min-h-screen flex-col p-6">
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-lime-300 p-4 md:h-52 ">
        <GeosatBanner/> 
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-6 md:w-3/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>Bienvenido a la aplicación de guardado de información de malla vial</strong> <br/>Esto como presentación de la prueba técnica de GeoSat
          </p>
          
        </div>
        
      </div>
      </main>
  );
}

