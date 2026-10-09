import type { IResource } from "../../../interfaces/resource";

export const groupResourcesByCategory = (resources: IResource[]) => {
  return resources.reduce<Record<string, IResource[]>>((groups, resource) => {
    const category = resource.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(resource);

    return groups;
  }, {});
};
