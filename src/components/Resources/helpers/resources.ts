import type { IResource } from "../../../interfaces/resource";

export const filterResources = (resources: IResource[], searchTerm: string) => {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  return resources.filter((resource) => {
    const matchesTitle = resource.title
      .toLowerCase()
      .includes(normalizedSearchTerm);

    const matchesTag = resource.tags.some((tag) =>
      tag.toLowerCase().includes(normalizedSearchTerm),
    );

    return matchesTitle || matchesTag;
  });
};

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
