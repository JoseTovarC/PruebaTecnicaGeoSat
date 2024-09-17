'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function deleteResource(id: string) {
  
  await fetch(`http://localhost:9000/resource/delete/${id}`);
  revalidatePath('/resources');
}




export async function createInvoice(formData: FormData) {

  const rawFormData = {
    tipoMalla: formData.get('tipoMalla'),
    ancho: Number(formData.get('ancho')),
    largo: Number(formData.get('largo')),
    descripcion: formData.get('descripcion'),
    idSegmento: Number(formData.get('idSegmento')),
  };
  
  console.log(JSON.stringify(rawFormData));
  const response = await fetch('http://localhost:9000/resource/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Indica que estás enviando JSON
    },
    body: JSON.stringify(rawFormData),
  });


  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }
  revalidatePath('/resources');
  redirect('/resources');

}



