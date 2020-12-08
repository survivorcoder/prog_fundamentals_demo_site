function seedPlantingInformation() {
  //declare variables
  var typeOfSeed;
  var timeOfYear;
  var askAgain = true;

  //loop to prompt for type of vegetable or "done" to exit
  while (askAgain) {
    typeOfSeed = prompt('What type of seed would you like to plant? Information is available on carrots, corn, green beans, peas, pumpkins, and tomatoes. type "Done" to exit.');
    if (typeOfSeed == "done") {
      askAgain = false;
    //switch case to display type of vegetable seed
    }switch (typeOfSeed) {
      case "corn":
        alert("The earliest you would want to plant sweet corn would be around the 31st of May.  Typical harvest would begin around the 9th of August.  Plant .4 ounces of seed per 10 foot row, with 30 inches between rows, and 2 inches deep.  ");
        //additional prompt for desired month the user wishes to plant
        timeOfYear = prompt("What month of the year are you wanting to plant?");
        //if statement to display results of month selection
        if (timeOfYear == "may" || timeOfYear == "june") {
          alert("Late May to early June is the best time to plant sweet corn!");
        }else {
          alert("Planting in this time period is too late or too early to plant.  It will not survive!");
        }
        break;
      case "green beans":
        alert("Bush type green beans may be planted around the 31st of May, with typical harvest beginning on July 12th.  Plant 2 ounces of seed 1 inch deep in raised rows, spaced 24 inches apart.  Thin the seedlings to 3 inches apart.  For a second crop, green beans may be planted as late as June 28th for harvests beginning around the 9th of August.");
        timeOfYear = prompt("What month of the year are you wanting to plant?");
        if (timeOfYear == "may" || timeOfYear == "june") {
          alert("Late May to early June is the best time to plant green beans!");
        }else {
          alert("Planting in this time period is too late or too early to plant.  It will not survive outdoors, but it may be possible in a cold frame.");
        }
        break;
      case "peas":
        alert("Early peas may be planted as soon as April 12th, with harvests beginning around June 7th.  Plant 3 ounces of seed 1 to 2 inches deep in raised rows, spaced 30 inches apart.  Thin the seedlings 1 to 3 inches apart. You can plant a second crop as late as the 21st of June (protect from the heat), with harvest starting around the 16th of August.");
        timeOfYear = prompt("What month of the year are you wanting to plant?");
        if (timeOfYear == "may" || timeOfYear == "june") {
          alert("Late May to early June is the best time to plant green beans!");
        }else {
          alert("Planting in this time period is too late or too early to plant.  It will not survive outdoors, but it may be possible in a cold frame.");
        }
        break;
        case "carrots":
        alert("First planting of carrots can be done as early as May 10th, with harvests begining around July 19th.  Plant .1 of an ounce of carrot seed in 24 inch wide raised rows, about 1/4 inch deep and about 2 inches apart after thinning.  You can plant additional carrots for further harvest as late as June 21st (protect from the heat), with harvests starting around the 30th of August. ");
        timeOfYear = prompt("What month of the year are you wanting to plant?");
        if (timeOfYear == "may" || timeOfYear == "june") {
          alert("Late May to early June is the best time to plant carrots!");
        }else {
          alert("Planting in this time period is too late or too early to plant.  It will not survive outdoors, but it may be possible in a cold frame.");
        }
        break;
        case "pumpkins":
        alert("For pumpkins you would need to start the seeds indoors around May 31st, and then plant the seedlings outdoors around June 21st.  Typical harvests would be possible around August 30th.  Plant 1/2 of seed 1 inch deep in rows 72 inches apart, in raised hills.  Thin to a distance of 12 inches");
        timeOfYear = prompt("What month of the year are you wanting to plant?");
        if (timeOfYear == "may" || timeOfYear == "june") {
          alert("Late May to early June is the best time to plant pumpkins!");
        }else {
          alert("Planting in this time period is too late or too early to plant.  It will not survive!");
        }
        break;
        case "tomatoes":
        alert("Tomatoes should be started indoors around April 26th or earlier, then planted outdoors by June 14th.  Harvests would start around the 9th of August and continue until the last frost.  Tomatoes can be planted as early as the end of May for earlier harvest, but watch out for late frosts! ");
        timeOfYear = prompt("What month of the year are you wanting to plant?");
        if (timeOfYear == "may" || timeOfYear == "june") {
          alert("Late May to early June is the best time to plant tomatoes!");
        }else {
          alert("Planting in this time period is too late or too early to plant.  It will not survive unless in a hot house or cold frame.");
        }
        break;
    }
  }


}

seedPlantingInformation();