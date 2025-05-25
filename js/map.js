ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
		center:[61.78989282985466,34.37863160089869],
		zoom:17
	});
	var myPlacemark = new ymaps.GeoObject({
		geometry:{
			type:"Point",
			coordinates:[61.78989282985466,34.37863160089869]},
			properties:{hintContent:'Тэйко'}
		},{
			preset:'islands#oliveVegetationIcon'});
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom')
}