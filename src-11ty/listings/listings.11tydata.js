module.exports = {
  eleventyComputed: {
    permalink: data => {
      if (data.has_detail_page && data.page_slot) {
        return `/for-sale/${data.page_slot}/`;
      }
      return false;
    },
    layout: data => {
      if (!data.has_detail_page) {
        return false;
      }
      // `coming-soon` is the short template used before the photo shoot lands —
      // flip page_template back to `full` once real photos are in.
      return data.page_template === 'coming-soon'
        ? 'listing-coming-soon.njk'
        : 'listing-detail.njk';
    },
    title: data => {
      if (data.has_detail_page && data.address) {
        return `${data.address}, ${data.city}, ${data.state} — Kelly Cypret, Realtor®`;
      }
    },
    listing_url: data => {
      if (data.has_detail_page && data.page_slot) {
        return `/for-sale/${data.page_slot}/`;
      }
      if (data.external_url) {
        return data.external_url;
      }
      return '#';
    },
    // Suppress the homepage hero on detail pages.
    // Must be set here (highest-priority computed data) — layout frontmatter
    // doesn't reliably flow up through Eleventy's layout chain to layout.njk.
    showHomeHero: data => {
      if (data.has_detail_page) {
        return false;
      }
    }
  }
};
