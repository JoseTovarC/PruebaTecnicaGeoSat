'use server';

import { revalidatePath } from 'next/cache';
import { deleteResource } from '@/app/api/route';


export async function deleteInvoice(id: string) {
  //console.log("otro " + id);
  await fetch(`http://localhost:9000/resource/delete/${id}`);
  //await deleteResource(id);
  revalidatePath('/resources');
}



