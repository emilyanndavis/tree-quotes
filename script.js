$(document).ready(function() {
  
  var backgroundImages = ['url(\'http://c8.staticflickr.com/2/1628/25889333215_171762a6a8_k.jpg\')', 'url(\'http://c6.staticflickr.com/2/1495/25794416701_390b5da391_k.jpg\')', 'url(\'http://c4.staticflickr.com/2/1473/25794459531_07ad9deff9_k.jpg\')', 'url(\'http://c6.staticflickr.com/2/1702/25889451605_0d67f99b3a_k.jpg\')',  'url(\'http://c7.staticflickr.com/2/1445/24691808910_ba35c3f4b8_k.jpg\')', 'url(\'http://c3.staticflickr.com/2/1705/24960845426_9bd27386eb_k.jpg\')', 'url(\'http://c6.staticflickr.com/2/1486/24358534133_dc25bf1f60_k.jpg\')', 'url(\'http://c1.staticflickr.com/2/1650/24867518952_c1592a50cf_k.jpg\')', 'url(\'http://c6.staticflickr.com/3/2869/12525899013_81c13d5d10_k.jpg\')', 'url(\'http://c4.staticflickr.com/6/5493/9255411771_339007f476_k.jpg\')'];
  
  var quotes = [['“Going to the woods is going home; for I suppose we came from the woods originally.”', '—John Muir'], ['“Trees are poems that the earth writes upon the sky.”', '—Kahlil Gibran'], ['“You can’t be suspicious of a tree, or accuse a bird or a squirrel of subversion or challenge the ideology of a violet.”', '—Hal Borland'], ['“Why are there trees I never walk under but large and melodious thoughts descend upon me?”', '—Walt Whitman'], ['“Sometimes thou mayst walk in Groves, which, being full of Majestie, will much advance the Soul.”', '—Thomas Vaughan'], ['“The groves were God’s first temples.”', '—William Cullen Bryant'], ['“I am the Lorax. I speak for the trees. I speak for the trees, for the trees have no tongues.”', '—Dr. Seuss'], ['“Suburbia is where the developer bulldozes out the trees, then names the streets after them.”', '—Bill Vaughan'], ['“The wonder is that we can see these trees and not wonder more.”', '—Ralph Waldo Emerson'], ['“We have nothing to fear and a great deal to learn from trees.”', '—Marcel Proust'], ['“As an instrument of planetary home repair, it is hard to imagine anything as safe as a tree.”', '—Jonathan Weiner'], ['“Trees are sanctuaries. Whoever knows how to speak to them, whoever knows how to listen to them, can learn the truth.”', '—Hermann Hesse'], ['“As the poet said, ‘only God can make a tree,’ probably because it’s so hard to figure out how to get the bark on.”', '—Woody Allen'], ['“The tree which moves some to tears of joy is in the eyes of others only a green thing that stands in the way.”', '—William Blake']];
  
  var backgroundNum = 0;

  var quoteNum = 0;
  
  function setBackground() {
    backgroundNum = Math.floor(Math.random() * backgroundImages.length);
    $('#background').css('background-image', backgroundImages[backgroundNum]);
  } 
  
  function setQuote() {
    quoteNum = Math.floor(Math.random() * quotes.length);
    $('#quote').html("<h2>"+quotes[quoteNum][0]+"</h2><h3>"+quotes[quoteNum][1]+"</h3>");
  }
  
  setBackground();
  setQuote();
  
 function setTweet() {
    $('#tweetButton').attr('href', 'https://twitter.com/intent/tweet?text='+quotes[quoteNum][0].replace(';', '%3B')+" "+quotes[quoteNum][1]);
  }
  
  setTweet();
  
  $('#quoteButton').on('click', function() { 
    setBackground();
    setQuote();
    setTweet();
  });
  
});