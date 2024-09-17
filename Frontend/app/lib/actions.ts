'use server';

import { revalidatePath } from 'next/cache';
import { deleteResource } from '@/app/api/route';


export async function deleteInvoice(id: string) {
  
  await fetch(`http://localhost:9000/resource/delete/${id}`);
  revalidatePath('/resources');
}



