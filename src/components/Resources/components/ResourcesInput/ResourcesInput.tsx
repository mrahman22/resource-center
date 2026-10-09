export const ResourcesInput = ({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}) => {
  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search resources..."
        aria-label="Search resources"
        className="rounded border border-gray-300 p-2"
      />
    </div>
  );
};
