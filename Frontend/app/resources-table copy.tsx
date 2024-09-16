'use client';

import { useState, useEffect } from "react";
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
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Resource {
  id: number;
  kindResource: string;
  area: number;
}

export function ResourcesTable() {

    
    const [resources, setResource] = useState<Resource[] | null>([]);

    const getResources = async () => {

      try{

        const response = await fetch('http://localhost:9000/resources',
          {
            method:"GET",
            headers: {
              'Content-Type': 'application/json',
              'X-Custom-Header': 'customValue'
            }
          }
        );
        console.log(response);

        if (response){
          const { resources } = await response.json();
          if (resources) setResource(resources);
        }

      }catch(error){
        console.log(error);
      }



    };

    useEffect(()=>{
      getResources();
    }, []);
 



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
                      <form action={deleteProduct}>
                        <button type="submit">Delete</button>
                      </form>
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
