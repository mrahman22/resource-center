import type { IResource } from "../../interfaces/resource";

import { ResourceCard } from "./components/ResourceCard";

export const Resources = ({ resources }: { resources: IResource[] }) => {
  if (!resources.length) {
    return <div>No resources available.</div>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] justify-items-center gap-6 pb-12">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};
