import type { IResource } from "../../../interfaces/resource";

export type SortOption = "category" | "newest" | "oldest";

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

export const sortResources = (
  resources: IResource[],
  sortOption: SortOption,
) => {
  const sortedResources = [...resources];

  if (sortOption === "newest") {
    return sortedResources.sort(
      (a, b) =>
        new Date(b.date_uploaded).getTime() -
        new Date(a.date_uploaded).getTime(),
    );
  }

  if (sortOption === "oldest") {
    return sortedResources.sort(
      (a, b) =>
        new Date(a.date_uploaded).getTime() -
        new Date(b.date_uploaded).getTime(),
    );
  }

  return sortedResources.sort((a, b) => a.category.localeCompare(b.category));
};
