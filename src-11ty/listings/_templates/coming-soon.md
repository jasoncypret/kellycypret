---
# ─────────────────────────────────────────────────────────────────────────────
# COMING SOON listing template
#
# Copy this file to src-11ty/listings/<address-slug>.md and fill it in. It is
# the short pre-photoshoot page: hero + specs + "call me for an early showing".
# Rendered by _includes/listing-coming-soon.njk.
#
# Once the photographer delivers, promote it to the full page:
#   1. drop photos into assets/images/properties/<slug>/{full,thumbs}/NN.webp
#   2. change `page_template` to `full` (or delete the line)
#   3. add photos_slug, photo_count, hero_slides, gallery, highlights,
#      reel_features, facts_* and the body copy — see 610-s-manus-dr.md
#      or 6333-pinionpark-way.md for a filled-in example
#
# This directory is listed in .eleventyignore, so nothing here is built.
# ─────────────────────────────────────────────────────────────────────────────
address: 123 Example St
city: Fort Worth
state: TX
zip: "76179"
status: active            # active | pending | sold
status_badge: Coming Soon
has_detail_page: true
page_template: coming-soon
page_slot: 1              # becomes /for-sale/<page_slot>/ — must be unique
price: ""                 # leave blank until it's priced
beds: "4"
baths: "2"
sqft: "2,123"
year_built: "2007"
bedrooms: 4 Bedrooms      # card copy on the homepage
bathrooms: 2 Bathrooms
squarefoot: "2123"
hero_image: /assets/images/properties/<slug>/full/01.webp
tagline: "One line that sells the house."
kelly_comments: "Coming soon!"
card_cta: "Take a Look"
agent_title: "Let's Walk It Together"
agent_desc: "I'm Kelly Cypret with Nolen Rodgers Realty. This one is coming to market — professional photos and the full listing details are on the way. If you'd like a private showing before it goes live, call or text me and I'll get you in early."
phone_display: "(469) 812-8100"
phone_dial: "+14698128100"
email: "Kelly@NRRTsold.com"
external_url: ""
featured: true
order: 1
---
