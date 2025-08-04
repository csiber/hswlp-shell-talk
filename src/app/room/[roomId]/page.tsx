import { DisabledFeatureNotice } from "@/components/DisabledFeatureNotice";

export default function RoomPage() {
  return (
    <DisabledFeatureNotice
      title="The video call feature is under development"
      message="The HSWLP:Talk backend will launch soon! In the meantime, you can explore the interface and view your past calls."
    />
  );
}
