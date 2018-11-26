(function(ns1, ns2){
    "use strict"
    ns2.myObjVar1 = { myVar1: "v1", msgO: "this is bound to myObjVar1: "};
    ns2.myObjVar2 = { myVar1: "v2", msgO: "this is bound to myObjVar2: "};
    ns2.myVar1 = "v3";

    ns2.myObjLiteral1 = {
        animaltype: "Dog",
        age: 2,
        food: "meat",
        speak: function speak(){
            return `I am a ${this.animaltype}, I am ${this.age} years old and I eat ${this.food}`;
        }
    } 

    ns2.ExplicitBinding = function ExplicitBinding(){
        //Private members
        var testCall1 = function testCall1()
            {

                return `${this.msgO} ${this.myVar1}`;
            },
            callDisplay1 = function callDisplay1(findElem, str)
            {
                $(findElem).append(`<li>jsExplicitBinding.testCall1.call(Gus.JS2.myObjVar1) = ${str} </li>`);
            },
            callDisplay2 = function callDisplay2(findElem, str)
            {
                $(findElem).append(`<li>jsExplicitBinding.testCall1.call(Gus.JS2.myObjVar2) = ${str} </li>`);
            },
            testApply1 = function testApply1(msg)
            {
                return `${msg} ${this.msgO} ${this.myVar1}`;
            },
            testApply1Display1 = function testApply1Display1(findElem, str)
            {
                $(findElem).append(`<li>${str} </li>`);
            },
            testBind1 = function testBind1(msg)
            {
                return `${msg}  ${this.msgO} ${this.myVar1}`;
            },
            testBind1Display1 = function testBind1Display1(findElem, str)
            {
                $(findElem).append(`<li>${str} </li>`);
            },

            testmyObjLiteral1Display1 = function testmyObjLiteral1Display1(findElem, str)
            {
                $(findElem).append(`<li>myObjLiteral1.speak = ${str} </li>`);
            },

            testmyObjLiteral1Display2 = function testmyObjLiteral1Display2(findElem, obj)
            {
                $(findElem).append(`<li>myObjLiteral2.speak call in another function = ${obj.speak()} </li>`);
            };

        //Public members 
        return {
            testCall1: testCall1,
            callDisplay1: callDisplay1,
            callDisplay2: callDisplay2,
            testApply1: testApply1,
            testApply1Display1: testApply1Display1,
            testBind1:testBind1,
            testBind1Display1:testBind1Display1,
            testmyObjLiteral1Display1: testmyObjLiteral1Display1,
            testmyObjLiteral1Display2:testmyObjLiteral1Display2
         

            // Numbers2 : Numbers2,
            // Numbers3 : Numbers3,
            // Numbers4 : Numbers4,
            // Numbers5 : Numbers5,
            // Numbers6 : Numbers6
        };

    };
    ns2.ProtoFn = function ProtoFn(obj){
        this.localObj = obj;
    };

    ns2.ProtoFn.prototype = function(){
        var testmyThis = function testmyThis(findElem)
        {
            $(findElem).append(`<li>this myVar1 = ${this.localObj.myVar1} this msgO = ${this.localObj.msgO} </li>`);
        },
        testmyMsgThis = function testmyMsgThis(findElem){
            $(findElem).append(`<li>this msgO = ${this.localObj.msgO} </li>`);
        };
        return {
            testmyThis: testmyThis,
            testmyMsgThis: testmyMsgThis
        }
    }();

})(window.Gus = window.Gus || {}, 
    window.Gus.JS2 = window.Gus.JS2 || {});