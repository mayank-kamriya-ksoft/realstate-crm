import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Purchases() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Purchase Orders</h1>
      <p className="text-muted-foreground">Manage purchase orders and supplier transactions.</p>
      <Card><CardHeader><CardTitle>Purchase Orders</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No purchase orders yet.</p></CardContent></Card>
    </div>
  );
}
