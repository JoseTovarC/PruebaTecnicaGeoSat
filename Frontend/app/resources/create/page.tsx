import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CalculatorIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice} from '@/app/lib/actions';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {

    
    return (

        <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>Crear recurso de via</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          
                    <form action={createInvoice}>
                        <div className="rounded-md bg-gray-50 p-4 md:p-6">

                            {/* Tipo de malla vial */}
                        <fieldset>
                            <legend className="mb-2 block text-sm font-medium">
                            Tipo de malla vial
                            </legend>
                            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                <input
                                    id="bordillo"
                                    name="tipoMalla"
                                    type="radio"
                                    value="Bordillo"
                                    className="text-white-600 h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 focus:ring-2"
                                />
                                <label
                                    htmlFor="bordillo"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Bordillo 
                                </label>
                                </div>
                                <div className="flex items-center">
                                <input
                                    id="calzada"
                                    name="tipoMalla"
                                    type="radio"
                                    value="Calzada"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="calzada"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Calzada 
                                </label>
                                </div>
                            </div>
                            </div>
                        </fieldset>

                        
                
                        {/* Ancho */}
                        <div className="mb-4 mt-4">
                            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Ancho
                            </label>
                            <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                id="ancho"
                                name="ancho"
                                type="number"
                                step="0.001"
                                placeholder="Ingresa el ancho de la malla vial"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="amount-error"
                                />
                                <CalculatorIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                            </div>
                        </div>


                        {/* Largo */}
                        <div className="mb-4">
                            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Largo
                            </label>
                            <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                id="largo"
                                name="largo"
                                type="number"
                                step="0.001"
                                placeholder="Ingresa el largo de la malla vial"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="amount-error"
                                />
                                <CalculatorIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                            </div>
                        </div>


                        {/* Descripcion */}
                        <div className="mb-4">
                            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Descripción
                            </label>
                            <div className="relative mt-2 rounded-md">
                            <div className="relative">
                               
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    rows="4"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    placeholder="Enter a description here..."
                                />
                                <ChatBubbleBottomCenterTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                            </div>
                        </div>


                        {/* Segmento */}
                        <div className="mb-4">
                        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                            Elige el segmento 
                            <br/>(O creación de segmento no habilitado)
                        </label>
                        <div className="relative">
                            <select
                            id="idSegmento"
                            name="idSegmento"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby="customer-error"
                            >
                            <option value="" disabled> Elige segmento </option>
                            <option key="1" value="1"> 1 - San Rafael 230</option>
                            <option key="2" value="2"> 2 - El Triun 487</option>
                            <option key="3" value="3"> 3 - Babilonia 745</option>
                           
                            </select>
                            <MapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>

                        
                        </div>
                
                        
                
                        
                        </div>
                        <div className="mt-6 flex justify-end gap-4">
                        <Link
                            href="/resources"
                            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            Cancelar
                        </Link>
                        <Button type="submit">Crear recurso</Button>
                        </div>
                    </form>
        </div>
        
      </div> 

      
    );
}