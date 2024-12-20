import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const members = [
  { name: "John Doe", points: 1250, tier: "Gold", rewards: 3 },
  { name: "Jane Smith", points: 850, tier: "Silver", rewards: 2 },
  { name: "Mike Johnson", points: 2100, tier: "Platinum", rewards: 5 },
  { name: "Sarah Williams", points: 450, tier: "Bronze", rewards: 1 },
];

export function MembersTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search members..." className="pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member Name</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Available Rewards</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.name}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.points}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{member.tier}</Badge>
                </TableCell>
                <TableCell>{member.rewards}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Issue Reward</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}