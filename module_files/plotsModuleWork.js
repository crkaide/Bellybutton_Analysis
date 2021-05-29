// Module work



// Line charts
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);



// Bar charts
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  Plotly.newPlot("plotArea", [trace]);

//  var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  }];
//  Plotly.newPlot("plotArea", trace);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };
//
// var layout = {
//     title: "Luncheon Survey"
// };
//
// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };
//
// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
//
// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);



// Pie charts

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);



// Scatter charts

// var trace = {
//     x: [1, 2, 3, 4],
//     y: [10, 15, 13, 17],
//     mode: "markers",
//     type: "scatter"
//    };
//    var data = [trace];
//    Plotly.newPlot("plotArea", data);



// // Using map() to double numbers in array
// 
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);



// // Using map() to extract a specific property from each object
// // in an array
//
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];
//
// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);



// Using the filter() method

// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });
//
// console.log(larger);

// Filtering for even numbers using filter() method
// let evenNumbers = numbers.filter(number => number % 2 ==0)
// console.log(evenNumbers)



// Using map() and filter() methods as arrow function
// 
// var numbers = [1,2,3,4,5];
// 
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);



// Sorting

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);

// Appending reverse() in place of sort() to the above sorts 
// the array in descending order.

// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse(); 



// Using the slice() method on an array

// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);
//
// To slice to the end of an array, you can omit the second argument:
//
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );



// Create Arrays of City Names and Growth Figures

// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));



// Use map() method to extract the wfreq property from each “person” in the data.metadata array.
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });
//
// Sort the above:

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// Filter out null values from above:

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });



// Use Object.entries() to print each key-value pair inside an array:
//
// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking'
// };
//
// console.log(Object.entries(researcher1));



// Use forEach() to access each element of an array
//
// researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
// 'Hiking']];
//
// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));


// Display the metadata of any individual from the dataset
//
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });
//
// In this case, we are extracting the metadata of the first 
// person in the dataset, as indicated by the zero index 
// position in metadata[0]. We then use the Object.entries() 
// method to return each key-value pair in an array, and the 
// forEach()method to access each element of these pairs.







