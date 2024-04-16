function rotateTopLeft(pic, degreesAmount)
{
    pic.loadPixels();
    rotatedPic = createImage(pic.width, pic.height);
    rotatedPic.loadPixels();

    for (i = 0; i < pic.width; i++)
    {
        for (j = 0; j < pic.height; j++)
        {
            pixel = myGetPixel(i, j, pic, false);

            length = sqrt(i**2 + j**2);
            angle = atan(i / j);

            angle += degreesAmount;

            y = round(cos(angle) * length);
            x = round(sin(angle) * length);

            if (x < pic.width && y < pic.height && x > 0 && y > 0) {
                mySetPixel(x, y, rotatedPic, pixel[0], pixel[1], pixel[2], pixel[3], false, false);
            }
        }
    }

    rotatedPic.updatePixels();

    return rotatedPic;
}

function rotateMiddle(pic, degreesAmount)
{
    pic.loadPixels();
    rotatedPic = createImage(pic.width, pic.height);
    rotatedPic.loadPixels();

    for (i = 0; i < pic.width; i++)
    {
        for (j = 0; j < pic.height; j++)
        {
            pixel = myGetPixel(i, j, pic, false);

            x0 = i - pic.width / 2;
            y0 = j - pic.height / 2;

            length = sqrt(x0**2 + y0**2);
            pixelAngle = atan(y0 / x0);

            if (i < width / 2) {
                pixelAngle += degreesAmount + 90;
            } else {
                pixelAngle += degreesAmount - 90;
            } 

            x = round(sin(pixelAngle) * length + pic.width / 2);
            y = round(cos(pixelAngle) * length + pic.height / 2);

            if (x < pic.width && y < pic.height && x > 0 && y > 0) {
                mySetPixel(x, y, rotatedPic, pixel[0], pixel[1], pixel[2], pixel[3], false, false);
            }
        }
    }
    rotatedPic.updatePixels();

    return rotatedPic;
}

function fixBlankSpots(pic)
{
    pic.loadPixels()
    for (i = 0; i < pic.width; i++)
    {
        for (j = 0; j < pic.height; j++)
        {
            pixel = myGetPixel(i, j, pic, false);
            // Check if blank
            if (pixel[3] == 0) {
                // Get surrounding pixels
                surroundingPixels = [];
                // Get top pixel
                if (i - 1 > 0) {
                    surroundingPixels.push(myGetPixel(i - 1, j, pic, false));
                }
                if (i + 1 < pic.width) {
                    surroundingPixels.push(myGetPixel(i + 1, j, pic, false));
                }
                if (j - 1 > 0) {
                    surroundingPixels.push(myGetPixel(i, j - 1, pic, false));
                }
                if (j + 1 < 0) {
                    surroundingPixels.push(myGetPixel(i, j + 1, pic, false));
                }
                averagePixel = [0, 0, 0];
                isolated = true;
                for (p = 0; p < surroundingPixels.length; p++) {
                    averagePixel[0] += surroundingPixels[p][0];
                    averagePixel[1] += surroundingPixels[p][1];
                    averagePixel[2] += surroundingPixels[p][2];
                    if (surroundingPixels[p][3] != 255) {
                        isolated = false;
                    } 
                }
                averagePixel[0] /= surroundingPixels.length;
                averagePixel[1] /= surroundingPixels.length;
                averagePixel[2] /= surroundingPixels.length;
                if (isolated) {
                    mySetPixel(i, j, pic, averagePixel[0], averagePixel[1], averagePixel[2], 255, false, false);
                }
            }
        }
    }
    pic.updatePixels();
}