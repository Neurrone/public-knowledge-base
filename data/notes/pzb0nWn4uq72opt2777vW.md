
# RSS

## RSS Readers

* [Miniflux](https://miniflux.app/) is a great minimalist selfhosted web-based RSS readers. The page makes good use of standard HTML tags.
* [Fiery Feeds](https://apps.apple.com/us/app/fiery-feeds-rss-reader/id1158763303) supports reading feeds from multiple services on iOS. Works with Miniflux by using Miniflux's Fever API support.

## Feed Generators

* [RssHub](https://docs.rsshub.app/en/) and [Rss-Bridge](https://github.com/RSS-Bridge/rss-bridge) generate feeds for websites that don't expose feeds themselves. This is done through hand-written code for each supported site.
* [Rss-proxy](https://github.com/damoeb/rss-proxy) uses heuristics and analyzes the underlying HTML structure of the page instead of relying on manually written code for each site. Hence, it can be a hit or miss.
* [rich-rss](https://github.com/damoeb/rich-rss) is a rewrite of Rss-proxy in a strongly typed language.