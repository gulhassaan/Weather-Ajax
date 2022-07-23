$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=deb80464177abdf3a18332e6c496280d",
    type: "get",
    success: function(data) {
        $("#city_Name").html(data.name);
        $("#country_Name").html(data.sys.country);
        $("#main").html(data.weather[0].main);
        $("#desc").html(data.weather[0].description);
        $("#temp").html(data.main.temp);

    }
})