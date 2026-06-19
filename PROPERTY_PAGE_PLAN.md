# Property Page Build Plan

## Goal
Build a full property detail page for Kelly's new listing, including a photo gallery, property specs, and 3D tour embed/link.

---

## Property Info
> Fill in price, beds, baths, sqft, MLS # once confirmed.

- **Address:** 610 S Manus Dr (slug: `610-s-manus-dr`)
- **City/State:** _TBD_, TX
- **Price:** _TBD_
- **Bedrooms:** _TBD_
- **Bathrooms:** _TBD_
- **Sq Ft:** _TBD_
- **Status:** Active
- **MLS #:** _TBD_ (optional)
- **3D Tour:** Zillow IMX embed (see code below)
- **Video Reel:** YouTube Shorts — https://youtube.com/shorts/Eic4JsdXFKo (embed ID: `Eic4JsdXFKo`)
- **Photos:** 62 originals at 4240×2827 (~10MB each)
- **Media source:** https://view.realhomepix.com/media/download2.asp?E3F0B4F5CFF04F57A02ADA8D45A02413

### 3D Tour Embed
```html
<iframe src="https://www.zillow.com/view-imx/631dd0ab-315d-4e7d-9434-e58d599b3fcf?setAttribution=mls&wl=true&initialViewType=pano&utm_source=dashboard"
  width="100%" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
```

---

## Step 1 — Download the Photos ✅ DONE

- 62 originals copied to `src-11ty/assets/images/properties/610-s-manus-dr/raw/` (named `01.jpg` – `62.jpg`)
- Video reel copied to `src-11ty/assets/video/610-s-manus-dr-reel.mp4`

---

## Step 2 — Optimize Images for Web ✅ DONE

- `src-11ty/assets/images/properties/610-s-manus-dr/full/` — 62 × webp at max 1920px, quality 82
- `src-11ty/assets/images/properties/610-s-manus-dr/thumbs/` — 62 × webp at max 800px, quality 75
- Files named `01.webp` through `62.webp` in each folder

### ⚠️ Video Hosting Note
The reel (`610-s-manus-dr-reel.mp4`) is 50MB — too large to commit to git. Options:
1. **Upload to YouTube (unlisted)** and embed — easiest, free, great mobile perf
2. **Upload to Vimeo** — cleaner player, no YouTube branding
3. **Netlify Large Media / Git LFS** — keeps it in the repo but needs LFS setup
4. **Self-host on S3/CDN** — full control, small cost

Recommendation: YouTube unlisted or Vimeo. Once uploaded, replace the `<video>` tag with an iframe embed.

---

## Step 3 — Create the Property Listing Data File

Add a listing entry in `src-11ty/listings/` (following the existing pattern):

**File:** `src-11ty/listings/[address-slug].md`

```markdown
---
address: [Full Street Address]
city: [City]
state: TX
status: active
hero_image: /assets/images/properties/[address-slug]/01-[address-slug].webp
detail_url: /for-sale/[address-slug]/
price: $XXX,XXX
old_price: ""
bedrooms: X Bedrooms
bathrooms: X Bathrooms
squarefoot: "XXXX"
kelly_comments: "[Kelly's personal note about this home]"
featured: true
order: 1
permalink: false
---
```

---

## Step 4 — Build the Property Detail Page

**File:** `src-11ty/for-sale/[address-slug].njk`

### Page sections (in order):

1. **Hero** — full-width background image with address + breadcrumb
2. **Property Stats Bar** — beds / baths / sqft / price in a horizontal strip
3. **Photo Gallery** — lightbox grid using Magnific Popup (already loaded sitewide) + optional Owl Carousel slideshow
4. **3D Tour** — iframe embed or prominent CTA button linking to tour URL
5. **Description** — Kelly's personal description / notes
6. **Details Table** — MLS #, year built, garage, lot size, etc. (fill what's known)
7. **Contact Kelly** — CTA with phone + contact form link (already in site footer, can duplicate inline)
8. **Agent Card** — existing pattern from `for-sale/1.njk`

### Gallery implementation
The site already loads `jquery.magnific-popup.min.js` and `owl.carousel.min.js`, so no new dependencies needed.

```html
<!-- Carousel + lightbox pattern -->
<div class="owl-carousel property-gallery">
  <a href="/assets/images/properties/[slug]/01-[slug].webp" class="image-popup">
    <img src="/assets/images/properties/[slug]/01-[slug]-thumb.webp" alt="...">
  </a>
  <!-- repeat for each photo -->
</div>
```

### 3D Tour embed (if Matterport):
```html
<iframe src="https://my.matterport.com/show/?m=[TOUR_ID]"
  width="100%" height="500px" frameborder="0" allowfullscreen></iframe>
```

---

## Step 5 — Wire Up the "For Sale" Section on Homepage

The homepage includes `src-11ty/_includes/index/for_sale.njk` which pulls from `data/for_sale.json`. 

**Options:**
- A) Add the new property to `data/for_sale.json` with a link to the new detail page
- B) Point the listing's `detail_url` frontmatter field to the new page so it links through

The listing card on the homepage currently links to `nrrtsold.com`. We want it to link to the new property page instead when one exists.

---

## Step 6 — Update the Listing Frontmatter (existing)

If `cedar-hill-mallard-pointe-1.md` exists for this same property, update `detail_url` and `hero_image` once the new page is live.

---

## File Checklist

```
[ ] Download all photos from realhomepix
[ ] Place raw photos in src-11ty/assets/images/properties/[address-slug]/raw/
[ ] Run image optimization script → .webp + thumbs
[ ] Create src-11ty/listings/[address-slug].md with property data
[ ] Create src-11ty/for-sale/[address-slug].njk detail page
[ ] Update data/for_sale.json to point to new detail page
[ ] Test gallery + lightbox locally (npm run dev)
[ ] Test 3D tour embed
[ ] Commit + push → Netlify auto-deploys
```

---

## Tech Stack Notes

- **Framework:** Eleventy (11ty) with Nunjucks templates
- **CSS:** Bootstrap 4 + custom `site.css`
- **Icons:** Font Awesome 4.7
- **Gallery:** Magnific Popup (lightbox) + Owl Carousel (slider) — both already loaded
- **Images:** Prefer `.webp` at max 1920px for full-size, 800px for thumbnails
- **Build:** `npm run dev` for local, Netlify for production

---

## Design Notes (to fill in once design is ready)

- [ ] Hero image choice (pick the strongest exterior shot)
- [ ] Gallery grid layout preference (2-col, 3-col, masonry?)
- [ ] Whether to show 3D tour inline or as a modal/CTA
- [ ] Color/typography variations from existing site style
- [ ] Mobile layout priorities

---

## Open Questions

1. What is the property address? (needed for slugs and data)
2. Does Kelly want the 3D tour embedded on the page or just a link-out button?
3. What property details are we showing? (MLS #, year built, lot size, garage?)
4. Should the new listing replace the "Coming Soon" placeholder at `/for-sale/1/` or be its own URL?
5. Any video walkthrough in addition to the 3D tour?
