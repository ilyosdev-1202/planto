function searchDivs() {
            // Get the search query
            let query = document.getElementById('searchInput').value.toLowerCase();
            
            // Get all divs inside the content div
            let divs = document.getElementById('content').getElementsByClassName('item');

            // Loop through all the divs and show/hide based on match
            for (let i = 0; i < divs.length; i++) {
                let item = divs[i];
                let itemName = item.textContent || item.innerText;

                // If the item includes the query, show it; otherwise, hide it
                if (itemName.toLowerCase().indexOf(query) > -1) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            }
        }
