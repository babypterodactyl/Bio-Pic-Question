/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
  name: "Baby Pterodactyl",
  role: "Front End Developer",
  contactInfo: "sasha@babypterodactyl.com",
  picture: "https://cdn.pterodactyl.io/site-assets/logo-icon.png",
  welcomeMessage: "Hello, welcome to my page.",
  skills: ["HTML", "CSS", "JavaScript"]
};

var formattedBiopic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").prepend(bio.picture);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedContact = HTMLcontactGeneric.replace("%contact%", "Contact Me").replace("%data%",bio.contactInfo);
$("#lets-connect").append(formattedContact);
