  var Currency = {
    rates: {"USD":1.0,"EUR":1.09147,"GBP":1.21984,"CAD":0.717333,"ARS":0.0147438,"AUD":0.652366,"BRL":0.174808,"CLP":0.00122033,"CNY":0.140593,"CYP":0.397899,"CZK":0.0394608,"DKK":0.146393,"EEK":0.0706676,"HKD":0.12901,"HUF":0.00309196,"ISK":0.00694809,"INR":0.0132187,"JMD":0.00699587,"JPY":0.00931241,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0421297,"NZD":0.603981,"NOK":0.099779,"PLN":0.239261,"SGD":0.704977,"SKK":21.5517,"SIT":175.439,"ZAR":0.0544948,"KRW":0.000816154,"SEK":0.103084,"CHF":1.02899,"TWD":0.0333964,"UYU":0.0226658,"MYR":0.229614,"BSD":1.0,"CRC":0.00175865,"RON":0.225543,"PHP":0.0196768,"AED":0.272294,"VEB":0.000100125,"IDR":6.74607e-05,"TRY":0.145389,"THB":0.0312233,"TTD":0.147903,"ILS":0.283585,"SYP":0.00194929,"XCD":0.370025,"COP":0.000259565,"RUB":0.0137536,"HRK":0.144432,"KZT":0.00239699,"TZS":0.0004321,"XPT":816.704,"SAR":0.266667,"NIO":0.0289254,"LAK":0.000111098,"OMR":2.60078,"AMD":0.0020543,"CDF":0.000575902,"KPW":0.00111106,"SPL":6.0,"KES":0.00936438,"ZWD":0.00276319,"KHR":0.000244126,"MVR":0.0649601,"GTQ":0.129913,"BZD":0.496209,"BYR":4.12067e-05,"LYD":0.705427,"DZD":0.00777894,"BIF":0.000523571,"GIP":1.21984,"BOB":0.145093,"XOF":0.00166393,"STD":4.42561e-05,"NGN":0.00257414,"PGK":0.29,"ERN":0.0666667,"MWK":0.00135819,"CUP":0.0377358,"GMD":0.0194576,"CVE":0.00989816,"BTN":0.0132187,"XAF":0.00166393,"UGX":0.000264028,"MAD":0.101814,"MNT":0.000357511,"LSL":0.0544948,"XAG":17.0976,"TOP":0.433853,"SHP":1.21984,"RSD":0.00928544,"HTG":0.00922712,"MGA":0.000261652,"MZN":0.0144837,"FKP":1.21984,"BWP":0.0821657,"HNL":0.0402558,"PYG":0.000152329,"JEP":1.21984,"EGP":0.0633367,"LBP":0.00066335,"ANG":0.55866,"WST":0.362388,"TVD":0.652366,"GYD":0.00478518,"GGP":1.21984,"NPR":0.00822315,"KMF":0.00221858,"IRR":2.38555e-05,"XPD":2015.12,"SRD":0.134095,"TMM":5.71418e-05,"SZL":0.0544948,"MOP":0.125253,"BMD":1.0,"XPF":0.00914652,"ETB":0.0295515,"JOD":1.41044,"MDL":0.0559664,"MRO":0.00263135,"YER":0.00399427,"BAM":0.55806,"AWG":0.558659,"PEN":0.291716,"VEF":0.100125,"SLL":0.000101641,"KYD":1.21951,"AOA":0.00176383,"TND":0.346892,"TJS":0.097644,"SCR":0.0588849,"LKR":0.00532761,"DJF":0.00562534,"GNF":0.000106397,"VUV":0.00820762,"SDG":0.0180832,"IMP":1.21984,"GEL":0.312211,"FJD":0.445297,"DOP":0.0180537,"XDR":1.36339,"MUR":0.0250858,"MMK":0.000713875,"LRD":0.00503954,"BBD":0.5,"ZMK":5.41157e-05,"XAU":1734.95,"VND":4.28943e-05,"UAH":0.0376351,"TMT":0.285709,"IQD":0.000840761,"BGN":0.55806,"KGS":0.0130574,"RWF":0.00106858,"BHD":2.65957,"UZS":9.85879e-05,"PKR":0.00622863,"MKD":0.0175896,"AFN":0.0130413,"NAD":0.0544948,"BDT":0.0117593,"AZN":0.589451,"SOS":0.00173475,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.120897,"ALL":0.00882146,"BND":0.704977,"KWD":3.2346,"GHS":0.172798,"ZMW":0.0541157,"XBT":9777.99,"NTD":0.0337206,"BYN":0.412067,"CNH":0.14053,"MRU":0.0263135,"STN":0.0442561,"VES":5.47375e-06,"MXV":0.268847},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };