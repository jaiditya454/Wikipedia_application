let inputEle = document.getElementById("searchInput");
let contEle = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner");
inputEle.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        contEle.textContent = "";
        spinnerEle.classList.toggle("d-none");
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputEle.value;
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {search_results} = jsonData;
                spinnerEle.classList.toggle("d-none");
                for (let ele of search_results) {
                    let { title, link, description } = ele;

                    let anEle1 = document.createElement("a");
                    anEle1.textContent = title;
                    anEle1.href = link;
                    anEle1.target = "_blank";
                    anEle1.classList.add("result-title");
                    contEle.appendChild(anEle1);

                    let brEle1 = document.createElement("br");
                    contEle.appendChild(brEle1);

                    let anEle2 = document.createElement("a");
                    anEle2.textContent = link;
                    anEle2.href = link;
                    anEle2.target = "_blank";
                    anEle2.classList.add("result-url");
                    contEle.appendChild(anEle2);

                    let brEle2 = document.createElement("br");
                    contEle.appendChild(brEle2);

                    let paraEle2 = document.createElement("p");
                    paraEle2.textContent = description;
                    paraEle2.classList.add("link-description");
                    contEle.appendChild(paraEle2);
                }
            });
    }
});