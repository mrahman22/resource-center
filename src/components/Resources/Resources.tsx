import type { IResource } from "../../interfaces/resource";

import { ResourceCard } from "./components/ResourceCard";

export const Resources = ({ resources }: { resources: IResource[] }) => {
  if (!resources.length) {
    return <div>No resources available.</div>;
  }

  const groupedResources = resources.reduce<Record<string, IResource[]>>(
    (groups, resource) => {
      const category = resource.category;

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(resource);

      return groups;
    },
    {},
  );

  const transformedResources = Object.entries(groupedResources);

  return (
    <div className="space-y-10">
      {transformedResources.map(([category, resources]) => {
        const headingId = `${category.toLowerCase()}-heading`;

        return (
          <section key={category} aria-labelledby={headingId} className="">
            <h2
              id={headingId}
              className="mb-5 text-2xl font-semibold text-gray-900"
            >
              {category}
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
