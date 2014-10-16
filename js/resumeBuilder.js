var work = {
    jobs : [
        {
            "employer" : "Abc",
            "title" : "def",
            "dates" : "February 2000 - September 2001",
            "description" : "abaklkjl"
        },
        {
            "employer" : "xyz",
            "title" : "chif",
            "dates" : "Deceber 2001 - August 2002",
            "descritption" : "akjlkjlkjlkjlkj"
        }
    ]
};
var project = {
    "projects": [
        {
            "title" : "proj 1",
            "dates" : "2010"
            "description" : "alkjflkjdslfkj"
        },
        {
            "title" : "proj 2",
            "dates" : "2010 - 2012",
            "description" : "akdfjlkj"
        }
    ]
};
var bio = {
"name" : "Artur",
"role" : "Developer",
"contactInfo" : {
"mobile" : "123222",
"email" : "abc@gmail.com",
"location" : "Poland",
"other" : "no info"
},
"pictureUrl" : pictureURL,
"welcomeMsg" : welcomeMsg
};
var education = {
    "schools" : [
        {
            "name" : "Liceum",
            "city" : "Wysokie Maz.",
            "degree" : "mature",
            "dates" : 1994
        },
        {
            "name" : "Politechnika Bia³ostocka",
            "city" : "Bia³ystok",
            "degree" : "Master",
            "dates" : 1999
        }
    ],
    "onlineCourses": [
        {
            "title" : "JavaScript Crash Curse",
            "school" : "Udacity",
            "dates" : 2014,
            "url" : "http://www.udacity.com"
        }
    ]
};

$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});