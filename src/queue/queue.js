const processQueue = [];

const addToQueue = (job) => {
    processQueue.push(job);
};

const getNextJob = () => {
    if (processQueue.length === 0) {
        return null;
    }

    return processQueue.shift();
};

module.exports = {
    addToQueue,
    getNextJob
};