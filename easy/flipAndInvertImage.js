const flipAndInvertImage = function(image) {
    reverseRows(image);

    const flippedImage = invertImage(image);

    return flippedImage;
};

const reverseRows = (image) => {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
    }
};

const invertImage = (image) => {
    const flippedImage = [];

    for (let i = 0; i < image.length; i++) {
        let img = image[i];
        for (let j = 0; j < image.length; j++) {
            if (img[j] === 0) {
                img[j] = 1;
            } else if (img[j] === 1) {
                img[j] = 0;
            }
        }
        flippedImage.push(img);
    }

    return flippedImage;
};

console.log( flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]) );