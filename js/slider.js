$(document).ready(function(){

	let position = 0;
	const slidesToShow = 1;
	const slidesToScroll = 1;

	const container = $('.slider-container');
	const track = $('.slider-track-icon');
	const item = $('.slider__item-icon');
	const btnPrev = $('.btn-prev');
	const btnNext = $('.btn-next');

	const itemCount = item.length;
	const itemWidth = container.width() / slidesToShow;

	console.log(itemWidth);

	const movePosition = slidesToScroll * itemWidth; 

	item.each(function(index,item){
		$(item).css({
			minWidth:itemWidth,
		});
	});



	btnPrev.click(function(){
		const itemRight = Math.abs(position)/itemWidth;
		position += itemRight >= slidesToScroll ? movePosition : itemRight*itemWidth;
		if(itemRight ===0){
			position = -((itemCount- slidesToShow)*itemWidth);
			
		}
		setPosition();
	});

	btnNext.click(function(){
	const itemLeft = itemCount - (Math.abs(position) + slidesToShow*itemWidth)/itemWidth;
		position -= itemLeft >= slidesToScroll ? movePosition : itemLeft*itemWidth;
		if(itemLeft===0){
			
			position = 0;
		}
		setPosition();
	});


	const NextSlide = () =>{
		const itemLeft = itemCount - (Math.abs(position) + slidesToShow*itemWidth)/itemWidth;
		position -= itemLeft >= slidesToScroll ? movePosition : itemLeft*itemWidth;
		if(itemLeft===0){
			
			position = 0;
		}
		setPosition();
		

	}

	const setPosition = () => {
		track.css({
			transform: 'translateX('+position+'px)',
		});
	}

	

	

});
$(window).resize(function(){

	let position = 0;
	const slidesToShow = 1;
	const slidesToScroll = 1;

	const container = $('.slider-container');
	const track = $('.slider-track-icon');
	const item = $('.slider__item-icon');
	const btnPrev = $('.btn-prev');
	const btnNext = $('.btn-next');

	const itemCount = item.length;
	const itemWidth = container.width() / slidesToShow;

	console.log(itemWidth);

	const movePosition = slidesToScroll * itemWidth; 


	item.each(function(index,item){
		$(item).css({
			minWidth:itemWidth,
		});
	});

	

	btnPrev.click(function(){
		const itemRight = Math.abs(position)/itemWidth;
		position += itemRight >= slidesToScroll ? movePosition : itemRight*itemWidth;
		if(itemRight ===0){
			position = -((itemCount- slidesToShow)*itemWidth);
			
		}
		setPosition();
	});

	btnNext.click(function(){
	const itemLeft = itemCount - (Math.abs(position) + slidesToShow*itemWidth)/itemWidth;
		position -= itemLeft >= slidesToScroll ? movePosition : itemLeft*itemWidth;
		if(itemLeft===0){
			
			position = 0;
		}
		setPosition();
	});


	const NextSlide = () =>{
		const itemLeft = itemCount - (Math.abs(position) + slidesToShow*itemWidth)/itemWidth;
		position -= itemLeft >= slidesToScroll ? movePosition : itemLeft*itemWidth;
		if(itemLeft===0){
			
			position = 0;
		}
		setPosition();
		

	}

	const setPosition = () => {
		track.css({
			transform: 'translateX('+position+'px)',
		});
	}

	

	
setPosition();
});