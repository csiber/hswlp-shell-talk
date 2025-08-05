import DisabledFeatureNotice from "@/components/DisabledFeatureNotice";

export default function RoomPage() {
  return (
    <DisabledFeatureNotice
      title="This feature is not available yet"
      message="Talk's video call system is under development. Please check back soon!"
    />
  );
}
