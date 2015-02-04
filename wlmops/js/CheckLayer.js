//
// check layer
//
//OUT.println("test");
var body = sampleResult.getResponseDataAsString();
var json = JSON.parse(body);
var stackid = vars.get("stackId");
var layerid = vars.get("layerId");
vars.put("layerName", "");
vars.put("layerStatus", "");
for (var i in json.Layers) {
	if (json.Layers[i]["LayerId"] == layerid) {
		vars.put("layerName", json.Layers[i]["Name"]);
		vars.put("layerStatus", json.Layers[i]["CreatedAt"]);
		break;
	}
}
