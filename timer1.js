const timer = function(delay) {
	if(delay === undefined) {
		return
	}
	if(typeof delay !== 'number') {
		return
	}
	if(delay < 0) {
		return
	}

	const timeRemaining = delay * 1000

	setTimeout(() => {
		process.stdout.write('.\n');
	}, timeRemaining)
}

timer(2)
timer("j")
timer(-5)
//No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.