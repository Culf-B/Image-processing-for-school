function mySetPixel(x, y, pic, r, g, b, a, doLoad = true, doUpdate = true) {
    if (doLoad) {
        pic.loadPixels();
    }

    pixelStartIndex = (x + pic.width * y) * 4;

    pic.pixels[pixelStartIndex] = r;
    pic.pixels[pixelStartIndex + 1] = g;
    pic.pixels[pixelStartIndex + 2] = b;
    pic.pixels[pixelStartIndex + 3] = a;

    if (doUpdate) {
        pic.updatePixels();
    }
}

function myGetPixel(x, y, pic, doLoad = true) {
    if (doLoad) {
        pic.loadPixels();
    }

    pixelStartIndex = (x + pic.width * y) * 4;

    return [
        pic.pixels[pixelStartIndex],
        pic.pixels[pixelStartIndex + 1],
        pic.pixels[pixelStartIndex + 2],
        pic.pixels[pixelStartIndex + 3],
    ];
}