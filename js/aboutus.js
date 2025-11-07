document.addEventListener("DOMContentLoaded", () => {
    const countries = "Afghanistan Ireland Russia Argentina Israel Saudi Arabia Australia Italy Scotland Austria Ivory Coast Senegal Bahamas Jamaica Serbia Bahrain Japan Seychelles Bangladesh Jordan Singapore Barbados Kuwait South Africa Belarus Lebanon South Georgia Belgium Madagascar South Korea Bhutan Malaysia Spain Brazil Maldives Sri Lanka Bulgaria Mauritius Sweden Switzerland Syria Taiwan Tanzania Thailand Trinidad And Tobago Tunisia Turkey UAE Uganda UK Ukraine USA Uzbekistan Vatican City Venezuela Vietnam Yemen Yugoslavia Zimbabwe".split(" ");
    const cities = ["Mumbai","Delhi","Gurgaon","Noida","Hyderabad","Bangalore","Pune","Chennai","Kolkata","Ahmedabad","Surat","Visakhapatnam","Kochi","Nagpur","Coimbatore","Jaipur","Trivandrum","Indore","Bhopal","Lucknow","Kanpur","Patna","Rajkot","Thane","Nashik","Agra","Meerut","Faridabad","Ghaziabad","Varanasi","Amritsar","Jalandhar","Ludhiana","Chandigarh","Dehradun","Raipur","Bhubaneswar","Ranchi","Guwahati","Mysore","Madurai","Tiruchirappalli","Salem","Vijayawada","Guntur","Nellore","Rajahmundry","Kakinada","Warangal","Nizamabad","Karimnagar","Ramagundam","Khammam","Mahbubnagar","Nalgonda","Adilabad","Suryapet","Miryalaguda","Bhongir","Sircilla","Jagtial","Siddipet","Wanaparthy","Gadwal","Narayanpet","Jogulamba","Nagarkurnool","Vikarabad","Tandur","Sangareddy","Medak","Nirmal","Kamareddy","Armoor","Bodhan","Korutla","Metpally","Vemulawada","Jangaon","Bhupalpally","Mulugu","Mahabubabad","Kothagudem","Sathupally","Wyra","Madhira","Palwancha","Manuguru","Bhadrachalam","Yellandu","Aswaraopeta","Dammapeta","Chintoor","Kunavaram","Velerupadu"];
    const industries = "Agro Based Industries,Accounting,Airlines,Advertising,Automobile,Banking,Consumer Goods,FMCG,HR,Chemicals,Pharmaceutical,Medical,Retail,Media,IT,Internet,Industrial Products,Construction,Transportation,Oil & Gas,NGO,Education,Food Hospitality,Telecom,Textiles,Legal,E-Commerce,Postal,Stationery,Publishing,Paper,Gems,Gaming,Currency,Defence,Office Automation,Industrial Automation,Metals,Facility Management,Health Services,Motor Vehicle,Real Estate,Writing,Industry Forums,Scrap Metal,Stock Exchange,Science,Space,Footwear,Government,Music,Insurance,Fine Arts,Glass,Unskilled Labour,Architecture,Ceramics,Export,Fresher,Mining,Packaging,Shipping,Tyres,Environment,Astrology,Commodities,Consulting,ITES,Security,Statistics,Archaeology,Nutrition".split(",");
    const functionalAreas = [
        "C Level / Top Management / Director","Corporate Planning / Consulting / Strategy / PMO","Data Analytics & Business Intelligence / Statistics",
        "Finance / Accounts / Tax / Company Secretary / Audit","Banking / Credit Cards / E-Commerce Payment Gateway","Financial Services / Broking",
        "Insurance","Legal / Law","Sales / Business Development / Client Servicing","Marketing / Digital Marketing / Advertising / Market Research",
        "Media / PR, Public Relations / Corporate Communications","HR / Recruitment / IR / Training / Payroll / HR Operations",
        "Administration / Facility Management / Office Operations","Secretarial / Clerical / Back Office Functions",
        "Supply Chain - Logistics / Distribution / Purchase / Planning / Inventory","Production / Manufacturing","Plant Engineering / Maintenance / Utility",
        "Site Engineering / Project Management","Environment / Health / Safety / EHS / HSE / SHE","Quality - QC / QA / QMS / TQM / Lean / Six Sigma",
        "IT Web Designing / Mobile App / Animation / Graphics","IT Software Programming / Analysis / Quality / Testing / Training",
        "IT ERP / CRM / SAP / Salesforce","IT Robotics & Automation / IoT / Machine Learning","IT Software Maintenance / Operations / Support Services",
        "IT Hardware Installation / Maintenance / Support","IT Hardware EDA / VLSI / ASIC / Chip Designing / Networking / Remote Sensing",
        "Telecom / Internet / Communication Technology / Biometric / CCTV / Security System","ITES / BPO / KPO / Call Centre / Operations / Tele-calling",
        "Regulatory Affairs / Corporate Affairs","Research / R&D - Pharma / Medical / Health / Biological Sciences / Chemical / Physical / Earth Sciences / Engineering / Environmental / Space / Economics & Commerce / Humanities / Education / History",
        "Packaging Development","Shipping","Merchandising","CSR / Sustainability","Security Services / Office Security","Export / Import",
        "Doctors / Medical Professionals / Clinical Research / Pharma Medical Affairs","Paramedical Staff / Nurses / Medical Support / Lab / Diagnostics",
        "Pharmacovigilance / Clinical Research","Airlines / Reservations / Ticketing / Travel / Merchant Navy",
        "Hospitality / Hotel / Restaurant / Bar / Night Clubs","Beauty / Spa Services / Health & Fitness","Mining / Oil & Gas Engineering / Geology",
        "Architects / Interior Design / Naval Architecture","Agriculture / Farming / Dairy / Forestry / Poultry","Construction",
        "Real Estate / Property Management","Content Writing / Journalism","TV / Films / Production House / Entertainment",
        "Fashion Designing","Photography","Art / Craft / Design","Civil Services / Administrative / Police Services",
        "Education / Teaching / Language Specialist","Individual Functions","Owner / Founder / Self Employed / Entrepreneur",
        "Freelancer / Independent Consultant","DevOps / Configuration and Deployment Management"
    ];

    // Marquee
    document.getElementById('countryList').innerHTML = countries.join(' • ') + ' • ' + countries.join(' • ');
    document.getElementById('cityList').innerHTML = cities.join(' • ') + ' • ' + cities.join(' • ');

    // Industries
    const industryGrid = document.getElementById('industryGrid');
    industries.forEach(ind => {
        const div = document.createElement('div');
        div.className = 'industry-card';
        div.textContent = ind.trim();
        industryGrid.appendChild(div);
    });

    // Functional Areas – Flip Cards
    const funcGrid = document.getElementById('funcGrid');
    functionalAreas.forEach(area => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        const front = area.split(' ').slice(0, 3).join(' ');
        const back = area.replace(/ \/ /g, ' • ').replace(/ - /g, ' → ');
        card.innerHTML = `<div class="flip-front">${front}</div><div class="flip-back">${back}</div>`;
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        card.addEventListener('mouseenter', () => card.classList.add('flipped'));
        card.addEventListener('mouseleave', () => card.classList.remove('flipped'));
        funcGrid.appendChild(card);
    });

    // Globe Dots
    const globe = document.getElementById('globe');
    const dots = [{l:'40%',t:'25%'},{l:'65%',t:'50%'},{l:'30%',t:'65%'},{l:'55%',t:'10%'},{l:'20%',t:'45%'},{l:'75%',t:'80%'},{l:'15%',t:'10%'},{l:'80%',t:'35%'},{l:'48%',t:'85%'},{l:'10%',t:'75%'},{l:'90%',t:'20%'},{l:'5%',t:'55%'}];
    dots.forEach(pos => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = pos.l;
        dot.style.top = pos.t;
        dot.style.animationDelay = Math.random() * 2 + 's';
        globe.appendChild(dot);
    });

    // Inject Flip CSS (for generic flip cards)
    // NOTE: For better practice, these flip styles should be moved to aboutus.css
    const style = document.createElement('style');
    style.textContent = `
        .flip-card.flipped .flip-front { transform: rotateY(180deg); }
        .flip-card.flipped .flip-back { transform: rotateY(0deg); }
        .flip-front, .flip-back { transition: transform 0.6s; transform-style: preserve-3d; }
        .flip-back { transform: rotateY(180deg); }
    `;
    document.head.appendChild(style);
});
// end document