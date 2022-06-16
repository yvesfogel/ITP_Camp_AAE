var window = new Window("palette", "My Script", undefined);
var startButton = window.add("button", undefined, "Run!!!!!")
window.show();

alert("running");

startButton.onClick = function(){
    var comp = app.project.activeItem;

    var layers = comp.selectedLayers;

    for(var i = 0; i< layers.length; i++){
        layers[i].Effects.addProperty("Slider Control");
    }
}