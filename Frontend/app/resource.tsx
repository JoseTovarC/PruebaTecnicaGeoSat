import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
//import { SelectResource } from '@/lib/db';
import { deleteResource } from './actions';

/*export function Resource({ resource }: { resource: SelectResource }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Resource image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={resource.imageUrl}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{resource.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {resource.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`$${resource.price}`}</TableCell>
      <TableCell className="hidden md:table-cell">{resource.stock}</TableCell>
      <TableCell className="hidden md:table-cell">
        {resource.availableAt.toLocaleDateString("en-US")}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deleteResource}>
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}*/
