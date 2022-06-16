function ameRender(comp, num){
    var bt = new BridgeTalk();
    var path = "~/Desktop";
    if(!BridgeTalk.isRunning("ame")){
        BridgeTalk.launch("ame", "background");
        alert("launching AME");
    }

    var rqItem = app.project.renderQueue.items.add(comp);
    var module = rqItem.outputModule(1);
    module.file = File(path + "/" + comp.name + num);
    app.project.renderQueue.queueInAME(true);
}

function changeSeed(comp, num){
    
    comp.layer("control")("Effects")("seed")("slider").setValue(Math.random() * 100);
    ameRender(comp, num);
}


var project = app.project;
var thisComp = project.activeItem;

for(var i = 0; i< 10; i++){
    changeSeed(thisComp, i);
}

