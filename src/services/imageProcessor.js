const ocrCheck = require("./checks/ocrCheck");
const numberPlateCheck = require("./checks/numberPlateCheck");
const brightnessCheck = require("./checks/brightnessCheck");
const blurCheck = require("./checks/blurCheck");
const duplicateCheck = require("./checks/duplicateCheck");

const processImage = async (imagePath) => {

    const ocrResult = await ocrCheck(imagePath);

    const plateResult = numberPlateCheck(ocrResult.extractedText);

    const brightnessResult = brightnessCheck(imagePath);

    const blurResult = blurCheck(imagePath);

    const duplicateResult = duplicateCheck(imagePath);

    return {
        ocr: ocrResult,
        numberPlate: plateResult,
        brightness: brightnessResult,
        blur: blurResult,
        duplicate: duplicateResult
    };
};

module.exports = processImage;