const cardContainer = document.getElementById("card-container");
const totalIssues = document.getElementById("total-issues");
const btnContainer = document.getElementById("btn-container")
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const spinner = document.getElementById("loading-spinner");
const detailsModal = document.getElementById("details-container");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");



function inActive(){
    const buttons = document.querySelectorAll("#btn-container button");

    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
    });
}

function activeBtn(clickedBtn) {
    
    const buttons = document.querySelectorAll("#btn-container button");

    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
    });

    clickedBtn.classList.add("btn-primary");
    clickedBtn.classList.remove("btn-outline");
}

function showLoadingSpinner(){
    spinner.classList.remove("hidden");
    cardContainer.innerHTML = "";
}
function hideLoadingSpinner(){
    spinner.classList.add("hidden");
}