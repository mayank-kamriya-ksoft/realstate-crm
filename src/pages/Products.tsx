import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Products() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Products List</h1>
      <p className="text-muted-foreground">Manage your product catalog and inventory items.</p>
      <Card><CardHeader><CardTitle>Products</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No products added yet.</p></CardContent></Card>
    </div>
  );
}
