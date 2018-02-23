var Algorithmia = require('algorithmia');
var input = `@relation phishing

@attribute having_IP_Address {-1,1}
@attribute URL_Length {1,0,-1}
@attribute Shortining_Service {1,-1}
@attribute having_At_Symbol {1,-1}
@attribute double_slash_redirecting {-1,1}
@attribute Prefix_Suffix {-1,1}
@attribute having_Sub_Domain {-1,0,1}
@attribute SSLfinal_State {-1,1,0}
@attribute Domain_registeration_length {-1,1}
@attribute Favicon {1,-1}
@attribute port {1,-1}
@attribute HTTPS_token {-1,1}
@attribute Request_URL {1,-1}
@attribute URL_of_Anchor {-1,0,1}
@attribute Links_in_tags {1,-1,0}
@attribute SFH {-1,1,0}
@attribute Submitting_to_email {-1,1}
@attribute Abnormal_URL {-1,1}
@attribute Redirect {0,1}
@attribute on_mouseover {1,-1}
@attribute RightClick {1,-1}
@attribute popUpWidnow {1,-1}
@attribute Iframe {1,-1}
@attribute age_of_domain {-1,1}
@attribute DNSRecord {-1,1}
@attribute web_traffic {-1,0,1}
@attribute Page_Rank {-1,1}
@attribute Google_Index {1,-1}
@attribute Statistical_report {-1,1}
@attribute Result {-1,1}

@data
1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,0,-1,1,1,0,1,1,1,1,-1,1,1,1,1,1,-1    
`;
Algorithmia.client("***REMOVED***")
.algo("util/WriteData/0.1.1")
.pipe(input)
.then(function(output) {
    console.log(output);
});