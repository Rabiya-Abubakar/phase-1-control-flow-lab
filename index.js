function scuberGreetingForFeet(distance) {
  // gives customers a free sample if the ride is less than or equal to 400 feet
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  }
}


function ternaryCheckCity(city){
  // Write your code here! charges 20 dollars for a distance between 400 and 2000 feet
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip){
  // Write your code here!
      switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }
  



