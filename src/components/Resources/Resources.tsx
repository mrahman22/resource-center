import type { IResource } from "../../interfaces/resource";

import { ResourceCard } from "./components/ResourceCard";
import {
  groupResourcesByCategory,
  filterResources,
  sortResources,
  type SortOption,
} from "./helpers/resources";
import { useState } from "react";

export const Resources = ({ resources }: { resources: IResource[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("category");
  const [selectedResource, setSelectedResource] = useState<IResource | null>(
    null,
  );

  if (!resources.length) {
    return <div>No resources available.</div>;
  }

  const filteredResources = filterResources(resources, searchTerm);
  const sortedResources = sortResources(filteredResources, sortOption);

  const groupedResources = groupResourcesByCategory(sortedResources);

  const transformedResources = Object.entries(groupedResources);

  return (
    <div className="space-y-10 pb-4">
      <div className="flex items-center space-x-4 mb-5">
        <input
          type="text"
          role="searchbox"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search resources..."
          className="p-2 border border-gray-300 rounded"
        />
        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value as SortOption)}
          className="rounded border border-gray-300 p-2"
        >
          <option value="category">Category</option>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
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
                <ResourceCard
                  key={resource.id}
                  onViewDetails={() =>
                    setSelectedResource((current) =>
                      current?.id === resource.id ? null : resource,
                    )
                  }
                  resource={resource}
                  selectedResource={selectedResource}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
