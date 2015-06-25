require(
  ['bespoke', 'bespoke-classes', 'bespoke-keys', 'bespoke-touch', 'bespoke-hash', 'unindentor'],
  function(bespoke, classes, keys, touch, hash, unindentor) {
    
    // Bespoke
    var deck = bespoke.from('article', [
      classes(),
      keys('horizontal'),
      touch(),
      hash()
    ]);
    
    // Unindentor
    unindentor.unindentElementList('code[class*="language-"]');
  }
);
