'use client';

import { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dataset, DPOEntry } from '@/types';

interface DatasetUploadProps {
  onDatasetLoad: (dataset: Dataset) => void;
}

export function DatasetUpload({ onDatasetLoad }: DatasetUploadProps) {
  const [error, setError] = useState<string>('');

  const validateDataset = (data: any): data is Dataset => {
    if (!data.name || !Array.isArray(data.entries)) {
      return false;
    }

    return data.entries.every((entry: any) => 
      entry.id && 
      typeof entry.prompt === 'string' && 
      typeof entry.response_a === 'string' && 
      typeof entry.response_b === 'string'
    );
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError('');

    if (!file) return;

    if (!file.name.endsWith('.json')) {
      setError('Please upload a JSON file');
      return;
    }

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      if (!validateDataset(data)) {
        setError('Invalid dataset format. Please check the file structure.');
        return;
      }

      onDatasetLoad(data);
    } catch (err) {
      setError('Failed to parse JSON file. Please check the file format.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-2xl font-bold">Upload Dataset</h2>
        <p className="text-muted-foreground">
          Upload a JSON file containing your DPO dataset
        </p>
      </div>

      <div className="w-full max-w-xs">
        <Button
          variant="outline"
          className="w-full h-24 flex flex-col items-center justify-center space-y-2"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <Upload className="h-6 w-6" />
          <span>Choose JSON file</span>
        </Button>
        <input
          id="file-upload"
          type="file"
          accept=".json"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {error && (
        <Alert variant="destructive" className="max-w-xs">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}