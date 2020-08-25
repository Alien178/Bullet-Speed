function hasCollided(bullet, wall) {

    bulletRightEdge = bullet.x + bullet.weight;
    wallLeftEdge = wall.x;
  
    if (bulletRightEdge >= wallLeftEdge) {
  
      return true;
    }
  
    return false;
}