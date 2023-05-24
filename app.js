const express = require('express');
const path = require('path')
const app = express();   // this can be anything app or map or lap hfhfhfh dap
app.use(express.json())
// app.use(express.json());  // this line make this app understand json


import fetch from 'node-fetch';


const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://userclike:sgnikhil@clike.x8u8ys5.mongodb.net/visitorcount?retryWrites=true&w=majority")



const blobschemamade = mongoose.Schema({
    _id: Number,
    title: String,
    vcount: Number,
  

});



const collectionref = mongoose.model("vcounts",blobschemamade);  // first is collection name, second field is schema name, above connect address have database name between / ?

async function runhere(){

    // const colref = new collectionref({
    //     title:" made second post"
    // })
    // await colref.save();


    // // saving the data in database
    // const colref = await collectionref.create({
    //     _id: 17717,
    //     title: "Counting page visitor",
    //     vcount: 0,
    // })

    // collectionref.title = " have to change the id i think";
    // collectionref.Save();

    const colref2 = await collectionref.findById("17717","vcount");
    // console.log(colref2);
    console.log(colref2.vcount);

    // const colref3 = await collectionref.find({title: "Counting page visitor"});
    // console.log(colref3);
    // const colref3 = await collectionref.deleteOne({title: "Counting page visitor"});
    // console.log(colref3);
    
    
    // const colref4 = await collectionref.updateOne({_id: 177176, title: "updated title"})
    // console.log(colref4);

    // const colref5 = await collectionref.findByIdAndUpdate("177176",{ title: 'Gourav jadeja' })    //id is in string integer or only integer doesnot matter . little slower than updateone
    // console.log(colref5);

    const colref6 = await collectionref.updateOne({_id: 17717},{$inc: { vcount: 1,}})    // incrementing 
    console.log(colref6);
 

}

runhere();




// let i = 1;

// app.use('/first',(req,res,next)=>{

//     console.log("here it is in midd"+i);
//     i++;

    
//     next();
// })

// console.log("outside")

// writing for newly website here
// app.use(express.static('./staticmade/build')) 

app.use(express.static("./staticmade/build"))


// app.get('/',(req,res)=>{                          // without using this        app.use(express.static(''))  from how to serve static file from coding monk video server
//     res.sendFile(__dirname +"/staticmade/public/index.html")
// })














app.get('/first', (req,res) => {        // this is the starting of writing here we directly call function from localhost:4000/first
    
    // console.log(req);
    res.send('hello from app.js')
    
    
    
})


app.get('/ip', (req,res) => {        
    
    const reqmade = req.ip;
    
    res.send(reqmade);
    
    
    
})











app.get('/vm/:made10',(req,res)=>{
    res.send('the url send is '+req.params.made10)
    // localhost/vm/46321321anything                 works
    // localhost/vm    or   localhost/vm/    doesnot work
})




// static page section
// app.use(express.static('./staticmade'))                  // this makes everything within the folder a static file and can be called as http://localhost:4000/test.html
// app.use(express.static('./ninthmade.html'))          // this doesnot work 
// app.use(express.static('./'))                          // this makes everything in the nodemade_simplenode folder as public and anyone can access it

// __dirname pathname formula may be used if ./staticmade doesnot works



// app.use('/eleventh', './ninthmade.html');                          // this doesnot work
// app.use('/twelveth', './staticmade/twelvethmade.html');            // this also doesnot work

// app.use('/thirteenth', (req,res)=>{                                   // this doesnot work gives error
//     res.redirect('./staticmade/twelvethmade.html')                 //    Cannot GET /staticmade/twelvethmade.html
// });

app.use('/thirteenth', (req,res)=>{                              //  htmlhtmlhtmlhtmlhtmlhtml--------------------------------
    res.redirect('./twelvethmade.html')            // this will redirect to our page
});



// rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrreact
// app.use(express.static('./staticmade/build'))           // this connects to react app older
app.use('/fifteenth', (req,res)=>{                      // remember to go upto build only as if gone to static will result in making this as not work
    res.redirect('./index.html')                // also as the name is index.html the site is open as we press http://localhost:4000 only
})
// above app.use is not require


app.get('/sixteenth',(req,res)=>{                          // without using this        app.use(express.static(''))  from how to serve static file from coding monk video server
    res.sendFile(__dirname +"/ninthmade.html")
})




