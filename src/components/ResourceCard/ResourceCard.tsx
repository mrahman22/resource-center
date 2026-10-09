import type { IResourceCard } from "./resource-card.interfaces";

export const ResourceCard = ({ resource }: { resource: IResourceCard }) => {
  return (
    <div>
      <h2>{resource.title}</h2>
      <img src={resource.thumbnail} alt={resource.title} />
      <div>
        {resource.tags.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{resource.duration} min</p>
    </div>
  );
};
