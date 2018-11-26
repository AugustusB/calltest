"use strict"
$(function(){
    try{
        
        var myObjVarReady1 = { myVar1: "v99", msgO: "this is bound to myObjVarReady1: "};
        var myObjVarReady2 = { myVar1: "v100", msgO: "this is bound to myObjVarReady2: "};
        var jsProtoFn1 = new Gus.JS2.ProtoFn(myObjVarReady1);
        var jsProtoFn2 = new Gus.JS2.ProtoFn(myObjVarReady2);

        var jsExplicitBinding = new Gus.JS2.ExplicitBinding();

        var str = jsExplicitBinding.testCall1.call(Gus.JS2.myObjVar1);
        jsExplicitBinding.callDisplay1('#call1 ol', str);

        str = jsExplicitBinding.testCall1.call(Gus.JS2.myObjVar2);
        jsExplicitBinding.callDisplay2('#call1 ol', str);

        str = jsExplicitBinding.testApply1.apply(Gus.JS2.myObjVar1, ["jsExplicitBinding.testApply1.apply(Gus.JS2.myObjVar1) = "]);
        jsExplicitBinding.testApply1Display1('#apply1 ol', str);

        str = jsExplicitBinding.testApply1.apply(Gus.JS2.myObjVar2, ["jsExplicitBinding.testApply1.apply(Gus.JS2.myObjVar2) = "]);
        jsExplicitBinding.testApply1Display1('#apply1 ol', str);

        str = jsExplicitBinding.testBind1.bind(Gus.JS2.myObjVar1, ["jsExplicitBinding.testBind1.bind(Gus.JS2.myObjVar1) = "])();
        jsExplicitBinding.testBind1Display1('#bind1 ol', str);

        str = jsExplicitBinding.testBind1.bind(Gus.JS2.myObjVar2, ["jsExplicitBinding.testBind1.bind(Gus.JS2.myObjVar2) = "])();
        jsExplicitBinding.testBind1Display1('#bind1 ol', str);

        str = Gus.JS2.myObjLiteral1.speak();
        jsExplicitBinding.testmyObjLiteral1Display1('#objLiteral ol', str);

        jsExplicitBinding.testmyObjLiteral1Display2('#objLiteral ol', Gus.JS2.myObjLiteral1);

        jsProtoFn1.testmyThis('#this ol');
        jsProtoFn2.testmyThis('#this ol');
        jsProtoFn1.testmyMsgThis('#this ol');
        jsProtoFn2.testmyMsgThis('#this ol');
        

    }catch(error)
    {
        $('#objLiteral ol').append("<li>Caught error : " + error + "</li>");
    }
    // var jsExplicitBinding = new Gus.JS2.ExplicitBinding();
    // var str = jsExplicitBinding.Call1.call(Gus.JS2.myObjVar1);
    // jsExplicitBinding.CallDisplay1('#call1 ol', str);
    // str = jsExplicitBinding.Call1.call(Gus.JS2.myObjVar2);
    // jsExplicitBinding.CallDisplay2('#call1 ol', str);
    // str = jsExplicitBinding.foo();
    // jsExplicitBinding.fooDisplay1('#call1 ol', str);
    // jsExplicitBinding.Call1('#call1 ol');
    // jsExplicitBinding.Numbers2('#number ol');
    // jsExplicitBinding.Numbers3('#number ol');
    // jsExplicitBinding.Numbers4('#number ol');
    // jsExplicitBinding.Numbers5('#number ol');
    // jsExplicitBinding.Numbers6('#number ol');

    // var jsString = new Gus.JS2.String();
    // jsString.String1('#string ol');

    // var jsBoolean = new Gus.JS2.Boolean();
    // jsBoolean.boolean1('#boolean ol');

    // var es6NewSyntax = new Gus.JS3.NewSytax();
    // es6NewSyntax.newLet1('#let ol');
    // es6NewSyntax.newLet2('#let ol');
    // es6NewSyntax.newLet3('#let ol');
    // es6NewSyntax.newLet4('#let ol');
    // es6NewSyntax.newLet5('#let ol');
    // es6NewSyntax.newLet6('#let ol');
    // es6NewSyntax.newConst7('#constant ol');
    // es6NewSyntax.jsLambda1('#fatArrow ol');
    // es6NewSyntax.jsLambda2('#fatArrow ol');
    // es6NewSyntax.jsLambda3('#fatArrow ol');
    // es6NewSyntax.jsLambda4('#fatArrow ol');
    // es6NewSyntax.jsFuncTestThis('#fatArrow ol');
    // es6NewSyntax.jsFuncTestThis1('#fatArrow ol', true);
    // es6NewSyntax.jsFuncTestThis2('#fatArrow ol');
    // es6NewSyntax.jsDynamicFunction('#dynamicFunction ol');
    // es6NewSyntax.jsDefaultParaFunc1('#defaultPara ol');
    // es6NewSyntax.jsRestOperator('#rest ol', 123, 'veg', 'meat', 'pasta');
    // es6NewSyntax.jsSpreadOperator('#spread ol');
    // es6NewSyntax.jsObjectLiteralsEx('#object ol');;
    // es6NewSyntax.jsForOfLoop('#forOfLoop ol');
    // es6NewSyntax.jsOctalBinary('#octalAndBinary ol');
    // es6NewSyntax.jsTemplateLiterals('#temporalLiteral ol');
    // es6NewSyntax.jsDestructuring('#destructuring ol');
});