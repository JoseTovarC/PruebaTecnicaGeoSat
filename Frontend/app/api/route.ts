import { revalidatePath } from 'next/cache';


export async function getResources(search: string,
  offset: number) {
  let data = await fetch('http://localhost:9000/resources', { next: { revalidate: 1 } })
  let posts = await data.json();
  revalidatePath('/resources');
  //return Response.json(posts)
  return { resources: posts, newOffset: null, totalResources: posts.count };

}


export async function deleteResource(id: number) {
  //console.log("llegue a eliminacion");
  let response = await fetch('http://localhost:9000/resource/delete/${id}', 
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }})
  revalidatePath('/resources');
  return await response.json();

}

