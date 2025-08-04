import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "motion/react";

interface DisabledFeatureNoticeProps {
  title: string;
  message: string;
}

export function DisabledFeatureNotice({ title, message }: DisabledFeatureNoticeProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="text-center">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{message}</CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
}
