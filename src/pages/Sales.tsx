import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sales() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sales</h1>
      <p className="text-muted-foreground">Track sales pipeline and closed deals.</p>
      <Card><CardHeader><CardTitle>Sales Overview</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No sales recorded yet.</p></CardContent></Card>
    </div>
  );
}
