'use server';

import { deleteResource } from '@/app/api/route';


export async function deleteResourceForm(formData: FormData) {
  console.log("otro ");
  //let id = Number(formData.get('ElementId'));
  //console.log("otro " + id);
  //await deleteResource(id);
  // revalidatePath('/');
}
