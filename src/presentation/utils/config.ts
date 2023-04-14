export const GOOGLE_MAPS_APIKEY = "AIzaSyAvSk5OZVpUGhz8J4vPlOWvFU6yvyLJFVI";

export const converter = (currentMin: number) => {
  const moduleHour = Math.floor(currentMin / 60);
  const moduleMin = currentMin % 60;
  const hours = `00${moduleHour}`.slice(-2);
  const minutes = `00${moduleMin}`.slice(-2);

  return `${hours}hr:${minutes}min`;
};
