function hasNotch() {
	if (CSS.supports('padding-bottom: env(safe-area-inset-bottom)')) {
		let div = document.createElement('div');
		div.style.paddingBottom = 'env(safe-area-inset-bottom)';
		document.body.appendChild(div);
		let calculatedPadding = parseInt(window.getComputedStyle(div).paddingBottom, 10);
		document.body.removeChild(div);
		if (calculatedPadding > 0) {
			return true;
		}
	}
	return false;
}

function resize_statusbar() {
	var statusbar = document.getElementsByClassName("statusbar")[0];
	if (hasNotch()){
		statusbar.style.height = "70px";
	}
}

function app_touch(app){
	switch (app.id){
		case "FaceTime":
			window.location.href = "facetime-audio://";
			break;

		case "GameCenter":
			window.location.href = "gamecenter://";	
			break;

		case "photos":
			window.location.href = "photos-redirect://";	
			break;

		case "camera":
			break;

		case "youtube":
			window.location.href = "youtube://";	
			break;

		case "phone":
			window.location.href = "mobilephone://";	
			break;

		case "maps":
			window.location.href = "maps://";	
			break;

		case "Weather":
			break;

		case "Passbook":
			window.location.href = "shoebox://";	
			break;

		case "notes":
			window.location.href = "mobilenotes://";	
			break;

		case "Reminders":
			window.location.href = "x-apple-reminder://";	
			break;

		case "clock":
			window.location.href = "clock-alarm://";	
			break;

		case "stocks":
			window.location.href = "stocks://";	
			break;

		case "Newsstand":
			window.location.href = "applenews://";	
			break;

		case "iTunes":
			break;

		case "appstore":
			window.location.href = "applestore://";	
			break;

		case "settings":
			window.location.href = "prefs://";	
			break;

		case "facebook":
			window.location.href = "fb://";	
			break;

		case "twitter":
			window.location.href = "twitter://";	
			break;

		case "messages":
			window.location.href = "messages://";	
			break;

		case "mail":
			window.location.href = "message://";	
			break;

		case "safari":
			window.location.href = "x-web-search://";	
			break;

		case "music":
			window.location.href = "music://";	
			break;

	}
}