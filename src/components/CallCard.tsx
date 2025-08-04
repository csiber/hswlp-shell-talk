import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CallCardProps {
  roomId: string;
  duration: string;
}

export function CallCard({ roomId, duration }: CallCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Room ID: {roomId}</CardTitle>
        <CardDescription>Duration: {duration}</CardDescription>
      </CardHeader>
    </Card>
  );
}
