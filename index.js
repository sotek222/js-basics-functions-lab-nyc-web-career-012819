function distanceFromHqInBlocks(block){
  if (block >= 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
};

function distanceTravelledInFeet(block1, block2){
  return (block1 >= block2) ? ((block1 - block2) * 264) : ((block2 - block1) * 264);
};



function distanceFromHqInFeet(block){
  return distanceTravelledInFeet(block, 42);
};

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if(distanceTravelledInFeet(start, destination) >= 2500){
    return 'cannot travel that far';
  } else if(distanceTravelledInFeet(start, destination) >= 2000){
    return 25;
  } else {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  }
}
