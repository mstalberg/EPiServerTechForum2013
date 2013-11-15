//>>built
define("epi-packaging/PackagesGrid",["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom-construct","dojo/dom-style","dojo/on","dojox/widget/Standby","dijit/layout/_LayoutWidget","dgrid/Keyboard","dgrid/OnDemandGrid","dgrid/Selection","epi","epi/datetime","epi/shell/widget/dialog/Confirmation","epi/shell/widget/dialog/Dialog","epi-packaging/ModulesList","epi-packaging/DetailedView","epi-packaging/ModuleSummary","epi/i18n!epi/packaging/nls/EPiServer.Packaging.UI.PackagesGrid","epi/i18n!epi/packaging/nls/EPiServer.Packaging.UI.ModuleSummary"],function(_1,_2,_3,_4,_5,_6,on,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14){return _2([_8,_10],{templateString:"<div style=\"height: auto\"></div>",_createStandbyWidget:function(){return new _7({target:this.domNode});},buildRendering:function(){this.inherited(arguments);var _15={titleWithVersion:{className:"epi-packaging-name",label:_c.resources.header.name,renderCell:_4.hitch(this,function(_16,_17,_18){if(_17){var _19=_5.create("a",{"class":"epi-packaging-namelink",href:"#details",innerHTML:_17});on(_19,"click",_4.hitch(this,function(evt){_3.stop(evt);this._openDetails(_16);}));_5.place(_19,_18);}})},description:{className:"epi-packaging-description",label:_c.resources.header.description},tags:{className:"epi-packaging-tags",label:_13.tags,renderCell:function(_1a,_1b,_1c){_1.forEach(_1b,function(tag){_5.create("span",{"class":"epi-valueItem",innerHTML:tag},_1c);});}},installDate:{className:"epi-packaging-installedDate",label:_13.installdate,formatter:function(_1d){return _d.toUserFriendlyString(_1d);}},installedBy:{className:"epi-packaging-installedBy",label:_13.installby},_item:{className:"epi-packaging-indicators",label:" ",sortable:false,renderCell:function(_1e,_1f,_20){if(_1e.isDisabled){_5.create("span",{"class":"epi-packaging-indicator epi-packaging-indicator--disabled",innerHTML:_13.disabledlabel},_20);}if(_1e.isSystem){_5.create("span",{"class":"epi-packaging-indicator epi-packaging-indicator--core",innerHTML:_13.systemlabel},_20);}if(_1e.isUpdateAvailable){_5.create("a",{"class":"epi-visibleLink",href:"#updates",innerHTML:_13.updatelink},_20);}}}};this.grid=new (_2([_a,_b,_9]))({columns:_15,selectionMode:"single",sort:[{attribute:"titleWithVersion",descending:false}],store:this._dataStore},this.domNode);_6.set(this.grid.bodyNode,"position","relative");},_buildModuleList:function(){this._renderModules(this._dataStore);},_renderModules:function(_21){this._destroyModuleList();this.grid.cleanup();this._listItems=[];_1.forEach(_21.data,function(_22){var _23={module:_22,antiForgeryData:this.antiForgeryData,_moduleStandby:this._standbyWigdet,_setButtonVisibility:function(){}};_22.moduleSummary=new _12(_23,null);this._connectModuleSummaryEvents(_22.moduleSummary);},this);this.grid.set("store",_21);},_openDetails:function(_24){var _25=this;var _26=new _f({content:new _11({currentPackage:_24,installHandler:_4.hitch(_26,function(){_25._showConfirmationDialog(_24,_14.installconfirmation,_4.hitch(_26,function(_27){if(_27){this.hide();_24.moduleSummary._installModule();}}));}),updateHandler:_4.hitch(_26,function(){_25._showConfirmationDialog(_24,_14.updateconfirmation,_4.hitch(_26,function(_28){if(_28){this.hide();_24.moduleSummary._updateModule();}}));}),unInstallHandler:_4.hitch(_26,function(){_25._showConfirmationDialog(_24,_14.uninstallconfirmation,_4.hitch(_26,function(_29){if(_29){this.hide();_24.moduleSummary._uninstallModule();}}));}),disableHandler:_4.hitch(_26,function(){_25._showConfirmationDialog(_24,_14.disableconfirmation,_4.hitch(_26,function(_2a){if(_2a){this.hide();_24.moduleSummary._disableModule();}}));}),enableHandler:_4.hitch(_26,function(){_25._showConfirmationDialog(_24,_14.enableconfirmation,_4.hitch(_26,function(_2b){if(_2b){this.hide();_24.moduleSummary._enableModule();}}));}),closeHandler:_4.hitch(_26,function(){_26.hide();})}),title:_24.title,destroyOnHide:true,defaultActionsVisible:false});_26.show();},_showConfirmationDialog:function(_2c,_2d,_2e){var _2f=new _e({description:_4.replace(_2d,{name:_2c.title,version:_2c.version}),title:_14.confirmationdialogtitle,onAction:_2e});_2f.show();}});});