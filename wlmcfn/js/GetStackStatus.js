//
// WLM(cfn): GetStackStatus
//
//OUT.println("TEST: GetStackStatus");
var body = sampleResult.getResponseDataAsString();
var json = JSON.parse(body);

var stackid = vars.get("stackId");
vars.put("stackName", "");
vars.put("stackStatus", "");

if (stackid == null) {
	//set stackname when cannot create only
	var stackname = vars.get("stackname") + "_" + vars.get("__threadNum") + "_" + vars.get("counter");
//	OUT.println("stackname=" + stackname);
	for (var i in json.stacks) {
		if (json.stacks[i]["stack_name"] == stackname) {
			vars.put("stackId", json.stacks[i]["id"]);
			vars.put("stackStatus", json.stacks[i]["stack_status"]);
			break;
		}
	}

}else{
	if (json.stack != undefined) {
		vars.put("stackName", json.stack["stack_name"]);
		vars.put("stackStatus", json.stack["stack_status"]);

	}else{
		for (var i in json.stacks) {
			if (json.stacks[i]["id"] == stackid) {
				vars.put("stackName", json.stacks[i]["stack_name"]);
				vars.put("stackStatus", json.stacks[i]["stack_status"]);
				break;
			}
		}
	}
}
//OUT.println("stackId=" + stackid);
//OUT.println("stackName=" + vars.get("stackName"));
//OUT.println("stackStatus=" + vars.get("stackStatus"));
