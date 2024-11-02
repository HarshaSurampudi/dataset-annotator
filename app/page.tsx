import { DatasetAnnotator } from '@/components/DatasetAnnotator';
import { DatasetUpload } from '@/components/DatasetUpload';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <DatasetAnnotator />
    </main>
  );
}