import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Commissions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Commissions</h1>
      <p className="text-muted-foreground">Track your earnings and commission payouts.</p>
      <Card><CardHeader><CardTitle>Commission Summary</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No commissions recorded yet.</p></CardContent></Card>
    </div>
  );
}
