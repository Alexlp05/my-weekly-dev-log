import React from "react";

type ImageCardProps = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  className?: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt = "", title, description, className = "" }) => {
  return (
    <article className={`bg-card rounded-lg overflow-hidden shadow-card ${className}`}>
      <img src={src} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </article>
  );
};

type ImageHeroProps = {
  src: string;
  alt?: string;
  heading?: string;
  subheading?: string;
  className?: string;
};

export const ImageHero: React.FC<ImageHeroProps> = ({ src, alt = "", heading, subheading, className = "" }) => {
  return (
    <section className={`relative rounded-lg overflow-hidden ${className}`} aria-label={heading || "Hero image"}>
      <img src={src} alt={alt} className="w-full h-72 md:h-96 object-cover" />
      {(heading || subheading) && (
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          {heading && <h2 className="text-3xl font-bold text-white">{heading}</h2>}
          {subheading && <p className="text-white/90 mt-2">{subheading}</p>}
        </div>
      )}
    </section>
  );
};

type ImageGalleryProps = {
  items: Array<{ src: string; alt?: string; title?: string; description?: string }>;
  columns?: number;
  gap?: string;
  className?: string;
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ items, columns = 3, gap = "gap-4", className = "" }) => {
  const gridColsClass = `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`;
  return (
    <div className={`grid ${gridColsClass} ${gap} ${className}`}>
      {items.map((it, idx) => (
        <ImageCard key={idx} src={it.src} alt={it.alt} title={it.title} description={it.description} />
      ))}
    </div>
  );
};

export default ImageCard;
