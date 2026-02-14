import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Programs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Programs</h1>
      <p className="text-muted-foreground">View and manage sales programs and campaigns.</p>
      <Card><CardHeader><CardTitle>Active Programs</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No active programs.</p></CardContent></Card>
    </div>
  );
}
