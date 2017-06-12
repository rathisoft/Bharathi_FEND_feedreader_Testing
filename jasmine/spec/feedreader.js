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
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // URL Validation
        it('- should not have blank / empty URL -> URL Validation', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).not.toBe(''); // Additional check for empty string
            });
        });

        // Name validation
        it('- should not have blank / empty names -> NAME validation', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toEqual('string');
                expect(feed.name.length).toBeGreaterThan(0);
                expect(feed.name).not.toBe('');
            });
        });
    });


    // Menu test suite.
    describe('The menu', function() {

        // This test ensures the menu element is hidden by default.
        it('- ensure the menu element is hidden by default -> Menu validation', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // This test validates proper functioning of the  menu toggle.
        it('- changes visibility when clicked -> Menu validation', function() {
            var menu_Icon = $('.menu-icon-link');

            // This tests for menu display.
            menu_Icon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // This tests for menu hide.
            menu_Icon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // Initial entries test suite.
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // tests that there is at least one entry in feed.
        it('should contain at least one feed entry -> Feed Entry validation.', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        // tests that new content is loaded by loadFeed().
        var $feedFirst;
        var $feedSecond;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedFirst = $('.feed').html();
                done();
            });
        });

        it('should change feed content -> feed content change validation', function(done) {
            loadFeed(1, function() {
                feedSecond = $('.feed').html();
                expect(feedSecond).not.toEqual(feedFirst);
                done();
            });
        });
    });
}());