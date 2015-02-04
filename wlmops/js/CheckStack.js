//
// check stack
//
//OUT.println("test");
var body = sampleResult.getResponseDataAsString();
var json = JSON.parse(body);
var stackid = vars.get("stackId");

vars.put("stackName", "");
vars.put("stackStatus", "");

if (json.StackSummary != undefined) {
	vars.put("stackName", json.StackSummary["Name"]);
	vars.put("stackStatus", json.StackSummary["Arn"]);

}else{
	for (var i in json.Stacks) {
		if (json.Stacks[i]["StackId"] == stackid) {
			vars.put("stackName", json.Stacks[i]["Name"]);
			vars.put("stackStatus", json.Stacks[i]["CreatedAt"]);
			break;
		}
	}
}
