import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Gift, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function ReferralProgram() {
  const { toast } = useToast();
  const referralLink = "https://example.com/refer/USER123"; // This would normally come from your backend

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      toast({
        title: "Link copied!",
        description: "The referral link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
    }
  };

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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Share Invite Link</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Your Referral Link</DialogTitle>
                  <DialogDescription>
                    Share this link with friends to earn rewards when they join!
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 mt-4">
                  <Input value={referralLink} readOnly />
                  <Button onClick={copyToClipboard}>Copy</Button>
                </div>
              </DialogContent>
            </Dialog>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">View Network</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Your Referral Network</DialogTitle>
                  <DialogDescription>
                    Track your network's activity and rewards
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Active Referrals</h4>
                    <p className="text-sm text-muted-foreground">3 active members</p>
                    <p className="text-sm text-muted-foreground">1,500 points earned</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Recent Activity</h4>
                    <ul className="text-sm space-y-2">
                      <li>John D. made a purchase - +100 points</li>
                      <li>Sarah M. joined - +500 points</li>
                      <li>Mike R. made a purchase - +100 points</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">View Milestones</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Milestone Rewards</DialogTitle>
                  <DialogDescription>
                    Track your progress and upcoming rewards
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">5 Referrals</h4>
                      <span className="text-sm text-muted-foreground">3/5 completed</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Reward: 2,500 bonus points</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">10 Referrals</h4>
                      <span className="text-sm text-muted-foreground">3/10 completed</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Reward: 5,000 bonus points</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">20 Referrals</h4>
                      <span className="text-sm text-muted-foreground">3/20 completed</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Reward: 10,000 bonus points</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}