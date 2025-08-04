interface Props {
  title: string;
  message: string;
}

export default function DisabledFeatureNotice({ title, message }: Props) {
  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="text-center bg-muted border rounded-xl p-6 max-w-md w-full animate-fade-in">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
