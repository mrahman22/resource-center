import type { IResource } from "../../../../interfaces/resource";

const MAX_TAGS_DISPLAYED = 3;

export const ResourceCard = ({
  onViewDetails,
  resource,
  selectedResource,
}: {
  onViewDetails: () => void;
  resource: IResource;
  selectedResource: IResource | null;
}) => {
  const isSelected = selectedResource?.id === resource.id;

  return (
    <article className="h-full w-2/3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className="h-32 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">
          {resource.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {resource.tags.slice(0, MAX_TAGS_DISPLAYED).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-500">{resource.duration} min</p>
      </div>
      <button
        type="button"
        aria-expanded={isSelected}
        aria-label={`${isSelected ? "Hide" : "View"} ${resource.title}`}
        className="m-5 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={onViewDetails}
      >
        {isSelected ? "Hide details" : "View details"}
      </button>
      {isSelected && (
        <div className="m-4 bg-green-300 p-3 rounded-2xl">
          <h4 className="text-lg font-semibold text-gray-900">
            {resource.title}
          </h4>
          <p className="mt-2 text-sm text-gray-500">{resource.description}</p>
          <p className="mt-2 text-sm text-gray-500">{resource.date_uploaded}</p>
        </div>
      )}
    </article>
  );
};
