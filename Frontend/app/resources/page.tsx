import { Tabs, TabsContent } from '@/components/ui/tabs';
import {PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { getResources } from '@/app/api/route';

import { ResourcesTable } from '../resources-table';

export default async function ResourcesPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { resources, newOffset, totalResources } = await getResources(
    search,
    Number(offset)
  );

  return (

    
    <Tabs defaultValue="all">
      <div className="flex items-center">
        
        <div className="ml-auto flex items-center gap-2">
          
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Resource
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ResourcesTable
        resources={resources}
        offset={10}
        totalResources = {3}
        />
      </TabsContent>
    </Tabs>
  );
}