app.get('/seventeenth',(req,res)=>{                          
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        
        <style>
        
        </style>
        
        <body>
        <h1>html backtick page</h1>
        <br>
        <br>
        <p id="paraid">the colour of this is going to change </p>
        
        <p id="paraid2">the query send was ${req.query.x17} </p>
        
        <button onclick="fun1()" >button 1 change colour</button>
        <button onclick="fun2()" >button 2 consol log</button>
        <script>
        
        const paraid = document.getElementById("paraid")
        
        function fun1(){
            
            // // let xr= parseInt(Math.round(Math.random()*255))
            // // let xg= parseInt(Math.round(Math.random()*255))    // this parsint doesnot work 
            // // let xb= parseInt(Math.round(Math.random()*255))
            
            // let xr= 200
            // let xg= 0
            // let xb= 0
            
            paraid.style.color = "rgb(200,20,20)";
            console.log("button 1 run "+ xg);
        }
        
        function fun2(){
            console.log("this is run through script " + Math.round(Math.random()*255));
            // this generate random number Math.random() between 0-1  255 is max number
        }
        
        </script>
        </body>
        </html>`)
    })
    
    
    
    app.get('/vp/:idr',async (req,res)=>{
        console.log("-----------------------------");
        console.log(req.params.idr);
        console.log(req.query.idrq);                // put in address ?idrq=abcd

        let name;

        if (req.query.idrq == "s") {
            
            name = "https://spankbang.party/"+req.params.idr+"/video";

            console.log("ran in spank");

        }else if (req.query.idrq =="x") {
            name = "https://www.xvideos53.com/embedframe/"+ req.params.idr;

            console.log("ran in xvid");
        }

        
        
        







        try{
            
            console.log(name)
            console.log("gggggggggggggggggggggggggggggggggggggggg");
            const string19two = await fetch(name).then((resreceived) => {
                // console.log(resreceived)
                return resreceived.text();
            }).then((datamade) => {
                // console.log("reached here");
                return datamade;  //this sets datamade into string19
            });                                                                           // for use when below fetch systen is not enough or catch has to done
            
            
            
            
            // const string19 = await fetch('https://www.xvideos51.com/embedframe/69894683');
            // const string19 = await fetch(name);
            // const string19two = await string19.text();
            
            
            
            // let reg19l = /html5player.setVideoUrlLo.*.;/
            // let reg19h = /html5player.setVideoUrlHi.*.;/

            let reg19l;
            let reg19h;
            
            let regtest = /pratik here/





            console.log("upto here")
            let string19l;  // as first index returs the search result  .index gives the starting character position starting from zero and .input gives input string matches the input
            let string19h;
            // console.log(string19l);



            if (req.query.idrq == "s") {


                //var stream_data = {'240p': ['
                //'480p': ['
                let reg19l = /var stream_data = {'240p': .*.'320p'/
                let reg19h = /'480p': .*.'720p'/

                try{
                    string19l = await reg19l.exec(string19two)[0];
                    string19l= string19l.slice(29,string19l.length-10)

                    console.log(string19l);
                }catch{
                    string19l = "notavailable"
                }
                
                try{
                    string19h = await reg19h.exec(string19two)[0];
                    string19h = string19h.slice(10,string19h.length-10)

                    console.log(string19h);
                    
                }catch{
                    string19h = "notavailable"
                }

                console.log("ran in spank");





            } else if (req.query.idrq == "x") {

                let reg19l = /html5player.setVideoUrlLo.*.;/
                let reg19h = /html5player.setVideoUrlHi.*.;/

                console.log("ran in xvid");

                try{
                    string19l = await reg19l.exec(string19two)[0];
                    string19l= string19l.slice(28,string19l.length-3)
                }catch{
                    string19l = "notavailable"
                }
                
                try{
                    string19h = await reg19h.exec(string19two)[0];
                    string19h = string19h.slice(29,string19h.length-3)
                    
                }catch{
                    string19h = "notavailable"
                }


                
            }


            
            
            

            
            
            // try{
            //     string19l = await reg19l.exec(string19two)[0];
            //     string19l= string19l.slice(28,string19l.length-3)
            // }catch{
            //     string19l = "notavailable"
            // }
            
            // try{
            //     string19h = await reg19h.exec(string19two)[0];
            //     string19h = string19h.slice(29,string19h.length-3)
                
            // }catch{
            //     string19h = "notavailable"
            // }
            {/* <object data="${name}" type="" width="90%" ></object> */}
    
            res.send(`
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            </head>
            
            <style>
            *{
                background-color: #222222;
                color: #bbbbbb;
                align-items: center;
            }
            
            
            video::-webkit-media-controls-panel{ 
                opacity: 0.5;
            }
            video::-webkit-media-controls-play-button{
                opacity: 0.2;    
                /* it is 0.5 of 0.5 */
            }
            video,object {
                padding-left: 5%;
                padding-right: 5%;
                max-width: 700px;
                width: 90%;
                max-height:90vh;
            }
            </style>
            
            
            <body>
            <h1>html backtick page</h1>
            <br>
            
    <br><div>
    <video id="vidl" controls onratechange="setcl()" src="${string19l}" 
    // width="90%" 
    >
    </video>
    </div>
    <br>
    <br>
    
    <div >
    <video id="vidh" controls  onratechange="setch()" src="${string19h}" 
     
    >
    </video>
    </div>
    <br>
    
    <script>
    
    
    const vidl = document.getElementById("vidl")
    const vidh = document.getElementById("vidh")
    
    const date = new Date();
    date.setTime(date.getTime()+(24*60*60*1000))
    let exp = date.toUTCString();
    
    function setcl(){
        
        document.cookie ="pbs="+vidl.playbackRate+"end;expires="+exp+"; path=/";
        
    }
    function setch(){
        document.cookie ="pbs="+vidh.playbackRate+"end;expires="+exp+"; path=/";
    }
    
    window.onload = function(){
        setTimeout(() => {
            let dmc = document.cookie;
            let regc = /pbs.*end/
            if (regc.test(dmc)){
                let strc = regc.exec(dmc)[0];
                strc = strc.slice(4,strc.length-3);
                vidl.playbackRate = strc;
                vidh.playbackRate = strc;
                
                
            }else{
            }
            
        }, 2000);
        
        if ( "${string19l}" == "notavailable"){
            vidl.style.visibility = "hidden";
        }
        if ("${string19h}" == "notavailable"){
            vidh.style.visibility = "hidden";
        }
        
    }
    </script>
    </body>
    
    </html>`)
    
    
}catch(err){
    console.log("error happen ggggg   "+err);
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    
    </head>
    <body>
    <h1>Error Happen</h1>
    <br>
    <h1>Please report to complain section</h1>
    <script>
    
    
    
    const date = new Date();
    date.setTime(date.getTime()+(24*60*60*1000))
    let exp = date.toUTCString();

    window.onload = function(){
        setTimeout(() => {
            
            let dmc = document.cookie;
            
            let regc = /boxvrel.*end/
            
            
            
            if (regc.test(dmc)){
                
                let strc = regc.exec(dmc)[0];
                
                strc = strc.slice(8,strc.length-3);
                
                if(strc<=5){
                    let strc2 = parseInt(strc)+1;
                    document.cookie ="boxvrel="+strc2+"end;expires="+exp+"; path=/";
                    location.reload();
                    
                }else{
                    document.cookie ="boxvrel="+"1"+"end;expires="+exp+"; path=/";
                    
                }
                
            }else{
                document.cookie ="boxvrel=1end;expires="+exp+"; path=/";
                location.reload();
            }
            
            
        }, 500);
    }
    </script>
    </body>
    </html>`)
}
})


















