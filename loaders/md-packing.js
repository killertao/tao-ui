const getOptions=require("loader-utils").getOptions;
module.exports=function(source){
    const options = getOptions(this);
    var response=source.replace("section",`section class="${options.class}"`);
    return response;
}