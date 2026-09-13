
import * as fs from "fs";
import * as path from "path";

export async function wait_util(milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}

export async function takeScreenshot(page,fileName) {

    const screenshotFolder = path.join(process.cwd(), "screenshots");
    if (!fs.existsSync(screenshotFolder)) {
        fs.mkdirSync(screenshotFolder, { recursive: true });
    }
    const filePath = path.join(screenshotFolder, `${fileName}.png`);
    await page.screenshot({path: filePath,fullPage: true});

    console.log(`Screenshot saved: ${filePath}`);
}

export function readTextFile(filePath) {
    return fs.readFileSync(filePath, "utf-8");
}

export function writeTextFile(filePath, content) {
    fs.writeFileSync(filePath, content, "utf-8");
}

export function getCurrentDate() {
    const date = new Date();
    return date.toISOString().split("T")[0];
}

export function getCurrentDateTime() {
    const date = new Date();
    return date.toISOString();
}

export function getTimestamp() {
    return Date.now();
}

export function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex =
            Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

export function generateRandomNumber(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function generateRandomEmail() {
    return `test${Date.now()}@example.com`;
}

export function getEnvironmentValue(variableName) {
    const value = process.env[variableName];
    if (!value) {
        throw new Error(`Environment variable '${variableName}' is not defined.`);
    }
    return value;
}


export function readJsonFile(filePath) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
}

export function writeJsonFile(filePath, data) {
    const jsonContent = JSON.stringify(data, null,4);
    fs.writeFileSync(filePath,jsonContent,"utf-8");
}

export function isEmpty(value) {
    return value.trim().length === 0;
}

export function removeSpaces(value) {
    return value.replace(/\s+/g, "");
}

export function convertToUpperCase(value) {
    return value.toUpperCase();
}

export function convertToLowerCase(value) {
    return value.toLowerCase();
}

export function logInfo(message) {
    console.log(`[INFO] ${message}`);
}

export function logWarning(message) {
    console.warn(`[WARNING] ${message}`);
}

export function logError(message) {
    console.error(`[ERROR] ${message}`);
}

export function logDebug(message) {
    console.debug(`[DEBUG] ${message}`);
}

export async function attachScreenshotToAllure(page, fileName) {
    const screenshot = await page.screenshot({fullPage: true});

    // Allure attachment is handled by the BDD/Allure integration.
    // The screenshot buffer can be attached through the framework's
    // Allure attachment mechanism.

    console.log(`Allure screenshot captured: ${fileName}`);
}