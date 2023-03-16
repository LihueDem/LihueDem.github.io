
let modo = document.getElementById('modo');
let english = document.getElementById('english');
let copiar = document.getElementById('copiar');
let descargar = document.getElementById('descargar');


modo.addEventListener('click',function(){
   console.log('si funciona aqui estoy');
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#f2f2f2'; 
});

//how create pdf with javascript?

english.addEventListener('click',function(){
    modo.innerHTML = 'Change mode';
    descargar.innerHTML = 'Download';

    document.getElementById('sobreMi').innerHTML = 'about me';
    
    document.getElementById('sobreMi-text').innerHTML = 'I am an advanced student in Programming, currently finishing my last year of studies  at the Technological University of Tucuman.<br><br> I am 28 years old and I live in San Miguel de Tucumán, Argentina.I am interested in deepening my knowledge and acquiring professional experience in the IT world, specifically in an agile development environment.<br><br> I am passionate about web programming and I have skills needed for the front-end development of applications.<br><br> In addition to my technical skills, acquired during the last years of study, I have soft skills that facilitate any learning process. Although I dont have much experience in IT projects yet, my expectations to learn, and solidify my knowledge by learning from experts are huge.<br><br> I am a proactive, independent, and responsible professional that really enjoy teamworking';

    document.getElementById('experienciaLaboral').innerHTML = 'professional experience';
    document.getElementById('experienciaLaboral-h6').innerHTML = 'April 2022 - present';
    document.getElementById('experienciaLaboral-text').innerHTML = 'I am currently performing an internship at the Ministry of Education of Tucumán, where I execute maintenance activities on an internal web page. <br><br> Additionally, I have the objective of generating reports and systematizing data in the official government pages to generate information useful for the decision-making process.';

    document.getElementById('habilidades').innerHTML = 'technical skills';

    document.getElementById('formacionAcademica').innerHTML = 'education';
    document.getElementById('formacionAcademica-h5').innerHTML = 'tecnicatura universitaria en programacion - in progress';
    document.getElementById('formacionAcademica-text').innerHTML = 'I am currently taking my final year exams and looking for an internship or a full-time job to consolidate and apply the theoretical knowledge acquired in these three years of study.';
    document.getElementById('formacionAcademica-text1').innerHTML = 'Knowledge acquired: Programming fundamentals, object-oriented programming, layered architecture, database architecture, systems methodology. <br><br> Programming languages/technologies: - C#, Windows Form, .NET,Layered architecture, MVC, MySql - Javascript, Html5, Css3,Bootstrap 5, SQLserver';
    document.getElementById('formacionAcademica-secundaria').innerHTML = 'HIGH SCHOOL - NUESTRA SRA DE MONTSERRAT INSTITUTE, SAN MIGUEL DE TUCUMÁN';

    document.getElementById('idiomas').innerHTML = 'languages';
    document.getElementById('idiomas-esp').innerHTML = '-Spanish: First language';
    document.getElementById('idiomas-eng').innerHTML = '-English: intermediate level';

    english.addEventListener('click',()=>{
        alert('funciona');


    })
})

descargar.addEventListener('click',function (data, name = "myData.doc"){
    const blob = new Blob([data],{ type: "octet.steam"});
    const href = URL.createObjectURL(blob);

    const a = Object.assign(document.createElement("a"), {
        href,
        style: "display:none",
        download: "myData.doc",
    });

    document.body.appendChild(a);

    a.click();
    URL.revokeObjectURL(href);
    a.remove();
});
