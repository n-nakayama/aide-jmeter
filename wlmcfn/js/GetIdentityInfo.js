//
// WLM(cfn): GetIdentity information ※テスト中
//  - tenantId
//  - endpoint
//
//OUT.println("TEST: GetIdentityInfo");
var body = sampleResult.getResponseDataAsString();
var json = JSON.parse(body);
var domainname = vars.get("domainname");
var tenantname = vars.get("tenantname");
var catalogtype = vars.get("catalogtype");

vars.put("tenantId", "");
vars.put("endpoint", "");

//tenantId
if (json.token.project == undefined) {
	OUT.println("undefined... token.project");

}else{
	vars.put("tenantId", json.token.project.id);
}

//endpoint
if (json.token.catalog == undefined) {
	OUT.println("undefined... token.catalog");

}else{
	for (var i in json.token.catalog) {
		if (json.token.catalog[i]["type"] == catalogtype) {
			vars.put("endpoint", getEndpoint(json.token.catalog[i]["endpoints"]));
			break;
		}
	}
}

//
//funciton: get endpoint
//
function getEndpoint(endpoints) {
	for (var i in endpoints) {
		if ((endpoints[i]["interface"] != undefined) && (endpoints[i]["interface"] == "public")) {
			return endpoints[i]["url"];
		}
	}
	return null;
}
