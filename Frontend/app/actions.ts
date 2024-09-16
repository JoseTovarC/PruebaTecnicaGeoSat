'use server';

import { deleteResource } from '@/app/api/route';


export async function deleteResourceForm(formData: FormData) {
  let id = Number(formData.get('id'));
  console.log("id " + id);
  await deleteResource(id);
  // revalidatePath('/');
}
