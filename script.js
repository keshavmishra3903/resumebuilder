function addMoreSkills() {
    const node = document.getElementById("skills-div");
    const clone = node.cloneNode(true);
    document.getElementById("skill-set").appendChild(clone);
}

function addMoreAffiliations() {
    const node = document.getElementById("affiliations-div");
    const clone = node.cloneNode(true);
    document.getElementById("affiliations-set").appendChild(clone);
}

function addMoreProskills() {
    const node = document.getElementById("proskills-div");
    const clone = node.cloneNode(true);
    document.getElementById("proskills-set").appendChild(clone);
}

function addMoreWh() {
    const node = document.getElementById("wh-div");
    const clone = node.cloneNode(true);
    document.getElementById("wh-set").appendChild(clone);
}

function addMoreEdu() {
    const node = document.getElementById("edu-div");
    const clone = node.cloneNode(true);
    document.getElementById("edu-set").appendChild(clone);
}

function generateResume() {
    document.getElementById('master-form').style.display = 'none';
    document.getElementById('cv-temp-main').style.display = 'block';


    let name = document.getElementById('name').value;
    let nametemp = document.getElementById('name-temp');
    if (name == "") {
        nametemp.innerHTML = "(No Name)";
    }
    else {
        nametemp.innerHTML = name;
    }

    let contact = document.getElementById('contact').value;
    let numberstemp = document.getElementById('numbers-temp');
    if (contact == "") {
        numberstemp.innerHTML = "(No Contacts)";
    }
    else {
        numberstemp.innerHTML = contact;
    }

    let location = document.getElementById('location').value;
    let locationtemp = document.getElementById('location-temp');
    if (location == "") {
        locationtemp.innerHTML = "(No Location)";
    }
    else {
        locationtemp.innerHTML = location;
    }

    let email = document.getElementById('email').value;
    let emailtemp = document.getElementById('email-temp');
    if (email == "") {
        emailtemp.innerHTML = "(No E-mail)"
    }
    else {
        emailtemp.innerHTML = email;
    }

    let summary = document.getElementById('summary').value;
    let summarytemp = document.getElementById('summary-temp');
    if (summary == "") {
        summarytemp.innerHTML = "(Professional Summary not entered)";
    }
    else {
        summarytemp.innerHTML = summary;
    }

    let eduarr = document.getElementsByName('education');
    let str = "";
    for (let e of eduarr) {
        str = str + "<li>eduarr[e].value</li>"
    }
    document.getElementById('education-temp').innerHTML = str;

    let skillsarr = document.getElementsByName('skills');
    let skillsstr = "";
    for (let e of skillsarr) {
        skillsstr = skillsstr + "<li>skillsarr[e].value</li>"
    }
    document.getElementById('skills-temp').innerHTML = skillsstr;

    let affilarr = document.getElementsByName('affiliations');
    let affilstr = "";
    for (let e of affilarr) {
        affilstr = affilstr + "<li>afflilarr[e].value</li>"
    }
    document.getElementById('affiliations-temp').innerHTML = affilstr;
}

function printResume() {
    window.print();
}