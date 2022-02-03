import { Rating } from '../Interfaces';

export function stringToBoolean(value: string) {
  switch (value.toLowerCase().trim()) {
    case 'true':
    case 'True':
    case 'yes':
    case '1':
      return true;

    case 'false':
    case 'False':
    case 'no':
    case '0':
    case null:
      return false;

    default:
      return Boolean(value);
  }
}

function parseRating(value: string) {
  if (value.includes('%')) {
    return Number(value.substring(0, value.indexOf('%'))) / 20;
  }

  if (value.substring(value.indexOf('/') + 1) === '100') {
    return Number(value.substring(0, value.indexOf('/'))) / 20;
  }

  if (value.substring(value.indexOf('/') + 1) === '10') {
    return Number(value.substring(0, value.indexOf('/'))) / 2;
  }

  return 0;
}

export function calcRating(ratings: Rating[]) {
  var sum = ratings.reduce(function (acc, obj) {
    return acc + parseRating(obj.Value);
  }, 0);

  var avg = sum / ratings.length;
  var rounded = Math.round(avg * 100) / 100;

  return rounded;
}
