console.log("Yes")
function bgColor(id, number) {
    let bgColorChange = document.getElementById(id);
    let randomNumber = Math.random(number) * 5;
    let randoms = Math.floor(randomNumber);
    console.log(randoms);
    if (randoms === 0) {
        bgColorChange.style.backgroundColor = "#EB5A3C";
    }
    if (randoms === 1) {
        bgColorChange.style.backgroundColor = "#09122C";
    }
    if (randoms === 2) {
        bgColorChange.style.backgroundColor = "#4B164C";
    }
    if (randoms === 3) {
        bgColorChange.style.backgroundColor = "#3674B5";
    }
    if (randoms === 4) {
        bgColorChange.style.backgroundColor = "#E52020";
    }
    if (randoms === 5) {
        bgColorChange.style.backgroundColor = "#3D8D7A";
    }
    if (randoms === 6) {
        bgColorChange.style.backgroundColor = "#FFB200";
    }
    if (randoms === 7) {
        bgColorChange.style.backgroundColor = "#003092";
    }
    if (randoms === 8) {
        bgColorChange.style.backgroundColor = "#443627";
    }
    if (randoms === 9) {
        bgColorChange.style.backgroundColor = "#AC1754";
    }
    if (randoms === 10) {
        bgColorChange.style.backgroundColor = "#AC1754";
    }

}


function createDate(id) {
    let newDate = document.getElementById(id);
    let obj = {
        month: "long",
        day: "numeric",
        year: "numeric"
    }
    let date1 = new Date();
    let curentDate = date1.toLocaleDateString('en-BD', obj);
    newDate.innerText = curentDate;
}

function days(id) {
    let newdays = document.getElementById(id);
    let allDayes = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    let newDate = new Date();
    let newDay = newDate.getDay();
    let actualDay = allDayes[newDay];
    newdays.innerText = actualDay
}

function disable(id) {
    let btndisable = document.getElementById(id);
    btndisable.setAttribute("disabled", true);
}

function deccress(id) {
    let newCountt = document.getElementById(id);
    let newCount = parseInt(newCountt.innerText);
    newCount -= 1;
    newCountt.innerText = newCount;
}

function incress(id) {
    let newCountt = document.getElementById(id);
    let newCount = parseInt(newCountt.innerText);
    newCount += 1;
    newCountt.innerText = newCount;
}


function addection(id, title) {
    let newDateTitle = new Date();
    let dateTitle = newDateTitle.toLocaleTimeString();
    let createtitle = document.getElementById(title).innerText;
    createtitle.innerText = dateTitle;
    let creatSection = document.getElementById(id);
    let div = document.createElement("div");
    div.innerHTML = `
   <p class="p-2 text-start bg-gray rounded-lg text-base font-normal text-paragraph">You have Complete The Task <span class="font-medium">${createtitle}</span> at<span class="font-medium"> ${dateTitle}</span></p>
    `
    creatSection.appendChild(div);
}






