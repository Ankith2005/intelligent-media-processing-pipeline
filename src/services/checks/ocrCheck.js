const Tesseract = require("tesseract.js");

const ocrCheck = async (imagePath) => {
    try {
        const result = await Tesseract.recognize(imagePath, "eng");

        return {
            success: true,
            extractedText: result.data.text.trim()
        };
    } catch (error) {
        return {
            success: false,
            extractedText: "",
            error: error.message
        };
    }
};

module.exports = ocrCheck;