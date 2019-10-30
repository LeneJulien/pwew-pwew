function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    for (var j = 0; j < enemies.length; j++){
        rand = Math.floor(Math.random() * 4);
        if (rand <= 1)
            enemies[j].turnLeft(rotateAngle);
        else if (rand <= 2)
            enemies[j].turnRight(rotateAngle);
        else if (rand <= 3)
            enemies[j].accelerate(moveDistance);
        else if (rand <= 4)
            enemies[j].decelerate(moveDistance);
        enemies[j].move()
    }

    player1.move();
    controls.update();
}