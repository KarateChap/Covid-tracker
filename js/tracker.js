let countryData = [];
let sortDirection = false;

loadDataFalse();

function loadTableData(countryData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    
    for(let country of countryData){
        dataHtml += `<tr>
        <td>${country.country}</td>
        <td>${country.cases}</td>
        <td>${'+' + country.todayCases}</td>
        <td>${country.deaths}</td>
        <td>${'+' + country.todayDeaths}</td>
        <td>${country.recovered}</td>
        <td>${country.active}</td>
        <td>${country.critical}</td>
        </tr>`;
    }
    tableBody.innerHTML = dataHtml;
}

function getCovidStats4(){
    let searchValue = document.getElementById('search-country').value;
    fetch('https://corona.lmao.ninja/v2/countries/' + searchValue)
    .then(function(resp) {return resp.json()})
    .then(function(data){

        let totalCases = data.cases;
        let newCases = data.todayCases;
        let totalDeath = data.deaths;
        let newDeath = data.todayDeaths;
        let totalRecovered = data.recovered;

        if(totalCases != null){
            document.getElementById('totalCases-custom').innerHTML = 'Total Cases: ' + totalCases;
            document.getElementById('newCases-custom').innerHTML = 'New Cases: +' + newCases
            document.getElementById('totalDeath-custom').innerHTML = 'Total Death: ' + totalDeath
            document.getElementById('newDeath-custom').innerHTML = 'New Death: +' + newDeath
            document.getElementById('totalRecovered-custom').innerHTML = 'Total Recovered: ' + totalRecovered
        }
        else{
            let searchValue = document.getElementById('search-country').value;
            fetch('https://corona.lmao.ninja/v2/continents/' + searchValue)
            .then(function(resp) {return resp.json()})
            .then(function(data){

                let totalCases = data.cases;
                let newCases = data.todayCases;
                let totalDeath = data.deaths;
                let newDeath = data.todayDeaths;
                let totalRecovered = data.recovered;

                if(totalCases != null){
                    document.getElementById('totalCases-custom').innerHTML = 'Total Cases: ' + totalCases;
                    document.getElementById('newCases-custom').innerHTML = 'New Cases: ' + newCases
                    document.getElementById('totalDeath-custom').innerHTML = 'Total Death: ' + totalDeath
                    document.getElementById('newDeath-custom').innerHTML = 'New Death: ' + newDeath
                    document.getElementById('totalRecovered-custom').innerHTML = 'Total Recovered: ' + totalRecovered
                }
                else{
                    alert("No Country/Continent Found!");
                }
            })
                .catch(function(){
                console.log("error");
        
    })
        }
    })
    .catch(function(){
        console.log("error");
        
    })
}

// ---------------------------------- FALSE
function loadDataFalse(){

    function getCovidStats(){
    fetch('https://corona.lmao.ninja/v2/countries')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            countryData.push(data[i]);
        }
        loadTableData(countryData);
    })
    .catch(function(){
        console.log("error")
    })
    //setTimeout(getCovidStats, 43200000);
    
}
getCovidStats();

function getCovidStats2(){
    fetch('https://corona.lmao.ninja/v2/countries/philippines')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        //console.log(data.data[0].country_name);
        let totalCases = data.cases;
        let newCases = data.todayCases;
        let totalDeath = data.deaths;
        let newDeath = data.todayDeaths;
        let totalRecovered = data.recovered;

        document.getElementById('totalCases-ph').innerHTML = 'Total Cases: ' + totalCases;
        document.getElementById('newCases-ph').innerHTML = 'New Cases: +' + newCases
        document.getElementById('totalDeath-ph').innerHTML = 'Total Death: ' + totalDeath
        document.getElementById('newDeath-ph').innerHTML = 'New Death: +' + newDeath
        document.getElementById('totalRecovered-ph').innerHTML = 'Total Recovered: ' + totalRecovered
    })
    .catch(function(){
        console.log("error")
    })
}
getCovidStats2();

