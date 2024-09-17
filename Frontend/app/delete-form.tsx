import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteResource } from '@/app/lib/actions';

export function DeleteForm({ id }: { id: string }) {
  const handleDelete = async () => {
    await deleteResource(id); 
  };


  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-4" />
    </button>
  );
}


  