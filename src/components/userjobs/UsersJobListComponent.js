import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { t } from 'ttag';
import Spinner from 'react-bootstrap/Spinner';
import noDataImg from '../../images/no-data.png';
import hashHistory from '../../app.js';
import DrawerWithHeader from '../drawer/Drawer';
import FooterComponent from '../Footer/Footer';
import Pagination from 'react-js-pagination';
import '../../styles/argon.min.css';
import DatePicker from 'react-datepicker';
import { GetJobsList, ViewJobsList, GetProgramesList, ViewDupJobsList } from '../../actions/partners/PartnersActions';
import { ToastContainer, toast } from 'react-toastify';

class UsersJobListComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            adUsersList: [
                {
                    "sNo": "1", "uuId": "2554",
                    "name": "HSBC", "email": "hscbc@gmail.com", "mobileNumber": "9550012366", "Created Date": " 2021-10-28"
                },
                {
                    "sNo": "2", "uuId": "2556",
                    "name": "AXIs", "email": "axis@gmail.com", "mobileNumber": "9550012377", "Created Date": " 2021-10-28"
                }
            ],
            data: [
                {
                    "id": 21990,
                    "created": 1636458172206,
                    "firstName": "oPsnnmpUNctdObtklit",
                    "lastName": "btXjvdChrDoud",
                    "email": "sxridupcf@vhquRfuzeq.com",
                    "phone": "982-908-8875",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 1,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "3ye1mMpkzbNz9zcqy9nz1Wvrqjw6witzzzxqEtqaa9xuzgADpyFzfqTltiingu42yfhk0fkgjwyils0",
                    "sellingAddress": "g6cdrsjRiebFJcsmyfcgn0q0R1xhkbFtwoax7f29ptacmtCu2lzggPwfnpaen0rkvKXmw7nBn",
                    "purchasePriceRange": {
                        "lower": 6383902276005232084,
                        "upper": 4232452564275327703
                    },
                    "trafficSource": {
                        "source": "wznf6QhhrySobYvv",
                        "medium": "upjazhm9kwFewumbjyjyjlublzeb8aworp",
                        "campaign": "1hjvff",
                        "term": "npuivb5rexnazzkikgemylyncnEmbrXw",
                        "content": "lzacsbnoomajuy7kbebonudks"
                    },
                    "bank": {
                        "id": "9c4d692d-ccca-42c2-8ce7-3df13511498f",
                        "name": "HomePoint"
                    },
                    "data": {
                        "bankNotificationEmail": "xfreJiy@revcphStth.com",
                        "retailRoute": true
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1636458174658,
                            "role": "AGENT",
                            "user": {
                                "firstName": "szgukvz",
                                "lastName": "qrZRlfUabucxdglziNa",
                                "name": "szgukvz qrZRlfUabucxdglziNa",
                                "email": "kccwtdiysj@mocpdti.com",
                                "phone": "745-630-6689",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1636458173489,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1636458173314,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1636458173133,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21936,
                    "created": 1636456932164,
                    "firstName": "hoqasekoBuw",
                    "lastName": "jvanevcKiqdrquieyYvh",
                    "email": "Gjcrwhf@CBjxwzaykz.com",
                    "phone": "079-621-9980",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "Unknown"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 1,
                    "preQualified": false,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "Hleqqcgvi1yyupnoMkp9nwmkptpmkhVpW7Gm",
                    "sellingAddress": "vrnybdLsxEbksyqbtirlmXgtnbfbtusxrp5pTvlwx2vrtfzb7gzsi9loazcnzwurijkflbwjybuawmVsrhrgf",
                    "purchasePriceRange": {
                        "lower": 1,
                        "upper": -7067976713538974607
                    },
                    "trafficSource": {
                        "source": "qwagmphx05qzqmS",
                        "medium": "xga",
                        "campaign": "PzN52kmoxeTepmpwwqb8drun2yTbwzuK",
                        "term": "xlfzlc6owdqilqmphvp8ehmhta4o6",
                        "content": "yo7UvaezptbpYlbndYodfpqOtutxbyMJ51ffidflsngePzvvvu"
                    },
                    "bank": {
                        "id": "06d7eea6-a312-4233-b53b-de52ea1c240e",
                        "name": "Citizens"
                    },
                    "data": {
                        "bankNotificationEmail": "MSCqkho@lfDEwlp.com",
                        "retailRoute": true
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1636456935232,
                            "role": "AGENT",
                            "user": {
                                "firstName": "wrqbff",
                                "lastName": "phsiaixdz",
                                "name": "wrqbff phsiaixdz",
                                "email": "jzbpypohbe@gnmrkoeaj.com",
                                "phone": "503-340-6725",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1636456933460,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1636456933230,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1636456933009,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21885,
                    "created": 1636046934186,
                    "firstName": "tOcvvgfwnsnjfghK",
                    "lastName": "cruwyho",
                    "email": "walimfbex@dnLuqpshkk.com",
                    "phone": "406-159-6725",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 3,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "fy0ctgH9lpeot7dpqdzs40z3ybudhqzzkj01nmrkekmtsb3giSwyxwstxifjwj1l",
                    "sellingAddress": "hlb2htx9houYyhqtxcszTpomrmLezik07hzvy63l5dbjJlfyooqyz2zmpn",
                    "purchasePriceRange": {
                        "lower": 0,
                        "upper": -6996963021951393545
                    },
                    "trafficSource": {
                        "source": "moiTiuaoXiwWrjakJQxl",
                        "medium": "ylixUcQ6vcai4hp1PjcbtvsOgehqycheiauFohu",
                        "campaign": "Ecomd8qfl",
                        "content": "7zkzCdS6HAydlgb"
                    },
                    "bank": {
                        "id": "6e15ba77-a19a-4ccc-acc6-3aa3601fcbf9",
                        "name": "RBC"
                    },
                    "data": {
                        "bankNotificationEmail": "eorbkbwzq@jprhZrohpj.com",
                        "retailRoute": false
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1636046936553,
                            "role": "AGENT",
                            "user": {
                                "firstName": "itqotDpoxDqnpqgur",
                                "lastName": "ubwdzgbzdpmtaErsE",
                                "name": "itqotDpoxDqnpqgur ubwdzgbzdpmtaErsE",
                                "email": "snlbachnz@gxiputktu.com",
                                "phone": "371-136-6532",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1636046935548,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1636046935385,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1636046935156,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21835,
                    "created": 1635423779103,
                    "firstName": "wtgpLhydgt",
                    "lastName": "yjvvcgwekslij",
                    "email": "zpmwhosinz@axznttLzek.com",
                    "phone": "618-266-0574",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "Unknown"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 1,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "onr3a6b",
                    "sellingAddress": "Xypxc2syjitzkWXd0icixsqvi7ae5Lfzwexb60e7S3tGpsinaviapjcjIg",
                    "purchasePriceRange": {
                        "lower": -1,
                        "upper": 1
                    },
                    "trafficSource": {
                        "source": "yqryhobqcfeaax",
                        "medium": "rjh8qdHuBb",
                        "campaign": "xttGdbz1e917yzrvq1mczgm3",
                        "term": "zzlvLr4rx8vrTfdowiywiiy",
                        "content": ""
                    },
                    "bank": {
                        "id": "3eeaef5f-6f12-4b42-bb7b-3b0eb74e4b1f",
                        "name": "Fidelity"
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1635423781638,
                            "role": "AGENT",
                            "user": {
                                "firstName": "iizurXewfmngkpk",
                                "lastName": "qkllehgpaJu",
                                "name": "iizurXewfmngkpk qkllehgpaJu",
                                "email": "ugmnpugy@molnnldp.com",
                                "phone": "243-150-9099",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1635423780469,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1635423780288,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1635423779996,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21783,
                    "created": 1635355061293,
                    "firstName": "mqlllhlGmaaHztB",
                    "lastName": "iygbfbggswvdIuz",
                    "email": "wnwwKAdzfO@catinufhwo.com",
                    "phone": "173-595-5382",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 2,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "tplvyFahom2hnafQoc3pwnro0utnjj5e",
                    "sellingAddress": "j",
                    "purchasePriceRange": {
                        "lower": 9223372036854775807,
                        "upper": 2456382691289740727
                    },
                    "trafficSource": {
                        "source": "pyhfhp",
                        "medium": "mnAzrS4rqevt3rxivnyfygXkwmymjvlecoqr7vv",
                        "campaign": "",
                        "term": "iiphlmseta40jhconlvd3sxracomlaz9zhs",
                        "content": "of50gxucavwodfAcozmGnrEWwqgxexjnif"
                    },
                    "bank": {
                        "id": "1046a4d7-a3af-4533-8cf0-a02210b94ba1",
                        "name": "Alliant"
                    },
                    "data": {
                        "bankNotificationEmail": "kQkcmDh@iivcytqilw.com",
                        "retailRoute": false
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1635355063837,
                            "role": "AGENT",
                            "user": {
                                "firstName": "lqiEqmdi",
                                "lastName": "jtllftzziisypbytale",
                                "name": "lqiEqmdi jtllftzziisypbytale",
                                "email": "lmallpmiu@wjysjsur.com",
                                "phone": "771-730-7385",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1635355062754,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1635355062527,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1635355062259,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21736,
                    "created": 1635245181789,
                    "firstName": "pwkNuzufzotmninBhg",
                    "lastName": "nzxqvkgyvytSd",
                    "email": "itqabwhfjg@okcriSaig.com",
                    "phone": "487-844-7113",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 2,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "ak5fnc1ltlGVjffj2ts5me0ayBjKhgnknbftl2ggrfvcyyzyqzkpe",
                    "sellingAddress": "vbhywq1x9tilypjn",
                    "purchasePriceRange": {
                        "lower": 0,
                        "upper": 9223372036854775807
                    },
                    "trafficSource": {
                        "source": "",
                        "medium": "xpIHoxoLRj8ncdwqh",
                        "campaign": "ynuewzQy3rqkbdktvnbjv5go60FOu7iwjb9",
                        "content": "ydw"
                    },
                    "bank": {
                        "id": "2d662a5f-8415-459c-b2d3-44f287e1facd",
                        "name": "BBVA"
                    },
                    "data": {
                        "bankNotificationEmail": "vzxuacen@cumletf.com",
                        "retailRoute": true
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1635245184413,
                            "role": "AGENT",
                            "user": {
                                "firstName": "tejyfvhfwvfenP",
                                "lastName": "gpznVzilzUS",
                                "name": "tejyfvhfwvfenP gpznVzilzUS",
                                "email": "nsoczyheh@ruiawok.com",
                                "phone": "525-287-6454",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1635245183338,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1635245182972,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1635245182729,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21687,
                    "created": 1635183107749,
                    "firstName": "erukcyq",
                    "lastName": "thiLefmrzimtFhmggQ",
                    "email": "iysRcvnt@jCalonj.com",
                    "phone": "658-862-2185",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 2,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "lz3qukm4z3ZpqXdcB6Vf0pbeosytn4xa1eltejzwmekclszkm3qjefeum6z6pyfggrmsxOgbklyszwF",
                    "sellingAddress": "oagv",
                    "purchasePriceRange": {
                        "lower": -7568880980151426734,
                        "upper": -9223372036854775808
                    },
                    "trafficSource": {
                        "source": "3unFqy9k8vrLbk275ujlbqbuc5uewgxpv6HldtRal6u",
                        "medium": "1cidwpqbtxqt1szhbqhek8hYnxwntu",
                        "campaign": "vcs4",
                        "term": "i4arcTm27",
                        "content": "haci0rcoiij6M0nfvop3ukaefbqaAhlnwdveiXae3ezluepcs"
                    },
                    "bank": {
                        "id": "a1443203-486e-42a1-8c2f-01af57d0295c",
                        "name": "Regions"
                    },
                    "data": {
                        "bankNotificationEmail": "emxiuJlgbh@kstnmjb.com"
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1635183110422,
                            "role": "AGENT",
                            "user": {
                                "firstName": "imhwbswegAfez",
                                "lastName": "kpwarzl",
                                "name": "imhwbswegAfez kpwarzl",
                                "email": "kllrkxxs@prjvtosgbz.com",
                                "phone": "779-880-1828",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1635183108930,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1635183108745,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1635183108579,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21639,
                    "created": 1634936539652,
                    "firstName": "upjyVynwjcrvlizs",
                    "lastName": "mequy",
                    "email": "mfxBsspJ@noaidwsvjH.com",
                    "phone": "700-226-7960",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "Unknown"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 1,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "p4idxsectkfjvjhwAkqgYkeYfysqNacgxjxpwvbbCuja",
                    "sellingAddress": "Sialmg",
                    "purchasePriceRange": {
                        "lower": 2910785059245018842,
                        "upper": -8786545303081566421
                    },
                    "trafficSource": {
                        "source": "dnoeruKRhka4opPowMmoUaov3",
                        "medium": "s1k0vt2lTwzvpsriw1rtsdbu8fqytm9g6mrbmbesjap8umkgkc",
                        "campaign": "yYxxg9iiEhAlyyvRtrhjaln9",
                        "term": "",
                        "content": "hb4rjngzmwpoghtu"
                    },
                    "bank": {
                        "id": "eddca1b5-d6fd-4f68-996c-bcdcbea19ef9",
                        "name": "HSBC"
                    },
                    "data": {
                        "bankNotificationEmail": "gudjemk@ozzaquhjuf.com",
                        "retailRoute": true
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1634936542978,
                            "role": "AGENT",
                            "user": {
                                "firstName": "wwFtJplorqkit",
                                "lastName": "hecmJi",
                                "name": "wwFtJplorqkit hecmJi",
                                "email": "ctdwnrvgk@gfhfsyy.com",
                                "phone": "010-754-8198",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1634936541360,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "Activities",
                            "status": "Outreach Click to Call",
                            "data": {}
                        },
                        {
                            "timeStamp": 1634936541018,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1634936540817,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "brokerageContacted": true,
                    "assignmentHistory": [
                        {
                            "created": 1634936540599,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21587,
                    "created": 1634835562980,
                    "firstName": "upbsie",
                    "lastName": "mbvislfesyvf",
                    "email": "edekriayv@qdxzipnDa.com",
                    "phone": "098-187-2370",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 2,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "eibtocnrq2tsQug7hcTnpr",
                    "sellingAddress": "kdsspnjp3GohvdoKhuchczszNxAqtmo3ihmjFxtqVokhlibakl5jbxRfp",
                    "purchasePriceRange": {
                        "lower": 3219501556570304725,
                        "upper": 8237444239602907861
                    },
                    "trafficSource": {
                        "source": "yukcrslfjjikf7FgdohttxIll67gxgwjjdzg",
                        "medium": "frhwoFzZvunotfq1qhao1wqpf8d",
                        "term": "7kebq",
                        "content": "InfbfLo1pscolgkktigmbtmafeywcrtiudamixqgr6"
                    },
                    "bank": {
                        "id": "7ac24fe8-8709-41ba-8f0b-77837969200a",
                        "name": "Chase"
                    },
                    "data": {
                        "bankNotificationEmail": "buxyvqonob@glsqcHdWrl.com",
                        "retailRoute": true
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1634835565357,
                            "role": "AGENT",
                            "user": {
                                "firstName": "kvnxnmcid",
                                "lastName": "xueDiofmqtfpyaj",
                                "name": "kvnxnmcid xueDiofmqtfpyaj",
                                "email": "sqwcujnx@rlppmenzf.com",
                                "phone": "183-261-5582",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1634835564354,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1634835563989,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1634835563802,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21538,
                    "created": 1634638431607,
                    "firstName": "xcePnomcaeccjI",
                    "lastName": "ogbvpmc",
                    "email": "qivtcohcyb@EttmzTDhr.com",
                    "phone": "067-571-8700",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 1,
                    "preQualified": true,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "can1iw",
                    "sellingAddress": "ptmxenwLhhwohnzpgcrklkirH",
                    "purchasePriceRange": {
                        "lower": -4927701195652141893,
                        "upper": -1803941092221577597
                    },
                    "trafficSource": {
                        "source": "b5h0iCazkw",
                        "campaign": "krdrdjtehsKzruFmysffvifzqhwxz",
                        "term": "2bh",
                        "content": ""
                    },
                    "bank": {
                        "id": "1046a4d7-a3af-4533-8cf0-a02210b94ba1",
                        "name": "Alliant"
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1634638434450,
                            "role": "AGENT",
                            "user": {
                                "firstName": "gbvAdkcvlIEJycxdpu",
                                "lastName": "mczkrowacbacDqnkz",
                                "name": "gbvAdkcvlIEJycxdpu mczkrowacbacDqnkz",
                                "email": "akiwetuae@qcrknfofh.com",
                                "phone": "122-718-4225",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1634638433130,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1634638432843,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1634638432555,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
                {
                    "id": 21486,
                    "created": 1634576839989,
                    "firstName": "xlarnjuxxcbpcwmlsflV",
                    "lastName": "dtslzzcxpj",
                    "email": "tpwvzjg@jxnxyvmb.com",
                    "phone": "001-843-3656",
                    "purchaseLocation": {
                        "title": "78799"
                    },
                    "sellLocation": {
                        "title": "78704"
                    },
                    "currentLocation": "NY",
                    "timeFrame": 3,
                    "preQualified": false,
                    "isSeller": false,
                    "isBuyer": true,
                    "comments": "qtJiay9qbfbua2demrukkcZsrC",
                    "sellingAddress": "oxrMaed4evmt0z7xcerfzls57jlb7uwdfmtdnpkrpwf3tOkpwazyewewXiigltj0geuKmaseybfgyqwk6lw3l",
                    "purchasePriceRange": {
                        "lower": 9223372036854775807,
                        "upper": -9223372036854775808
                    },
                    "trafficSource": {
                        "source": "uvlz",
                        "medium": "crn2dsqxw3aTjymcxqiWcg7ayAwmzg5c7xsjidmlqk",
                        "campaign": "w4n12pXd",
                        "term": "llsu4osGpNvlb0nzhlgdnhdetjjopvmdwvlozw",
                        "content": "xwnb1hskbpkfzxcuWAqdrgeU8vsoDvkV3paHucbFpnscqlgskl"
                    },
                    "bank": {
                        "id": "06d7eea6-a312-4233-b53b-de52ea1c240e",
                        "name": "Citizens"
                    },
                    "data": {
                        "bankNotificationEmail": "ymofazxy@ynoBhxkwNh.com",
                        "retailRoute": true
                    },
                    "currentAssignments": {
                        "REFERRAL_COORDINATOR": {
                            "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                            "firstName": "Home",
                            "lastName": "Story",
                            "name": "Home Story",
                            "email": "routing+sandbox@homestory.co",
                            "phone": "555-555-1212",
                            "partner": {
                                "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                "name": "BHHS"
                            },
                            "partnerName": "BHHS"
                        }
                    },
                    "statuses": [
                        {
                            "timeStamp": 1634576842889,
                            "role": "AGENT",
                            "user": {
                                "firstName": "mzdhSbx",
                                "lastName": "JlwjppcsnyzuNnxenzab",
                                "name": "mzdhSbx JlwjppcsnyzuNnxenzab",
                                "email": "shifxlmw@djbiahvn.com",
                                "phone": "083-417-6799",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "Closed"
                        },
                        {
                            "timeStamp": 1634576841293,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "ConciergeStatus",
                            "status": "New New Referral"
                        },
                        {
                            "timeStamp": 1634576841105,
                            "role": "REFERRAL_COORDINATOR",
                            "user": {
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            },
                            "category": "PropertySearch",
                            "status": "New New Referral"
                        }
                    ],
                    "notes": [],
                    "assignmentHistory": [
                        {
                            "created": 1634576840922,
                            "role": "REFERRAL_COORDINATOR",
                            "profile": {
                                "aggregateId": "703f1284-b02d-4063-bf54-f093ff6925a5",
                                "firstName": "Home",
                                "lastName": "Story",
                                "name": "Home Story",
                                "email": "routing+sandbox@homestory.co",
                                "phone": "555-555-1212",
                                "partner": {
                                    "id": "2dca0e1b-dad1-4164-b440-7bc716bdf56d",
                                    "name": "BHHS"
                                },
                                "partnerName": "BHHS"
                            }
                        }
                    ],
                    "contactMethods": [
                        "PHONE",
                        "TEXT",
                        "EMAIL"
                    ],
                    "normalizedPurchaseLocation": {
                        "city": "Austin",
                        "state": "TX",
                        "zip": "78799",
                        "zipCodes": [
                            "78799"
                        ],
                        "country": "United States",
                        "latitude": 30.266944,
                        "longitude": -97.742778
                    },
                    "normalizedSellLocation": {}
                },
            ],
            jobsList: '',
            jobsCount: '',
            programesList: '',
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'

        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleClear = () => {
        this.setState({
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'

        })
        let getObj = {
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'
        };
        const _this = this;
        this.props.GetJobsList(getObj, (resObj) => {
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });
        });
    }

    handleInputChange() {
        var sDate = moment.utc(this.state.startDate).valueOf();
        var startDateTimeNumber = moment(sDate).format('YYYY-MM-DD').valueOf();
        var endDateNum = moment.utc(this.state.endDate).valueOf();
        var endDateTimeNumber = moment(endDateNum).format('YYYY-MM-DD').valueOf();
        let getObj = {
            startDate: this.state.startDate ? startDateTimeNumber : '',
            endDate: this.state.endDate ? endDateTimeNumber : '',
            programeName: this.state.programeName,
            partnerName: this.state.partnerName,
            jobStatus: this.state.jobStatus,
            activePage: this.state.activePage
        };
        const _this = this;
        this.props.GetJobsList(getObj, (resObj) => {
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });
        });

        //  this.props.GetADUsersList(getObj, function (resObj) { });
    }
    componentDidMount() {
        let getObj = {
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'
        };
        const _this = this;

        this.props.GetJobsList(getObj, (resObj) => {
            console.log(JSON.stringify(resObj))
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });
            console.log(JSON.stringify(resObj.statusResult.usersJobList))
        });
        this.props.GetProgramesList((resObj) => {
            _this.setState({ programesList: resObj.statusResult.usersLovList });
        });

    }

    handleCreateJob(event) {
        hashHistory.push('/job/creates');
        event.preventDefault();
    }
    handleViewJobs = (item, event) => {
        this.props.ViewJobsList(item.jobId, (resObj) => {

            hashHistory.push('/leads');



        });
        event.preventDefault();


    }
    handleDupJobs = (item, event) => {
        this.props.ViewDupJobsList(item.jobId, (resObj) => {

            hashHistory.push('/leads');



        });
        event.preventDefault();


    }
    handleChangeDate = (date) => {

        if (date > this.state.endDate) {
            this.setState({
                endDate: date,
                startDate: date,
                errorMessage: ''
            })
        } else {
            this.setState({
                startDate: date,
                errorMessage: ''
            });
        }
    }
    handleChangeEndDate = (date) => {
        this.setState({
            endDate: date,
            errorMessage: ''
        });
    };
    onClickHandlerPagination = pageNumber => {
        var sDate = moment.utc(this.state.startDate).valueOf();
        var startDateTimeNumber = moment(sDate).format('YYYY-MM-DD').valueOf();
        var endDateNum = moment.utc(this.state.endDate).valueOf();
        var endDateTimeNumber = moment(endDateNum).format('YYYY-MM-DD').valueOf();
        this.setState({ activePage: pageNumber });
        let data = {
            activePage: pageNumber,
            startDate: this.state.startDate ? startDateTimeNumber : '',
            endDate: this.state.endDate ? endDateTimeNumber : '',
            programeName: this.state.programeName,
            partnerName: this.state.partnerName,
            jobStatus: this.state.jobStatus
        };
        const _this = this;
        this.props.GetJobsList(data, function (resObj) {
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });

        });
    }


    render() {
        const { usersLovList } = this.props.LoginReducer;
        return (
            <div className="main-content" id="panel">
                {/* ------- Navbar --------- */}
                <DrawerWithHeader />
                <div className="header">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center" >
                                <div className="col-md-7">
                                    <h6 className="h2 d-inline-block mb-0">Jobs List</h6>
                                    <nav aria-label="breadcrumb" className="d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="" onClick={this.handleHomePage}><i className="fas fa-home"></i></a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Jobs List</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-md-5 text-right">
                                    <a href="" onClick={this.handleCreateJob} className="btn btn-success"><i className="fa fa-plus" /> Create Job</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admin-users-list">
                    <div className="container-fluid">
                        <div className="mb-2">

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="required">From Date</label>
                                        <DatePicker className="col-md-10" selected={this.state.startDate} maxLength="5" onChange={this.handleChangeDate} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="required">To Date</label>
                                        <DatePicker className="col-md-10" selected={this.state.endDate} maxLength="5" onChange={this.handleChangeEndDate} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Program Name</label>
                                        <select className="col-md-10" id="exampleFormControlSelect3" value={this.state.programeName} onChange={(event) => (this.setState({ programeName: event.target.value, errorMessage: '' }))}>
                                            {/* <option>Select</option>
                             <option>HomeStory followup</option>
                             <option>HomeStory Customer Verification- 1st touch</option>
                             <option>HomeStory Customer Verification- 2nd touch </option>
                             <option>HomeStory Agent Verification- 1st touch</option>
                             <option>HomeStory Agent Verification- 2nd touch</option>
                             <option>HomeStory Closed</option> */}
                                            <option value=''>Select</option>
                                            <option >All</option>
                                            {this.state.programesList && this.state.programesList.map((data, index) =>
                                                <option key={index} value={data.programeName}>{data.programeName}</option>
                                            )}

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Partner</label>
                                        <select className="col-md-10" id="exampleFormControlSelect3" value={this.state.partnerName} onChange={(event) => (this.setState({ partnerName: event.target.value, errorMessage: '' }))}>
                                            <option>Select</option>
                                            <option >All</option>
                                            <option>HSBC</option>
                                            <option>ZILLOW</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Job Status</label>
                                        <select className="col-md-10" id="exampleFormControlSelect3" value={this.state.jobStatus} onChange={(event) => (this.setState({ jobStatus: event.target.value, errorMessage: '' }))}>
                                            <option>Select</option>
                                            <option >All</option>
                                            <option>Success</option>
                                            <option>Failed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="search">
                                        <button className="btn btn-primary" onClick={this.handleInputChange}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="clear">
                                    <button className="btn btn-danger" onClick={this.handleClear}>
                                        Clear
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <span className="alert-icon"><i className="ni ni-like-2"></i></span>
                                        <span className="alert-text"><strong>You have {this.state.jobsCount} Jobs</strong> </span>
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    {this.state.data
                                        ? <div className="table-responsive">
                                            <table className="table align-items-center table-flush">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" className="sort" data-sort="name">Job Id</th>
                                                        <th scope="col" className="sort" data-sort="name">Program Name</th>
                                                        <th scope="col" className="sort" data-sort="name">Partner Name</th>
                                                        <th scope="col" className="sort" data-sort="name">Job Status</th>
                                                        <th scope="col" className="sort" data-sort="name">Count</th>
                                                        <th scope="col" className="sort" data-sort="completion">Dup Count</th>
                                                        <th scope="col" className="sort" data-sort="completion">job Created</th>



                                                    </tr>
                                                </thead>
                                                {this.state.jobsList && this.state.jobsList.map((item, i) =>
                                                    <tbody className="list" key={i}>
                                                        <tr>
                                                            <td className="budget">


                                                                <div className="profile-email">
                                                                    <span style={{ paddingLeft: 20 }}>{item.jobId}</span>
                                                                </div>
                                                            </td>
                                                            <td>{item.programeName}</td>
                                                            <td>{item.partnerName}</td>
                                                            <td>{item.status} </td>
                                                            <td>{item.leadsCount}
                                                                <a onClick={(event) => this.handleViewJobs(item, event)}
                                                                    className="table-action table-action1"
                                                                    data-toggle="tooltip"
                                                                    title="Edit Admin User">
                                                                    <i className="fas fa-eye" />
                                                                </a></td>
                                                            <td>
                                                                {item.dupCount}
                                                                <a onClick={(event) => this.handleDupJobs(item, event)}
                                                                    className="table-action table-action1"
                                                                    data-toggle="tooltip"
                                                                    title="Edit Admin User">
                                                                    <i className="fas fa-eye" />
                                                                </a>

                                                            </td>
                                                            <td>{moment(item.createdAtString).format('MMM DD, YYYY hh:mm:ss:A')} </td>
                                                            {/*<td><p className="mb-0">{moment(item.created).format('MMM DD, YYYY')}</p> </td>
                                <td><p className="mb-0"></p></td>
                                <td><p className="mb-0">{item.firstName}</p></td>
                                <td><p className="mb-0">{item.lastName}</p></td>
                                <td><p className="mb-0">{item.email}</p></td>
                                <td><p className="mb-0">{item.phone}</p></td>
                                <td><p className="mb-0">{item.purchaseLocation.title}</p></td>
                                <td><p className="mb-0">{item.sellingAddress}</p></td>
                                <td><p className="mb-0">{item.sellingAddress}</p></td>
                                <td><p className="mb-0">{item.sellingAddress}</p></td>
                                <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.firstName}</p></td>
                                <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.lastName}</p></td>
                                <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.email}</p></td>
                                <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.phone}</p></td>
                                <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.phone}</p></td> */}

                                                            {/* <td>
                                  <div className="cell">
                                    <div className="date"></div>
                                  </div>
                                </td> */}
                                                            {/* <td></td> */}
                                                            {/* <td> */}
                                                            {/* <a 
                                    className="table-action table-action1"
                                    data-toggle="tooltip"
                                    title="Edit Admin User">
                                    <i className="fas fa-user-edit" />
                                  </a>
                                  <a 
                                    className="table-action table-action7"
                                    data-toggle="tooltip"
                                    title="Update Address">
                                    <i className="fas fa-map-marker-alt" />
                                  </a> */}

                                                            {/* </td> */}
                                                        </tr>
                                                    </tbody>)}
                                            </table>
                                        </div>
                                        : this.state.loading
                                            ? <div className='text-center'><Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner></div>
                                            : <div className="no-data">
                                                <img src={noDataImg} alt="no data image" />
                                                <p>{t`lanCommonLabelNoUsersFound`}</p>
                                            </div>

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="card-footer">
                    {this.state.jobsCount > 10
                        ?
                        <div className='text-center'>
                            <div>
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={this.state.jobsCount}
                                    pageRangeDisplayed={5}
                                    onChange={this.onClickHandlerPagination}
                                />
                            </div>
                        </div>
                        : null}
                </div>

                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row">

                        </div>
                    </div>
                </div>
                {/*<FooterComponent />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    LoginReducer: state.LoginReducer

});

const mapDistachToProps = (dispatch) => ({
    GetJobsList: (data, cb) => dispatch(GetJobsList(data, cb)),
    GetProgramesList: (cb) => dispatch(GetProgramesList(cb)),
    ViewJobsList: (jobId, cb) => dispatch(ViewJobsList(jobId, cb)),
    ViewDupJobsList: (jobId, cb) => dispatch(ViewDupJobsList(jobId, cb)),



});

export default connect(
    mapStateToProps,
    mapDistachToProps,
)(UsersJobListComponent);

