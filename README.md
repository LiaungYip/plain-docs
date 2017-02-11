Mission: **To be a simple theme for complex documentation sites.**

# Getting Started

This theme requires you to set a few options in `config.toml`, or it won't work.

See `example_config.toml`.

# Goals

 - Keep the appearance as simple as possible.
 - Keep page weights as low as possible.
 	- No large Javascript dependencies.
 - Support nested navigation menus with thousands of items.
 - Support offline browsing from a local disk, with no internet connection.


# Aspirational

- Use HTML 5 - it's the future
- Use cached partials - for speed speed speed (?)

# Offline Browsing

To support off-line browsing;

 - Local copies of CSS and Javascript files should be provided in `/static`.
 - There should be an option in `config.toml` to switch between using Internet copies (from a CDN) or the local copies (from `/static`).
 - Web fonts are not used.

# Licenses

 - purecss: [Yahoo! Inc. BSD License](https://github.com/yahoo/pure/blob/master/LICENSE.md)
 - html5shiv: [MIT / GPL2](https://github.com/aFarkas/html5shiv/blob/master/MIT%20and%20GPL2%20licenses.md)