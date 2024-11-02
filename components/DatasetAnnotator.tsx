'use client';

import { useState } from 'react';
import { Dataset } from '@/types';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnnotationCard } from '@/components/AnnotationCard';
import { DatasetHeader } from '@/components/DatasetHeader';
import { DatasetUpload } from '@/components/DatasetUpload';

export function DatasetAnnotator() {
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!dataset) {
    return <DatasetUpload onDatasetLoad={setDataset} />;
  }

  const progress = (dataset.entries.filter(entry => entry.chosen).length / dataset.entries.length) * 100;

  const handleChoice = (choice: 'a' | 'b') => {
    const updatedDataset = { ...dataset };
    updatedDataset.entries[currentIndex].chosen = choice;
    setDataset(updatedDataset);
  };

  const exportDataset = () => {
    const exportData = {
      ...dataset,
      metadata: {
        exported_at: new Date().toISOString(),
        total_entries: dataset.entries.length,
        annotated_entries: dataset.entries.filter(entry => entry.chosen).length,
      },
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.name}-annotated.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <DatasetHeader 
        datasetName={dataset.name}
        progress={progress}
        onExport={exportDataset}
      />

      <div className="mt-8">
        <AnnotationCard
          entry={dataset.entries[currentIndex]}
          onChoice={handleChoice}
          className="mb-6"
        />

        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {dataset.entries.length}
          </span>

          <Button
            onClick={() => setCurrentIndex(i => Math.min(dataset.entries.length - 1, i + 1))}
            disabled={currentIndex === dataset.entries.length - 1}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}