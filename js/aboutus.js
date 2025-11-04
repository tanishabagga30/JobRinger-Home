// aboutus.js – runs only on this page
document.addEventListener("DOMContentLoaded", () => {
    // Retained original data and functionality for globe/marquee
    const countries = `Afghanistan,Ireland,Russia,Argentina,Israel,Saudi Arabia,Australia,Italy,Scotland,Austria,Ivory Coast,Senegal,Bahamas,Jamaica,Serbia,Bahrain,Japan,Seychelles,Bangladesh,Jordan,Singapore,Barbados,Kuwait,South Africa,Belarus,Lebanon,South Georgia,Belgium,Madagascar,South Korea,Bhutan,Malaysia,Spain,Brazil,Maldives,Sri Lanka,Bulgaria,Mauritius,Sweden,Switzerland,Syria,Taiwan,Tanzania,Thailand,Trinidad And Tobago,Tunisia,Turkey,UAE,Uganda,UK,Ukraine,USA,Uzbekistan,Vatican City,Venezuela,Vietnam,Yemen,Yugoslavia,Zimbabwe`.split(',');

    const cities = ["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad","Jaipur","Lucknow","Indore","Bhopal","Nagpur","Surat","Vadodara","Coimbatore","Visakhapatnam","Kanpur","Patna","Rajkot","Thane","Nashik","Agra","Meerut","Faridabad","Ghaziabad","Varanasi","Amritsar","Jalandhar","Ludhiana","Chandigarh","Dehradun","Raipur","Bhubaneswar","Ranchi","Guwahati","Kochi","Thiruvananthapuram","Mysore","Madurai","Tiruchirappalli","Salem","Vijayawada","Guntur","Nellore","Rajahmundry","Kakinada","Warangal","Nizamabad","Karimnagar","Ramagundam","Khammam","Mahbubnagar","Nalgonda","Adilabad","Suryapet","Miryalaguda","Bhongir","Sircilla","Jagtial","Siddipet","Wanaparthy","Gadwal","Narayanpet","Jogulamba","Nagarkurnool","Vikarabad","Tandur","Sangareddy","Medak","Nirmal","Kamareddy","Armoor","Bodhan","Korutla","Metpally","Vemulawada","Jangaon","Bhupalpally","Mulugu","Mahabubabad","Kothagudem","Sathupally","Wyra","Madhira","Palwancha","Manuguru","Bhadrachalam","Yellandu","Aswaraopeta","Dammapeta","Chintoor","Kunavaram","Velerupadu"];

    const industries = ["Accounting","Advertising","Agro Based Industries","Airlines","Analytics","Archaeology","Architecture","Astrology","Automobile","Banking","Ceramics","Chemicals","Commodities","Construction","Consulting","Consumer Goods","Defence","E-Commerce","Education","Environment","Export","Facility Management","Fine Arts","FMCG","Footwear","Fresher","Gaming","Gems","Glass","Government","Health Services","Hospitality","HR","Industrial Products","Insurance","Internet","IT","ITES","Legal","Media","Medical","Metals","Mining","Music","Nutrition","Office Equipment","Oil & Gas","Packaging","Pharmaceutical","Postal","Publishing","Real Estate","Retail","Robotics","Scrap Metal","Science","Security","Shipping","Space","Stationery","Stock Exchange","Telecom","Textiles","Transportation","Tyres","Unskilled Labour","Writing"];


    // Marquee
    const countryListElement = document.getElementById('countryList');
    if (countryListElement) {
        countryListElement.innerHTML = countries.map(c => c.trim()).join(' • ') + ' • ' + countries.map(c => c.trim()).join(' • ');
    }
    
    const cityListElement = document.getElementById('cityList');
    if (cityListElement) {
        cityListElement.innerHTML = cities.join(' • ') + ' • ' + cities.join(' • ');
    }

    // Industries
    const grid = document.getElementById('industryGrid');
    if (grid) {
        industries.forEach(ind => {
            const div = document.createElement('div');
            div.className = 'industry-card';
            div.textContent = ind.split(' - ')[0];
            grid.appendChild(div);
        });
    }

    // Globe Dots
    const globe = document.getElementById('globe');
    if (globe) {
        const points = [
            {left:'40%',top:'25%'}, {left:'65%',top:'50%'}, {left:'30%',top:'65%'},
            {left:'55%',top:'10%'}, {left:'20%',top:'45%'}, {left:'75%',top:'80%'},
            {left:'15%',top:'10%'}, {left:'80%',top:'35%'}, {left:'48%',top:'85%'},
            {left:'10%',top:'75%'}, {left:'90%',top:'20%'}, {left:'5%',top:'55%'},
            {left:'70%',top:'5%'}, {left:'35%',top:'90%'}, {left:'85%',top:'60%'}
        ];
        points.forEach(p => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = p.left;
            dot.style.top = p.top;
            dot.style.animationDelay = Math.random() * 3 + 's';
            globe.appendChild(dot);
        });
    }
});