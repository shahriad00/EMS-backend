const isEmpty = (obj) => {
    return obj && Object.keys(obj) <= 0;
};

module.exports = {
    isEmpty,
};
