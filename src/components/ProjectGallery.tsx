"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";

const projectPhotos = [
  {
    file: "shower-overview",
    caption: "A closer look at the shower",
    alt: "Gray tiled shower with horizontal and vertical grab bars, a handheld shower, and pebble-pattern flooring",
  },
  {
    file: "shower-entry",
    caption: "Support at the entrance",
    alt: "Shower entrance with a vertical grab bar and a view of the tiled shower floor",
  },
  {
    file: "shower-seat",
    caption: "A place to sit",
    alt: "Wooden shower seat beneath a handheld shower with support rails nearby",
  },
  {
    file: "shower-handheld",
    caption: "Details within reach",
    alt: "Handheld shower and stainless steel horizontal and vertical grab bars on gray tile",
  },
  {
    file: "toilet-support",
    caption: "Support beyond the shower",
    alt: "Toilet beside horizontal and vertical grab bars mounted on a gray tiled wall",
  },
];

export function ProjectGallery() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const captionId = useId();
  const current = projectPhotos[active];
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);
  function open(index: number) {
    setActive(index);
    dialog.current?.showModal();
    setIsOpen(true);
  }
  function move(direction: number) {
    setActive(
      (index) =>
        (index + direction + projectPhotos.length) % projectPhotos.length,
    );
  }
  return (
    <section
      className="project-section"
      aria-labelledby={headingId}
      id="project-gallery"
    >
      <div className="home-shell home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our work, in the details</p>
            <h2 id={headingId}>
              Everyday comfort.
              <br />
              <em>Practical craftsmanship.</em>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              A bathroom project our team completed for our owner, Allen Hendershot. Explore five real photos of the shower, seating, tilework, and support rails.
            </p>
            <Link href="/contact" className="text-link">
              Talk about your bathroom{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="project-mosaic">
          {projectPhotos.map((photo, index) => (
            <button
              type="button"
              className="project-tile"
              onClick={() => open(index)}
              key={photo.file}
              aria-label={`Enlarge photo ${index + 1}: ${photo.caption}`}
            >
              <Image
                src={`/images/projects/${photo.file}.webp`}
                alt={photo.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 720px) 100vw, 50vw"
                    : "(max-width: 720px) 50vw, 25vw"
                }
              />
              <span className="project-tile-caption">
                <span>{photo.caption}</span>
                <Expand size={18} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
        <p className="image-caption">
          Actual project photography · Select any image to see the full photo.
        </p>
      </div>
      <dialog
        onClose={() => setIsOpen(false)}
        ref={dialog}
        className="project-dialog"
        aria-label="Bathroom project photos"
        aria-describedby={captionId}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <div className="project-viewer">
          <button
            type="button"
            className="project-close"
            onClick={() => dialog.current?.close()}
            aria-label="Close photo viewer"
            autoFocus
          >
            <X size={24} />
          </button>
          <div className="project-full-photo">
            <Image
              key={current.file}
              src={`/images/projects/${current.file}.webp`}
              alt={current.alt}
              fill
              sizes="100vw"
            />
          </div>
          <div className="project-viewer-footer">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous photo"
            >
              <ArrowLeft size={22} />
            </button>
            <p id={captionId} aria-live="polite">
              <span>
                {active + 1} / {projectPhotos.length}
              </span>
              {current.caption}
            </p>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next photo"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
