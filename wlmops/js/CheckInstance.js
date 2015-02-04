//
// check instance
//
//OUT.println("test");
var body = sampleResult.getResponseDataAsString();
var json = JSON.parse(body);
var instanceid = vars.get("instanceId");
vars.put("isExist", false);
vars.put("instanceStatus", "");
for (var i in json.Instances) {
	if (json.Instances[i]["InstanceId"] == instanceid) {
		vars.put("instanceStatus", json.Instances[i]["Status"]);
		vars.put("isExist", true);
		break;
	}
}
//

//Status
// requested
// booting
// running_setup
// online
// setup_failed
// start_failed
// terminating
// terminated
// stopped
// connection_lost
//
