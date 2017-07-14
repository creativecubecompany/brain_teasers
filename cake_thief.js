const cake_tuples = [
  [7, 160],
  [3, 90],
  [2, 15]
];
const capacity = 20;

//Temp Data
let cake_type = 0;
let volume = 0;
let max_value = 0;
let weight = 0;


// Final Data
let cake_type_and_volume = [];
let total_value = 0;
let remaining_capacity = capacity;

function remove_cake(){
	// Which cake do you take more of
  for (i = 0; i < cake_tuples.length; i++) {
    let current_weight = cake_tuples[i][0];
    let current_volume = Math.floor(remaining_capacity / current_weight);
    let value = current_volume * cake_tuples[i][1];
    if (value > max_value) {
      max_value = value;
      cake_type = i;
      volume = current_volume;
      weight = current_weight;
    }
  }
  
  // remaining capacity
  remaining_capacity = remaining_capacity - ( weight * volume);
  
  // remove cake type
  cake_tuples.splice(cake_type, cake_type);

  // track cake type and cake volume
	cake_type_and_volume.push([cake_type, volume, max_value]);
  
  max_value = 0;
}

// Find how many cakes are needed from each cake type
while( remaining_capacity > 0 && cake_tuples.length > 0 ){
	remove_cake();
}

// Add the max values together
for (j = 0; j < cake_type_and_volume.length; j++) {
	total_value = total_value + cake_type_and_volume[j][2];
}


alert(total_value);
