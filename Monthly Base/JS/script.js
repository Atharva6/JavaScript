const Songs = [
    {
        name: "first",
        title: "Ud Gaye",
        artist: "Ritvz"
    },
    {
        name: "Second",
        title: "Kabira",
        artist: "Arijit Singh"
    },
    {
        name: "third",
        title: "Chahunga",
        artist: "Arijit Singh"
    }
]

// Constants and Variables
const input = document.getElementById('txt');
const search = document.getElementById('search');
let body = document.querySelectorAll('.div');
let form = document.getElementById('heading-3');
let frm = document.querySelector('.frm');
let bdy = document.querySelector('.body');
let delete_btn = document.getElementById('delete');
let fav = document.getElementById('fav');
let main_sec = document.querySelector('.main-sec');
let times = document.getElementById('times');
let add_btn = document.getElementById('add');
let tasks = document.querySelector('.tasks')
let task = document.querySelector('.task');
let favorite = document.getElementById('ff');
const fav_btn = document.querySelectorAll('.fav_btn');
let note_add_btn = document.getElementById('note_add');
let mess_add_btn = document.getElementById('mess_add');
let special = document.getElementById('special');
let generate_btn = document.querySelector('.gen');
let first_inp = document.getElementById('first');
let Second_inp = document.getElementById('second');
let answer = document.getElementById('answer');
let check_btn = document.getElementById('check');
let next = document.getElementById('next');
let joke_btn = document.getElementById('Joke');
let submit = document.getElementById('sub');
let answers = document.querySelectorAll('.answer');
let time;
let questionCount = 0;
let score = 0;

// View button(Apps)
let click_btn = document.getElementById('click');
let notes = document.getElementById('notes');
let clicker = document.getElementById('clicker');
let clicked = document.getElementById('clicked');
let clicken = document.getElementById('clicken');
let joker = document.getElementById('joker');
let news = document.getElementById('news');
let dog = document.getElementById('dog');
let options = document.querySelector('.options');
let quiz = document.getElementById('quiz');
let pubg = document.getElementById('pubg');

// Exit Button
let exit_btn = document.querySelectorAll('.exit');
let cross_btn = document.getElementById('cross')

// Apps
let app = document.querySelector('.App1')
let app2 = document.querySelector('.App2') 
let app3 = document.querySelector('.App3')
let app4 = document.querySelector('.App4')
let app5 = document.querySelector('.App5')
let app6 = document.querySelector('.App6')
let app7 = document.querySelector('.App7')
let app8 = document.querySelector('.App8')
let app9 = document.querySelector('.App9')
let app10 = document.querySelector('.App10')

// Event Listner
search.addEventListener('click', ()=>{
    input.classList.toggle('active');
})

input.addEventListener('input', ()=>{
    let inpvalue = txt.value.toUpperCase();

    for(let i=0; i<body.length; i++){
        let abc = body[i].getElementsByClassName('btn')[0];
        if(abc.innerHTML.toUpperCase().indexOf(inpvalue) > -1){
            body[i].style.display = "";
        }else{
            body[i].style.display = "none";
        }
    }
})

