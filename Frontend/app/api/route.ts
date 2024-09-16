import { postcss } from "tailwindcss";


export async function getResources(search: string,
  offset: number) {
  let data = await fetch('http://localhost:9000/resources')
  let posts = await data.json()
  console.log(posts[2].kindResource)
  //return Response.json(posts)
  return { resources: posts, newOffset: null, totalResources: posts.count };

}

