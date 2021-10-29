const findMyLocation = () => {
    const status = document.querySelector('.status');


    const success = (position) => {
            console.log(position)
            const latitude = position.coords.latitude;
            const longtitude = position.coords.longtitude;
            
            
            

            const geoApiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en'


            
            fetch(geoApiUrl).then(res => res.json()).then(data => {
                status.textContent =(data.continent + '\n' +data.countryName + '\n' +  data.city + '\n' + data.locality);
                console.log(data)
            })
    
    }
    const error = () => {
        status.textContent = 'Unable to retrive your location'
    }
    navigator.geolocation.getCurrentPosition(success, error);
}


document.querySelector('.find-state').addEventListener('click', findMyLocation);