function getCovidStats3(){
    fetch('https://corona.lmao.ninja/v2/all')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        let totalCases = data.cases;
        let newCases = data.todayCases;
        let totalDeath = data.deaths;
        let newDeath = data.todayDeaths;
        let totalRecovered = data.recovered;

        document.getElementById('totalCases-world').innerHTML = 'Total Cases: ' + totalCases;
        document.getElementById('newCases-world').innerHTML = 'New Cases: +' + newCases
        document.getElementById('totalDeath-world').innerHTML = 'Total Death: ' + totalDeath
        document.getElementById('newDeath-world').innerHTML = 'New Death: +' + newDeath
        document.getElementById('totalRecovered-world').innerHTML = 'Total Recovered: ' + totalRecovered
    })
    .catch(function(){
        console.log("error")
    })
}
getCovidStats3();
}

// ----------------------------------------------------------- TRUE

function loadDataTrue(){

    function getCovidStatsTrue(){
    fetch('https://corona.lmao.ninja/v2/countries?yesterday=true')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            countryData.push(data[i]);
        }
        loadTableDataTrue(countryData);
    })
    .catch(function(){
        console.log("error")
    })
    //setTimeout(getCovidStats, 43200000);
    
}
getCovidStatsTrue();


function loadTableDataTrue(countryData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    
    for(let country of countryData){
        dataHtml += `<tr>
        <td>${country.country}</td>
        <td>${country.cases}</td>
        <td>${'+' + country.todayCases}</td>
        <td>${country.deaths}</td>
        <td>${'+' + country.todayDeaths}</td>
        <td>${country.recovered}</td>
        <td>${country.active}</td>
        <td>${country.critical}</td>
        </tr>`;
    }
    tableBody.innerHTML = dataHtml;
}

function getCovidStats2True(){
    fetch('https://corona.lmao.ninja/v2/countries/philippines?yesterday=true&strict=false')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        //console.log(data.data[0].country_name);
        let totalCases = data.cases;
        let newCases = data.todayCases;
        let totalDeath = data.deaths;
        let newDeath = data.todayDeaths;
        let totalRecovered = data.recovered;

        document.getElementById('totalCases-ph').innerHTML = 'Total Cases: ' + totalCases;
        document.getElementById('newCases-ph').innerHTML = 'New Cases: +' + newCases
        document.getElementById('totalDeath-ph').innerHTML = 'Total Death: ' + totalDeath
        document.getElementById('newDeath-ph').innerHTML = 'New Death: +' + newDeath
        document.getElementById('totalRecovered-ph').innerHTML = 'Total Recovered: ' + totalRecovered
    })
    .catch(function(){
        console.log("error")
    })
}
getCovidStats2True();

function getCovidStats3True(){
    fetch('https://corona.lmao.ninja/v2/all?yesterday=true')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        let totalCases = data.cases;
        let newCases = data.todayCases;
        let totalDeath = data.deaths;
        let newDeath = data.todayDeaths;
        let totalRecovered = data.recovered;

        document.getElementById('totalCases-world').innerHTML = 'Total Cases: ' + totalCases;
        document.getElementById('newCases-world').innerHTML = 'New Cases: +' + newCases
        document.getElementById('totalDeath-world').innerHTML = 'Total Death: ' + totalDeath
        document.getElementById('newDeath-world').innerHTML = 'New Death: +' + newDeath
        document.getElementById('totalRecovered-world').innerHTML = 'Total Recovered: ' + totalRecovered
    })
    .catch(function(){
        console.log("error")
    })
}
getCovidStats3True();
}


function displayData(){
    let arrSub = [];
    if(document.getElementById('slider').checked == false){
        countryData = arrSub;
        loadDataFalse();
    }

    if(document.getElementById('slider').checked == true){
        countryData = arrSub;
        loadDataTrue();
    }
    
}

function searchValidation(){
    var countrySearch = document.getElementById('search-country').value;

        if(countrySearch.length == 0)
            {
                alert("Please Fill Up Before Submitting!");
                return false;
            }
        if(countrySearch.length > 0){
            getCovidStats4();
        }
}
function sortColumn(columnName){
    const dataType = typeof countryData[0][columnName];
    console.log(dataType);
    sortDirection = !sortDirection;

    switch(dataType){
        case 'number':
            sortNumberColumn(sortDirection, columnName)
            break;
    }
    loadTableData(countryData);
    
}

function sortNumberColumn(sort, columnName){
    countryData = countryData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}