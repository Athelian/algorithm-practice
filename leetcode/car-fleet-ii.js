/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  let time = 0;
  let collisionTime;
  let firstCollisionCars;
  let firstCollisionTime;
  let i;

  const res = Array(cars.length).fill(-1);
  cars = cars.map((car, index) => [car[0], car[1], index]);

  while (true) {
    firstCollisionCars = [];
    firstCollisionTime = 99999999;
    i = 1;

    while (i < cars.length) {
      if (cars[i][1] > cars[i - 1][1]) {
        i++;
        continue;
      }

      collisionTime =
        (cars[i][0] - cars[i - 1][0]) / (cars[i - 1][1] - cars[i][1]);

      if (collisionTime < firstCollisionTime) {
        firstCollisionCars = [[i - 1, cars[i - 1][2]]];
        firstCollisionTime = collisionTime;
      } else if (collisionTime === firstCollisionTime) {
        firstCollisionCars.push([i - 1, cars[i - 1][2]]);
      }
      i++;
    }

    if (firstCollisionCars.length === 0) break;

    time += firstCollisionTime;

    for (let i = firstCollisionCars.length - 1; i >= 0; i--) {
      res[firstCollisionCars[i][1]] = time < 99999999 ? time : -1;
      cars.splice(firstCollisionCars[i][0], 1);
    }

    cars.forEach((car) => {
      car[0] += car[1] * firstCollisionTime;
    });
  }

  return res;
};

getCollisionTimes([
  [1, 4],
  [4, 5],
  [7, 1],
  [13, 4],
  [14, 3],
  [15, 2],
  [16, 5],
  [19, 1],
]);
