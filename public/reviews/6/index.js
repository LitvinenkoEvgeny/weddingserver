$(".close-review").removeClass('hidden');
$("#show-review-nav").removeClass('hidden');
$("#show-review").removeClass('hidden').children('.handle').html([
  '<div class="pop-up review">',
     '<h3>Благодарность</h3>',
    	'<div class="authors">',
          // ССЫЛКИ НА АВТОРОВ
    			'<a target="_blank" rel="nofollow" href="https://vk.com/id32002161" class="groom"><img alt="4yzc03r7pfe" src="https://pp.vk.me/c604326/v604326161/96be/4yzC03r7PFE.jpg">Роман </a>',
    			'<div class="amp">&amp;</div>',
    			'<a target="_blank" rel="nofollow" href="https://vk.com/irishkinkin" class="bride"><img alt="Dwv2pnfa7pq" src="https://pp.vk.me/c636531/v636531762/201bd/dwv2pNfa7pQ.jpg">Ирина</a>',
    		'<div class="line"></div>',
    	'</div>',
  	'<div id="show-review-nav">',
    // ПРЕД/СЛЕД
  		'<a class="prev" data-remote="true" href="reviews/5/index.js"></a>',
  		'<a class="next" data-remote="true" href="reviews/7/index.js"></a>',
  	'</div>',
    // КАРТИНКА
		'<img alt="" class="photo" src="reviews/6/6.jpg">',
  	'<p class="text">Любой текст</p>',
    // ДАТА
  	'<p class="date"><img src="date.svg">14 ноября 2015</p>',
  '</div>'
].join('\n'));