add_btn.addEventListener('click', ()=>{
    let input = document.getElementById('todo');
    let value = input.value;

    if(value.length === 0){
        tasks.classList.add('act')
    }
    else{
        tasks.classList.remove('act')
        task.classList.add('activ')
        document.querySelector('.output').innerHTML += `
            <div class="output">
                <div class="ever">
                    <div class = "para">
                      <p class="val">${value}</p>
                    </div>
                    <button class="trash">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;

        let para = document.querySelectorAll('.para');
        for(let i=0; i<para.length; i++){
            para[i].onclick = function(){
                this.classList.add('completed');
            }
        }

        let trash = document.querySelectorAll('.trash');
        for(let i = 0; i<trash.length; i++){
            trash[i].onclick = function(){
                this.parentNode.remove();
                task.classList.remove('activ');
            }
        }
        
        input.value = "";
    }
})

form.addEventListener('click', ()=>{
    frm.classList.add('current');
    bdy.classList.add('c');
})

delete_btn.addEventListener('click', ()=>{
    frm.classList.remove('current');
    bdy.classList.remove('c')
})

fav.addEventListener('click', ()=>{
    bdy.classList.add('c');
    main_sec.classList.add('op');
    times.classList.add('cur')
})

times.addEventListener('click', ()=>{
    bdy.classList.remove('c');
    main_sec.classList.remove('op');  
    times.classList.remove('cur')
})

click_btn.addEventListener('click', ()=>{
    app.classList.add('iwnl');
})
click_btn.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur')
})

notes.addEventListener('click', ()=>{
    main_sec.classList.remove('op');
    times.classList.remove('cur')
})
notes.addEventListener('click', ()=>{
    app2.classList.add('rock');
})

clicked.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur')
})
clicked.addEventListener('click', ()=>{
    app4.classList.add('paper');
})

clicker.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur')
})
clicker.addEventListener('click', ()=>{
    app3.classList.add('scissor')
})

clicken.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur');
})
clicken.addEventListener('click', ()=>{
    app5.classList.add('tic')
})

joker.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur');
})
joker.addEventListener('click', ()=>{
    app6.classList.add('tac');
})

news.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur');
})
news.addEventListener('click', ()=>{
    app7.classList.add('toe')
})

dog.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur');
})
dog.addEventListener('click', ()=>{
    app8.classList.add('battle');
})

quiz.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur');
})
quiz.addEventListener('click', ()=>{
    app9.classList.add('ground')
})

pubg.addEventListener('click', ()=>{
    main_sec.classList.remove('op'); 
    times.classList.remove('cur');
})
pubg.addEventListener('click', ()=>{
    app10.classList.add('pub');
})

for(let i=0; i<fav_btn.length; i++){
    fav_btn[i].onclick = function(){
        this.classList.add('turulub')
    }

    fav_btn[i].ondblclick = function(){
        this.classList.remove('turulub');
    }
}

for(let i=0; i<exit_btn.length; i++){
    exit_btn[i].onclick = function(){
        app.classList.remove('iwnl');
        app2.classList.remove('rock');
        app3.classList.remove('scissor');
        app4.classList.remove('paper');
        app6.classList.remove('tac');
        app7.classList.remove('toe');
        app8.classList.remove('battle');
        app9.classList.remove('ground');
        app10.classList.remove('pub');
        main_sec.classList.add('op');
        times.classList.add('cur')
    }
}

note_add_btn.addEventListener('click', ()=>{
    let inp = document.getElementById('note');
    let value = inp.value;

    if(value.length === 0){
        document.querySelector('.ignore').innerHTML = `Notes are Empty!!`
    }
    else{
        document.querySelector('.ignore').innerHTML = '';
        document.querySelector('.op').innerHTML += `
            <div class="op">
                <div class="BGMI">
                    <h2>Note</h2> 
                    <hr>
                    <p>${value}</p>
                </div>
            </div>  
        `
        inp.value = "";
    }
});

mess_add_btn.addEventListener('click', ()=>{
    let inp = document.getElementById('mess');
    let inpValue = inp.value;
    if(inpValue.length == 0){
        alert("Text a Message to pass....")
    }
    else{
        alert("Message Passed Successfully")
        document.querySelector('.everything').innerHTML += `
            <div class="everything">
                <div class="content">
                    <p class="para"></p>
                </div>
            </div>
        `
        // Adding to LS
        let ls = localStorage.getItem('message');
        if(ls == null){
            messObj = [];
        }else{
            messObj = JSON.parse(ls);
        }
        messObj.push(inp.value);
        localStorage.setItem('message', JSON.stringify(messObj));
        inp.value = "";
    }
})

let counter = 0;

generate_btn.addEventListener('click', async ()=>{
    const response = await fetch('https://type.fit/api/quotes')
    const data = await response.json();
    counter++
    const myData = data[counter];
    console.log(myData)

    let txt = myData.text;
    let author = myData.author;

    document.querySelector('.heading').innerHTML = `${txt}`;
    document.querySelector('#author').innerHTML = `${author}`;
})

function check(){
    ran1 = Math.floor(Math.random() * 50 + 1);
    ran2 = Math.floor(Math.random() * 50 + 1);

    first_inp.value = ran1;
    Second_inp.value = ran2;

    answer_add = ran1 - ran2;
    let value = document.getElementById('answer').value;
    if(value == answer_add){
        alert("The Answer is Correct");
    }
    else{
        alert('Try Again!!! The Answer was ' + answer_add);
    }
    ran1 = Math.floor(Math.random() * 50 + 1);
    ran2 = Math.floor(Math.random() * 50 + 1);

    first_inp.value = ran1;
    Second_inp.value = ran2;

    answer_add = ran1 - ran2;
}

check_btn.addEventListener('click', ()=>{
    check();
    answer.value = "";
})

joke_btn.addEventListener('click',  async ()=>{
    const resp = await fetch('https://api.icndb.com/jokes/random/')
    const data = await resp.json();
    const mydata = data.value.joke;
    
    // console.log(mydata)

    let head = document.getElementById('heading_op');
    head.innerHTML = mydata;
})

news.addEventListener('click', async ()=>{
    newsop();
});

let countered = 0;

async function newsop(){
    const resp = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-08-21&sortBy=popularity&apiKey=8c7998bc8a7849e3baf03d31ecfc7bde')
    const data = await resp.json();
    countered++
    console.log(data.articles);
    let NEWS = document.querySelector('.NEWS');
    NEWS.innerHTML = `
        <div class="NEWS">
            <div class="new1 news">
                <img src='${data.articles[countered].urlToImage}' alt="">
                <h4>${data.articles[countered].title}</h4>
                <a href="${data.articles[countered].url}" target="_blank">Read More </a>
                <h5>-${data.articles[countered].author}</h5>
            </div>
            <div class="new2 news">
                <img src='${data.articles[2].urlToImage}' alt="">
                <h4>${data.articles[2].title}</h4>
                <a href="${data.articles[2].url}" target="_blank">Read More </a>
                <h5>-${data.articles[2].author}</h5>
            </div>
            <div class="new3 news">
                <img src='${data.articles[3].urlToImage}' alt="">
                <h4>${data.articles[3].title}</h4>
                <a href="${data.articles[3].url}" target="_blank">Read More </a>
                <h5>-${data.articles[3].author}</h5>
            </div>
            <div class="new4 news">
                <img src='${data.articles[4].urlToImage}' alt="">
                <h4>${data.articles[4].title}</h4>
                <a href="${data.articles[4].url}" target="_blank">Read More </a>
                <h5>-${data.articles[4].author}</h5>
            </div>
            <div class="new5 news">
                <img src='${data.articles[5].urlToImage}' alt="">
                <h4>${data.articles[5].title}</h4>
                <a href="${data.articles[5].url}" target="_blank">Read More </a>
                <h5>-${data.articles[5].author}</h5>
            </div>
        </div>
    `
}

dog.addEventListener('click', ()=>{
    async function start(){
        const resp = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await resp.json();
        createList(data.message);
    }
    start();
})


function createList(breedList){
    options.innerHTML = `
     <select name="" id="" onchange="load(this.value)">
         <option>Choose a Dog Breed</option>
         ${Object.keys(breedList).map(function (breed){
             return `<option> ${breed} </option>`
         }).join('')}
     </select>
    `;
}

async function load(breed){
    if(breed != "Choose a Dog Breed"){
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const myData = await response.json();
        console.log(myData.message);
        img(myData.message)
    }
}
function img(image){
   document.getElementById('output').innerHTML = 
   ` <div class="slide" style="background-image: url('${image[0]}');"></div>`
}

quiz.addEventListener('click', ()=>{
    const currntQuiz = QuizDb[questionCount];
    let head_tag = document.getElementById('head_tag');
    head_tag.innerHTML = currntQuiz.question;

    let first = document.getElementById('1st');
    first.innerText = currntQuiz.a;

    let second = document.getElementById('2nd');
    second.innerText = currntQuiz.b;

    let third = document.getElementById('3rd');
    third.innerText = currntQuiz.c;

    let fourth = document.getElementById('4th');
    fourth.innerText = currntQuiz.d;
});

function load(){
    let answer; 
    answers.forEach((currAnsEle)=>{
        if(currAnsEle.checked){
            answer = currAnsEle.id;
        }
    })
    return answer;
}

submit.addEventListener('click', ()=>{
    load();

    if(value === currntQuiz.ans){
        score++;
    }

    if(questionCount < QuizDb.length){
        load();
        questionCount++
    }else{
        alert("Finished");
    }
})

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('nex');
const images = document.getElementById('img');
const music = document.querySelector('audio')
let isPlaying = false;

// Playing Music
const playMusic = () => {
    isPlaying = true;
    music.play();
    images.classList.add('rotate');
    playBtn.classList.replace("fa-play", "fa-pause");
}

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    images.classList.remove('rotate');
    playBtn.classList.replace("fa-pause", "fa-play");
}

playBtn.addEventListener('click', ()=>{
    if(isPlaying){
        pauseMusic();
    } else{
        playMusic();
    }
})

const loadSong = (Songs) =>{
    let title_op = document.getElementById('title');
    let artist = document.getElementById('artist');

    title_op.textContent = Songs.title;
    artist.textContent = Songs.artist;
    music.src = `audio/${Songs.name}.mp3`;
    images.src = `Img/${Songs.name}.jpg`
}

song_index = 0;

nextBtn.addEventListener('click', nextSong);

function nextSong(){
    song_index = (song_index + 1) % Songs.length;
    loadSong(Songs[song_index]);
}

prevBtn.addEventListener('click', prevSong);

function prevSong(){
    song_index = (song_index - 1 + Songs.length) % Songs.length;
    loadSong(Songs[song_index]);   
}

// Others
setInterval(() => {
    let date = new Date();
    time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    document.getElementById('h3').innerHTML = time;     
}, 1000);

QuizDb = [
    {
        question: "Who is the Famous Footballer in the World?",
        a: "Cristiano Ronaldo",
        b: "Lionel Messi",
        c: "Neymar Jr",
        d: "Robert Lewandowski",
        ans: "ans1"
    },
    {
        question: "Who is the most valuable footballer palyer in the World?",
        a: "Cristiano Ronaldo",
        b: "Lionel Messi",
        c: "Neymar Jr",
        d: "Phil Foden",
        ans: "ans4"
    },
    {
        question: "Who won the 'Fifa World Cup 2018'?",
        a: "Belgium",
        b: "France",
        c: "Spain",
        d: "Portugal",
        ans: "ans2" 
    },
    {
        question: "Who won the 'Champions League 2018'?",
        a: "Liverpool",
        b: "PSG",
        c: "Real Madrid",
        d: "Barcelona",
        ans: "ans3"
    }
]

let dil = document.querySelectorAll('.dil');
for(let i = 0; i<dil.length; i++){
    dil[i].onclick = function(){
        this.classList.add('color');
    }

    dil[i].ondblclick = function(){
        this.classList.remove('color');
    }
}

// Simple

let view = document.getElementById('view_op_pubg');
let main_div = document.querySelector('.main-div');

view.addEventListener('click', ()=>{
    bdy.classList.add('c');
    main_div.classList.add('popup');
})


let end_btn = document.querySelectorAll('.endth');
for(let i = 0; i<end_btn.length; i++){
    end_btn[i].onclick = function(){
        one.classList.remove('o');
        sec.classList.remove('ss');
        three.classList.remove('tab');
        five_op.classList.remove('fabulous');
        sixth.classList.remove('sexy_boltee');
        eight.classList.remove('ate');
        nine.classList.remove('ninu');
        ten.classList.remove('tentative')
        main_div.classList.add('popup');
    }
}

// Range

let range = document.getElementById('range');
let one  = document.querySelector('.one');
let word = document.getElementById('word');
let sec = document.querySelector('.secer');
let three = document.querySelector('.three');
let txt = document.getElementById('txt_auto');
let TW = document.getElementById('TW');
let four_op = document.querySelector('.four');
let locate = document.getElementById('locate');
let five_op = document.querySelector('.five');
let limit = document.getElementById('limit');
let sixth = document.querySelector('.six');
let valid = document.getElementById('validate');
let seventh = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let cpy = document.getElementById('cpy');
let nine = document.querySelector('.nine');
let cool = document.getElementById('cool');
let ten_confirm = document.getElementById('ten_confirm');
let ten = document.querySelector('.ten');

range.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    one.classList.add('o');
})

word.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    sec.classList.add('ss');
})

txt.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    three.classList.add('tab');
})

TW.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    four_op.classList.add('fanb');
});

locate.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    five_op.classList.add('fabulous');
})

limit.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    sixth.classList.add('sexy_boltee');
})

valid.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    seventh.classList.add('sexier');
})

cpy.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    eight.classList.add('ate');
})

cool.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    nine.classList.add('ninu');
});

ten_confirm.addEventListener('click', ()=>{
    main_div.classList.remove('popup');
    ten.classList.add('tentative');
})

function check(){
    let range_inp = document.getElementById('inp');
    let text = document.getElementById('text');

    text.innerHTML = range_inp.value;
}

const words_op = [
    {
        word: "Arrogance"
    },
    {
        word: "Happy"
    },
    {
        word: "Delightful"
    },
    {
        word: "Sad"
    },
    {
        word: "OverPowered"
    },
    {
        word: "Wonderful"
    },
    {
        word: "HelpFul"
    },
    {
        word: "Falicinate"
    },
    {
        word: "CBI"
    }
];

let words = document.getElementById('words');
let new_bolteee = document.querySelector('.new_boltee');

new_bolteee.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * 10);

    words.innerHTML = words_op[random].word;
})

let text = document.querySelector('.text');
let index = 0; 

function writeText(){
    const text = "This is OverPowered";
    document.querySelector('.text').innerText = text.slice(0, index);
    index++;
    if(index > text.length){
        index = 0;
    }
}
setInterval(writeText, 100);

let located = document.getElementById('location');
located.addEventListener('click', ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess);
    }
    else{
        located.innerText = "Browser not Supported";
    }
})

let api = 'c23698b3c8214d2ba2ef652b6036e5e4';

async function onSuccess(position){
    let {latitude, longitude} = position.coords;
    const resp = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api}`);
    const data = await resp.json();
    let Details = data.results[0].components;
    console.log(Details);
    let {city, postcode, country} = Details;
    located.innerText = `${city} ${postcode} ${country}`;
};

let inptext = document.getElementById('inptxt');
let number_length = document.querySelector('.number p');
let maxlength = input.getAttribute('maxlength');

inptext.onkeyup = () =>{
    number_length.innerText = maxlength -  inptext.value.length;
}

let User_input = document.getElementById('user');
let passWord = document.getElementById('passWord');
const ShowBtn = document.getElementById('eye');
const log = document.querySelector('.log');
const sign_boltee = document.querySelector('.sign_boltee');
let form_container = document.querySelector('.form-container');
let sign_container = document.querySelector('.sign-container');
let logUp = document.querySelector('.logUp');

ShowBtn.addEventListener('click',()=>{
    if(passWord.type === "password"){
        passWord.type = "text";
        ShowBtn.classList.add('hide');
    }else{
        passWord.type = "password"
        ShowBtn.classList.remove('hide')
    }
});

log.addEventListener('click', ()=>{
    alert("LogIn Successfully")
    passWord.value = "";
});

sign_boltee.addEventListener('click', ()=>{
    form_container.classList.add('hides');
})

let cp = document.getElementById('copy');
let TextArea = document.getElementById('textarea');

cp.addEventListener('click', ()=>{
    TextArea.select();
    document.execCommand('copy');
    alert('Text Copied')
});

let ten_btn = document.getElementById('ten_sub');
let ten_norm_pass = document.getElementById('ten_norm_pass');
let ten_confrm_pass = document.getElementById('ten_confrm_pass');
let mes = document.querySelector('.mes');

ten_btn.addEventListener('click', ()=>{
    if(ten_norm_pass.value.length == 0){
        alert('Enter a PassWord');
    }else{
        if(ten_norm_pass.value == ten_confrm_pass.value){
            mes.innerHTML = "PassWord Matches";
            setTimeout(() => {
                mes.innerHTML = "";
            }, 2000);
        }else{
            mes.innerHTML = "PassWord don't Matches";
            setTimeout(() => {
                mes.innerHTML = "";
            }, 2000);
        }
    }
});

