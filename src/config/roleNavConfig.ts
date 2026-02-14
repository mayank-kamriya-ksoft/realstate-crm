import {
  LayoutDashboard, Users, Home, CheckSquare, BarChart3,
  FileText, ShoppingBag, Truck, Link2, Settings, Package,
  Contact, Warehouse, DollarSign, HeadphonesIcon, UserCog,
  ClipboardList, ShoppingCart, TrendingUp, Award
} from "lucide-react";
import type { AppRole } from "@/hooks/useAuth";

export interface NavItem {
  title: string;
  url: string;
  icon: any;
}

const allNav: Record<string, NavItem> = {
  dashboard:   { title: "Dashboard",       url: "/dashboard",    icon: LayoutDashboard },
  leads:       { title: "Leads & Contacts", url: "/leads",       icon: Users },
  properties:  { title: "Properties",      url: "/properties",   icon: Home },
  tasks:       { title: "Tasks",           url: "/tasks",        icon: CheckSquare },
  analytics:   { title: "Analytics",       url: "/analytics",    icon: BarChart3 },
  contracts:   { title: "Contracts",       url: "/contracts",    icon: FileText },
  buyRequests: { title: "Buy Requests",    url: "/buy-requests", icon: ShoppingBag },
  invoices:    { title: "Invoices",        url: "/invoices",     icon: FileText },
  shipments:   { title: "Shipments",       url: "/shipments",    icon: Truck },
  referrals:   { title: "Referrals",       url: "/referrals",    icon: Link2 },
  settings:    { title: "Settings",        url: "/settings",     icon: Settings },
  products:    { title: "Products List",   url: "/products",     icon: Package },
  customers:   { title: "Customers",       url: "/customers",    icon: Contact },
  inventory:   { title: "Inventory",       url: "/inventory",    icon: Warehouse },
  commissions: { title: "Commissions",     url: "/commissions",  icon: DollarSign },
  support:     { title: "Support",         url: "/support",      icon: HeadphonesIcon },
  users:       { title: "User Management", url: "/users",        icon: UserCog },
  reports:     { title: "Reports",         url: "/reports",      icon: ClipboardList },
  programs:    { title: "Programs",        url: "/programs",     icon: Award },
  purchases:   { title: "Purchase Orders", url: "/purchases",    icon: ShoppingCart },
  sales:       { title: "Sales",           url: "/sales",        icon: TrendingUp },
};

const pick = (...keys: string[]) => keys.map(k => allNav[k]);

export const roleNavMap: Record<AppRole, NavItem[]> = {
  // Full access — manages everything
  admin: pick("dashboard", "users", "leads", "properties", "contracts", "invoices", "tasks", "analytics", "reports", "settings"),

  // Manages listings, deals, earns commissions
  broker: pick("dashboard", "properties", "leads", "contracts", "commissions", "tasks", "analytics"),

  // Buys/rents properties, views own invoices
  client: pick("dashboard", "properties", "buyRequests", "invoices", "tasks", "support"),

  // Sells properties, manages leads & customers (like reference image)
  sales_agent: pick("dashboard", "programs", "products", "customers", "purchases", "inventory", "sales", "leads", "reports"),

  // Supplies materials, manages shipments & inventory
  supplier: pick("dashboard", "products", "inventory", "purchases", "shipments", "invoices"),

  // Refers clients, tracks commissions
  affiliate: pick("dashboard", "referrals", "commissions", "analytics"),

  // Legacy roles
  agent: pick("dashboard", "leads", "properties", "tasks", "analytics"),
  user: pick("dashboard", "properties", "tasks", "support"),
};
