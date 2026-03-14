function searchBusinesses(){

let nameSearch = document.getElementById("searchName").value.toLowerCase();
let category = document.getElementById("searchCategory").value;
let locationSearch = document.getElementById("searchLocation").value.toLowerCase();

let businesses = JSON.parse(localStorage.getItem("businesses")) || [];

let results = document.getElementById("results");
results.innerHTML = "";

businesses.forEach(function(business){

let nameMatch = business.name.toLowerCase().includes(nameSearch);
let categoryMatch = category === "All" || business.service === category;
let locationMatch = business.location.toLowerCase().includes(locationSearch);

if(nameMatch && categoryMatch && locationMatch){

let card = document.createElement("div");
card.className = "business-card";

card.innerHTML = `
<h3>${business.name}</h3>
<p><strong>Category:</strong> ${business.service}</p>
<p><strong>Location:</strong> ${business.location}</p>
<p><strong>Contact:</strong> ${business.contact}</p>

<p class="rating">★★★★★</p>

<button onclick="bookAppointment('${business.name}')">
Book Appointment
</button>
`;

results.appendChild(card);

}

});

}

function bookAppointment(name){

alert("Appointment request sent to " + name);

}
