import axios from "axios";

const NO_COLOURS = 6

export const getRandomColour = async () => {
    const response = await axios.get("https://www.thecolorapi.com/random?format=json",);
    return response.data.hex.value.substring(1)
};

export const getRandomColourContrast = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/id?hex=${randomColour}&format=json`,);
    return response.data.contrast.value
};

export const getMonochromeColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=monochrome&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getMonochromeDarkColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=monochrome-dark&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getMonochromeLightColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=monochrome-light&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getAnalogicColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=analogic&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getComplementColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=complement&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getAnalogicComplementColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=analogic-complement&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getTriadColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=triad&count=${NO_COLOURS}`,)
    return response.data.colors
}

export const getQuadColourScheme = async (randomColour) => {
    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColour}&mode=quad&count=${NO_COLOURS}`,)
    return response.data.colors
}
