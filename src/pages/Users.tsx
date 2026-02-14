import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Users() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Management</h1>
      <p className="text-muted-foreground">Manage users, roles, and permissions.</p>
      <Card><CardHeader><CardTitle>All Users</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">No users found.</p></CardContent></Card>
    </div>
  );
}
