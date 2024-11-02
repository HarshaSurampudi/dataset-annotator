import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface DatasetHeaderProps {
  datasetName: string;
  progress: number;
  onExport: () => void;
}

export function DatasetHeader({ datasetName, progress, onExport }: DatasetHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{datasetName}</h1>
          <p className="text-muted-foreground mt-1">
            DPO Dataset Annotation
          </p>
        </div>
        <Button onClick={onExport}>
          <Download className="mr-2 h-4 w-4" />
          Export Dataset
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Annotation Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}