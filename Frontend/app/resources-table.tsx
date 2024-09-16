'use server';

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
import { DeleteForm } from './delete-form'



interface Resource {
  id: number;
  kindResource: string;
  area: number;
}

export async function ResourcesTable({
  resources,
  offset,
  totalResources
}: {
  resources: Resource[];
  offset: number;
  totalResources: number;
}) {
 

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
              
              <TableHead>Tipo de recurso</TableHead>
              <TableHead>Area</TableHead>
              

              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
           
            {resources.map((resource) => (
              <TableRow key={resource.id}>
              <TableCell>{resource.kindResource}</TableCell>
              <TableCell>{resource.area}</TableCell>
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
                      
                        <DeleteForm id={resource.id}/>

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
        
      </CardFooter>
    </Card>
  );
}


