# Udacity Front-end Nanodegree - Project 6 --> Feedreader Testing

This project uses jasmine to test the functionality of a feed reader website.

### Instructions
To view the feedreader testing site on github pages go to https://rathisoft.github.io/Bharathi_FEND_feedreader_Testing/
                        or
Download the repo locally and run the index.html


## Tests
RSS Feeds:
* Feeds are Defined (This is the first test) --> a test to make sure that the "allFeeds" variable has been defined and that it is not empty.
* URL Validation (This is the second test) --> a test that loops through each feed in the "allFeeds" object and ensures it has a URL defined and that the URL is not empty.
* Name validation (This is the third test) --> a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

The Menu:
* Menu validation Part 1 (This is the fourth test) --> a test that ensures that the menu element is hidden by default.
* Menu validation Part 2 (This is the fifth test) --> a test that ensure changes in visibility when the hamburger menu icon is clicked.


Initial entries (This is the sixth test) --> a test that ensures when the loadFeed function is called and completes its work, there is at least a single ".entry" element within the .feed"container.

New Feed Selection valiation (This is the seventh test) --> a test that ensures when a new feed is loaded by the "loadFeed" function the content actually changes.

