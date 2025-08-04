import { getSessionFromCookie } from "@/utils/auth";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CallCard } from "@/components/CallCard";

export default async function Page() {
  const session = await getSessionFromCookie();

  const fullName = [session?.user?.firstName, session?.user?.lastName]
    .filter(Boolean)
    .join(" ");

  const displayName =
    session?.user?.nickname || fullName || session?.user?.email || "there";

  const calls = [
    { roomId: "abc123", duration: "12 min" },
    { roomId: "def456", duration: "5 min" },
  ];

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold">Hi, {displayName}!</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Start new call</CardTitle>
            <CardDescription>Launch a new video call</CardDescription>
          </CardHeader>
          <CardContent>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button disabled>Start a call</Button>
              </TooltipTrigger>
              <TooltipContent>Under development</TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Latest calls</h3>
          {calls.map((call) => (
            <CallCard key={call.roomId} roomId={call.roomId} duration={call.duration} />
          ))}
        </div>
      </div>
    </div>
  );
}
