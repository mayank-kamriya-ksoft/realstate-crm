import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Inventory() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Inventory</h1>
      <p className="text-muted-foreground">Track stock levels and manage inventory.</p>
      <Card><CardHeader><CardTitle>Inventory Overview</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No inventory data available.</p></CardContent></Card>
    </div>
  );
}
