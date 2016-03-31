var socket = require("socket.io-client")("http://10.23.10.20:3000");
var gpio = require("rpi-gpio");

process.on("SIGINT",function(){
    gpio.write(12,true,function(){
        gpio.destroy(function(){
            process.exit();    
        });
    });
});

gpio.setup(12,gpio.DIR_OUT,function(){
    gpio.write(12,true); //turns led off
});

socket.on("connect",function(){
    console.log("Connected to server"); 
    socket.on("GPIOSwitch2UpdateState",function(state){
        console.log("The new state of GPIOSwitch2 is: " + state);
        gpio.write(12,!state);
    });
    socket.on("GPIOSwitch3UpdateState",function(state){
        console.log("The new state of GPIOSwitch3 is: " + state);
    });
    socket.on("GPIOSwitch4UpdateState",function(state){
        console.log("The new state of GPIOSwitch4 is: " + state);
    });
    socket.on("GPIOSwitch5UpdateState",function(state){
        console.log("The new state of GPIOSwitch5 is: " + state);
    });
    socket.on("GPIOSwitch6UpdateState",function(state){
        console.log("The new state of GPIOSwitch6 is: " + state);
    });
});