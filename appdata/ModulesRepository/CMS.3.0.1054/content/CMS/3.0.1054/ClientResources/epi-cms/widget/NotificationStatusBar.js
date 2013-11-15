//>>built
require({cache:{"url:epi-cms/widget/templates/NotificationStatusBar.html":"<div>\r\n    <div class=\"epi-dijitTooltipTitleBar\">\r\n        <span class=\"epi-dijitTooltipTitle\">${res.title}</span>\r\n        <span class=\"epi-closeButton dijitDialogCloseIcon\" data-dojo-attach-point=\"closeIcon\" title=\"${res.title}\" role=\"button\"></span>\r\n    </div>\r\n    <div class=\"epi-dijitTooltipContent\" data-dojo-attach-point=\"zoneLayoutNode\">\r\n        <div data-dojo-attach-point=\"zoneContainer\">\r\n            <div data-dojo-type=\"epi-cms/widget/NotificationStatusZone\" data-dojo-attach-point=\"errorZone\" data-dojo-props=\"title: '${res.errortitle}', type: 'error'\"></div>\r\n            <div data-dojo-type=\"epi-cms/widget/NotificationStatusZone\" data-dojo-attach-point=\"warningZone\" data-dojo-props=\"title: '${res.warningtitle}', type: 'warning'\"></div>\r\n            <div data-dojo-type=\"epi-cms/widget/NotificationStatusZone\" data-dojo-attach-point=\"infoZone\"  data-dojo-props=\"title: '${res.notetitle}', type: 'note'\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"}});define("epi-cms/widget/NotificationStatusBar",["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom-class","dojo/keys","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/layout/BorderContainer","dojox/html/entities","epi/dependency","epi-cms/widget/NotificationStatusZone","epi-cms/widget/TooltipDialog","dojo/text!./templates/NotificationStatusBar.html","epi/i18n!epi/cms/nls/episerver.cms.widget.statusbar.notificationstatus"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10){return _2([_7,_8,_9],{res:_10,templateString:_f,_itemTemplate:"<li>{message}</li>",_notificationTooltipDialogCssClass:"epi-notificationToolipDialog epi-notificationToolipDialogCompact",_dimmedOutCssClass:"epi-notificationIcon-DimmedOut",_notificationErrorClass:"epi-notificationIcon-Error",_notificationWarningClass:"epi-notificationIcon-Warning",_notificationNoteClass:"epi-notificationIcon-Note",_totalNotifications:0,messageContext:null,_tooltipDialog:null,messageService:null,_observeHandle:null,zoneContainer:null,notificationContext:null,baseClass:"epi-notificationIcon",postMixInProperties:function(){this.inherited(arguments);this.messageService=this.messageService||_c.resolve("epi.shell.MessageService");},postCreate:function(){this.inherited(arguments);this._tooltipDialog=new _e({connectorMargin:47,hideOnBlur:true,content:this.zoneLayoutNode});this._buildIconBlock();_5.add(this._tooltipDialog.domNode,this._notificationTooltipDialogCssClass);this.connect(this.domNode,"onclick",_4.hitch(this,this._show));this.connect(this.domNode,"onkeypress",_4.hitch(this,this._onKeyPress));this.connect(this.closeIcon,"onclick",_4.hitch(this,this._hideTooltip));this.subscribe("/epi/cms/action/showerror",this.show);},update:function(_11){this._hideTooltip();this.messageContext=_11;this._listenMessagePool();this._updateUI();},destroy:function(){this._unListenMessagePool();this.inherited(arguments);},focus:function(){this.domNode.focus();},show:function(){this._keepShowing=true;this._showTooltip();},getMessages:function(_12){var _13=(_12)?_4.mixin({typeName:_12},this.messageContext):this.messageContext;return this.messageService.query(_13);},_onKeyPress:function(evt){if(evt.keyCode===_6.ENTER){this._show();}},_listenMessagePool:function(){this._unListenMessagePool();this._observeHandle=this.messageService.observe(this.messageContext,_4.hitch(this,function(){this._updateUI();}));},_unListenMessagePool:function(){if(this._observeHandle){this._observeHandle.cancel();delete this._observeHandle;}},_updateNotificationZone:function(_14,_15,_16){if(_16&&_16.length>0){_1.forEach(_16,function(_17){_14.addRow(_4.replace(_15,{message:_b.encode(_17.message)}),"last");});_14.show();}else{_14.hide();}},_updateUI:function(){this.errorZone.empty();this.warningZone.empty();this.infoZone.empty();var _18=this.getMessages("error");var _19=this.getMessages("warn");var _1a=this.getMessages("info");this._totalNotifications=_18.length+_19.length+_1a.length;this._buildIconBlock();this._updateNotificationZone(this.errorZone,this._itemTemplate,_18);this._updateNotificationZone(this.warningZone,this._itemTemplate,_19);this._updateNotificationZone(this.infoZone,this._itemTemplate,_1a);this._updateIconStatus(_18.length,_19.length,_1a.length);},_buildIconBlock:function(){this.domNode.innerHTML=this._totalNotifications;if(this._totalNotifications===0){_5.add(this.domNode,this._dimmedOutCssClass);_5.remove(this.domNode,this._notificationNoteClass);_5.remove(this.domNode,this._notificationWarningClass);_5.remove(this.domNode,this._notificationErrorClass);this._hideTooltip();}else{_5.remove(this.domNode,this._dimmedOutCssClass);}},_updateIconStatus:function(_1b,_1c,_1d){if(_1b){_5.add(this.domNode,this._notificationErrorClass);_5.remove(this.domNode,this._notificationNoteClass);_5.remove(this.domNode,this._notificationWarningClass);}else{if(_1c){_5.add(this.domNode,this._notificationWarningClass);_5.remove(this.domNode,this._notificationNoteClass);}else{if(_1d){_5.add(this.domNode,this._notificationNoteClass);}}}},_setNotificationContextAttr:function(_1e){this._set("notificationContext",_1e);this.update(_1e);},_show:function(e){if(e){_3.stop(e);}this._showTooltip();},_showTooltip:function(){if(this._totalNotifications===0){return;}this._tooltipDialog.showTooltipDialog(this.domNode,["below-alt"]);},_hideTooltip:function(){this._tooltipDialog.hideTooltipDialog();}});});