module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_includes/bundle.css");
    eleventyConfig.addPassthroughCopy("_includes/bg.svg");
    eleventyConfig.ignores.add("README.md");

    eleventyConfig.addCollection("upcomingDojos", function (collectionApi) {
        let filteredCollection = collectionApi.getFilteredByTag("dojo").filter(function (item) {
            return new Date(item.fileSlug) > Date.now();
        })

        filteredCollection.sort((a, b) => {
            return new Date(a.fileSlug) - new Date(b.fileSlug);
        });
        return filteredCollection.slice(0, 10);
    });

    eleventyConfig.addFilter("betterDate", function (value) {
        let rawDate = new Date(value);
        return rawDate.getUTCFullYear() + "-" +
            (rawDate.getUTCMonth() + 1).toString().padStart(2, '0') + "-" +
            rawDate.getUTCDate().toString().padStart(2, '0');
    });
};