'use client';

import { DPOEntry } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface AnnotationCardProps {
  entry: DPOEntry;
  onChoice: (choice: 'a' | 'b') => void;
  className?: string;
}

export function AnnotationCard({ entry, onChoice, className }: AnnotationCardProps) {
  return (
    <div className={cn('space-y-6', className)}>
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Prompt</h3>
        <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
          {entry.prompt}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={cn(
          'p-6 transition-all',
          entry.chosen === 'a' && 'ring-2 ring-primary'
        )}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">Response A</h3>
            <Button
              variant={entry.chosen === 'a' ? 'default' : 'outline'}
              onClick={() => onChoice('a')}
              className="ml-4"
            >
              {entry.chosen === 'a' && <Check className="mr-2 h-4 w-4" />}
              {entry.chosen === 'a' ? 'Selected' : 'Select'}
            </Button>
          </div>
          <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
            {entry.response_a}
          </div>
        </Card>

        <Card className={cn(
          'p-6 transition-all',
          entry.chosen === 'b' && 'ring-2 ring-primary'
        )}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">Response B</h3>
            <Button
              variant={entry.chosen === 'b' ? 'default' : 'outline'}
              onClick={() => onChoice('b')}
              className="ml-4"
            >
              {entry.chosen === 'b' && <Check className="mr-2 h-4 w-4" />}
              {entry.chosen === 'b' ? 'Selected' : 'Select'}
            </Button>
          </div>
          <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
            {entry.response_b}
          </div>
        </Card>
      </div>
    </div>
  );
}