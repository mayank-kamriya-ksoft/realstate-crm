import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Support() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Support</h1>
      <p className="text-muted-foreground">Get help and submit support tickets.</p>
      <Card><CardHeader><CardTitle>Support Tickets</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No open tickets.</p></CardContent></Card>
    </div>
  );
}
