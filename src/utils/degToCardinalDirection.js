//Convert degrees to cardinal direction
const degToInterCardinal = (deg) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round((deg + 11.25) / 22.5) % 16;
    return directions[index];
};
export default degToInterCardinal;