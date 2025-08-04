import { getSessionFromCookie } from "@/utils/auth";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CallCard } from "@/components/CallCard";

export default async function Page() {
  const session = await getSessionFromCookie();

  const fullName = [session?.user?.firstName, session?.user?.lastName]
    .filter(Boolean)
    .join(" ");

  const displayName =
    session?.user?.nickname || fullName || session?.user?.email || "there";

  const mockCalls = [
    {
      roomId: "abc123",
      duration: "12 minutes",
      date: "Aug 3, 2025, 21:00",
    },
    {
      roomId: "def456",
      duration: "5 minutes",
      date: "Aug 2, 2025, 18:30",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold">Welcome back, {displayName}!</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Start a new call</CardTitle>
          </CardHeader>
          <CardContent>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button disabled>Start now</Button>
              </TooltipTrigger>
              <TooltipContent>Feature under development</TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your recent calls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockCalls.length ? (
              mockCalls.map((call) => (
                <CallCard
                  key={call.roomId}
                  roomId={call.roomId}
                  duration={call.duration}
                  date={call.date}
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                You haven&apos;t made any calls yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
