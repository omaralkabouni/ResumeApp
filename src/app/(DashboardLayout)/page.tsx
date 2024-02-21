"use client";
import { Grid, Box, Button } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import ProfitExpenses from "@/app/(DashboardLayout)/components/dashboard/ProfitExpenses";
import TrafficDistribution from "@/app/(DashboardLayout)/components/dashboard/TrafficDistribution";
import UpcomingSchedules from "@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules";
import TopPayingClients from "@/app/(DashboardLayout)/components/dashboard/TopPayingClients";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import ProductSales from "@/app/(DashboardLayout)/components/dashboard/ProductSales";
import CustomTextField from "./components/forms/theme-elements/CustomTextField";
import DashboardCard from "./components/shared/DashboardCard";
import Botton from "./components/button/button";

const Dashboard = () => {
  const name = "Omar";
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <h1>Hello {name} 👋</h1>

      <Botton />
    </PageContainer>
  );
};

export default Dashboard;
