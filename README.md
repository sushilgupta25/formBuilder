# formBuilder
Easy formbuilder to post data 
you can use library using

var form = formBuilder("formId", "post", "http://www.example.com/");
form.add("txnId", "txnId", "hidden", "12345");
form.add("merchantId", "merchantId", "hidden", "mer1234");
form.generate();
form.submit();

