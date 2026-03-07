const cardContainer = document.getElementById("card-container");
const totalIssues = document.getElementById("total-issues")

async function loadIssues(){
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"

    const res = await fetch(url)
    const data = await res.json();
    displayIssues(data.data);

}

function displayIssues(issues){
    // console.log(issues)
    issues.forEach(issue =>{
        // console.log(issue)
        const div = document.createElement("div")
        div.innerHTML =`<div class="w-80 h-full bg-white rounded-xl shadow-md border-t-4 border-green-500 p-4 ">

                    <div class="flex justify-between items-center mb-3">
                    <div class="w-8 h-8 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                        <img src="./assets/Open-Status.png" alt="">
                    </div>

                    <span class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-semibold">
                        HIGH
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