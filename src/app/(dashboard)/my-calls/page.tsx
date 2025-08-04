import { CallCard } from "@/components/CallCard";

const mockCalls = [
  {
    roomId: "abc123",
    duration: "12 minutes",
    date: "Aug 3, 2025, 21:00",
  },
  {
    roomId: "abc123",
    duration: "12 minutes",
    date: "Aug 3, 2025, 21:00",
  },
  {
    roomId: "abc123",
    duration: "12 minutes",
    date: "Aug 3, 2025, 21:00",
  },
  {
    roomId: "abc123",
    duration: "12 minutes",
    date: "Aug 3, 2025, 21:00",
  },
  {
    roomId: "abc123",
    duration: "12 minutes",
    date: "Aug 3, 2025, 21:00",
  },
];

export default function Page() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Call history</h2>
      <div className="space-y-4">
        {mockCalls.map((call, idx) => (
          <CallCard
            key={idx}
            roomId={call.roomId}
            duration={call.duration}
            date={call.date}
          />
        ))}
      </div>
    </div>
  );
}
