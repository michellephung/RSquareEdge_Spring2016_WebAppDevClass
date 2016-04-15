console.log("3 hello");

var myText = $('#myText').text("penguin");

var textA = $('#textA');

var version = 'v3';
var congressNumber = 113;
var chamber = 'senate';
var responseFormat = '.json';
var optionalParams = 'CA';
var APIKey = '065adf98404c7b86ff5ac5e30f29310a:8:62693059'

var membersEndpoint = 'https://api.nytimes.com/svc/politics/' + 
						version + '/us/legislative/congress/' + 
						congressNumber + '/' + 
						chamber + '/members' +
						responseFormat + '?[' + 
						optionalParams + ']&api-key=' +
						APIKey;
 
$.get(membersEndpoint, function(response) {
	textA.html(response);
	console.log(response);
}).done(function(response) {
	console.log('the whole response:', response);
	var insideTheResponse = response.results[0].members[3].twitter_account;
	console.log('one part of the response:', insideTheResponse);
	textA.html(insideTheResponse);
});