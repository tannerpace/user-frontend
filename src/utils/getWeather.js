// create a function that accepts lat and lng as arguments
// and returns a promise that resolves with the weather data
//  from the api  @ https://api.weather.gov 

const getWeather = ({ lat, lng }) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.weather.gov/points/${lat},${lng}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const weatherUrl = data.properties.forecast;
                fetch(weatherUrl)
                    .then(res => res.json())
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};

export default getWeather;