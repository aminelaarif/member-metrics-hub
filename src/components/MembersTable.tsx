import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialMembers = [
  { name: "John Doe", points: 1250, tier: "Gold", rewards: 3 },
  { name: "Jane Smith", points: 850, tier: "Silver", rewards: 2 },
  { name: "Mike Johnson", points: 2100, tier: "Platinum", rewards: 5 },
  { name: "Sarah Williams", points: 450, tier: "Bronze", rewards: 1 },
];

export function MembersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("all");
  const [pointsSort, setPointsSort] = useState("default");

  const filteredMembers = initialMembers
    .filter((member) => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (tierFilter === "all" ? true : member.tier === tierFilter)
    )
    .sort((a, b) => {
      if (pointsSort === "asc") return a.points - b.points;
      if (pointsSort === "desc") return b.points - a.points;
      return 0;
    });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search members..." 
            className="pl-8" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={tierFilter} onValueChange={setTierFilter}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Filter by Tier" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Tiers</SelectItem>
              <SelectItem value="Bronze">Bronze</SelectItem>
              <SelectItem value="Silver">Silver</SelectItem>
              <SelectItem value="Gold">Gold</SelectItem>
              <SelectItem value="Platinum">Platinum</SelectItem>
            </SelectContent>
          </Select>
          <Select value={pointsSort} onValueChange={setPointsSort}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Sort by Points" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="default">Default Order</SelectItem>
              <SelectItem value="asc">Points: Low to High</SelectItem>
              <SelectItem value="desc">Points: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
            {filteredMembers.map((member) => (
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