export const SortingResources = ({
  sortOption,
  onSortChange,
}: {
  sortOption: "category" | "newest" | "oldest";
  onSortChange: (value: "category" | "newest" | "oldest") => void;
}) => {
  return (
    <select
      value={sortOption}
      onChange={(event) =>
        onSortChange(event.target.value as "category" | "newest" | "oldest")
      }
      className="rounded border border-gray-300 p-2"
    >
      <option value="category">Category</option>
      <option value="newest">Newest first</option>
      <option value="oldest">Oldest first</option>
    </select>
  );
};
