function mySetPixel(x, y, pic, r, g, b, a) {
    pic.loadPixels();

    pixelStartIndex = (x + pic.width * y) * 4;

    pic.pixels[pixelStartIndex] = r;
    pic.pixels[pixelStartIndex + 1] = g;
    pic.pixels[pixelStartIndex + 2] = b;
    pic.pixels[pixelStartIndex + 3] = a;

    pic.updatePixels();
}

function myGetPixel(x, y, pic) {
    pic.loadPixels();

    pixelStartIndex = (x + pic.width * y) * 4;

    result = [
        pic.pixels[pixelStartIndex],
        pic.pixels[pixelStartIndex + 1],
        pic.pixels[pixelStartIndex + 2],
        pic.pixels[pixelStartIndex + 3],
    ];

    return result;
}