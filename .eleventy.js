module.exports = function(eleventyConfig) {
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Filter for formatting dates
  eleventyConfig.addFilter("dateDisplay", function(dateVal) {
    if (!dateVal) return "";
    const date = new Date(dateVal);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  // Limit filter for arrays (useful for news, teachers list, etc.)
  eleventyConfig.addFilter("limit", function(arr, limit) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(0, limit);
  });

  // Sort by order filter
  eleventyConfig.addFilter("sortOrder", function(arr) {
    if (!Array.isArray(arr)) return [];
    return [...arr].sort((a, b) => {
      const orderA = a.data.order !== undefined ? a.data.order : 99;
      const orderB = b.data.order !== undefined ? b.data.order : 99;
      return orderA - orderB;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
