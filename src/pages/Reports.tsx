import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="text-muted-foreground">Generate and view business reports.</p>
      <Card><CardHeader><CardTitle>Report Center</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No reports generated yet.</p></CardContent></Card>
    </div>
  );
}
