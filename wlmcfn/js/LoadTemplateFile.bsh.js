//
// BSF preProcessor lang=beanshell
//
// WLM(cfn): LoadTemplateFile to var"templatefile"
// @params[0]: template filename
//
//System.out.println("TEST: LoadTemplateFile");
try{
	String filename = args[0];
	StringBuffer recs = new StringBuffer();
	File f = new File(filename);
	BufferedReader rd = new BufferedReader(new FileReader(f));
	String line = null;
	while((line = rd.readLine()) != null) {
		line = line.replaceAll("[\"]", "\\\\\"");
		recs.append(line + "\\r\\n");
	}
	rd.close();
	//template
	vars.put("templatefile", recs.toString());

}catch(Exception ex){
	vars.put("templatefile", "ERR: " + ex.getMessage());
	System.out.println("ERR: " + ex.getMessage());
}
