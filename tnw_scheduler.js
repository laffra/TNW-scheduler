
//////////////////////////////////////////////////////////////////
//
//  TNW Scheduling Assistant - by Chris Laffra, laffra@gmail.com
//
//////////////////////////////////////////////////////////////////

function updateSchedule() {
    $('header[instrumented!=true]')
	.map(function(index) { 
	    var header = $([this]);
	    var cls = header.closest('section')[0].className;
	    if (!cls.match(/blokks:activity/) || cls.match(/disabled/)) {
	    	return;
	    }
	    var id = 'TNW-attend-' + header.children().eq(0).text();
	    var checked = localStorage.getItem(id) == 'true';
	    var checkbox = $('<input />', { type: 'checkbox', id: id, value: id })
		.addClass('checkbox')
		.prop( "checked", checked)
		.on('click', function(event) { 
		    event.stopPropagation();
		    console.log(this.id + ' => ' + this.checked);
		    localStorage.setItem(this.id, this.checked);
		    var opacity = this.checked ? 1.0 : 0.3;
		    $(this).parent().parent().animate({ opacity: opacity }, 300);
		});
	    header
	    	.attr('instrumented', 'true')
	    	.parent()
		.animate({ opacity: checked ? 1.0 : 0.3 }, 100);
	    header
		.children()
		.first()
		.after(checkbox);
	});
}

setInterval(updateSchedule, 1000);

console.log("TNW Scheduling Assistant - started");
