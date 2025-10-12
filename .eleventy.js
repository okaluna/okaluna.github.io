module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add date filter for nice formatting
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Configure input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Use Markdown for templates
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
