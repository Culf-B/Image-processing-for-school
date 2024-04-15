function flipAroundVerticalAxis(pic) {
    pic.loadPixels();

    for (i = 0; i < pic.width / 2; i++) {
        for (j = 0; j < pic.height; j++) {
            pLeft = myGetPixel(i, j, pic, false);
            pRight = myGetPixel(pic.width - i, j, pic, false);

            mySetPixel(i - 1, j, pic, pRight[0], pRight[1], pRight[2], pRight[3], false, false);
            mySetPixel(pic.width - i, j, pic, pLeft[0], pLeft[1], pLeft[2], pLeft[3], false, false);
        }
    }

    pic.updatePixels();
}