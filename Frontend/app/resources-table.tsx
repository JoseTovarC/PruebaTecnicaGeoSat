'use client';

import {
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DeleteInvoice } from './delete-form'
import { useRouter } from 'next/navigation';



interface Resource {
  id: number;
  tipoMalla: string;
  ancho: number;
  largo: number;
  descripcion: string;
  idSegmento: number;
}



export function ResourcesTable({
  resources,
  offset,
  totalResources
}: {
  resources: Resource[];
  offset: number;
  totalResources: number;
}) {
 

  let router = useRouter();
  let resourcesPerPage = 20;
  function prevPage() {
    router.back();
  }
  function nextPage() {
    router.push(`/?offset=${offset}`, { scroll: false });
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Resources</CardTitle>
        <CardDescription>
          Manage your resources and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              
              <TableHead>¿Calzada o bordillo?</TableHead>
              <TableHead>Ancho</TableHead>
              <TableHead>Largo</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Segmento</TableHead>
              

              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
           
            {resources.map((resource) => (
              <TableRow key={resource.id}>
              <TableCell>{resource.tipoMalla}</TableCell>
              <TableCell>{resource.ancho}</TableCell>
              <TableCell>{resource.largo}</TableCell>
              <TableCell>{resource.descripcion}</TableCell>
              <TableCell>{resource.idSegmento}</TableCell>

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
                      
                        <DeleteInvoice id={""+resource.id+""}/>

                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
                

          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
            <div className="text-xs text-muted-foreground">
              Showing{' '}
              <strong>
                {Math.min(offset - resourcesPerPage, totalResources) + 1}-{offset}
              </strong>{' '}
              of <strong>{totalResources}</strong> resources
            </div>
            <div className="flex">
              <Button
                formAction={prevPage}
                variant="ghost"
                size="sm"
                type="submit"
                disabled={offset === resourcesPerPage}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Prev
              </Button>
              <Button
                formAction={nextPage}
                variant="ghost"
                size="sm"
                type="submit"
                disabled={offset + resourcesPerPage > totalResources}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>         
            </div>
          </form>
      </CardFooter>
    </Card>
  );
}


