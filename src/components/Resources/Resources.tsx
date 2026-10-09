import type { IResource } from "../../interfaces/resource";

import { ResourceCard } from "./components/ResourceCard";
import { groupResourcesByCategory, filterResources } from "./helpers/resources";
import { useState } from "react";

export const Resources = ({ resources }: { resources: IResource[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  if (!resources.length) {
    return <div>No resources available.</div>;
  }

  const filteredResources = filterResources(resources, searchTerm);

  const groupedResources = groupResourcesByCategory(filteredResources);

  const transformedResources = Object.entries(groupedResources);

  return (
    <div className="space-y-10">
      <input
        type="text"
        role="searchbox"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search resources..."
        className="mb-5 p-2 border border-gray-300 rounded"
      />
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
