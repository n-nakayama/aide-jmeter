//
// WLM(cfn): GetEndpoint
//
//OUT.println("TEST: GetEndpoint");
var body = sampleResult.getResponseDataAsString();
var json = JSON.parse(body);
var catalogtype = vars.get("catalogtype");
vars.put("endpoint", "");

if (json.token.catalog == undefined) {
	//OUT.println("undefined...");

}else{
	for (var i in json.token.catalog) {
		if (json.token.catalog[i]["type"] == catalogtype) {
			vars.put("endpoint", getEndpoint(json.token.catalog[i]["endpoints"]));
			break;
		}
	}
}
//OUT.println(vars.get("endpoint"));

//
// funcitons
//
function getEndpoint(endpoints) {
	for (var i in endpoints) {
		if ((endpoints[i]["interface"] != undefined) && (endpoints[i]["interface"] == "public")) {
			return endpoints[i]["url"];
		}
	}
	return null;
}
