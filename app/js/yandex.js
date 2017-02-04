	ymaps.ready(init);
	var myMap, 
	myPlacemark;
	function init(){ 
		myMap = new ymaps.Map ("map-canvas-1", {
			center: [55.660049, 37.619585],
			zoom: 10
		}); 
		var myPlacemark = new ymaps.Placemark([55.660049, 37.619585], {
			hintContent: 'TEXT'
		}, 
		{
			preset: 'twirl#redDotIcon' 
		});
		myMap.geoObjects.add(myPlacemark);
	}


	ymaps.ready(init2);
	var myMap2, 
	myPlacemark2;
	function init2(){ 
		myMap2 = new ymaps.Map ("map-canvas-2", {
			center: [55.660049, 37.619585],
			zoom: 10
		}); 
		var myPlacemark2 = new ymaps.Placemark([55.660049, 37.619585], {
			hintContent: 'TEXT'
		}, 
		{
			preset: 'twirl#redDotIcon' 
		});
		myMap2.geoObjects.add(myPlacemark2);
	}