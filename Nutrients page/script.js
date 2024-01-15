const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Sample data for demonstration
const allNutrients = [
{"id": 1, "name": "Carbohydrates", "tag": "Energy source"},
{"id": 2, "name": "Fats", "tag": "Energy storage"},
{"id": 3, "name": "Proteins", "tag": "Building blocks of our body"},
{"id": 4, "name": "Vitamin A", "tag": "Supports vision and immune system"},
{"id": 5, "name": "Vitamin B", "tag": "Essential for metabolism"},
{"id": 6, "name": "Vitamin C", "tag": "Antioxidant, supports immunity"},
{"id": 7, "name": "Vitamin D", "tag": "Promotes bone health"},
{"id": 8, "name": "Cholesterol", "tag": "Component of cell membranes"},
{"id": 9, "name": "Fibre", "tag": "Aids digestion, supports heart health"},
{"id": 10, "name": "Sugar", "tag": "Simple carbohydrate, energy source"},
{"id": 11, "name": "Calcium", "tag": "Bone health and muscle function"},
{"id": 12, "name": "Iron", "tag": "Oxygen transport and energy production"},
{"id": 13, "name": "Magnesium", "tag": "Muscle and nerve function, bone health"},
{"id": 14, "name": "Zinc", "tag": "Immune system and wound healing"},
{"id": 15, "name": "Potassium", "tag": "Fluid balance and muscle contractions"},
{"id": 16, "name": "Omega-3 Fatty Acids", "tag": "Heart and brain health"},
{"id": 17, "name": "Vitamin E", "tag": "Antioxidant, skin health"},
{"id": 18, "name": "Vitamin K", "tag": "Blood clotting and bone health"},
{"id": 19, "name": "Selenium", "tag": "Antioxidant, thyroid function"},
{"id": 20, "name": "Copper", "tag": "Energy production, iron metabolism"},
{"id": 21, "name": "Iodine", "tag": "Thyroid function"},
{"id": 22, "name": "Folate", "tag": "Cell division and DNA synthesis"},
{"id": 23, "name": "Vitamin B3", "tag": "Essential for metabolism"},
{"id": 24, "name": "Vitamin B5", "tag": "Essential for metabolism"},
{"id": 25, "name": "Vitamin B6", "tag": "Essential for metabolism"},
{"id": 26, "name": "Vitamin B7", "tag": "Essential for metabolism"},
{"id": 27, "name": "Vitamin B12", "tag": "Essential for metabolism"},
{"id": 28, "name": "Vitamin D2", "tag": "Promotes bone health"},
{"id": 29, "name": "Vitamin D3", "tag": "Promotes bone health"},
{"id": 30, "name": "Vitamin E", "tag": "Antioxidant, skin health"},
{"id": 31, "name": "Vitamin K1", "tag": "Blood clotting and bone health"},
{"id": 32, "name": "Vitamin K2", "tag": "Blood clotting and bone health"},
{"id": 33, "name": "Vitamin B4", "tag": "Adenine"},
{"id": 34, "name": "Vitamin B8", "tag": "Inositol"},
{"id": 35, "name": "Vitamin B10", "tag": "Pteroylmonoglutamic acid"},
{"id": 36, "name": "Vitamin B11", "tag": "Salicylic acid"},
{"id": 37, "name": "Vitamin G", "tag": "Riboflavin"},
{"id": 38, "name": "Vitamin H", "tag": "Biotin"},
{"id": 39, "name": "Vitamin J", "tag": "Catechins"},
{"id": 40, "name": "Vitamin L", "tag": "Anthranilic acid"},
{"id": 41, "name": "Vitamin M", "tag": "Folic Acid"},
{"id": 42, "name": "Vitamin O", "tag": "Ferulic Acid"},
{"id": 43, "name": "Vitamin P", "tag": "Bioflavonoids"},
{"id": 44, "name": "Vitamin U", "tag": "S-Methylmethionine"},
{"id": 45, "name": "Boron", "tag": "Mineral"},
{"id": 46, "name": "Vanadium", "tag": "Mineral"},
{"id": 47, "name": "Nickel", "tag": "Mineral"},
{"id": 48, "name": "Silicon", "tag": "Mineral"},
{"id": 49, "name": "Tin", "tag": "Mineral"},
{"id": 50, "name": "Arsenic", "tag": "Mineral"},
{"id": 51, "name": "Sulfur", "tag": "Mineral"},
{"id": 52, "name": "Omega-6 Fatty Acids", "tag": "Essential Fatty Acids"},
{"id": 53, "name": "Essential Amino Acids", "tag": "Amino Acids"},
{"id": 54, "name": "Choline", "tag": "Essential Nutrient"},
{"id": 55, "name": "Water", "tag": "Essential Nutrient"},
{"id": 56, "name": "Fiber", "tag": "Essential Nutrient"},
{"id": 57, "name": "Nucleotides", "tag": "Essential Nutrient"},
{"id": 58, "name": "Carnitine", "tag": "Essential Nutrient"},
{"id": 59, "name": "Coenzyme Q10", "tag": "Essential Nutrient"},
{"id": 60, "name": "Lipoic Acid", "tag": "Essential Nutrient"},
];

 // Display initial results on page load
displayResults(allNutrients);

searchInput.addEventListener('input', function () {
const searchTerm = searchInput.value.toLowerCase();
const filteredResults = allNutrients.filter(nutrient =>
nutrient.name.toLowerCase().includes(searchTerm) ||
nutrient.tag.toLowerCase().includes(searchTerm)
);

displayResults(filteredResults);
});

function displayResults(results) {
searchResults.innerHTML = '';

if (results.length === 0) {
  // Display "No results found" message
  const noResultsMessage = document.createElement('div');
  noResultsMessage.classList.add('result-box');
  noResultsMessage.textContent = 'No results found';
  searchResults.appendChild(noResultsMessage);
} else {
  // Display results
  for (let i = 0; i < Math.min(results.length, 7); i++) {
    const resultBox = document.createElement('div');
    resultBox.classList.add('result-box');

    // Create a <span> element for the nutrient name and style it
    const nameSpan = document.createElement('span');
    nameSpan.style.fontWeight = 'bold';
    nameSpan.style.fontSize = '1.5em'; // Adjust the size as needed
    nameSpan.textContent = results[i].name;

    // Create a <span> element for the tag and style it
    const tagSpan = document.createElement('span');
    tagSpan.style.fontSize = '0.9em'; // Adjust the size as needed
    tagSpan.textContent = results[i].tag;

    // Append the spans to the result box
    resultBox.appendChild(nameSpan);
    resultBox.appendChild(document.createElement('br')); // Line break
    resultBox.appendChild(tagSpan);

    searchResults.appendChild(resultBox);
  }
}
}