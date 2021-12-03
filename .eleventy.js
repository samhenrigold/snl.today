const { DateTime, Settings } = require("luxon");


module.exports = (eleventyConfig) => {
    Settings.defaultZone = "America/New_York";
    
    eleventyConfig.addFilter("prettyDate", (dateObj) => {
        return DateTime.fromISO(dateObj, {zone: "America/New_York", locale: 'en-US'}).toLocaleString(DateTime.DATE_MED);
      });
      
    eleventyConfig.addShortcode("buildTime", function () {
    return DateTime.now().toLocaleString(DateTime.DATETIME_FULL, {zone: "America/New_York", locale: 'en-US'});
    });
    eleventyConfig.addFilter("relativeDate", (dateObj) => {
        const now = DateTime.now();
        const future = DateTime.fromISO(dateObj, {zone: "America/New_York", locale: 'en-US'});
        const dayCount = Math.round(future.diff(now, ["days"]).toObject().days);
        if (dayCount === 0) {
            return "today"
        } else if (dayCount === 1) {
            return "tomorrow"
        } else if (dayCount === -1) {
            return "yesterday"
        } else if (dayCount > 1) {
            return `in ${dayCount} days`
        }
      });
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('_redirects')
    eleventyConfig.addPassthroughCopy('_headers')
    return {
        dir: {
            input: 'src',
            output: '_site',
        },
        markdownTemplateEngine: "html",
    }
}