'use server';

import { deleteResourceById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteResource(formData: FormData) {
  // let id = Number(formData.get('id'));
  // await deleteResourceById(id);
  // revalidatePath('/');
}
