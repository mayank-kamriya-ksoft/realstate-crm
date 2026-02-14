import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Customers() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Customers</h1>
      <p className="text-muted-foreground">View and manage your customer relationships.</p>
      <Card><CardHeader><CardTitle>Customer List</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No customers yet.</p></CardContent></Card>
    </div>
  );
}
