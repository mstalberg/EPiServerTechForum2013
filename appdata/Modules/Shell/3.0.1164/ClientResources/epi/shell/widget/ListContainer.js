//>>built
require({cache:{"url:epi/shell/widget/templates/ListContainer.html":"<ul class=\"dijitReset dijitInline\" data-dojo-attach-point=\"containerNode\" tabindex=\"-1\"></ul>"}});define("epi/shell/widget/ListContainer",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-style","dojo/text!./templates/ListContainer.html","dijit/_Container","dijit/_KeyNavContainer","dijit/_TemplatedMixin","dijit/_Widget","dijit/_WidgetsInTemplateMixin","epi/shell/widget/ListItem"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){return _2([_a,_b,_9,_7,_8],{templateString:_6,updateVisibility:function(){var _d=_1.some(this.getChildren(),function(_e){return _e.childWidget&&_5.get(_e.childWidget.domNode,"display")!=="none";},this);_5.set(this.domNode,"display",_d?"":"none");},addChild:function(_f,_10){_f=new _c({childWidget:_f});this.inherited(arguments);}});});