
// Define the map structure as an array of arrays
const map = [
  ['Start', 'Forest', 'Cave'],
  ['Plain', 'Dungeon', 'Mountain'],
  ['River', 'Valley', 'End']
];

// Current location
let currentLocation = { x: 0, y: 0 };

// Get DOM elements
const locationDescription = document.getElementById('location-description');
const moveNorth = document.getElementById('move-north');
const moveSouth = document.getElementById('move-south');
const moveEast = document.getElementById('move-east');
const moveWest = document.getElementById('move-west');

// Update location description
function updateLocationDescription() {
  locationDescription.textContent = `You are at ${map[currentLocation.y][currentLocation.x]}`;
}

// Handle movement buttons
moveNorth.addEventListener('click', () => {
  if (currentLocation.y > 0) {
    currentLocation.y--;
    updateLocationDescription();
  }
});

moveSouth.addEventListener('click', () => {
  if (currentLocation.y < map.length - 1) {
    currentLocation.y++;
    updateLocationDescription();
  }
});

moveEast.addEventListener('click', () => {
  if (currentLocation.x < map[currentLocation.y].length - 1) {
    currentLocation.x++;
    updateLocationDescription();
  }
});

moveWest.addEventListener('click', () => {
  if (currentLocation.x > 0) {
    currentLocation.x--;
    updateLocationDescription();
  }
});

// Initial location description
updateLocationDescription();