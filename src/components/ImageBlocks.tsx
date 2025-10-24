import React from "react";

type ImageCardProps = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  caption?: React.ReactNode; // rich text under the image
  className?: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt = "",
  title,
  description,
  caption,
  className = "",
}) => {
  return (
    <article className={`bg-card rounded-lg overflow-hidden shadow-card ${className}`}>
      <img src={src} alt={alt} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {caption && <div className="mt-2 text-sm text-muted-foreground">{caption}</div>}
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
      <img src={src} alt={alt} className="w-full h-72 md:h-96 object-cover" loading="lazy" />
      {(heading || subheading) && (
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          {heading && <h2 className="text-3xl font-bold text-white">{heading}</h2>}
          {subheading && <p className="text-white/90 mt-2">{subheading}</p>}
        </div>
      )}
    </section>
  );
};

type GalleryItem = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  caption?: React.ReactNode; // optional rich text displayed inside the gallery
  overlay?: React.ReactNode; // optional overlay content
};

type ImageGalleryProps = {
  items: GalleryItem[];
  variant?: "grid" | "masonry" | "overlay" | "cards";
  columns?: number;
  gap?: string;
  className?: string;
};

function colsClass(columns: number) {
  // choose a Tailwind column class for masonry / grid fallback
  if (columns <= 1) return "columns-1";
  if (columns === 2) return "sm:columns-2 md:columns-2";
  if (columns === 3) return "sm:columns-2 md:columns-3";
  return "sm:columns-2 md:columns-4";
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  variant = "grid",
  columns = 3,
  gap = "gap-4",
  className = "",
}) => {
  if (variant === "masonry") {
    const c = colsClass(columns);
    return (
      <div className={`${c} ${className}`}>
        {items.map((it, idx) => (
          <div key={idx} className="break-inside-avoid mb-4">
            <img src={it.src} alt={it.alt || ""} className="w-full rounded-lg object-cover" loading="lazy" />
            {(it.title || it.caption || it.description) && (
              <div className="p-2">
                {it.title && <h4 className="font-semibold">{it.title}</h4>}
                {it.description && <p className="text-sm text-muted-foreground">{it.description}</p>}
                {it.caption && <div className="text-sm text-muted-foreground mt-1">{it.caption}</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} ${gap} ${className}`}>
        {items.map((it, idx) => (
          <div key={idx} className="relative rounded-lg overflow-hidden">
            <img src={it.src} alt={it.alt || ""} className="w-full h-56 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              {it.overlay ? (
                <div className="text-white">{it.overlay}</div>
              ) : (
                <div className="text-center text-white">
                  {it.title && <h3 className="text-lg font-bold">{it.title}</h3>}
                  {it.caption && <p className="mt-2 text-sm">{it.caption}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} ${gap} ${className}`}>
        {items.map((it, idx) => (
          <ImageCard
            key={idx}
            src={it.src}
            alt={it.alt}
            title={it.title}
            description={it.description}
            caption={it.caption}
          />
        ))}
      </div>
    );
  }

  // default: grid
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} ${gap} ${className}`}>
      {items.map((it, idx) => (
        <div key={idx}>
          <img src={it.src} alt={it.alt || ""} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
          <div className="mt-2">
            {it.title && <h4 className="font-semibold">{it.title}</h4>}
            {it.description && <p className="text-sm text-muted-foreground">{it.description}</p>}
            {it.caption && <div className="text-sm text-muted-foreground mt-1">{it.caption}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ImageBlocks: React.FC<{ items?: GalleryItem[]; variant?: ImageGalleryProps['variant'] }> = ({ items, variant = 'cards' }) => {
  const defaultItems: GalleryItem[] = items || [
    { src: '/placeholder.svg', alt: 'placeholder', title: 'Placeholder 1', description: 'Illustration', caption: 'Placeholder image' },
    { src: '/placeholder.svg', alt: 'placeholder', title: 'Placeholder 2', description: 'Illustration', caption: 'Placeholder image' },
    { src: '/placeholder.svg', alt: 'placeholder', title: 'Placeholder 3', description: 'Illustration', caption: 'Placeholder image' },
  ];

  return <ImageGallery items={defaultItems} variant={variant} />;
};

export default ImageCard;
