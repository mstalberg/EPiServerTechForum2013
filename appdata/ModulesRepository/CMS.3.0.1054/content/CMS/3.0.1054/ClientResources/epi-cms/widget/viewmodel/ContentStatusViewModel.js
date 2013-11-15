//>>built
define("epi-cms/widget/viewmodel/ContentStatusViewModel",["dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/when","dojo/promise/all","dojo/Stateful","epi/dependency","epi/shell/_StatefulGetterSetterMixin","epi-cms/contentediting/ContentActionSupport","epi/shell/_ContextMixin","epi-cms/ContentLanguageHelper","epi/i18n!epi/cms/nls/episerver.cms.contentediting.versionstatus"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){return _2([_7,_b],{_contentStructureStore:null,autoLoadStatus:false,statusIcon:null,statusMessage:null,constructor:function(){this._statusIconArray=[["epi-statusIndicatorIcon","epi-statusIndicator0"],["epi-statusIndicatorIcon","epi-statusIndicator1"],["epi-statusIndicatorIcon","epi-statusIndicator2"],["epi-statusIndicatorIcon","epi-statusIndicator3"],["epi-statusIndicatorIcon","epi-statusIndicator4"],["epi-statusIndicatorIcon","epi-statusIndicator5"],["epi-statusIndicatorIcon","epi-statusIndicator6"],["epi-statusIndicatorIcon","epi-statusIndicator7"]];this._statusMessageArray=[_d.notcreated,_d.rejected,_d.checkedout,_d.checkedin,_d.published,_d.previouslypublished,_d.delayedpublish,_d.expired];},postscript:function(){this.inherited(arguments);this._contentStructureStore=this._contentStructureStore||_8.resolve("epi.storeregistry").get("epi.cms.content.light");},loadStatus:function(){if(!this.contentLink){return;}_5(this.getCurrentContext(),_4.hitch(this,function(_e){_5(this._contentStructureStore.refresh(this.contentLink),_4.hitch(this,function(_f){if(_f&&_f.status!==undefined){this.set("content",_f);}}));}));},_contentLinkSetter:function(_10){if(!_10){return;}this.contentLink=_10;if(this.autoLoadStatus){this.loadStatus();}},_isDeletedGetter:function(){return this.get("content")&&this.get("content").isDeleted;},_isTranslationNeededGetter:function(){return this.get("content")&&this.get("content").missingLanguageBranch&&this.get("content").missingLanguageBranch.isTranslationNeeded;},_missingLanguageBranchGetter:function(){return this.get("content")&&this.get("content").missingLanguageBranch;},_contentSetter:function(_11){this.content=_11;this.set("contentStatus",_11.status);},_contentStatusSetter:function(_12){this.contentStatus=_12;if(!_12){return;}this.set("statusIcon",this._statusIconArray[_12]);_5(this._getStatusMessage(),_4.hitch(this,function(_13){this.set("statusMessage",_13);}));},_getStatusMessage:function(){if(this.get("isDeleted")){return _d.versionnotfound;}if(this.get("isTranslationNeeded")){return _c.getMissingLanguageMessage(this.content);}if(this.get("isVisibleOnSite")){return null;}return this._statusMessageArray[this.get("contentStatus")];},_isVisibleOnSiteGetter:function(){var _14=this.get("missingLanguageBranch");if(this.get("isDeleted")||_14&&_14.reason==6){return false;}return this.get("contentStatus")===_a.versionStatus.Published;}});});