
function showIntro(pauseTime){
		$('#t').fadeIn(500);
		setTimeout(function(){ 
            $('#i').fadeIn(700)}, pauseTime*5);
            setTimeout(function(){ 
            $('#2t').fadeIn(700)}, pauseTime*7);
            setTimeout(function(){ 
            $('#a').fadeIn(700)}, pauseTime*9);
            setTimeout(function(){ 
            $('#n').fadeIn(700)}, pauseTime*11);
            setTimeout(function(){ 
            $('#f').fadeIn(700)}, pauseTime*13);
            setTimeout(function(){ 
            $('#2a').fadeIn(700)}, pauseTime*15);
            setTimeout(function(){ 
            $('#l').fadeIn(700)}, pauseTime*17);
            setTimeout(function(){ 
			$('#2l').fadeIn(700)}, pauseTime*19);
}

showIntro(200);