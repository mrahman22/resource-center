import type { IResource } from "../../../../interfaces/resource";

export const ResourceCard = ({ resource }: { resource: IResource }) => {
  return (
    <article className="h-full w-2/3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className="h-32 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900">
          {resource.title}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
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
    </article>
  );
};
