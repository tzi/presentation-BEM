//bespoke.horizontal.from('article');
var deck = bespoke.from('article', [
    bespoke.plugins.classes(),
    bespoke.plugins.keys(),
    bespoke.plugins.touch(),
    bespoke.plugins.hash(),
    bespoke.plugins.bullets('.bullets > li:not(.bullet-group), .bullet'),
    bespoke.plugins.slidenumber()
]);