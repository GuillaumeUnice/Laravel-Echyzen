(function(){var a=function(){var a={routes:[{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/open","name":"debugbar.openhandler","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@handle"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/stylesheets","name":"debugbar.assets.css","action":"Barryvdh\Debugbar\Controllers\AssetController@css"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/javascript","name":"debugbar.assets.js","action":"Barryvdh\Debugbar\Controllers\AssetController@js"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":"index","action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/login\/{one?}\/{two?}\/{three?}\/{four?}\/{five?}","name":"auth.get.login","action":"AuthController@getLogin"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/inscription\/{one?}\/{two?}\/{three?}\/{four?}\/{five?}","name":"auth.get.inscription","action":"AuthController@getInscription"},{"host":null,"methods":["POST"],"uri":"auth\/login\/{one?}\/{two?}\/{three?}\/{four?}\/{five?}","name":"auth.post.login","action":"AuthController@postLogin"},{"host":null,"methods":["POST"],"uri":"auth\/inscription\/{one?}\/{two?}\/{three?}\/{four?}\/{five?}","name":"auth.post.inscription","action":"AuthController@postInscription"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/verify\/{one?}\/{two?}\/{three?}\/{four?}\/{five?}","name":null,"action":"AuthController@getVerify"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/logout\/{one?}\/{two?}\/{three?}\/{four?}\/{five?}","name":"auth.get.logout","action":"AuthController@getLogout"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE"],"uri":"auth\/{_missing}","name":null,"action":"AuthController@missingMethod"},{"host":null,"methods":["GET","HEAD"],"uri":"news","name":"news.index","action":"NewsController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"news\/create","name":"news.create","action":"NewsController@create"},{"host":null,"methods":["POST"],"uri":"news","name":"news.store","action":"NewsController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"news\/{news}","name":"news.show","action":"NewsController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"news\/{news}\/edit","name":"news.edit","action":"NewsController@edit"},{"host":null,"methods":["PUT"],"uri":"news\/{news}","name":"news.update","action":"NewsController@update"},{"host":null,"methods":["PATCH"],"uri":"news\/{news}","name":null,"action":"NewsController@update"},{"host":null,"methods":["DELETE"],"uri":"news\/{news}","name":"news.destroy","action":"NewsController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"up","name":null,"action":"Closure"},{"host":null,"methods":["POST"],"uri":"up","name":null,"action":"CustomController@imageUpload"}],route:function(a,b,c){return c=c||this.getByName(a),c?this.toRoute(c,b):void 0},toRoute:function(a,b){return uri=this.replaceNamedParameters(a.uri,b),qs=this.getRouteQueryString(b),"/"+uri.replace(/^\/?/,"")+qs},replaceNamedParameters:function(a,b){return a.replace(/\{(.*?)\??\}/g,function(a,c){return b.hasOwnProperty(c)?(value=b[c],delete b[c],value):void 0})},getRouteQueryString:function(a){qs=[];for(var b in a)a.hasOwnProperty(b)&&qs.push(b+"="+a[b]);return qs.length<1?"":"?"+qs.join("&")},getByName:function(a){for(var b in this.routes)if(this.routes.hasOwnProperty(b)&&this.routes[b].name===a)return this.routes[b]},getByAction:function(a){for(var b in this.routes)if(this.routes.hasOwnProperty(b)&&this.routes[b].action===a)return this.routes[b]}},b=function(a){if(!a)return"";attrs=[];for(var b in a)a.hasOwnProperty(b)&&attrs.push(b+'="'+a[b]+'"');return attrs.join(" ")};return{action:function(b,c){return c=c||{},a.route(b,c,a.getByAction(b))},route:function(b,c){return c=c||{},a.route(b,c)},link_to:function(a,c,d){return a="/"+a.replace(/^\/?/,""),c=c||a,d=b(d),'<a href="'+a+'" '+d+">"+c+"</a>"},link_to_route:function(a,b,c,d){return uri=this.route(a,c),b=b||uri,c=c||{},d=d||{},this.link_to(uri,b,d)},link_to_action:function(a,b,c,d){return uri=this.action(a,c),b=b||uri,c=c||{},d=d||{},this.link_to(uri,b,d)}}}.call(this);window.laroute=a}).call(this);
