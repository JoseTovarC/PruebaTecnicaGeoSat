'use server';

import { deleteResourceForm } from './lib/actions';

export async function DeleteForm({
    id
  }: {
    id :number
  }){

    
        console.log("id: " + id);
    

    

    return (
        <form action={deleteResourceForm}>
                        <input
                              type="hidden"
                              id={"resource_"+id}
                              name="elementId"
                              value={id}
                          />
                        <button type="submit">Delete</button>
        </form>

    );


  }