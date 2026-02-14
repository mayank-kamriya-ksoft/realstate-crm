import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Properties from "./pages/Properties";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Contracts from "./pages/Contracts";
import BuyRequests from "./pages/BuyRequests";
import Invoices from "./pages/Invoices";
import Shipments from "./pages/Shipments";
import Referrals from "./pages/Referrals";
import SettingsPage from "./pages/Settings";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Commissions from "./pages/Commissions";
import Support from "./pages/Support";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Programs from "./pages/Programs";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/buy-requests" element={<BuyRequests />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/support" element={<Support />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/sales" element={<Sales />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
