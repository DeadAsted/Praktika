ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.05546774299909,74.58495233317133],
            zoom: 20
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.0554361430562,74.58536506779305])

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});