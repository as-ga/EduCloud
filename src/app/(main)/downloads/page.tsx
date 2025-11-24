import { DownloadsTable } from "@/components/downloads/downloads-table";

export default function DownloadsPage() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-2xl font-bold font-headline text-foreground mb-6">Course Resources</h1>
      <DownloadsTable />
    </div>
  );
}
