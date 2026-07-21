const numberPlateCheck = (text) => {

    const plateRegex = /\b[A-Z]{2}\d{1,2}[A-Z]{1,2}\d{4}\b/g;

    const matches = text.toUpperCase().match(plateRegex);

    if (matches && matches.length > 0) {
        return {
            success: true,
            plateNumber: matches[0]
        };
    }

    return {
        success: false,
        plateNumber: null
    };
};

module.exports = numberPlateCheck;