(function(t){
t.fn.circliful=function(i){
  var e=t.extend({startdegree:0,fgcolor:"#556b2f",bgcolor:"#eee",fill:!1,width:15,dimension:200,fontsize:15,percent:50,animationstep:1,iconsize:"20px",iconcolor:"#999",border:"default",complete:null,bordersize:10},i);
return this.each(function(){
function a(i,e,a){
 t("<span></span>").appendTo(i).addClass(e).text(s).prepend(l).css({"line-height":a+"px","font-size":h.fontsize+"px"})}
function n(i,e){t("<span></span>").appendTo(i).addClass("circle-info-half").css("line-height",h.dimension*e+"px").text(r)}
function o(i){t.each(c,function(a,n){h[n]=void 0!=i.data(n)?i.data(n):t(e).attr(n),"fill"==n&&void 0!=i.data("fill")&&(m=!0)})}
function d(e){u.clearRect(0,0,g.width,g.height),u.beginPath(),u.arc(x,b,w,z,y,!1),u.lineWidth=h.width+1,u.strokeStyle=h.bgcolor,u.stroke(),m&&(u.fillStyle=h.fill,u.fill()),u.beginPath(),u.arc(x,b,w,-k+T,C*e-k+T,!1),"outline"==h.border?u.lineWidth=h.width+13:"inline"==h.border&&(u.lineWidth=h.width-13),u.strokeStyle=h.fgcolor,u.stroke(),p>M&&(M+=I,requestAnimationFrame(function(){d(Math.min(M,p)/100)},f)),M==p&&S&&i!==void 0&&t.isFunction(i.complete)&&(i.complete(),S=!1)}
var s,r,c=["fgcolor","bgcolor","fill","width","dimension","fontsize","animationstep","endPercent","icon","iconcolor","iconsize","border","startdegree","bordersize"],h={},l="",p=0,f=t(this),m=!1;if(f.addClass("circliful"),o(f),void 0!=f.data("text")&&(s=f.data("text"),void 0!=f.data("icon")&&(l=t("<i></i>").addClass("fa "+t(this).data("icon")).css({color:h.iconcolor,"font-size":h.iconsize})),void 0!=f.data("type")?(F=t(this).data("type"),"half"==F?a(f,"circle-text-half",h.dimension/1.45):a(f,"circle-text",h.dimension)):a(f,"circle-text",h.dimension)),void 0!=t(this).data("total")&&void 0!=t(this).data("part")){var v=t(this).data("total")/100;percent=(t(this).data("part")/v/100).toFixed(3),p=(t(this).data("part")/v).toFixed(3)}else void 0!=t(this).data("percent")?(percent=t(this).data("percent")/100,p=t(this).data("percent")):percent=e.percent/100;void 0!=t(this).data("info")&&(r=t(this).data("info"),void 0!=t(this).data("type")?(F=t(this).data("type"),"half"==F?n(f,.9):n(f,1.25)):n(f,1.25)),t(this).width(h.dimension+"px");var g=t("<canvas></canvas>").attr({width:h.dimension,height:h.dimension}).appendTo(t(this)).get(0),u=g.getContext("2d");t(g).parent();var x=g.width/2,b=g.height/2,P=360*h.percent;P*(Math.PI/180);var w=g.width/2.5,y=2.3*Math.PI,z=0,M=0===h.animationstep?p:0,I=Math.max(h.animationstep,0),C=2*Math.PI,k=Math.PI/2,F="",S=!0,T=h.startdegree/180*Math.PI;void 0!=t(this).data("type")&&(F=t(this).data("type"),"half"==F&&(y=2*Math.PI,z=3.13,C=Math.PI,k=Math.PI/.996)),d(M/100)})}})(jQuery);

$(document).ready(function() {
	$('#myStat').hide();
	$('#myStat2').hide();
	$('#myStat3').hide();
	$('#myStat4').hide();
    $('#education_stats').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	if (isInView) {
            if (visiblePartX == 'both'){
		$('#myStat').fadeIn(3000).circliful();
		$('#myStat2').fadeIn(3000).circliful();
    		$('#myStat3').fadeIn(3000).circliful();
    		$('#myStat4').fadeIn(3000).circliful();
		$('#education_stats').off('inview');            
		}
        }
    });
});