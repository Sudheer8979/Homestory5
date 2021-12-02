import { connect } from 'react-redux';
import DrawerWithHeader from '../drawer/Drawer';
import FooterComponent from '../Footer/Footer';
import hashHistory from '../../app.js';
import '../../styles/argon.min.css';
import { ToastContainer, toast } from 'react-toastify';
import { GetProgramesList, GetJobList, PostJob, PostJobsList, ViewJobsList, LeadsQualInsert} from '../../actions/partners/PartnersActions';


class UserJobCreateComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      paramaterList: [{ index:"", paramaterName: "", stepOrder: "" }],
      paramsName: '',
      startindex: '',
      errorMessage: '',
      limit: '',
      showall: '',
      latestStatus: '',
      cAPartner: '',
      cAEmail: '',
      brokerageCode: '',
      eitherName: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contacted: '',
      transactionType: '',
      ids: '',
      currentAssEmail: '',
      latestStatus1: '',
      sortBy: '',
      checked: false,
      hours: '',
      miniute: '',
      days: '',
      oneTime: false,
      programe: '',
      partner: '',
      connectionConfirmed: '',
      homeStoryContacted: '',
      rebatePaid: '',
      documentationReceived: '',
      fundsReceived: '',
      chaseId: '',
      loanDetailsSharingEnabled: '',
      brokerageContacted: '',
      fullName: '',
      aggregateId: '',
      statusUpdateReminder: '',
      currentAssignments: '',
      CA: '',
      CAE: '',
      consumerAccepted: '',
      hideContactDetails: '',
      siblingProfileId: '',
      unassigned: '',
      startIndexchecked: false,
      ProgrameNamechecked: false,
      partnerName: '',
      DDL1: [
        { name: 'start-index' },
        { name: 'limit' },
        { name: 'show-all' },
        { name: 'Latest Status.status' },
        { name: 'currentAssignments.partner' },
        { name: 'currentAssignments.email ' },
        { name: 'brokerageCode' },
        { name: 'eitherName' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'Email' },
        { name: 'Phone' },
        { name: 'Contacted' },
        { name: 'transactionType' },
        { name: 'ids' },
        { name: 'currentAssignments[.*].email' },
        { name: 'latestStatus[.*].status ' },
        { name: 'sortBy' },
        { name: 'connectionConfirmed' },
        { name: 'homeStoryContacted' },
        { name: 'rebatePaid' },
        { name: 'documentationReceived' },
        { name: 'fundsReceived' },
        { name: 'transactionType' },
        { name: 'chaseId' },
        { name: 'loanDetailsSharingEnabled' },
        { name: 'brokerageContacted' },
        { name: 'fullName' },
        { name: 'aggregateId' },
        { name: '"statusUpdateReminder[FROM][TO]' },
        { name: 'currentAssignments[AGENT].firstName' },
        { name: 'currentAssignments[AGENT].lastName' },
        { name: 'currentAssignments[.*].email' },
        { name: 'latestStatus[.*].status' },
        { name: 'consumerAccepted' },
        { name: 'hideContactDetails' },
        { name: 'siblingProfileId' },
        { name: 'unassigned' },

      ],
      pgsName: '',
      paName: '',
      paName0: '',
      pgsName1: '',
      url: '',
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
        
      ],
      programesList: '',
      programeName: '',
      leadsList: [],
      defaultDays: '',
      count: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOneTimeChange = this.handleOneTimeChange.bind(this)
    this.handleOnStartIndexChange = this.handleOnStartIndexChange.bind(this)
    this.handleOnProgrameNameChange = this.handleOnProgrameNameChange.bind(this)
    this.handleOnPartnerChange = this.handleOnPartnerChange.bind(this)
    

  }
  componentDidMount() {
    const _this = this;
    this.props.GetProgramesList((resObj) => {
      _this.setState({ programesList: resObj.statusResult.usersLovList });
    });
    _this.setState({leadsList: []})
  //}, 1000);
  }
  add(e) {
    this.setState((prevState) => ({
      paramaterList: [...prevState.paramaterList, { index: "", paramaterName: "", stepOrder: "" }],
      pgsName1: ''

    }));
    e.preventDefault()
  }
  cultivationStepsMainListDelete(record) {
    this.setState({
      paramaterList: this.state.paramaterList.filter(r => r !== record)
    });
  }



  handleChangeStepName = (e, idx) => {
    if (e.target.value + idx === "Programe Name0") {
      this.setState({ pgsName: e.target.value + idx });

    } else if (e.target.value + idx === "Partner1") {
      this.setState({ paName: e.target.value + idx });

    } else if (e.target.value + idx === "Partner0") {
      this.setState({ paName0: e.target.value + idx });

    } else if (e.target.value + idx === "Programe Name1") {
      this.setState({ pgsName1: e.target.value + idx });

    }
    if (["paramaterName"].includes(e.target.name)) {
      let paramaterList = [...this.state.paramaterList];
      
      paramaterList[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ paramaterList: paramaterList, paramsName: paramaterList[idx].paramaterName })
      
    }
  }
  handleChangeOtheField = (e, idx) => {
    let paramaterList = [...this.state.paramaterList];
    paramaterList[idx]['stepOrder'] = e.target.value;
    this.setState({ paramaterList: paramaterList })
    console.log(JSON.stringify(this.state.paramaterList))
    
  }
  
  handleJobCreate = () => {
    
   
   
    if(this.state.miniute ==='1'){
      toast.success('Sheduled Job Create Successfully');
      var body = {
        startindex: this.state.paramaterList[0].stepOrder ? this.state.paramaterList[0].stepOrder : '',
        limit: this.state.paramaterList[1] && this.state.paramaterList[1].stepOrder ? this.state.paramaterList[1].stepOrder : '',
        showall: this.state.paramaterList[2] && this.state.paramaterList[2].stepOrder ? this.state.paramaterList[2].stepOrder : '',
        latestStatus: this.state.paramaterList[3] && this.state.paramaterList[3].stepOrder ? this.state.paramaterList[3].stepOrder : '',
        cAPartner: this.state.paramaterList[4] && this.state.paramaterList[4].stepOrder ? this.state.paramaterList[4].stepOrder : '',
        cAEmail: this.state.paramaterList[5] && this.state.paramaterList[5].stepOrder ? this.state.paramaterList[5].stepOrder : '',
        brokerageCode: this.state.paramaterList[6] && this.state.paramaterList[6].stepOrder ? this.state.paramaterList[6].stepOrder : '',
        eitherName: this.state.paramaterList[7] && this.state.paramaterList[7].stepOrder ? this.state.paramaterList[7].stepOrder : '',
        firstName: this.state.paramaterList[8] && this.state.paramaterList[8].stepOrder ? this.state.paramaterList[8].stepOrder : '',
        lastName: this.state.paramaterList[9] && this.state.paramaterList[9].stepOrder ? this.state.paramaterList[9].stepOrder : '',
        email: this.state.paramaterList[10] && this.state.paramaterList[10].stepOrder ? this.state.paramaterList[10].stepOrder : '',
        phone: this.state.paramaterList[11] && this.state.paramaterList[11].stepOrder ? this.state.paramaterList[11].stepOrder : '',
  
        contacted: this.state.paramaterList[12] && this.state.paramaterList[12].stepOrder ? this.state.paramaterList[12].stepOrder : '',
        transactionType: this.state.paramaterList[13] && this.state.paramaterList[13].stepOrder ? this.state.paramaterList[13].stepOrder : '',
        ids: this.state.paramaterList[14] && this.state.paramaterList[14].stepOrder ? this.state.paramaterList[14].stepOrder : '',
        currentAssEmail: this.state.paramaterList[15] && this.state.paramaterList[15].stepOrder ? this.state.paramaterList[15].stepOrder : '',
        latestStatus1: this.state.paramaterList[16] && this.state.paramaterList[16].stepOrder ? this.state.paramaterList[16].stepOrder : '',
        sortBy: this.state.paramaterList[17] && this.state.paramaterList[17].stepOrder ? this.state.paramaterList[17].stepOrder : '',
        connectionConfirmed: this.state.paramaterList[18] && this.state.paramaterList[18].stepOrder ? this.state.paramaterList[18].stepOrder : '',
        homeStoryContacted: this.state.paramaterList[19] && this.state.paramaterList[19].stepOrder ? this.state.paramaterList[19].stepOrder : '',
        rebatePaid: this.state.paramaterList[20] && this.state.paramaterList[20].stepOrder ? this.state.paramaterList[20].stepOrder : '',
        documentationReceived: this.state.paramaterList[21] && this.state.paramaterList[21].stepOrder ? this.state.paramaterList[21].stepOrder : '',
        fundsReceived: this.state.paramaterList[22] && this.state.paramaterList[22].stepOrder ? this.state.paramaterList[22].stepOrder : '',
        chaseId: this.state.paramaterList[23] && this.state.paramaterList[23].stepOrder ? this.state.paramaterList[23].stepOrder : '',
        loanDetailsSharingEnabled: this.state.paramaterList[24] && this.state.paramaterList[24].stepOrder ? this.state.paramaterList[24].stepOrder : '',
        brokerageContacted: this.state.paramaterList[25] && this.state.paramaterList[25].stepOrder ? this.state.paramaterList[25].stepOrder : '',
        fullName: this.state.paramaterList[26] && this.state.paramaterList[26].stepOrder ? this.state.paramaterList[26].stepOrder : '',
        aggregateId: this.state.paramaterList[27] && this.state.paramaterList[27].stepOrder ? this.state.paramaterList[27].stepOrder : '',
        statusUpdateReminder: this.state.paramaterList[28] && this.state.paramaterList[28].stepOrder ? this.state.paramaterList[28].stepOrder : '',
        currentAssignments: this.state.paramaterList[29] && this.state.paramaterList[29].stepOrder ? this.state.paramaterList[29].stepOrder : '',
        CA: this.state.paramaterList[30] && this.state.paramaterList[30].stepOrder ? this.state.paramaterList[30].stepOrder : '',
        CAE: this.state.paramaterList[31] && this.state.paramaterList[31].stepOrder ? this.state.paramaterList[31].stepOrder : '',
        consumerAccepted: this.state.paramaterList[32] && this.state.paramaterList[32].stepOrder ? this.state.paramaterList[32].stepOrder : '',
        hideContactDetails: this.state.paramaterList[33] && this.state.paramaterList[33].stepOrder ? this.state.paramaterList[33].stepOrder : '',
        siblingProfileId: this.state.paramaterList[34] && this.state.paramaterList[34].stepOrder ? this.state.paramaterList[34].stepOrder : '',
        unassigned: this.state.paramaterList[35] && this.state.paramaterList[35].stepOrder ? this.state.paramaterList[35].stepOrder : ''
      }
      body = {
        programeName: this.state.programe,
        status: "Success",
        partnerName: this.state.partner,
        leadsCount: this.state.data.length
  
      }
      const _this = this;
     // setInterval(() => {
      this.props.PostJob(body, function (resObj) {
        if (resObj.statusCode === "9937") {
          _this.props.PostJobsList(_this.state.data, resObj.statusResult[0].jobId, (leadresObj) => {
            if (leadresObj.statusCode === "9937") {
             
            _this.setState({ leadsList: leadresObj.statusResult });
            }
          });
        } else {
          toast.success(resObj.statusResult.jobId   +'Create Successfully');
  
          _this.props.PostJobsList(_this.state.data, resObj.statusResult.jobId, (leadresObj) => {
           
           
  
          });
  
        }
  
  
      });
     // console.log("==========gopal")
    //}, 60000+60000);
      
    } 
    else if(this.state.hours ==='1'){
      toast.success('Sheduled Job Create Successfully');
      var body = {
        startindex: this.state.paramaterList[0].stepOrder ? this.state.paramaterList[0].stepOrder : '',
        limit: this.state.paramaterList[1] && this.state.paramaterList[1].stepOrder ? this.state.paramaterList[1].stepOrder : '',
        showall: this.state.paramaterList[2] && this.state.paramaterList[2].stepOrder ? this.state.paramaterList[2].stepOrder : '',
        latestStatus: this.state.paramaterList[3] && this.state.paramaterList[3].stepOrder ? this.state.paramaterList[3].stepOrder : '',
        cAPartner: this.state.paramaterList[4] && this.state.paramaterList[4].stepOrder ? this.state.paramaterList[4].stepOrder : '',
        cAEmail: this.state.paramaterList[5] && this.state.paramaterList[5].stepOrder ? this.state.paramaterList[5].stepOrder : '',
        brokerageCode: this.state.paramaterList[6] && this.state.paramaterList[6].stepOrder ? this.state.paramaterList[6].stepOrder : '',
        eitherName: this.state.paramaterList[7] && this.state.paramaterList[7].stepOrder ? this.state.paramaterList[7].stepOrder : '',
        firstName: this.state.paramaterList[8] && this.state.paramaterList[8].stepOrder ? this.state.paramaterList[8].stepOrder : '',
        lastName: this.state.paramaterList[9] && this.state.paramaterList[9].stepOrder ? this.state.paramaterList[9].stepOrder : '',
        email: this.state.paramaterList[10] && this.state.paramaterList[10].stepOrder ? this.state.paramaterList[10].stepOrder : '',
        phone: this.state.paramaterList[11] && this.state.paramaterList[11].stepOrder ? this.state.paramaterList[11].stepOrder : '',
  
        contacted: this.state.paramaterList[12] && this.state.paramaterList[12].stepOrder ? this.state.paramaterList[12].stepOrder : '',
        transactionType: this.state.paramaterList[13] && this.state.paramaterList[13].stepOrder ? this.state.paramaterList[13].stepOrder : '',
        ids: this.state.paramaterList[14] && this.state.paramaterList[14].stepOrder ? this.state.paramaterList[14].stepOrder : '',
        currentAssEmail: this.state.paramaterList[15] && this.state.paramaterList[15].stepOrder ? this.state.paramaterList[15].stepOrder : '',
        latestStatus1: this.state.paramaterList[16] && this.state.paramaterList[16].stepOrder ? this.state.paramaterList[16].stepOrder : '',
        sortBy: this.state.paramaterList[17] && this.state.paramaterList[17].stepOrder ? this.state.paramaterList[17].stepOrder : '',
        connectionConfirmed: this.state.paramaterList[18] && this.state.paramaterList[18].stepOrder ? this.state.paramaterList[18].stepOrder : '',
        homeStoryContacted: this.state.paramaterList[19] && this.state.paramaterList[19].stepOrder ? this.state.paramaterList[19].stepOrder : '',
        rebatePaid: this.state.paramaterList[20] && this.state.paramaterList[20].stepOrder ? this.state.paramaterList[20].stepOrder : '',
        documentationReceived: this.state.paramaterList[21] && this.state.paramaterList[21].stepOrder ? this.state.paramaterList[21].stepOrder : '',
        fundsReceived: this.state.paramaterList[22] && this.state.paramaterList[22].stepOrder ? this.state.paramaterList[22].stepOrder : '',
        chaseId: this.state.paramaterList[23] && this.state.paramaterList[23].stepOrder ? this.state.paramaterList[23].stepOrder : '',
        loanDetailsSharingEnabled: this.state.paramaterList[24] && this.state.paramaterList[24].stepOrder ? this.state.paramaterList[24].stepOrder : '',
        brokerageContacted: this.state.paramaterList[25] && this.state.paramaterList[25].stepOrder ? this.state.paramaterList[25].stepOrder : '',
        fullName: this.state.paramaterList[26] && this.state.paramaterList[26].stepOrder ? this.state.paramaterList[26].stepOrder : '',
        aggregateId: this.state.paramaterList[27] && this.state.paramaterList[27].stepOrder ? this.state.paramaterList[27].stepOrder : '',
        statusUpdateReminder: this.state.paramaterList[28] && this.state.paramaterList[28].stepOrder ? this.state.paramaterList[28].stepOrder : '',
        currentAssignments: this.state.paramaterList[29] && this.state.paramaterList[29].stepOrder ? this.state.paramaterList[29].stepOrder : '',
        CA: this.state.paramaterList[30] && this.state.paramaterList[30].stepOrder ? this.state.paramaterList[30].stepOrder : '',
        CAE: this.state.paramaterList[31] && this.state.paramaterList[31].stepOrder ? this.state.paramaterList[31].stepOrder : '',
        consumerAccepted: this.state.paramaterList[32] && this.state.paramaterList[32].stepOrder ? this.state.paramaterList[32].stepOrder : '',
        hideContactDetails: this.state.paramaterList[33] && this.state.paramaterList[33].stepOrder ? this.state.paramaterList[33].stepOrder : '',
        siblingProfileId: this.state.paramaterList[34] && this.state.paramaterList[34].stepOrder ? this.state.paramaterList[34].stepOrder : '',
        unassigned: this.state.paramaterList[35] && this.state.paramaterList[35].stepOrder ? this.state.paramaterList[35].stepOrder : ''
      }
      body = {
        programeName: this.state.programe,
        status: "Success",
        partnerName: this.state.partner,
        leadsCount: this.state.data.length
  
      }
      const _this = this;
      //setInterval(() => {
      this.props.PostJob(body, function (resObj) {
        if (resObj.statusCode === "9937") {
          _this.props.PostJobsList(_this.state.data, resObj.statusResult[0].jobId, (leadresObj) => {
            if (leadresObj.statusCode === "9937") {
             
            _this.setState({ leadsList: leadresObj.statusResult });
            }
          });
        } else {
          toast.success(resObj.statusResult.jobId   +'Job Create Successfully');
  
          _this.props.PostJobsList(_this.state.data, resObj.statusResult.jobId, (leadresObj) => {
            
  
          });
  
        }
  
  
      });
      
    } else if(this.state.days ==='1'){
      toast.success('Sheduled Job Create Successfully');
      var body = {
        startindex: this.state.paramaterList[0].stepOrder ? this.state.paramaterList[0].stepOrder : '',
        limit: this.state.paramaterList[1] && this.state.paramaterList[1].stepOrder ? this.state.paramaterList[1].stepOrder : '',
        showall: this.state.paramaterList[2] && this.state.paramaterList[2].stepOrder ? this.state.paramaterList[2].stepOrder : '',
        latestStatus: this.state.paramaterList[3] && this.state.paramaterList[3].stepOrder ? this.state.paramaterList[3].stepOrder : '',
        cAPartner: this.state.paramaterList[4] && this.state.paramaterList[4].stepOrder ? this.state.paramaterList[4].stepOrder : '',
        cAEmail: this.state.paramaterList[5] && this.state.paramaterList[5].stepOrder ? this.state.paramaterList[5].stepOrder : '',
        brokerageCode: this.state.paramaterList[6] && this.state.paramaterList[6].stepOrder ? this.state.paramaterList[6].stepOrder : '',
        eitherName: this.state.paramaterList[7] && this.state.paramaterList[7].stepOrder ? this.state.paramaterList[7].stepOrder : '',
        firstName: this.state.paramaterList[8] && this.state.paramaterList[8].stepOrder ? this.state.paramaterList[8].stepOrder : '',
        lastName: this.state.paramaterList[9] && this.state.paramaterList[9].stepOrder ? this.state.paramaterList[9].stepOrder : '',
        email: this.state.paramaterList[10] && this.state.paramaterList[10].stepOrder ? this.state.paramaterList[10].stepOrder : '',
        phone: this.state.paramaterList[11] && this.state.paramaterList[11].stepOrder ? this.state.paramaterList[11].stepOrder : '',
  
        contacted: this.state.paramaterList[12] && this.state.paramaterList[12].stepOrder ? this.state.paramaterList[12].stepOrder : '',
        transactionType: this.state.paramaterList[13] && this.state.paramaterList[13].stepOrder ? this.state.paramaterList[13].stepOrder : '',
        ids: this.state.paramaterList[14] && this.state.paramaterList[14].stepOrder ? this.state.paramaterList[14].stepOrder : '',
        currentAssEmail: this.state.paramaterList[15] && this.state.paramaterList[15].stepOrder ? this.state.paramaterList[15].stepOrder : '',
        latestStatus1: this.state.paramaterList[16] && this.state.paramaterList[16].stepOrder ? this.state.paramaterList[16].stepOrder : '',
        sortBy: this.state.paramaterList[17] && this.state.paramaterList[17].stepOrder ? this.state.paramaterList[17].stepOrder : '',
        connectionConfirmed: this.state.paramaterList[18] && this.state.paramaterList[18].stepOrder ? this.state.paramaterList[18].stepOrder : '',
        homeStoryContacted: this.state.paramaterList[19] && this.state.paramaterList[19].stepOrder ? this.state.paramaterList[19].stepOrder : '',
        rebatePaid: this.state.paramaterList[20] && this.state.paramaterList[20].stepOrder ? this.state.paramaterList[20].stepOrder : '',
        documentationReceived: this.state.paramaterList[21] && this.state.paramaterList[21].stepOrder ? this.state.paramaterList[21].stepOrder : '',
        fundsReceived: this.state.paramaterList[22] && this.state.paramaterList[22].stepOrder ? this.state.paramaterList[22].stepOrder : '',
        chaseId: this.state.paramaterList[23] && this.state.paramaterList[23].stepOrder ? this.state.paramaterList[23].stepOrder : '',
        loanDetailsSharingEnabled: this.state.paramaterList[24] && this.state.paramaterList[24].stepOrder ? this.state.paramaterList[24].stepOrder : '',
        brokerageContacted: this.state.paramaterList[25] && this.state.paramaterList[25].stepOrder ? this.state.paramaterList[25].stepOrder : '',
        fullName: this.state.paramaterList[26] && this.state.paramaterList[26].stepOrder ? this.state.paramaterList[26].stepOrder : '',
        aggregateId: this.state.paramaterList[27] && this.state.paramaterList[27].stepOrder ? this.state.paramaterList[27].stepOrder : '',
        statusUpdateReminder: this.state.paramaterList[28] && this.state.paramaterList[28].stepOrder ? this.state.paramaterList[28].stepOrder : '',
        currentAssignments: this.state.paramaterList[29] && this.state.paramaterList[29].stepOrder ? this.state.paramaterList[29].stepOrder : '',
        CA: this.state.paramaterList[30] && this.state.paramaterList[30].stepOrder ? this.state.paramaterList[30].stepOrder : '',
        CAE: this.state.paramaterList[31] && this.state.paramaterList[31].stepOrder ? this.state.paramaterList[31].stepOrder : '',
        consumerAccepted: this.state.paramaterList[32] && this.state.paramaterList[32].stepOrder ? this.state.paramaterList[32].stepOrder : '',
        hideContactDetails: this.state.paramaterList[33] && this.state.paramaterList[33].stepOrder ? this.state.paramaterList[33].stepOrder : '',
        siblingProfileId: this.state.paramaterList[34] && this.state.paramaterList[34].stepOrder ? this.state.paramaterList[34].stepOrder : '',
        unassigned: this.state.paramaterList[35] && this.state.paramaterList[35].stepOrder ? this.state.paramaterList[35].stepOrder : ''
      }
      body = {
        programeName: this.state.programe,
        status: "Success",
        partnerName: this.state.partner,
        leadsCount: this.state.data.length
  
      }
      const _this = this;
      //setInterval(() => {
      this.props.PostJob(body, function (resObj) {
        if (resObj.statusCode === "9937") {
          _this.props.PostJobsList(_this.state.data, resObj.statusResult[0].jobId, (leadresObj) => {
            if (leadresObj.statusCode === "9937") {
             
            _this.setState({ leadsList: leadresObj.statusResult });
            }
          });
        } else {
          toast.success(resObj.statusResult.jobId   +'Job Create Successfully');
  
          _this.props.PostJobsList(_this.state.data, resObj.statusResult.jobId, (leadresObj) => {
            
           
  
          });
  
        }
  
  
      });
    }
    else {
    var body = {
      startindex: this.state.paramaterList[0].stepOrder ? this.state.paramaterList[0].stepOrder : '',
      limit: this.state.paramaterList[1] && this.state.paramaterList[1].stepOrder ? this.state.paramaterList[1].stepOrder : '',
      showall: this.state.paramaterList[2] && this.state.paramaterList[2].stepOrder ? this.state.paramaterList[2].stepOrder : '',
      latestStatus: this.state.paramaterList[3] && this.state.paramaterList[3].stepOrder ? this.state.paramaterList[3].stepOrder : '',
      cAPartner: this.state.paramaterList[4] && this.state.paramaterList[4].stepOrder ? this.state.paramaterList[4].stepOrder : '',
      cAEmail: this.state.paramaterList[5] && this.state.paramaterList[5].stepOrder ? this.state.paramaterList[5].stepOrder : '',
      brokerageCode: this.state.paramaterList[6] && this.state.paramaterList[6].stepOrder ? this.state.paramaterList[6].stepOrder : '',
      eitherName: this.state.paramaterList[7] && this.state.paramaterList[7].stepOrder ? this.state.paramaterList[7].stepOrder : '',
      firstName: this.state.paramaterList[8] && this.state.paramaterList[8].stepOrder ? this.state.paramaterList[8].stepOrder : '',
      lastName: this.state.paramaterList[9] && this.state.paramaterList[9].stepOrder ? this.state.paramaterList[9].stepOrder : '',
      email: this.state.paramaterList[10] && this.state.paramaterList[10].stepOrder ? this.state.paramaterList[10].stepOrder : '',
      phone: this.state.paramaterList[11] && this.state.paramaterList[11].stepOrder ? this.state.paramaterList[11].stepOrder : '',

      contacted: this.state.paramaterList[12] && this.state.paramaterList[12].stepOrder ? this.state.paramaterList[12].stepOrder : '',
      transactionType: this.state.paramaterList[13] && this.state.paramaterList[13].stepOrder ? this.state.paramaterList[13].stepOrder : '',
      ids: this.state.paramaterList[14] && this.state.paramaterList[14].stepOrder ? this.state.paramaterList[14].stepOrder : '',
      currentAssEmail: this.state.paramaterList[15] && this.state.paramaterList[15].stepOrder ? this.state.paramaterList[15].stepOrder : '',
      latestStatus1: this.state.paramaterList[16] && this.state.paramaterList[16].stepOrder ? this.state.paramaterList[16].stepOrder : '',
      sortBy: this.state.paramaterList[17] && this.state.paramaterList[17].stepOrder ? this.state.paramaterList[17].stepOrder : '',
      connectionConfirmed: this.state.paramaterList[18] && this.state.paramaterList[18].stepOrder ? this.state.paramaterList[18].stepOrder : '',
      homeStoryContacted: this.state.paramaterList[19] && this.state.paramaterList[19].stepOrder ? this.state.paramaterList[19].stepOrder : '',
      rebatePaid: this.state.paramaterList[20] && this.state.paramaterList[20].stepOrder ? this.state.paramaterList[20].stepOrder : '',
      documentationReceived: this.state.paramaterList[21] && this.state.paramaterList[21].stepOrder ? this.state.paramaterList[21].stepOrder : '',
      fundsReceived: this.state.paramaterList[22] && this.state.paramaterList[22].stepOrder ? this.state.paramaterList[22].stepOrder : '',
      chaseId: this.state.paramaterList[23] && this.state.paramaterList[23].stepOrder ? this.state.paramaterList[23].stepOrder : '',
      loanDetailsSharingEnabled: this.state.paramaterList[24] && this.state.paramaterList[24].stepOrder ? this.state.paramaterList[24].stepOrder : '',
      brokerageContacted: this.state.paramaterList[25] && this.state.paramaterList[25].stepOrder ? this.state.paramaterList[25].stepOrder : '',
      fullName: this.state.paramaterList[26] && this.state.paramaterList[26].stepOrder ? this.state.paramaterList[26].stepOrder : '',
      aggregateId: this.state.paramaterList[27] && this.state.paramaterList[27].stepOrder ? this.state.paramaterList[27].stepOrder : '',
      statusUpdateReminder: this.state.paramaterList[28] && this.state.paramaterList[28].stepOrder ? this.state.paramaterList[28].stepOrder : '',
      currentAssignments: this.state.paramaterList[29] && this.state.paramaterList[29].stepOrder ? this.state.paramaterList[29].stepOrder : '',
      CA: this.state.paramaterList[30] && this.state.paramaterList[30].stepOrder ? this.state.paramaterList[30].stepOrder : '',
      CAE: this.state.paramaterList[31] && this.state.paramaterList[31].stepOrder ? this.state.paramaterList[31].stepOrder : '',
      consumerAccepted: this.state.paramaterList[32] && this.state.paramaterList[32].stepOrder ? this.state.paramaterList[32].stepOrder : '',
      hideContactDetails: this.state.paramaterList[33] && this.state.paramaterList[33].stepOrder ? this.state.paramaterList[33].stepOrder : '',
      siblingProfileId: this.state.paramaterList[34] && this.state.paramaterList[34].stepOrder ? this.state.paramaterList[34].stepOrder : '',
      unassigned: this.state.paramaterList[35] && this.state.paramaterList[35].stepOrder ? this.state.paramaterList[35].stepOrder : ''
    }
    body = {
      programeName: this.state.programe,
      status: "Success",
      partnerName: this.state.partner,
      leadsCount: "0",
      dupCount: "0"

    }
    const _this = this;
    this.props.PostJob(body, function (resObj) {
      if (resObj.statusCode === "9937") {
        _this.props.PostJobsList(_this.state.data, resObj.statusResult[0].jobId, resObj.statusResult[0]._id, resObj.statusResult[0].programeName, resObj.statusResult[0].partnerName, (leadresObj) => {
          if (leadresObj.statusCode === "9937") {
           
          _this.setState({ leadsList: leadresObj.statusResult });
          }else{
            
          }
          _this.props.ViewJobsList(resObj.statusResult[0].jobId,  (leadqualresObj) => {
            
           _this.props.LeadsQualInsert(leadqualresObj.statusResult.usersJobListView, (leadQualObj) =>{

           })




          })
        });
      } else {
        toast.success(resObj.statusResult.jobId   +' Create Successfully');
       _this.props.PostJobsList(_this.state.data, resObj.statusResult.jobId, resObj.statusResult._id, resObj.statusResult.programeName, resObj.statusResult.partnerName, (leadresObj) => {
          
          _this.props.ViewJobsList(resObj.statusResult.jobId, (leadqualresObj) => {
            
            
            _this.props.LeadsQualInsert(leadqualresObj.statusResult.usersJobListView, (leadQualObj) =>{
 
            })
 
 
 
 
           })
         

        });

      }


    });

   }
  }
    
    
  handleJobTest =() => {
   const startIndex = this.state.paramaterList.find(item => item.paramaterName === "start-index");
   const limit = this.state.paramaterList.find(item => item.paramaterName === "limit");

   
    var body = {
      startindex: startIndex.stepOrder ? "start-index="+ startIndex.stepOrder : '',
      limit: limit.stepOrder ? "&limit="+ this.state.paramaterList[1].stepOrder : '',
      showall: this.state.paramaterList[2] && this.state.paramaterList[2].stepOrder ? "&showall="+ this.state.paramaterList[2].stepOrder : '',
      latestStatus: this.state.paramaterList[3] && this.state.paramaterList[3].stepOrder ? "&latestStatus.status="+ this.state.paramaterList[3].stepOrder : '',
      cAPartner: this.state.paramaterList[4] && this.state.paramaterList[4].stepOrder ? "&latestStatus.status="+ this.state.paramaterList[4].stepOrder : '',
      cAEmail: this.state.paramaterList[5] && this.state.paramaterList[5].stepOrder ? "&currentAssignments.partner="+ this.state.paramaterList[5].stepOrder : '',
      brokerageCode: this.state.paramaterList[6] && this.state.paramaterList[6].stepOrder ? "&currentAssignments.email="+ this.state.paramaterList[6].stepOrder : '',
      eitherName: this.state.paramaterList[7] && this.state.paramaterList[7].stepOrder ? "&brokerageCode="+ this.state.paramaterList[7].stepOrder : '',
      firstName: this.state.paramaterList[8] && this.state.paramaterList[8].stepOrder ? "&eitherName="+ this.state.paramaterList[8].stepOrder : '',
      lastName: this.state.paramaterList[9] && this.state.paramaterList[9].stepOrder ? "&firstName="+ this.state.paramaterList[9].stepOrder : '',
      email: this.state.paramaterList[10] && this.state.paramaterList[10].stepOrder ? "&lastName="+ this.state.paramaterList[10].stepOrder : '',
      phone: this.state.paramaterList[11] && this.state.paramaterList[11].stepOrder ? "&phone="+ this.state.paramaterList[11].stepOrder : '',

      contacted: this.state.paramaterList[12] && this.state.paramaterList[12].stepOrder ? "&contacted="+ this.state.paramaterList[12].stepOrder : '',
      transactionType: this.state.paramaterList[13] && this.state.paramaterList[13].stepOrder ? "&transactionType="+ this.state.paramaterList[13].stepOrder : '',
      ids: this.state.paramaterList[14] && this.state.paramaterList[14].stepOrder ? "&ids="+ this.state.paramaterList[14].stepOrder : '',
      currentAssEmail: this.state.paramaterList[15] && this.state.paramaterList[15].stepOrder ? "&currentAssignments[.*].email="+ this.state.paramaterList[15].stepOrder : '',
      latestStatus1: this.state.paramaterList[16] && this.state.paramaterList[16].stepOrder ? "&latestStatus[.*].status="+ this.state.paramaterList[16].stepOrder : '',
      sortBy: this.state.paramaterList[17] && this.state.paramaterList[17].stepOrder ? "&sortBy="+ this.state.paramaterList[17].stepOrder : '',
      connectionConfirmed: this.state.paramaterList[18] && this.state.paramaterList[18].stepOrder ? this.state.paramaterList[18].stepOrder : '',
      homeStoryContacted: this.state.paramaterList[19] && this.state.paramaterList[19].stepOrder ? this.state.paramaterList[19].stepOrder : '',
      rebatePaid: this.state.paramaterList[20] && this.state.paramaterList[20].stepOrder ? this.state.paramaterList[20].stepOrder : '',
      documentationReceived: this.state.paramaterList[21] && this.state.paramaterList[21].stepOrder ? this.state.paramaterList[21].stepOrder : '',
      fundsReceived: this.state.paramaterList[22] && this.state.paramaterList[22].stepOrder ? this.state.paramaterList[22].stepOrder : '',
      chaseId: this.state.paramaterList[23] && this.state.paramaterList[23].stepOrder ? this.state.paramaterList[23].stepOrder : '',
      loanDetailsSharingEnabled: this.state.paramaterList[24] && this.state.paramaterList[24].stepOrder ? this.state.paramaterList[24].stepOrder : '',
      brokerageContacted: this.state.paramaterList[25] && this.state.paramaterList[25].stepOrder ? this.state.paramaterList[25].stepOrder : '',
      fullName: this.state.paramaterList[26] && this.state.paramaterList[26].stepOrder ? this.state.paramaterList[26].stepOrder : '',
      aggregateId: this.state.paramaterList[27] && this.state.paramaterList[27].stepOrder ? this.state.paramaterList[27].stepOrder : '',
      statusUpdateReminder: this.state.paramaterList[28] && this.state.paramaterList[28].stepOrder ? this.state.paramaterList[28].stepOrder : '',
      currentAssignments: this.state.paramaterList[29] && this.state.paramaterList[29].stepOrder ? this.state.paramaterList[29].stepOrder : '',
      CA: this.state.paramaterList[30] && this.state.paramaterList[30].stepOrder ? this.state.paramaterList[30].stepOrder : '',
      CAE: this.state.paramaterList[31] && this.state.paramaterList[31].stepOrder ? this.state.paramaterList[31].stepOrder : '',
      consumerAccepted: this.state.paramaterList[32] && this.state.paramaterList[32].stepOrder ? this.state.paramaterList[32].stepOrder : '',
      hideContactDetails: this.state.paramaterList[33] && this.state.paramaterList[33].stepOrder ? this.state.paramaterList[33].stepOrder : '',
      siblingProfileId: this.state.paramaterList[34] && this.state.paramaterList[34].stepOrder ? this.state.paramaterList[34].stepOrder : '',
      unassigned: this.state.paramaterList[35] && this.state.paramaterList[35].stepOrder ? this.state.paramaterList[35].stepOrder : ''
     }
     this.setState({ url: 'https://vast-re-api.re-sandbox.homestoryrewards.com/api/v1.0/admin/leads?'+ 
     body.startindex +body.limit+body.showall+body.latestStatus+body.cAPartner+body.cAEmail+body.brokerageCode
    , count: ''})
    }
  handleChange(event) {
    if (this.state.checked !== event.target.checked) {
      this.setState({
        checked: event.target.checked,
        oneTime: false
      });
    } else if (this.state.checked == 'true') {
      this.setState({
        checked: false
      })




    }
  }
  handleJobCount =() =>{
    this.setState({count: this.state.paramaterList[1] && this.state.paramaterList[1].stepOrder ? this.state.paramaterList[1].stepOrder: ''})

  }
  handleOnStartIndexChange(event) {
    if (this.state.startIndexchecked !== event.target.checked) {
      this.setState({
        startIndexchecked: event.target.checked
      });
    }
  }
  handleOnProgrameNameChange(event) {
    
      this.setState({
        ProgrameNamechecked: "test"
      });
    
  }
  handleOnPartnerChange(event) {
    this.setState({
        ProgrameNamechecked: ""
      });
      event.preventDefault();
  }

 
  handleOneTimeChange(event) {
    this.setState({
      checked: false,
      oneTime: true
    })

  }

  render() {

    let data = this.state.paramaterList ? this.state.paramaterList: ''
    var leads = this.state.leadsList && this.state.leadsList.filter(x => x !== null)
    
    return (
      <div className="main-content" id="panel">
        {/* ------- Navbar --------- */}
        <DrawerWithHeader />
        <div className="header">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center" >
                <div className="col-md-7">
                  <h1 className="d-inline-block mb-0">Create Job</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="create-admin-users">
          <div className="container-fluid">
            <div className="mb-2">
              <div className="card">
                <div className="card-body">
                  <form>
                  {this.state.ProgrameNamechecked ?
                  <div className="add1">
                  <button class="btn btn-primary" onClick={(() => this.handleOnPartnerChange()) }>Add</button>
                </div>
                    :<div className="row">
                      
                      
                        <div className="form-group1">
                          <label>Program Name</label>
                          <select className="form-control" id="exampleFormControlSelect3" value={this.state.programe} onChange={(event) => (this.setState({ programe: event.target.value, errorMessage: '' }))}>
                            
                          <option value=''> -- Select --</option>
                          {this.state.programesList && this.state.programesList.map((data, index) => 
                              <option key={index} value={data.programeName}>{data.programeName}</option>
                            )}  
                            
                          </select> 

                          
                        </div>
                      
                      
                        <div className="form-group2">
                          <label>Partner</label>
                          <select className="form-control" id="exampleFormControlSelect3" value={this.state.partner} onChange={(event) => (this.setState({ partner: event.target.value, errorMessage: '' }))}>
                            <option>Select</option>
                            <option>HSBC</option>
                            <option>ZILLOW</option>
                          </select>
                          
                        </div>
                        <div className="delete1">
                        <button type='button' className='btn btn-danger btn-round' onClick={(() => this.handleOnProgrameNameChange())}>Remove</button>
                        </div>
                        
                    </div>}

                    <div className="row" >

                      {data && data.length > 0 && data.map((val, idx) =>
                        <div className="row">

                          <div className="form-group">
                            <label>Parameters</label>
                            <select className="form-control" id={`paramaterName-${idx}`} data-id={idx} name="paramaterName" value={val.paramaterName} onChange={(e) => this.handleChangeStepName(e, idx)} >
                              <option>Select</option>
                              {this.state.DDL1.map(x => {
                                return <option>{x.name}</option>
                              })}
                            </select>
                          </div>
                          <div className="row col-5 ">
                            <input type="text" name="stepOrder" value={val.stepOrder} data-id={idx} onChange={(e) => this.handleChangeOtheField(e, idx)} id={`stepOrder-${idx}`} className='form-control' placeholder="Enter Value" />
                          </div>
                          <div className="delete">
                            <button type='button' className='btn btn-danger btn-round' onClick={(() => this.cultivationStepsMainListDelete(val))} >Remove</button>
                          </div>
                        </div>
                      )}


                      <div className="add">
                        <button class="btn btn-primary" onClick={(e) => { this.add(e) }}>Add</button>
                      </div>

                    </div>






                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="required"> Scheduled Job</label>
                          <input type="radio" checked={this.state.checked} onChange={this.handleChange} />



                        </div>

                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="required">One Time Job </label>
                          <input type="radio" checked={this.state.oneTime} onChange={this.handleOneTimeChange} />


                        </div>

                      </div>
                      <div className="form-group3">
                        <label>Duplicate check for</label>
                        <select className="form-control1" id="exampleFormControlSelect3" value={this.state.defaultDays} onChange={(event) => (this.setState({ defaultDays: event.target.value, errorMessage: '' }))}>
                          <option>Select</option>
                          <option>7 Days</option>
                          <option>15 Days</option>
                          <option>30 Days</option>
                        </select>

                      </div>
                    </div>
                    <div className="row">
                      {this.state.checked ?

                        <div className="col-md-3">
                          <div className="form-group">

                            <label>Hours</label>
                            <select className="form-control" id="exampleFormControlSelect3" value={this.state.hours} onChange={(event) => (this.setState({ hours: event.target.value, errorMessage: '' }))}>
                              <option>Select</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Miniutes</label>
                            <select className="form-control" id="exampleFormControlSelect3" value={this.state.miniute} onChange={(event) => (this.setState({ miniute: event.target.value, errorMessage: '' }))}>
                              <option>Select</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Days</label>
                            <select className="form-control" id="exampleFormControlSelect3" value={this.state.days} onChange={(event) => (this.setState({ days: event.target.value, errorMessage: '' }))}>
                              <option>Select</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                        </div>
                        : null
                      }
                    </div>
                    
                  </form>
                  {/* <div className="mb-3"><h3>Location</h3></div> */}
                  <form>

                    <div className='row'>
                    <div className='row'>
                      <div className='container-fluid'>
                        <label className='label-control' style={{ color: 'red' }}>{this.state.url}</label>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='container-fluid'>
                        <label className='label-control' style={{ color: 'red' }}>{this.state.count}</label>
                      </div>
                    </div>
                    
                      <div className='container-fluid'>
                        <label className='label-control' style={{ color: 'red' }}>{this.state.errorMessage}</label>
                        {leads && leads.length > 0 && leads.map((item, i) =>
                        <tbody className="list" key={i}>
                          <tr>
                          {/* <label className='label-control' style={{ color: 'red' }}>{this.state.errorMessage}</label> */}
                          <label className='label-control' style={{ color: 'red' }}> Duplicate leadId {item.id} </label>
                        </tr>
                        </tbody>
                        
                        
)}
                       
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
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button type="button" onClick={() => hashHistory.push('/jobs')} className="btn btn-danger btn-round">Back</button>
                        <button type="button" onClick={this.handleJobTest} className="btn btn-primary btn-round">Test</button>
                        <button type="button" onClick={this.handleJobCount} className="btn btn-primary btn-round">Cout</button>
                        <button type="button" onClick={this.handleJobCreate} className="btn btn-primary btn-round">Create Job</button>
                        
                        {/* <button type="button" onClick={this.handleClear} className="btn btn-primary btn-round">Clear</button> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDistachToProps = (dispatch) => ({
  GetProgramesList: (cb) => dispatch(GetProgramesList(cb)),
  GetJobList: (cb) => dispatch(GetJobList(cb)),
  PostJob: (body, cb) => dispatch(PostJob(body, cb)),
  PostJobsList: (body, jobId, id, programeName, partnerName, cb) => dispatch(PostJobsList(body, jobId, id, programeName, partnerName, cb)),
  ViewJobsList: (jobId, cb) => dispatch(ViewJobsList(jobId, cb)),
  LeadsQualInsert: (data, cb) => dispatch(LeadsQualInsert(data, cb))
});


export default connect(
  mapStateToProps,
  mapDistachToProps,
)(UserJobCreateComponent);
