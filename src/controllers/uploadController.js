const { v4: uuidv4 } = require("uuid");
const db = require("../config/db");
const { addToQueue } = require("../queue/queue");
const uploadImage = (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            message: "No image uploaded"
        });
    }

    const imageId = uuidv4();

    const sql = `
        INSERT INTO images
        (
            image_id,
            original_name,
            file_name,
            file_path,
            file_size,
            mime_type
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
        imageId,
        req.file.originalname,
        req.file.filename,
        req.file.path,
        req.file.size,
        req.file.mimetype
    ];

    db.query(sql, values, (err) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err
            });
        }

        addToQueue({
            imageId: imageId,
            filePath: req.file.path
        });

        return res.status(201).json({
            message: "Image uploaded successfully",
            processing_id: imageId,
            status: "pending"
        });

    });

};

module.exports = {
    uploadImage
};