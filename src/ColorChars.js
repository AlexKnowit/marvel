export const pulse = (color) => {
  console.log(color);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hue: color }),
  };
  fetch(
    "http://192.168.1.143/api/-S4DMGMLjPx7dfRIbkUaesle1ZPbRKO10hvZOGR0/lights/1/state",
    requestOptions
  ).then((response) => response.json());
  fetch(
    "http://192.168.1.143/api/-S4DMGMLjPx7dfRIbkUaesle1ZPbRKO10hvZOGR0/lights/2/state",
    requestOptions
  ).then((response) => response.json());
  fetch(
    "http://192.168.1.143/api/-S4DMGMLjPx7dfRIbkUaesle1ZPbRKO10hvZOGR0/lights/3/state",
    requestOptions
  ).then((response) => response.json());
};

export const spiderman = (color) => {
  console.log(color);
  const red = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hue: 65535 }),
  };
  const blue = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hue: 65535 }),
  };
  fetch(
    "http://192.168.1.143/api/-S4DMGMLjPx7dfRIbkUaesle1ZPbRKO10hvZOGR0/lights/1/state",
    red
  ).then((response) => response.json());
  fetch(
    "http://192.168.1.143/api/-S4DMGMLjPx7dfRIbkUaesle1ZPbRKO10hvZOGR0/lights/2/state",
    blue
  ).then((response) => response.json());
  fetch(
    "http://192.168.1.143/api/-S4DMGMLjPx7dfRIbkUaesle1ZPbRKO10hvZOGR0/lights/3/state",
    red
  ).then((response) => response.json());
};
