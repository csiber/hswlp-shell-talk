interface CallCardProps {
  roomId: string;
  duration: string;
  date: string;
}

export function CallCard({ roomId, duration, date }: CallCardProps) {
  return (
    <div className="rounded-xl border p-4 bg-muted/30">
      <div className="font-semibold">Room ID: {roomId}</div>
      <div className="text-sm text-muted-foreground">Duration: {duration}</div>
      <div className="text-sm text-muted-foreground">Date: {date}</div>
    </div>
  );
}
