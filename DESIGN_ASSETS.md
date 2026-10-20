# Architectural imagery

Original architectural design imagery was generated with the built-in image generation tool on October 16, 2026. These images illustrate service possibilities and are not photographs of completed Age In Place LLC projects. The homepage includes a visible AI-generated imagery attribution immediately below the service images.

The local WebP files are compressed derivatives of the generated originals, without creative alterations. Responsive Next.js images are used throughout the homepage. Only the hero image is preloaded; the remaining images load lazily.

## Final prompts (built-in generation)

- `public/images/home-living-v1.webp`: Photorealistic wide architectural editorial image of a warm New England living room opening into an oak kitchen. Level floors and clear circulation, cream plaster, linen seating, natural window light, trees outside. Believable residential craftsmanship, no people, text, logos, or watermark. Quiet left side for website text; illustrative architectural imagery, not completed work.
- `public/images/home-bathroom-v1.webp`: Photorealistic warm accessible bathroom with a curb-free shower, wide clear entry, matte pale limestone floor, correctly attached wall-mounted support bars, oak bench, reachable hand shower, oak vanity, and natural light. Single horizontal architectural editorial image. No people, text, logos, watermark, or collage. Design inspiration, not a completed company project.
- `public/images/home-entry-v1.webp`: Photorealistic New England clapboard home with a gently sloping broad timber entrance walkway, level landing, sturdy handrails, natural planting, and warm daylight. Wide architectural editorial composition, believable residential scale and joinery. No people, text, logos, watermark, or collage. Design inspiration, not a completed company project.

Replace these with permission-cleared photographs of actual completed work when available, and update attribution and descriptive text. Do not label generated images as completed projects, customer homes, or before-and-after evidence.

## Actual bathroom project photos — October 18, 2026

Five photos supplied by Teejay in this conversation are now used in the homepage gallery, bathroom service card, and accessible bathroom service-page gallery. Originals are retained in the user's uploads; web copies are EXIF-oriented, resized without enlargement, encoded as WebP, and stripped of metadata. No scene details were changed.

- IMG_0298.jpeg → public/images/projects/shower-handheld.webp
- IMG_0299.jpeg → public/images/projects/shower-overview.webp
- IMG_0300.jpeg → public/images/projects/shower-seat.webp
- IMG_0301.jpeg → public/images/projects/shower-entry.webp
- IMG_0302.jpeg → public/images/projects/toilet-support.webp

The existing generated living/ramp imagery remains labeled design inspiration. Captions describe visible features without inventing locations, customer statements, compliance certifications, or project results.

The five project photos are portrait 3:4 images. Gallery tile ratios follow that source format across desktop, tablet, and mobile breakpoints so the thumbnails retain the visible project details instead of cutting off large portions of each photo. The viewer continues to show the complete image with `object-fit: contain`.
