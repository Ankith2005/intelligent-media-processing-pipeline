const db = require("../config/db");

const getResult = (req, res) => {
    const processingId = req.params.processing_id;

    const sql = `
        SELECT
            image_id,
            original_name,
            status,
            analysis_result,
            failure_reason,
            created_at
        FROM images
        WHERE image_id = ?
    `;

    db.query(sql, [processingId], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Processing ID not found"
            });
        }

        // Convert JSON string into object
        if (result[0].analysis_result) {
            result[0].analysis_result = JSON.parse(result[0].analysis_result);
        }

        return res.status(200).json(result[0]);
    });
};

module.exports = {
    getResult
};