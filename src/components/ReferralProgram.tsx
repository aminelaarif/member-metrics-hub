import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Gift, Users } from "lucide-react";

export function ReferralProgram() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Referral Program</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg">Invite Friends</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center p-4">
              <Share2 className="h-12 w-12 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Get 500 points for each friend who joins
            </p>
            <Button className="w-full">Share Invite Link</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg">Group Rewards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center p-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Earn bonus points when friends make purchases
            </p>
            <Button variant="outline" className="w-full">View Network</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg">Milestone Bonuses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center p-4">
              <Gift className="h-12 w-12 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Special rewards at 5, 10, and 20 referrals
            </p>
            <Button variant="outline" className="w-full">View Milestones</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}