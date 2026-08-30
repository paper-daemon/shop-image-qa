const assert=require('node:assert/strict');

global.location={href:'https://paper-daemon.github.io/shop-image-qa/'};
global.document={querySelector:()=>({addEventListener(){},innerHTML:''})};

const {escHtml,safeOfferUrl,imageNotes,unreadableImageNote}=require('../app.js');

assert.equal(
  escHtml('<img src=x onerror=alert(1)>.png'),
  '&lt;img src=x onerror=alert(1)&gt;.png'
);
assert.equal(safeOfferUrl('javascript:alert(1)'),'');
assert.equal(safeOfferUrl('https://example.com/x'),'https://example.com/x');
assert.deepEqual(
  imageNotes(800,1200,6*1024*1024,'image/gif'),
  ['解像度が小さめ','容量大きめ','一般的なWeb形式ではない']
);
assert.equal(unreadableImageNote('image/jpeg'),'画像として読み込めない（image/jpeg）');
assert.equal(unreadableImageNote(''),'画像として読み込めない（形式不明）');

console.log('6 assertions PASS');
