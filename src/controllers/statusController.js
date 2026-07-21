const db = require("../config/db");

const getStatus = (req, res) => {
    const processingId = req.params.processing_id;

    const sql = "SELECT image_id, status FROM images WHERE image_id = ?";

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

        return res.status(200).json({
            processing_id: result[0].image_id,
            status: result[0].status
        });
    });
};

module.exports = {
    getStatus
};