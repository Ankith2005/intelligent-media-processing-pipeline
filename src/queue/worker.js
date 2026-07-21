const db = require("../config/db");
const processImage = require("../services/imageProcessor");
const { getNextJob } = require("./queue");

const startWorker = () => {
    setInterval(() => {
        const job = getNextJob();

        if (!job) {
            return;
        }

        console.log("Processing:", job.imageId);

        db.query(
            "UPDATE images SET status = ? WHERE image_id = ?",
            ["processing", job.imageId],
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                setTimeout(async () => {

                const analysisResult = await processImage(job.filePath);

                db.query(
                    "UPDATE images SET status = ?, analysis_result = ? WHERE image_id = ?",
                [
                     "completed",
                        JSON.stringify(analysisResult),
                         job.imageId
                ],
                (err) => {
                     if (err) {
                        console.log(err);
                        return;
                    }

                    console.log("Completed:", job.imageId);
                }
                );

                }, 3000);
            }
        );
    }, 1000);
};

module.exports = startWorker;