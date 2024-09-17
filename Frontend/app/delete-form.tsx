import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteInvoice } from '@/app/lib/actions';

export function DeleteInvoice({ id }: { id: string }) {
  const handleDelete = async () => {
    await deleteInvoice(id);  // Aquí llamas a tu acción para eliminar la factura.
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


  