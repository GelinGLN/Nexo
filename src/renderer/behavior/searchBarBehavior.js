const contactQuery = require('../script/contactQuery');

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchBar');
    const searchBarInput = document.getElementById('searchBarInput');

    searchForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        console.log("SUBMIT DISPARADO");   

        let searchValue = searchBarInput.value;
        console.log('searchValue:', searchValue);

        localStorage.setItem('ContactInfo_selectedContactName', searchValue);

        let qry = contactQuery(searchValue); // função do arquivo contactQuery.js

        console.log('RETORNO contactQuery:', qry);

        setTimeout(() => {
            console.log('timeout pós-modal');
        }, 0);

        if (qry) {
            window.location.assign('./contactInfo.html');
        }
        console.log("PASSOU DO REDIRECT");
        
    })
})  