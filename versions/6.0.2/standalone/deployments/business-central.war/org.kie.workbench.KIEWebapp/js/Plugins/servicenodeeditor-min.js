if(!ORYX.Plugins){ORYX.Plugins={}
}if(!ORYX.Config){ORYX.Config={}
}ORYX.Plugins.ServiceNodeEditor=Clazz.extend({construct:function(a){this.facade=a;
this.initServiceNodes();
if(ORYX.READONLY!=true){this.facade.offer({name:"Service Node Editor",functionality:this.showEditor.bind(this),group:ORYX.I18N.View.jbpmgroup,icon:ORYX.BASE_FILE_PATH+"images/servicenode.png",description:"Service Node Editor",index:9,minShape:0,maxShape:0,isEnabled:function(){return ORYX.READONLY!=true
}.bind(this)})
}},initServiceNodes:function(){},showEditor:function(){alert("hello")
}});