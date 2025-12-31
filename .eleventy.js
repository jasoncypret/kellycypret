module.exports = function(eleventyConfig) {
  // Set directories
  eleventyConfig.addPassthroughCopy("src-11ty/assets/images");
  eleventyConfig.addPassthroughCopy("src-11ty/assets/fonts");
  eleventyConfig.addPassthroughCopy("src-11ty/assets/scripts");
  eleventyConfig.addPassthroughCopy("src-11ty/assets/styles");
  eleventyConfig.addPassthroughCopy("src-11ty/admin");

  // Helper function to normalize tags
  function normalizeTag(tag) {
    // Handle object format {tag: "value"} or simple string
    let tagValue = typeof tag === "string" ? tag : (tag.tag || tag);
    // Normalize format: lowercase, replace spaces/special chars with dashes
    tagValue = String(tagValue)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")  // Replace spaces with dashes
      .replace(/[^a-z0-9-]/g, "-")  // Replace special chars with dashes
      .replace(/-+/g, "-")  // Replace multiple dashes with single dash
      .replace(/^-|-$/g, "");  // Remove leading/trailing dashes
    return tagValue;
  }

  // Collections
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src-11ty/blog/*.md").filter(function(item) {
      // Filter out draft posts in production
      if (process.env.NODE_ENV === "production" && item.data.draft) {
        return false;
      }
      // Normalize tags: convert objects to strings and enforce format
      if (item.data.tags && Array.isArray(item.data.tags)) {
        item.data.tags = item.data.tags.map(normalizeTag).filter(function(tag) {
          return tag && tag.length > 0; // Remove empty tags
        });
      }
      return true;
    }).sort(function(a, b) {
      // Sort by date, newest first
      return (b.data.date || 0) - (a.data.date || 0);
    });
  });

  eleventyConfig.addCollection("testimonials", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src-11ty/testimonials/*.md").sort(function(a, b) {
      // Sort by order field if present, otherwise maintain source order
      const orderA = a.data.order !== undefined ? a.data.order : 999;
      const orderB = b.data.order !== undefined ? b.data.order : 999;
      return orderA - orderB;
    });
  });

  eleventyConfig.addCollection("listings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src-11ty/listings/*.md").sort(function(a, b) {
      // Sort by order field if present, otherwise maintain source order
      const orderA = a.data.order !== undefined ? a.data.order : 999;
      const orderB = b.data.order !== undefined ? b.data.order : 999;
      return orderA - orderB;
    });
  });

  // Date filter
  eleventyConfig.addFilter("date", function(date, format) {
    if (!date) return "";
    const d = new Date(date);
    if (format === "%B %d, %Y") {
      return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
    return d.toLocaleDateString();
  });

  // Unique filter for arrays
  eleventyConfig.addFilter("unique", function(arr) {
    if (!arr || !Array.isArray(arr)) return [];
    const seen = new Set();
    return arr.filter(function(value) {
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  });

  // Format tag title (replace hyphens with spaces and capitalize)
  eleventyConfig.addFilter("tagTitle", function(tag) {
    if (!tag) return "";
    return tag.split("-").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });

  // Get all unique tags from blog collection
  eleventyConfig.addCollection("allTags", function(collectionApi) {
    const tags = new Set();
    collectionApi.getFilteredByGlob("src-11ty/blog/*.md").forEach(function(item) {
      if (item.data.tags && Array.isArray(item.data.tags)) {
        item.data.tags.forEach(function(tag) {
          tags.add(normalizeTag(tag));
        });
      }
    });
    return Array.from(tags).filter(function(tag) {
      return tag && tag.length > 0; // Remove empty tags
    }).sort();
  });


  return {
    dir: {
      input: "src-11ty",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};


