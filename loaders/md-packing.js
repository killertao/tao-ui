const getOptions=require("loader-utils").getOptions;
module.exports=function(source){
    const options = getOptions(this);
    var response=source.replace("section",`section class="${options.class}"`);
    response=response.replace(/<a.+?href="(.+?)">(.+?)<\/a>/g,
    function ($0,$1,$2) { return  `<a target="_blank" href="${$1}">${$2}</a>`})
    return response;
}