const express = require("express");
const Router = express.Router();
const User = require("../model/userModel");

const bcrypt = require("bcrypt");
const saltRounds = 10;

//Routes relating to our users
export var temps = {};

Router.get("/login", async(req, res) => {
    const user = await User.find({});
    res.send(user);
});

Router.put("/balance", async(req, res) => {
    const username = req.body.username;
    const amount = req.body.amount;
    User.find({username:username})
        .exec((err, user) => {
            if (err) return  res.status(400).send(err);
            user[0].balance = user[0].balance - amount;
            user[0].save();
            return res.send("Success")
        });
});

//Whenever a user wants to edit their accounts
Router.put("/accountedit", async(req, res) => {
    const username = req.body.old_username;
    const new_user = req.body.username;
    const password = req.body.password;
    const first = req.body.first;
    const last = req.body.last; 

    const hashed = bcrypt.hashSync(password, saltRounds)
    // console.log(password)
    // console.log(hashed)


    User.find({username:username})
        .exec((err, user) => {
            if (err) return  res.status(400).send(err);
            user[0].username = new_user;
            user[0].password = hashed;
            user[0].firstname = first;
            user[0].lastname = last;
            user[0].save();
            return res.send("Success")
        });
});

//When a user uses a reference code
Router.put("/turnoff", async(req, res) => {
    const username = req.body.username;
    const users = await User.find({username:username});

    if (users.length !== 1){
        res.send("Not Found");
        return;
    }

    if (!users[0].usedRef){
        users[0].balance += 500;
        users[0].usedRef = true;
        await users[0].save();
        res.send("Success");
        return;
    }
    return res.send("Yes");

});

//Gets the user login by their username
Router.get("/login/:name", async(req, res) => {
    const name = req.params.name;
    // console.log("connected")
    // console.log(name)
    const user = await User.find({"username":name});
    res.send(user);
});
//Gets user login by their name and password, checks if entered password matches the hashed password stored in the database
Router.get("/login/:name/:password", async(req, res) => {
    const name = req.params.name;
    const password = req.params.password;

    //get uid
    var myUIDS = new Array()
    const uid = await User.find({"username":name},{"uid":1});
    const arrUID =  Array.from(uid).forEach(function(myDoc1){myUIDS.push(myDoc1.uid)})
    const myUID= myUIDS[0]

    temps[myUID]= password

    var myHashes = new Array()

    const hash = await User.find({"username":name},{"password":1});
    const arrID =  Array.from(hash).forEach(function(myDoc){myHashes.push(myDoc.password)})
    const myHash= myHashes[0]

    // console.log(myHash)
    // console.log(password)

    let answer = bcrypt.compareSync(password, myHash)
        if (answer) {
          console.log("It matches!")
          const user = await User.find({"username":name, "password":myHash});
          res.send(user);
        }
        else {
          console.log("Invalid password!");
          const user = await User.find({"username":name, "password":password});
          res.send(user);
        }
  
    
});
//User registers, hashes their password 
Router.put("/loginbet", async (req, res) => {
    const {username , password} = req.body;
    const count = await User.countDocuments({}).exec();
    const uid = "uid" + count;
    temps[uid]= password
    // console.log(temps)

    //new

    const hashed = bcrypt.hashSync(password, saltRounds)

    const object = {
        "username":username,
        "password":hashed,
        "uid":uid
    };

    // console.log(hashed)
    // console.log(password)

    const user = new User(object);
            try {
                await user.save();
                res.send("Success");
            }
            catch(error){
                res.status(500).send(error);
            }



  
});
//Gets the user password
Router.get("/gettemp/:uid", async(req, res) => {
    const uid = req.params.uid;
    // console.log(uid)
    let answer = temps[uid]
    console.log(temps)
    res.send(answer);
});

module.exports = Router;
// module.exports= temps;