// app.get('*',(req,res)=>{

//     // res.send("error page in node js reach at           "+req.url)
//     // res.redirect('./index.html')
//     console.log(path.join(__dirname+"/staticmade/build/index.html")); 
//     res.sendFile(path.join(__dirname+"/staticmade/build/index.html"))
// })

app.get('/home',(req,res)=>{

    // res.send("error page in node js reach at           "+req.url)
    // res.redirect('./index.html')
    console.log(path.join(__dirname+"/staticmade/build/index.html")); 
    res.sendFile(path.join(__dirname+"/staticmade/build/index.html"))
})
app.get('/about',(req,res)=>{

    // res.send("error page in node js reach at           "+req.url)
    // res.redirect('./index.html')
    console.log(path.join(__dirname+"/staticmade/build/index.html")); 
    res.sendFile(path.join(__dirname+"/staticmade/build/index.html"))
})
app.get('/contact',(req,res)=>{

    // res.send("error page in node js reach at           "+req.url)
    // res.redirect('./index.html')
    console.log(path.join(__dirname+"/staticmade/build/index.html")); 
    res.sendFile(path.join(__dirname+"/staticmade/build/index.html"))
})

app.get('/tag/:tag',(req,res)=>{

    // res.send("error page in node js reach at           "+req.url)
    // res.redirect('./index.html')
    console.log(path.join(__dirname+"/staticmade/build/index.html")); 
    res.sendFile(path.join(__dirname+"/staticmade/build/index.html"))
})
app.get('/tag2/:tag',(req,res)=>{

    // res.send("error page in node js reach at           "+req.url)
    // res.redirect('./index.html')
    console.log(path.join(__dirname+"/staticmade/build/index.html")); 
    res.sendFile(path.join(__dirname+"/staticmade/build/index.html"))
})


app.get('/privacypolicy',async (req,res)=>{
    res.sendFile(__dirname +"/privacyprotection.html")
})













const blobschemamade2 = mongoose.Schema({
    // _id: Number,
    username: String,
    url: String,
    email: String,
    phone: Number
  

});










const collectionref2 = mongoose.model("suggesions",blobschemamade2);  // first is collection name, second field is schema name, above connect address have database name between / ?

async function runhere2(){

    // saving the data in database
    const colref2 = await collectionref2.create({
        _id: 17717,
        title: "Counting page visitor",
        vcount: 0,
    }).then((obj1)=>{ return "updone"}).catch((obj2)=>{ return "notdone"})

    return colref2
}




app.post("/postmade2",async (req,res)=>{
    // console.log("it works");
    let reqbody = req.body;
    // console.log(reqbody);
    
    const runval = await collectionref2.create({
        username: reqbody.username,
        url: reqbody.url,
        email: reqbody.email,
        phone: reqbody.phone
    }).then((obj1)=>{
        // console.log(obj1) // returns json of sended body
        return "updone"
    }).catch((obj2)=>{ return "notdone"})
    

    if(runval == "updone" ){
        res.send("donedb")
    }else{
        res.send("notdonedb")
    }
    
})


app.listen(process.env.PORT || 4000)