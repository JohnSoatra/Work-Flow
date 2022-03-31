import { regHex } from "./values.js";

function extractValue(string) {
    let result = "";
    for (const char of string.toString()) {
        if (char !== " ") {
            result += char;
        } else {
            return result;
        }
    }
    return result;
}

function isHex(number) {
    return regHex.test(number);
}

function checkPercentage(string) {
    let result = string;
    if (string.endsWith("p")) {
        result = string.slice(0, string.length - 1) + "%";
    }
    return result;
}

function isColor(short) {
    switch(short) {
        case "fi-":
        case "bc-":
        case "blc-":
        case "brc-":
        case "blc-":
        case "btc-":
        case "bbc-":
        case "bgc-":
        case "tdc-":
        case "c-":
        // data-title
        case "dt-fi-":
        case "dt-bc-":
        case "dt-blc-":
        case "dt-brc-":
        case "dt-blc-":
        case "dt-btc-":
        case "dt-bbc-":
        case "dt-bgc-":
        case "dt-tdc-":
        case "dt-c-": return true;
        default: return false;
    }
}

function filterShort(short) {
    switch (short) {
        case "bfb-":
        case "dt-bfb-": return true;
        default: return false;
    }
}

function validateValue(short, value, dimen) {
    let result;
    if (isColor(short)) {
        if(isHex(value)) {
            result = dimen + value;
        } else {
            result = value
        }
    } else {
        value = checkPercentage(value);
        result = + value || value;
        if (typeof(result) === "number") {
            result = result + dimen;
        }
        if(filterShort(short)) {
            result = `blur(${result})`;
        }
    }
    return result;
}

function getClassValue(classes, short) {
    const slices = classes.split(short);
    const lastIndex = slices.length - 1;
    if (slices.length > 1) {
        return extractValue(slices[lastIndex]);
    } else {
        return null;
    }
}

function arrayToString(array) {
    let result = "";
    for (const value of array) {
      result += value;
    }
    return result;
}

function objectToString(pairs) {
    let result = "{";
    for (const key in pairs) {
        result += `${key}: ${pairs[key]};`
    }
    return result + "}";
}

function getSize() {
    let size = ["xs"];
    const width = window.innerWidth;
    if (width > 1200) size.push("xl");
    if (width > 992) size.push("lg");
    if (width > 768) size.push("md");
    if (width > 576) size.push("sm");
    return size;
}
  
function getSizeDown() {
    let size = [];
    const width = window.innerWidth;
    if (width > 1200) size.push("xl");
    if (width <= 1200) size.push("lg");
    if (width <= 992) size.push("md");
    if (width <= 768) size.push("sm")
    if (width <= 576) size.push("xs");
    return size;
}

function combine(selector, pairs) {
    return selector + objectToString(pairs);
}

export default {
    arrayToString,
    checkPercentage,
    combine,
    extractValue,
    filterShort,
    getClassValue,
    getSize,
    getSizeDown,
    isColor,
    isHex,
    objectToString,
    validateValue
}

export {
    arrayToString,
    checkPercentage,
    combine,
    extractValue,
    filterShort,
    getClassValue,
    getSize,
    getSizeDown,
    isColor,
    isHex,
    objectToString,
    validateValue
}
