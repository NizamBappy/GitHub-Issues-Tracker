const cardContainer = document.getElementById("card-container");
const totalIssues = document.getElementById("total-issues");
const btnContainer = document.getElementById("btn-container")
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const spinner = document.getElementById("loading-spinner")
const detailsModal = document.getElementById("details-container")
const allIssues =[];

async function loadIssues(){
    showLoadingSpinner();
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"

    const res = await fetch(url)
    const data = await res.json();
    allIssues.push(...data.data);
    hideLoadingSpinner();
    displayIssues(allIssues);

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
allBtn.addEventListener("click", ()=>{
    activeBtn(allBtn);
    showLoadingSpinner();
    cardContainer.innerHTML = "";
    displayIssues(allIssues);
    hideLoadingSpinner();
});



openBtn.addEventListener("click", ()=>{
    activeBtn(openBtn);
    showLoadingSpinner();
    const openIssues = allIssues.filter(issue => issue.status === "open");
    cardContainer.innerHTML = "";
    hideLoadingSpinner();
    displayIssues(openIssues);

});

closeBtn.addEventListener("click", ()=>{
    activeBtn(closeBtn);
    showLoadingSpinner();
    const closedIssues = allIssues.filter(issue => issue.status === "closed");
    cardContainer.innerHTML = "";
    hideLoadingSpinner();
    displayIssues(closedIssues);
});

function showLoadingSpinner(){
    spinner.classList.remove("hidden");
    cardContainer.innerHTML = "";
}
function hideLoadingSpinner(){
    spinner.classList.add("hidden");
}

async function loadIssueDetails(id){
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    // console.log(url);
    const res = await fetch(url)
    const data = await res.json()
    displayIssueDetail(data.data);
}

function displayIssueDetail(issue){
    console.log(issue)
    detailsModal.innerHTML = `
    <div class=" space-y-5">
            <h1 class="text-3xl font-bold">${issue.title}</h1>
            <div class="flex gap-3">
                <button class="bg-green-600 text-white rounded full px-4 py-1s">${issue.status}</button>
                <p class="font-semibold text-gray-400">. ${issue.assignee} .</p>
                <p class="font-semibold text-gray-400">${issue.createdAt}</p>
            </div>

            <div>
                <span class="text-xs bg-red-100 text-red-600 px-4 py-1 rounded-full font-medium">
                            BUG
                </span>

                <span class="text-xs bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full font-medium">
                    Help Wanted
                </span>
            </div>

            <p class="text-gray-400">${issue.description}</p>

            <div class="flex gap-10 bg-[#F8FAFC] p-4">
                <div>
                    <p class="text-gray-400">Assigne:</p>
                    <h3 class="font-bold text-2xl">${issue.assignee}</h3>
                </div>
                <div>
                    <p>Priority:</p>
                    <button class="bg-red-500 rounded-2xl text-white text-bold px-4 py-1">
                    ${issue.priority}
                    </button>
                </div>
            </div>

        </div>`
        document.getElementById("issue_modal").showModal();
}

function displayIssues(issues){
    // console.log(issues)
    cardContainer.innerHTML = "";

    issues.forEach(issue =>{
        // console.log(issue)
        
        const div = document.createElement("div")
        div.innerHTML =`<div class="w-80 h-full bg-white rounded-xl shadow-md border-t-4  ${issue.status === "open" ? "border-green-500" : "border-red-500"} p-4 " onclick="loadIssueDetails(${issue.id})">

                    <div class="flex justify-between items-center mb-3">
                    <div>
                       <img src="${issue.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}" alt=""/>
                    </div>

                    <span class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-semibold">
                        ${issue.priority}
                    </span>
                    </div>

                    <h2 class="font-semibold text-gray-800 text-lg mb-2">
                    ${issue.title}
                    </h2>
                    <p class="text-gray-500 text-sm mb-4 line-clamp-2">
                    ${issue.description}
                    </p>

                    <div class="flex gap-2 mb-4">
                    <span class="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                        BUG
                    </span>

                    <span class="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-medium">
                        ${issue.labels}
                    </span>
                    </div>

                    <div class="border-t pt-3 text-xs text-gray-400">
                    <span>${issue.author}</span> <br>
                    <span>${issue.createdAt}</span>
                    </div>

                </div>`
        cardContainer.appendChild(div);        
    })
    total(issues);
};

function total (issues){
    // console.log(issues.length);
    // totalIssues.innerHTML =issues.length
    totalIssues.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex items-center gap-5">
                <div class="bg-[#ECE4FF] rounded-full p-3 flex items-center justify-center">
                    <img src="./assets/Aperture.png">
                </div>
                <div>
                    <h3 class="font-bold text-2xl">${issues.length} Issues</h3>
                    <p class="text-gray-400">Track and manage your project issues</p>
                </div>
            </div>`
    totalIssues.appendChild(div)
}



loadIssues();