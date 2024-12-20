import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/MetricCard";
import { MembersTable } from "@/components/MembersTable";
import { Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Loyalty Dashboard</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Reward
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <MetricCard
          title="Total Members"
          value="1,234"
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Active Points"
          value="45,678"
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Rewards Issued"
          value="256"
          trend={{ value: 4, isPositive: false }}
        />
        <MetricCard
          title="Redemption Rate"
          value="24%"
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Members</h2>
        <MembersTable />
      </div>
    </div>
  );
};

export default Index;