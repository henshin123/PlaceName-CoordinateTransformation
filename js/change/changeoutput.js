//下载txt文本，保存在自己选择的路径中
function download(filename, text) 
{
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}
function OutputResult()
{
	$("#outpot_text_button").click(function(){
		filterarray = $("#textarea_outpot_text").val().split(/\r?\n/);
		var text = "";
		for(index =0;index<filterarray.length;index++)
		{
			text = text +filterarray[index]+ '\r\n';
		}
		download("result.txt",text);
	});
}
$(document).ready(function(){
	OutputResult();
});