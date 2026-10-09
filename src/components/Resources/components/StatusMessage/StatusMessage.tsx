export const StatusMessage = ({ message }: { message: string }) => {
  return (
    <p role="status" className="text-gray-600">
      {message}
    </p>
  );
};
