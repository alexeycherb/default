		d = new Date();
		d.setHours(d.getHours(), d.getMinutes() + d.getTimezoneOffset());
		Data = d.getDate();
		Day = d.getDay();

		DataStop = new Date (2022, 05, 12);
        DataStop.setHours(DataStop.getHours() + 3, DataStop.getMinutes() + DataStop.getTimezoneOffset());
        
        if (d.getTime() < DataStop.getTime()) {
             document.write(" ");   


    }
        else {
            	document.getElementById('allrecords').style.display = '1mnone';

        }
