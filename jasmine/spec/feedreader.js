/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in the application.
     */
    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* URL Validation (This is the second test) --> a test that loops through
         * each feed in the allFeeds object and ensures it has a URL defined and
         * that the URL is not empty.
         */
        it('URL Validation -> ensure the feeds to not have blank / empty URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); // check for a properly defined URL
                expect(feed.url.length).not.toBe(0); // check for empty URL
                expect(feed.url).not.toBe(''); // Additional check for empty string
            });
        });

        /* Name validation (This is the third test) --> a test that loops through
         * each feed in the allFeeds object and ensures it has a name defined and
         * that the name is not empty.
         */
        it('Name validation -> ensure the feeds to not have blank / empty names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); // check for a properly defined name
                expect(typeof feed.name).toEqual('string'); // checks whether the name element is a string or not
                expect(feed.name.length).toBeGreaterThan(0); // checks whether the name string is empty or not by mandating its length to be greater than zero
                expect(feed.name).not.toBe(''); // Additional check for empty string
            });
        });
    });


    // Menu test suite.
    describe('The menu', function() {

        /* Menu validation Part 1 (This is the fourth test) --> a test that ensures that
         * the menu element is hidden by default.
         */
        it('Menu validation Part 1 -> ensure the menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Menu validation Part 2 (This is the fifth test) --> a test that ensure changes in
         * visibility when the hamburger menu icon is clicked.
         */
        it('Menu validation Part 2 -> ensure menu changes visibility when the menu icon is clicked', function() {
            var menu = $('.menu-icon-link');

.
            menu.click();             // Test to check whether menu gets displayed or not when the hamburger menu icon is clicked
            expect($('body').hasClass('menu-hidden')).toBe(false);


            menu.click();             // Test to check whether menu gets hidden or not when the hamburger menu icon is clicked again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

        /* Initial entries (This is the sixth test) a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('Feed Entry validation -> esnure there is at least a single entry element within the feed container', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });
        /* New Feed Selection valiation (This is the seventh test) -> a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function() {

        var $feedFirst;
        var $feedSecond;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedFirst = $('.feed').html();
                done();
            });
        });

        it('Feed content change validation --> ensure when a new feed is loaded by the loadFeed function that the content actually changes', function(done) {
            loadFeed(1, function() {
                feedSecond = $('.feed').html();
                expect(feedSecond).not.toEqual(feedFirst);
                done();
            });
        });
    });
}());