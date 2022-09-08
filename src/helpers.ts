// Accpets a UNIX timestamp and returns a string of the date formatted as: Day Month Date Year HH:MM:SS GMT Timezone
// Example output: 'Tue Oct 06 2020 10:31:00 GMT-0500 (Central Daylight Time)'
export function convertUnixTimeToString(unixTimestamp: number): string { 
    const date: Date = new Date(unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay(); 
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const launchDate = new Date(year, month, day, hours, minutes, seconds)
    return launchDate.toString()
}