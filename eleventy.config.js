module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_includes/bundle.css");
    eleventyConfig.addPassthroughCopy("_includes/bg.svg");
    eleventyConfig.ignores.add("README.md");

    eleventyConfig.addCollection("upcomingDojos", function(collectionApi) {
        return collectionApi.getFilteredByTag("dojo").filter(function(item) {
            return item.date > Date.now();
        });
    });

    eleventyConfig.addCollection("previousDojos", function(collectionApi) {
        return collectionApi.getFilteredByTag("dojo").filter(function(item) {
            return item.date < Date.now();
        });
    });

    eleventyConfig.addFilter("betterDate", function(value) {
        let rawDate = new Date(value);
        return rawDate.getUTCFullYear() + "-" + 
        (rawDate.getUTCMonth()+1).toString().padStart(2, '0') + "-" +
        rawDate.getUTCDate().toString().padStart(2, '0'); 
    });
};