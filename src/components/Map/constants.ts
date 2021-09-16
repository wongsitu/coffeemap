interface CoffeeType {
  position: {
    lat: number;
    lng: number;
  };
  label?: string;
  title?: string;
  address?: string;
  zip?: number
}

const PEETS_COFFEE: CoffeeType[] = [
  {
    position: { lat: 40.78, lng: -73.935242 },
    label: "Peets",
  },
  {
    position: { lat: 40.79, lng: -73.9 },
    label: "Peets",
  },
];

const COFFEE_BEANS: CoffeeType[] = [
  {
    position: { lat: 40.79, lng: -73.9 },
    label: "Coffee Beans",
  },
  {
    position: { lat: 40.79, lng: -73.89 },
    label: "Coffee Beans",
  },
];

const STARBUCKS: CoffeeType[] = [
  {
    position: { lat: 40.7452374, lng: -73.9910732 },
    label: "Starbucks",
    address: "776 Avenue Of The Americas",
    zip:10001
  },{
    position: { lat: 40.7508032, lng: -73.9895229 },
    label: "Starbucks",
    address: "151 W 34th St",
    zip:10001
  },{
    position: { lat: 40.752723567873524, lng: -73.99287007132097 },
    label: "Starbucks",
    address: "494 8th Ave",
    zip:10001
  },{
    position: { lat: 40.75364434914777, lng: -73.9994344601557 },
    label: "Starbucks",
    address: "450 W 33rd St",
    zip:10001
  },{
    position: { lat: 40.748295651353814, lng: -73.98561706327932 },
    label: "Starbucks",
    address: "330 5th Ave",
    zip:10001
  },{
    position: { lat: 40.74857962083587, lng: -73.98538168396877 },
    label: "Starbucks",
    address: "334 5th Ave",
    zip:10001
  },{
    position: { lat: 40.74900882760214, lng: -73.99237076035432 },
    label: "Starbucks",
    address: "370 7th Ave Frnt 1",
    zip:10001
  },{
    position: { lat: 40.74693393792308, lng: -73.99332987973949 },
    label: "Starbucks",
    address: "315 7th Ave",
    zip:10001
  },{
    position: { lat: 40.71933854806032, lng: -73.98997951507425 },
    label: "Starbucks",
    address: "80 Delancey St",
    zip:10002
  },{
    position: { lat: 40.737979487877936, lng: -73.98836018092689 },
    label: "Starbucks",
    address: "240 Park Ave S",
    zip:10003
  },{
    position: { lat: 40.733801889321334, lng: -73.98658029896771 },
    label: "Starbucks",
    address: "145 3rd Ave",
    zip:10003
  },{
    position: { lat: 40.73506663934726, lng: -73.98981107086284 },
    label: "Starbucks",
    address: "10 Union Sq E",
    zip:10003
  },{
    position: { lat: 40.72954122942639, lng: -73.99629290198035 },
    label: "Starbucks",
    address: "79 Washington Sq E",
    zip:10003
  },{
    position: { lat: 40.70435634924207, lng: -74.01307873428962 },
    label: "Starbucks",
    address: "2 Broadway",
    zip:10004
  },{
    position: { lat: 40.703615726270556, lng: -74.01421332967452 },
    label: "Starbucks",
    address: "One Battery Park Plaza",
    zip:10004
  },{
    position: { lat: 40.70518486366345, lng: -74.01132064180653 },
    label: "Starbucks",
    address: "55 Broad St",
    zip:10004
  },{
    position: { lat: 40.70466424693143, lng: -74.00903231108035},
    label: "Starbucks",
    address: "110 Pearl St",
    zip:10005
  },{
    position: { lat: 40.70881517273454, lng: -74.00940700031758 },
    label: "Starbucks",
    address: "55 Liberty St",
    zip:10005
  },{
    position: { lat: 40.70480513890457, lng: -74.00714427915284 },
    label: "Starbucks",
    address: "99 Wall St",
    zip:10005
  },{
    position: { lat: 40.71218107763834, lng: -74.01080039004042 },
    label: "Starbucks",
    address: "185 Greenwich st",
    zip:10006
  },{
    position: { lat: 40.7111379612081, lng: -74.01538137356987},
    label: "Starbucks",
    address: "200 Liberty St",
    zip:10006
  },{
    position: { lat: 40.70959958060998, lng: -74.01389872764754},
    label: "Starbucks",
    address: "15 Carlisle St",
    zip:10006
  },{
    position: { lat: 40.70710637330923, lng: -74.01304072211946},
    label: "Starbucks",
    address: "55 Broadway",
    zip:10006
  },{
    position: { lat: 40.708858700713115, lng: -74.01100720979426},
    label: "Starbucks",
    address: "115 Broadway",
    zip:10006
  },{
    position: { lat: 440.714203957787724, lng: -74.0091012005639},
    label: "Starbucks",
    address: "120 Church St",
    zip:10007
  },{
    position: { lat: 40.71225109087047, lng: -74.01091283598565},
    label: "Starbucks",
    address: "33 Vesey St Loading Dock 2",
    zip:10007
  },{
    position: { lat: 40.71554070521893, lng: -74.00900408206506},
    label: "Starbucks",
    address: "125 Chambers St ",
    zip:10007
  },{
    position: { lat: 40.714858494259914, lng: -74.00595886081783},
    label: "Starbucks",
    address: "291 Broadway",
    zip:10007
  },{
    position: { lat: 40.71186401257218, lng: -74.00646287014601},
    label: "Starbucks",
    address: "38 Park Row",
    zip:10007
  },{
    position: { lat: 40.7334226644108, lng: -73.9809382734558},
    label: "Starbucks",
    address: "286 1st Ave",
    zip:10009
  },{
    position: { lat: 40.741807232409904, lng: -73.9902870057451},
    label: "Starbucks",
    address: "14 W 23rd St",
    zip:10010
  },{
    position: { lat: 40.74032765777891, lng: -73.98679415957675},
    label: "Starbucks",
    address: "304 Park Ave S",
    zip:10010
  },{
    position: { lat: 40.74188467770539, lng: -73.99332505658263},
    label: "Starbucks",
    address: "684 Avenue Of The Americas",
    zip:10010
  },{
    position: { lat: 40.741730358309795, lng: -74.00450571667783},
    label: "Starbucks",
    address: "76 9th Ave",
    zip:10011
  },{
    position: { lat: 40.741161809251246, lng: -74.00130164816551},
    label: "Starbucks",
    address: "128 8th Ave",
    zip:10011
  },{
    position: { lat: 40.778036278862594, lng: -73.98266243278285},
    label: "Starbucks",
    address: "2045 Broadway",
    zip:10011
  },{
    position: { lat: 40.73704336512472, lng: -73.99653157381977},
    label: "Starbucks",
    address: "510 Avenue Of The Americas",
    zip:10011
  },{
    position: { lat: 40.73311141116839, lng: -73.99975373718767},
    label: "Starbucks",
    address: "378 Avenue Of The Americas",
    zip:10011
  },{
    position: { lat: 40.74428561750472, lng: -73.99530275735889},
    label: "Starbucks",
    address: "229 7th Ave",
    zip:10011
  },{
    position: { lat: 40.745175515320376, lng: -73.99883377870812},
    label: "Starbucks",
    address: "300 W 23rd St",
    zip:10011
  },{
    position: { lat: 40.74304947797628, lng: -74.0003930574122},
    label: "Starbucks",
    address: "301 W 19th St",
    zip:10011
  },{
    position: { lat: 40.741277834535715, lng: -74.00127987651537},
    label: "Starbucks",
    address: "124 8th Ave",
    zip:10011
  },{
    position: { lat: 40.73935260910201, lng: -74.00251574850522},
    label: "Starbucks",
    address: "122 Greenwich Ave",
    zip:10011
  },{
    position: { lat: 40.72684927779427, lng: -74.00018793376734},
    label: "Starbucks",
    address: "482 W Broadway",
    zip:10011
  },{
    position: { lat: 40.71825674752863, lng: -73.99995975724099},
    label: "Starbucks",
    address: "241 Canal St",
    zip:10013
  },{
    position: { lat: 40.71578740711985, lng: -74.00311090276959},
    label: "Starbucks",
    address: "111 Worth St",
    zip:10013
  },{
    position: { lat: 40.71891465201101, lng: -74.00251268520235},
    label: "Starbucks",
    address: "405 Broadway",
    zip:10013
  },{
    position: { lat: 40.720465440473326, lng: -74.00096587472876},
    label: "Starbucks",
    address: "444 Broadway",
    zip:10013
  },{
    position: { lat: 40.73323683617163, lng: -74.00279714875934},
    label: "Starbucks",
    address: "72 Grove St",
    zip:10014
  },{
    position: { lat: 40.72766892448967, lng: -74.00747145560389},
    label: "Starbucks",
    address: "345 Hudson St",
    zip:10014
  },{
    position: { lat: 40.744178469872594, lng: -73.983706561494},
    label: "Starbucks",
    address: "424 Park Ave S",
    zip:10016
  },{
    position: { lat: 40.74366745696977, lng: -73.97691947320315},
    label: "Starbucks",
    address: "585 2nd Ave",
    zip:10016
  },{
    position: { lat: 40.750725565860016, lng: -73.97912737532279},
    label: "Starbucks",
    address: "90 Park Ave",
    zip:10016
  },{
    position: { lat: 40.74905009788495, lng: -73.98222914500792},
    label: "Starbucks",
    address: "200 Madison Ave",
    zip:10016
  },{
    position: { lat: 40.74911953821035, lng: -73.98377154190194},
    label: "Starbucks",
    address: "373 5th Ave",
    zip:10016
  },{
    position: { lat: 40.74503911019784, lng: -73.98679821148686},
    label: "Starbucks",
    address: "261 5th Ave",
    zip:10016
  },{
    position: { lat: 40.75709129890951, lng: -73.97596081675357},
    label: "Starbucks",
    address: "425 Madison Ave",
    zip:10017
  },{
    position: { lat: 40.75553519761515, lng: -73.97673547274799},
    label: "Starbucks",
    address: "383 Madison Ave",
    zip:10017
  },{
    position: { lat: 40.75034704550888, lng: -73.97705301667695},
    label: "Starbucks",
    address: "360 Lexington Ave",
    zip:10017
  },{
    position: { lat: 40.75179154131419, lng: -73.9776509484905},
    label: "Starbucks",
    address: "125 Park Ave",
    zip:10017
  },{
    position: { lat: 40.75157060031696, lng: -73.97361775976874},
    label: "Starbucks",
    address: "685 3rd Ave",
    zip:10017
  },{
    position: { lat: 40.753356390963276, lng: -73.97760972611808},
    label: "Starbucks",
    address: "7800 Grand Central Station Track 35",
    zip:10017
  },{
    position: { lat: 40.751075892926494, lng: -73.9752069276978},
    label: "Starbucks",
    address: "150 E 42nd St",
    zip:10017
  },{
    position: { lat: 40.75500933227817, lng: -73.97326807004866},
    label: "Starbucks",
    address: "511 Lexington Ave",
    zip:10017
  },{
    position: { lat: 40.756526698099016, lng: -73.97830188271364},
    label: "Starbucks",
    address: "575 5th Ave",
    zip:10017
  },{
    position: { lat: 40.74934749429189, lng: -73.97529744221443},
    label: "Starbucks",
    address: "605 3rd Ave",
    zip:10017
  },{
    position: { lat: 40.7533358090673, lng: -73.98509963895495},
    label: "Starbucks",
    address: "1040 6th Ave",
    zip:10018
  },{
    position: { lat: 40.751870079719154, lng: -73.99024483249234},
    label: "Starbucks",
    address: "462 Fashion Ave",
    zip:10018
  },{
    position: { lat: 40.753777182239, lng: -73.98842821806086},
    label: "Starbucks",
    address: "525 7th Ave",
    zip:10018
  },{
    position: { lat: 40.75448583030709, lng: -73.98730143009418},
    label: "Starbucks",
    address: "1411 Broadway",
    zip:10018
  },{
    position: { lat: 40.76380445443189, lng: -73.98234204467879},
    label: "Starbucks",
    address: "1700 Broadway",
    zip:10019
  },{
    position: { lat: 40.764429208268965, lng: -73.98107730548983},
    label: "Starbucks",
    address: "870 7th Ave",
    zip:10019
  },{
    position: { lat: 40.7606938254673, lng: -73.97861423530193},
    label: "Starbucks",
    address: "1290 Avenue Of The Americas",
    zip:10019
  },{
    position: { lat: 40.76231635963868, lng: 73.98753604937913},
    label: "Starbucks",
    address: "325 W 49th St",
    zip:10019
  },{
    position: { lat: 40.76758559219176, lng: -73.9829981468457},
    label: "Starbucks",
    address: "4 Columbus Cir",
    zip:10017
  },{
    position: { lat: 40.76479939233829, lng: -73.9771138868202},
    label: "Starbucks",
    address: "1411 Avenue of the Americas",
    zip:10019
  },{
    position: { lat: 40.7636468219398, lng: -73.97735085121322},
    label: "Starbucks",
    address: "1380 Avenue of the Americas",
    zip:10019
  },{
    position: { lat: 40.76377195001279, lng: -73.98529247440858},
    label: "Starbucks",
    address: "871 8th Ave",
    zip:10019
  },{
    position: { lat: 40.760944916493855, lng: -73.98381858267793},
    label: "Starbucks",
    address: "750 7th Ave",
    zip:10019
  },{
    position: { lat: 40.75956732326878, lng: -73.98001189908277},
    label: "Starbucks",
    address: "30 Rockefeller Plz, Spc A",
    zip:10020
  },{
    position: { lat: 40.771132389534245, lng: -73.95691551983755},
    label: "Starbucks",
    address: "1449 2nd Ave",
    zip:10021
  },{
    position: { lat: 40.770085195831015, lng: -73.95468212643549},
    label: "Starbucks",
    address: "1445 1st Ave",
    zip:10021
  },{
    position: { lat: 40.75637607848393, lng: -73.96476602561785},
    label: "Starbucks",
    address: "969 1st ave",
    zip:10022
  },{
    position: { lat: 40.76150481678624, lng: -73.96898052730718},
    label: "Starbucks",
    address: "135 E 57th St",
    zip:10022
  },{
    position: { lat: 40.761690904119895, lng: -73.97355782884394},
    label: "Starbucks",
    address: "600 Madison Ave ",
    zip:10022
  },{
    position: { lat: 40.7596235753786, lng: -73.97362432070938},
    label: "Starbucks",
    address: "515 Madison Ave",
    zip:10022
  },{
    position: { lat: 40.75964776526661, lng: -73.97004078631018},
    label: "Starbucks",
    address: "655 Lexington Ave ",
    zip:10022
  },{
    position: { lat: 40.75760633217725, lng: -73.96907977561881},
    label: "Starbucks",
    address: "875 3rd Ave ",
    zip:10022
  },{
    position: { lat: 40.756861617895815, lng: -73.97284348849598},
    label: "Starbucks",
    address: "560 Lexington Ave ",
    zip:10022
  },{
    position: { lat: 40.77818260505501, lng: -73.97808204265303},
    label: "Starbucks",
    address: "267 Columbus Ave Apt 275 ",
    zip:10023
  },{
    position: { lat: 40.77833417034093, lng: -73.97814019144705},
    label: "Starbucks",
    address: "48 W 73rd St ",
    zip:10023
  },{
    position: { lat: 40.78106056518281, lng: -73.98098375625592},
    label: "Starbucks",
    address: "2140 Broadway ",
    zip:10023
  },{
    position: { lat: 40.77454154537088, lng: -73.9808499815821},
    label: "Starbucks",
    address: "159 Columbus Ave ",
    zip:10023
  },{
    position: { lat: 40.7695074400034, lng: -73.98486410053106},
    label: "Starbucks",
    address: "2 Columbus Ave ",
    zip:10023
  },{
    position: { lat: 40.771566835579, lng: -73.9823507057701},
    label: "Starbucks",
    address: "1889 Broadway ",
    zip:10023
  },{
    position: { lat: 40.784951089700314, lng: -73.97885505051813},
    label: "Starbucks",
    address: "2252 Broadway",
    zip:10024
  },{
    position: { lat: 40.786841439548624, lng: -73.972192300259},
    label: "Starbucks",
    address: "540 Columbus Ave ",
    zip:10024
  },{
    position: { lat: 40.78924097773402, lng: -73.97541433934357},
    label: "Starbucks",
    address: "2394 Broadway ",
    zip:10024
  },{
    position: { lat: 40.78523087777067, lng: -73.97874981193293},
    label: "Starbucks",
    address: "2252 Broadway ",
    zip:10024
  },{
    position: { lat: 40.79386397816562, lng: -73.97274498417102},
    label: "Starbucks",
    address: "2521 Broadway ",
    zip:10025
  },{
    position: { lat: 40.80766976028773, lng: -73.96483256052316},
    label: "Starbucks",
    address: "2929 Broadway ",
    zip:10025
  },{
    position: { lat: 40.80647706391024, lng: -73.95455465177577},
    label: "Starbucks",
    address: "2195 Frederick Douglass Blvd",
    zip:10026
  },{
    position: { lat: 40.80780611516965, lng: -73.94514263279478},
    label: "Starbucks",
    address: "83 W 125th St ",
    zip:10027
  },{
    position: { lat: 40.77861276750315, lng: -73.95604279345307},
    label: "Starbucks",
    address: "1261 Lexington Ave ",
    zip:10028
  },{
    position: { lat: 40.77631106891239, lng: -73.95020876701808},
    label: "Starbucks",
    address: "1631 1st Ave ",
    zip:10028
  },{
    position: { lat: 40.77244124017408, lng: -73.94996591368707},
    label: "Starbucks",
    address: "1515 York Ave ",
    zip:10028
  },{
    position: { lat: 40.77749923312872, lng: -73.9552090880101},
    label: "Starbucks",
    address: "1488 3rd Ave ",
    zip:10028
  },{
    position: { lat: 40.84130895825493, lng: -73.93992778859071},
    label: "Starbucks",
    address: "4001 Broadway ",
    zip:10032
  },{
    position: { lat: 40.85109404278953, lng: -73.9384413800207},
    label: "Starbucks",
    address: "803 W 181st St",
    zip:10033
  },{
    position: { lat: 40.75793776288949, lng: -73.9795608689124},
    label: "Starbucks",
    address: "28 W 48th St",
    zip:10036
  },{
    position: { lat: 40.757173120840164, lng: -73.98111387894596},
    label: "Starbucks",
    address: "55 W 46th St",
    zip:10036
  },{
    position: { lat: 40.75576985375926, lng: -73.98020425878344},
    label: "Starbucks",
    address: "2 W 45th St",
    zip:10036
  },{
    position: { lat: 40.76179103813396, lng: -73.9973611084777},
    label: "Starbucks",
    address: "572 11th Avenue Retail, Suite A",
    zip:10036
  },{
    position: { lat: 40.75674231644087, lng: -73.9858938751045},
    label: "Starbucks",
    address: "1500 Broadway",
    zip:10036
  },{
    position: { lat: 40.758070907704514, lng: -73.98905978576813},
    label: "Starbucks",
    address: "684 8th ave",
    zip:10036
  },{
    position: { lat: 40.75774248853357, lng: -73.98512104051133},
    label: "Starbucks",
    address: "152 w 45th st",
    zip:10036
  },{
    position: { lat: 40.75974813589167, lng: -73.98525983273899},
    label: "Starbucks",
    address: "1585 Broadway",
    zip:10036
  },{
    position: { lat: 40.75925990621474, lng: -73.99251231587287},
    label: "Starbucks",
    address: "593 9th Ave",
    zip:10036
  },{
    position: { lat: 40.755768500757945, lng: -73.98413754996173},
    label: "Starbucks",
    address: "1109 Avenue Of The Americas",
    zip:10036
  },{
    position: { lat: 40.76058409735635, lng: -73.98718867354359},
    label: "Starbucks",
    address: "770 8th Ave",
    zip:10036
  },{
    position: { lat: 40.75817422260027, lng: -73.98900157539131},
    label: "Starbucks",
    address: "684 8th Ave",
    zip:10036
  },{
    position: { lat: 40.710299542549826, lng: -74.00788094101458},
    label: "Starbucks",
    address: "130 Fulton St",
    zip:10036
  },{
    position: { lat: 40.70866734880622, lng: -74.0073206852656},
    label: "Starbucks",
    address: "100 William St",
    zip:10038
  },{
    position: { lat: 40.71188569483523, lng: -74.00655621861213},
    label: "Starbucks",
    address: "38 Park Row",
    zip:10038
  },{
    position: { lat: 40.70749662061375, lng: -74.00491826978697},
    label: "Starbucks",
    address: "135 John St",
    zip:10038
  },{
    position: { lat: 40.760852011406456, lng: -73.96098659043446},
    label: "Starbucks",
    address: "1102 1st Ave",
    zip:10065
  },{
    position: { lat: 40.765981460206646, lng: -73.9635979582019},
    label: "Starbucks",
    address: "1128 3rd Ave",
    zip:10065
  },{
    position: { lat: 40.7642792484437, lng: -73.96442535562703},
    label: "Starbucks",
    address: "1077 3rd Ave",
    zip:10065
  },{
    position: { lat: 40.77345168952532, lng: -73.95976998473492},
    label: "Starbucks",
    address: "1095 Lexington Ave",
    zip:10075
  },{
    position: { lat: 40.78764413490974, lng: -73.95454369041983},
    label: "Starbucks",
    address: "1378 Madison Ave",
    zip:10128
  },{
    position: { lat: 40.75401530086481, lng: -73.97870954404644},
    label: "Starbucks",
    address: "340 Madison Ave",
    zip:10173
  },{
    position: { lat: 40.715097373901465, lng: -74.01215396575317},
    label: "Starbucks",
    address: "240 Greenwich St 16th Floor",
    zip:10286
  },{
    position: { lat: 40.72722094562711, lng: -73.99546351757253},
    label: "Starbucks",
    address: "665 Broadway",
    zip:10206
  }


];

export const COFEE_LIST = {
  PEETS_COFFEE,
  COFFEE_BEANS,
  STARBUCKS,
};
