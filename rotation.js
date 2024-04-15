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