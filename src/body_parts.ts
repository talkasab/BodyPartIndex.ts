export default JSON.parse(`{
	"$version": "DEV2022-08-23T18:55:56.999Z",
	"$schema": "../body_parts_schema.json",
	"bodyParts": [
	  {
		"radlexId": "RID56",
		"description": "abdomen",
		"containedById": "RID39569",
		"synonyms": [
		  "abdominopelvis",
		  "abdominopelvic region"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "818983003"
		  },
		  {
			"system": "MESH",
			"code": "A01.923.047"
		  }
		]
	  },
	  {
		"radlexId": "RID905",
		"description": "abdominal aorta",
		"containedById": "RID431",
		"partOfId": "RID480",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "7832008"
		  }
		]
	  },
	  {
		"radlexId": "RID294",
		"description": "uterine adnexa",
		"containedById": "RID2507",
		"leftId": "RID294_RID5824",
		"rightId": "RID294_RID5825",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "adnexa"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "265256"
		  },
		  {
			"system": "SNOMED",
			"code": "23043003"
		  },
		  {
			"system": "UMLS",
			"code": "C0001575"
		  }
		]
	  },
	  {
		"radlexId": "RID294_RID5824",
		"description": "left uterine adnexa",
		"containedById": "RID2507",
		"unsidedId": "RID294",
		"rightId": "RID294_RID5825",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "110635008"
		  }
		],
		"sexSpecific": "Female"
	  },
	  {
		"radlexId": "RID294_RID5825",
		"description": "right uterine adnexa",
		"containedById": "RID2507",
		"unsidedId": "RID294",
		"leftId": "RID294_RID5824",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "110634007"
		  }
		],
		"sexSpecific": "Female"
	  },
	  {
		"radlexId": "RID935",
		"description": "adrenal artery",
		"containedById": "RID431",
		"leftId": "RID935_RID5824",
		"rightId": "RID935_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "89500000"
		  }
		]
	  },
	  {
		"radlexId": "RID935_RID5824",
		"description": "left adrenal artery",
		"containedById": "RID431",
		"unsidedId": "RID935",
		"rightId": "RID935_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "765044004"
		  }
		]
	  },
	  {
		"radlexId": "RID935_RID5825",
		"description": "right adrenal artery",
		"containedById": "RID431",
		"unsidedId": "RID935",
		"leftId": "RID935_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "765048001"
		  }
		]
	  },
	  {
		"radlexId": "RID88",
		"description": "adrenal gland",
		"containedById": "RID431",
		"leftId": "RID30325",
		"rightId": "RID30324",
		"synonyms": [
		  "glandula suprarenalis",
		  "Nebenniere"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9604"
		  },
		  {
			"system": "SNOMED",
			"code": "23451007"
		  },
		  {
			"system": "MESH",
			"code": "A06.407.071"
		  },
		  {
			"system": "UMLS",
			"code": "C0001625"
		  }
		]
	  },
	  {
		"radlexId": "RID30324",
		"description": "right adrenal gland",
		"containedById": "RID431",
		"unsidedId": "RID88",
		"leftId": "RID30325",
		"codes": [
		  {
			"system": "FMA",
			"code": "15629"
		  },
		  {
			"system": "SNOMED",
			"code": "29392005"
		  },
		  {
			"system": "UMLS",
			"code": "C0229559"
		  }
		]
	  },
	  {
		"radlexId": "RID30325",
		"description": "left adrenal gland",
		"containedById": "RID431",
		"unsidedId": "RID88",
		"rightId": "RID30324",
		"codes": [
		  {
			"system": "FMA",
			"code": "15630"
		  },
		  {
			"system": "SNOMED",
			"code": "12003004"
		  },
		  {
			"system": "UMLS",
			"code": "C0229560"
		  }
		]
	  },
	  {
		"radlexId": "RID164",
		"description": "anus",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "53505006"
		  }
		]
	  },
	  {
		"radlexId": "RID480",
		"description": "aorta",
		"containedById": "RID39569",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "15825003"
		  },
		  {
			"system": "UMLS",
			"code": "C0003483"
		  }
		]
	  },
	  {
		"radlexId": "RID581",
		"description": "aortic arch",
		"containedById": "RID1384",
		"partOfId": "RID879",
		"synonyms": [
		  "arch of aorta"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "57034009"
		  }
		]
	  },
	  {
		"radlexId": "RID1394",
		"description": "aortic valve",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "34202007"
		  }
		]
	  },
	  {
		"radlexId": "RID168",
		"description": "appendix",
		"containedById": "RID2507",
		"partOfId": "RID94",
		"synonyms": [
		  "appendix vermiformis",
		  "Blinddarm"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "66754008"
		  }
		]
	  },
	  {
		"radlexId": "RID580",
		"description": "ascending aorta",
		"containedById": "RID1384",
		"partOfId": "RID879",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "54247002"
		  }
		]
	  },
	  {
		"radlexId": "RID34819",
		"description": "adrenal vein",
		"containedById": "RID431",
		"leftId": "RID1185",
		"rightId": "RID1183",
		"partOfId": "RID50378",
		"synonyms": [
		  "suprarenal vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14348"
		  },
		  {
			"system": "SNOMED",
			"code": "77905000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226717"
		  }
		]
	  },
	  {
		"radlexId": "RID1183",
		"description": "right adrenal vein",
		"containedById": "RID431",
		"unsidedId": "RID34819",
		"leftId": "RID1185",
		"partOfId": "RID50378",
		"synonyms": [
		  "right suprarenal vein",
		  "vena suprarenalis dextra",
		  "vena suprarenalis dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14343"
		  },
		  {
			"system": "SNOMED",
			"code": "248889002"
		  },
		  {
			"system": "UMLS",
			"code": "C0226721"
		  }
		]
	  },
	  {
		"radlexId": "RID1185",
		"description": "left adrenal vein",
		"containedById": "RID431",
		"unsidedId": "RID34819",
		"rightId": "RID1183",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena suprarenalis sinistra",
		  "left suprarenal vein",
		  "vena suprarenalis sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14349"
		  },
		  {
			"system": "SNOMED",
			"code": "248792009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226709"
		  }
		]
	  },
	  {
		"radlexId": "RID157",
		"description": "ascending colon",
		"containedById": "RID431",
		"partOfId": "RID152",
		"synonyms": [
		  "colon ascendens",
		  "Colon ascendens"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14545"
		  },
		  {
			"system": "SNOMED",
			"code": "9040008"
		  }
		]
	  },
	  {
		"radlexId": "RID33652",
		"description": "biliary tree",
		"containedById": "RID431",
		"codes": [
		  {
			"system": "FMA",
			"code": "14665"
		  },
		  {
			"system": "SNOMED",
			"code": "181267003"
		  }
		]
	  },
	  {
		"radlexId": "RID237",
		"description": "bladder",
		"containedById": "RID2507",
		"partOfId": "RID204",
		"synonyms": [
		  "vesica urinaria",
		  "bladder",
		  "Harnblase"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "89837001"
		  }
		]
	  },
	  {
		"radlexId": "RID582",
		"description": "brachiocephalic artery",
		"containedById": "RID1243",
		"synonyms": [
		  "innominate artery"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "12691009"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.114.145"
		  },
		  {
			"system": "UMLS",
			"code": "C0006094"
		  }
		]
	  },
	  {
		"radlexId": "RID1011",
		"description": "brachiocephalic vein",
		"containedById": "RID1243",
		"leftId": "RID1011_RID5824",
		"rightId": "RID1011_RID5825",
		"synonyms": [
		  "innominate vein"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "8887007"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.908.130"
		  },
		  {
			"system": "UMLS",
			"code": "C0006095"
		  }
		]
	  },
	  {
		"radlexId": "RID1011_RID5824",
		"description": "left brachiocephalic vein",
		"containedById": "RID1243",
		"unsidedId": "RID1011",
		"rightId": "RID1011_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "771202006"
		  }
		]
	  },
	  {
		"radlexId": "RID1011_RID5825",
		"description": "right brachiocephalic vein",
		"containedById": "RID1243",
		"unsidedId": "RID1011",
		"leftId": "RID1011_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "771203001"
		  }
		]
	  },
	  {
		"radlexId": "RID29895",
		"description": "female breast",
		"containedById": "RID2468",
		"leftId": "RID29897",
		"rightId": "RID29896",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "19898"
		  }
		]
	  },
	  {
		"radlexId": "RID29896",
		"description": "right female breast",
		"containedById": "RID2468",
		"unsidedId": "RID29895",
		"leftId": "RID29897",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "19908"
		  }
		]
	  },
	  {
		"radlexId": "RID29897",
		"description": "left female breast",
		"containedById": "RID2468",
		"unsidedId": "RID29895",
		"rightId": "RID29896",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "19910"
		  }
		]
	  },
	  {
		"radlexId": "RID29898",
		"description": "male breast",
		"containedById": "RID2468",
		"leftId": "RID29900",
		"rightId": "RID29899",
		"sexSpecific": "Male",
		"codes": [
		  {
			"system": "FMA",
			"code": "19901"
		  }
		]
	  },
	  {
		"radlexId": "RID29899",
		"description": "right male breast",
		"containedById": "RID2468",
		"unsidedId": "RID29898",
		"leftId": "RID29900",
		"sexSpecific": "Male",
		"codes": [
		  {
			"system": "FMA",
			"code": "19912"
		  }
		]
	  },
	  {
		"radlexId": "RID29900",
		"description": "left male breast",
		"containedById": "RID2468",
		"unsidedId": "RID29898",
		"rightId": "RID29899",
		"sexSpecific": "Male",
		"codes": [
		  {
			"system": "FMA",
			"code": "19913"
		  }
		]
	  },
	  {
		"radlexId": "RID29903",
		"description": "nipple of male breast",
		"containedById": "RID29914",
		"leftId": "RID29905",
		"rightId": "RID29904",
		"sexSpecific": "Male",
		"synonyms": [
		  "male nipple",
		  "Mamille der m√§nnlichen Brust",
		  "Mamille"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "67772"
		  }
		]
	  },
	  {
		"radlexId": "RID29904",
		"description": "nipple of right male breast",
		"containedById": "RID29915",
		"unsidedId": "RID29903",
		"leftId": "RID29905",
		"sexSpecific": "Male",
		"synonyms": [
		  "right male nipple",
		  "Mamille"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50057"
		  }
		]
	  },
	  {
		"radlexId": "RID29905",
		"description": "nipple of left male breast",
		"containedById": "RID29916",
		"unsidedId": "RID29903",
		"rightId": "RID29904",
		"sexSpecific": "Male",
		"synonyms": [
		  "left male nipple",
		  "Mamille"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50055"
		  }
		]
	  },
	  {
		"radlexId": "RID29906",
		"description": "nipple of female breast",
		"containedById": "RID29917",
		"leftId": "RID29908",
		"rightId": "RID29907",
		"sexSpecific": "Female",
		"synonyms": [
		  "female nipple",
		  "Mamille"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "67773"
		  }
		]
	  },
	  {
		"radlexId": "RID29907",
		"description": "nipple of right female breast",
		"containedById": "RID29918",
		"unsidedId": "RID29906",
		"leftId": "RID29908",
		"sexSpecific": "Female",
		"synonyms": [
		  "right female nipple",
		  "Mamille"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50058"
		  }
		]
	  },
	  {
		"radlexId": "RID29908",
		"description": "nipple of left female breast",
		"containedById": "RID29919",
		"unsidedId": "RID29906",
		"rightId": "RID29907",
		"sexSpecific": "Female",
		"synonyms": [
		  "left female nipple",
		  "Mamille"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50056"
		  }
		]
	  },
	  {
		"radlexId": "RID29914",
		"description": "areola of male breast",
		"containedById": "RID29898",
		"leftId": "RID29916",
		"rightId": "RID29915",
		"sexSpecific": "Male",
		"synonyms": [
		  "male areola"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "223669"
		  }
		]
	  },
	  {
		"radlexId": "RID29915",
		"description": "areola of right male breast",
		"containedById": "RID29899",
		"unsidedId": "RID29914",
		"leftId": "RID29916",
		"sexSpecific": "Male",
		"synonyms": [
		  "right male areola"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "223671"
		  }
		]
	  },
	  {
		"radlexId": "RID29916",
		"description": "areola of left male breast",
		"containedById": "RID29900",
		"unsidedId": "RID29914",
		"rightId": "RID29915",
		"sexSpecific": "Male",
		"synonyms": [
		  "left male areola"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "223673"
		  }
		]
	  },
	  {
		"radlexId": "RID29917",
		"description": "areola of female breast",
		"containedById": "RID29895",
		"leftId": "RID29919",
		"rightId": "RID29918",
		"sexSpecific": "Female",
		"synonyms": [
		  "female areola"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "223675"
		  }
		]
	  },
	  {
		"radlexId": "RID29918",
		"description": "areola of right female breast",
		"containedById": "RID29896",
		"unsidedId": "RID29917",
		"leftId": "RID29919",
		"sexSpecific": "Female",
		"synonyms": [
		  "right female areola"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "223677"
		  }
		]
	  },
	  {
		"radlexId": "RID29919",
		"description": "areola of left female breast",
		"containedById": "RID29897",
		"unsidedId": "RID29917",
		"rightId": "RID29918",
		"sexSpecific": "Female",
		"synonyms": [
		  "left female areola"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "223679"
		  }
		]
	  },
	  {
		"radlexId": "RID29928",
		"description": "upper outer quadrant of breast",
		"containedById": "RID29895",
		"leftId": "RID29930",
		"rightId": "RID29929",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61380"
		  }
		]
	  },
	  {
		"radlexId": "RID29929",
		"description": "upper outer quadrant of right female breast",
		"containedById": "RID29896",
		"unsidedId": "RID29928",
		"leftId": "RID29930",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61399"
		  }
		]
	  },
	  {
		"radlexId": "RID29930",
		"description": "upper outer quadrant of left female breast",
		"containedById": "RID29897",
		"unsidedId": "RID29928",
		"rightId": "RID29929",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61400"
		  }
		]
	  },
	  {
		"radlexId": "RID29931",
		"description": "upper inner quadrant of breast",
		"containedById": "RID29895",
		"leftId": "RID29933",
		"rightId": "RID29932",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61375"
		  }
		]
	  },
	  {
		"radlexId": "RID29932",
		"description": "upper inner quadrant of right female breast",
		"containedById": "RID29896",
		"unsidedId": "RID29931",
		"leftId": "RID29933",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61397"
		  }
		]
	  },
	  {
		"radlexId": "RID29933",
		"description": "upper inner quadrant of left female breast",
		"containedById": "RID29897",
		"unsidedId": "RID29931",
		"rightId": "RID29932",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61398"
		  }
		]
	  },
	  {
		"radlexId": "RID29934",
		"description": "lower outer quadrant of breast",
		"containedById": "RID29895",
		"leftId": "RID29936",
		"rightId": "RID29935",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61376"
		  }
		]
	  },
	  {
		"radlexId": "RID29935",
		"description": "lower outer quadrant of right female breast",
		"containedById": "RID29896",
		"unsidedId": "RID29934",
		"leftId": "RID29936",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61395"
		  }
		]
	  },
	  {
		"radlexId": "RID29936",
		"description": "lower outer quadrant of left female breast",
		"containedById": "RID29897",
		"unsidedId": "RID29934",
		"rightId": "RID29935",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61396"
		  }
		]
	  },
	  {
		"radlexId": "RID29937",
		"description": "lower inner quadrant of breast",
		"containedById": "RID29895",
		"leftId": "RID29939",
		"rightId": "RID29938",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61377"
		  }
		]
	  },
	  {
		"radlexId": "RID29938",
		"description": "lower inner quadrant of right female breast",
		"containedById": "RID29896",
		"unsidedId": "RID29937",
		"leftId": "RID29939",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61393"
		  }
		]
	  },
	  {
		"radlexId": "RID29939",
		"description": "lower inner quadrant of left female breast",
		"containedById": "RID29897",
		"unsidedId": "RID29937",
		"rightId": "RID29938",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "61394"
		  }
		]
	  },
	  {
		"radlexId": "RID29940",
		"description": "superior region of breast",
		"containedById": "RID29895",
		"leftId": "RID29942",
		"rightId": "RID29941",
		"sexSpecific": "Female",
		"synonyms": [
		  "superiore"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "236417"
		  }
		]
	  },
	  {
		"radlexId": "RID29941",
		"description": "superior region of right breast",
		"containedById": "RID29896",
		"unsidedId": "RID29940",
		"leftId": "RID29942",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236637"
		  }
		]
	  },
	  {
		"radlexId": "RID29942",
		"description": "superior region of left breast",
		"containedById": "RID29897",
		"unsidedId": "RID29940",
		"rightId": "RID29941",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236639"
		  }
		]
	  },
	  {
		"radlexId": "RID29943",
		"description": "medial region of breast",
		"containedById": "RID29895",
		"leftId": "RID29945",
		"rightId": "RID29944",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236419"
		  }
		]
	  },
	  {
		"radlexId": "RID29944",
		"description": "medial region of right breast",
		"containedById": "RID29896",
		"unsidedId": "RID29943",
		"leftId": "RID29945",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236641"
		  }
		]
	  },
	  {
		"radlexId": "RID29945",
		"description": "medial region of left breast",
		"containedById": "RID29897",
		"unsidedId": "RID29943",
		"rightId": "RID29944",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236643"
		  }
		]
	  },
	  {
		"radlexId": "RID29946",
		"description": "lateral region of breast",
		"containedById": "RID29895",
		"leftId": "RID29948",
		"rightId": "RID29947",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236421"
		  }
		]
	  },
	  {
		"radlexId": "RID29947",
		"description": "lateral region of right breast",
		"containedById": "RID29896",
		"unsidedId": "RID29946",
		"leftId": "RID29948",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236645"
		  }
		]
	  },
	  {
		"radlexId": "RID29948",
		"description": "lateral region of left breast",
		"containedById": "RID29897",
		"unsidedId": "RID29946",
		"rightId": "RID29947",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236647"
		  }
		]
	  },
	  {
		"radlexId": "RID29949",
		"description": "central region of breast",
		"containedById": "RID29895",
		"leftId": "RID29951",
		"rightId": "RID29950",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236423"
		  }
		]
	  },
	  {
		"radlexId": "RID29950",
		"description": "central region of right breast",
		"containedById": "RID29896",
		"unsidedId": "RID29949",
		"leftId": "RID29951",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236649"
		  }
		]
	  },
	  {
		"radlexId": "RID29951",
		"description": "central region of left breast",
		"containedById": "RID29897",
		"unsidedId": "RID29949",
		"rightId": "RID29950",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236651"
		  }
		]
	  },
	  {
		"radlexId": "RID29952",
		"description": "subareolar region of breast",
		"containedById": "RID29895",
		"leftId": "RID29954",
		"rightId": "RID29953",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236425"
		  }
		]
	  },
	  {
		"radlexId": "RID29953",
		"description": "subareolar region of right breast",
		"containedById": "RID29896",
		"unsidedId": "RID29952",
		"leftId": "RID29954",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236653"
		  }
		]
	  },
	  {
		"radlexId": "RID29954",
		"description": "subareolar region of left breast",
		"containedById": "RID29897",
		"unsidedId": "RID29952",
		"rightId": "RID29953",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "236655"
		  }
		]
	  },
	  {
		"radlexId": "RID29955",
		"description": "accessory breast",
		"containedById": "RID39569",
		"synonyms": [
		  "mamma accessoria"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "77861"
		  }
		]
	  },
	  {
		"radlexId": "RID1246",
		"description": "tracheobronchial tree",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "91724006"
		  }
		]
	  },
	  {
		"radlexId": "RID1248",
		"description": "carina",
		"containedById": "RID1384",
		"partOfId": "RID1246",
		"synonyms": [
		  "carina of trachea"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "28700002"
		  }
		]
	  },
	  {
		"radlexId": "RID154",
		"description": "cecum",
		"containedById": "RID397",
		"partOfId": "RID152",
		"synonyms": [
		  "caecum",
		  "Z√§kum"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32713005"
		  }
		]
	  },
	  {
		"radlexId": "RID906",
		"description": "celiac artery",
		"containedById": "RID431",
		"synonyms": [
		  "celiac axis"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "57850000"
		  }
		]
	  },
	  {
		"radlexId": "RID34571",
		"description": "cervical vertebral column",
		"containedById": "RID7488",
		"partOfId": "RID7741",
		"synonyms": [
		  "cervical spinal column",
		  "cervical spine"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "122494005"
		  }
		]
	  },
	  {
		"radlexId": "RID2468",
		"description": "chest wall",
		"containedById": "RID1243",
		"synonyms": [
		  "thoracic wall"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "78904004"
		  }
		]
	  },
	  {
		"radlexId": "RID510",
		"description": "circumflex coronary artery",
		"containedById": "RID1385",
		"partOfId": "RID28727",
		"synonyms": [
		  "LCX",
		  "circumflex branch of left coronary artery"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "57396003"
		  }
		]
	  },
	  {
		"radlexId": "RID199",
		"description": "common bile duct",
		"containedById": "RID56",
		"partOfId": "RID33652",
		"synonyms": [
		  "DHC"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "79741001"
		  }
		]
	  },
	  {
		"radlexId": "RID909",
		"description": "common hepatic artery",
		"containedById": "RID431",
		"synonyms": [
		  "arteria hepatica communis",
		  "arteria hepatica communis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14771"
		  },
		  {
			"system": "SNOMED",
			"code": "244263001"
		  }
		]
	  },
	  {
		"radlexId": "RID944",
		"description": "common iliac artery",
		"containedById": "RID2507",
		"leftId": "RID944_RID5824",
		"rightId": "RID944_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "73634005"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.114.444"
		  }
		]
	  },
	  {
		"radlexId": "RID944_RID5824",
		"description": "left common iliac artery",
		"containedById": "RID2507",
		"unsidedId": "RID944",
		"rightId": "RID944_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "77428008"
		  }
		]
	  },
	  {
		"radlexId": "RID944_RID5825",
		"description": "right common iliac artery",
		"containedById": "RID2507",
		"unsidedId": "RID944",
		"leftId": "RID944_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "15567000"
		  }
		]
	  },
	  {
		"radlexId": "RID1193",
		"description": "common iliac vein",
		"containedById": "RID2507",
		"leftId": "RID1193_RID5824",
		"rightId": "RID1193_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "46027005"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.908.427"
		  }
		]
	  },
	  {
		"radlexId": "RID1193_RID5824",
		"description": "left common iliac vein",
		"containedById": "RID2507",
		"unsidedId": "RID1193",
		"rightId": "RID1193_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "763525004"
		  }
		]
	  },
	  {
		"radlexId": "RID1193_RID5825",
		"description": "right common iliac vein",
		"containedById": "RID2507",
		"unsidedId": "RID1193",
		"leftId": "RID1193_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "763526003"
		  }
		]
	  },
	  {
		"radlexId": "RID919",
		"description": "cystic artery",
		"containedById": "RID431",
		"synonyms": [
		  "arteria cystica",
		  "arteria cystica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14835"
		  },
		  {
			"system": "SNOMED",
			"code": "52109002"
		  }
		]
	  },
	  {
		"radlexId": "RID201",
		"description": "cystic duct",
		"containedById": "RID56",
		"partOfId": "RID33652",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "77452001"
		  }
		]
	  },
	  {
		"radlexId": "RID161",
		"description": "descending colon",
		"containedById": "RID431",
		"partOfId": "RID152",
		"synonyms": [
		  "colon descendens",
		  "Colon descendens"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32622004"
		  }
		]
	  },
	  {
		"radlexId": "RID35844",
		"description": "descending thoracic aorta",
		"containedById": "RID1384",
		"partOfId": "RID879",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32672002"
		  }
		]
	  },
	  {
		"radlexId": "RID1524",
		"description": "diaphragm",
		"containedById": "RID1243",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "5798000"
		  }
		]
	  },
	  {
		"radlexId": "RID134",
		"description": "duodenum",
		"containedById": "RID431",
		"partOfId": "RID132",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "38848004"
		  }
		]
	  },
	  {
		"radlexId": "RID30958",
		"description": "endometrium",
		"containedById": "RID302",
		"sexSpecific": "Female",
		"partOfId": "RID302",
		"synonyms": [
		  "tunica mucosa uteri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "17742"
		  },
		  {
			"system": "SNOMED",
			"code": "2739003"
		  }
		]
	  },
	  {
		"radlexId": "RID95",
		"description": "esophagus",
		"containedById": "RID1384",
		"partOfId": "RID94",
		"synonyms": [
		  "GI tract",
		  "gastro-intestinal system",
		  "gastrointestinal system"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32849002"
		  }
		]
	  },
	  {
		"radlexId": "RID81",
		"description": "falciform ligament",
		"containedById": "RID397",
		"synonyms": [
		  "falciform ligament of liver",
		  "ligamentum falciforme hepatis",
		  "ligamentum falciforme hepatis"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "11978009"
		  }
		]
	  },
	  {
		"radlexId": "RID295",
		"description": "uterine tube",
		"containedById": "RID294",
		"leftId": "RID30346",
		"rightId": "RID30345",
		"sexSpecific": "Female",
		"partOfId": "RID294",
		"synonyms": [
		  "tuba uterina",
		  "salpinx",
		  "fallopian tube",
		  "salpinx",
		  "tuba uterina"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "31435000"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.319.114.373"
		  },
		  {
			"system": "UMLS",
			"code": "C0015560"
		  }
		]
	  },
	  {
		"radlexId": "RID30346",
		"description": "left uterine tube",
		"containedById": "RID294_RID5824",
		"unsidedId": "RID295",
		"rightId": "RID30345",
		"sexSpecific": "Female",
		"partOfId": "RID294",
		"codes": [
		  {
			"system": "FMA",
			"code": "18484"
		  },
		  {
			"system": "SNOMED",
			"code": "113293009"
		  }
		]
	  },
	  {
		"radlexId": "RID30345",
		"description": "right uterine tube",
		"containedById": "RID294_RID5825",
		"unsidedId": "RID295",
		"leftId": "RID30346",
		"sexSpecific": "Female",
		"partOfId": "RID294",
		"codes": [
		  {
			"system": "FMA",
			"code": "18483"
		  },
		  {
			"system": "SNOMED",
			"code": "2033006"
		  }
		]
	  },
	  {
		"radlexId": "RID187",
		"description": "gallbladder",
		"containedById": "RID397",
		"partOfId": "RID33652",
		"synonyms": [
		  "gall bladder",
		  "vesica biliaris (Fellea)",
		  "vesica fellea",
		  "vesica biliaris",
		  "gallenblase",
		  "vesica fellea"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14775"
		  },
		  {
			"system": "SNOMED",
			"code": "28231008"
		  }
		]
	  },
	  {
		"radlexId": "RID910",
		"description": "gastroduodenal artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria gastroduodenalis",
		  "arteria gastroduodenalis"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "37274004"
		  }
		]
	  },
	  {
		"radlexId": "RID430",
		"description": "greater omentum",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "35366003"
		  }
		]
	  },
	  {
		"radlexId": "RID96",
		"description": "gastroesophageal junction",
		"containedById": "RID431",
		"partOfId": "RID94",
		"synonyms": [
		  "esophagogastric junction",
		  "EG junction",
		  "gastro-esophageal junction",
		  "GE junction"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "25271004"
		  }
		]
	  },
	  {
		"radlexId": "RID94",
		"description": "gastrointestinal tract",
		"containedById": "RID1243",
		"synonyms": [
		  "GI tract",
		  "gastro-intestinal system",
		  "gastrointestinal system"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25912"
		  },
		  {
			"system": "SNOMED",
			"code": "122865005"
		  }
		]
	  },
	  {
		"radlexId": "RID38068",
		"description": "ovarian artery",
		"containedById": "RID2507",
		"leftId": "RID38070",
		"rightId": "RID38069",
		"sexSpecific": "Female",
		"synonyms": [
		  "arteria ovarica <female>",
		  "Arteria ovarica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14761"
		  },
		  {
			"system": "SNOMED",
			"code": "12052000"
		  }
		]
	  },
	  {
		"radlexId": "RID38069",
		"description": "right ovarian artery",
		"containedById": "RID2507",
		"unsidedId": "RID38068",
		"leftId": "RID38070",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "14762"
		  }
		]
	  },
	  {
		"radlexId": "RID38070",
		"description": "left ovarian artery",
		"containedById": "RID2507",
		"unsidedId": "RID38068",
		"rightId": "RID38069",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "14763"
		  }
		]
	  },
	  {
		"radlexId": "RID38034",
		"description": "testicular artery",
		"containedById": "RID2507",
		"leftId": "RID38036",
		"rightId": "RID38035",
		"sexSpecific": "Male",
		"synonyms": [
		  "arteria testicularis <male>",
		  "Arteria testicularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14758"
		  },
		  {
			"system": "SNOMED",
			"code": "27175001"
		  }
		]
	  },
	  {
		"radlexId": "RID38035",
		"description": "right testicular artery",
		"containedById": "RID2507",
		"unsidedId": "RID38034",
		"leftId": "RID38036",
		"sexSpecific": "Male",
		"codes": [
		  {
			"system": "FMA",
			"code": "14759"
		  }
		]
	  },
	  {
		"radlexId": "RID38036",
		"description": "left testicular artery",
		"containedById": "RID2507",
		"unsidedId": "RID38034",
		"rightId": "RID38035",
		"sexSpecific": "Male",
		"codes": [
		  {
			"system": "FMA",
			"code": "14760"
		  }
		]
	  },
	  {
		"radlexId": "RID34801",
		"description": "testicular vein",
		"containedById": "RID2507",
		"leftId": "RID34802",
		"rightId": "RID34803",
		"sexSpecific": "Male",
		"synonyms": [
		  "male gonadal vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14344"
		  },
		  {
			"system": "SNOMED",
			"code": "31688004"
		  }
		]
	  },
	  {
		"radlexId": "RID34802",
		"description": "left testicular vein",
		"containedById": "RID2507",
		"unsidedId": "RID34801",
		"rightId": "RID34803",
		"sexSpecific": "Male",
		"synonyms": [
		  "left male gonadal vein",
		  "vena testicularis sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14345"
		  },
		  {
			"system": "SNOMED",
			"code": "367708009"
		  }
		]
	  },
	  {
		"radlexId": "RID34803",
		"description": "right testicular vein",
		"containedById": "RID2507",
		"unsidedId": "RID34801",
		"leftId": "RID34802",
		"sexSpecific": "Male",
		"synonyms": [
		  "right male gonadal vein",
		  "vena testicularis dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14341"
		  },
		  {
			"system": "SNOMED",
			"code": "367709001"
		  }
		]
	  },
	  {
		"radlexId": "RID34804",
		"description": "ovarian vein",
		"containedById": "RID2507",
		"leftId": "RID34806",
		"rightId": "RID34805",
		"sexSpecific": "Female",
		"synonyms": [
		  "female gonadal vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14346"
		  },
		  {
			"system": "SNOMED",
			"code": "976004"
		  }
		]
	  },
	  {
		"radlexId": "RID34805",
		"description": "right ovarian vein",
		"containedById": "RID2507",
		"unsidedId": "RID34804",
		"leftId": "RID34806",
		"sexSpecific": "Female",
		"synonyms": [
		  "vena ovarica dextra",
		  "right female gonadal vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14342"
		  },
		  {
			"system": "SNOMED",
			"code": "259368003"
		  }
		]
	  },
	  {
		"radlexId": "RID34806",
		"description": "left ovarian vein",
		"containedById": "RID2507",
		"unsidedId": "RID34804",
		"rightId": "RID34805",
		"sexSpecific": "Female",
		"synonyms": [
		  "left female gonadal vein",
		  "vena ovarica sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14347"
		  },
		  {
			"system": "SNOMED",
			"code": "259343000"
		  }
		]
	  },
	  {
		"radlexId": "RID9080",
		"description": "head",
		"containedById": "RID39569",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "69536005"
		  }
		]
	  },
	  {
		"radlexId": "RID1385",
		"description": "heart",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "FMA",
			"code": "14550"
		  },
		  {
			"system": "SNOMED",
			"code": "80891009"
		  }
		]
	  },
	  {
		"radlexId": "RID158",
		"description": "hepatic flexure of colon",
		"containedById": "RID431",
		"partOfId": "RID152",
		"synonyms": [
		  "large bowel",
		  "intestinum crassum",
		  "intestinum crassum"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "48338005"
		  },
		  {
			"system": "UMLS",
			"code": "C0019155"
		  }
		]
	  },
	  {
		"radlexId": "RID1179",
		"description": "hepatic vein",
		"containedById": "RID58",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "8993003"
		  }
		]
	  },
	  {
		"radlexId": "RID153",
		"description": "ileocecal valve",
		"containedById": "RID397",
		"partOfId": "RID94",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "23153004"
		  }
		]
	  },
	  {
		"radlexId": "RID150",
		"description": "ileum",
		"containedById": "RID397",
		"partOfId": "RID132",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "34516001"
		  }
		]
	  },
	  {
		"radlexId": "RID939",
		"description": "inferior mesenteric artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria mesenterica inferior",
		  "arteria mesenterica inferior"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "33795007"
		  }
		]
	  },
	  {
		"radlexId": "RID1211",
		"description": "inferior mesenteric vein",
		"containedById": "RID56",
		"synonyms": [
		  "vena mesenterica inferior",
		  "VMI",
		  "Vena mesenterica inferior"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32859001"
		  }
		]
	  },
	  {
		"radlexId": "RID1178",
		"description": "inferior vena cava",
		"containedById": "RID431",
		"synonyms": [
		  "ivc"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "64131007"
		  }
		]
	  },
	  {
		"radlexId": "RID945",
		"description": "internal iliac artery",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "90024005"
		  }
		]
	  },
	  {
		"radlexId": "RID1194",
		"description": "internal iliac vein",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "40300007"
		  }
		]
	  },
	  {
		"radlexId": "RID148",
		"description": "jejunum",
		"containedById": "RID397",
		"partOfId": "RID132",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "21306003"
		  }
		]
	  },
	  {
		"radlexId": "RID205",
		"description": "kidney",
		"containedById": "RID431",
		"leftId": "RID29663",
		"rightId": "RID29662",
		"partOfId": "RID204",
		"synonyms": [
		  "ren",
		  "ren (Nephros)",
		  "nephros",
		  "ren (Nephros)",
		  "Niere"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7203"
		  },
		  {
			"system": "SNOMED",
			"code": "64033007"
		  },
		  {
			"system": "UMLS",
			"code": "C0022646"
		  }
		]
	  },
	  {
		"radlexId": "RID29662",
		"description": "right kidney",
		"containedById": "RID431",
		"unsidedId": "RID205",
		"leftId": "RID29663",
		"partOfId": "RID204",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "9846003"
		  }
		]
	  },
	  {
		"radlexId": "RID29663",
		"description": "left kidney",
		"containedById": "RID431",
		"unsidedId": "RID205",
		"rightId": "RID29662",
		"partOfId": "RID204",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "18639004"
		  }
		]
	  },
	  {
		"radlexId": "RID152",
		"description": "large intestine",
		"containedById": "RID56",
		"partOfId": "RID94",
		"synonyms": [
		  "large bowel",
		  "intestinum crassum",
		  "intestinum crassum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25902"
		  },
		  {
			"system": "SNOMED",
			"code": "14742008"
		  }
		]
	  },
	  {
		"radlexId": "RID490",
		"description": "left anterior descending artery",
		"containedById": "RID1385",
		"partOfId": "RID28727",
		"synonyms": [
		  "Left anterior branch of anterior interventricular branch of left coronary artery",
		  "LAD"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "59438005"
		  }
		]
	  },
	  {
		"radlexId": "RID1390",
		"description": "left atrium",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "82471001"
		  }
		]
	  },
	  {
		"radlexId": "RID193",
		"description": "left hepatic duct",
		"containedById": "RID56",
		"partOfId": "RID33652",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "64281006"
		  }
		]
	  },
	  {
		"radlexId": "RID486",
		"description": "left coronary artery",
		"containedById": "RID1385",
		"partOfId": "RID28727",
		"synonyms": [
		  "coronary artery segment 11",
		  "left coronary artery main stem",
		  "left main coronary artery",
		  "LMCA",
		  "LM"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14768"
		  },
		  {
			"system": "SNOMED",
			"code": "50018008"
		  }
		]
	  },
	  {
		"radlexId": "RID908",
		"description": "left gastric artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria gastrica sinistra",
		  "arteria gastrica sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25929"
		  },
		  {
			"system": "SNOMED",
			"code": "23771002"
		  }
		]
	  },
	  {
		"radlexId": "RID916",
		"description": "left hepatic artery",
		"containedById": "RID56",
		"synonyms": [
		  "left branch of hepatic artery",
		  "ramus sinister (Arteria hepatica propria)",
		  "ramus sinister (Arteria hepatica propria)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7310"
		  },
		  {
			"system": "SNOMED",
			"code": "21807003"
		  }
		]
	  },
	  {
		"radlexId": "RID1326",
		"description": "left lung",
		"containedById": "RID1243",
		"unsidedId": "RID1243",
		"rightId": "RID1302",
		"synonyms": [
		  "pulmo sinister",
		  "pulmo sinister",
		  "Linke Lunge"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "44029006"
		  }
		]
	  },
	  {
		"radlexId": "RID34918",
		"description": "main bronchus",
		"containedById": "RID1384",
		"leftId": "RID1275",
		"rightId": "RID1250",
		"partOfId": "RID1246",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "102297006"
		  }
		]
	  },
	  {
		"radlexId": "RID1250",
		"description": "right main bronchus",
		"containedById": "RID1384",
		"unsidedId": "RID34918",
		"leftId": "RID1275",
		"partOfId": "RID1246",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "70074004"
		  }
		]
	  },
	  {
		"radlexId": "RID1275",
		"description": "left main bronchus",
		"containedById": "RID1384",
		"unsidedId": "RID34918",
		"rightId": "RID1250",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "75245000"
		  }
		]
	  },
	  {
		"radlexId": "RID993",
		"description": "left pulmonary artery",
		"containedById": "RID1384",
		"unsidedId": "RID974",
		"rightId": "RID976",
		"codes": [
		  {
			"system": "FMA",
			"code": "14753"
		  },
		  {
			"system": "SNOMED",
			"code": "50408007"
		  }
		]
	  },
	  {
		"radlexId": "RID37860",
		"description": "left renal artery",
		"containedById": "RID431",
		"unsidedId": "RID936",
		"rightId": "RID37859",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "275309004"
		  }
		]
	  },
	  {
		"radlexId": "RID43896",
		"description": "left subclavian artery",
		"containedById": "RID1243",
		"synonyms": [
		  "arteria subclavia (sinistra)"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "85235006"
		  }
		]
	  },
	  {
		"radlexId": "RID1392",
		"description": "left ventricle",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "87878005"
		  }
		]
	  },
	  {
		"radlexId": "RID1333",
		"description": "lingula",
		"containedById": "RID1326",
		"partOfId": "RID1327",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "50837003"
		  }
		]
	  },
	  {
		"radlexId": "RID1338",
		"description": "lower lobe of left lung",
		"containedById": "RID1326",
		"partOfId": "RID1326",
		"synonyms": [
		  "LLL",
		  "left lower lobe"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "41224006"
		  }
		]
	  },
	  {
		"radlexId": "RID1315",
		"description": "lower lobe of right lung",
		"containedById": "RID1302",
		"partOfId": "RID1302",
		"synonyms": [
		  "right lower lobe",
		  "RLL"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "266005"
		  }
		]
	  },
	  {
		"radlexId": "RID34573",
		"description": "lumbar vertebral column",
		"containedById": "RID1243",
		"partOfId": "RID7741",
		"synonyms": [
		  "lumbar spine",
		  "lumbar spinal column"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "122496007"
		  }
		]
	  },
	  {
		"radlexId": "RID1301",
		"description": "lung",
		"containedById": "RID1243",
		"leftId": "RID1326",
		"rightId": "RID1302",
		"synonyms": [
		  "pulmo",
		  "pulmo"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "39607008"
		  }
		]
	  },
	  {
		"radlexId": "RID975",
		"description": "main pulmonary artery",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "81040000"
		  }
		]
	  },
	  {
		"radlexId": "RID2476",
		"description": "manubrium",
		"containedById": "RID29859",
		"partOfId": "RID2473",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "37285002"
		  }
		]
	  },
	  {
		"radlexId": "RID1384",
		"description": "mediastinum",
		"containedById": "RID1243",
		"synonyms": [
		  "mediast"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "72410000"
		  }
		]
	  },
	  {
		"radlexId": "RID1310",
		"description": "middle lobe of lung",
		"containedById": "RID1302",
		"partOfId": "RID1302",
		"synonyms": [
		  "middle lobe of right lung",
		  "RML",
		  "right middle lobe"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "72481006"
		  }
		]
	  },
	  {
		"radlexId": "RID1395",
		"description": "mitral valve",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "91134007"
		  }
		]
	  },
	  {
		"radlexId": "RID7488",
		"description": "neck",
		"containedById": "RID39569",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "45048000"
		  }
		]
	  },
	  {
		"radlexId": "RID290",
		"description": "ovary",
		"containedById": "RID294",
		"leftId": "RID32830",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "ovarium",
		  "ovarium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7209"
		  },
		  {
			"system": "SNOMED",
			"code": "15497006"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.576.497|A05.360.576.497"
		  },
		  {
			"system": "UMLS",
			"code": "C0029939"
		  }
		]
	  },
	  {
		"radlexId": "RID32830",
		"description": "left ovary",
		"containedById": "RID294_RID5824",
		"unsidedId": "RID290",
		"rightId": "RID32829",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "7214"
		  },
		  {
			"system": "SNOMED",
			"code": "43981004"
		  }
		]
	  },
	  {
		"radlexId": "RID32829",
		"description": "right ovary",
		"containedById": "RID294_RID5825",
		"unsidedId": "RID290",
		"leftId": "RID32830",
		"rightId": "RID32829",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "7213"
		  },
		  {
			"system": "SNOMED",
			"code": "20837000"
		  }
		]
	  },
	  {
		"radlexId": "RID170",
		"description": "pancreas",
		"containedById": "RID431",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "15776009"
		  }
		]
	  },
	  {
		"radlexId": "RID171",
		"description": "head of pancreas",
		"containedById": "RID170",
		"partOfId": "RID170",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "64163001"
		  }
		]
	  },
	  {
		"radlexId": "RID177",
		"description": "main pancreatic duct",
		"containedById": "RID170",
		"partOfId": "RID170",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "69930009"
		  }
		]
	  },
	  {
		"radlexId": "RID173",
		"description": "neck of pancreas",
		"containedById": "RID170",
		"partOfId": "RID170",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "245381005"
		  }
		]
	  },
	  {
		"radlexId": "RID172",
		"description": "uncinate process of pancreas",
		"containedById": "RID170",
		"partOfId": "RID170",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "30045001"
		  }
		]
	  },
	  {
		"radlexId": "RID175",
		"description": "tail of pancreas",
		"containedById": "RID170",
		"partOfId": "RID170",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "73239005"
		  }
		]
	  },
	  {
		"radlexId": "RID176",
		"description": "pancreatic duct",
		"containedById": "RID170",
		"synonyms": [
		  "DP",
		  "Ductus Wirsungianus"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "69930009"
		  }
		]
	  },
	  {
		"radlexId": "RID2507",
		"description": "pelvis",
		"containedById": "RID39569",
		"synonyms": [
		  "lesser pelvis",
		  "pelvis minor",
		  "true pelvis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9578"
		  },
		  {
			"system": "SNOMED",
			"code": "12921003"
		  },
		  {
			"system": "MESH",
			"code": "A01.923.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0030797"
		  }
		]
	  },
	  {
		"radlexId": "RID1407",
		"description": "pericardium",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "76848001"
		  }
		]
	  },
	  {
		"radlexId": "RID397",
		"description": "peritoneal cavity",
		"containedById": "RID56",
		"codes": [
		  {
			"system": "FMA",
			"code": "14704"
		  },
		  {
			"system": "SNOMED",
			"code": "83670000"
		  },
		  {
			"system": "UMLS",
			"code": "C0031138"
		  }
		]
	  },
	  {
		"radlexId": "RID410",
		"description": "peritoneum",
		"containedById": "RID56",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "15425007"
		  }
		]
	  },
	  {
		"radlexId": "RID1362",
		"description": "pleura",
		"containedById": "RID1243",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "3120008"
		  }
		]
	  },
	  {
		"radlexId": "RID914",
		"description": "proper hepatic artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria hepatica propria",
		  "hepatic artery proper",
		  "Arteria hepatic propria"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "18112008"
		  }
		]
	  },
	  {
		"radlexId": "RID343",
		"description": "prostate",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"synonyms": [
		  "prostata",
		  "prostata (Glandula prostatica)",
		  "prostata"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "41216001"
		  },
		  {
			"system": "MESH",
			"code": "A10.336.707"
		  }
		]
	  },
	  {
		"radlexId": "RID2553",
		"description": "pubis",
		"containedById": "RID2507",
		"synonyms": [
		  "Schambein"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "66040006"
		  }
		]
	  },
	  {
		"radlexId": "RID974",
		"description": "pulmonary artery",
		"containedById": "RID1384",
		"leftId": "RID993",
		"rightId": "RID976",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "81040000"
		  },
		  {
			"system": "UMLS",
			"code": "C0034052"
		  }
		]
	  },
	  {
		"radlexId": "RID1231",
		"description": "pulmonary vein",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "113366009"
		  }
		]
	  },
	  {
		"radlexId": "RID1396",
		"description": "pulmonic valve",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "39057004"
		  }
		]
	  },
	  {
		"radlexId": "RID122",
		"description": "pylorus",
		"containedById": "RID397",
		"partOfId": "RID114",
		"synonyms": [
		  "pyloric part of stomach",
		  "pars pylorica gastricae"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "280119005"
		  }
		]
	  },
	  {
		"radlexId": "RID163",
		"description": "rectum",
		"containedById": "RID2507",
		"partOfId": "RID152",
		"codes": [
		  {
			"system": "FMA",
			"code": "14751"
		  },
		  {
			"system": "SNOMED",
			"code": "34402009"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.124.526.767"
		  },
		  {
			"system": "UMLS",
			"code": "C0035065"
		  }
		]
	  },
	  {
		"radlexId": "RID936",
		"description": "renal artery",
		"containedById": "RID431",
		"leftId": "RID37860",
		"rightId": "RID37859",
		"synonyms": [
		  "arteria renalis",
		  "Arteria renalis"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "2841007"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.114.745"
		  },
		  {
			"system": "UMLS",
			"code": "C0035092"
		  }
		]
	  },
	  {
		"radlexId": "RID1184",
		"description": "renal vein",
		"containedById": "RID431",
		"leftId": "RID37994",
		"rightId": "RID37993",
		"synonyms": [
		  "Nierenvene"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14334"
		  },
		  {
			"system": "SNOMED",
			"code": "56400007"
		  },
		  {
			"system": "UMLS",
			"code": "C0035092"
		  }
		]
	  },
	  {
		"radlexId": "RID37993",
		"description": "right renal vein",
		"containedById": "RID431",
		"unsidedId": "RID1184",
		"rightId": "RID37993",
		"codes": [
		  {
			"system": "FMA",
			"code": "14335"
		  },
		  {
			"system": "SNOMED",
			"code": "275910003"
		  }
		]
	  },
	  {
		"radlexId": "RID37994",
		"description": "left renal vein",
		"containedById": "RID431",
		"unsidedId": "RID1184",
		"leftId": "RID37994",
		"codes": [
		  {
			"system": "FMA",
			"code": "14336"
		  },
		  {
			"system": "SNOMED",
			"code": "275809009"
		  }
		]
	  },
	  {
		"radlexId": "RID431",
		"description": "retroperitoneum",
		"containedById": "RID56",
		"synonyms": [
		  "retroperito",
		  "spatium retroperitoneale"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "82849001"
		  }
		]
	  },
	  {
		"radlexId": "RID1387",
		"description": "right atrium",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "73829009"
		  }
		]
	  },
	  {
		"radlexId": "RID194",
		"description": "right hepatic duct",
		"containedById": "RID56",
		"partOfId": "RID33652",
		"codes": [
		  {
			"system": "FMA",
			"code": "14669"
		  },
		  {
			"system": "SNOMED",
			"code": "78000005"
		  },
		  {
			"system": "UMLS",
			"code": "C0227557"
		  }
		]
	  },
	  {
		"radlexId": "RID544",
		"description": "right coronary artery",
		"containedById": "RID1385",
		"partOfId": "RID28727",
		"synonyms": [
		  "RCA"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14776"
		  },
		  {
			"system": "SNOMED",
			"code": "13647002"
		  }
		]
	  },
	  {
		"radlexId": "RID920",
		"description": "right gastric artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria gastrica dextra",
		  "arteria gastrica dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25927"
		  },
		  {
			"system": "SNOMED",
			"code": "34990004"
		  }
		]
	  },
	  {
		"radlexId": "RID918",
		"description": "right hepatic artery",
		"containedById": "RID56",
		"synonyms": [
		  "ramus dexter (Arteria hepatica propria)",
		  "right branch of hepatic artery proper",
		  "Arteria hepatic dextra"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "69421009"
		  }
		]
	  },
	  {
		"radlexId": "RID1302",
		"description": "right lung",
		"containedById": "RID1243",
		"unsidedId": "RID1243",
		"leftId": "RID1326",
		"synonyms": [
		  "pulmo dexter",
		  "pulmo dexter",
		  "Rechte Lunge"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "3341006"
		  }
		]
	  },
	  {
		"radlexId": "RID976",
		"description": "right pulmonary artery",
		"containedById": "RID1384",
		"unsidedId": "RID936",
		"leftId": "RID993",
		"codes": [
		  {
			"system": "FMA",
			"code": "14752"
		  },
		  {
			"system": "SNOMED",
			"code": "78480002"
		  }
		]
	  },
	  {
		"radlexId": "RID37859",
		"description": "right renal artery",
		"containedById": "RID56",
		"unsidedId": "RID936",
		"leftId": "RID37860",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "275208009"
		  }
		]
	  },
	  {
		"radlexId": "RID43895",
		"description": "right subclavian artery",
		"containedById": "RID1243",
		"synonyms": [
		  "arteria subclavia dextra"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "29700009"
		  }
		]
	  },
	  {
		"radlexId": "RID1389",
		"description": "right ventricle",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "53085002"
		  }
		]
	  },
	  {
		"radlexId": "RID357",
		"description": "seminal vesicle",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "FMA",
			"code": "19386"
		  },
		  {
			"system": "SNOMED",
			"code": "64739004"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.444.713"
		  },
		  {
			"system": "UMLS",
			"code": "C0036628"
		  }
		]
	  },
	  {
		"radlexId": "RID50232",
		"description": "right seminal vesicle",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"synonyms": [
		  "Structure of right seminal vesicle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19387"
		  },
		  {
			"system": "SNOMED",
			"code": "74308000"
		  },
		  {
			"system": "UMLS",
			"code": "C0227979"
		  }
		]
	  },
	  {
		"radlexId": "RID50233",
		"description": "left seminal vesicle",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"synonyms": [
		  "Structure of left seminal vesicle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19388"
		  },
		  {
			"system": "SNOMED",
			"code": "42320003"
		  },
		  {
			"system": "UMLS",
			"code": "C0227980"
		  }
		]
	  },
	  {
		"radlexId": "RID28727",
		"description": "set of coronary arteries",
		"containedById": "RID1384",
		"synonyms": [
		  "cor arts",
		  "coronary arteries"
		]
	  },
	  {
		"radlexId": "RID162",
		"description": "sigmoid colon",
		"containedById": "RID2507",
		"partOfId": "RID152",
		"synonyms": [
		  "colon sigmoideum",
		  "colon sigmoideum"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "60184004"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.124.526.356.668"
		  }
		]
	  },
	  {
		"radlexId": "RID579",
		"description": "sinotubular junction",
		"containedById": "RID1384",
		"partOfId": "RID480",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "443167003"
		  }
		]
	  },
	  {
		"radlexId": "RID132",
		"description": "small intestine",
		"containedById": "RID56",
		"partOfId": "RID94",
		"synonyms": [
		  "intestinum tenue",
		  "sm int",
		  "small bowel",
		  "D√ºnndarm"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "30315005"
		  }
		]
	  },
	  {
		"radlexId": "RID7741",
		"description": "spine",
		"containedById": "RID39569",
		"synonyms": [
		  "vertebral column",
		  "spinal column"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "421060004"
		  }
		]
	  },
	  {
		"radlexId": "RID86",
		"description": "spleen",
		"containedById": "RID397",
		"synonyms": [
		  "lien",
		  "splen",
		  "lien",
		  "Milz"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14773"
		  },
		  {
			"system": "SNOMED",
			"code": "78961009"
		  },
		  {
			"system": "UMLS",
			"code": "C0037996"
		  }
		]
	  },
	  {
		"radlexId": "RID921",
		"description": "splenic artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria splenica",
		  "arteria lienalis",
		  "arteria splenica"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "22083002"
		  }
		]
	  },
	  {
		"radlexId": "RID160",
		"description": "splenic flexure of colon",
		"containedById": "RID431",
		"partOfId": "RID152",
		"synonyms": [
		  "splenic flexure",
		  "flexura coli splenica",
		  "flexura coli sinistra",
		  "flexura coli sinistra"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "72592005"
		  }
		]
	  },
	  {
		"radlexId": "RID1209",
		"description": "splenic vein",
		"containedById": "RID56",
		"synonyms": [
		  "vena lienalis",
		  "vena splenica",
		  "vena lienalis"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "35819009"
		  }
		]
	  },
	  {
		"radlexId": "RID2473",
		"description": "sternum",
		"containedById": "RID29859",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "56873002"
		  }
		]
	  },
	  {
		"radlexId": "RID114",
		"description": "stomach",
		"containedById": "RID397",
		"partOfId": "RID94",
		"synonyms": [
		  "ventriculus",
		  "gaster",
		  "gaster",
		  "ventriculus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3951"
		  },
		  {
			"system": "SNOMED",
			"code": "69695003"
		  },
		  {
			"system": "UMLS",
			"code": "C0038530"
		  }
		]
	  },
	  {
		"radlexId": "RID773",
		"description": "subclavian artery",
		"containedById": "RID1243",
		"synonyms": [
		  "arteria subclavia (dextra)",
		  "arteria subclavia",
		  "arteria subclavia"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "36765005"
		  }
		]
	  },
	  {
		"radlexId": "RID927",
		"description": "superior mesenteric artery",
		"containedById": "RID56",
		"synonyms": [
		  "arteria mesenterica superior",
		  "SMA",
		  "arteria mesenterica superior"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "42258001"
		  }
		]
	  },
	  {
		"radlexId": "RID1212",
		"description": "superior mesenteric vein",
		"containedById": "RID56",
		"synonyms": [
		  "vena mesenterica superior",
		  "SMV",
		  "superior masenteric vein",
		  "Vena mesenterica superior",
		  "VMS"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "90771006"
		  }
		]
	  },
	  {
		"radlexId": "RID1010",
		"description": "superior vena cava",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "48345005"
		  }
		]
	  },
	  {
		"radlexId": "RID151",
		"description": "terminal ileum",
		"containedById": "RID397",
		"partOfId": "RID150",
		"synonyms": [
		  "distal part of ileum"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "85774003"
		  }
		]
	  },
	  {
		"radlexId": "RID879",
		"description": "thoracic aorta",
		"containedById": "RID1384",
		"partOfId": "RID480",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "113262008"
		  }
		]
	  },
	  {
		"radlexId": "RID34572",
		"description": "thoracic vertebral column",
		"containedById": "RID1243",
		"partOfId": "RID7741",
		"synonyms": [
		  "thoracic spine",
		  "thoracic spinal column"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "122495006"
		  }
		]
	  },
	  {
		"radlexId": "RID1243",
		"description": "thorax",
		"containedById": "RID39569",
		"synonyms": [
		  "chest"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "51185008"
		  },
		  {
			"system": "UMLS",
			"code": "C0040113"
		  }
		]
	  },
	  {
		"radlexId": "RID1430",
		"description": "thymus",
		"containedById": "RID1384",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "9875009"
		  }
		]
	  },
	  {
		"radlexId": "RID1247",
		"description": "trachea",
		"containedById": "RID1384",
		"partOfId": "RID1246",
		"synonyms": [
		  "trach"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "44567001"
		  }
		]
	  },
	  {
		"radlexId": "RID159",
		"description": "transverse colon",
		"containedById": "RID397",
		"partOfId": "RID152",
		"synonyms": [
		  "colon transversum",
		  "Colon transversum"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "485005"
		  }
		]
	  },
	  {
		"radlexId": "RID1397",
		"description": "tricuspid valve",
		"containedById": "RID1385",
		"partOfId": "RID1397",
		"synonyms": [
		  "Trikuspidale Herzklappe"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "46030003"
		  }
		]
	  },
	  {
		"radlexId": "RID1327",
		"description": "upper lobe of left lung",
		"containedById": "RID1326",
		"partOfId": "RID1326",
		"synonyms": [
		  "left upper lobe",
		  "LUL"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "44714003"
		  }
		]
	  },
	  {
		"radlexId": "RID1303",
		"description": "upper lobe of right lung",
		"containedById": "RID1302",
		"partOfId": "RID1302",
		"synonyms": [
		  "right upper lobe",
		  "RUL"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "42400003"
		  }
		]
	  },
	  {
		"radlexId": "RID229",
		"description": "ureter",
		"containedById": "RID431",
		"leftId": "RID30845",
		"rightId": "RID30844",
		"partOfId": "RID204",
		"codes": [
		  {
			"system": "FMA",
			"code": "9704"
		  },
		  {
			"system": "SNOMED",
			"code": "87953007"
		  },
		  {
			"system": "MESH",
			"code": "A05.810.776"
		  },
		  {
			"system": "UMLS",
			"code": "C0041951"
		  }
		]
	  },
	  {
		"radlexId": "RID30844",
		"description": "right ureter",
		"containedById": "RID431",
		"unsidedId": "RID229",
		"leftId": "RID30845",
		"partOfId": "RID204",
		"codes": [
		  {
			"system": "FMA",
			"code": "15571"
		  },
		  {
			"system": "SNOMED",
			"code": "25308007"
		  },
		  {
			"system": "UMLS",
			"code": "C0227682"
		  }
		]
	  },
	  {
		"radlexId": "RID30845",
		"description": "left ureter",
		"containedById": "RID431",
		"unsidedId": "RID229",
		"rightId": "RID30844",
		"partOfId": "RID204",
		"codes": [
		  {
			"system": "FMA",
			"code": "15572"
		  },
		  {
			"system": "SNOMED",
			"code": "26559004"
		  },
		  {
			"system": "UMLS",
			"code": "C0227683"
		  }
		]
	  },
	  {
		"radlexId": "RID34890",
		"description": "urethra",
		"containedById": "RID2507",
		"partOfId": "RID204",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "13648007"
		  }
		]
	  },
	  {
		"radlexId": "RID204",
		"description": "urinary tract",
		"containedById": "RID56",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "431938005"
		  }
		]
	  },
	  {
		"radlexId": "RID302",
		"description": "uterus",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "35039007"
		  }
		]
	  },
	  {
		"radlexId": "RID325",
		"description": "vagina",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "Scheide"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "76784001"
		  }
		]
	  },
	  {
		"radlexId": "RID39569",
		"description": "whole body",
		"containedById": "RID39569",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "261188006"
		  },
		  {
			"system": "UMLS",
			"code": "C0017421"
		  }
		]
	  },
	  {
		"radlexId": "RID270",
		"description": "female genital system",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"codes": [
		  {
			"system": "FMA",
			"code": "45664"
		  },
		  {
			"system": "SNOMED",
			"code": "53065001"
		  },
		  {
			"system": "UMLS",
			"code": "C0017422"
		  }
		]
	  },
	  {
		"radlexId": "RID342",
		"description": "genital system of the male human body",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"synonyms": [
		  "male genital system",
		  "systema genitale masculinum",
		  "M√§nnliches Geschlechtssystem"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "90264002"
		  }
		]
	  },
	  {
		"radlexId": "RID375",
		"description": "spermatic cord",
		"containedById": "RID2507",
		"leftId": "RID375_RID5824",
		"rightId": "RID375_RID5825",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "49957000"
		  }
		]
	  },
	  {
		"radlexId": "RID375_RID5824",
		"description": "left spermatic cord",
		"containedById": "RID2507",
		"unsidedId": "RID375",
		"rightId": "RID375_RID5825",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "53245003"
		  }
		],
		"sexSpecific": "Male"
	  },
	  {
		"radlexId": "RID375_RID5825",
		"description": "right spermatic cord",
		"containedById": "RID2507",
		"unsidedId": "RID375",
		"leftId": "RID375_RID5824",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "69615002"
		  }
		],
		"sexSpecific": "Male"
	  },
	  {
		"radlexId": "RID361",
		"description": "ejaculatory duct",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "1511004"
		  }
		]
	  },
	  {
		"radlexId": "RID371",
		"description": "epididymis",
		"containedById": "RID2507",
		"leftId": "RID371_RID5824",
		"rightId": "RID371_RID5825",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "87644002"
		  }
		]
	  },
	  {
		"radlexId": "RID371_RID5824",
		"description": "left epididymis",
		"containedById": "RID2507",
		"unsidedId": "RID371",
		"rightId": "RID371_RID5825",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "86244002"
		  }
		],
		"sexSpecific": "Male"
	  },
	  {
		"radlexId": "RID371_RID5825",
		"description": "right epididymis",
		"containedById": "RID2507",
		"unsidedId": "RID371",
		"leftId": "RID371_RID5824",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "74475002"
		  }
		],
		"sexSpecific": "Male"
	  },
	  {
		"radlexId": "RID362",
		"description": "penis",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342"
	  },
	  {
		"radlexId": "RID366",
		"description": "testis",
		"containedById": "RID2507",
		"leftId": "RID38997",
		"rightId": "RID38996",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"synonyms": [
		  "orchis",
		  "testis (Orchis)",
		  "testicle",
		  "Hoden",
		  "Testis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7210"
		  },
		  {
			"system": "SNOMED",
			"code": "40689003"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.444.849 | A05.360.576.782 | A06.300.312.782"
		  },
		  {
			"system": "UMLS",
			"code": "C0039597"
		  }
		]
	  },
	  {
		"radlexId": "RID38996",
		"description": "right testis",
		"containedById": "RID2507",
		"unsidedId": "RID366",
		"leftId": "RID38997",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "FMA",
			"code": "7211"
		  },
		  {
			"system": "SNOMED",
			"code": "15598003"
		  },
		  {
			"system": "UMLS",
			"code": "C0227997"
		  }
		]
	  },
	  {
		"radlexId": "RID38997",
		"description": "left testis",
		"containedById": "RID2507",
		"unsidedId": "RID366",
		"rightId": "RID38996",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "FMA",
			"code": "7212"
		  },
		  {
			"system": "SNOMED",
			"code": "63239009"
		  },
		  {
			"system": "UMLS",
			"code": "C0227998"
		  }
		]
	  },
	  {
		"radlexId": "RID365",
		"description": "scrotum",
		"containedById": "RID2507",
		"leftId": "RID30037",
		"rightId": "RID30036",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "FMA",
			"code": "18252"
		  },
		  {
			"system": "SNOMED",
			"code": "20233005"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.444.661"
		  },
		  {
			"system": "UMLS",
			"code": "C0036471"
		  }
		]
	  },
	  {
		"radlexId": "RID30036",
		"description": "right hemiscrotum",
		"containedById": "RID2507",
		"unsidedId": "RID365",
		"leftId": "RID30037",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "734762001"
		  },
		  {
			"system": "UMLS",
			"code": "C0738619"
		  }
		]
	  },
	  {
		"radlexId": "RID30037",
		"description": "left hemiscrotum",
		"containedById": "RID2507",
		"unsidedId": "RID365",
		"rightId": "RID30036",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "734761008"
		  },
		  {
			"system": "UMLS",
			"code": "C0738620"
		  }
		]
	  },
	  {
		"radlexId": "RID356",
		"description": "periprostatic venous plexus",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"synonyms": [
		  "plexus venosus prostaticus",
		  "pudendal venous plexus",
		  "Periprostatischer Venenplexus"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "29108008"
		  }
		]
	  },
	  {
		"radlexId": "RID376",
		"description": "pampiniform plexus",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID342",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "71469005"
		  }
		]
	  },
	  {
		"radlexId": "RID2509",
		"description": "sacrum",
		"containedById": "RID2507",
		"sexSpecific": "Male",
		"partOfId": "RID7741",
		"synonyms": [
		  "os sacrum [vertebrae sacrales I - V]",
		  "sacr",
		  "sacral bone",
		  "Kreuzbein"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "699698002"
		  }
		]
	  },
	  {
		"radlexId": "RID1258",
		"description": "interlobar bronchus",
		"containedById": "RID1384",
		"partOfId": "RID1246",
		"synonyms": [
		  "tracheobronchial tree"
		]
	  },
	  {
		"radlexId": "RID30008",
		"description": "anterior abdominal wall",
		"containedById": "RID56",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "59380008"
		  }
		]
	  },
	  {
		"radlexId": "RID32817",
		"description": "posterior abdominal wall",
		"containedById": "RID56",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "22577007"
		  }
		]
	  },
	  {
		"radlexId": "RID147",
		"description": "ligament of Treitz",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "71641006"
		  }
		]
	  },
	  {
		"radlexId": "RID413",
		"description": "gastrohepatic ligament",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "6544009"
		  }
		]
	  },
	  {
		"radlexId": "RID417",
		"description": "gastrocolic ligament",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "47606005"
		  }
		]
	  },
	  {
		"radlexId": "RID415",
		"description": "hepatoduodenal ligament",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "20038006"
		  }
		]
	  },
	  {
		"radlexId": "RID33180",
		"description": "mesentery",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "89679009"
		  }
		]
	  },
	  {
		"radlexId": "RID200",
		"description": "common hepatic duct",
		"containedById": "RID56",
		"partOfId": "RID33652",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "725502003"
		  },
		  {
			"system": "MESH",
			"code": "A03.159.183.079.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0019149"
		  }
		]
	  },
	  {
		"radlexId": "RID2638",
		"description": "lower extremity",
		"containedById": "RID39569",
		"leftId": "RID2638_RID5824",
		"rightId": "RID2638_RID5825",
		"synonyms": [
		  "le"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7184"
		  },
		  {
			"system": "SNOMED",
			"code": "61685007"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610"
		  }
		]
	  },
	  {
		"radlexId": "RID2638_RID5824",
		"description": "left lower extremity",
		"containedById": "RID39569",
		"unsidedId": "RID2638",
		"rightId": "RID2638_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32153003"
		  }
		]
	  },
	  {
		"radlexId": "RID2638_RID5825",
		"description": "right lower extremity",
		"containedById": "RID39569",
		"unsidedId": "RID2638",
		"leftId": "RID2638_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "62175007"
		  }
		]
	  },
	  {
		"radlexId": "RID2639",
		"description": "hip",
		"containedById": "RID2638",
		"leftId": "RID2639_RID5824",
		"rightId": "RID2639_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "24964"
		  },
		  {
			"system": "SNOMED",
			"code": "29836001"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610.400"
		  },
		  {
			"system": "UMLS",
			"code": "C0019552"
		  }
		]
	  },
	  {
		"radlexId": "RID2639_RID5824",
		"description": "left hip",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID2639",
		"rightId": "RID2639_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "287679003"
		  }
		]
	  },
	  {
		"radlexId": "RID2639_RID5825",
		"description": "right hip",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID2639",
		"leftId": "RID2639_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "287579007"
		  }
		]
	  },
	  {
		"radlexId": "RID2660",
		"description": "thigh",
		"containedById": "RID2638",
		"leftId": "RID2660_RID5824",
		"rightId": "RID2660_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "24967"
		  },
		  {
			"system": "SNOMED",
			"code": "68367000"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610.750"
		  }
		]
	  },
	  {
		"radlexId": "RID2660_RID5824",
		"description": "left thigh",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID2660",
		"rightId": "RID2660_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "61396006"
		  }
		]
	  },
	  {
		"radlexId": "RID2660_RID5825",
		"description": "right thigh",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID2660",
		"leftId": "RID2660_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "11207009"
		  }
		]
	  },
	  {
		"radlexId": "RID2743",
		"description": "knee",
		"containedById": "RID2638",
		"leftId": "RID49360",
		"rightId": "RID49359",
		"synonyms": [
		  "genu",
		  "genu"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24974"
		  },
		  {
			"system": "SNOMED",
			"code": "72696002"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610.450"
		  }
		]
	  },
	  {
		"radlexId": "RID49359",
		"description": "right knee",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID2743",
		"leftId": "RID49360",
		"codes": [
		  {
			"system": "FMA",
			"code": "24977"
		  },
		  {
			"system": "SNOMED",
			"code": "6757004"
		  }
		]
	  },
	  {
		"radlexId": "RID49360",
		"description": "left knee",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID2743",
		"rightId": "RID49359",
		"codes": [
		  {
			"system": "FMA",
			"code": "24978"
		  },
		  {
			"system": "SNOMED",
			"code": "82169009"
		  }
		]
	  },
	  {
		"radlexId": "RID2869",
		"description": "leg",
		"containedById": "RID2638",
		"leftId": "RID2869_RID5824",
		"rightId": "RID2869_RID5825",
		"synonyms": [
		  "lower leg"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24979"
		  },
		  {
			"system": "SNOMED",
			"code": "61685007"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610.500"
		  }
		]
	  },
	  {
		"radlexId": "RID2869_RID5824",
		"description": "left leg",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID2869",
		"rightId": "RID2869_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "32153003"
		  }
		]
	  },
	  {
		"radlexId": "RID2869_RID5825",
		"description": "right leg",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID2869",
		"leftId": "RID2869_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "62175007"
		  }
		]
	  },
	  {
		"radlexId": "RID28545",
		"description": "ankle",
		"containedById": "RID2638",
		"leftId": "RID28545_RID5824",
		"rightId": "RID28545_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "9665"
		  },
		  {
			"system": "SNOMED",
			"code": "344001"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610.250.149"
		  },
		  {
			"system": "UMLS",
			"code": "C1140621"
		  }
		]
	  },
	  {
		"radlexId": "RID28545_RID5824",
		"description": "left ankle",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID28545",
		"rightId": "RID28545_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "51636004"
		  }
		]
	  },
	  {
		"radlexId": "RID28545_RID5825",
		"description": "right ankle",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID28545",
		"leftId": "RID28545_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "6685009"
		  }
		]
	  },
	  {
		"radlexId": "RID28829",
		"description": "foot",
		"containedById": "RID2638",
		"leftId": "RID28829_RID5824",
		"rightId": "RID28829_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "9664"
		  },
		  {
			"system": "SNOMED",
			"code": "56459004"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.610.250"
		  }
		]
	  },
	  {
		"radlexId": "RID28829_RID5824",
		"description": "left foot",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID28829",
		"rightId": "RID28829_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "22335008"
		  }
		]
	  },
	  {
		"radlexId": "RID28829_RID5825",
		"description": "right foot",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID28829",
		"leftId": "RID28829_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "7769000"
		  }
		]
	  },
	  {
		"radlexId": "RID2691",
		"description": "anterior compartment of thigh",
		"containedById": "RID2660",
		"leftId": "RID48158",
		"rightId": "RID48157",
		"synonyms": [
		  "compartimentum femoris extensorum",
		  "anterior fascial compartment of thigh",
		  "compartimentum femoris anterius",
		  "compartimentum femoris extensorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45151"
		  }
		]
	  },
	  {
		"radlexId": "RID48157",
		"description": "anterior compartment of right thigh",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2691",
		"leftId": "RID48158",
		"codes": [
		  {
			"system": "FMA",
			"code": "45153"
		  }
		]
	  },
	  {
		"radlexId": "RID48158",
		"description": "anterior compartment of left thigh",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2691",
		"rightId": "RID48157",
		"codes": [
		  {
			"system": "FMA",
			"code": "45155"
		  }
		]
	  },
	  {
		"radlexId": "RID48159",
		"description": "posterior compartment of thigh",
		"containedById": "RID2660",
		"leftId": "RID48161",
		"rightId": "RID48160",
		"synonyms": [
		  "compartimentum femoris posterius",
		  "compartimentum femoris flexorum",
		  "compartimentum femoris flexorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45157"
		  }
		]
	  },
	  {
		"radlexId": "RID48160",
		"description": "posterior compartment of right thigh",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID48159",
		"leftId": "RID48161",
		"codes": [
		  {
			"system": "FMA",
			"code": "45158"
		  }
		]
	  },
	  {
		"radlexId": "RID48161",
		"description": "posterior compartment of left thigh",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID48159",
		"rightId": "RID48160",
		"codes": [
		  {
			"system": "FMA",
			"code": "45159"
		  }
		]
	  },
	  {
		"radlexId": "RID2692",
		"description": "medial compartment of thigh",
		"containedById": "RID2660",
		"leftId": "RID48163",
		"rightId": "RID48162",
		"synonyms": [
		  "compartimentum femoris adductorum",
		  "compartimentum femoris mediale",
		  "medial fascial compartment of thigh",
		  "compartimentum femoris mediale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45160"
		  }
		]
	  },
	  {
		"radlexId": "RID48162",
		"description": "medial compartment of right thigh",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2692",
		"leftId": "RID48163",
		"codes": [
		  {
			"system": "FMA",
			"code": "45161"
		  }
		]
	  },
	  {
		"radlexId": "RID48163",
		"description": "medial compartment of left thigh",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2692",
		"rightId": "RID48162",
		"codes": [
		  {
			"system": "FMA",
			"code": "45162"
		  }
		]
	  },
	  {
		"radlexId": "RID2931",
		"description": "anterior compartment of leg",
		"containedById": "RID2869",
		"leftId": "RID48165",
		"rightId": "RID48164",
		"synonyms": [
		  "compartimentum cruris extensorum",
		  "compartimentum cruris anterius",
		  "compartimentum cruris extensorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45163"
		  }
		]
	  },
	  {
		"radlexId": "RID48164",
		"description": "anterior compartment of right leg",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2931",
		"leftId": "RID48165",
		"codes": [
		  {
			"system": "FMA",
			"code": "45164"
		  }
		]
	  },
	  {
		"radlexId": "RID48165",
		"description": "anterior compartment of left leg",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2931",
		"rightId": "RID48164",
		"codes": [
		  {
			"system": "FMA",
			"code": "45165"
		  }
		]
	  },
	  {
		"radlexId": "RID2934",
		"description": "deep posterior compartment of leg",
		"containedById": "RID2869",
		"leftId": "RID2934_RID5824",
		"rightId": "RID2934_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "118517005"
		  }
		]
	  },
	  {
		"radlexId": "RID2934_RID5824",
		"description": "left deep posterior compartment of leg",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2934",
		"rightId": "RID2934_RID5825"
	  },
	  {
		"radlexId": "RID2934_RID5825",
		"description": "right deep posterior compartment of leg",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2934",
		"leftId": "RID2934_RID5824"
	  },
	  {
		"radlexId": "RID2933",
		"description": "superficial posterior compartment of leg",
		"containedById": "RID2869",
		"leftId": "RID2933_RID5824",
		"rightId": "RID2933_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "118518000"
		  }
		]
	  },
	  {
		"radlexId": "RID2933_RID5824",
		"description": "left superficial posterior compartment of leg",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2933",
		"rightId": "RID2933_RID5825"
	  },
	  {
		"radlexId": "RID2933_RID5825",
		"description": "right superficial posterior compartment of leg",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2933",
		"leftId": "RID2933_RID5824"
	  },
	  {
		"radlexId": "RID2932",
		"description": "lateral compartment of leg",
		"containedById": "RID2869",
		"leftId": "RID48176",
		"rightId": "RID48175",
		"synonyms": [
		  "compartimentum cruris peroneorum",
		  "lateral fascial compartment of leg",
		  "compartimentum cruris laterale",
		  "lateral fascial compartment of lower leg",
		  "compartimentum cruris fibularium",
		  "compartimentum cruris laterale, compartimentum cruris peroneorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45185"
		  },
		  {
			"system": "SNOMED",
			"code": "118519008"
		  }
		]
	  },
	  {
		"radlexId": "RID48175",
		"description": "lateral compartment of right leg",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2932",
		"leftId": "RID48176",
		"codes": [
		  {
			"system": "FMA",
			"code": "45186"
		  }
		]
	  },
	  {
		"radlexId": "RID48176",
		"description": "lateral compartment of left leg",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2932",
		"rightId": "RID48175",
		"codes": [
		  {
			"system": "FMA",
			"code": "45187"
		  }
		]
	  },
	  {
		"radlexId": "RID2640",
		"description": "hip joint",
		"containedById": "RID2639",
		"leftId": "RID2640_RID5824",
		"rightId": "RID2640_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "35178"
		  },
		  {
			"system": "SNOMED",
			"code": "24136001"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.411"
		  }
		]
	  },
	  {
		"radlexId": "RID2640_RID5824",
		"description": "left hip joint",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID2640",
		"rightId": "RID2640_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "362907004"
		  }
		]
	  },
	  {
		"radlexId": "RID2640_RID5825",
		"description": "right hip joint",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID2640",
		"leftId": "RID2640_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "362908009"
		  }
		]
	  },
	  {
		"radlexId": "RID2531",
		"description": "ilium",
		"containedById": "RID2639",
		"leftId": "RID2531_RID5824",
		"rightId": "RID2531_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "16589"
		  },
		  {
			"system": "SNOMED",
			"code": "22356005"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.825.434"
		  }
		]
	  },
	  {
		"radlexId": "RID2531_RID5824",
		"description": "left ilium",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID2531",
		"rightId": "RID2531_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773840006"
		  }
		]
	  },
	  {
		"radlexId": "RID2531_RID5825",
		"description": "right ilium",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID2531",
		"leftId": "RID2531_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773841005"
		  }
		]
	  },
	  {
		"radlexId": "RID2545",
		"description": "ischium",
		"containedById": "RID2639",
		"leftId": "RID2545_RID5824",
		"rightId": "RID2545_RID5825",
		"synonyms": [
		  "Ischium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16592"
		  },
		  {
			"system": "SNOMED",
			"code": "85710004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.825.548"
		  }
		]
	  },
	  {
		"radlexId": "RID2545_RID5824",
		"description": "left ischium",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID2545",
		"rightId": "RID2545_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773842003"
		  }
		]
	  },
	  {
		"radlexId": "RID2545_RID5825",
		"description": "right ischium",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID2545",
		"leftId": "RID2545_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773843008"
		  }
		]
	  },
	  {
		"radlexId": "RID2564",
		"description": "acetabulum",
		"containedById": "RID2640",
		"leftId": "RID2564_RID5824",
		"rightId": "RID2564_RID5825",
		"synonyms": [
		  "cotyloid cavity",
		  "acetabular part of hip bone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16579"
		  },
		  {
			"system": "SNOMED",
			"code": "37783008"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.825.108"
		  }
		]
	  },
	  {
		"radlexId": "RID2564_RID5824",
		"description": "left acetabulum",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2564",
		"rightId": "RID2564_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "719538003"
		  }
		]
	  },
	  {
		"radlexId": "RID2564_RID5825",
		"description": "right acetabulum",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2564",
		"leftId": "RID2564_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "719537008"
		  }
		]
	  },
	  {
		"radlexId": "RID2644",
		"description": "acetabular labrum",
		"containedById": "RID2640",
		"leftId": "RID2644_RID5824",
		"rightId": "RID2644_RID5825",
		"synonyms": [
		  "labrum of acetabulum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43521"
		  },
		  {
			"system": "SNOMED",
			"code": "182439007"
		  }
		]
	  },
	  {
		"radlexId": "RID2644_RID5824",
		"description": "left acetabular labrum",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2644",
		"rightId": "RID2644_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "1163050006"
		  }
		]
	  },
	  {
		"radlexId": "RID2644_RID5825",
		"description": "right acetabular labrum",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2644",
		"leftId": "RID2644_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "1163051005"
		  }
		]
	  },
	  {
		"radlexId": "RID2567",
		"description": "acetabular notch",
		"containedById": "RID2640",
		"leftId": "RID2567_RID5824",
		"rightId": "RID2567_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "16944"
		  },
		  {
			"system": "SNOMED",
			"code": "113220001"
		  }
		]
	  },
	  {
		"radlexId": "RID2567_RID5824",
		"description": "left acetabular notch",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2567",
		"rightId": "RID2567_RID5825"
	  },
	  {
		"radlexId": "RID2567_RID5825",
		"description": "right acetabular notch",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2567",
		"leftId": "RID2567_RID5824"
	  },
	  {
		"radlexId": "RID2662",
		"description": "femur",
		"containedById": "RID2660",
		"leftId": "RID49027",
		"rightId": "RID49026",
		"synonyms": [
		  "os femoris",
		  "thigh bone",
		  "Femur"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9611"
		  },
		  {
			"system": "SNOMED",
			"code": "71341001"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.650.247"
		  }
		]
	  },
	  {
		"radlexId": "RID49026",
		"description": "right femur",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2662",
		"leftId": "RID49027",
		"codes": [
		  {
			"system": "FMA",
			"code": "24474"
		  }
		]
	  },
	  {
		"radlexId": "RID49027",
		"description": "left femur",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2662",
		"rightId": "RID49026",
		"codes": [
		  {
			"system": "FMA",
			"code": "24475"
		  }
		]
	  },
	  {
		"radlexId": "RID2664",
		"description": "head of femur",
		"containedById": "RID2640",
		"leftId": "RID2664_RID5824",
		"rightId": "RID2664_RID5825",
		"partOfId": "RID2662",
		"synonyms": [
		  "femoral head",
		  "caput femoris",
		  "femoral caput"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32851"
		  },
		  {
			"system": "SNOMED",
			"code": "2812003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.650.247.343"
		  },
		  {
			"system": "UMLS",
			"code": "C0015813"
		  }
		]
	  },
	  {
		"radlexId": "RID2664_RID5824",
		"description": "left head of femur",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2664",
		"rightId": "RID2664_RID5825",
		"partOfId": "RID49027",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773966005"
		  }
		]
	  },
	  {
		"radlexId": "RID2664_RID5825",
		"description": "right head of femur",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2664",
		"leftId": "RID2664_RID5824",
		"partOfId": "RID49026",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773967001"
		  }
		]
	  },
	  {
		"radlexId": "RID2668",
		"description": "femoral neck",
		"containedById": "RID2640",
		"leftId": "RID2668_RID5824",
		"rightId": "RID2668_RID5825",
		"partOfId": "RID2662",
		"synonyms": [
		  "fem neck"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42385"
		  },
		  {
			"system": "SNOMED",
			"code": "29627003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.650.247.510"
		  }
		]
	  },
	  {
		"radlexId": "RID2668_RID5824",
		"description": "left femoral neck",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2668",
		"rightId": "RID2668_RID5825",
		"partOfId": "RID49027",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773709006"
		  }
		]
	  },
	  {
		"radlexId": "RID2668_RID5825",
		"description": "right femoral neck",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2668",
		"leftId": "RID2668_RID5824",
		"partOfId": "RID49026",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773710001"
		  }
		]
	  },
	  {
		"radlexId": "RID2652",
		"description": "pubofemoral ligament",
		"containedById": "RID2640",
		"leftId": "RID2652_RID5824",
		"rightId": "RID2652_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "43024"
		  },
		  {
			"system": "SNOMED",
			"code": "26788001"
		  }
		]
	  },
	  {
		"radlexId": "RID2652_RID5824",
		"description": "left pubofemoral ligament",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2652",
		"rightId": "RID2652_RID5825"
	  },
	  {
		"radlexId": "RID2652_RID5825",
		"description": "right pubofemoral ligament",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2652",
		"leftId": "RID2652_RID5824"
	  },
	  {
		"radlexId": "RID2650",
		"description": "iliofemoral ligament",
		"containedById": "RID2640",
		"leftId": "RID2650_RID5824",
		"rightId": "RID2650_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "42993"
		  },
		  {
			"system": "SNOMED",
			"code": "39691001"
		  }
		]
	  },
	  {
		"radlexId": "RID2650_RID5824",
		"description": "left iliofemoral ligament",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2650",
		"rightId": "RID2650_RID5825"
	  },
	  {
		"radlexId": "RID2650_RID5825",
		"description": "right iliofemoral ligament",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2650",
		"leftId": "RID2650_RID5824"
	  },
	  {
		"radlexId": "RID2651",
		"description": "ischiofemoral ligament",
		"containedById": "RID2640",
		"leftId": "RID2651_RID5824",
		"rightId": "RID2651_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "43027"
		  },
		  {
			"system": "SNOMED",
			"code": "28250008"
		  }
		]
	  },
	  {
		"radlexId": "RID2651_RID5824",
		"description": "left ischiofemoral ligament",
		"containedById": "RID2640_RID5824",
		"unsidedId": "RID2651",
		"rightId": "RID2651_RID5825"
	  },
	  {
		"radlexId": "RID2651_RID5825",
		"description": "right ischiofemoral ligament",
		"containedById": "RID2640_RID5825",
		"unsidedId": "RID2651",
		"leftId": "RID2651_RID5824"
	  },
	  {
		"radlexId": "RID2671",
		"description": "greater trochanter of femur",
		"containedById": "RID2660",
		"leftId": "RID39755",
		"rightId": "RID39754",
		"partOfId": "RID2662",
		"synonyms": [
		  "trochanter major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32852"
		  },
		  {
			"system": "SNOMED",
			"code": "30547004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.150"
		  }
		]
	  },
	  {
		"radlexId": "RID39754",
		"description": "greater trochanter of right femur",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2671",
		"leftId": "RID39755",
		"partOfId": "RID49026",
		"synonyms": [
		  "right greater trochanter"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "55013"
		  },
		  {
			"system": "SNOMED",
			"code": "764722006"
		  }
		]
	  },
	  {
		"radlexId": "RID39755",
		"description": "greater trochanter of left femur",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2671",
		"rightId": "RID39754",
		"partOfId": "RID49027",
		"synonyms": [
		  "left greater trochanter"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "55014"
		  },
		  {
			"system": "SNOMED",
			"code": "764721004"
		  }
		]
	  },
	  {
		"radlexId": "RID2673",
		"description": "lesser trochanter of femur",
		"containedById": "RID2660",
		"leftId": "RID39757",
		"rightId": "RID39756",
		"partOfId": "RID2662",
		"synonyms": [
		  "trochanter minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32853"
		  },
		  {
			"system": "SNOMED",
			"code": "55499008"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.150"
		  }
		]
	  },
	  {
		"radlexId": "RID39756",
		"description": "lesser trochanter of right femur",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2673",
		"leftId": "RID39757",
		"partOfId": "RID49026",
		"synonyms": [
		  "right lesser trochanter"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "55015"
		  },
		  {
			"system": "SNOMED",
			"code": "764548001"
		  }
		]
	  },
	  {
		"radlexId": "RID39757",
		"description": "lesser trochanter of left femur",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2673",
		"rightId": "RID39756",
		"partOfId": "RID49027",
		"synonyms": [
		  "left lesser trochanter"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "55016"
		  },
		  {
			"system": "SNOMED",
			"code": "764547006"
		  }
		]
	  },
	  {
		"radlexId": "RID41864",
		"description": "diaphysis of femur",
		"containedById": "RID2660",
		"leftId": "RID41866",
		"rightId": "RID41865",
		"synonyms": [
		  "corpus femoris",
		  "femoral diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32847"
		  },
		  {
			"system": "SNOMED",
			"code": "41111004"
		  }
		]
	  },
	  {
		"radlexId": "RID41865",
		"description": "diaphysis of right femur",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID41864",
		"leftId": "RID41866",
		"synonyms": [
		  "right femoral diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32848"
		  },
		  {
			"system": "SNOMED",
			"code": "758655002"
		  }
		]
	  },
	  {
		"radlexId": "RID41866",
		"description": "diaphysis of left femur",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID41864",
		"rightId": "RID41865",
		"synonyms": [
		  "left femoral diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32849"
		  },
		  {
			"system": "SNOMED",
			"code": "758654003"
		  }
		]
	  },
	  {
		"radlexId": "RID2683",
		"description": "medial epicondyle of femur",
		"containedById": "RID2743",
		"leftId": "RID49267",
		"rightId": "RID49266",
		"partOfId": "RID2662",
		"synonyms": [
		  "epicondylus medialis femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32864"
		  },
		  {
			"system": "SNOMED",
			"code": "71004006"
		  }
		]
	  },
	  {
		"radlexId": "RID49266",
		"description": "medial epicondyle of right femur",
		"containedById": "RID49359",
		"unsidedId": "RID2683",
		"leftId": "RID49267",
		"partOfId": "RID49026",
		"codes": [
		  {
			"system": "FMA",
			"code": "32865"
		  }
		]
	  },
	  {
		"radlexId": "RID49267",
		"description": "medial epicondyle of left femur",
		"containedById": "RID49360",
		"unsidedId": "RID2683",
		"rightId": "RID49266",
		"partOfId": "RID49027",
		"codes": [
		  {
			"system": "FMA",
			"code": "32866"
		  }
		]
	  },
	  {
		"radlexId": "RID2682",
		"description": "lateral epicondyle of femur",
		"containedById": "RID2743",
		"leftId": "RID49285",
		"rightId": "RID49284",
		"partOfId": "RID2662",
		"synonyms": [
		  "epicondylus lateralis femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32867"
		  },
		  {
			"system": "SNOMED",
			"code": "72264004"
		  }
		]
	  },
	  {
		"radlexId": "RID49284",
		"description": "lateral epicondyle of right femur",
		"containedById": "RID49359",
		"unsidedId": "RID2682",
		"leftId": "RID49285",
		"partOfId": "RID49026",
		"codes": [
		  {
			"system": "FMA",
			"code": "32868"
		  }
		]
	  },
	  {
		"radlexId": "RID49285",
		"description": "lateral epicondyle of left femur",
		"containedById": "RID49360",
		"unsidedId": "RID2682",
		"rightId": "RID49284",
		"partOfId": "RID49027",
		"codes": [
		  {
			"system": "FMA",
			"code": "32869"
		  }
		]
	  },
	  {
		"radlexId": "RID2688",
		"description": "medial condyle of femur",
		"containedById": "RID2743",
		"leftId": "RID39858",
		"rightId": "RID39857",
		"partOfId": "RID2662",
		"synonyms": [
		  "medial femoral condyle",
		  "condylus medialis femoris",
		  "condylus medialis femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32858"
		  },
		  {
			"system": "SNOMED",
			"code": "122474001"
		  }
		]
	  },
	  {
		"radlexId": "RID39857",
		"description": "medial condyle of right femur",
		"containedById": "RID49359",
		"unsidedId": "RID2688",
		"leftId": "RID39858",
		"partOfId": "RID49026",
		"synonyms": [
		  "right medial femoral condyle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32862"
		  },
		  {
			"system": "SNOMED",
			"code": "723032001"
		  }
		]
	  },
	  {
		"radlexId": "RID39858",
		"description": "medial condyle of left femur",
		"containedById": "RID49360",
		"unsidedId": "RID2688",
		"rightId": "RID39857",
		"partOfId": "RID49027",
		"synonyms": [
		  "left medial femoral condyle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32863"
		  },
		  {
			"system": "SNOMED",
			"code": "723031008"
		  }
		]
	  },
	  {
		"radlexId": "RID2686",
		"description": "lateral condyle of femur",
		"containedById": "RID2743",
		"leftId": "RID39860",
		"rightId": "RID39859",
		"partOfId": "RID2662",
		"synonyms": [
		  "condylus lateralis femoris",
		  "lateral femoral condyle",
		  "Laterale Femurkondyle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32859"
		  },
		  {
			"system": "SNOMED",
			"code": "122475000"
		  }
		]
	  },
	  {
		"radlexId": "RID39859",
		"description": "lateral condyle of right femur",
		"containedById": "RID49359",
		"unsidedId": "RID2686",
		"leftId": "RID39860",
		"partOfId": "RID49026",
		"synonyms": [
		  "right lateral femoral condyle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32860"
		  },
		  {
			"system": "SNOMED",
			"code": "737450007"
		  }
		]
	  },
	  {
		"radlexId": "RID39860",
		"description": "lateral condyle of left femur",
		"containedById": "RID49360",
		"unsidedId": "RID2686",
		"rightId": "RID39859",
		"partOfId": "RID49027",
		"synonyms": [
		  "left lateral femoral condyle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32861"
		  },
		  {
			"system": "SNOMED",
			"code": "737449007"
		  }
		]
	  },
	  {
		"radlexId": "RID2751",
		"description": "knee joint",
		"containedById": "RID2743",
		"leftId": "RID49393",
		"rightId": "RID49392",
		"synonyms": [
		  "articulatio genus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35175"
		  },
		  {
			"system": "SNOMED",
			"code": "49076000"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.475"
		  }
		]
	  },
	  {
		"radlexId": "RID49392",
		"description": "right knee joint",
		"containedById": "RID49359",
		"unsidedId": "RID2751",
		"leftId": "RID49393",
		"codes": [
		  {
			"system": "FMA",
			"code": "35176"
		  },
		  {
			"system": "SNOMED",
			"code": "735264009"
		  }
		]
	  },
	  {
		"radlexId": "RID49393",
		"description": "left knee joint",
		"containedById": "RID49360",
		"unsidedId": "RID2751",
		"rightId": "RID49392",
		"codes": [
		  {
			"system": "FMA",
			"code": "35177"
		  },
		  {
			"system": "SNOMED",
			"code": "735263003"
		  }
		]
	  },
	  {
		"radlexId": "RID2746",
		"description": "patella",
		"containedById": "RID2751",
		"leftId": "RID48531",
		"rightId": "RID48530",
		"codes": [
		  {
			"system": "FMA",
			"code": "24485"
		  },
		  {
			"system": "SNOMED",
			"code": "64234005"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.650.624"
		  },
		  {
			"system": "UMLS",
			"code": "C0030647"
		  }
		]
	  },
	  {
		"radlexId": "RID48530",
		"description": "right patella",
		"containedById": "RID49392",
		"unsidedId": "RID2746",
		"leftId": "RID48531",
		"codes": [
		  {
			"system": "FMA",
			"code": "24486"
		  },
		  {
			"system": "SNOMED",
			"code": "734210004"
		  }
		]
	  },
	  {
		"radlexId": "RID48531",
		"description": "left patella",
		"containedById": "RID49393",
		"unsidedId": "RID2746",
		"rightId": "RID48530",
		"codes": [
		  {
			"system": "FMA",
			"code": "24487"
		  },
		  {
			"system": "SNOMED",
			"code": "734208001"
		  }
		]
	  },
	  {
		"radlexId": "RID2848",
		"description": "quadriceps tendon",
		"containedById": "RID2751",
		"leftId": "RID48533",
		"rightId": "RID48532",
		"synonyms": [
		  "Retrieving data. Wait a few seconds and try to cut or copy again."
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46900"
		  },
		  {
			"system": "SNOMED",
			"code": "70567001"
		  }
		]
	  },
	  {
		"radlexId": "RID48532",
		"description": "right quadriceps tendon",
		"containedById": "RID49392",
		"unsidedId": "RID2848",
		"leftId": "RID48533",
		"synonyms": [
		  "common tendon of right quadriceps femoris l right common quadriceps tendon",
		  "right quadriceps femoris tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46901"
		  },
		  {
			"system": "SNOMED",
			"code": "737601005"
		  }
		]
	  },
	  {
		"radlexId": "RID48533",
		"description": "left quadriceps tendon",
		"containedById": "RID49393",
		"unsidedId": "RID2848",
		"rightId": "RID48532",
		"synonyms": [
		  "common tendon of left quadriceps femoris l left common quadriceps tendon",
		  "left quadriceps femoris tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46902"
		  },
		  {
			"system": "SNOMED",
			"code": "737602003"
		  }
		]
	  },
	  {
		"radlexId": "RID2851",
		"description": "biceps femoris tendon",
		"containedById": "RID2751",
		"leftId": "RID41144",
		"rightId": "RID41143",
		"synonyms": [
		  "tendon of biceps femoris muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45930"
		  },
		  {
			"system": "SNOMED",
			"code": "128508006"
		  },
		  {
			"system": "MESH",
			"code": "A02.880.307"
		  }
		]
	  },
	  {
		"radlexId": "RID41143",
		"description": "tendon of right biceps femoris",
		"containedById": "RID49392",
		"unsidedId": "RID2851",
		"leftId": "RID41144",
		"synonyms": [
		  "right biceps femoris tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45940"
		  },
		  {
			"system": "SNOMED",
			"code": "737453009"
		  }
		]
	  },
	  {
		"radlexId": "RID41144",
		"description": "tendon of left biceps femoris",
		"containedById": "RID49393",
		"unsidedId": "RID2851",
		"rightId": "RID41143",
		"synonyms": [
		  "left biceps femoris tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "45941"
		  },
		  {
			"system": "SNOMED",
			"code": "737454003"
		  }
		]
	  },
	  {
		"radlexId": "RID2849",
		"description": "patellar ligament",
		"containedById": "RID2751",
		"leftId": "RID48959",
		"rightId": "RID48958",
		"synonyms": [
		  "patellar tendon",
		  "ligamentum patellae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44581"
		  },
		  {
			"system": "SNOMED",
			"code": "18033002"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.475"
		  }
		]
	  },
	  {
		"radlexId": "RID48958",
		"description": "right patellar ligament",
		"containedById": "RID49392",
		"unsidedId": "RID2849",
		"leftId": "RID48959",
		"synonyms": [
		  "rIght patellar tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44585"
		  },
		  {
			"system": "SNOMED",
			"code": "764782009"
		  }
		]
	  },
	  {
		"radlexId": "RID48959",
		"description": "left patellar ligament",
		"containedById": "RID49393",
		"unsidedId": "RID2849",
		"rightId": "RID48958",
		"synonyms": [
		  "left patellar tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44586"
		  },
		  {
			"system": "SNOMED",
			"code": "764781002"
		  }
		]
	  },
	  {
		"radlexId": "RID2781",
		"description": "anterior cruciate ligament",
		"containedById": "RID2751",
		"leftId": "RID48972",
		"rightId": "RID48971",
		"synonyms": [
		  "ligamentum cruciatum anterius",
		  "ACL"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44614"
		  },
		  {
			"system": "SNOMED",
			"code": "895007"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.100"
		  },
		  {
			"system": "UMLS",
			"code": "C0078960"
		  }
		]
	  },
	  {
		"radlexId": "RID48971",
		"description": "right anterior cruciate ligament",
		"containedById": "RID49392",
		"unsidedId": "RID2781",
		"leftId": "RID48972",
		"codes": [
		  {
			"system": "FMA",
			"code": "44615"
		  },
		  {
			"system": "SNOMED",
			"code": "723271006"
		  }
		]
	  },
	  {
		"radlexId": "RID48972",
		"description": "left anterior cruciate ligament",
		"containedById": "RID49393",
		"unsidedId": "RID2781",
		"rightId": "RID48971",
		"codes": [
		  {
			"system": "FMA",
			"code": "44616"
		  },
		  {
			"system": "SNOMED",
			"code": "723270007"
		  }
		]
	  },
	  {
		"radlexId": "RID2784",
		"description": "posterior cruciate ligament",
		"containedById": "RID2751",
		"leftId": "RID48974",
		"rightId": "RID48973",
		"synonyms": [
		  "ligamentum cruciatum posterius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44617"
		  },
		  {
			"system": "SNOMED",
			"code": "16219000"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0080039"
		  }
		]
	  },
	  {
		"radlexId": "RID48973",
		"description": "right posterior cruciate ligament",
		"containedById": "RID49392",
		"unsidedId": "RID2784",
		"leftId": "RID48974",
		"codes": [
		  {
			"system": "FMA",
			"code": "44618"
		  },
		  {
			"system": "SNOMED",
			"code": "723275002"
		  }
		]
	  },
	  {
		"radlexId": "RID48974",
		"description": "left posterior cruciate ligament",
		"containedById": "RID49393",
		"unsidedId": "RID2784",
		"rightId": "RID48973",
		"codes": [
		  {
			"system": "FMA",
			"code": "44619"
		  },
		  {
			"system": "SNOMED",
			"code": "723274003"
		  }
		]
	  },
	  {
		"radlexId": "RID2797",
		"description": "lateral collateral ligament",
		"containedById": "RID2751",
		"leftId": "RID48951",
		"rightId": "RID48950",
		"synonyms": [
		  "lCl",
		  "lateral collateral ligament complex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "305654"
		  },
		  {
			"system": "SNOMED",
			"code": "39959004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.162.500"
		  }
		]
	  },
	  {
		"radlexId": "RID48950",
		"description": "right lateral collateral ligament",
		"containedById": "RID49392",
		"unsidedId": "RID2797",
		"leftId": "RID48951",
		"synonyms": [
		  "right LCL",
		  "right lateral collateral ligament complex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "305666"
		  },
		  {
			"system": "SNOMED",
			"code": "763874006"
		  }
		]
	  },
	  {
		"radlexId": "RID48951",
		"description": "left lateral collateral ligament",
		"containedById": "RID49393",
		"unsidedId": "RID2797",
		"rightId": "RID48950",
		"synonyms": [
		  "left lCl",
		  "left lateral collateral ligament complex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "305670"
		  },
		  {
			"system": "SNOMED",
			"code": "763873000"
		  }
		]
	  },
	  {
		"radlexId": "RID48947",
		"description": "medial collateral ligament",
		"containedById": "RID2751",
		"leftId": "RID48949",
		"rightId": "RID48948",
		"synonyms": [
		  "medial collateral ligament complex",
		  "mCL"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "305650"
		  },
		  {
			"system": "SNOMED",
			"code": "1627004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.162.600"
		  }
		]
	  },
	  {
		"radlexId": "RID48948",
		"description": "right medial collateral ligament",
		"containedById": "RID49392",
		"unsidedId": "RID48947",
		"leftId": "RID48949",
		"synonyms": [
		  "right MCL",
		  "right medial collateral ligament complex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "305658"
		  },
		  {
			"system": "SNOMED",
			"code": "723273009"
		  }
		]
	  },
	  {
		"radlexId": "RID48949",
		"description": "left medial collateral ligament",
		"containedById": "RID49393",
		"unsidedId": "RID48947",
		"rightId": "RID48948",
		"synonyms": [
		  "right MCL",
		  "left medial collateral ligament complex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "305662"
		  },
		  {
			"system": "SNOMED",
			"code": "723272004"
		  }
		]
	  },
	  {
		"radlexId": "RID2763",
		"description": "lateral meniscus",
		"containedById": "RID2751",
		"leftId": "RID49365",
		"rightId": "RID49364",
		"synonyms": [
		  "meniscus lateralis",
		  "meniscus lateralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44631"
		  },
		  {
			"system": "SNOMED",
			"code": "182449005"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.475.590"
		  }
		]
	  },
	  {
		"radlexId": "RID49364",
		"description": "right lateral meniscus",
		"containedById": "RID49392",
		"unsidedId": "RID2763",
		"leftId": "RID49365",
		"codes": [
		  {
			"system": "FMA",
			"code": "44632"
		  },
		  {
			"system": "SNOMED",
			"code": "722730007"
		  }
		]
	  },
	  {
		"radlexId": "RID49365",
		"description": "left lateral meniscus",
		"containedById": "RID49393",
		"unsidedId": "RID2763",
		"rightId": "RID49364",
		"codes": [
		  {
			"system": "FMA",
			"code": "44633"
		  },
		  {
			"system": "SNOMED",
			"code": "722729002"
		  }
		]
	  },
	  {
		"radlexId": "RID2772",
		"description": "medial meniscus",
		"containedById": "RID2751",
		"leftId": "RID49363",
		"rightId": "RID49362",
		"synonyms": [
		  "meniscus medialis",
		  "meniscus medialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44620"
		  },
		  {
			"system": "SNOMED",
			"code": "182446003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.475.590"
		  }
		]
	  },
	  {
		"radlexId": "RID49362",
		"description": "right medial meniscus",
		"containedById": "RID49392",
		"unsidedId": "RID2772",
		"leftId": "RID49363",
		"codes": [
		  {
			"system": "FMA",
			"code": "44622"
		  },
		  {
			"system": "SNOMED",
			"code": "723247004"
		  }
		]
	  },
	  {
		"radlexId": "RID49363",
		"description": "left medial meniscus",
		"containedById": "RID49393",
		"unsidedId": "RID2772",
		"rightId": "RID49362",
		"codes": [
		  {
			"system": "FMA",
			"code": "44623"
		  },
		  {
			"system": "SNOMED",
			"code": "723246008"
		  }
		]
	  },
	  {
		"radlexId": "RID2871",
		"description": "fibula",
		"containedById": "RID2869",
		"leftId": "RID49437",
		"rightId": "RID49436",
		"codes": [
		  {
			"system": "FMA",
			"code": "24479"
		  },
		  {
			"system": "SNOMED",
			"code": "87342007"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.650.321"
		  },
		  {
			"system": "UMLS",
			"code": "C0016068"
		  }
		]
	  },
	  {
		"radlexId": "RID49436",
		"description": "right fibula",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2871",
		"leftId": "RID49437",
		"codes": [
		  {
			"system": "FMA",
			"code": "24480"
		  },
		  {
			"system": "SNOMED",
			"code": "724230007"
		  }
		]
	  },
	  {
		"radlexId": "RID49437",
		"description": "left fibula",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2871",
		"rightId": "RID49436",
		"codes": [
		  {
			"system": "FMA",
			"code": "24481"
		  },
		  {
			"system": "SNOMED",
			"code": "724231006"
		  }
		]
	  },
	  {
		"radlexId": "RID2872",
		"description": "head of fibula",
		"containedById": "RID2751",
		"leftId": "RID2872_RID5824",
		"rightId": "RID2872_RID5825",
		"partOfId": "RID2871",
		"synonyms": [
		  "fibular head",
		  "proximal epiphysis of fibula",
		  "caput fibulae",
		  "caput fibulae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33729"
		  },
		  {
			"system": "SNOMED",
			"code": "22457002"
		  }
		]
	  },
	  {
		"radlexId": "RID2872_RID5824",
		"description": "left head of fibula",
		"containedById": "RID49393",
		"unsidedId": "RID2872",
		"rightId": "RID2872_RID5825",
		"partOfId": "RID49437"
	  },
	  {
		"radlexId": "RID2872_RID5825",
		"description": "right head of fibula",
		"containedById": "RID49392",
		"unsidedId": "RID2872",
		"leftId": "RID2872_RID5824",
		"partOfId": "RID49436"
	  },
	  {
		"radlexId": "RID2875",
		"description": "neck of fibula",
		"containedById": "RID2751",
		"leftId": "RID2875_RID5824",
		"rightId": "RID2875_RID5825",
		"partOfId": "RID2871",
		"codes": [
		  {
			"system": "FMA",
			"code": "35508"
		  },
		  {
			"system": "SNOMED",
			"code": "182091004"
		  }
		]
	  },
	  {
		"radlexId": "RID2875_RID5824",
		"description": "left neck of fibula",
		"containedById": "RID49393",
		"unsidedId": "RID2875",
		"rightId": "RID2875_RID5825",
		"partOfId": "RID49437"
	  },
	  {
		"radlexId": "RID2875_RID5825",
		"description": "right neck of fibula",
		"containedById": "RID49392",
		"unsidedId": "RID2875",
		"leftId": "RID2875_RID5824",
		"partOfId": "RID49436"
	  },
	  {
		"radlexId": "RID2885",
		"description": "tibia",
		"containedById": "RID2869",
		"leftId": "RID49379",
		"rightId": "RID49378",
		"codes": [
		  {
			"system": "FMA",
			"code": "24476"
		  },
		  {
			"system": "SNOMED",
			"code": "12611008"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.650.883"
		  },
		  {
			"system": "UMLS",
			"code": "C0040184"
		  }
		]
	  },
	  {
		"radlexId": "RID49378",
		"description": "right tibia",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2885",
		"leftId": "RID49379",
		"codes": [
		  {
			"system": "FMA",
			"code": "24477"
		  },
		  {
			"system": "SNOMED",
			"code": "719491009"
		  }
		]
	  },
	  {
		"radlexId": "RID49379",
		"description": "left tibia",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2885",
		"rightId": "RID49378",
		"codes": [
		  {
			"system": "FMA",
			"code": "24478"
		  },
		  {
			"system": "SNOMED",
			"code": "719492002"
		  }
		]
	  },
	  {
		"radlexId": "RID2892",
		"description": "medial tibial spine",
		"containedById": "RID2743",
		"leftId": "RID39649",
		"rightId": "RID39648",
		"partOfId": "RID2885",
		"synonyms": [
		  "medial tibial intercondylar tubercle",
		  "tuberculum intercondylare mediale",
		  "medial intercondylar tubercle of tibia",
		  "anterior tibial spine",
		  "medial tibial tubercle",
		  "Tuberculum intercondylare mediale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43764"
		  }
		]
	  },
	  {
		"radlexId": "RID39648",
		"description": "right medial tibial spine",
		"containedById": "RID49359",
		"unsidedId": "RID2892",
		"leftId": "RID39649",
		"partOfId": "RID49378",
		"synonyms": [
		  "medial intercondylar tubercle of right tibia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43766"
		  }
		]
	  },
	  {
		"radlexId": "RID39649",
		"description": "left medial tibial spine",
		"containedById": "RID49360",
		"unsidedId": "RID2892",
		"rightId": "RID39648",
		"partOfId": "RID49379",
		"synonyms": [
		  "medial intercondylar tubercle of left tibia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43767"
		  }
		]
	  },
	  {
		"radlexId": "RID2889",
		"description": "lateral tibial spine",
		"containedById": "RID2743",
		"leftId": "RID39647",
		"rightId": "RID39646",
		"partOfId": "RID2885",
		"synonyms": [
		  "lateral tibial intercondylar tubercle",
		  "lateral intercondylar tubercle of tibia",
		  "posterior tibial spine",
		  "lateral tibial tubercle",
		  "tuberculum intercondylare laterale",
		  "Tuberculum intercondylare laterale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43765"
		  }
		]
	  },
	  {
		"radlexId": "RID39646",
		"description": "right lateral tibial spine",
		"containedById": "RID49359",
		"unsidedId": "RID2889",
		"leftId": "RID39647",
		"partOfId": "RID49378",
		"synonyms": [
		  "lateral intercondylar tubercle of right tibia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43768"
		  }
		]
	  },
	  {
		"radlexId": "RID39647",
		"description": "left lateral tibial spine",
		"containedById": "RID49360",
		"unsidedId": "RID2889",
		"rightId": "RID39646",
		"partOfId": "RID49379",
		"synonyms": [
		  "lateral intercondylar tubercle of left tibia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43769"
		  }
		]
	  },
	  {
		"radlexId": "RID39626",
		"description": "medial condyle of tibia",
		"containedById": "RID2751",
		"leftId": "RID39628",
		"rightId": "RID39627",
		"partOfId": "RID2885",
		"synonyms": [
		  "condylus medialis tibiae l mediales Tibia plateau"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35445"
		  },
		  {
			"system": "SNOMED",
			"code": "32085003"
		  }
		]
	  },
	  {
		"radlexId": "RID39627",
		"description": "medial condyle of right tibia",
		"containedById": "RID49392",
		"unsidedId": "RID39626",
		"leftId": "RID39628",
		"partOfId": "RID49378",
		"codes": [
		  {
			"system": "FMA",
			"code": "35446"
		  },
		  {
			"system": "SNOMED",
			"code": "764559005"
		  }
		]
	  },
	  {
		"radlexId": "RID39628",
		"description": "medial condyle of left tibia",
		"containedById": "RID49393",
		"unsidedId": "RID39626",
		"rightId": "RID39627",
		"partOfId": "RID49379",
		"codes": [
		  {
			"system": "FMA",
			"code": "35447"
		  },
		  {
			"system": "SNOMED",
			"code": "764558002"
		  }
		]
	  },
	  {
		"radlexId": "RID39629",
		"description": "lateral condyle of tibia",
		"containedById": "RID2751",
		"leftId": "RID39631",
		"rightId": "RID39630",
		"partOfId": "RID2885",
		"synonyms": [
		  "condylus lateralis tibiae",
		  "laterales Tibia plateau"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35448"
		  },
		  {
			"system": "SNOMED",
			"code": "65548001"
		  }
		]
	  },
	  {
		"radlexId": "RID39630",
		"description": "lateral condyle of right tibia",
		"containedById": "RID49392",
		"unsidedId": "RID39629",
		"leftId": "RID39631",
		"partOfId": "RID49378",
		"codes": [
		  {
			"system": "FMA",
			"code": "35449"
		  },
		  {
			"system": "SNOMED",
			"code": "758659008"
		  }
		]
	  },
	  {
		"radlexId": "RID39631",
		"description": "lateral condyle of left tibia",
		"containedById": "RID49393",
		"unsidedId": "RID39629",
		"rightId": "RID39630",
		"partOfId": "RID49379",
		"codes": [
		  {
			"system": "FMA",
			"code": "35450"
		  },
		  {
			"system": "SNOMED",
			"code": "758658000"
		  }
		]
	  },
	  {
		"radlexId": "RID2900",
		"description": "diaphysis of tibia",
		"containedById": "RID2869",
		"leftId": "RID41870",
		"rightId": "RID41869",
		"synonyms": [
		  "tibial diaphysis",
		  "shaft of tibia",
		  "corpus tibiae",
		  "body of tibia",
		  "corpus tibiae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33125"
		  },
		  {
			"system": "SNOMED",
			"code": "52687003"
		  }
		]
	  },
	  {
		"radlexId": "RID41869",
		"description": "diaphysis of right tibia",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2900",
		"leftId": "RID41870",
		"synonyms": [
		  "right tibial diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33126"
		  },
		  {
			"system": "SNOMED",
			"code": "719497008"
		  }
		]
	  },
	  {
		"radlexId": "RID41870",
		"description": "diaphysis of left tibia",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2900",
		"rightId": "RID41869",
		"synonyms": [
		  "left tibial diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33127"
		  },
		  {
			"system": "SNOMED",
			"code": "719498003"
		  }
		]
	  },
	  {
		"radlexId": "RID2745",
		"description": "fabella",
		"containedById": "RID2743",
		"leftId": "RID49395",
		"rightId": "RID49394",
		"codes": [
		  {
			"system": "FMA",
			"code": "281591"
		  },
		  {
			"system": "SNOMED",
			"code": "51457003"
		  }
		]
	  },
	  {
		"radlexId": "RID49394",
		"description": "right fabella",
		"containedById": "RID49359",
		"unsidedId": "RID2745",
		"leftId": "RID49395",
		"codes": [
		  {
			"system": "FMA",
			"code": "310918"
		  }
		]
	  },
	  {
		"radlexId": "RID49395",
		"description": "left fabella",
		"containedById": "RID49360",
		"unsidedId": "RID2745",
		"rightId": "RID49394",
		"codes": [
		  {
			"system": "FMA",
			"code": "310920"
		  }
		]
	  },
	  {
		"radlexId": "RID2904",
		"description": "medial malleolus",
		"containedById": "RID3004",
		"leftId": "RID39872",
		"rightId": "RID39871",
		"partOfId": "RID2885",
		"synonyms": [
		  "malleolus medialis",
		  "Malleolus medialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35451"
		  },
		  {
			"system": "SNOMED",
			"code": "6417001"
		  }
		]
	  },
	  {
		"radlexId": "RID39871",
		"description": "right medial malleolus",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2904",
		"leftId": "RID39872",
		"partOfId": "RID49378",
		"codes": [
		  {
			"system": "FMA",
			"code": "35452"
		  },
		  {
			"system": "SNOMED",
			"code": "719549009"
		  }
		]
	  },
	  {
		"radlexId": "RID39872",
		"description": "left medial malleolus",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2904",
		"rightId": "RID39871",
		"partOfId": "RID49379",
		"codes": [
		  {
			"system": "FMA",
			"code": "35453"
		  },
		  {
			"system": "SNOMED",
			"code": "719550009"
		  }
		]
	  },
	  {
		"radlexId": "RID2883",
		"description": "lateral malleolus",
		"containedById": "RID3004",
		"leftId": "RID39865",
		"rightId": "RID39864",
		"partOfId": "RID2871",
		"synonyms": [
		  "malleolus lateralis",
		  "malleolus lateralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35502"
		  },
		  {
			"system": "SNOMED",
			"code": "113225006"
		  }
		]
	  },
	  {
		"radlexId": "RID39864",
		"description": "right lateral malleolus",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2883",
		"leftId": "RID39865",
		"partOfId": "RID49436",
		"codes": [
		  {
			"system": "FMA",
			"code": "35503"
		  },
		  {
			"system": "SNOMED",
			"code": "761947000"
		  }
		]
	  },
	  {
		"radlexId": "RID39865",
		"description": "left lateral malleolus",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2883",
		"rightId": "RID39864",
		"partOfId": "RID49437",
		"codes": [
		  {
			"system": "FMA",
			"code": "35504"
		  },
		  {
			"system": "SNOMED",
			"code": "761946009"
		  }
		]
	  },
	  {
		"radlexId": "RID3004",
		"description": "ankle joint",
		"containedById": "RID28545",
		"leftId": "RID3004_RID5824",
		"rightId": "RID3004_RID5825",
		"synonyms": [
		  "tibiotalar joint",
		  "ankle mortise joint",
		  "talocrural joint",
		  "ankle mortise"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35195"
		  },
		  {
			"system": "SNOMED",
			"code": "70258002"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.378.062"
		  },
		  {
			"system": "UMLS",
			"code": "C0003087"
		  }
		]
	  },
	  {
		"radlexId": "RID3004_RID5824",
		"description": "left ankle joint",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID3004",
		"rightId": "RID3004_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "720532008"
		  }
		]
	  },
	  {
		"radlexId": "RID3004_RID5825",
		"description": "right ankle joint",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID3004",
		"leftId": "RID3004_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "720533003"
		  }
		]
	  },
	  {
		"radlexId": "RID2959",
		"description": "calcaneus",
		"containedById": "RID3004",
		"leftId": "RID2959_RID5824",
		"rightId": "RID2959_RID5825",
		"synonyms": [
		  "heel bone",
		  "os calcis",
		  "Calcaneus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24496"
		  },
		  {
			"system": "SNOMED",
			"code": "80144004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.300.710.300"
		  },
		  {
			"system": "UMLS",
			"code": "C0006655"
		  }
		]
	  },
	  {
		"radlexId": "RID2959_RID5824",
		"description": "left calcaneus",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2959",
		"rightId": "RID2959_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "722735002"
		  }
		]
	  },
	  {
		"radlexId": "RID2959_RID5825",
		"description": "right calcaneus",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2959",
		"leftId": "RID2959_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "722736001"
		  }
		]
	  },
	  {
		"radlexId": "RID2962",
		"description": "calcaneal tuberosity",
		"containedById": "RID3004",
		"leftId": "RID2962_RID5824",
		"rightId": "RID2962_RID5825",
		"partOfId": "RID2959",
		"codes": [
		  {
			"system": "FMA",
			"code": "33640"
		  },
		  {
			"system": "SNOMED",
			"code": "82474009"
		  }
		]
	  },
	  {
		"radlexId": "RID2962_RID5824",
		"description": "left calcaneal tuberosity",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2962",
		"rightId": "RID2962_RID5825",
		"partOfId": "RID2959_RID5824"
	  },
	  {
		"radlexId": "RID2962_RID5825",
		"description": "right calcaneal tuberosity",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2962",
		"leftId": "RID2962_RID5824",
		"partOfId": "RID2959_RID5825"
	  },
	  {
		"radlexId": "RID2949",
		"description": "talus",
		"containedById": "RID3004",
		"leftId": "RID2949_RID5824",
		"rightId": "RID2949_RID5825",
		"synonyms": [
		  "ankle bone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9708"
		  },
		  {
			"system": "SNOMED",
			"code": "67453005"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.043.300.710.780"
		  },
		  {
			"system": "UMLS",
			"code": "C0039277"
		  }
		]
	  },
	  {
		"radlexId": "RID2949_RID5824",
		"description": "left talus",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2949",
		"rightId": "RID2949_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "737405005"
		  }
		]
	  },
	  {
		"radlexId": "RID2949_RID5825",
		"description": "right talus",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2949",
		"leftId": "RID2949_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "737406006"
		  }
		]
	  },
	  {
		"radlexId": "RID2957",
		"description": "sulcus tali",
		"containedById": "RID3004",
		"leftId": "RID2957_RID5824",
		"rightId": "RID2957_RID5825",
		"partOfId": "RID2949",
		"codes": [
		  {
			"system": "FMA",
			"code": "77235"
		  }
		]
	  },
	  {
		"radlexId": "RID2957_RID5824",
		"description": "left sulcus tali",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2957",
		"rightId": "RID2957_RID5825",
		"partOfId": "RID2949_RID5824"
	  },
	  {
		"radlexId": "RID2957_RID5825",
		"description": "right sulcus tali",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2957",
		"leftId": "RID2957_RID5824",
		"partOfId": "RID2949_RID5825"
	  },
	  {
		"radlexId": "RID2952",
		"description": "medial tubercle",
		"containedById": "RID3004",
		"leftId": "RID2952_RID5824",
		"rightId": "RID2952_RID5825",
		"partOfId": "RID2949",
		"synonyms": [
		  "medial tubercle of talus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33656"
		  }
		]
	  },
	  {
		"radlexId": "RID2952_RID5824",
		"description": "left medial tubercle",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2952",
		"rightId": "RID2952_RID5825",
		"partOfId": "RID2949_RID5824"
	  },
	  {
		"radlexId": "RID2952_RID5825",
		"description": "right medial tubercle",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2952",
		"leftId": "RID2952_RID5824",
		"partOfId": "RID2949_RID5825"
	  },
	  {
		"radlexId": "RID2976",
		"description": "tarsal navicular",
		"containedById": "RID3004",
		"leftId": "RID2976_RID5824",
		"rightId": "RID2976_RID5825",
		"synonyms": [
		  "navicular bone of foot"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24499"
		  },
		  {
			"system": "SNOMED",
			"code": "75772009"
		  }
		]
	  },
	  {
		"radlexId": "RID2976_RID5824",
		"description": "left tarsal navicular",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2976",
		"rightId": "RID2976_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "723633005"
		  }
		]
	  },
	  {
		"radlexId": "RID2976_RID5825",
		"description": "right tarsal navicular",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2976",
		"leftId": "RID2976_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "723550002"
		  }
		]
	  },
	  {
		"radlexId": "RID2973",
		"description": "cuboid",
		"containedById": "RID3004",
		"leftId": "RID2973_RID5824",
		"rightId": "RID2973_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "24527"
		  },
		  {
			"system": "SNOMED",
			"code": "81012005"
		  }
		]
	  },
	  {
		"radlexId": "RID2973_RID5824",
		"description": "left cuboid",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2973",
		"rightId": "RID2973_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764464007"
		  }
		]
	  },
	  {
		"radlexId": "RID2973_RID5825",
		"description": "right cuboid",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2973",
		"leftId": "RID2973_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764465008"
		  }
		]
	  },
	  {
		"radlexId": "RID2978",
		"description": "medial cuneiform",
		"containedById": "RID3004",
		"leftId": "RID2978_RID5824",
		"rightId": "RID2978_RID5825",
		"synonyms": [
		  "internal cuneiform",
		  "first cuneiform"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24518"
		  },
		  {
			"system": "SNOMED",
			"code": "2979003"
		  }
		]
	  },
	  {
		"radlexId": "RID2978_RID5824",
		"description": "left medial cuneiform",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2978",
		"rightId": "RID2978_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764752003"
		  }
		]
	  },
	  {
		"radlexId": "RID2978_RID5825",
		"description": "right medial cuneiform",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2978",
		"leftId": "RID2978_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764753008"
		  }
		]
	  },
	  {
		"radlexId": "RID2983",
		"description": "lateral cuneiform",
		"containedById": "RID3004",
		"leftId": "RID2983_RID5824",
		"rightId": "RID2983_RID5825",
		"synonyms": [
		  "external cuneiform",
		  "third cuneiform"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24520"
		  },
		  {
			"system": "SNOMED",
			"code": "67411009"
		  }
		]
	  },
	  {
		"radlexId": "RID2983_RID5824",
		"description": "left lateral cuneiform",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2983",
		"rightId": "RID2983_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764748003"
		  }
		]
	  },
	  {
		"radlexId": "RID2983_RID5825",
		"description": "right lateral cuneiform",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2983",
		"leftId": "RID2983_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764749006"
		  }
		]
	  },
	  {
		"radlexId": "RID2981",
		"description": "intermediate cuneiform",
		"containedById": "RID3004",
		"leftId": "RID2981_RID5824",
		"rightId": "RID2981_RID5825",
		"synonyms": [
		  "second cuneiform"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24519"
		  },
		  {
			"system": "SNOMED",
			"code": "19193007"
		  }
		]
	  },
	  {
		"radlexId": "RID2981_RID5824",
		"description": "left intermediate cuneiform",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID2981",
		"rightId": "RID2981_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764556003"
		  }
		]
	  },
	  {
		"radlexId": "RID2981_RID5825",
		"description": "right intermediate cuneiform",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID2981",
		"leftId": "RID2981_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764557007"
		  }
		]
	  },
	  {
		"radlexId": "RID3184",
		"description": "Achilles tendon",
		"containedById": "RID3004",
		"leftId": "RID3184_RID5824",
		"rightId": "RID3184_RID5825",
		"synonyms": [
		  "tendo calcaneus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51061"
		  },
		  {
			"system": "SNOMED",
			"code": "61352006"
		  },
		  {
			"system": "MESH",
			"code": "A02.880.176"
		  }
		]
	  },
	  {
		"radlexId": "RID3184_RID5824",
		"description": "left Achilles tendon",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3184",
		"rightId": "RID3184_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "721064000"
		  }
		]
	  },
	  {
		"radlexId": "RID3184_RID5825",
		"description": "right Achilles tendon",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3184",
		"leftId": "RID3184_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "721063006"
		  }
		]
	  },
	  {
		"radlexId": "RID3055",
		"description": "calcaneocuboid joint",
		"containedById": "RID3004",
		"leftId": "RID3055_RID5824",
		"rightId": "RID3055_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "35207"
		  },
		  {
			"system": "SNOMED",
			"code": "75069009"
		  }
		]
	  },
	  {
		"radlexId": "RID3055_RID5824",
		"description": "left calcaneocuboid joint",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3055",
		"rightId": "RID3055_RID5825"
	  },
	  {
		"radlexId": "RID3055_RID5825",
		"description": "right calcaneocuboid joint",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3055",
		"leftId": "RID3055_RID5824"
	  },
	  {
		"radlexId": "RID41191",
		"description": "tendon of extensor digitorum longus to second toe",
		"containedById": "RID28545",
		"leftId": "RID41193",
		"rightId": "RID41192",
		"partOfId": "RID2913",
		"codes": [
		  {
			"system": "FMA",
			"code": "49390"
		  },
		  {
			"system": "SNOMED",
			"code": "1052288007"
		  }
		]
	  },
	  {
		"radlexId": "RID41192",
		"description": "tendon of right extensor digitorum longus to right second toe",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41191",
		"leftId": "RID41193",
		"partOfId": "RID48461",
		"codes": [
		  {
			"system": "FMA",
			"code": "49394"
		  }
		]
	  },
	  {
		"radlexId": "RID41193",
		"description": "tendon of left extensor digitorum longus to left second toe",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41191",
		"rightId": "RID41192",
		"partOfId": "RID48462",
		"codes": [
		  {
			"system": "FMA",
			"code": "49395"
		  }
		]
	  },
	  {
		"radlexId": "RID41194",
		"description": "tendon of extensor digitorum longus to third toe",
		"containedById": "RID28545",
		"leftId": "RID41196",
		"rightId": "RID41195",
		"partOfId": "RID2913",
		"synonyms": [
		  "tendon of extensor digitorum longus to middle toe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49391"
		  },
		  {
			"system": "SNOMED",
			"code": "1052289004"
		  }
		]
	  },
	  {
		"radlexId": "RID41195",
		"description": "tendon of right extensor digitorum longus to right third toe",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41194",
		"leftId": "RID41196",
		"partOfId": "RID48461",
		"synonyms": [
		  "tendon of right extensor digitorum longus to right middle toe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49396"
		  }
		]
	  },
	  {
		"radlexId": "RID41196",
		"description": "tendon of left extensor digitorum longus to left third toe",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41194",
		"rightId": "RID41195",
		"partOfId": "RID48462",
		"synonyms": [
		  "tendon of left extensor digitorum longus to left middle toe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49397"
		  }
		]
	  },
	  {
		"radlexId": "RID41197",
		"description": "tendon of extensor digitorum longus to fourth toe",
		"containedById": "RID28545",
		"leftId": "RID41199",
		"rightId": "RID41198",
		"partOfId": "RID2913",
		"codes": [
		  {
			"system": "FMA",
			"code": "49392"
		  },
		  {
			"system": "SNOMED",
			"code": "1052290008"
		  }
		]
	  },
	  {
		"radlexId": "RID41198",
		"description": "tendon of right extensor digitorum longus to right fourth toe",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41197",
		"leftId": "RID41199",
		"partOfId": "RID48461",
		"codes": [
		  {
			"system": "FMA",
			"code": "49398"
		  }
		]
	  },
	  {
		"radlexId": "RID41199",
		"description": "tendon of left extensor digitorum longus to left fourth toe",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41197",
		"rightId": "RID41198",
		"partOfId": "RID48462",
		"codes": [
		  {
			"system": "FMA",
			"code": "49399"
		  }
		]
	  },
	  {
		"radlexId": "RID41200",
		"description": "tendon of extensor digitorum longus to fifth toe",
		"containedById": "RID28545",
		"leftId": "RID41202",
		"rightId": "RID41201",
		"partOfId": "RID2913",
		"synonyms": [
		  "tendon of extensor digitorum longus to little toe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49393"
		  },
		  {
			"system": "SNOMED",
			"code": "1052292000"
		  }
		]
	  },
	  {
		"radlexId": "RID41201",
		"description": "tendon of right extensor digitorum longus to right fifth toe",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41200",
		"leftId": "RID41202",
		"partOfId": "RID48461",
		"synonyms": [
		  "tendon of right extensor digitorum longus to right little toe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49400"
		  }
		]
	  },
	  {
		"radlexId": "RID41202",
		"description": "tendon of left extensor digitorum longus to left fifth toe",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41200",
		"rightId": "RID41201",
		"partOfId": "RID48462",
		"synonyms": [
		  "tendon of right extensor digitorum longus to left little toe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49401"
		  }
		]
	  },
	  {
		"radlexId": "RID41203",
		"description": "peroneus tertius tendon",
		"containedById": "RID28545",
		"leftId": "RID41205",
		"rightId": "RID41204",
		"partOfId": "RID2915",
		"synonyms": [
		  "tendon of fibularis tertius",
		  "tendon of fibularis tertius muscle l fibularis tertius tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47095"
		  },
		  {
			"system": "SNOMED",
			"code": "181720003"
		  }
		]
	  },
	  {
		"radlexId": "RID41204",
		"description": "right peroneus tertius tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41203",
		"leftId": "RID41205",
		"partOfId": "RID48463",
		"synonyms": [
		  "tendon of right fibularis tertius l right fibularis tertius tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47096"
		  }
		]
	  },
	  {
		"radlexId": "RID41205",
		"description": "left peroneus tertius tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41203",
		"rightId": "RID41204",
		"partOfId": "RID48464",
		"synonyms": [
		  "tendon of left fibularis tertius l left fibularis tertius tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47097"
		  }
		]
	  },
	  {
		"radlexId": "RID3188",
		"description": "extensor hallucis longus tendon",
		"containedById": "RID28545",
		"leftId": "RID41187",
		"rightId": "RID41186",
		"partOfId": "RID2914",
		"synonyms": [
		  "tendon of extensor hallucis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47065"
		  },
		  {
			"system": "SNOMED",
			"code": "86539008"
		  }
		]
	  },
	  {
		"radlexId": "RID41186",
		"description": "right extensor hallucis longus tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID3188",
		"leftId": "RID41187",
		"partOfId": "RID48458",
		"synonyms": [
		  "tendon of right extensor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47066"
		  }
		]
	  },
	  {
		"radlexId": "RID41187",
		"description": "left extensor hallucis longus tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID3188",
		"rightId": "RID41186",
		"partOfId": "RID48459",
		"synonyms": [
		  "tendon of left extensor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47067"
		  }
		]
	  },
	  {
		"radlexId": "RID41175",
		"description": "tibialis anterior tendon",
		"containedById": "RID28545",
		"leftId": "RID41177",
		"rightId": "RID41176",
		"partOfId": "RID2912",
		"synonyms": [
		  "anterior tibial muscle tendon l tendon of tibialis anterior l tendon of tibialis anterior muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47050"
		  },
		  {
			"system": "SNOMED",
			"code": "49738002"
		  }
		]
	  },
	  {
		"radlexId": "RID41176",
		"description": "right tibialis anterior tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41175",
		"leftId": "RID41177",
		"partOfId": "RID48456",
		"synonyms": [
		  "tendon of right tibialis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47051"
		  }
		]
	  },
	  {
		"radlexId": "RID41177",
		"description": "left tibialis anterior tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41175",
		"rightId": "RID41176",
		"partOfId": "RID48457",
		"synonyms": [
		  "tendon of left tibialis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47052"
		  }
		]
	  },
	  {
		"radlexId": "RID3194",
		"description": "tibialis posterior tendon",
		"containedById": "RID28545",
		"leftId": "RID41179",
		"rightId": "RID41178",
		"partOfId": "RID2927",
		"synonyms": [
		  "tendon of tibialis posterior muscle",
		  "tendon of tibialis posterior",
		  "posterior tibial tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46002"
		  },
		  {
			"system": "SNOMED",
			"code": "63149002"
		  }
		]
	  },
	  {
		"radlexId": "RID41178",
		"description": "right tibialis posterior tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID3194",
		"leftId": "RID41179",
		"partOfId": "RID48480",
		"synonyms": [
		  "tendon of right tibialis posterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46003"
		  },
		  {
			"system": "SNOMED",
			"code": "720625008"
		  }
		]
	  },
	  {
		"radlexId": "RID41179",
		"description": "left tibialis posterior tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID3194",
		"rightId": "RID41178",
		"partOfId": "RID48481",
		"synonyms": [
		  "tendon of left tibialis posterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46004"
		  },
		  {
			"system": "SNOMED",
			"code": "720472001"
		  }
		]
	  },
	  {
		"radlexId": "RID3192",
		"description": "flexor digitorum longus tendon",
		"containedById": "RID28545",
		"leftId": "RID41228",
		"rightId": "RID41227",
		"partOfId": "RID2929",
		"synonyms": [
		  "tendon of flexor digitorum longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51083"
		  },
		  {
			"system": "SNOMED",
			"code": "15243009"
		  }
		]
	  },
	  {
		"radlexId": "RID41227",
		"description": "right flexor digitorum longus tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID3192",
		"leftId": "RID41228",
		"partOfId": "RID48478",
		"synonyms": [
		  "tendon of right flexor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51084"
		  }
		]
	  },
	  {
		"radlexId": "RID41228",
		"description": "left flexor digitorum longus tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID3192",
		"rightId": "RID41227",
		"partOfId": "RID48479",
		"synonyms": [
		  "tendon of left flexor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51085"
		  }
		]
	  },
	  {
		"radlexId": "RID3193",
		"description": "flexor hallucis longus tendon",
		"containedById": "RID28545",
		"leftId": "RID41226",
		"rightId": "RID41225",
		"partOfId": "RID2928",
		"synonyms": [
		  "tendon of flexor hallucis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47200"
		  },
		  {
			"system": "SNOMED",
			"code": "89110001"
		  }
		]
	  },
	  {
		"radlexId": "RID41225",
		"description": "right flexor hallucis longus tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID3193",
		"leftId": "RID41226",
		"partOfId": "RID48476",
		"synonyms": [
		  "tendon of right flexor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47201"
		  },
		  {
			"system": "SNOMED",
			"code": "778057007"
		  }
		]
	  },
	  {
		"radlexId": "RID41226",
		"description": "left flexor hallucis longus tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID3193",
		"rightId": "RID41225",
		"partOfId": "RID48477",
		"synonyms": [
		  "tendon of left flexor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47202"
		  },
		  {
			"system": "SNOMED",
			"code": "778056003"
		  }
		]
	  },
	  {
		"radlexId": "RID3197",
		"description": "peroneus brevis tendon",
		"containedById": "RID28545",
		"leftId": "RID41210",
		"rightId": "RID41209",
		"partOfId": "RID2917",
		"synonyms": [
		  "fibularis brevis tendon",
		  "tendon of fibularis brevis muscle l tendon of peroneus brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47125"
		  },
		  {
			"system": "SNOMED",
			"code": "181722006"
		  }
		]
	  },
	  {
		"radlexId": "RID41209",
		"description": "right peroneus brevis tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID3197",
		"leftId": "RID41210",
		"partOfId": "RID48485",
		"synonyms": [
		  "tendon of left fibularis brevis l right fibularis brevis tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47126"
		  }
		]
	  },
	  {
		"radlexId": "RID41210",
		"description": "left peroneus brevis tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID3197",
		"rightId": "RID41209",
		"partOfId": "RID48486",
		"synonyms": [
		  "tendon of right fibularis brevis l left fibularis brevis tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47127"
		  }
		]
	  },
	  {
		"radlexId": "RID41206",
		"description": "peroneus longus tendon",
		"containedById": "RID28545",
		"leftId": "RID41208",
		"rightId": "RID41207",
		"partOfId": "RID2918",
		"synonyms": [
		  "fibularis longus tendon",
		  "tendon of fibularis longus  muscle l tendon of peroneus longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47110"
		  },
		  {
			"system": "SNOMED",
			"code": "91322007"
		  }
		]
	  },
	  {
		"radlexId": "RID41207",
		"description": "right peroneus longus tendon",
		"containedById": "RID28545_RID5825",
		"unsidedId": "RID41206",
		"leftId": "RID41208",
		"partOfId": "RID48483",
		"synonyms": [
		  "tendon of left fibularis longus l right fibularis longus tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47111"
		  }
		]
	  },
	  {
		"radlexId": "RID41208",
		"description": "left peroneus longus tendon",
		"containedById": "RID28545_RID5824",
		"unsidedId": "RID41206",
		"rightId": "RID41207",
		"partOfId": "RID48484",
		"synonyms": [
		  "tendon of right fibularis longus l left fibularis longus tendon"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "47112"
		  }
		]
	  },
	  {
		"radlexId": "RID38808",
		"description": "anterior tibiofibular ligament",
		"containedById": "RID3004",
		"leftId": "RID38808_RID5824",
		"rightId": "RID38808_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "76852"
		  },
		  {
			"system": "SNOMED",
			"code": "33718005"
		  }
		]
	  },
	  {
		"radlexId": "RID38808_RID5824",
		"description": "left anterior tibiofibular ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID38808",
		"rightId": "RID38808_RID5825"
	  },
	  {
		"radlexId": "RID38808_RID5825",
		"description": "right anterior tibiofibular ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID38808",
		"leftId": "RID38808_RID5824"
	  },
	  {
		"radlexId": "RID38809",
		"description": "posterior tibiofibular ligament",
		"containedById": "RID3004",
		"leftId": "RID38809_RID5824",
		"rightId": "RID38809_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "76853"
		  },
		  {
			"system": "SNOMED",
			"code": "41631004"
		  }
		]
	  },
	  {
		"radlexId": "RID38809_RID5824",
		"description": "left posterior tibiofibular ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID38809",
		"rightId": "RID38809_RID5825"
	  },
	  {
		"radlexId": "RID38809_RID5825",
		"description": "right posterior tibiofibular ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID38809",
		"leftId": "RID38809_RID5824"
	  },
	  {
		"radlexId": "RID3022",
		"description": "anterior talofibular ligament",
		"containedById": "RID3004",
		"leftId": "RID3022_RID5824",
		"rightId": "RID3022_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "44083"
		  },
		  {
			"system": "SNOMED",
			"code": "14719001"
		  }
		]
	  },
	  {
		"radlexId": "RID3022_RID5824",
		"description": "left anterior talofibular ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3022",
		"rightId": "RID3022_RID5825"
	  },
	  {
		"radlexId": "RID3022_RID5825",
		"description": "right anterior talofibular ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3022",
		"leftId": "RID3022_RID5824"
	  },
	  {
		"radlexId": "RID3024",
		"description": "posterior talofibular ligament",
		"containedById": "RID3004",
		"leftId": "RID3024_RID5824",
		"rightId": "RID3024_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "44084"
		  },
		  {
			"system": "SNOMED",
			"code": "30528002"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.162.500"
		  }
		]
	  },
	  {
		"radlexId": "RID3024_RID5824",
		"description": "left posterior talofibular ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3024",
		"rightId": "RID3024_RID5825"
	  },
	  {
		"radlexId": "RID3024_RID5825",
		"description": "right posterior talofibular ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3024",
		"leftId": "RID3024_RID5824"
	  },
	  {
		"radlexId": "RID3015",
		"description": "anterior tibiotalar ligament",
		"containedById": "RID3004",
		"leftId": "RID3015_RID5824",
		"rightId": "RID3015_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "70239006"
		  }
		]
	  },
	  {
		"radlexId": "RID3015_RID5824",
		"description": "left anterior tibiotalar ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3015",
		"rightId": "RID3015_RID5825"
	  },
	  {
		"radlexId": "RID3015_RID5825",
		"description": "right anterior tibiotalar ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3015",
		"leftId": "RID3015_RID5824"
	  },
	  {
		"radlexId": "RID3016",
		"description": "posterior tibiotalar ligament",
		"containedById": "RID3004",
		"leftId": "RID3016_RID5824",
		"rightId": "RID3016_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "65901007"
		  }
		]
	  },
	  {
		"radlexId": "RID3016_RID5824",
		"description": "left posterior tibiotalar ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3016",
		"rightId": "RID3016_RID5825"
	  },
	  {
		"radlexId": "RID3016_RID5825",
		"description": "right posterior tibiotalar ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3016",
		"leftId": "RID3016_RID5824"
	  },
	  {
		"radlexId": "RID3020",
		"description": "tibionavicular ligament",
		"containedById": "RID3004",
		"leftId": "RID3020_RID5824",
		"rightId": "RID3020_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "13318003"
		  }
		]
	  },
	  {
		"radlexId": "RID3020_RID5824",
		"description": "left tibionavicular ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3020",
		"rightId": "RID3020_RID5825"
	  },
	  {
		"radlexId": "RID3020_RID5825",
		"description": "right tibionavicular ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3020",
		"leftId": "RID3020_RID5824"
	  },
	  {
		"radlexId": "RID3018",
		"description": "tibiocalcaneal ligament",
		"containedById": "RID3004",
		"leftId": "RID3018_RID5824",
		"rightId": "RID3018_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "34542001"
		  }
		]
	  },
	  {
		"radlexId": "RID3018_RID5824",
		"description": "left tibiocalcaneal ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3018",
		"rightId": "RID3018_RID5825"
	  },
	  {
		"radlexId": "RID3018_RID5825",
		"description": "right tibiocalcaneal ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3018",
		"leftId": "RID3018_RID5824"
	  },
	  {
		"radlexId": "RID3023",
		"description": "calcaneofibular ligament",
		"containedById": "RID3004",
		"leftId": "RID3023_RID5824",
		"rightId": "RID3023_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "44089"
		  },
		  {
			"system": "SNOMED",
			"code": "18206006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.512.162.500"
		  }
		]
	  },
	  {
		"radlexId": "RID3023_RID5824",
		"description": "left calcaneofibular ligament",
		"containedById": "RID3004_RID5824",
		"unsidedId": "RID3023",
		"rightId": "RID3023_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "1163155004"
		  }
		]
	  },
	  {
		"radlexId": "RID3023_RID5825",
		"description": "right calcaneofibular ligament",
		"containedById": "RID3004_RID5825",
		"unsidedId": "RID3023",
		"leftId": "RID3023_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "1163156003"
		  }
		]
	  },
	  {
		"radlexId": "RID3129_RID2993",
		"description": "metatarsophalangeal joint of great toe",
		"containedById": "RID28829",
		"leftId": "RID3129_RID2993_RID5824",
		"rightId": "RID3129_RID2993_RID5825",
		"synonyms": [
		  "first MTP l 1st MTP"
		]
	  },
	  {
		"radlexId": "RID3129_RID2993_RID5824",
		"description": "left metatarsophalangeal joint of great toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3129_RID2993",
		"rightId": "RID3129_RID2993_RID5825"
	  },
	  {
		"radlexId": "RID3129_RID2993_RID5825",
		"description": "right metatarsophalangeal joint of great toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3129_RID2993",
		"leftId": "RID3129_RID2993_RID5824"
	  },
	  {
		"radlexId": "RID3129_RID2996",
		"description": "metatarsophalangeal joint of second toe",
		"containedById": "RID28829",
		"leftId": "RID3129_RID2996_RID5824",
		"rightId": "RID3129_RID2996_RID5825",
		"synonyms": [
		  "second MTP l 2nd MTP"
		]
	  },
	  {
		"radlexId": "RID3129_RID2996_RID5824",
		"description": "left metatarsophalangeal joint of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3129_RID2996",
		"rightId": "RID3129_RID2996_RID5825"
	  },
	  {
		"radlexId": "RID3129_RID2996_RID5825",
		"description": "right metatarsophalangeal joint of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3129_RID2996",
		"leftId": "RID3129_RID2996_RID5824"
	  },
	  {
		"radlexId": "RID3129_RID2997",
		"description": "metatarsophalangeal joint of third toe",
		"containedById": "RID28829",
		"leftId": "RID3129_RID2997_RID5824",
		"rightId": "RID3129_RID2997_RID5825",
		"synonyms": [
		  "third MTP l 3rd MTP"
		]
	  },
	  {
		"radlexId": "RID3129_RID2997_RID5824",
		"description": "left metatarsophalangeal joint of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3129_RID2997",
		"rightId": "RID3129_RID2997_RID5825"
	  },
	  {
		"radlexId": "RID3129_RID2997_RID5825",
		"description": "right metatarsophalangeal joint of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3129_RID2997",
		"leftId": "RID3129_RID2997_RID5824"
	  },
	  {
		"radlexId": "RID3129_RID2998",
		"description": "metatarsophalangeal joint of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID3129_RID2998_RID5824",
		"rightId": "RID3129_RID2998_RID5825",
		"synonyms": [
		  "fourth MTP l 4th MTP"
		]
	  },
	  {
		"radlexId": "RID3129_RID2998_RID5824",
		"description": "left metatarsophalangeal joint of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3129_RID2998",
		"rightId": "RID3129_RID2998_RID5825"
	  },
	  {
		"radlexId": "RID3129_RID2998_RID5825",
		"description": "right metatarsophalangeal joint of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3129_RID2998",
		"leftId": "RID3129_RID2998_RID5824"
	  },
	  {
		"radlexId": "RID3129_RID2999",
		"description": "metatarsophalangeal joint of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID3129_RID2999_RID5824",
		"rightId": "RID3129_RID2999_RID5825",
		"synonyms": [
		  "fifth MTP l 5th MTP"
		]
	  },
	  {
		"radlexId": "RID3129_RID2999_RID5824",
		"description": "left metatarsophalangeal joint of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3129_RID2999",
		"rightId": "RID3129_RID2999_RID5825"
	  },
	  {
		"radlexId": "RID3129_RID2999_RID5825",
		"description": "right metatarsophalangeal joint of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3129_RID2999",
		"leftId": "RID3129_RID2999_RID5824"
	  },
	  {
		"radlexId": "RID34530_RID2993",
		"description": "interphalangeal joint of great toe",
		"containedById": "RID28829",
		"leftId": "RID34530_RID2993_RID5824",
		"rightId": "RID34530_RID2993_RID5825",
		"synonyms": [
		  "1st toe IP joint l IP joint of great toe"
		]
	  },
	  {
		"radlexId": "RID34530_RID2993_RID5824",
		"description": "left interphalangeal joint of great toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID34530_RID2993",
		"rightId": "RID34530_RID2993_RID5825"
	  },
	  {
		"radlexId": "RID34530_RID2993_RID5825",
		"description": "right interphalangeal joint of great toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID34530_RID2993",
		"leftId": "RID34530_RID2993_RID5824"
	  },
	  {
		"radlexId": "RID3139_RID2996",
		"description": "proximal interphalangeal joint of second toe",
		"containedById": "RID28829",
		"leftId": "RID3139_RID2996_RID5824",
		"rightId": "RID3139_RID2996_RID5825",
		"synonyms": [
		  "2nd toe PIP joint l PIP joint of second toe"
		]
	  },
	  {
		"radlexId": "RID3139_RID2996_RID5824",
		"description": "left proximal interphalangeal joint of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3139_RID2996",
		"rightId": "RID3139_RID2996_RID5825"
	  },
	  {
		"radlexId": "RID3139_RID2996_RID5825",
		"description": "right proximal interphalangeal joint of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3139_RID2996",
		"leftId": "RID3139_RID2996_RID5824"
	  },
	  {
		"radlexId": "RID3139_RID2997",
		"description": "proximal interphalangeal joint of third toe",
		"containedById": "RID28829",
		"leftId": "RID3139_RID2997_RID5824",
		"rightId": "RID3139_RID2997_RID5825",
		"synonyms": [
		  "3rd toe PIP joint l PIP joint of third toe"
		]
	  },
	  {
		"radlexId": "RID3139_RID2997_RID5824",
		"description": "left proximal interphalangeal joint of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3139_RID2997",
		"rightId": "RID3139_RID2997_RID5825"
	  },
	  {
		"radlexId": "RID3139_RID2997_RID5825",
		"description": "right proximal interphalangeal joint of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3139_RID2997",
		"leftId": "RID3139_RID2997_RID5824"
	  },
	  {
		"radlexId": "RID3139_RID2998",
		"description": "proximal interphalangeal joint of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID3139_RID2998_RID5824",
		"rightId": "RID3139_RID2998_RID5825",
		"synonyms": [
		  "4th toe PIP joint l PIP joint of fourth toe"
		]
	  },
	  {
		"radlexId": "RID3139_RID2998_RID5824",
		"description": "left proximal interphalangeal joint of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3139_RID2998",
		"rightId": "RID3139_RID2998_RID5825"
	  },
	  {
		"radlexId": "RID3139_RID2998_RID5825",
		"description": "right proximal interphalangeal joint of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3139_RID2998",
		"leftId": "RID3139_RID2998_RID5824"
	  },
	  {
		"radlexId": "RID3139_RID2999",
		"description": "proximal interphalangeal joint of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID3139_RID2999_RID5824",
		"rightId": "RID3139_RID2999_RID5825",
		"synonyms": [
		  "5th toe PIP joint l PIP joint of fifth toe"
		]
	  },
	  {
		"radlexId": "RID3139_RID2999_RID5824",
		"description": "left proximal interphalangeal joint of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3139_RID2999",
		"rightId": "RID3139_RID2999_RID5825"
	  },
	  {
		"radlexId": "RID3139_RID2999_RID5825",
		"description": "right proximal interphalangeal joint of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3139_RID2999",
		"leftId": "RID3139_RID2999_RID5824"
	  },
	  {
		"radlexId": "RID3148_RID2996",
		"description": "distal interphalangeal joint of second toe",
		"containedById": "RID28829",
		"leftId": "RID3148_RID2996_RID5824",
		"rightId": "RID3148_RID2996_RID5825",
		"synonyms": [
		  "2nd toe DIP joint l DIP joint of second toe"
		]
	  },
	  {
		"radlexId": "RID3148_RID2996_RID5824",
		"description": "left distal interphalangeal joint of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3148_RID2996",
		"rightId": "RID3148_RID2996_RID5825"
	  },
	  {
		"radlexId": "RID3148_RID2996_RID5825",
		"description": "right distal interphalangeal joint of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3148_RID2996",
		"leftId": "RID3148_RID2996_RID5824"
	  },
	  {
		"radlexId": "RID3148_RID2997",
		"description": "distal interphalangeal joint of third toe",
		"containedById": "RID28829",
		"leftId": "RID3148_RID2997_RID5824",
		"rightId": "RID3148_RID2997_RID5825",
		"synonyms": [
		  "3rd toe DIP joint l DIP joint of third toe"
		]
	  },
	  {
		"radlexId": "RID3148_RID2997_RID5824",
		"description": "left distal interphalangeal joint of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3148_RID2997",
		"rightId": "RID3148_RID2997_RID5825"
	  },
	  {
		"radlexId": "RID3148_RID2997_RID5825",
		"description": "right distal interphalangeal joint of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3148_RID2997",
		"leftId": "RID3148_RID2997_RID5824"
	  },
	  {
		"radlexId": "RID3148_RID2998",
		"description": "distal interphalangeal joint of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID3148_RID2998_RID5824",
		"rightId": "RID3148_RID2998_RID5825",
		"synonyms": [
		  "4th toe DIP joint l DIP joint of fourth toe"
		]
	  },
	  {
		"radlexId": "RID3148_RID2998_RID5824",
		"description": "left distal interphalangeal joint of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3148_RID2998",
		"rightId": "RID3148_RID2998_RID5825"
	  },
	  {
		"radlexId": "RID3148_RID2998_RID5825",
		"description": "right distal interphalangeal joint of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3148_RID2998",
		"leftId": "RID3148_RID2998_RID5824"
	  },
	  {
		"radlexId": "RID3148_RID2999",
		"description": "distal interphalangeal joint of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID3148_RID2999_RID5824",
		"rightId": "RID3148_RID2999_RID5825",
		"synonyms": [
		  "5th toe DIP joint l DIP joint of fifth toe"
		]
	  },
	  {
		"radlexId": "RID3148_RID2999_RID5824",
		"description": "left distal interphalangeal joint of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3148_RID2999",
		"rightId": "RID3148_RID2999_RID5825"
	  },
	  {
		"radlexId": "RID3148_RID2999_RID5825",
		"description": "right distal interphalangeal joint of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3148_RID2999",
		"leftId": "RID3148_RID2999_RID5824"
	  },
	  {
		"radlexId": "RID2986_RID2993",
		"description": "metatarsal of great toe",
		"containedById": "RID28829",
		"leftId": "RID2986_RID2993_RID5824",
		"rightId": "RID2986_RID2993_RID5825",
		"synonyms": [
		  "first metatarsal l 1st metatarsal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24502"
		  },
		  {
			"system": "SNOMED",
			"code": "20151003"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2993_RID5824",
		"description": "left metatarsal of great toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID2986_RID2993",
		"rightId": "RID2986_RID2993_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "761978001"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2993_RID5825",
		"description": "right metatarsal of great toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID2986_RID2993",
		"leftId": "RID2986_RID2993_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "761979009"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2996",
		"description": "metatarsal of second toe",
		"containedById": "RID28829",
		"leftId": "RID2986_RID2996_RID5824",
		"rightId": "RID2986_RID2996_RID5825",
		"synonyms": [
		  "second metatarsal l 2nd metatarsal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24503"
		  },
		  {
			"system": "SNOMED",
			"code": "23468006"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2996_RID5824",
		"description": "left metatarsal of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID2986_RID2996",
		"rightId": "RID2986_RID2996_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "737448004"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2996_RID5825",
		"description": "right metatarsal of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID2986_RID2996",
		"leftId": "RID2986_RID2996_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "737447009"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2997",
		"description": "metatarsal of third toe",
		"containedById": "RID28829",
		"leftId": "RID2986_RID2997_RID5824",
		"rightId": "RID2986_RID2997_RID5825",
		"synonyms": [
		  "third metatarsal l 3rd metatarsal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24504"
		  },
		  {
			"system": "SNOMED",
			"code": "90431000"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2997_RID5824",
		"description": "left metatarsal of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID2986_RID2997",
		"rightId": "RID2986_RID2997_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773720006"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2997_RID5825",
		"description": "right metatarsal of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID2986_RID2997",
		"leftId": "RID2986_RID2997_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773721005"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2998",
		"description": "metatarsal of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID2986_RID2998_RID5824",
		"rightId": "RID2986_RID2998_RID5825",
		"synonyms": [
		  "fourth metatarsal l 4th metatarsal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24505"
		  },
		  {
			"system": "SNOMED",
			"code": "88869001"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2998_RID5824",
		"description": "left metatarsal of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID2986_RID2998",
		"rightId": "RID2986_RID2998_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773808007"
		  }
		]
	  },
	  {
		"radlexId": "RID2986_RID2998_RID5825",
		"description": "right metatarsal of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID2986_RID2998",
		"leftId": "RID2986_RID2998_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773809004"
		  }
		]
	  },
	  {
		"radlexId": "RID13324",
		"description": "metatarsal of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID13324_RID5824",
		"rightId": "RID13324_RID5825",
		"synonyms": [
		  "fifth metatarsal l 5th metatarsal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24506"
		  },
		  {
			"system": "SNOMED",
			"code": "301000"
		  }
		]
	  },
	  {
		"radlexId": "RID13324_RID5824",
		"description": "left metatarsal of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID13324",
		"rightId": "RID13324_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773811008"
		  }
		]
	  },
	  {
		"radlexId": "RID13324_RID5825",
		"description": "right metatarsal of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID13324",
		"leftId": "RID13324_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "773810009"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2993",
		"description": "proximal phalanx of great toe",
		"containedById": "RID28829",
		"leftId": "RID3000_RID2993_RID5824",
		"rightId": "RID3000_RID2993_RID5825",
		"synonyms": [
		  "1st toe proximal phalanx l first toe proximal phalanx l great toe proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43252"
		  },
		  {
			"system": "SNOMED",
			"code": "74977003"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2993_RID5824",
		"description": "left proximal phalanx of great toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3000_RID2993",
		"rightId": "RID3000_RID2993_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "720661003"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2993_RID5825",
		"description": "right proximal phalanx of great toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3000_RID2993",
		"leftId": "RID3000_RID2993_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "720659007"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2996",
		"description": "proximal phalanx of second toe",
		"containedById": "RID28829",
		"leftId": "RID3000_RID2996_RID5824",
		"rightId": "RID3000_RID2996_RID5825",
		"synonyms": [
		  "2nd toe proximal phalanx l second toe proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32618"
		  },
		  {
			"system": "SNOMED",
			"code": "85625005"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2996_RID5824",
		"description": "left proximal phalanx of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3000_RID2996",
		"rightId": "RID3000_RID2996_RID5825"
	  },
	  {
		"radlexId": "RID3000_RID2996_RID5825",
		"description": "right proximal phalanx of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3000_RID2996",
		"leftId": "RID3000_RID2996_RID5824"
	  },
	  {
		"radlexId": "RID3000_RID2997",
		"description": "proximal phalanx of third toe",
		"containedById": "RID28829",
		"leftId": "RID3000_RID2997_RID5824",
		"rightId": "RID3000_RID2997_RID5825",
		"synonyms": [
		  "3rd toe proximal phalanx l third toe proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32619"
		  },
		  {
			"system": "SNOMED",
			"code": "7925003"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2997_RID5824",
		"description": "left proximal phalanx of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3000_RID2997",
		"rightId": "RID3000_RID2997_RID5825"
	  },
	  {
		"radlexId": "RID3000_RID2997_RID5825",
		"description": "right proximal phalanx of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3000_RID2997",
		"leftId": "RID3000_RID2997_RID5824"
	  },
	  {
		"radlexId": "RID3000_RID2998",
		"description": "proximal phalanx of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID3000_RID2998_RID5824",
		"rightId": "RID3000_RID2998_RID5825",
		"synonyms": [
		  "4th toe proximal phalanx l fourth toe proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32620"
		  },
		  {
			"system": "SNOMED",
			"code": "11171004"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2998_RID5824",
		"description": "left proximal phalanx of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3000_RID2998",
		"rightId": "RID3000_RID2998_RID5825"
	  },
	  {
		"radlexId": "RID3000_RID2998_RID5825",
		"description": "right proximal phalanx of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3000_RID2998",
		"leftId": "RID3000_RID2998_RID5824"
	  },
	  {
		"radlexId": "RID3000_RID2999",
		"description": "proximal phalanx of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID3000_RID2999_RID5824",
		"rightId": "RID3000_RID2999_RID5825",
		"synonyms": [
		  "5th toe proximal phalanx l fifth toe proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32621"
		  },
		  {
			"system": "SNOMED",
			"code": "9825007"
		  }
		]
	  },
	  {
		"radlexId": "RID3000_RID2999_RID5824",
		"description": "left proximal phalanx of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3000_RID2999",
		"rightId": "RID3000_RID2999_RID5825"
	  },
	  {
		"radlexId": "RID3000_RID2999_RID5825",
		"description": "right proximal phalanx of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3000_RID2999",
		"leftId": "RID3000_RID2999_RID5824"
	  },
	  {
		"radlexId": "RID3001_RID2996",
		"description": "middle phalanx of second toe",
		"containedById": "RID28829",
		"leftId": "RID3001_RID2996_RID5824",
		"rightId": "RID3001_RID2996_RID5825",
		"synonyms": [
		  "2nd toe middle phalanx l second toe middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32623"
		  },
		  {
			"system": "SNOMED",
			"code": "88767009"
		  }
		]
	  },
	  {
		"radlexId": "RID3001_RID2996_RID5824",
		"description": "left middle phalanx of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3001_RID2996",
		"rightId": "RID3001_RID2996_RID5825"
	  },
	  {
		"radlexId": "RID3001_RID2996_RID5825",
		"description": "right middle phalanx of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3001_RID2996",
		"leftId": "RID3001_RID2996_RID5824"
	  },
	  {
		"radlexId": "RID3001_RID2997",
		"description": "middle phalanx of third toe",
		"containedById": "RID28829",
		"leftId": "RID3001_RID2997_RID5824",
		"rightId": "RID3001_RID2997_RID5825",
		"synonyms": [
		  "3rd toe middle phalanx l third toe middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32624"
		  },
		  {
			"system": "SNOMED",
			"code": "18255002"
		  }
		]
	  },
	  {
		"radlexId": "RID3001_RID2997_RID5824",
		"description": "left middle phalanx of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3001_RID2997",
		"rightId": "RID3001_RID2997_RID5825"
	  },
	  {
		"radlexId": "RID3001_RID2997_RID5825",
		"description": "right middle phalanx of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3001_RID2997",
		"leftId": "RID3001_RID2997_RID5824"
	  },
	  {
		"radlexId": "RID3001_RID2998",
		"description": "middle phalanx of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID3001_RID2998_RID5824",
		"rightId": "RID3001_RID2998_RID5825",
		"synonyms": [
		  "4th toe middle phalanx l fourth toe middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32625"
		  },
		  {
			"system": "SNOMED",
			"code": "72008006"
		  }
		]
	  },
	  {
		"radlexId": "RID3001_RID2998_RID5824",
		"description": "left middle phalanx of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3001_RID2998",
		"rightId": "RID3001_RID2998_RID5825"
	  },
	  {
		"radlexId": "RID3001_RID2998_RID5825",
		"description": "right middle phalanx of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3001_RID2998",
		"leftId": "RID3001_RID2998_RID5824"
	  },
	  {
		"radlexId": "RID3001_RID2999",
		"description": "middle phalanx of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID3001_RID2999_RID5824",
		"rightId": "RID3001_RID2999_RID5825",
		"synonyms": [
		  "5th toe middle phalanx l fifth toe middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "230984"
		  },
		  {
			"system": "SNOMED",
			"code": "33790002"
		  }
		]
	  },
	  {
		"radlexId": "RID3001_RID2999_RID5824",
		"description": "left middle phalanx of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3001_RID2999",
		"rightId": "RID3001_RID2999_RID5825"
	  },
	  {
		"radlexId": "RID3001_RID2999_RID5825",
		"description": "right middle phalanx of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3001_RID2999",
		"leftId": "RID3001_RID2999_RID5824"
	  },
	  {
		"radlexId": "RID3002_RID2993",
		"description": "distal phalanx of great toe",
		"containedById": "RID28829",
		"leftId": "RID3002_RID2993_RID5824",
		"rightId": "RID3002_RID2993_RID5825",
		"synonyms": [
		  "1st toe distal phalanx l first toe distal phalanx l great toe distal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32627"
		  },
		  {
			"system": "SNOMED",
			"code": "53075003"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2993_RID5824",
		"description": "left distal phalanx of great toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3002_RID2993",
		"rightId": "RID3002_RID2993_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "720662005"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2993_RID5825",
		"description": "right distal phalanx of great toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3002_RID2993",
		"leftId": "RID3002_RID2993_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "720660002"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2996",
		"description": "distal phalanx of second toe",
		"containedById": "RID28829",
		"leftId": "RID3002_RID2996_RID5824",
		"rightId": "RID3002_RID2996_RID5825",
		"synonyms": [
		  "2nd toe distal phalanx l second toe distal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32628"
		  },
		  {
			"system": "SNOMED",
			"code": "76986006"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2996_RID5824",
		"description": "left distal phalanx of second toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3002_RID2996",
		"rightId": "RID3002_RID2996_RID5825"
	  },
	  {
		"radlexId": "RID3002_RID2996_RID5825",
		"description": "right distal phalanx of second toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3002_RID2996",
		"leftId": "RID3002_RID2996_RID5824"
	  },
	  {
		"radlexId": "RID3002_RID2997",
		"description": "distal phalanx of third toe",
		"containedById": "RID28829",
		"leftId": "RID3002_RID2997_RID5824",
		"rightId": "RID3002_RID2997_RID5825",
		"synonyms": [
		  "3rd toe distal phalanx l third toe distal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32629"
		  },
		  {
			"system": "SNOMED",
			"code": "65258003"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2997_RID5824",
		"description": "left distal phalanx of third toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3002_RID2997",
		"rightId": "RID3002_RID2997_RID5825"
	  },
	  {
		"radlexId": "RID3002_RID2997_RID5825",
		"description": "right distal phalanx of third toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3002_RID2997",
		"leftId": "RID3002_RID2997_RID5824"
	  },
	  {
		"radlexId": "RID3002_RID2998",
		"description": "distal phalanx of fourth toe",
		"containedById": "RID28829",
		"leftId": "RID3002_RID2998_RID5824",
		"rightId": "RID3002_RID2998_RID5825",
		"synonyms": [
		  "4th toe distal phalanx l fourth toe distal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32630"
		  },
		  {
			"system": "SNOMED",
			"code": "54333003"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2998_RID5824",
		"description": "left distal phalanx of fourth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3002_RID2998",
		"rightId": "RID3002_RID2998_RID5825"
	  },
	  {
		"radlexId": "RID3002_RID2998_RID5825",
		"description": "right distal phalanx of fourth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3002_RID2998",
		"leftId": "RID3002_RID2998_RID5824"
	  },
	  {
		"radlexId": "RID3002_RID2999",
		"description": "distal phalanx of fifth toe",
		"containedById": "RID28829",
		"leftId": "RID3002_RID2999_RID5824",
		"rightId": "RID3002_RID2999_RID5825",
		"synonyms": [
		  "5th toe distal phalanx l fifth toe distal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32631"
		  },
		  {
			"system": "SNOMED",
			"code": "10770001"
		  }
		]
	  },
	  {
		"radlexId": "RID3002_RID2999_RID5824",
		"description": "left distal phalanx of fifth toe",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3002_RID2999",
		"rightId": "RID3002_RID2999_RID5825"
	  },
	  {
		"radlexId": "RID3002_RID2999_RID5825",
		"description": "right distal phalanx of fifth toe",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3002_RID2999",
		"leftId": "RID3002_RID2999_RID5824"
	  },
	  {
		"radlexId": "RID949",
		"description": "superior gluteal artery",
		"containedById": "RID2639",
		"leftId": "RID949_RID5824",
		"rightId": "RID949_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "18868"
		  },
		  {
			"system": "SNOMED",
			"code": "72504003"
		  }
		]
	  },
	  {
		"radlexId": "RID949_RID5824",
		"description": "left superior gluteal artery",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID949",
		"rightId": "RID949_RID5825"
	  },
	  {
		"radlexId": "RID949_RID5825",
		"description": "right superior gluteal artery",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID949",
		"leftId": "RID949_RID5824"
	  },
	  {
		"radlexId": "RID950",
		"description": "inferior gluteal artery",
		"containedById": "RID2639",
		"leftId": "RID950_RID5824",
		"rightId": "RID950_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "18871"
		  },
		  {
			"system": "SNOMED",
			"code": "85259001"
		  }
		]
	  },
	  {
		"radlexId": "RID950_RID5824",
		"description": "left inferior gluteal artery",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID950",
		"rightId": "RID950_RID5825"
	  },
	  {
		"radlexId": "RID950_RID5825",
		"description": "right inferior gluteal artery",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID950",
		"leftId": "RID950_RID5824"
	  },
	  {
		"radlexId": "RID957",
		"description": "external iliac artery",
		"containedById": "RID2639",
		"leftId": "RID957_RID5824",
		"rightId": "RID957_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "18805"
		  },
		  {
			"system": "SNOMED",
			"code": "113269004"
		  }
		]
	  },
	  {
		"radlexId": "RID957_RID5824",
		"description": "left external iliac artery",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID957",
		"rightId": "RID957_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "283892001"
		  }
		]
	  },
	  {
		"radlexId": "RID957_RID5825",
		"description": "right external iliac artery",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID957",
		"leftId": "RID957_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "283797001"
		  }
		]
	  },
	  {
		"radlexId": "RID1195",
		"description": "external iliac vein",
		"containedById": "RID2639",
		"leftId": "RID1195_RID5824",
		"rightId": "RID1195_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "18883"
		  },
		  {
			"system": "SNOMED",
			"code": "63507001"
		  }
		]
	  },
	  {
		"radlexId": "RID1195_RID5824",
		"description": "left external iliac vein",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID1195",
		"rightId": "RID1195_RID5825"
	  },
	  {
		"radlexId": "RID1195_RID5825",
		"description": "right external iliac vein",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID1195",
		"leftId": "RID1195_RID5824"
	  },
	  {
		"radlexId": "RID958",
		"description": "common femoral artery",
		"containedById": "RID2660",
		"leftId": "RID958_RID5824",
		"rightId": "RID958_RID5825",
		"synonyms": [
		  "trunk of femoral artery",
		  "femoral arterial trunk"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "323778"
		  },
		  {
			"system": "SNOMED",
			"code": "181347005"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.351"
		  }
		]
	  },
	  {
		"radlexId": "RID958_RID5824",
		"description": "left common femoral artery",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID958",
		"rightId": "RID958_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764114007"
		  }
		]
	  },
	  {
		"radlexId": "RID958_RID5825",
		"description": "right common femoral artery",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID958",
		"leftId": "RID958_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764115008"
		  }
		]
	  },
	  {
		"radlexId": "RID961",
		"description": "superficial femoral artery",
		"containedById": "RID2660",
		"leftId": "RID961_RID5824",
		"rightId": "RID961_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "323777"
		  },
		  {
			"system": "SNOMED",
			"code": "181349008"
		  }
		]
	  },
	  {
		"radlexId": "RID961_RID5824",
		"description": "left superficial femoral artery",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID961",
		"rightId": "RID961_RID5825"
	  },
	  {
		"radlexId": "RID961_RID5825",
		"description": "right superficial femoral artery",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID961",
		"leftId": "RID961_RID5824"
	  },
	  {
		"radlexId": "RID1199",
		"description": "femoral vein",
		"containedById": "RID2660",
		"leftId": "RID1199_RID5824",
		"rightId": "RID1199_RID5825",
		"synonyms": [
		  "superficial femoral vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "21185"
		  },
		  {
			"system": "SNOMED",
			"code": "83419000"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.908.314"
		  },
		  {
			"system": "UMLS",
			"code": "C0015809"
		  }
		]
	  },
	  {
		"radlexId": "RID1199_RID5824",
		"description": "left femoral vein",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID1199",
		"rightId": "RID1199_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "767173003"
		  }
		]
	  },
	  {
		"radlexId": "RID1199_RID5825",
		"description": "right femoral vein",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID1199",
		"leftId": "RID1199_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "767174009"
		  }
		]
	  },
	  {
		"radlexId": "RID959",
		"description": "deep femoral artery",
		"containedById": "RID2660",
		"leftId": "RID959_RID5824",
		"rightId": "RID959_RID5825",
		"synonyms": [
		  "profunda femoris artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "20741"
		  },
		  {
			"system": "SNOMED",
			"code": "31677005"
		  }
		]
	  },
	  {
		"radlexId": "RID959_RID5824",
		"description": "left deep femoral artery",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID959",
		"rightId": "RID959_RID5825"
	  },
	  {
		"radlexId": "RID959_RID5825",
		"description": "right deep femoral artery",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID959",
		"leftId": "RID959_RID5824"
	  },
	  {
		"radlexId": "RID1197",
		"description": "greater saphenous vein",
		"containedById": "RID2638",
		"leftId": "RID1197_RID5824",
		"rightId": "RID1197_RID5825",
		"synonyms": [
		  "great saphenous vein"
		]
	  },
	  {
		"radlexId": "RID1197_RID5824",
		"description": "left greater saphenous vein",
		"containedById": "RID2638_RID5824",
		"unsidedId": "RID1197",
		"rightId": "RID1197_RID5825"
	  },
	  {
		"radlexId": "RID1197_RID5825",
		"description": "right greater saphenous vein",
		"containedById": "RID2638_RID5825",
		"unsidedId": "RID1197",
		"leftId": "RID1197_RID5824"
	  },
	  {
		"radlexId": "RID1202",
		"description": "lesser saphenous vein",
		"containedById": "RID2869",
		"leftId": "RID1202_RID5824",
		"rightId": "RID1202_RID5825",
		"synonyms": [
		  "short saphenous vein",
		  "small saphenous vein"
		]
	  },
	  {
		"radlexId": "RID1202_RID5824",
		"description": "left lesser saphenous vein",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID1202",
		"rightId": "RID1202_RID5825"
	  },
	  {
		"radlexId": "RID1202_RID5825",
		"description": "right lesser saphenous vein",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID1202",
		"leftId": "RID1202_RID5824"
	  },
	  {
		"radlexId": "RID962",
		"description": "popliteal artery",
		"containedById": "RID2743",
		"leftId": "RID962_RID5824",
		"rightId": "RID962_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "77155"
		  },
		  {
			"system": "SNOMED",
			"code": "43899006"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.114.681"
		  },
		  {
			"system": "UMLS",
			"code": "C0032649"
		  }
		]
	  },
	  {
		"radlexId": "RID962_RID5824",
		"description": "left popliteal artery",
		"containedById": "RID49360",
		"unsidedId": "RID962",
		"rightId": "RID962_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "25885001"
		  }
		]
	  },
	  {
		"radlexId": "RID962_RID5825",
		"description": "right popliteal artery",
		"containedById": "RID49359",
		"unsidedId": "RID962",
		"leftId": "RID962_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "57832007"
		  }
		]
	  },
	  {
		"radlexId": "RID1201",
		"description": "popliteal vein",
		"containedById": "RID2743",
		"leftId": "RID1201_RID5824",
		"rightId": "RID1201_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "44327"
		  },
		  {
			"system": "SNOMED",
			"code": "56849005"
		  },
		  {
			"system": "MESH",
			"code": "A07.231.908.641"
		  },
		  {
			"system": "UMLS",
			"code": "C0032652"
		  }
		]
	  },
	  {
		"radlexId": "RID1201_RID5824",
		"description": "left popliteal vein",
		"containedById": "RID49360",
		"unsidedId": "RID1201",
		"rightId": "RID1201_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "879813001"
		  }
		]
	  },
	  {
		"radlexId": "RID1201_RID5825",
		"description": "right popliteal vein",
		"containedById": "RID49359",
		"unsidedId": "RID1201",
		"leftId": "RID1201_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "879812006"
		  }
		]
	  },
	  {
		"radlexId": "RID971",
		"description": "anterior tibial artery",
		"containedById": "RID2869",
		"leftId": "RID971_RID5824",
		"rightId": "RID971_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "43894"
		  },
		  {
			"system": "SNOMED",
			"code": "68053000"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.895"
		  }
		]
	  },
	  {
		"radlexId": "RID971_RID5824",
		"description": "left anterior tibial artery",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID971",
		"rightId": "RID971_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "215116005"
		  }
		]
	  },
	  {
		"radlexId": "RID971_RID5825",
		"description": "right anterior tibial artery",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID971",
		"leftId": "RID971_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "215013000"
		  }
		]
	  },
	  {
		"radlexId": "RID1205",
		"description": "anterior tibial vein",
		"containedById": "RID2869",
		"leftId": "RID1205_RID5824",
		"rightId": "RID1205_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "44331"
		  },
		  {
			"system": "SNOMED",
			"code": "26703007"
		  }
		]
	  },
	  {
		"radlexId": "RID1205_RID5824",
		"description": "left anterior tibial vein",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID1205",
		"rightId": "RID1205_RID5825"
	  },
	  {
		"radlexId": "RID1205_RID5825",
		"description": "right anterior tibial vein",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID1205",
		"leftId": "RID1205_RID5824"
	  },
	  {
		"radlexId": "RID967",
		"description": "posterior tibial artery",
		"containedById": "RID2869",
		"leftId": "RID967_RID5824",
		"rightId": "RID967_RID5825",
		"synonyms": [
		  "posterior tibial recurrent artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43895"
		  },
		  {
			"system": "SNOMED",
			"code": "13363002"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.895"
		  }
		]
	  },
	  {
		"radlexId": "RID967_RID5824",
		"description": "left posterior tibial artery",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID967",
		"rightId": "RID967_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "214912001"
		  }
		]
	  },
	  {
		"radlexId": "RID967_RID5825",
		"description": "right posterior tibial artery",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID967",
		"leftId": "RID967_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "214811007"
		  }
		]
	  },
	  {
		"radlexId": "RID1207",
		"description": "posterior tibial vein",
		"containedById": "RID2869",
		"leftId": "RID1207_RID5824",
		"rightId": "RID1207_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "44332"
		  },
		  {
			"system": "SNOMED",
			"code": "4258007"
		  }
		]
	  },
	  {
		"radlexId": "RID1207_RID5824",
		"description": "left posterior tibial vein",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID1207",
		"rightId": "RID1207_RID5825"
	  },
	  {
		"radlexId": "RID1207_RID5825",
		"description": "right posterior tibial vein",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID1207",
		"leftId": "RID1207_RID5824"
	  },
	  {
		"radlexId": "RID964",
		"description": "peroneal artery",
		"containedById": "RID2869",
		"leftId": "RID964_RID5824",
		"rightId": "RID964_RID5825",
		"synonyms": [
		  "fibular artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43921"
		  },
		  {
			"system": "SNOMED",
			"code": "8821006"
		  }
		]
	  },
	  {
		"radlexId": "RID964_RID5824",
		"description": "left peroneal artery",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID964",
		"rightId": "RID964_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "736864007"
		  }
		]
	  },
	  {
		"radlexId": "RID964_RID5825",
		"description": "right peroneal artery",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID964",
		"leftId": "RID964_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "736865008"
		  }
		]
	  },
	  {
		"radlexId": "RID1206",
		"description": "peroneal vein",
		"containedById": "RID2869",
		"leftId": "RID1206_RID5824",
		"rightId": "RID1206_RID5825",
		"synonyms": [
		  "fibular vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44558"
		  },
		  {
			"system": "SNOMED",
			"code": "71758008"
		  }
		]
	  },
	  {
		"radlexId": "RID1206_RID5824",
		"description": "left peroneal vein",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID1206",
		"rightId": "RID1206_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "879863006"
		  }
		]
	  },
	  {
		"radlexId": "RID1206_RID5825",
		"description": "right peroneal vein",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID1206",
		"leftId": "RID1206_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "879864000"
		  }
		]
	  },
	  {
		"radlexId": "RID972",
		"description": "dorsal pedal artery",
		"containedById": "RID28829",
		"leftId": "RID972_RID5824",
		"rightId": "RID972_RID5825",
		"synonyms": [
		  "dorsalis pedis artery",
		  "dorsal metatarsal artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44644"
		  },
		  {
			"system": "SNOMED",
			"code": "86547008"
		  }
		]
	  },
	  {
		"radlexId": "RID972_RID5824",
		"description": "left dorsal pedal artery",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID972",
		"rightId": "RID972_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "792817008"
		  }
		]
	  },
	  {
		"radlexId": "RID972_RID5825",
		"description": "right dorsal pedal artery",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID972",
		"leftId": "RID972_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "792816004"
		  }
		]
	  },
	  {
		"radlexId": "RID970",
		"description": "plantar arch",
		"containedById": "RID28829",
		"leftId": "RID970_RID5824",
		"rightId": "RID970_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "43942"
		  },
		  {
			"system": "SNOMED",
			"code": "83018002"
		  }
		]
	  },
	  {
		"radlexId": "RID970_RID5824",
		"description": "left plantar arch",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID970",
		"rightId": "RID970_RID5825"
	  },
	  {
		"radlexId": "RID970_RID5825",
		"description": "right plantar arch",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID970",
		"leftId": "RID970_RID5824"
	  },
	  {
		"radlexId": "RID7321",
		"description": "superior gluteal nerve",
		"containedById": "RID2639",
		"leftId": "RID25679",
		"rightId": "RID25678",
		"synonyms": [
		  "nervus gluteus superior",
		  "Nervus glutealis superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16510"
		  },
		  {
			"system": "SNOMED",
			"code": "29067003"
		  }
		]
	  },
	  {
		"radlexId": "RID25678",
		"description": "right superior gluteal nerve",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID7321",
		"leftId": "RID25679",
		"codes": [
		  {
			"system": "FMA",
			"code": "45344"
		  }
		]
	  },
	  {
		"radlexId": "RID25679",
		"description": "left superior gluteal nerve",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID7321",
		"rightId": "RID25678",
		"codes": [
		  {
			"system": "FMA",
			"code": "45345"
		  }
		]
	  },
	  {
		"radlexId": "RID7322",
		"description": "inferior gluteal nerve",
		"containedById": "RID2639",
		"leftId": "RID25681",
		"rightId": "RID25680",
		"synonyms": [
		  "nervus gluteus inferior",
		  "Nervus glutealis inferior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16511"
		  },
		  {
			"system": "SNOMED",
			"code": "10591007"
		  }
		]
	  },
	  {
		"radlexId": "RID25680",
		"description": "right inferior gluteal nerve",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID7322",
		"leftId": "RID25681",
		"codes": [
		  {
			"system": "FMA",
			"code": "45346"
		  }
		]
	  },
	  {
		"radlexId": "RID25681",
		"description": "left inferior gluteal nerve",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID7322",
		"rightId": "RID25680",
		"codes": [
		  {
			"system": "FMA",
			"code": "45347"
		  }
		]
	  },
	  {
		"radlexId": "RID7330",
		"description": "sciatic nerve",
		"containedById": "RID2660",
		"leftId": "RID25685",
		"rightId": "RID25684",
		"synonyms": [
		  "nervus ischiadicus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19034"
		  },
		  {
			"system": "SNOMED",
			"code": "41519007"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.450.760"
		  },
		  {
			"system": "UMLS",
			"code": "C0036394"
		  }
		]
	  },
	  {
		"radlexId": "RID25684",
		"description": "right sciatic nerve",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID7330",
		"leftId": "RID25685",
		"codes": [
		  {
			"system": "FMA",
			"code": "22111"
		  },
		  {
			"system": "SNOMED",
			"code": "722724007"
		  }
		]
	  },
	  {
		"radlexId": "RID25685",
		"description": "left sciatic nerve",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID7330",
		"rightId": "RID25684",
		"codes": [
		  {
			"system": "FMA",
			"code": "22112"
		  },
		  {
			"system": "SNOMED",
			"code": "722723001"
		  }
		]
	  },
	  {
		"radlexId": "RID7331",
		"description": "tibial nerve",
		"containedById": "RID2869",
		"leftId": "RID15363",
		"rightId": "RID15362",
		"synonyms": [
		  "medial popliteal nerve",
		  "tibial division of sciatic nerve",
		  "nervus tibialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19035"
		  },
		  {
			"system": "SNOMED",
			"code": "45684006"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.450.760.820"
		  },
		  {
			"system": "UMLS",
			"code": "C0040186"
		  }
		]
	  },
	  {
		"radlexId": "RID15362",
		"description": "right tibial nerve",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID7331",
		"leftId": "RID15363",
		"codes": [
		  {
			"system": "FMA",
			"code": "22109"
		  }
		]
	  },
	  {
		"radlexId": "RID15363",
		"description": "left tibial nerve",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID7331",
		"rightId": "RID15362",
		"codes": [
		  {
			"system": "FMA",
			"code": "22110"
		  }
		]
	  },
	  {
		"radlexId": "RID7348",
		"description": "common peroneal nerve",
		"containedById": "RID2869",
		"leftId": "RID7348_RID5824",
		"rightId": "RID7348_RID5825",
		"synonyms": [
		  "common fibular nerve",
		  "nervus fibularis communis",
		  "nervus peroneus communis",
		  "fibular division of sciatic nerve",
		  "Nervus peroneus communis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19039"
		  },
		  {
			"system": "SNOMED",
			"code": "27841004"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.450.760.640"
		  },
		  {
			"system": "UMLS",
			"code": "C0031173"
		  }
		]
	  },
	  {
		"radlexId": "RID7348_RID5824",
		"description": "left common peroneal nerve",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID7348",
		"rightId": "RID7348_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "734366001"
		  }
		]
	  },
	  {
		"radlexId": "RID7348_RID5825",
		"description": "right common peroneal nerve",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID7348",
		"leftId": "RID7348_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "734367005"
		  }
		]
	  },
	  {
		"radlexId": "RID7353",
		"description": "superficial peroneal nerve",
		"containedById": "RID2869",
		"leftId": "RID15807",
		"rightId": "RID15808",
		"synonyms": [
		  "nervus fibularis superficialis",
		  "nervus peroneus superficialis",
		  "nervus peroneus superficialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44699"
		  },
		  {
			"system": "SNOMED",
			"code": "53995007"
		  }
		]
	  },
	  {
		"radlexId": "RID15808",
		"description": "right superficial peroneal nerve",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID7353",
		"leftId": "RID15807",
		"codes": [
		  {
			"system": "FMA",
			"code": "45363"
		  },
		  {
			"system": "SNOMED",
			"code": "734410002"
		  }
		]
	  },
	  {
		"radlexId": "RID15807",
		"description": "left superficial peroneal nerve",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID7353",
		"rightId": "RID15808",
		"codes": [
		  {
			"system": "FMA",
			"code": "45364"
		  },
		  {
			"system": "SNOMED",
			"code": "734411003"
		  }
		]
	  },
	  {
		"radlexId": "RID7359",
		"description": "deep peroneal nerve",
		"containedById": "RID2869",
		"leftId": "RID15800",
		"rightId": "RID15801",
		"synonyms": [
		  "nervus fibularis profundus",
		  "nervus peroneus profundus",
		  "nervus peroneus profundus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44771"
		  },
		  {
			"system": "SNOMED",
			"code": "64529007"
		  }
		]
	  },
	  {
		"radlexId": "RID15801",
		"description": "right deep peroneal nerve",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID7359",
		"leftId": "RID15800",
		"codes": [
		  {
			"system": "FMA",
			"code": "45387"
		  },
		  {
			"system": "SNOMED",
			"code": "762885001"
		  }
		]
	  },
	  {
		"radlexId": "RID15800",
		"description": "left deep peroneal nerve",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID7359",
		"rightId": "RID15801",
		"codes": [
		  {
			"system": "FMA",
			"code": "45388"
		  },
		  {
			"system": "SNOMED",
			"code": "762884002"
		  }
		]
	  },
	  {
		"radlexId": "RID7347",
		"description": "sural nerve",
		"containedById": "RID2869",
		"leftId": "RID15369",
		"rightId": "RID15368",
		"synonyms": [
		  "nervus suralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44688"
		  },
		  {
			"system": "SNOMED",
			"code": "82097001"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.450.760.820.820"
		  },
		  {
			"system": "UMLS",
			"code": "C0038879"
		  }
		]
	  },
	  {
		"radlexId": "RID15368",
		"description": "right sural nerve",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID7347",
		"leftId": "RID15369",
		"codes": [
		  {
			"system": "FMA",
			"code": "45424"
		  },
		  {
			"system": "SNOMED",
			"code": "734432006"
		  }
		]
	  },
	  {
		"radlexId": "RID15369",
		"description": "left sural nerve",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID7347",
		"rightId": "RID15368",
		"codes": [
		  {
			"system": "FMA",
			"code": "45425"
		  },
		  {
			"system": "SNOMED",
			"code": "734433001"
		  }
		]
	  },
	  {
		"radlexId": "RID2629",
		"description": "gluteus maximus muscle",
		"containedById": "RID2639",
		"leftId": "RID2629_RID5824",
		"rightId": "RID2629_RID5825",
		"synonyms": [
		  "gluteus maximus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22314"
		  },
		  {
			"system": "SNOMED",
			"code": "206007"
		  }
		]
	  },
	  {
		"radlexId": "RID2629_RID5824",
		"description": "left gluteus maximus muscle",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID2629",
		"rightId": "RID2629_RID5825"
	  },
	  {
		"radlexId": "RID2629_RID5825",
		"description": "right gluteus maximus muscle",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID2629",
		"leftId": "RID2629_RID5824"
	  },
	  {
		"radlexId": "RID2630",
		"description": "gluteus medius muscle",
		"containedById": "RID2639",
		"leftId": "RID2630_RID5824",
		"rightId": "RID2630_RID5825",
		"synonyms": [
		  "gluteus medius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22315"
		  },
		  {
			"system": "SNOMED",
			"code": "78333006"
		  }
		]
	  },
	  {
		"radlexId": "RID2630_RID5824",
		"description": "left gluteus medius muscle",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID2630",
		"rightId": "RID2630_RID5825"
	  },
	  {
		"radlexId": "RID2630_RID5825",
		"description": "right gluteus medius muscle",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID2630",
		"leftId": "RID2630_RID5824"
	  },
	  {
		"radlexId": "RID2631",
		"description": "gluteus minimus muscle",
		"containedById": "RID2639",
		"leftId": "RID2631_RID5824",
		"rightId": "RID2631_RID5825",
		"synonyms": [
		  "gluteus minimus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22317"
		  },
		  {
			"system": "SNOMED",
			"code": "75297007"
		  }
		]
	  },
	  {
		"radlexId": "RID2631_RID5824",
		"description": "left gluteus minimus muscle",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID2631",
		"rightId": "RID2631_RID5825"
	  },
	  {
		"radlexId": "RID2631_RID5825",
		"description": "right gluteus minimus muscle",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID2631",
		"leftId": "RID2631_RID5824"
	  },
	  {
		"radlexId": "RID2717",
		"description": "semitendinosus muscle",
		"containedById": "RID2660",
		"leftId": "RID48229",
		"rightId": "RID48228",
		"synonyms": [
		  "musculus semitendinosus",
		  "Musculus semitendineus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22357"
		  },
		  {
			"system": "SNOMED",
			"code": "50340007"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.450"
		  }
		]
	  },
	  {
		"radlexId": "RID48228",
		"description": "right semitendinosus muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2717",
		"leftId": "RID48229",
		"synonyms": [
		  "right semitendinosus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22358"
		  }
		]
	  },
	  {
		"radlexId": "RID48229",
		"description": "left semitendinosus muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2717",
		"rightId": "RID48228",
		"synonyms": [
		  "left semitendinosus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22359"
		  }
		]
	  },
	  {
		"radlexId": "RID2718",
		"description": "semimembranosus muscle",
		"containedById": "RID2660",
		"leftId": "RID48231",
		"rightId": "RID48230",
		"synonyms": [
		  "musculus semimembranosus",
		  "Musculus semimembranosus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22438"
		  },
		  {
			"system": "SNOMED",
			"code": "84010001"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.450"
		  }
		]
	  },
	  {
		"radlexId": "RID48230",
		"description": "right semimembranosus muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2718",
		"leftId": "RID48231",
		"synonyms": [
		  "right semimembranosus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22448"
		  }
		]
	  },
	  {
		"radlexId": "RID48231",
		"description": "left semimembranosus muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2718",
		"rightId": "RID48230",
		"synonyms": [
		  "left semimembranosus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22449"
		  }
		]
	  },
	  {
		"radlexId": "RID2714",
		"description": "biceps femoris muscle",
		"containedById": "RID2660",
		"leftId": "RID48227",
		"rightId": "RID48226",
		"synonyms": [
		  "musculus biceps femoris",
		  "musculus biceps femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22356"
		  },
		  {
			"system": "SNOMED",
			"code": "89241006"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.450"
		  }
		]
	  },
	  {
		"radlexId": "RID48226",
		"description": "right biceps femoris muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2714",
		"leftId": "RID48227",
		"synonyms": [
		  "right biceps femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22360"
		  }
		]
	  },
	  {
		"radlexId": "RID48227",
		"description": "left biceps femoris muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2714",
		"rightId": "RID48226",
		"synonyms": [
		  "left biceps femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22361"
		  }
		]
	  },
	  {
		"radlexId": "RID2709",
		"description": "gracilis muscle",
		"containedById": "RID2660",
		"leftId": "RID48234",
		"rightId": "RID48233",
		"synonyms": [
		  "musculus gracilis",
		  "musculus gracilis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43882"
		  },
		  {
			"system": "SNOMED",
			"code": "2577006"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.425"
		  }
		]
	  },
	  {
		"radlexId": "RID48233",
		"description": "right gracilis muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2709",
		"leftId": "RID48234",
		"synonyms": [
		  "right gracilis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43883"
		  }
		]
	  },
	  {
		"radlexId": "RID48234",
		"description": "left gracilis muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2709",
		"rightId": "RID48233",
		"synonyms": [
		  "left gracilis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "43884"
		  }
		]
	  },
	  {
		"radlexId": "RID2696",
		"description": "sartorius muscle",
		"containedById": "RID2660",
		"leftId": "RID48210",
		"rightId": "RID48209",
		"synonyms": [
		  "sartorius",
		  "musculus sartorius",
		  "Musculus sartorius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22353"
		  },
		  {
			"system": "SNOMED",
			"code": "12595009"
		  }
		]
	  },
	  {
		"radlexId": "RID48209",
		"description": "right sartorius muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2696",
		"leftId": "RID48210",
		"synonyms": [
		  "right sartorius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22354"
		  }
		]
	  },
	  {
		"radlexId": "RID48210",
		"description": "left sartorius muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2696",
		"rightId": "RID48209",
		"synonyms": [
		  "left sartorius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22355"
		  }
		]
	  },
	  {
		"radlexId": "RID2707",
		"description": "pectineus muscle",
		"containedById": "RID2660",
		"leftId": "RID48236",
		"rightId": "RID48235",
		"synonyms": [
		  "musculus pectineus",
		  "musculus pectineus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22440"
		  },
		  {
			"system": "SNOMED",
			"code": "71875009"
		  }
		]
	  },
	  {
		"radlexId": "RID48235",
		"description": "right pectineus muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2707",
		"leftId": "RID48236",
		"synonyms": [
		  "right pectineus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22450"
		  }
		]
	  },
	  {
		"radlexId": "RID48236",
		"description": "left pectineus muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2707",
		"rightId": "RID48235",
		"synonyms": [
		  "left pectineus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22451"
		  }
		]
	  },
	  {
		"radlexId": "RID30906",
		"description": "iliopsoas muscle",
		"containedById": "RID2660",
		"leftId": "RID30908",
		"rightId": "RID30907",
		"synonyms": [
		  "musculus iliopsoas",
		  "hyrtl muscle",
		  "ileopsoas"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "64918"
		  },
		  {
			"system": "SNOMED",
			"code": "68455001"
		  }
		]
	  },
	  {
		"radlexId": "RID30907",
		"description": "right iliopsoas muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID30906",
		"leftId": "RID30908",
		"codes": [
		  {
			"system": "FMA",
			"code": "64919"
		  }
		]
	  },
	  {
		"radlexId": "RID30908",
		"description": "left iliopsoas muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID30906",
		"rightId": "RID30907",
		"codes": [
		  {
			"system": "FMA",
			"code": "64920"
		  }
		]
	  },
	  {
		"radlexId": "RID2703",
		"description": "tensor fascia lata muscle",
		"containedById": "RID2660",
		"leftId": "RID2703_RID5824",
		"rightId": "RID2703_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "22423"
		  },
		  {
			"system": "SNOMED",
			"code": "28190000"
		  }
		]
	  },
	  {
		"radlexId": "RID2703_RID5824",
		"description": "left tensor fascia lata muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2703",
		"rightId": "RID2703_RID5825"
	  },
	  {
		"radlexId": "RID2703_RID5825",
		"description": "right tensor fascia lata muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2703",
		"leftId": "RID2703_RID5824"
	  },
	  {
		"radlexId": "RID2723",
		"description": "iliotibial band",
		"containedById": "RID2660",
		"leftId": "RID49025",
		"rightId": "RID49024",
		"synonyms": [
		  "iliotibial tract",
		  "tractus iliotibialis",
		  "Tractus iliotibialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51048"
		  }
		]
	  },
	  {
		"radlexId": "RID49024",
		"description": "right iliotibial band",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2723",
		"leftId": "RID49025",
		"synonyms": [
		  "right iliotibial tract"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "58776"
		  }
		]
	  },
	  {
		"radlexId": "RID49025",
		"description": "left iliotibial band",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2723",
		"rightId": "RID49024",
		"synonyms": [
		  "left iliotibial tract"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "58777"
		  }
		]
	  },
	  {
		"radlexId": "RID2700",
		"description": "vastus medialis muscle",
		"containedById": "RID2660",
		"leftId": "RID2700_RID5824",
		"rightId": "RID2700_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "22432"
		  },
		  {
			"system": "SNOMED",
			"code": "3478008"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.850"
		  }
		]
	  },
	  {
		"radlexId": "RID2700_RID5824",
		"description": "left vastus medialis muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2700",
		"rightId": "RID2700_RID5825"
	  },
	  {
		"radlexId": "RID2700_RID5825",
		"description": "right vastus medialis muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2700",
		"leftId": "RID2700_RID5824"
	  },
	  {
		"radlexId": "RID2702",
		"description": "vastus intermedius muscle",
		"containedById": "RID2660",
		"leftId": "RID2702_RID5824",
		"rightId": "RID2702_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "22433"
		  },
		  {
			"system": "SNOMED",
			"code": "57733007"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.850"
		  }
		]
	  },
	  {
		"radlexId": "RID2702_RID5824",
		"description": "left vastus intermedius muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2702",
		"rightId": "RID2702_RID5825"
	  },
	  {
		"radlexId": "RID2702_RID5825",
		"description": "right vastus intermedius muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2702",
		"leftId": "RID2702_RID5824"
	  },
	  {
		"radlexId": "RID2699",
		"description": "vastus lateralis muscle",
		"containedById": "RID2660",
		"leftId": "RID2699_RID5824",
		"rightId": "RID2699_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "22431"
		  },
		  {
			"system": "SNOMED",
			"code": "1403006"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.850"
		  }
		]
	  },
	  {
		"radlexId": "RID2699_RID5824",
		"description": "left vastus lateralis muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2699",
		"rightId": "RID2699_RID5825"
	  },
	  {
		"radlexId": "RID2699_RID5825",
		"description": "right vastus lateralis muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2699",
		"leftId": "RID2699_RID5824"
	  },
	  {
		"radlexId": "RID2698",
		"description": "rectus femoris muscle",
		"containedById": "RID2660",
		"leftId": "RID2698_RID5824",
		"rightId": "RID2698_RID5825",
		"synonyms": [
		  "musculus rectus femoris",
		  "musculus rectus femoris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22430"
		  },
		  {
			"system": "SNOMED",
			"code": "72226001"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.850"
		  }
		]
	  },
	  {
		"radlexId": "RID2698_RID5824",
		"description": "left rectus femoris muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2698",
		"rightId": "RID2698_RID5825"
	  },
	  {
		"radlexId": "RID2698_RID5825",
		"description": "right rectus femoris muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2698",
		"leftId": "RID2698_RID5824"
	  },
	  {
		"radlexId": "RID2710",
		"description": "adductor brevis muscle",
		"containedById": "RID2660",
		"leftId": "RID48240",
		"rightId": "RID48239",
		"synonyms": [
		  "musculus adductor brevis",
		  "musculus adductor brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22442"
		  },
		  {
			"system": "SNOMED",
			"code": "70770004"
		  }
		]
	  },
	  {
		"radlexId": "RID48239",
		"description": "right adductor brevis muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2710",
		"leftId": "RID48240",
		"synonyms": [
		  "right adductor brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22452"
		  }
		]
	  },
	  {
		"radlexId": "RID48240",
		"description": "left adductor brevis muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2710",
		"rightId": "RID48239",
		"synonyms": [
		  "left adductor brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22454"
		  }
		]
	  },
	  {
		"radlexId": "RID2708",
		"description": "adductor longus muscle",
		"containedById": "RID2660",
		"leftId": "RID48238",
		"rightId": "RID48237",
		"synonyms": [
		  "musculus adductor longus",
		  "musculus adductor longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22441"
		  },
		  {
			"system": "SNOMED",
			"code": "85629004"
		  }
		]
	  },
	  {
		"radlexId": "RID48237",
		"description": "right adductor longus muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2708",
		"leftId": "RID48238",
		"synonyms": [
		  "right adductor longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22456"
		  }
		]
	  },
	  {
		"radlexId": "RID48238",
		"description": "left adductor longus muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2708",
		"rightId": "RID48237",
		"synonyms": [
		  "left adductor longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22457"
		  }
		]
	  },
	  {
		"radlexId": "RID2711",
		"description": "adductor magnus muscle",
		"containedById": "RID2660",
		"leftId": "RID48242",
		"rightId": "RID48241",
		"synonyms": [
		  "musculus adductor magnus",
		  "musculus adductor magnus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22443"
		  },
		  {
			"system": "SNOMED",
			"code": "23087007"
		  }
		]
	  },
	  {
		"radlexId": "RID48241",
		"description": "right adductor magnus muscle",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID2711",
		"leftId": "RID48242",
		"synonyms": [
		  "right adductor magnus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22459"
		  }
		]
	  },
	  {
		"radlexId": "RID48242",
		"description": "left adductor magnus muscle",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID2711",
		"rightId": "RID48241",
		"synonyms": [
		  "left adductor magnus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22460"
		  }
		]
	  },
	  {
		"radlexId": "RID48211",
		"description": "articularis genus",
		"containedById": "RID2660",
		"leftId": "RID48213",
		"rightId": "RID48212",
		"synonyms": [
		  "articularis genus muscle",
		  "articular muscle of knee",
		  "musculus articularis genus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22437"
		  },
		  {
			"system": "SNOMED",
			"code": "16651008"
		  }
		]
	  },
	  {
		"radlexId": "RID48212",
		"description": "right articularis genus",
		"containedById": "RID2660_RID5825",
		"unsidedId": "RID48211",
		"leftId": "RID48213",
		"synonyms": [
		  "right articularis genus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22446"
		  }
		]
	  },
	  {
		"radlexId": "RID48213",
		"description": "left articularis genus",
		"containedById": "RID2660_RID5824",
		"unsidedId": "RID48211",
		"rightId": "RID48212",
		"synonyms": [
		  "right articularis genus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22447"
		  }
		]
	  },
	  {
		"radlexId": "RID2920",
		"description": "gastrocnemius muscle",
		"containedById": "RID2869",
		"leftId": "RID48468",
		"rightId": "RID48467",
		"synonyms": [
		  "musculus gastrocnemius",
		  "Musculus gastrocnemius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22541"
		  },
		  {
			"system": "SNOMED",
			"code": "35616000"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567"
		  }
		]
	  },
	  {
		"radlexId": "RID48467",
		"description": "right gastrocnemius muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2920",
		"leftId": "RID48468",
		"synonyms": [
		  "right gastrocnemius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22556"
		  },
		  {
			"system": "SNOMED",
			"code": "723044003"
		  }
		]
	  },
	  {
		"radlexId": "RID48468",
		"description": "left gastrocnemius muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2920",
		"rightId": "RID48467",
		"synonyms": [
		  "left gastrocnemius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22557"
		  },
		  {
			"system": "SNOMED",
			"code": "723045002"
		  }
		]
	  },
	  {
		"radlexId": "RID2924",
		"description": "soleus muscle",
		"containedById": "RID2869",
		"leftId": "RID48470",
		"rightId": "RID48469",
		"synonyms": [
		  "musculus soleus",
		  "Musculus soleus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22542"
		  },
		  {
			"system": "SNOMED",
			"code": "78376008"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567"
		  }
		]
	  },
	  {
		"radlexId": "RID48469",
		"description": "right soleus muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2924",
		"leftId": "RID48470",
		"synonyms": [
		  "right soleus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22558"
		  }
		]
	  },
	  {
		"radlexId": "RID48470",
		"description": "left soleus muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2924",
		"rightId": "RID48469",
		"synonyms": [
		  "left soleus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22559"
		  }
		]
	  },
	  {
		"radlexId": "RID2912",
		"description": "tibialis anterior muscle",
		"containedById": "RID2869",
		"leftId": "RID48457",
		"rightId": "RID48456",
		"synonyms": [
		  "anterior tibial muscle",
		  "musculus tibialis anterior",
		  "musculus tibialis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22532"
		  },
		  {
			"system": "SNOMED",
			"code": "73508007"
		  }
		]
	  },
	  {
		"radlexId": "RID48456",
		"description": "right tibialis anterior muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2912",
		"leftId": "RID48457",
		"synonyms": [
		  "right tibialis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22544"
		  }
		]
	  },
	  {
		"radlexId": "RID48457",
		"description": "left tibialis anterior muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2912",
		"rightId": "RID48456",
		"synonyms": [
		  "left tibialis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22545"
		  }
		]
	  },
	  {
		"radlexId": "RID2927",
		"description": "tibialis posterior muscle",
		"containedById": "RID2869",
		"leftId": "RID48481",
		"rightId": "RID48480",
		"synonyms": [
		  "posterior tibial muscle",
		  "musculus tibialis posterior",
		  "musculus tibialis posterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51099"
		  },
		  {
			"system": "SNOMED",
			"code": "74318005"
		  }
		]
	  },
	  {
		"radlexId": "RID48480",
		"description": "right tibialis posterior",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2927",
		"leftId": "RID48481",
		"synonyms": [
		  "right tibialis posterior muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "65018"
		  }
		]
	  },
	  {
		"radlexId": "RID48481",
		"description": "left tibialis posterior",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2927",
		"rightId": "RID48480",
		"synonyms": [
		  "left tibialis posterior muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "65019"
		  }
		]
	  },
	  {
		"radlexId": "RID2918",
		"description": "peroneus longus muscle",
		"containedById": "RID2869",
		"leftId": "RID48484",
		"rightId": "RID48483",
		"synonyms": [
		  "fibularis longus muscle",
		  "musculus fibularis longus",
		  "musculus peroneus longus",
		  "musculus peroneus longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22539"
		  },
		  {
			"system": "SNOMED",
			"code": "59831009"
		  }
		]
	  },
	  {
		"radlexId": "RID48483",
		"description": "right peroneus longus muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2918",
		"leftId": "RID48484",
		"synonyms": [
		  "right fibularis longus",
		  "right fibularis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22552"
		  }
		]
	  },
	  {
		"radlexId": "RID48484",
		"description": "left peroneus longus muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2918",
		"rightId": "RID48483",
		"synonyms": [
		  "left fibularis longus",
		  "left fibularis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22553"
		  }
		]
	  },
	  {
		"radlexId": "RID2917",
		"description": "peroneus brevis muscle",
		"containedById": "RID2869",
		"leftId": "RID48486",
		"rightId": "RID48485",
		"synonyms": [
		  "fibularis brevis muscle",
		  "musculus peroneus brevis",
		  "musculus fibularis brevis",
		  "musculus fibularis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22540"
		  },
		  {
			"system": "SNOMED",
			"code": "60771004"
		  }
		]
	  },
	  {
		"radlexId": "RID48485",
		"description": "right peroneus brevis muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2917",
		"leftId": "RID48486",
		"synonyms": [
		  "right fibularis brevis",
		  "right fibularis brevis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22554"
		  }
		]
	  },
	  {
		"radlexId": "RID48486",
		"description": "left peroneus brevis muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2917",
		"rightId": "RID48485",
		"synonyms": [
		  "left fibularis brevis",
		  "left fibularis brevis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22555"
		  }
		]
	  },
	  {
		"radlexId": "RID2913",
		"description": "extensor digitorum longus muscle",
		"containedById": "RID2869",
		"leftId": "RID48462",
		"rightId": "RID48461",
		"codes": [
		  {
			"system": "FMA",
			"code": "22534"
		  },
		  {
			"system": "SNOMED",
			"code": "20497005"
		  }
		]
	  },
	  {
		"radlexId": "RID48461",
		"description": "right extensor digitorum longus muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2913",
		"leftId": "RID48462",
		"synonyms": [
		  "right extensor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22548"
		  }
		]
	  },
	  {
		"radlexId": "RID48462",
		"description": "left extensor digitorum longus muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2913",
		"rightId": "RID48461",
		"synonyms": [
		  "left extensor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22549"
		  }
		]
	  },
	  {
		"radlexId": "RID2914",
		"description": "extensor hallucis longus muscle",
		"containedById": "RID2869",
		"leftId": "RID48459",
		"rightId": "RID48458",
		"synonyms": [
		  "musculus extensor hallucis longus",
		  "Musculus extensor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22533"
		  },
		  {
			"system": "SNOMED",
			"code": "90012003"
		  }
		]
	  },
	  {
		"radlexId": "RID48458",
		"description": "right extensor hallucis longus muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2914",
		"leftId": "RID48459",
		"synonyms": [
		  "right extensor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22546"
		  }
		]
	  },
	  {
		"radlexId": "RID48459",
		"description": "left extensor hallucis longus muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2914",
		"rightId": "RID48458",
		"synonyms": [
		  "left extensor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22547"
		  }
		]
	  },
	  {
		"radlexId": "RID2929",
		"description": "flexor digitorum longus muscle",
		"containedById": "RID2869",
		"leftId": "RID48479",
		"rightId": "RID48478",
		"synonyms": [
		  "musculus flexor digitorum longus",
		  "Musculus flexor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51071"
		  },
		  {
			"system": "SNOMED",
			"code": "18010003"
		  }
		]
	  },
	  {
		"radlexId": "RID48478",
		"description": "right flexor digitorum longus muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2929",
		"leftId": "RID48479",
		"synonyms": [
		  "right flexor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "65016"
		  }
		]
	  },
	  {
		"radlexId": "RID48479",
		"description": "left flexor digitorum longus muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2929",
		"rightId": "RID48478",
		"synonyms": [
		  "left flexor digitorum longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "65017"
		  }
		]
	  },
	  {
		"radlexId": "RID2928",
		"description": "flexor hallucis longus muscle",
		"containedById": "RID2869",
		"leftId": "RID48477",
		"rightId": "RID48476",
		"synonyms": [
		  "musculus flexor hallucis longus",
		  "Musculus flexor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22593"
		  },
		  {
			"system": "SNOMED",
			"code": "471000"
		  }
		]
	  },
	  {
		"radlexId": "RID48476",
		"description": "right flexor hallucis longus muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2928",
		"leftId": "RID48477",
		"synonyms": [
		  "right flexor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "65014"
		  }
		]
	  },
	  {
		"radlexId": "RID48477",
		"description": "left flexor hallucis longus muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2928",
		"rightId": "RID48476",
		"synonyms": [
		  "left flexor hallucis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "65015"
		  }
		]
	  },
	  {
		"radlexId": "RID2915",
		"description": "peroneus tertius muscle",
		"containedById": "RID2869",
		"leftId": "RID48464",
		"rightId": "RID48463",
		"synonyms": [
		  "musculus fibularis tertius",
		  "fibularis tertius muscle",
		  "musculus peroneus tertius",
		  "Musculus peronaeus tertius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22538"
		  },
		  {
			"system": "SNOMED",
			"code": "48762002"
		  }
		]
	  },
	  {
		"radlexId": "RID48463",
		"description": "right peroneus tertius muscle",
		"containedById": "RID2869_RID5825",
		"unsidedId": "RID2915",
		"leftId": "RID48464",
		"synonyms": [
		  "right fibularis tertius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22550"
		  }
		]
	  },
	  {
		"radlexId": "RID48464",
		"description": "left peroneus tertius muscle",
		"containedById": "RID2869_RID5824",
		"unsidedId": "RID2915",
		"rightId": "RID48463",
		"synonyms": [
		  "left fibularis tertius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22551"
		  }
		]
	  },
	  {
		"radlexId": "RID3162",
		"description": "extensor digitorum brevis muscle",
		"containedById": "RID28829",
		"leftId": "RID3162_RID5824",
		"rightId": "RID3162_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "51140"
		  },
		  {
			"system": "SNOMED",
			"code": "87720008"
		  }
		]
	  },
	  {
		"radlexId": "RID3162_RID5824",
		"description": "left extensor digitorum brevis muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3162",
		"rightId": "RID3162_RID5825"
	  },
	  {
		"radlexId": "RID3162_RID5825",
		"description": "right extensor digitorum brevis muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3162",
		"leftId": "RID3162_RID5824"
	  },
	  {
		"radlexId": "RID3163",
		"description": "extensor hallucis brevis muscle",
		"containedById": "RID28829",
		"leftId": "RID3163_RID5824",
		"rightId": "RID3163_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "51141"
		  },
		  {
			"system": "SNOMED",
			"code": "38702002"
		  }
		]
	  },
	  {
		"radlexId": "RID3163_RID5824",
		"description": "left extensor hallucis brevis muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3163",
		"rightId": "RID3163_RID5825"
	  },
	  {
		"radlexId": "RID3163_RID5825",
		"description": "right extensor hallucis brevis muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3163",
		"leftId": "RID3163_RID5824"
	  },
	  {
		"radlexId": "RID3166",
		"description": "flexor digitorum brevis muscle",
		"containedById": "RID28829",
		"leftId": "RID3166_RID5824",
		"rightId": "RID3166_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "37450"
		  },
		  {
			"system": "SNOMED",
			"code": "79490000"
		  }
		]
	  },
	  {
		"radlexId": "RID3166_RID5824",
		"description": "left flexor digitorum brevis muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3166",
		"rightId": "RID3166_RID5825"
	  },
	  {
		"radlexId": "RID3166_RID5825",
		"description": "right flexor digitorum brevis muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3166",
		"leftId": "RID3166_RID5824"
	  },
	  {
		"radlexId": "RID3173",
		"description": "flexor hallucis brevis muscle",
		"containedById": "RID28829",
		"leftId": "RID3173_RID5824",
		"rightId": "RID3173_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "37449"
		  },
		  {
			"system": "SNOMED",
			"code": "22861002"
		  }
		]
	  },
	  {
		"radlexId": "RID3173_RID5824",
		"description": "left flexor hallucis brevis muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3173",
		"rightId": "RID3173_RID5825"
	  },
	  {
		"radlexId": "RID3173_RID5825",
		"description": "right flexor hallucis brevis muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3173",
		"leftId": "RID3173_RID5824"
	  },
	  {
		"radlexId": "RID3165",
		"description": "abductor hallucis muscle",
		"containedById": "RID28829",
		"leftId": "RID3165_RID5824",
		"rightId": "RID3165_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "37448"
		  },
		  {
			"system": "SNOMED",
			"code": "53240008"
		  }
		]
	  },
	  {
		"radlexId": "RID3165_RID5824",
		"description": "left abductor hallucis muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3165",
		"rightId": "RID3165_RID5825"
	  },
	  {
		"radlexId": "RID3165_RID5825",
		"description": "right abductor hallucis muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3165",
		"leftId": "RID3165_RID5824"
	  },
	  {
		"radlexId": "RID3176",
		"description": "adductor hallucis muscle",
		"containedById": "RID28829",
		"leftId": "RID3176_RID5824",
		"rightId": "RID3176_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "37454"
		  },
		  {
			"system": "SNOMED",
			"code": "8603005"
		  }
		]
	  },
	  {
		"radlexId": "RID3176_RID5824",
		"description": "left adductor hallucis muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3176",
		"rightId": "RID3176_RID5825"
	  },
	  {
		"radlexId": "RID3176_RID5825",
		"description": "right adductor hallucis muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3176",
		"leftId": "RID3176_RID5824"
	  },
	  {
		"radlexId": "RID3169",
		"description": "quadratus plantae muscle",
		"containedById": "RID28829",
		"leftId": "RID3169_RID5824",
		"rightId": "RID3169_RID5825",
		"synonyms": [
		  "flexor accessorius muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37452"
		  },
		  {
			"system": "SNOMED",
			"code": "234606004"
		  }
		]
	  },
	  {
		"radlexId": "RID3169_RID5824",
		"description": "left quadratus plantae muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3169",
		"rightId": "RID3169_RID5825"
	  },
	  {
		"radlexId": "RID3169_RID5825",
		"description": "right quadratus plantae muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3169",
		"leftId": "RID3169_RID5824"
	  },
	  {
		"radlexId": "RID3172",
		"description": "lumbrical muscle of foot",
		"containedById": "RID28829",
		"leftId": "RID3172_RID5824",
		"rightId": "RID3172_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "37453"
		  },
		  {
			"system": "SNOMED",
			"code": "13911000"
		  }
		]
	  },
	  {
		"radlexId": "RID3172_RID5824",
		"description": "left lumbrical muscle of foot",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3172",
		"rightId": "RID3172_RID5825"
	  },
	  {
		"radlexId": "RID3172_RID5825",
		"description": "right lumbrical muscle of foot",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3172",
		"leftId": "RID3172_RID5824"
	  },
	  {
		"radlexId": "RID3167",
		"description": "abductor digiti minimi muscle",
		"containedById": "RID28829",
		"leftId": "RID3167_RID5824",
		"rightId": "RID3167_RID5825",
		"synonyms": [
		  "abductor digiti quinti muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37451"
		  },
		  {
			"system": "SNOMED",
			"code": "10245000"
		  }
		]
	  },
	  {
		"radlexId": "RID3167_RID5824",
		"description": "left abductor digiti minimi muscle",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3167",
		"rightId": "RID3167_RID5825"
	  },
	  {
		"radlexId": "RID3167_RID5825",
		"description": "right abductor digiti minimi muscle",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3167",
		"leftId": "RID3167_RID5824"
	  },
	  {
		"radlexId": "RID3181",
		"description": "plantar interossei muscle of foot",
		"containedById": "RID28829",
		"leftId": "RID3181_RID5824",
		"rightId": "RID3181_RID5825",
		"synonyms": [
		  "plantar interosseous of foot",
		  "plantar interosseous muscle of foot"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37458"
		  },
		  {
			"system": "SNOMED",
			"code": "24176006"
		  }
		]
	  },
	  {
		"radlexId": "RID3181_RID5824",
		"description": "left plantar interossei muscle of foot",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3181",
		"rightId": "RID3181_RID5825"
	  },
	  {
		"radlexId": "RID3181_RID5825",
		"description": "right plantar interossei muscle of foot",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3181",
		"leftId": "RID3181_RID5824"
	  },
	  {
		"radlexId": "RID3182",
		"description": "dorsal interossei muscle of foot",
		"containedById": "RID28829",
		"leftId": "RID3182_RID5824",
		"rightId": "RID3182_RID5825",
		"synonyms": [
		  "dorsal interosseous of foot",
		  "dorsal interosseous muscle of foot"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37457"
		  },
		  {
			"system": "SNOMED",
			"code": "25872004"
		  }
		]
	  },
	  {
		"radlexId": "RID3182_RID5824",
		"description": "left dorsal interossei muscle of foot",
		"containedById": "RID28829_RID5824",
		"unsidedId": "RID3182",
		"rightId": "RID3182_RID5825"
	  },
	  {
		"radlexId": "RID3182_RID5825",
		"description": "right dorsal interossei muscle of foot",
		"containedById": "RID28829_RID5825",
		"unsidedId": "RID3182",
		"leftId": "RID3182_RID5824"
	  },
	  {
		"radlexId": "RID465",
		"description": "inguinal lymph node",
		"containedById": "RID2639",
		"leftId": "RID465_RID5824",
		"rightId": "RID465_RID5825",
		"synonyms": [
		  "groin lymph node",
		  "femoral lymph node",
		  "lymph node of groin"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "44226"
		  },
		  {
			"system": "SNOMED",
			"code": "8928004"
		  }
		]
	  },
	  {
		"radlexId": "RID465_RID5824",
		"description": "left inguinal lymph node",
		"containedById": "RID2639_RID5824",
		"unsidedId": "RID465",
		"rightId": "RID465_RID5825"
	  },
	  {
		"radlexId": "RID465_RID5825",
		"description": "right inguinal lymph node",
		"containedById": "RID2639_RID5825",
		"unsidedId": "RID465",
		"leftId": "RID465_RID5824"
	  },
	  {
		"radlexId": "RID1850",
		"description": "upper extremity",
		"containedById": "RID39569",
		"leftId": "RID1850_RID5824",
		"rightId": "RID1850_RID5825",
		"synonyms": [
		  "forequarter",
		  "ue"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7183"
		  },
		  {
			"system": "SNOMED",
			"code": "53120007"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800"
		  }
		]
	  },
	  {
		"radlexId": "RID1850_RID5824",
		"description": "left upper extremity",
		"containedById": "RID39569",
		"unsidedId": "RID1850",
		"rightId": "RID1850_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "80768000"
		  }
		]
	  },
	  {
		"radlexId": "RID1850_RID5825",
		"description": "right upper extremity",
		"containedById": "RID39569",
		"unsidedId": "RID1850",
		"leftId": "RID1850_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "6921000"
		  }
		]
	  },
	  {
		"radlexId": "RID39518",
		"description": "shoulder",
		"containedById": "RID1850",
		"leftId": "RID39518_RID5824",
		"rightId": "RID39518_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "25202"
		  },
		  {
			"system": "SNOMED",
			"code": "16982005"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800.750"
		  }
		]
	  },
	  {
		"radlexId": "RID39518_RID5824",
		"description": "left shoulder",
		"containedById": "RID1850_RID5824",
		"unsidedId": "RID39518",
		"rightId": "RID39518_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "91775009"
		  }
		]
	  },
	  {
		"radlexId": "RID39518_RID5825",
		"description": "right shoulder",
		"containedById": "RID1850_RID5825",
		"unsidedId": "RID39518",
		"leftId": "RID39518_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "91774008"
		  }
		]
	  },
	  {
		"radlexId": "RID1968",
		"description": "arm",
		"containedById": "RID1850",
		"leftId": "RID1968_RID5824",
		"rightId": "RID1968_RID5825",
		"synonyms": [
		  "upper limb l upper arm"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24890"
		  },
		  {
			"system": "SNOMED",
			"code": "53120007"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800.075"
		  }
		]
	  },
	  {
		"radlexId": "RID1968_RID5824",
		"description": "left arm",
		"containedById": "RID1850_RID5824",
		"unsidedId": "RID1968",
		"rightId": "RID1968_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "80768000"
		  }
		]
	  },
	  {
		"radlexId": "RID1968_RID5825",
		"description": "right arm",
		"containedById": "RID1850_RID5825",
		"unsidedId": "RID1968",
		"leftId": "RID1968_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "6921000"
		  }
		]
	  },
	  {
		"radlexId": "RID2010",
		"description": "elbow",
		"containedById": "RID1850",
		"leftId": "RID2010_RID5824",
		"rightId": "RID2010_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "24901"
		  },
		  {
			"system": "SNOMED",
			"code": "127949000"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800.420"
		  }
		]
	  },
	  {
		"radlexId": "RID2010_RID5824",
		"description": "left elbow",
		"containedById": "RID1850_RID5824",
		"unsidedId": "RID2010",
		"rightId": "RID2010_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "368148009"
		  }
		]
	  },
	  {
		"radlexId": "RID2010_RID5825",
		"description": "right elbow",
		"containedById": "RID1850_RID5825",
		"unsidedId": "RID2010",
		"leftId": "RID2010_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "368149001"
		  }
		]
	  },
	  {
		"radlexId": "RID2107",
		"description": "forearm",
		"containedById": "RID1850",
		"leftId": "RID2107_RID5824",
		"rightId": "RID2107_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "9663"
		  },
		  {
			"system": "SNOMED",
			"code": "14975008"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800.585"
		  }
		]
	  },
	  {
		"radlexId": "RID2107_RID5824",
		"description": "left forearm",
		"containedById": "RID1850_RID5824",
		"unsidedId": "RID2107",
		"rightId": "RID2107_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "66480008"
		  }
		]
	  },
	  {
		"radlexId": "RID2107_RID5825",
		"description": "right forearm",
		"containedById": "RID1850_RID5825",
		"unsidedId": "RID2107",
		"leftId": "RID2107_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "64262003"
		  }
		]
	  },
	  {
		"radlexId": "RID2177",
		"description": "wrist",
		"containedById": "RID1850",
		"leftId": "RID2177_RID5824",
		"rightId": "RID2177_RID5825",
		"synonyms": [
		  "carpus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "24922"
		  },
		  {
			"system": "SNOMED",
			"code": "8205005"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800.875"
		  },
		  {
			"system": "UMLS",
			"code": "C0043262"
		  }
		]
	  },
	  {
		"radlexId": "RID2177_RID5824",
		"description": "left wrist",
		"containedById": "RID1850_RID5824",
		"unsidedId": "RID2177",
		"rightId": "RID2177_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "5951000"
		  }
		]
	  },
	  {
		"radlexId": "RID2177_RID5825",
		"description": "right wrist",
		"containedById": "RID1850_RID5825",
		"unsidedId": "RID2177",
		"leftId": "RID2177_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "9736006"
		  }
		]
	  },
	  {
		"radlexId": "RID2318",
		"description": "hand",
		"containedById": "RID1850",
		"leftId": "RID2318_RID5824",
		"rightId": "RID2318_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "9712"
		  },
		  {
			"system": "SNOMED",
			"code": "85562004"
		  },
		  {
			"system": "MESH",
			"code": "A01.378.800.667"
		  }
		]
	  },
	  {
		"radlexId": "RID2318_RID5824",
		"description": "left hand",
		"containedById": "RID1850_RID5824",
		"unsidedId": "RID2318",
		"rightId": "RID2318_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "85151006"
		  }
		]
	  },
	  {
		"radlexId": "RID2318_RID5825",
		"description": "right hand",
		"containedById": "RID1850_RID5825",
		"unsidedId": "RID2318",
		"leftId": "RID2318_RID5824",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "78791008"
		  }
		]
	  },
	  {
		"radlexId": "RID38666",
		"description": "anterior compartment of arm",
		"containedById": "RID1968",
		"leftId": "RID39956",
		"rightId": "RID39955",
		"synonyms": [
		  "compartimentum brachii anterius",
		  "compartimentum brachii flexorum",
		  "compartimentum brachii flexorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37673"
		  },
		  {
			"system": "SNOMED",
			"code": "118512004"
		  }
		]
	  },
	  {
		"radlexId": "RID39955",
		"description": "anterior compartment of right arm",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID38666",
		"leftId": "RID39956",
		"codes": [
		  {
			"system": "FMA",
			"code": "37674"
		  }
		]
	  },
	  {
		"radlexId": "RID39956",
		"description": "anterior compartment of left arm",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID38666",
		"rightId": "RID39955",
		"codes": [
		  {
			"system": "FMA",
			"code": "37675"
		  }
		]
	  },
	  {
		"radlexId": "RID39957",
		"description": "posterior compartment of arm",
		"containedById": "RID1968",
		"leftId": "RID39959",
		"rightId": "RID39958",
		"synonyms": [
		  "compartimentum brachii extensorum",
		  "compartimentum brachii posterius",
		  "compartimentum brachii posterius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37676"
		  },
		  {
			"system": "SNOMED",
			"code": "118513009"
		  }
		]
	  },
	  {
		"radlexId": "RID39958",
		"description": "posterior compartment of right arm",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID39957",
		"leftId": "RID39959",
		"codes": [
		  {
			"system": "FMA",
			"code": "37677"
		  }
		]
	  },
	  {
		"radlexId": "RID39959",
		"description": "posterior compartment of left arm",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID39957",
		"rightId": "RID39958",
		"codes": [
		  {
			"system": "FMA",
			"code": "37678"
		  }
		]
	  },
	  {
		"radlexId": "RID2137",
		"description": "volar compartment of forearm",
		"containedById": "RID2107",
		"leftId": "RID2137_RID5824",
		"rightId": "RID2137_RID5825",
		"synonyms": [
		  "flexor-pronator forearm"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12255"
		  },
		  {
			"system": "SNOMED",
			"code": "118514003"
		  }
		]
	  },
	  {
		"radlexId": "RID2137_RID5824",
		"description": "left volar compartment of forearm",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2137",
		"rightId": "RID2137_RID5825"
	  },
	  {
		"radlexId": "RID2137_RID5825",
		"description": "right volar compartment of forearm",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2137",
		"leftId": "RID2137_RID5824"
	  },
	  {
		"radlexId": "RID2135",
		"description": "dorsal compartment of forearm",
		"containedById": "RID2107",
		"leftId": "RID2135_RID5824",
		"rightId": "RID2135_RID5825",
		"synonyms": [
		  "extensor compartment of forearm"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38411"
		  },
		  {
			"system": "SNOMED",
			"code": "118515002"
		  }
		]
	  },
	  {
		"radlexId": "RID2135_RID5824",
		"description": "left dorsal compartment of forearm",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2135",
		"rightId": "RID2135_RID5825"
	  },
	  {
		"radlexId": "RID2135_RID5825",
		"description": "right dorsal compartment of forearm",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2135",
		"leftId": "RID2135_RID5824"
	  },
	  {
		"radlexId": "RID1860",
		"description": "scapula",
		"containedById": "RID39518",
		"leftId": "RID39672",
		"rightId": "RID39671",
		"synonyms": [
		  "scap l shoulder blader"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13394"
		  },
		  {
			"system": "SNOMED",
			"code": "79601000"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.783"
		  }
		]
	  },
	  {
		"radlexId": "RID39671",
		"description": "right scapula",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1860",
		"leftId": "RID39672",
		"synonyms": [
		  "right shoulder blader"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13395"
		  },
		  {
			"system": "SNOMED",
			"code": "719628000"
		  }
		]
	  },
	  {
		"radlexId": "RID39672",
		"description": "left scapula",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1860",
		"rightId": "RID39671",
		"synonyms": [
		  "left shoulder blader"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13396"
		  },
		  {
			"system": "SNOMED",
			"code": "719627005"
		  }
		]
	  },
	  {
		"radlexId": "RID40098",
		"description": "body of scapula",
		"containedById": "RID39518",
		"leftId": "RID40100",
		"rightId": "RID40099",
		"partOfId": "RID1860",
		"synonyms": [
		  "scapular body"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13454"
		  },
		  {
			"system": "SNOMED",
			"code": "52900002"
		  }
		]
	  },
	  {
		"radlexId": "RID40099",
		"description": "body of right scapula",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID40098",
		"leftId": "RID40100",
		"partOfId": "RID39671",
		"synonyms": [
		  "right scapular body"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23223"
		  },
		  {
			"system": "SNOMED",
			"code": "719632006"
		  }
		]
	  },
	  {
		"radlexId": "RID40100",
		"description": "body of left scapula",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID40098",
		"rightId": "RID40099",
		"partOfId": "RID39672",
		"synonyms": [
		  "left scapular body"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23224"
		  },
		  {
			"system": "SNOMED",
			"code": "719631004"
		  }
		]
	  },
	  {
		"radlexId": "RID1909",
		"description": "glenoid labrum",
		"containedById": "RID1905",
		"leftId": "RID41026",
		"rightId": "RID41025",
		"partOfId": "RID1860",
		"synonyms": [
		  "labrum glenoidale scapulae",
		  "glenoid labrum of scapula",
		  "labrum glenoidale",
		  "labrum glenoidale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23290"
		  },
		  {
			"system": "SNOMED",
			"code": "86721001"
		  }
		]
	  },
	  {
		"radlexId": "RID41025",
		"description": "right glenoid labrum",
		"containedById": "RID42240",
		"unsidedId": "RID1909",
		"leftId": "RID41026",
		"partOfId": "RID39671",
		"codes": [
		  {
			"system": "FMA",
			"code": "23291"
		  }
		]
	  },
	  {
		"radlexId": "RID41026",
		"description": "left glenoid labrum",
		"containedById": "RID42241",
		"unsidedId": "RID1909",
		"rightId": "RID41025",
		"partOfId": "RID39672",
		"codes": [
		  {
			"system": "FMA",
			"code": "23292"
		  }
		]
	  },
	  {
		"radlexId": "RID1854",
		"description": "clavicle",
		"containedById": "RID39518",
		"leftId": "RID41741",
		"rightId": "RID41740",
		"synonyms": [
		  "clavicula"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13321"
		  },
		  {
			"system": "SNOMED",
			"code": "51299004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.227"
		  }
		]
	  },
	  {
		"radlexId": "RID41740",
		"description": "right clavicle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1854",
		"leftId": "RID41741",
		"codes": [
		  {
			"system": "FMA",
			"code": "13322"
		  },
		  {
			"system": "SNOMED",
			"code": "720616002"
		  }
		]
	  },
	  {
		"radlexId": "RID41741",
		"description": "left clavicle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1854",
		"rightId": "RID41740",
		"codes": [
		  {
			"system": "FMA",
			"code": "13323"
		  },
		  {
			"system": "SNOMED",
			"code": "720617006"
		  }
		]
	  },
	  {
		"radlexId": "RID1862",
		"description": "acromion",
		"containedById": "RID39518",
		"leftId": "RID40004",
		"rightId": "RID40003",
		"partOfId": "RID1860",
		"codes": [
		  {
			"system": "FMA",
			"code": "23260"
		  },
		  {
			"system": "SNOMED",
			"code": "31934006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.783.261"
		  },
		  {
			"system": "UMLS",
			"code": "C0001209"
		  }
		]
	  },
	  {
		"radlexId": "RID40003",
		"description": "right acromion",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1862",
		"leftId": "RID40004",
		"partOfId": "RID39671",
		"codes": [
		  {
			"system": "FMA",
			"code": "23261"
		  },
		  {
			"system": "SNOMED",
			"code": "719630003"
		  }
		]
	  },
	  {
		"radlexId": "RID40004",
		"description": "left acromion",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1862",
		"rightId": "RID40003",
		"partOfId": "RID39672",
		"codes": [
		  {
			"system": "FMA",
			"code": "23262"
		  },
		  {
			"system": "SNOMED",
			"code": "719629008"
		  }
		]
	  },
	  {
		"radlexId": "RID1863",
		"description": "coracoid process",
		"containedById": "RID39518",
		"leftId": "RID40026",
		"rightId": "RID40025",
		"partOfId": "RID1860",
		"synonyms": [
		  "coracoid",
		  "scapula coracoid process",
		  "processus coracoideus",
		  "processus coracoideus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13455"
		  },
		  {
			"system": "SNOMED",
			"code": "8931003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.783.356"
		  }
		]
	  },
	  {
		"radlexId": "RID40025",
		"description": "right coracoid process",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1863",
		"leftId": "RID40026",
		"partOfId": "RID39671",
		"codes": [
		  {
			"system": "FMA",
			"code": "23225"
		  },
		  {
			"system": "SNOMED",
			"code": "719634007"
		  }
		]
	  },
	  {
		"radlexId": "RID40026",
		"description": "left coracoid process",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1863",
		"rightId": "RID40025",
		"partOfId": "RID39672",
		"codes": [
		  {
			"system": "FMA",
			"code": "23226"
		  },
		  {
			"system": "SNOMED",
			"code": "719633001"
		  }
		]
	  },
	  {
		"radlexId": "RID1905",
		"description": "glenohumeral joint",
		"containedById": "RID39518",
		"leftId": "RID42241",
		"rightId": "RID42240",
		"synonyms": [
		  "shoulder joint",
		  "humeral joint",
		  "articulatio humeri",
		  "articulatio glenohumeralis",
		  "articulatio glenohumeralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25912"
		  },
		  {
			"system": "SNOMED",
			"code": "85537004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.748"
		  }
		]
	  },
	  {
		"radlexId": "RID42240",
		"description": "right glenohumeral joint",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1905",
		"leftId": "RID42241",
		"codes": [
		  {
			"system": "FMA",
			"code": "25927"
		  },
		  {
			"system": "SNOMED",
			"code": "720593001"
		  }
		]
	  },
	  {
		"radlexId": "RID42241",
		"description": "left glenohumeral joint",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1905",
		"rightId": "RID42240",
		"codes": [
		  {
			"system": "FMA",
			"code": "25929"
		  },
		  {
			"system": "SNOMED",
			"code": "720592006"
		  }
		]
	  },
	  {
		"radlexId": "RID1895",
		"description": "acromioclavicular joint",
		"containedById": "RID39518",
		"leftId": "RID42239",
		"rightId": "RID42238",
		"synonyms": [
		  "acromio-clavicular joint",
		  "AC joint",
		  "articulatio acromioclavicularis",
		  "articulatio acromioclavicularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25898"
		  },
		  {
			"system": "SNOMED",
			"code": "85856004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.032"
		  },
		  {
			"system": "UMLS",
			"code": "C0001208"
		  }
		]
	  },
	  {
		"radlexId": "RID42238",
		"description": "right acromioclavicular joint",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1895",
		"leftId": "RID42239",
		"codes": [
		  {
			"system": "FMA",
			"code": "25901"
		  },
		  {
			"system": "SNOMED",
			"code": "724204008"
		  }
		]
	  },
	  {
		"radlexId": "RID42239",
		"description": "left acromioclavicular joint",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1895",
		"rightId": "RID42238",
		"codes": [
		  {
			"system": "FMA",
			"code": "25902"
		  },
		  {
			"system": "SNOMED",
			"code": "724203002"
		  }
		]
	  },
	  {
		"radlexId": "RID1884",
		"description": "sternoclavicular joint",
		"containedById": "RID39518",
		"leftId": "RID42237",
		"rightId": "RID42236",
		"synonyms": [
		  "sterno-clavicular joint",
		  "articulatio sternoclavicularis",
		  "SC joint",
		  "Sternoklavikulargelenk"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25883"
		  },
		  {
			"system": "SNOMED",
			"code": "7844006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.781"
		  }
		]
	  },
	  {
		"radlexId": "RID42236",
		"description": "right sternoclavicular joint",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1884",
		"leftId": "RID42237",
		"codes": [
		  {
			"system": "FMA",
			"code": "25893"
		  },
		  {
			"system": "SNOMED",
			"code": "722725008"
		  }
		]
	  },
	  {
		"radlexId": "RID42237",
		"description": "left sternoclavicular joint",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1884",
		"rightId": "RID42236",
		"codes": [
		  {
			"system": "FMA",
			"code": "25895"
		  },
		  {
			"system": "SNOMED",
			"code": "722726009"
		  }
		]
	  },
	  {
		"radlexId": "RID1892",
		"description": "costoclavicular ligament",
		"containedById": "RID39518",
		"leftId": "RID1892_RID5824",
		"rightId": "RID1892_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "26014"
		  },
		  {
			"system": "SNOMED",
			"code": "368168003"
		  }
		]
	  },
	  {
		"radlexId": "RID1892_RID5824",
		"description": "left costoclavicular ligament",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1892",
		"rightId": "RID1892_RID5825"
	  },
	  {
		"radlexId": "RID1892_RID5825",
		"description": "right costoclavicular ligament",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1892",
		"leftId": "RID1892_RID5824"
	  },
	  {
		"radlexId": "RID1915",
		"description": "coracoacromial ligament",
		"containedById": "RID39518",
		"leftId": "RID40843",
		"rightId": "RID40842",
		"synonyms": [
		  "coraco-acromial ligament",
		  "ligamentum coracoacromiale",
		  "ligamentum coracoacromiale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "25943"
		  },
		  {
			"system": "SNOMED",
			"code": "69970002"
		  }
		]
	  },
	  {
		"radlexId": "RID40842",
		"description": "right coracoacromial ligament",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1915",
		"leftId": "RID40843",
		"synonyms": [
		  "right coraco-acromial ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "26002"
		  }
		]
	  },
	  {
		"radlexId": "RID40843",
		"description": "left coracoacromial ligament",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1915",
		"rightId": "RID40842",
		"synonyms": [
		  "left coraco-acromial ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "26003"
		  }
		]
	  },
	  {
		"radlexId": "RID1901",
		"description": "coracoclavicular ligament",
		"containedById": "RID39518",
		"leftId": "RID42243",
		"rightId": "RID42242",
		"synonyms": [
		  "ligamentum coracoclaviculare",
		  "Ligamentum coracoclaviculare"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "26029"
		  },
		  {
			"system": "SNOMED",
			"code": "40827000"
		  }
		]
	  },
	  {
		"radlexId": "RID42242",
		"description": "right coracoclavicular ligament",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1901",
		"leftId": "RID42243",
		"codes": [
		  {
			"system": "FMA",
			"code": "26036"
		  }
		]
	  },
	  {
		"radlexId": "RID42243",
		"description": "left coracoclavicular ligament",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1901",
		"rightId": "RID42242",
		"codes": [
		  {
			"system": "FMA",
			"code": "26037"
		  }
		]
	  },
	  {
		"radlexId": "RID1922",
		"description": "superior glenohumeral ligament",
		"containedById": "RID1905",
		"leftId": "RID40835",
		"rightId": "RID40834",
		"partOfId": "RID1916",
		"synonyms": [
		  "sGHL"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35436"
		  }
		]
	  },
	  {
		"radlexId": "RID40834",
		"description": "right superior glenohumeral ligament",
		"containedById": "RID42240",
		"unsidedId": "RID1922",
		"leftId": "RID40835",
		"partOfId": "RID1916",
		"codes": [
		  {
			"system": "FMA",
			"code": "35439"
		  }
		]
	  },
	  {
		"radlexId": "RID40835",
		"description": "left superior glenohumeral ligament",
		"containedById": "RID42241",
		"unsidedId": "RID1922",
		"rightId": "RID40834",
		"partOfId": "RID1916",
		"codes": [
		  {
			"system": "FMA",
			"code": "35440"
		  }
		]
	  },
	  {
		"radlexId": "RID1921",
		"description": "middle glenohumeral ligament",
		"containedById": "RID1905",
		"leftId": "RID40837",
		"rightId": "RID40836",
		"partOfId": "RID1916",
		"synonyms": [
		  "mGHL"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35437"
		  }
		]
	  },
	  {
		"radlexId": "RID40836",
		"description": "right middle glenohumeral ligament",
		"containedById": "RID42240",
		"unsidedId": "RID1921",
		"leftId": "RID40837",
		"partOfId": "RID1916",
		"codes": [
		  {
			"system": "FMA",
			"code": "35441"
		  }
		]
	  },
	  {
		"radlexId": "RID40837",
		"description": "left middle glenohumeral ligament",
		"containedById": "RID42241",
		"unsidedId": "RID1921",
		"rightId": "RID40836",
		"partOfId": "RID1916",
		"codes": [
		  {
			"system": "FMA",
			"code": "35442"
		  }
		]
	  },
	  {
		"radlexId": "RID1917",
		"description": "inferior glenohumeral ligament",
		"containedById": "RID1905",
		"leftId": "RID40839",
		"rightId": "RID40838",
		"partOfId": "RID1916",
		"synonyms": [
		  "iGHL"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35438"
		  }
		]
	  },
	  {
		"radlexId": "RID40838",
		"description": "right inferior glenohumeral ligament",
		"containedById": "RID42240",
		"unsidedId": "RID1917",
		"leftId": "RID40839",
		"partOfId": "RID1916",
		"codes": [
		  {
			"system": "FMA",
			"code": "35443"
		  }
		]
	  },
	  {
		"radlexId": "RID40839",
		"description": "left inferior glenohumeral ligament",
		"containedById": "RID42241",
		"unsidedId": "RID1917",
		"rightId": "RID40838",
		"partOfId": "RID1916",
		"codes": [
		  {
			"system": "FMA",
			"code": "35444"
		  }
		]
	  },
	  {
		"radlexId": "RID1916",
		"description": "glenohumeral ligament",
		"containedById": "RID1905",
		"leftId": "RID1916_RID5824",
		"rightId": "RID1916_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "34961"
		  },
		  {
			"system": "SNOMED",
			"code": "54349001"
		  }
		]
	  },
	  {
		"radlexId": "RID1916_RID5824",
		"description": "left glenohumeral ligament",
		"containedById": "RID42241",
		"unsidedId": "RID1916",
		"rightId": "RID1916_RID5825"
	  },
	  {
		"radlexId": "RID1916_RID5825",
		"description": "right glenohumeral ligament",
		"containedById": "RID42240",
		"unsidedId": "RID1916",
		"leftId": "RID1916_RID5824"
	  },
	  {
		"radlexId": "RID1971",
		"description": "humerus",
		"containedById": "RID1968",
		"leftId": "RID41946",
		"rightId": "RID41945",
		"codes": [
		  {
			"system": "FMA",
			"code": "13303"
		  },
		  {
			"system": "SNOMED",
			"code": "85050009"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.090.400"
		  }
		]
	  },
	  {
		"radlexId": "RID41945",
		"description": "right humerus",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID1971",
		"leftId": "RID41946",
		"codes": [
		  {
			"system": "FMA",
			"code": "23130"
		  },
		  {
			"system": "SNOMED",
			"code": "719461004"
		  }
		]
	  },
	  {
		"radlexId": "RID41946",
		"description": "left humerus",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID1971",
		"rightId": "RID41945",
		"codes": [
		  {
			"system": "FMA",
			"code": "23131"
		  },
		  {
			"system": "SNOMED",
			"code": "719460003"
		  }
		]
	  },
	  {
		"radlexId": "RID29093",
		"description": "head of humerus",
		"containedById": "RID1905",
		"leftId": "RID39922",
		"rightId": "RID39921",
		"partOfId": "RID1971",
		"synonyms": [
		  "humeral head",
		  "caput humeri",
		  "caput humeri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13304"
		  },
		  {
			"system": "SNOMED",
			"code": "81965001"
		  }
		]
	  },
	  {
		"radlexId": "RID39921",
		"description": "head of right humerus",
		"containedById": "RID42240",
		"unsidedId": "RID29093",
		"leftId": "RID39922",
		"partOfId": "RID41945",
		"synonyms": [
		  "right humeral head"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13306"
		  }
		]
	  },
	  {
		"radlexId": "RID39922",
		"description": "head of left humerus",
		"containedById": "RID42241",
		"unsidedId": "RID29093",
		"rightId": "RID39921",
		"partOfId": "RID41946",
		"synonyms": [
		  "left humeral head"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13307"
		  }
		]
	  },
	  {
		"radlexId": "RID1972",
		"description": "anatomical neck of humerus",
		"containedById": "RID1905",
		"leftId": "RID1972_RID5824",
		"rightId": "RID1972_RID5825",
		"partOfId": "RID1971",
		"codes": [
		  {
			"system": "FMA",
			"code": "23356"
		  },
		  {
			"system": "SNOMED",
			"code": "181936006"
		  }
		]
	  },
	  {
		"radlexId": "RID1972_RID5824",
		"description": "left anatomical neck of humerus",
		"containedById": "RID42241",
		"unsidedId": "RID1972",
		"rightId": "RID1972_RID5825",
		"partOfId": "RID41946",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764490005"
		  }
		]
	  },
	  {
		"radlexId": "RID1972_RID5825",
		"description": "right anatomical neck of humerus",
		"containedById": "RID42240",
		"unsidedId": "RID1972",
		"leftId": "RID1972_RID5824",
		"partOfId": "RID41945",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "764491009"
		  }
		]
	  },
	  {
		"radlexId": "RID1973",
		"description": "greater tuberosity of humerus",
		"containedById": "RID1905",
		"leftId": "RID1973_RID5824",
		"rightId": "RID1973_RID5825",
		"partOfId": "RID1971",
		"synonyms": [
		  "greater tubercle",
		  "teres minor insertion",
		  "tuberculum majus",
		  "greater tubercle of humerus",
		  "tuberculum majus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23390"
		  },
		  {
			"system": "SNOMED",
			"code": "58947000"
		  }
		]
	  },
	  {
		"radlexId": "RID1973_RID5824",
		"description": "left greater tuberosity of humerus",
		"containedById": "RID42241",
		"unsidedId": "RID1973",
		"rightId": "RID1973_RID5825",
		"partOfId": "RID41946",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "758642003"
		  }
		]
	  },
	  {
		"radlexId": "RID1973_RID5825",
		"description": "right greater tuberosity of humerus",
		"containedById": "RID42240",
		"unsidedId": "RID1973",
		"leftId": "RID1973_RID5824",
		"partOfId": "RID41945",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "758643008"
		  }
		]
	  },
	  {
		"radlexId": "RID1978",
		"description": "lesser tuberosity of humerus",
		"containedById": "RID1905",
		"leftId": "RID1978_RID5824",
		"rightId": "RID1978_RID5825",
		"partOfId": "RID1971",
		"synonyms": [
		  "lesser tubercle",
		  "tuberculum minus",
		  "subscapularis attachment",
		  "subscapularis insertion",
		  "lesser tubercle of humerus",
		  "tuberculum minus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23393"
		  },
		  {
			"system": "SNOMED",
			"code": "4621004"
		  }
		]
	  },
	  {
		"radlexId": "RID1978_RID5824",
		"description": "left lesser tuberosity of humerus",
		"containedById": "RID42241",
		"unsidedId": "RID1978",
		"rightId": "RID1978_RID5825",
		"partOfId": "RID41946"
	  },
	  {
		"radlexId": "RID1978_RID5825",
		"description": "right lesser tuberosity of humerus",
		"containedById": "RID42240",
		"unsidedId": "RID1978",
		"leftId": "RID1978_RID5824",
		"partOfId": "RID41945"
	  },
	  {
		"radlexId": "RID41789",
		"description": "diaphysis of humerus",
		"containedById": "RID1968",
		"leftId": "RID41791",
		"rightId": "RID41790",
		"partOfId": "RID1971",
		"synonyms": [
		  "corpus humeri",
		  "humeral diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13305"
		  },
		  {
			"system": "SNOMED",
			"code": "20760004"
		  }
		]
	  },
	  {
		"radlexId": "RID41790",
		"description": "diaphysis of right humerus",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID41789",
		"leftId": "RID41791",
		"partOfId": "RID41945",
		"synonyms": [
		  "right humeral diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61588"
		  },
		  {
			"system": "SNOMED",
			"code": "761920005"
		  }
		]
	  },
	  {
		"radlexId": "RID41791",
		"description": "diaphysis of left humerus",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID41789",
		"rightId": "RID41790",
		"partOfId": "RID41946",
		"synonyms": [
		  "left humeral diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61589"
		  },
		  {
			"system": "SNOMED",
			"code": "761919004"
		  }
		]
	  },
	  {
		"radlexId": "RID1944",
		"description": "tendon of long head of biceps brachii",
		"containedById": "RID39518",
		"leftId": "RID1944_RID5824",
		"rightId": "RID1944_RID5825",
		"partOfId": "RID1996",
		"codes": [
		  {
			"system": "FMA",
			"code": "38153"
		  },
		  {
			"system": "SNOMED",
			"code": "245102005"
		  }
		]
	  },
	  {
		"radlexId": "RID1944_RID5824",
		"description": "left tendon of long head of biceps brachii",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1944",
		"rightId": "RID1944_RID5825",
		"partOfId": "RID43079",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "736623000"
		  }
		]
	  },
	  {
		"radlexId": "RID1944_RID5825",
		"description": "right tendon of long head of biceps brachii",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1944",
		"leftId": "RID1944_RID5824",
		"partOfId": "RID43078"
	  },
	  {
		"radlexId": "RID1945",
		"description": "tendon of short head of biceps brachii",
		"containedById": "RID39518",
		"leftId": "RID1945_RID5824",
		"rightId": "RID1945_RID5825",
		"partOfId": "RID1996",
		"codes": [
		  {
			"system": "FMA",
			"code": "38154"
		  }
		]
	  },
	  {
		"radlexId": "RID1945_RID5824",
		"description": "left tendon of short head of biceps brachii",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1945",
		"rightId": "RID1945_RID5825",
		"partOfId": "RID43079"
	  },
	  {
		"radlexId": "RID1945_RID5825",
		"description": "right tendon of short head of biceps brachii",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1945",
		"leftId": "RID1945_RID5824",
		"partOfId": "RID43078"
	  },
	  {
		"radlexId": "RID1953",
		"description": "supraspinatus tendon",
		"containedById": "RID1905",
		"leftId": "RID41117",
		"rightId": "RID41116",
		"partOfId": "RID1941",
		"synonyms": [
		  "tendon of supraspinatus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37075"
		  },
		  {
			"system": "SNOMED",
			"code": "5580002"
		  }
		]
	  },
	  {
		"radlexId": "RID41116",
		"description": "right supraspinatus tendon",
		"containedById": "RID42240",
		"unsidedId": "RID1953",
		"leftId": "RID41117",
		"partOfId": "RID43061",
		"synonyms": [
		  "tendon of right supraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38370"
		  }
		]
	  },
	  {
		"radlexId": "RID41117",
		"description": "left supraspinatus tendon",
		"containedById": "RID42241",
		"unsidedId": "RID1953",
		"rightId": "RID41116",
		"partOfId": "RID43062",
		"synonyms": [
		  "tendon of left supraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38371"
		  }
		]
	  },
	  {
		"radlexId": "RID1949",
		"description": "infraspinatus tendon",
		"containedById": "RID1905",
		"leftId": "RID41125",
		"rightId": "RID41124",
		"partOfId": "RID1939",
		"synonyms": [
		  "tendon of infraspinatus muscle",
		  "tendon of infraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37076"
		  },
		  {
			"system": "SNOMED",
			"code": "59713001"
		  }
		]
	  },
	  {
		"radlexId": "RID41124",
		"description": "right infraspinatus tendon",
		"containedById": "RID42240",
		"unsidedId": "RID1949",
		"leftId": "RID41125",
		"partOfId": "RID43063",
		"synonyms": [
		  "tendon of right infraspinatus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38537"
		  }
		]
	  },
	  {
		"radlexId": "RID41125",
		"description": "left infraspinatus tendon",
		"containedById": "RID42241",
		"unsidedId": "RID1949",
		"rightId": "RID41124",
		"partOfId": "RID43064",
		"synonyms": [
		  "tendon of left infraspinatus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38538"
		  }
		]
	  },
	  {
		"radlexId": "RID1955",
		"description": "teres minor tendon",
		"containedById": "RID1905",
		"leftId": "RID41101",
		"rightId": "RID41100",
		"partOfId": "RID1942",
		"synonyms": [
		  "tendon of teres minor muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37078"
		  },
		  {
			"system": "SNOMED",
			"code": "700027005"
		  }
		]
	  },
	  {
		"radlexId": "RID41100",
		"description": "right teres minor tendon",
		"containedById": "RID42240",
		"unsidedId": "RID1955",
		"leftId": "RID41101",
		"partOfId": "RID43067",
		"synonyms": [
		  "tendon of right teres minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38796"
		  }
		]
	  },
	  {
		"radlexId": "RID41101",
		"description": "left teres minor tendon",
		"containedById": "RID42241",
		"unsidedId": "RID1955",
		"rightId": "RID41100",
		"partOfId": "RID43068",
		"synonyms": [
		  "tendon of left teres minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38797"
		  }
		]
	  },
	  {
		"radlexId": "RID1951",
		"description": "subscapularis tendon",
		"containedById": "RID1905",
		"leftId": "RID41109",
		"rightId": "RID41108",
		"partOfId": "RID1940",
		"synonyms": [
		  "tendon of subscapularis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37077"
		  },
		  {
			"system": "SNOMED",
			"code": "80108009"
		  }
		]
	  },
	  {
		"radlexId": "RID41108",
		"description": "right subscapularis tendon",
		"containedById": "RID42240",
		"unsidedId": "RID1951",
		"leftId": "RID41109",
		"partOfId": "RID43069",
		"synonyms": [
		  "tendon of right subscapularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38771"
		  }
		]
	  },
	  {
		"radlexId": "RID41109",
		"description": "left subscapularis tendon",
		"containedById": "RID42241",
		"unsidedId": "RID1951",
		"rightId": "RID41108",
		"partOfId": "RID43070",
		"synonyms": [
		  "tendon of left subscapularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38772"
		  }
		]
	  },
	  {
		"radlexId": "RID1985",
		"description": "medial epicondyle of humerus",
		"containedById": "RID2011",
		"leftId": "RID1985_RID5824",
		"rightId": "RID1985_RID5825",
		"partOfId": "RID1971",
		"codes": [
		  {
			"system": "FMA",
			"code": "32864"
		  },
		  {
			"system": "SNOMED",
			"code": "31167009"
		  }
		]
	  },
	  {
		"radlexId": "RID1985_RID5824",
		"description": "left medial epicondyle of humerus",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID1985",
		"rightId": "RID1985_RID5825",
		"partOfId": "RID41946"
	  },
	  {
		"radlexId": "RID1985_RID5825",
		"description": "right medial epicondyle of humerus",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID1985",
		"leftId": "RID1985_RID5824",
		"partOfId": "RID41945"
	  },
	  {
		"radlexId": "RID1984",
		"description": "lateral epicondyle of humerus",
		"containedById": "RID2011",
		"leftId": "RID1984_RID5824",
		"rightId": "RID1984_RID5825",
		"partOfId": "RID1971",
		"codes": [
		  {
			"system": "FMA",
			"code": "23442"
		  },
		  {
			"system": "SNOMED",
			"code": "73451009"
		  }
		]
	  },
	  {
		"radlexId": "RID1984_RID5824",
		"description": "left lateral epicondyle of humerus",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID1984",
		"rightId": "RID1984_RID5825",
		"partOfId": "RID41946"
	  },
	  {
		"radlexId": "RID1984_RID5825",
		"description": "right lateral epicondyle of humerus",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID1984",
		"leftId": "RID1984_RID5824",
		"partOfId": "RID41945"
	  },
	  {
		"radlexId": "RID1987",
		"description": "capitellum of humerus",
		"containedById": "RID2011",
		"leftId": "RID1987_RID5824",
		"rightId": "RID1987_RID5825",
		"partOfId": "RID1971",
		"synonyms": [
		  "capitulum humeri",
		  "capitulum of humerus",
		  "humeral capitulum",
		  "Capitulum humeri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23373"
		  },
		  {
			"system": "SNOMED",
			"code": "53978004"
		  }
		]
	  },
	  {
		"radlexId": "RID1987_RID5824",
		"description": "left capitellum of humerus",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID1987",
		"rightId": "RID1987_RID5825",
		"partOfId": "RID41946"
	  },
	  {
		"radlexId": "RID1987_RID5825",
		"description": "right capitellum of humerus",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID1987",
		"leftId": "RID1987_RID5824",
		"partOfId": "RID41945"
	  },
	  {
		"radlexId": "RID1990",
		"description": "trochlea of humerus",
		"containedById": "RID2011",
		"leftId": "RID39784",
		"rightId": "RID39783",
		"partOfId": "RID1971",
		"synonyms": [
		  "trochlea humeri",
		  "humeral trochlea",
		  "Trochlea humeri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23370"
		  },
		  {
			"system": "SNOMED",
			"code": "89905001"
		  }
		]
	  },
	  {
		"radlexId": "RID39783",
		"description": "trochlea of right humerus",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID1990",
		"leftId": "RID39784",
		"partOfId": "RID41945",
		"synonyms": [
		  "right humeral trochlea"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23371"
		  }
		]
	  },
	  {
		"radlexId": "RID39784",
		"description": "trochlea of left humerus",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID1990",
		"rightId": "RID39783",
		"partOfId": "RID41946",
		"synonyms": [
		  "left humeral trochlea"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23372"
		  }
		]
	  },
	  {
		"radlexId": "RID2011",
		"description": "elbow joint",
		"containedById": "RID2010",
		"leftId": "RID2011_RID5824",
		"rightId": "RID2011_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "35289"
		  },
		  {
			"system": "SNOMED",
			"code": "16953009"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.290"
		  },
		  {
			"system": "UMLS",
			"code": "C0013770"
		  }
		]
	  },
	  {
		"radlexId": "RID2011_RID5824",
		"description": "left elbow joint",
		"containedById": "RID2010_RID5824",
		"unsidedId": "RID2011",
		"rightId": "RID2011_RID5825"
	  },
	  {
		"radlexId": "RID2011_RID5825",
		"description": "right elbow joint",
		"containedById": "RID2010_RID5825",
		"unsidedId": "RID2011",
		"leftId": "RID2011_RID5824"
	  },
	  {
		"radlexId": "RID2086",
		"description": "bicipitoradial bursa",
		"containedById": "RID2010",
		"leftId": "RID2086_RID5824",
		"rightId": "RID2086_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "42281"
		  },
		  {
			"system": "SNOMED",
			"code": "65618009"
		  }
		]
	  },
	  {
		"radlexId": "RID2086_RID5824",
		"description": "left bicipitoradial bursa",
		"containedById": "RID2010_RID5824",
		"unsidedId": "RID2086",
		"rightId": "RID2086_RID5825"
	  },
	  {
		"radlexId": "RID2086_RID5825",
		"description": "right bicipitoradial bursa",
		"containedById": "RID2010_RID5825",
		"unsidedId": "RID2086",
		"leftId": "RID2086_RID5824"
	  },
	  {
		"radlexId": "RID2068",
		"description": "common extensor tendon",
		"containedById": "RID2010",
		"leftId": "RID2068_RID5824",
		"rightId": "RID2068_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "326751"
		  },
		  {
			"system": "SNOMED",
			"code": "1052260001"
		  }
		]
	  },
	  {
		"radlexId": "RID2068_RID5824",
		"description": "left common extensor tendon",
		"containedById": "RID2010_RID5824",
		"unsidedId": "RID2068",
		"rightId": "RID2068_RID5825"
	  },
	  {
		"radlexId": "RID2068_RID5825",
		"description": "right common extensor tendon",
		"containedById": "RID2010_RID5825",
		"unsidedId": "RID2068",
		"leftId": "RID2068_RID5824"
	  },
	  {
		"radlexId": "RID2044",
		"description": "radial collateral ligament of elbow",
		"containedById": "RID2011",
		"leftId": "RID2044_RID5824",
		"rightId": "RID2044_RID5825",
		"synonyms": [
		  "lateral collateral ligament of elbow joint"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38866"
		  },
		  {
			"system": "SNOMED",
			"code": "56399000"
		  }
		]
	  },
	  {
		"radlexId": "RID2044_RID5824",
		"description": "left radial collateral ligament of elbow",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID2044",
		"rightId": "RID2044_RID5825"
	  },
	  {
		"radlexId": "RID2044_RID5825",
		"description": "right radial collateral ligament of elbow",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID2044",
		"leftId": "RID2044_RID5824"
	  },
	  {
		"radlexId": "RID2048",
		"description": "annular ligament of radius",
		"containedById": "RID2011",
		"leftId": "RID2048_RID5824",
		"rightId": "RID2048_RID5825",
		"synonyms": [
		  "orbicular ligament",
		  "ligamentum anulare radii",
		  "ligamentum anulare radii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38872"
		  },
		  {
			"system": "SNOMED",
			"code": "113245003"
		  }
		]
	  },
	  {
		"radlexId": "RID2048_RID5824",
		"description": "left annular ligament of radius",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID2048",
		"rightId": "RID2048_RID5825"
	  },
	  {
		"radlexId": "RID2048_RID5825",
		"description": "right annular ligament of radius",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID2048",
		"leftId": "RID2048_RID5824"
	  },
	  {
		"radlexId": "RID2035",
		"description": "ulnar collateral ligament of elbow",
		"containedById": "RID2011",
		"leftId": "RID40855",
		"rightId": "RID40856",
		"synonyms": [
		  "medial ulnar collateral ligament",
		  "ligamentum collaterale ulnare",
		  "medial collateral ligament of elbow joint",
		  "ligamentum collaterale ulnare"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38869"
		  },
		  {
			"system": "SNOMED",
			"code": "113244004"
		  }
		]
	  },
	  {
		"radlexId": "RID40856",
		"description": "ulnar collateral ligament of right elbow",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID2035",
		"leftId": "RID40855",
		"codes": [
		  {
			"system": "FMA",
			"code": "38870"
		  }
		]
	  },
	  {
		"radlexId": "RID40855",
		"description": "ulnar collateral ligament of left elbow",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID2035",
		"rightId": "RID40856",
		"codes": [
		  {
			"system": "FMA",
			"code": "38871"
		  }
		]
	  },
	  {
		"radlexId": "RID2109",
		"description": "radius",
		"containedById": "RID2107",
		"leftId": "RID43019",
		"rightId": "RID43018",
		"codes": [
		  {
			"system": "FMA",
			"code": "23463"
		  },
		  {
			"system": "SNOMED",
			"code": "62413002"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.090.700"
		  }
		]
	  },
	  {
		"radlexId": "RID43018",
		"description": "right radius",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2109",
		"leftId": "RID43019",
		"codes": [
		  {
			"system": "FMA",
			"code": "23464"
		  },
		  {
			"system": "SNOMED",
			"code": "719465008"
		  }
		]
	  },
	  {
		"radlexId": "RID43019",
		"description": "left radius",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2109",
		"rightId": "RID43018",
		"codes": [
		  {
			"system": "FMA",
			"code": "23465"
		  },
		  {
			"system": "SNOMED",
			"code": "719464007"
		  }
		]
	  },
	  {
		"radlexId": "RID28590",
		"description": "head of radius",
		"containedById": "RID2011",
		"leftId": "RID28590_RID5824",
		"rightId": "RID28590_RID5825",
		"partOfId": "RID2109",
		"synonyms": [
		  "caput radii",
		  "radial head",
		  "caput radii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33773"
		  },
		  {
			"system": "SNOMED",
			"code": "50184001"
		  }
		]
	  },
	  {
		"radlexId": "RID28590_RID5824",
		"description": "left head of radius",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID28590",
		"rightId": "RID28590_RID5825",
		"partOfId": "RID43019"
	  },
	  {
		"radlexId": "RID28590_RID5825",
		"description": "right head of radius",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID28590",
		"leftId": "RID28590_RID5824",
		"partOfId": "RID43018"
	  },
	  {
		"radlexId": "RID39355",
		"description": "diaphysis of radius",
		"containedById": "RID2107",
		"leftId": "RID41793",
		"rightId": "RID41792",
		"partOfId": "RID2109",
		"synonyms": [
		  "corpus radii",
		  "radial diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33782"
		  },
		  {
			"system": "SNOMED",
			"code": "47728000"
		  }
		]
	  },
	  {
		"radlexId": "RID41792",
		"description": "diaphysis of right radius",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID39355",
		"leftId": "RID41793",
		"partOfId": "RID43018",
		"synonyms": [
		  "right radial diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33783"
		  },
		  {
			"system": "SNOMED",
			"code": "758661004"
		  }
		]
	  },
	  {
		"radlexId": "RID41793",
		"description": "diaphysis of left radius",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID39355",
		"rightId": "RID41792",
		"partOfId": "RID43019",
		"synonyms": [
		  "left radial diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33784"
		  },
		  {
			"system": "SNOMED",
			"code": "758660003"
		  }
		]
	  },
	  {
		"radlexId": "RID2113",
		"description": "styloid process of radius",
		"containedById": "RID2202",
		"leftId": "RID42723",
		"rightId": "RID42722",
		"partOfId": "RID2109",
		"synonyms": [
		  "processus styloideus radii",
		  "Processus styloideus radii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23524"
		  },
		  {
			"system": "SNOMED",
			"code": "21754008"
		  }
		]
	  },
	  {
		"radlexId": "RID42722",
		"description": "styloid process of right radius",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2113",
		"leftId": "RID42723",
		"partOfId": "RID43018",
		"codes": [
		  {
			"system": "FMA",
			"code": "23525"
		  }
		]
	  },
	  {
		"radlexId": "RID42723",
		"description": "styloid process of left radius",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2113",
		"rightId": "RID42722",
		"partOfId": "RID43019",
		"codes": [
		  {
			"system": "FMA",
			"code": "23526"
		  }
		]
	  },
	  {
		"radlexId": "RID2119",
		"description": "ulna",
		"containedById": "RID2107",
		"leftId": "RID42721",
		"rightId": "RID42720",
		"codes": [
		  {
			"system": "FMA",
			"code": "23466"
		  },
		  {
			"system": "SNOMED",
			"code": "23416004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.090.850"
		  }
		]
	  },
	  {
		"radlexId": "RID42720",
		"description": "right ulna",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2119",
		"leftId": "RID42721",
		"codes": [
		  {
			"system": "FMA",
			"code": "23467"
		  },
		  {
			"system": "SNOMED",
			"code": "719463001"
		  }
		]
	  },
	  {
		"radlexId": "RID42721",
		"description": "left ulna",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2119",
		"rightId": "RID42720",
		"codes": [
		  {
			"system": "FMA",
			"code": "23468"
		  },
		  {
			"system": "SNOMED",
			"code": "719462006"
		  }
		]
	  },
	  {
		"radlexId": "RID2125",
		"description": "coronoid process of ulna",
		"containedById": "RID2107",
		"leftId": "RID43007",
		"rightId": "RID43006",
		"partOfId": "RID2119",
		"synonyms": [
		  "processus coronoideus ulnae",
		  "processus coronoideus ulnae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23616"
		  },
		  {
			"system": "SNOMED",
			"code": "27807007"
		  }
		]
	  },
	  {
		"radlexId": "RID43006",
		"description": "coranoid process of right ulna",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2125",
		"leftId": "RID43007",
		"partOfId": "RID42720",
		"synonyms": [
		  "right coronoid process"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23629"
		  },
		  {
			"system": "SNOMED",
			"code": "719618009"
		  }
		]
	  },
	  {
		"radlexId": "RID43007",
		"description": "coranoid process of left ulna",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2125",
		"rightId": "RID43006",
		"partOfId": "RID42721",
		"synonyms": [
		  "left coronoid process"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23630"
		  },
		  {
			"system": "SNOMED",
			"code": "719617004"
		  }
		]
	  },
	  {
		"radlexId": "RID39681",
		"description": "olecranon",
		"containedById": "RID2011",
		"leftId": "RID39683",
		"rightId": "RID39682",
		"partOfId": "RID2119",
		"synonyms": [
		  "olecranon process"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "39795"
		  },
		  {
			"system": "SNOMED",
			"code": "371504003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.087.090.850.600"
		  }
		]
	  },
	  {
		"radlexId": "RID39682",
		"description": "right olecranon",
		"containedById": "RID2011_RID5825",
		"unsidedId": "RID39681",
		"leftId": "RID39683",
		"partOfId": "RID42720",
		"codes": [
		  {
			"system": "FMA",
			"code": "33752"
		  },
		  {
			"system": "SNOMED",
			"code": "719620007"
		  }
		]
	  },
	  {
		"radlexId": "RID39683",
		"description": "left olecranon",
		"containedById": "RID2011_RID5824",
		"unsidedId": "RID39681",
		"rightId": "RID39682",
		"partOfId": "RID42721",
		"codes": [
		  {
			"system": "FMA",
			"code": "33753"
		  },
		  {
			"system": "SNOMED",
			"code": "719619001"
		  }
		]
	  },
	  {
		"radlexId": "RID41794",
		"description": "diaphysis of ulna",
		"containedById": "RID2107",
		"leftId": "RID41796",
		"rightId": "RID41795",
		"partOfId": "RID2119",
		"synonyms": [
		  "ulnar diaphysis",
		  "corpus ulnae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33760"
		  },
		  {
			"system": "SNOMED",
			"code": "21133008"
		  }
		]
	  },
	  {
		"radlexId": "RID41795",
		"description": "diaphysis of right ulna",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID41794",
		"leftId": "RID41796",
		"partOfId": "RID42720",
		"synonyms": [
		  "right ulnar diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33761"
		  },
		  {
			"system": "SNOMED",
			"code": "719463001"
		  }
		]
	  },
	  {
		"radlexId": "RID41796",
		"description": "diaphysis of left ulna",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID41794",
		"rightId": "RID41795",
		"partOfId": "RID42721",
		"synonyms": [
		  "left ulnar diaphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "33762"
		  },
		  {
			"system": "SNOMED",
			"code": "719621006"
		  }
		]
	  },
	  {
		"radlexId": "RID42286",
		"description": "head of ulna",
		"containedById": "RID2202",
		"leftId": "RID42286_RID5824",
		"rightId": "RID42286_RID5825",
		"partOfId": "RID2119",
		"synonyms": [
		  "ulnar head"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "299863"
		  },
		  {
			"system": "SNOMED",
			"code": "69472000"
		  }
		]
	  },
	  {
		"radlexId": "RID42286_RID5824",
		"description": "left head of ulna",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID42286",
		"rightId": "RID42286_RID5825",
		"partOfId": "RID42721"
	  },
	  {
		"radlexId": "RID42286_RID5825",
		"description": "right head of ulna",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID42286",
		"leftId": "RID42286_RID5824",
		"partOfId": "RID42720"
	  },
	  {
		"radlexId": "RID2132",
		"description": "styloid process of ulna",
		"containedById": "RID2202",
		"leftId": "RID42290",
		"rightId": "RID42289",
		"partOfId": "RID2119",
		"synonyms": [
		  "ulnar styloid",
		  "processus styloideus ulnae",
		  "processus styloideus ulnae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23628"
		  },
		  {
			"system": "SNOMED",
			"code": "91361004"
		  }
		]
	  },
	  {
		"radlexId": "RID42289",
		"description": "styloid process of right ulna",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2132",
		"leftId": "RID42290",
		"partOfId": "RID42720",
		"codes": [
		  {
			"system": "FMA",
			"code": "23653"
		  }
		]
	  },
	  {
		"radlexId": "RID42290",
		"description": "styloid process of left ulna",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2132",
		"rightId": "RID42289",
		"partOfId": "RID42721",
		"codes": [
		  {
			"system": "FMA",
			"code": "23654"
		  }
		]
	  },
	  {
		"radlexId": "RID2203",
		"description": "distal radioulnar joint",
		"containedById": "RID2177",
		"leftId": "RID2203_RID5824",
		"rightId": "RID2203_RID5825",
		"synonyms": [
		  "inferior radioulnar joint"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "35290"
		  },
		  {
			"system": "SNOMED",
			"code": "65316004"
		  }
		]
	  },
	  {
		"radlexId": "RID2203_RID5824",
		"description": "left distal radioulnar joint",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2203",
		"rightId": "RID2203_RID5825"
	  },
	  {
		"radlexId": "RID2203_RID5825",
		"description": "right distal radioulnar joint",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2203",
		"leftId": "RID2203_RID5824"
	  },
	  {
		"radlexId": "RID2230",
		"description": "volar radioulnar ligament",
		"containedById": "RID2202",
		"leftId": "RID2230_RID5824",
		"rightId": "RID2230_RID5825"
	  },
	  {
		"radlexId": "RID2230_RID5824",
		"description": "left volar radioulnar ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2230",
		"rightId": "RID2230_RID5825"
	  },
	  {
		"radlexId": "RID2230_RID5825",
		"description": "right volar radioulnar ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2230",
		"leftId": "RID2230_RID5824"
	  },
	  {
		"radlexId": "RID40874",
		"description": "palmar radiocarpal ligament",
		"containedById": "RID2202",
		"leftId": "RID40876",
		"rightId": "RID40875",
		"synonyms": [
		  "ligamentum radiocarpale palmare l volar radiocarpal ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40002"
		  },
		  {
			"system": "SNOMED",
			"code": "50783004"
		  }
		]
	  },
	  {
		"radlexId": "RID40875",
		"description": "right palmar radiocarpal ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID40874",
		"leftId": "RID40876",
		"codes": [
		  {
			"system": "FMA",
			"code": "40009"
		  }
		]
	  },
	  {
		"radlexId": "RID40876",
		"description": "left palmar radiocarpal ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID40874",
		"rightId": "RID40875",
		"codes": [
		  {
			"system": "FMA",
			"code": "40010"
		  }
		]
	  },
	  {
		"radlexId": "RID2257",
		"description": "radial collateral ligament of wrist",
		"containedById": "RID2202",
		"leftId": "RID2257_RID5824",
		"rightId": "RID2257_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "40006"
		  },
		  {
			"system": "SNOMED",
			"code": "41728005"
		  }
		]
	  },
	  {
		"radlexId": "RID2257_RID5824",
		"description": "left radial collateral ligament of wrist",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2257",
		"rightId": "RID2257_RID5825"
	  },
	  {
		"radlexId": "RID2257_RID5825",
		"description": "right radial collateral ligament of wrist",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2257",
		"leftId": "RID2257_RID5824"
	  },
	  {
		"radlexId": "RID2235",
		"description": "ulnar collateral ligament of wrist",
		"containedById": "RID2202",
		"leftId": "RID2235_RID5824",
		"rightId": "RID2235_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "40005"
		  },
		  {
			"system": "SNOMED",
			"code": "22296005"
		  }
		]
	  },
	  {
		"radlexId": "RID2235_RID5824",
		"description": "left ulnar collateral ligament of wrist",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2235",
		"rightId": "RID2235_RID5825"
	  },
	  {
		"radlexId": "RID2235_RID5825",
		"description": "right ulnar collateral ligament of wrist",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2235",
		"leftId": "RID2235_RID5824"
	  },
	  {
		"radlexId": "RID40937",
		"description": "palmar intercarpal ligament",
		"containedById": "RID2202",
		"leftId": "RID40939",
		"rightId": "RID40938",
		"synonyms": [
		  "volar intercarpal ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42302"
		  },
		  {
			"system": "SNOMED",
			"code": "368242002"
		  }
		]
	  },
	  {
		"radlexId": "RID40938",
		"description": "right palmar intercarpal ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID40937",
		"leftId": "RID40939",
		"codes": [
		  {
			"system": "FMA",
			"code": "42310"
		  }
		]
	  },
	  {
		"radlexId": "RID40939",
		"description": "left palmar intercarpal ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID40937",
		"rightId": "RID40938",
		"codes": [
		  {
			"system": "FMA",
			"code": "42311"
		  }
		]
	  },
	  {
		"radlexId": "RID2287",
		"description": "palmar ligament",
		"containedById": "RID2202",
		"leftId": "RID2287_RID5824",
		"rightId": "RID2287_RID5825",
		"synonyms": [
		  "volar ligament",
		  "radiocarpal ligament"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "244621008"
		  }
		]
	  },
	  {
		"radlexId": "RID2287_RID5824",
		"description": "left palmar ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2287",
		"rightId": "RID2287_RID5825"
	  },
	  {
		"radlexId": "RID2287_RID5825",
		"description": "right palmar ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2287",
		"leftId": "RID2287_RID5824"
	  },
	  {
		"radlexId": "RID2267",
		"description": "pisohamate ligament",
		"containedById": "RID2202",
		"leftId": "RID40944",
		"rightId": "RID40943",
		"synonyms": [
		  "ligamentum pisohamatum",
		  "Ligamentum pisohamatum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42304"
		  },
		  {
			"system": "SNOMED",
			"code": "368247008"
		  }
		]
	  },
	  {
		"radlexId": "RID40943",
		"description": "right pisohamate ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2267",
		"leftId": "RID40944",
		"codes": [
		  {
			"system": "FMA",
			"code": "42312"
		  }
		]
	  },
	  {
		"radlexId": "RID40944",
		"description": "left pisohamate ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2267",
		"rightId": "RID40943",
		"codes": [
		  {
			"system": "FMA",
			"code": "42313"
		  }
		]
	  },
	  {
		"radlexId": "RID40945",
		"description": "pisometacarpal ligament",
		"containedById": "RID2202",
		"leftId": "RID40947",
		"rightId": "RID40946",
		"synonyms": [
		  "ligamentum pisometacarpale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42305"
		  },
		  {
			"system": "SNOMED",
			"code": "368248003"
		  }
		]
	  },
	  {
		"radlexId": "RID40946",
		"description": "right pisometacarpal ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID40945",
		"leftId": "RID40947",
		"codes": [
		  {
			"system": "FMA",
			"code": "42314"
		  }
		]
	  },
	  {
		"radlexId": "RID40947",
		"description": "left pisometacarpal ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID40945",
		"rightId": "RID40946",
		"codes": [
		  {
			"system": "FMA",
			"code": "42315"
		  }
		]
	  },
	  {
		"radlexId": "RID2229",
		"description": "dorsal radioulnar ligament",
		"containedById": "RID2202",
		"leftId": "RID2229_RID5824",
		"rightId": "RID2229_RID5825"
	  },
	  {
		"radlexId": "RID2229_RID5824",
		"description": "left dorsal radioulnar ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2229",
		"rightId": "RID2229_RID5825"
	  },
	  {
		"radlexId": "RID2229_RID5825",
		"description": "right dorsal radioulnar ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2229",
		"leftId": "RID2229_RID5824"
	  },
	  {
		"radlexId": "RID2281",
		"description": "dorsal radiocarpal ligament",
		"containedById": "RID2202",
		"leftId": "RID40873",
		"rightId": "RID40872",
		"synonyms": [
		  "dorsal radiotriquetral ligament",
		  "ligamentum radiocarpale dorsale",
		  "Ligamentum radiocarpale dorsale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40001"
		  },
		  {
			"system": "SNOMED",
			"code": "37309007"
		  }
		]
	  },
	  {
		"radlexId": "RID40872",
		"description": "right dorsal radiocarpal ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2281",
		"leftId": "RID40873",
		"codes": [
		  {
			"system": "FMA",
			"code": "40007"
		  }
		]
	  },
	  {
		"radlexId": "RID40873",
		"description": "left dorsal radiocarpal ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2281",
		"rightId": "RID40872",
		"codes": [
		  {
			"system": "FMA",
			"code": "40008"
		  }
		]
	  },
	  {
		"radlexId": "RID2259",
		"description": "scapholunate ligament",
		"containedById": "RID2202",
		"leftId": "RID2259_RID5824",
		"rightId": "RID2259_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "323747"
		  },
		  {
			"system": "SNOMED",
			"code": "182413009"
		  }
		]
	  },
	  {
		"radlexId": "RID2259_RID5824",
		"description": "left scapholunate ligament",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2259",
		"rightId": "RID2259_RID5825"
	  },
	  {
		"radlexId": "RID2259_RID5825",
		"description": "right scapholunate ligament",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2259",
		"leftId": "RID2259_RID5824"
	  },
	  {
		"radlexId": "RID2249",
		"description": "capitohamate joint",
		"containedById": "RID2202",
		"leftId": "RID2249_RID5824",
		"rightId": "RID2249_RID5825"
	  },
	  {
		"radlexId": "RID2249_RID5824",
		"description": "left capitohamate joint",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2249",
		"rightId": "RID2249_RID5825"
	  },
	  {
		"radlexId": "RID2249_RID5825",
		"description": "right capitohamate joint",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2249",
		"leftId": "RID2249_RID5824"
	  },
	  {
		"radlexId": "RID2247",
		"description": "capitolunate joint",
		"containedById": "RID2202",
		"leftId": "RID2247_RID5824",
		"rightId": "RID2247_RID5825"
	  },
	  {
		"radlexId": "RID2247_RID5824",
		"description": "left capitolunate joint",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2247",
		"rightId": "RID2247_RID5825"
	  },
	  {
		"radlexId": "RID2247_RID5825",
		"description": "right capitolunate joint",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2247",
		"leftId": "RID2247_RID5824"
	  },
	  {
		"radlexId": "RID2313",
		"description": "flexor retinaculum",
		"containedById": "RID2202",
		"leftId": "RID2313_RID5824",
		"rightId": "RID2313_RID5825",
		"synonyms": [
		  "transverse carpal ligament l anterior annular ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "39988"
		  },
		  {
			"system": "SNOMED",
			"code": "43558007"
		  }
		]
	  },
	  {
		"radlexId": "RID2313_RID5824",
		"description": "left flexor retinaculum",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2313",
		"rightId": "RID2313_RID5825"
	  },
	  {
		"radlexId": "RID2313_RID5825",
		"description": "right flexor retinaculum",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2313",
		"leftId": "RID2313_RID5824"
	  },
	  {
		"radlexId": "RID2309",
		"description": "extensor retinaculum",
		"containedById": "RID2202",
		"leftId": "RID2309_RID5824",
		"rightId": "RID2309_RID5825",
		"synonyms": [
		  "drosal carpal ligament l posterior annular ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "39987"
		  },
		  {
			"system": "SNOMED",
			"code": "82333005"
		  }
		]
	  },
	  {
		"radlexId": "RID2309_RID5824",
		"description": "left extensor retinaculum",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2309",
		"rightId": "RID2309_RID5825"
	  },
	  {
		"radlexId": "RID2309_RID5825",
		"description": "right extensor retinaculum",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2309",
		"leftId": "RID2309_RID5824"
	  },
	  {
		"radlexId": "RID2202",
		"description": "wrist joint",
		"containedById": "RID2177",
		"leftId": "RID2202_RID5824",
		"rightId": "RID2202_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "35291"
		  },
		  {
			"system": "SNOMED",
			"code": "74670003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.405.930"
		  },
		  {
			"system": "UMLS",
			"code": "C1322271"
		  }
		]
	  },
	  {
		"radlexId": "RID2202_RID5824",
		"description": "left wrist joint",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2202",
		"rightId": "RID2202_RID5825"
	  },
	  {
		"radlexId": "RID2202_RID5825",
		"description": "right wrist joint",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2202",
		"leftId": "RID2202_RID5824"
	  },
	  {
		"radlexId": "RID2181",
		"description": "scaphoid",
		"containedById": "RID2202",
		"leftId": "RID2181_RID5824",
		"rightId": "RID2181_RID5825",
		"synonyms": [
		  "navicular bone of hand",
		  "scaphoid bone of hand"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23709"
		  },
		  {
			"system": "SNOMED",
			"code": "30518006"
		  },
		  {
			"system": "UMLS",
			"code": "C0223724"
		  }
		]
	  },
	  {
		"radlexId": "RID2181_RID5824",
		"description": "left scaphoid",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2181",
		"rightId": "RID2181_RID5825"
	  },
	  {
		"radlexId": "RID2181_RID5825",
		"description": "right scaphoid",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2181",
		"leftId": "RID2181_RID5824"
	  },
	  {
		"radlexId": "RID2187",
		"description": "lunate",
		"containedById": "RID2202",
		"leftId": "RID2187_RID5824",
		"rightId": "RID2187_RID5825",
		"synonyms": [
		  "semilunar bone",
		  "lunate bone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23712"
		  },
		  {
			"system": "SNOMED",
			"code": "52181001"
		  },
		  {
			"system": "UMLS",
			"code": "C0036624"
		  }
		]
	  },
	  {
		"radlexId": "RID2187_RID5824",
		"description": "left lunate",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2187",
		"rightId": "RID2187_RID5825"
	  },
	  {
		"radlexId": "RID2187_RID5825",
		"description": "right lunate",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2187",
		"leftId": "RID2187_RID5824"
	  },
	  {
		"radlexId": "RID2189",
		"description": "triquetrum",
		"containedById": "RID2202",
		"leftId": "RID2189_RID5824",
		"rightId": "RID2189_RID5825",
		"synonyms": [
		  "triangular bone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23715"
		  },
		  {
			"system": "SNOMED",
			"code": "80417002"
		  },
		  {
			"system": "UMLS",
			"code": "C0223739"
		  }
		]
	  },
	  {
		"radlexId": "RID2189_RID5824",
		"description": "left triquetrum",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2189",
		"rightId": "RID2189_RID5825"
	  },
	  {
		"radlexId": "RID2189_RID5825",
		"description": "right triquetrum",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2189",
		"leftId": "RID2189_RID5824"
	  },
	  {
		"radlexId": "RID2191",
		"description": "pisiform",
		"containedById": "RID2202",
		"leftId": "RID2191_RID5824",
		"rightId": "RID2191_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23718"
		  },
		  {
			"system": "SNOMED",
			"code": "19799002"
		  }
		]
	  },
	  {
		"radlexId": "RID2191_RID5824",
		"description": "left pisiform",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2191",
		"rightId": "RID2191_RID5825"
	  },
	  {
		"radlexId": "RID2191_RID5825",
		"description": "right pisiform",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2191",
		"leftId": "RID2191_RID5824"
	  },
	  {
		"radlexId": "RID2193",
		"description": "trapezium",
		"containedById": "RID2202",
		"leftId": "RID2193_RID5824",
		"rightId": "RID2193_RID5825",
		"synonyms": [
		  "greater multangular"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23721"
		  },
		  {
			"system": "SNOMED",
			"code": "71800003"
		  },
		  {
			"system": "UMLS",
			"code": "C0223736"
		  }
		]
	  },
	  {
		"radlexId": "RID2193_RID5824",
		"description": "left trapezium",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2193",
		"rightId": "RID2193_RID5825"
	  },
	  {
		"radlexId": "RID2193_RID5825",
		"description": "right trapezium",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2193",
		"leftId": "RID2193_RID5824"
	  },
	  {
		"radlexId": "RID2195",
		"description": "trapezoid",
		"containedById": "RID2202",
		"leftId": "RID2195_RID5824",
		"rightId": "RID2195_RID5825",
		"synonyms": [
		  "lesser multangular"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23724"
		  },
		  {
			"system": "SNOMED",
			"code": "85575004"
		  },
		  {
			"system": "UMLS",
			"code": "C0223741"
		  }
		]
	  },
	  {
		"radlexId": "RID2195_RID5824",
		"description": "left trapezoid",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2195",
		"rightId": "RID2195_RID5825"
	  },
	  {
		"radlexId": "RID2195_RID5825",
		"description": "right trapezoid",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2195",
		"leftId": "RID2195_RID5824"
	  },
	  {
		"radlexId": "RID2197",
		"description": "capitate",
		"containedById": "RID2202",
		"leftId": "RID2197_RID5824",
		"rightId": "RID2197_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23727"
		  },
		  {
			"system": "SNOMED",
			"code": "82210006"
		  }
		]
	  },
	  {
		"radlexId": "RID2197_RID5824",
		"description": "left capitate",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2197",
		"rightId": "RID2197_RID5825"
	  },
	  {
		"radlexId": "RID2197_RID5825",
		"description": "right capitate",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2197",
		"leftId": "RID2197_RID5824"
	  },
	  {
		"radlexId": "RID2198",
		"description": "hamate",
		"containedById": "RID2202",
		"leftId": "RID2198_RID5824",
		"rightId": "RID2198_RID5825",
		"synonyms": [
		  "unciform"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23730"
		  },
		  {
			"system": "SNOMED",
			"code": "28839003"
		  }
		]
	  },
	  {
		"radlexId": "RID2198_RID5824",
		"description": "left hamate",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2198",
		"rightId": "RID2198_RID5825"
	  },
	  {
		"radlexId": "RID2198_RID5825",
		"description": "right hamate",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2198",
		"leftId": "RID2198_RID5824"
	  },
	  {
		"radlexId": "RID2200",
		"description": "hook of hamate",
		"containedById": "RID2202",
		"leftId": "RID2200_RID5824",
		"rightId": "RID2200_RID5825",
		"synonyms": [
		  "hamulus",
		  "hamulus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "39978"
		  },
		  {
			"system": "SNOMED",
			"code": "35169003"
		  }
		]
	  },
	  {
		"radlexId": "RID2200_RID5824",
		"description": "left hook of hamate",
		"containedById": "RID2202_RID5824",
		"unsidedId": "RID2200",
		"rightId": "RID2200_RID5825"
	  },
	  {
		"radlexId": "RID2200_RID5825",
		"description": "right hook of hamate",
		"containedById": "RID2202_RID5825",
		"unsidedId": "RID2200",
		"leftId": "RID2200_RID5824"
	  },
	  {
		"radlexId": "RID41516",
		"description": "tendon of flexor digitorum superficialis to index finger",
		"containedById": "RID2177",
		"leftId": "RID41518",
		"rightId": "RID41517",
		"partOfId": "RID2164",
		"synonyms": [
		  "tendon of flexor digitorum superficialis to second finger l tendon of flexor digitorum superficialis to 2nd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42549"
		  },
		  {
			"system": "SNOMED",
			"code": "84904004"
		  }
		]
	  },
	  {
		"radlexId": "RID41517",
		"description": "tendon of right flexor digitorum superficialis to right index finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41516",
		"leftId": "RID41518",
		"partOfId": "RID43100",
		"synonyms": [
		  "tendon of right flexor digitorum superficialis to right second finger l tendon of right flexor digitorum superficialis to right 2nd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42553"
		  }
		]
	  },
	  {
		"radlexId": "RID41518",
		"description": "tendon of left flexor digitorum superficialis to left index finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41516",
		"rightId": "RID41517",
		"partOfId": "RID43101",
		"synonyms": [
		  "tendon of left flexor digitorum superficialis to left second finger l tendon of left flexor digitorum superficialis to left 2nd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42554"
		  }
		]
	  },
	  {
		"radlexId": "RID41519",
		"description": "tendon of flexor digitorum superficialis to middle finger",
		"containedById": "RID2177",
		"leftId": "RID41521",
		"rightId": "RID41520",
		"partOfId": "RID2164",
		"synonyms": [
		  "tendon of flexor digitorum superficialis to third finger l tendon of flexor digitorum superficialis to 3rd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42550"
		  },
		  {
			"system": "SNOMED",
			"code": "51861003"
		  }
		]
	  },
	  {
		"radlexId": "RID41520",
		"description": "tendon of right flexor digitorum superficialis to right middle finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41519",
		"leftId": "RID41521",
		"partOfId": "RID43100",
		"synonyms": [
		  "tendon of right flexor digitorum superficialis to right third finger l tendon of right flexor digitorum superficialis to right 3rd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42555"
		  }
		]
	  },
	  {
		"radlexId": "RID41521",
		"description": "tendon of left flexor digitorum superficialis to left middle finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41519",
		"rightId": "RID41520",
		"partOfId": "RID43101",
		"synonyms": [
		  "tendon of left flexor digitorum superficialis to left third finger l tendon of left flexor digitorum superficialis to left 3rd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42556"
		  }
		]
	  },
	  {
		"radlexId": "RID41522",
		"description": "tendon of flexor digitorum superficialis to ring finger",
		"containedById": "RID2177",
		"leftId": "RID41524",
		"rightId": "RID41523",
		"partOfId": "RID2164",
		"synonyms": [
		  "tendon of flexor digitorum superficialis to fourth finger l tendon of flexor digitorum superficialis to 4th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42551"
		  },
		  {
			"system": "SNOMED",
			"code": "27448004"
		  }
		]
	  },
	  {
		"radlexId": "RID41523",
		"description": "tendon of right flexor digitorum superficialis to right ring finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41522",
		"leftId": "RID41524",
		"partOfId": "RID43100",
		"synonyms": [
		  "tendon of right flexor digitorum superficialis to right fourth finger l tendon of right flexor digitorum superficialis to right 4th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42557"
		  }
		]
	  },
	  {
		"radlexId": "RID41524",
		"description": "tendon of left flexor digitorum superficialis to left ring finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41522",
		"rightId": "RID41523",
		"partOfId": "RID43101",
		"synonyms": [
		  "tendon of left flexor digitorum superficialis to left fourth finger l tendon of left flexor digitorum superficialis to left 4th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42558"
		  }
		]
	  },
	  {
		"radlexId": "RID41525",
		"description": "tendon of flexor digitorum superficialis to little finger",
		"containedById": "RID2177",
		"leftId": "RID41527",
		"rightId": "RID41526",
		"partOfId": "RID2164",
		"synonyms": [
		  "tendon of flexor digitorum superficialis to fifth finger l tendon of flexor digitorum superficialis to 5th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42552"
		  },
		  {
			"system": "SNOMED",
			"code": "8040001"
		  }
		]
	  },
	  {
		"radlexId": "RID41526",
		"description": "tendon of right flexor digitorum superficialis to right little finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41525",
		"leftId": "RID41527",
		"partOfId": "RID43100",
		"synonyms": [
		  "tendon of right flexor digitorum superficialis to right fifth finger l tendon of right flexor digitorum superficialis to right 5th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42559"
		  }
		]
	  },
	  {
		"radlexId": "RID41527",
		"description": "tendon of left flexor digitorum superficialis to left little finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41525",
		"rightId": "RID41526",
		"partOfId": "RID43101",
		"synonyms": [
		  "tendon of left flexor digitorum superficialis to left fifth  finger l tendon of left flexor digitorum superficialis to left 5th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "42560"
		  }
		]
	  },
	  {
		"radlexId": "RID2390",
		"description": "palmaris longus tendon",
		"containedById": "RID2177",
		"leftId": "RID41501",
		"rightId": "RID41500",
		"partOfId": "RID2162",
		"synonyms": [
		  "tendon of palmaris longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38594"
		  },
		  {
			"system": "SNOMED",
			"code": "245110006"
		  }
		]
	  },
	  {
		"radlexId": "RID41500",
		"description": "right palmaris longus tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2390",
		"leftId": "RID41501",
		"partOfId": "RID43096",
		"synonyms": [
		  "tendon of right palmaris longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38601"
		  }
		]
	  },
	  {
		"radlexId": "RID41501",
		"description": "left palmaris longus tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2390",
		"rightId": "RID41500",
		"partOfId": "RID43097",
		"synonyms": [
		  "tendon of left palmaris longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38602"
		  }
		]
	  },
	  {
		"radlexId": "RID41494",
		"description": "flexor carpi radialis tendon",
		"containedById": "RID2177",
		"leftId": "RID41496",
		"rightId": "RID41495",
		"partOfId": "RID2161",
		"synonyms": [
		  "tendon of flexor carpi radialis muscle",
		  "tendon of flexor carpi radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38582"
		  },
		  {
			"system": "SNOMED",
			"code": "15862001"
		  }
		]
	  },
	  {
		"radlexId": "RID41495",
		"description": "right flexor carpi radialis tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41494",
		"leftId": "RID41496",
		"partOfId": "RID43094",
		"synonyms": [
		  "tendon of right flexor carpi radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38589"
		  }
		]
	  },
	  {
		"radlexId": "RID41496",
		"description": "left flexor carpi radialis tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41494",
		"rightId": "RID41495",
		"partOfId": "RID43095",
		"synonyms": [
		  "tendon of left flexor carpi radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38590"
		  }
		]
	  },
	  {
		"radlexId": "RID2383",
		"description": "flexor pollicis longus tendon",
		"containedById": "RID2177",
		"leftId": "RID41582",
		"rightId": "RID41581",
		"partOfId": "RID2169",
		"synonyms": [
		  "tendon of flexor pollicis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38673"
		  },
		  {
			"system": "SNOMED",
			"code": "2600000"
		  }
		]
	  },
	  {
		"radlexId": "RID41581",
		"description": "right flexor pollicis longus tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2383",
		"leftId": "RID41582",
		"partOfId": "RID43104",
		"synonyms": [
		  "tendon of right flexor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38680"
		  },
		  {
			"system": "SNOMED",
			"code": "725487009"
		  }
		]
	  },
	  {
		"radlexId": "RID41582",
		"description": "left flexor pollicis longus tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2383",
		"rightId": "RID41581",
		"partOfId": "RID43105",
		"synonyms": [
		  "tendon of left flexor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38681"
		  },
		  {
			"system": "SNOMED",
			"code": "725486000"
		  }
		]
	  },
	  {
		"radlexId": "RID2374",
		"description": "abductor pollicis longus tendon",
		"containedById": "RID2177",
		"leftId": "RID41622",
		"rightId": "RID41621",
		"partOfId": "RID2154",
		"synonyms": [
		  "tendon of abductor pollicis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40769"
		  },
		  {
			"system": "SNOMED",
			"code": "245136004"
		  }
		]
	  },
	  {
		"radlexId": "RID41621",
		"description": "right abductor pollicis longus tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2374",
		"leftId": "RID41622",
		"partOfId": "RID43123",
		"synonyms": [
		  "tendon of right abductor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40770"
		  },
		  {
			"system": "SNOMED",
			"code": "721125000"
		  }
		]
	  },
	  {
		"radlexId": "RID41622",
		"description": "left abductor pollicis longus tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2374",
		"rightId": "RID41621",
		"partOfId": "RID43124",
		"synonyms": [
		  "tendon of left abductor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40771"
		  },
		  {
			"system": "SNOMED",
			"code": "721126004"
		  }
		]
	  },
	  {
		"radlexId": "RID2375",
		"description": "extensor pollicis brevis tendon",
		"containedById": "RID2177",
		"leftId": "RID41632",
		"rightId": "RID41631",
		"partOfId": "RID2155",
		"synonyms": [
		  "tendon of extensor pollicis brevis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40809"
		  },
		  {
			"system": "SNOMED",
			"code": "245137008"
		  }
		]
	  },
	  {
		"radlexId": "RID41631",
		"description": "right extensor pollicis brevis tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2375",
		"leftId": "RID41632",
		"partOfId": "RID43125",
		"synonyms": [
		  "tendon of right extensor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40810"
		  },
		  {
			"system": "SNOMED",
			"code": "721121009"
		  }
		]
	  },
	  {
		"radlexId": "RID41632",
		"description": "left extensor pollicis brevis tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2375",
		"rightId": "RID41631",
		"partOfId": "RID43126",
		"synonyms": [
		  "tendon of left extensor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40811"
		  },
		  {
			"system": "SNOMED",
			"code": "721122002"
		  }
		]
	  },
	  {
		"radlexId": "RID2378",
		"description": "extensor pollicis longus tendon",
		"containedById": "RID2177",
		"leftId": "RID41630",
		"rightId": "RID41629",
		"partOfId": "RID2156",
		"synonyms": [
		  "tendon of extensor pollicis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40794"
		  },
		  {
			"system": "SNOMED",
			"code": "40717002"
		  }
		]
	  },
	  {
		"radlexId": "RID41629",
		"description": "right extensor pollicis longus tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2378",
		"leftId": "RID41630",
		"partOfId": "RID43127",
		"synonyms": [
		  "tendon of right extensor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40795"
		  }
		]
	  },
	  {
		"radlexId": "RID41630",
		"description": "left extensor pollicis longus tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2378",
		"rightId": "RID41629",
		"partOfId": "RID43128",
		"synonyms": [
		  "tendon of left extensor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40796"
		  }
		]
	  },
	  {
		"radlexId": "RID2376",
		"description": "extensor carpi radialis longus tendon",
		"containedById": "RID2177",
		"leftId": "RID41590",
		"rightId": "RID41589",
		"partOfId": "RID2145",
		"synonyms": [
		  "tendon of extensor carpi radialis longus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40704"
		  },
		  {
			"system": "SNOMED",
			"code": "245124005"
		  }
		]
	  },
	  {
		"radlexId": "RID41589",
		"description": "right extensor carpi radialis longus tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2376",
		"leftId": "RID41590",
		"partOfId": "RID43110",
		"synonyms": [
		  "tendon of right extensor carpi radialis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40705"
		  }
		]
	  },
	  {
		"radlexId": "RID41590",
		"description": "left extensor carpi radialis longus tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2376",
		"rightId": "RID41589",
		"partOfId": "RID43111",
		"synonyms": [
		  "tendon of left extensor carpi radialis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40706"
		  }
		]
	  },
	  {
		"radlexId": "RID2377",
		"description": "extensor carpi radialis brevis tendon",
		"containedById": "RID2177",
		"leftId": "RID41592",
		"rightId": "RID41591",
		"partOfId": "RID2144",
		"synonyms": [
		  "tendon of extensor carpi radialis brevis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40719"
		  },
		  {
			"system": "SNOMED",
			"code": "245125006"
		  }
		]
	  },
	  {
		"radlexId": "RID41591",
		"description": "right extensor carpi radialis brevis tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2377",
		"leftId": "RID41592",
		"partOfId": "RID43112",
		"synonyms": [
		  "tendon of right extensor carpi radialis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40720"
		  }
		]
	  },
	  {
		"radlexId": "RID41592",
		"description": "left extensor carpi radialis brevis tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2377",
		"rightId": "RID41591",
		"partOfId": "RID43113",
		"synonyms": [
		  "tendon of left extensor carpi radialis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40721"
		  }
		]
	  },
	  {
		"radlexId": "RID2429",
		"description": "extensor indicis tendon",
		"containedById": "RID2177",
		"leftId": "RID41634",
		"rightId": "RID41633",
		"partOfId": "RID2157",
		"synonyms": [
		  "tendon of extensor indicis muslce"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40824"
		  },
		  {
			"system": "SNOMED",
			"code": "245139006"
		  }
		]
	  },
	  {
		"radlexId": "RID41633",
		"description": "right extensor indicis tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2429",
		"leftId": "RID41634",
		"partOfId": "RID43129",
		"synonyms": [
		  "tendon of right extensor indicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40825"
		  }
		]
	  },
	  {
		"radlexId": "RID41634",
		"description": "left extensor indicis tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2429",
		"rightId": "RID41633",
		"partOfId": "RID43130",
		"synonyms": [
		  "tendon of left extensor indicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40826"
		  }
		]
	  },
	  {
		"radlexId": "RID13338",
		"description": "tendon of extensor digitorum to index finger",
		"containedById": "RID2177",
		"leftId": "RID41596",
		"rightId": "RID41595",
		"partOfId": "RID43114",
		"synonyms": [
		  "tendon of extensor digitorum to second finger l tendon of extensor digitorum to 2nd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49221"
		  }
		]
	  },
	  {
		"radlexId": "RID41595",
		"description": "tendon of right extensor digitorum to right index finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID13338",
		"leftId": "RID41596",
		"partOfId": "RID43115",
		"synonyms": [
		  "tendon of right extensor digitorum to right second finger l tendon of right extensor digitorum to right 2nd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49225"
		  }
		]
	  },
	  {
		"radlexId": "RID41596",
		"description": "tendon of left extensor digitorum to left index finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID13338",
		"rightId": "RID41595",
		"partOfId": "RID43116",
		"synonyms": [
		  "tendon of left extensor digitorum to left second finger l tendon of left extensor digitorum to left 2nd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49226"
		  }
		]
	  },
	  {
		"radlexId": "RID41597",
		"description": "tendon of extensor digitorum to middle finger",
		"containedById": "RID2177",
		"leftId": "RID41599",
		"rightId": "RID41598",
		"partOfId": "RID43114",
		"synonyms": [
		  "tendon of extensor digitorum to third finger l tendon of extensor digitorum to 3rd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49222"
		  }
		]
	  },
	  {
		"radlexId": "RID41598",
		"description": "tendon of right extensor digitorum to right middle finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41597",
		"leftId": "RID41599",
		"partOfId": "RID43115",
		"synonyms": [
		  "tendon of right extensor digitorum to right third finger l tendon of right extensor digitorum to right 3rd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49227"
		  }
		]
	  },
	  {
		"radlexId": "RID41599",
		"description": "tendon of left extensor digitorum to left middle finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41597",
		"rightId": "RID41598",
		"partOfId": "RID43116",
		"synonyms": [
		  "tendon of left extensor digitorum to left third finger l tendon of left extensor digitorum to left 3rd finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49228"
		  }
		]
	  },
	  {
		"radlexId": "RID13340",
		"description": "tendon of extensor digitorum to ring finger",
		"containedById": "RID2177",
		"leftId": "RID41601",
		"rightId": "RID41600",
		"partOfId": "RID43114",
		"synonyms": [
		  "tendon of extensor digitorum to fourth finger l tendon of extensor digitorum to 4th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49223"
		  }
		]
	  },
	  {
		"radlexId": "RID41600",
		"description": "tendon of right extensor digitorum to right ring finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID13340",
		"leftId": "RID41601",
		"partOfId": "RID43115",
		"synonyms": [
		  "tendon of right extensor digitorum to right fourth finger l tendon of right extensor digitorum to right 4th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49229"
		  }
		]
	  },
	  {
		"radlexId": "RID41601",
		"description": "tendon of left extensor digitorum to left ring finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID13340",
		"rightId": "RID41600",
		"partOfId": "RID43116",
		"synonyms": [
		  "tendon of left extensor digitorum to left fourth finger l tendon of left extensor digitorum to left 4th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49230"
		  }
		]
	  },
	  {
		"radlexId": "RID41602",
		"description": "tendon of extensor digitorum to little finger",
		"containedById": "RID2177",
		"leftId": "RID41604",
		"rightId": "RID41603",
		"partOfId": "RID43114",
		"synonyms": [
		  "tendon of extensor digitorum to fifth finger l tendon of extensor digitorum to 5th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49224"
		  }
		]
	  },
	  {
		"radlexId": "RID41603",
		"description": "tendon of right extensor digitorum to right little finger",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID41602",
		"leftId": "RID41604",
		"partOfId": "RID43115",
		"synonyms": [
		  "tendon of right extensor digitorum to right fifth finger l tendon of right extensor digitorum to right 5th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49231"
		  }
		]
	  },
	  {
		"radlexId": "RID41604",
		"description": "tendon of left extensor digitorum to left little finger",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID41602",
		"rightId": "RID41603",
		"partOfId": "RID43116",
		"synonyms": [
		  "tendon of left extensor digitorum to left fifth finger l tendon of left extensor digitorum to left 5th finger"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49232"
		  }
		]
	  },
	  {
		"radlexId": "RID2381",
		"description": "extensor digiti minimi tendon",
		"containedById": "RID2177",
		"leftId": "RID41606",
		"rightId": "RID41605",
		"partOfId": "RID2148",
		"synonyms": [
		  "tendon of extensor digiti minimi muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40749"
		  },
		  {
			"system": "SNOMED",
			"code": "74855001"
		  }
		]
	  },
	  {
		"radlexId": "RID41605",
		"description": "right extensor digiti minimi tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2381",
		"leftId": "RID41606",
		"partOfId": "RID43117",
		"synonyms": [
		  "tendon of right extensor digiti minimi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40750"
		  }
		]
	  },
	  {
		"radlexId": "RID41606",
		"description": "left extensor digiti minimi tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2381",
		"rightId": "RID41605",
		"partOfId": "RID43118",
		"synonyms": [
		  "tendon of left extensor digiti minimi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40751"
		  }
		]
	  },
	  {
		"radlexId": "RID2382",
		"description": "extensor carpi ulnaris tendon",
		"containedById": "RID2177",
		"leftId": "RID41614",
		"rightId": "RID41613",
		"partOfId": "RID2146",
		"synonyms": [
		  "tendon of extensor carpi ulnaris muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40764"
		  },
		  {
			"system": "SNOMED",
			"code": "83352005"
		  }
		]
	  },
	  {
		"radlexId": "RID41613",
		"description": "right extensor carpi ulnaris tendon",
		"containedById": "RID2177_RID5825",
		"unsidedId": "RID2382",
		"leftId": "RID41614",
		"partOfId": "RID43119",
		"synonyms": [
		  "tendon of right extensor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40780"
		  }
		]
	  },
	  {
		"radlexId": "RID41614",
		"description": "left extensor carpi ulnaris tendon",
		"containedById": "RID2177_RID5824",
		"unsidedId": "RID2382",
		"rightId": "RID41613",
		"partOfId": "RID43120",
		"synonyms": [
		  "tendon of left extensor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "40781"
		  }
		]
	  },
	  {
		"radlexId": "RID2320",
		"description": "metacarpal bone",
		"containedById": "RID2318",
		"leftId": "RID2320_RID5824",
		"rightId": "RID2320_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "9612"
		  },
		  {
			"system": "SNOMED",
			"code": "36455000"
		  },
		  {
			"system": "UMLS",
			"code": "C0025526"
		  }
		]
	  },
	  {
		"radlexId": "RID2320_RID5824",
		"description": "left metacarpal bone",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2320",
		"rightId": "RID2320_RID5825"
	  },
	  {
		"radlexId": "RID2320_RID5825",
		"description": "right metacarpal bone",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2320",
		"leftId": "RID2320_RID5824"
	  },
	  {
		"radlexId": "RID34545",
		"description": "first metacarpal bone",
		"containedById": "RID2318",
		"leftId": "RID34545_RID5824",
		"rightId": "RID34545_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23899"
		  },
		  {
			"system": "SNOMED",
			"code": "4247003"
		  }
		]
	  },
	  {
		"radlexId": "RID34545_RID5824",
		"description": "left first metacarpal bone",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID34545",
		"rightId": "RID34545_RID5825"
	  },
	  {
		"radlexId": "RID34545_RID5825",
		"description": "right first metacarpal bone",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID34545",
		"leftId": "RID34545_RID5824"
	  },
	  {
		"radlexId": "RID34546",
		"description": "second metacarpal bone",
		"containedById": "RID2318",
		"leftId": "RID34546_RID5824",
		"rightId": "RID34546_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23900"
		  },
		  {
			"system": "SNOMED",
			"code": "81921009"
		  }
		]
	  },
	  {
		"radlexId": "RID34546_RID5824",
		"description": "left second metacarpal bone",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID34546",
		"rightId": "RID34546_RID5825"
	  },
	  {
		"radlexId": "RID34546_RID5825",
		"description": "right second metacarpal bone",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID34546",
		"leftId": "RID34546_RID5824"
	  },
	  {
		"radlexId": "RID34547",
		"description": "third metacarpal bone",
		"containedById": "RID2318",
		"leftId": "RID34547_RID5824",
		"rightId": "RID34547_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23901"
		  },
		  {
			"system": "SNOMED",
			"code": "68440005"
		  }
		]
	  },
	  {
		"radlexId": "RID34547_RID5824",
		"description": "left third metacarpal bone",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID34547",
		"rightId": "RID34547_RID5825"
	  },
	  {
		"radlexId": "RID34547_RID5825",
		"description": "right third metacarpal bone",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID34547",
		"leftId": "RID34547_RID5824"
	  },
	  {
		"radlexId": "RID34548",
		"description": "fourth metacarpal bone",
		"containedById": "RID2318",
		"leftId": "RID34548_RID5824",
		"rightId": "RID34548_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23902"
		  },
		  {
			"system": "SNOMED",
			"code": "65352000"
		  }
		]
	  },
	  {
		"radlexId": "RID34548_RID5824",
		"description": "left fourth metacarpal bone",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID34548",
		"rightId": "RID34548_RID5825"
	  },
	  {
		"radlexId": "RID34548_RID5825",
		"description": "right fourth metacarpal bone",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID34548",
		"leftId": "RID34548_RID5824"
	  },
	  {
		"radlexId": "RID34549",
		"description": "fifth metacarpal bone",
		"containedById": "RID2318",
		"leftId": "RID34549_RID5824",
		"rightId": "RID34549_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "23903"
		  },
		  {
			"system": "SNOMED",
			"code": "50939004"
		  }
		]
	  },
	  {
		"radlexId": "RID34549_RID5824",
		"description": "left fifth metacarpal bone",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID34549",
		"rightId": "RID34549_RID5825"
	  },
	  {
		"radlexId": "RID34549_RID5825",
		"description": "right fifth metacarpal bone",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID34549",
		"leftId": "RID34549_RID5824"
	  },
	  {
		"radlexId": "RID2332_RID2392",
		"description": "metacarpophalangeal joint of first finger",
		"containedById": "RID2318",
		"leftId": "RID2332_RID2392_RID5824",
		"rightId": "RID2332_RID2392_RID5825",
		"synonyms": [
		  "first MCP l 1st MCP"
		]
	  },
	  {
		"radlexId": "RID2332_RID2392_RID5824",
		"description": "left metacarpophalangeal joint of first finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2332_RID2392",
		"rightId": "RID2332_RID2392_RID5825"
	  },
	  {
		"radlexId": "RID2332_RID2392_RID5825",
		"description": "right metacarpophalangeal joint of first finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2332_RID2392",
		"leftId": "RID2332_RID2392_RID5824"
	  },
	  {
		"radlexId": "RID2332_RID2394",
		"description": "metacarpophalangeal joint of second finger",
		"containedById": "RID2318",
		"leftId": "RID2332_RID2394_RID5824",
		"rightId": "RID2332_RID2394_RID5825",
		"synonyms": [
		  "second MCP l 2nd MCP"
		]
	  },
	  {
		"radlexId": "RID2332_RID2394_RID5824",
		"description": "left metacarpophalangeal joint of second finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2332_RID2394",
		"rightId": "RID2332_RID2394_RID5825"
	  },
	  {
		"radlexId": "RID2332_RID2394_RID5825",
		"description": "right metacarpophalangeal joint of second finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2332_RID2394",
		"leftId": "RID2332_RID2394_RID5824"
	  },
	  {
		"radlexId": "RID2332_RID2396",
		"description": "metacarpophalangeal joint of third finger",
		"containedById": "RID2318",
		"leftId": "RID2332_RID2396_RID5824",
		"rightId": "RID2332_RID2396_RID5825",
		"synonyms": [
		  "third MCP l 3rd MCP"
		]
	  },
	  {
		"radlexId": "RID2332_RID2396_RID5824",
		"description": "left metacarpophalangeal joint of third finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2332_RID2396",
		"rightId": "RID2332_RID2396_RID5825"
	  },
	  {
		"radlexId": "RID2332_RID2396_RID5825",
		"description": "right metacarpophalangeal joint of third finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2332_RID2396",
		"leftId": "RID2332_RID2396_RID5824"
	  },
	  {
		"radlexId": "RID2332_RID2398",
		"description": "metacarpophalangeal joint of fourth finger",
		"containedById": "RID2318",
		"leftId": "RID2332_RID2398_RID5824",
		"rightId": "RID2332_RID2398_RID5825",
		"synonyms": [
		  "fourth MCP l 4th MCP"
		]
	  },
	  {
		"radlexId": "RID2332_RID2398_RID5824",
		"description": "left metacarpophalangeal joint of fourth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2332_RID2398",
		"rightId": "RID2332_RID2398_RID5825"
	  },
	  {
		"radlexId": "RID2332_RID2398_RID5825",
		"description": "right metacarpophalangeal joint of fourth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2332_RID2398",
		"leftId": "RID2332_RID2398_RID5824"
	  },
	  {
		"radlexId": "RID2332_RID2400",
		"description": "metacarpophalangeal joint of fifth finger",
		"containedById": "RID2318",
		"leftId": "RID2332_RID2400_RID5824",
		"rightId": "RID2332_RID2400_RID5825",
		"synonyms": [
		  "fifth MCP l 5th MCP"
		]
	  },
	  {
		"radlexId": "RID2332_RID2400_RID5824",
		"description": "left metacarpophalangeal joint of fifth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2332_RID2400",
		"rightId": "RID2332_RID2400_RID5825"
	  },
	  {
		"radlexId": "RID2332_RID2400_RID5825",
		"description": "right metacarpophalangeal joint of fifth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2332_RID2400",
		"leftId": "RID2332_RID2400_RID5824"
	  },
	  {
		"radlexId": "RID34533",
		"description": "interphalangeal joint of thumb",
		"containedById": "RID2318",
		"leftId": "RID34533_RID5824",
		"rightId": "RID34533_RID5825",
		"synonyms": [
		  "1st finger IP joint l IP joint of first finger l thumb IP joint l IP joint of thumb"
		]
	  },
	  {
		"radlexId": "RID34533_RID5824",
		"description": "left interphalangeal joint of thumb",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID34533",
		"rightId": "RID34533_RID5825"
	  },
	  {
		"radlexId": "RID34533_RID5825",
		"description": "right interphalangeal joint of thumb",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID34533",
		"leftId": "RID34533_RID5824"
	  },
	  {
		"radlexId": "RID2408_RID2394",
		"description": "proximal interphalangeal joint of second finger",
		"containedById": "RID2318",
		"leftId": "RID2408_RID2394_RID5824",
		"rightId": "RID2408_RID2394_RID5825",
		"synonyms": [
		  "2nd finger PIP joint l PIP joint of second finger l index finger PIP joint l PIP joint of index finger"
		]
	  },
	  {
		"radlexId": "RID2408_RID2394_RID5824",
		"description": "left proximal interphalangeal joint of second finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2408_RID2394",
		"rightId": "RID2408_RID2394_RID5825"
	  },
	  {
		"radlexId": "RID2408_RID2394_RID5825",
		"description": "right proximal interphalangeal joint of second finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2408_RID2394",
		"leftId": "RID2408_RID2394_RID5824"
	  },
	  {
		"radlexId": "RID2408_RID2396",
		"description": "proximal interphalangeal joint of third finger",
		"containedById": "RID2318",
		"leftId": "RID2408_RID2396_RID5824",
		"rightId": "RID2408_RID2396_RID5825",
		"synonyms": [
		  "3rd finger PIP joint l PIP joint of third finger l middle finger PIP joint l PIP joint of middle finger"
		]
	  },
	  {
		"radlexId": "RID2408_RID2396_RID5824",
		"description": "left proximal interphalangeal joint of third finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2408_RID2396",
		"rightId": "RID2408_RID2396_RID5825"
	  },
	  {
		"radlexId": "RID2408_RID2396_RID5825",
		"description": "right proximal interphalangeal joint of third finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2408_RID2396",
		"leftId": "RID2408_RID2396_RID5824"
	  },
	  {
		"radlexId": "RID2408_RID2398",
		"description": "proximal interphalangeal joint of fourth finger",
		"containedById": "RID2318",
		"leftId": "RID2408_RID2398_RID5824",
		"rightId": "RID2408_RID2398_RID5825",
		"synonyms": [
		  "4th finger PIP joint l PIP joint of fourth finger l ring finger PIP joint l PIP joint of ring finger"
		]
	  },
	  {
		"radlexId": "RID2408_RID2398_RID5824",
		"description": "left proximal interphalangeal joint of fourth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2408_RID2398",
		"rightId": "RID2408_RID2398_RID5825"
	  },
	  {
		"radlexId": "RID2408_RID2398_RID5825",
		"description": "right proximal interphalangeal joint of fourth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2408_RID2398",
		"leftId": "RID2408_RID2398_RID5824"
	  },
	  {
		"radlexId": "RID2408_RID2400",
		"description": "proximal interphalangeal joint of fifth finger",
		"containedById": "RID2318",
		"leftId": "RID2408_RID2400_RID5824",
		"rightId": "RID2408_RID2400_RID5825",
		"synonyms": [
		  "5th finger PIP joint l PIP joint of fifth finger l small finger PIP joint l PIP joint of small finger"
		]
	  },
	  {
		"radlexId": "RID2408_RID2400_RID5824",
		"description": "left proximal interphalangeal joint of fifth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2408_RID2400",
		"rightId": "RID2408_RID2400_RID5825"
	  },
	  {
		"radlexId": "RID2408_RID2400_RID5825",
		"description": "right proximal interphalangeal joint of fifth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2408_RID2400",
		"leftId": "RID2408_RID2400_RID5824"
	  },
	  {
		"radlexId": "RID2418_RID2394",
		"description": "distal interphalangeal joint of second finger",
		"containedById": "RID2318",
		"leftId": "RID2418_RID2394_RID5824",
		"rightId": "RID2418_RID2394_RID5825",
		"synonyms": [
		  "2nd finger DIP joint l DIP joint of second finger l index finger DIP joint l DIP joint of index finger"
		]
	  },
	  {
		"radlexId": "RID2418_RID2394_RID5824",
		"description": "left distal interphalangeal joint of second finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2418_RID2394",
		"rightId": "RID2418_RID2394_RID5825"
	  },
	  {
		"radlexId": "RID2418_RID2394_RID5825",
		"description": "right distal interphalangeal joint of second finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2418_RID2394",
		"leftId": "RID2418_RID2394_RID5824"
	  },
	  {
		"radlexId": "RID2418_RID2396",
		"description": "distal interphalangeal joint of third finger",
		"containedById": "RID2318",
		"leftId": "RID2418_RID2396_RID5824",
		"rightId": "RID2418_RID2396_RID5825",
		"synonyms": [
		  "3rd finger DIP joint l DIP joint of third finger l middle finger DIP joint l DIP joint of middle finger"
		]
	  },
	  {
		"radlexId": "RID2418_RID2396_RID5824",
		"description": "left distal interphalangeal joint of third finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2418_RID2396",
		"rightId": "RID2418_RID2396_RID5825"
	  },
	  {
		"radlexId": "RID2418_RID2396_RID5825",
		"description": "right distal interphalangeal joint of third finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2418_RID2396",
		"leftId": "RID2418_RID2396_RID5824"
	  },
	  {
		"radlexId": "RID2418_RID2398",
		"description": "distal interphalangeal joint of fourth finger",
		"containedById": "RID2318",
		"leftId": "RID2418_RID2398_RID5824",
		"rightId": "RID2418_RID2398_RID5825",
		"synonyms": [
		  "4th finger DIP joint l DIP joint of fourth finger l ring finger DIP joint l DIP joint of ring finger"
		]
	  },
	  {
		"radlexId": "RID2418_RID2398_RID5824",
		"description": "left distal interphalangeal joint of fourth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2418_RID2398",
		"rightId": "RID2418_RID2398_RID5825"
	  },
	  {
		"radlexId": "RID2418_RID2398_RID5825",
		"description": "right distal interphalangeal joint of fourth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2418_RID2398",
		"leftId": "RID2418_RID2398_RID5824"
	  },
	  {
		"radlexId": "RID2418_RID2400",
		"description": "distal interphalangeal joint of fifth finger",
		"containedById": "RID2318",
		"leftId": "RID2418_RID2400_RID5824",
		"rightId": "RID2418_RID2400_RID5825",
		"synonyms": [
		  "5th finger DIP joint l DIP joint of fifth finger l small finger DIP joint l DIP joint of small finger"
		]
	  },
	  {
		"radlexId": "RID2418_RID2400_RID5824",
		"description": "left distal interphalangeal joint of fifth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2418_RID2400",
		"rightId": "RID2418_RID2400_RID5825"
	  },
	  {
		"radlexId": "RID2418_RID2400_RID5825",
		"description": "right distal interphalangeal joint of fifth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2418_RID2400",
		"leftId": "RID2418_RID2400_RID5824"
	  },
	  {
		"radlexId": "RID2404_RID2392",
		"description": "proximal phalanx of first finger",
		"containedById": "RID2318",
		"leftId": "RID2404_RID2392_RID5824",
		"rightId": "RID2404_RID2392_RID5825",
		"synonyms": [
		  "proximal phalanx of 1st finger l proximal phalanx of thumb l 1st finger proximal phalanx l first finger proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23918"
		  },
		  {
			"system": "SNOMED",
			"code": "72795005"
		  }
		]
	  },
	  {
		"radlexId": "RID2404_RID2392_RID5824",
		"description": "left proximal phalanx of first finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2404_RID2392",
		"rightId": "RID2404_RID2392_RID5825"
	  },
	  {
		"radlexId": "RID2404_RID2392_RID5825",
		"description": "right proximal phalanx of first finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2404_RID2392",
		"leftId": "RID2404_RID2392_RID5824"
	  },
	  {
		"radlexId": "RID2404_RID2394",
		"description": "proximal phalanx of second finger",
		"containedById": "RID2318",
		"leftId": "RID2404_RID2394_RID5824",
		"rightId": "RID2404_RID2394_RID5825",
		"synonyms": [
		  "proximal phalanx of 2nd finger l proximal phalanx of index finger l 2nd finger proximal phalanx l second finger proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23919"
		  },
		  {
			"system": "SNOMED",
			"code": "28201002"
		  }
		]
	  },
	  {
		"radlexId": "RID2404_RID2394_RID5824",
		"description": "left proximal phalanx of second finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2404_RID2394",
		"rightId": "RID2404_RID2394_RID5825"
	  },
	  {
		"radlexId": "RID2404_RID2394_RID5825",
		"description": "right proximal phalanx of second finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2404_RID2394",
		"leftId": "RID2404_RID2394_RID5824"
	  },
	  {
		"radlexId": "RID2404_RID2396",
		"description": "proximal phalanx of third finger",
		"containedById": "RID2318",
		"leftId": "RID2404_RID2396_RID5824",
		"rightId": "RID2404_RID2396_RID5825",
		"synonyms": [
		  "proximal phalanx of 3rd finger l proximal phalanx of middle finger l 3rd finger proximal phalanx l third finger proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23920"
		  },
		  {
			"system": "SNOMED",
			"code": "36256002"
		  }
		]
	  },
	  {
		"radlexId": "RID2404_RID2396_RID5824",
		"description": "left proximal phalanx of third finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2404_RID2396",
		"rightId": "RID2404_RID2396_RID5825"
	  },
	  {
		"radlexId": "RID2404_RID2396_RID5825",
		"description": "right proximal phalanx of third finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2404_RID2396",
		"leftId": "RID2404_RID2396_RID5824"
	  },
	  {
		"radlexId": "RID2404_RID2398",
		"description": "proximal phalanx of fourth finger",
		"containedById": "RID2318",
		"leftId": "RID2404_RID2398_RID5824",
		"rightId": "RID2404_RID2398_RID5825",
		"synonyms": [
		  "proximal phalanx of 4th finger l proximal phalanx of ring finger l 4th finger proximal phalanx l fourth finger proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23921"
		  },
		  {
			"system": "SNOMED",
			"code": "64317004"
		  }
		]
	  },
	  {
		"radlexId": "RID2404_RID2398_RID5824",
		"description": "left proximal phalanx of fourth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2404_RID2398",
		"rightId": "RID2404_RID2398_RID5825"
	  },
	  {
		"radlexId": "RID2404_RID2398_RID5825",
		"description": "right proximal phalanx of fourth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2404_RID2398",
		"leftId": "RID2404_RID2398_RID5824"
	  },
	  {
		"radlexId": "RID2404_RID2400",
		"description": "proximal phalanx of fifth finger",
		"containedById": "RID2318",
		"leftId": "RID2404_RID2400_RID5824",
		"rightId": "RID2404_RID2400_RID5825",
		"synonyms": [
		  "proximal phalanx of 5th finger l proximal phalanx of small finger l 5th finger proximal phalanx l fifth finger proximal phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23922"
		  },
		  {
			"system": "SNOMED",
			"code": "90940005"
		  }
		]
	  },
	  {
		"radlexId": "RID2404_RID2400_RID5824",
		"description": "left proximal phalanx of fifth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2404_RID2400",
		"rightId": "RID2404_RID2400_RID5825"
	  },
	  {
		"radlexId": "RID2404_RID2400_RID5825",
		"description": "right proximal phalanx of fifth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2404_RID2400",
		"leftId": "RID2404_RID2400_RID5824"
	  },
	  {
		"radlexId": "RID2405_RID2394",
		"description": "middle phalanx of second finger",
		"containedById": "RID2318",
		"leftId": "RID2405_RID2394_RID5824",
		"rightId": "RID2405_RID2394_RID5825",
		"synonyms": [
		  "middle phalanx of 2nd finger l middle phalanx of index finger l 2nd finger middle phalanx l second finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23933"
		  },
		  {
			"system": "SNOMED",
			"code": "7083009"
		  }
		]
	  },
	  {
		"radlexId": "RID2405_RID2394_RID5824",
		"description": "left middle phalanx of second finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2405_RID2394",
		"rightId": "RID2405_RID2394_RID5825"
	  },
	  {
		"radlexId": "RID2405_RID2394_RID5825",
		"description": "right middle phalanx of second finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2405_RID2394",
		"leftId": "RID2405_RID2394_RID5824"
	  },
	  {
		"radlexId": "RID2405_RID2396",
		"description": "middle phalanx of third finger",
		"containedById": "RID2318",
		"leftId": "RID2405_RID2396_RID5824",
		"rightId": "RID2405_RID2396_RID5825",
		"synonyms": [
		  "middle phalanx of 3rd finger l middle phalanx of middle finger l 3rd finger middle phalanx l third finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23934"
		  },
		  {
			"system": "SNOMED",
			"code": "113223004"
		  }
		]
	  },
	  {
		"radlexId": "RID2405_RID2396_RID5824",
		"description": "left middle phalanx of third finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2405_RID2396",
		"rightId": "RID2405_RID2396_RID5825"
	  },
	  {
		"radlexId": "RID2405_RID2396_RID5825",
		"description": "right middle phalanx of third finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2405_RID2396",
		"leftId": "RID2405_RID2396_RID5824"
	  },
	  {
		"radlexId": "RID2405_RID2398",
		"description": "middle phalanx of fourth finger",
		"containedById": "RID2318",
		"leftId": "RID2405_RID2398_RID5824",
		"rightId": "RID2405_RID2398_RID5825",
		"synonyms": [
		  "middle phalanx of 4th finger l middle phalanx of ring finger l 4th finger middle phalanx l fourth finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23935"
		  },
		  {
			"system": "SNOMED",
			"code": "14824009"
		  }
		]
	  },
	  {
		"radlexId": "RID2405_RID2398_RID5824",
		"description": "left middle phalanx of fourth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2405_RID2398",
		"rightId": "RID2405_RID2398_RID5825"
	  },
	  {
		"radlexId": "RID2405_RID2398_RID5825",
		"description": "right middle phalanx of fourth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2405_RID2398",
		"leftId": "RID2405_RID2398_RID5824"
	  },
	  {
		"radlexId": "RID2405_RID2400",
		"description": "middle phalanx of fifth finger",
		"containedById": "RID2318",
		"leftId": "RID2405_RID2400_RID5824",
		"rightId": "RID2405_RID2400_RID5825",
		"synonyms": [
		  "middle phalanx of 5th finger l middle phalanx of small finger l 5th finger middle phalanx l fifth finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23936"
		  },
		  {
			"system": "SNOMED",
			"code": "22516007"
		  }
		]
	  },
	  {
		"radlexId": "RID2405_RID2400_RID5824",
		"description": "left middle phalanx of fifth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2405_RID2400",
		"rightId": "RID2405_RID2400_RID5825"
	  },
	  {
		"radlexId": "RID2405_RID2400_RID5825",
		"description": "right middle phalanx of fifth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2405_RID2400",
		"leftId": "RID2405_RID2400_RID5824"
	  },
	  {
		"radlexId": "RID2406_RID2392",
		"description": "distal phalanx of first finger",
		"containedById": "RID2318",
		"leftId": "RID2406_RID2392_RID5824",
		"rightId": "RID2406_RID2392_RID5825",
		"synonyms": [
		  "middle phalanx of 1st finger l middle phalanx of thumb l 1st finger middle phalanx l first finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23945"
		  },
		  {
			"system": "SNOMED",
			"code": "13829006"
		  }
		]
	  },
	  {
		"radlexId": "RID2406_RID2392_RID5824",
		"description": "left distal phalanx of first finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2406_RID2392",
		"rightId": "RID2406_RID2392_RID5825"
	  },
	  {
		"radlexId": "RID2406_RID2392_RID5825",
		"description": "right distal phalanx of first finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2406_RID2392",
		"leftId": "RID2406_RID2392_RID5824"
	  },
	  {
		"radlexId": "RID2406_RID2394",
		"description": "distal phalanx of second finger",
		"containedById": "RID2318",
		"leftId": "RID2406_RID2394_RID5824",
		"rightId": "RID2406_RID2394_RID5825",
		"synonyms": [
		  "middle phalanx of 2nd finger l middle phalanx of index finger l 2nd finger middle phalanx l second finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23946"
		  },
		  {
			"system": "SNOMED",
			"code": "33971000"
		  }
		]
	  },
	  {
		"radlexId": "RID2406_RID2394_RID5824",
		"description": "left distal phalanx of second finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2406_RID2394",
		"rightId": "RID2406_RID2394_RID5825"
	  },
	  {
		"radlexId": "RID2406_RID2394_RID5825",
		"description": "right distal phalanx of second finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2406_RID2394",
		"leftId": "RID2406_RID2394_RID5824"
	  },
	  {
		"radlexId": "RID2406_RID2396",
		"description": "distal phalanx of third finger",
		"containedById": "RID2318",
		"leftId": "RID2406_RID2396_RID5824",
		"rightId": "RID2406_RID2396_RID5825",
		"synonyms": [
		  "middle phalanx of 3rd finger l middle phalanx of middle finger l 3rd finger middle phalanx l third finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23947"
		  },
		  {
			"system": "SNOMED",
			"code": "58383002"
		  }
		]
	  },
	  {
		"radlexId": "RID2406_RID2396_RID5824",
		"description": "left distal phalanx of third finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2406_RID2396",
		"rightId": "RID2406_RID2396_RID5825"
	  },
	  {
		"radlexId": "RID2406_RID2396_RID5825",
		"description": "right distal phalanx of third finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2406_RID2396",
		"leftId": "RID2406_RID2396_RID5824"
	  },
	  {
		"radlexId": "RID2406_RID2398",
		"description": "distal phalanx of fourth finger",
		"containedById": "RID2318",
		"leftId": "RID2406_RID2398_RID5824",
		"rightId": "RID2406_RID2398_RID5825",
		"synonyms": [
		  "middle phalanx of 4th finger l middle phalanx of ring finger l 4th finger middle phalanx l fourth finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23948"
		  },
		  {
			"system": "SNOMED",
			"code": "33880004"
		  }
		]
	  },
	  {
		"radlexId": "RID2406_RID2398_RID5824",
		"description": "left distal phalanx of fourth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2406_RID2398",
		"rightId": "RID2406_RID2398_RID5825"
	  },
	  {
		"radlexId": "RID2406_RID2398_RID5825",
		"description": "right distal phalanx of fourth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2406_RID2398",
		"leftId": "RID2406_RID2398_RID5824"
	  },
	  {
		"radlexId": "RID2406_RID2400",
		"description": "distal phalanx of fifth finger",
		"containedById": "RID2318",
		"leftId": "RID2406_RID2400_RID5824",
		"rightId": "RID2406_RID2400_RID5825",
		"synonyms": [
		  "middle phalanx of 5th finger l middle phalanx of small finger l 5th finger middle phalanx l fifth finger middle phalanx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "23949"
		  },
		  {
			"system": "SNOMED",
			"code": "71065005"
		  }
		]
	  },
	  {
		"radlexId": "RID2406_RID2400_RID5824",
		"description": "left distal phalanx of fifth finger",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2406_RID2400",
		"rightId": "RID2406_RID2400_RID5825"
	  },
	  {
		"radlexId": "RID2406_RID2400_RID5825",
		"description": "right distal phalanx of fifth finger",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2406_RID2400",
		"leftId": "RID2406_RID2400_RID5824"
	  },
	  {
		"radlexId": "RID860",
		"description": "axillary artery",
		"containedById": "RID39518",
		"leftId": "RID45199",
		"rightId": "RID45198",
		"synonyms": [
		  "arteria axillaris",
		  "Arteria axillaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22654"
		  },
		  {
			"system": "SNOMED",
			"code": "67937003"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.085"
		  },
		  {
			"system": "UMLS",
			"code": "C0004455"
		  }
		]
	  },
	  {
		"radlexId": "RID45198",
		"description": "right axillary artery",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID860",
		"leftId": "RID45199",
		"codes": [
		  {
			"system": "FMA",
			"code": "22655"
		  },
		  {
			"system": "SNOMED",
			"code": "368501004"
		  }
		]
	  },
	  {
		"radlexId": "RID45199",
		"description": "left axillary artery",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID860",
		"rightId": "RID45198",
		"codes": [
		  {
			"system": "FMA",
			"code": "22656"
		  },
		  {
			"system": "SNOMED",
			"code": "368502006"
		  }
		]
	  },
	  {
		"radlexId": "RID1014",
		"description": "axillary vein",
		"containedById": "RID39518",
		"leftId": "RID43900",
		"rightId": "RID43899",
		"synonyms": [
		  "vena axillaris",
		  "vena axillaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13329"
		  },
		  {
			"system": "SNOMED",
			"code": "68705008"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.908.077"
		  },
		  {
			"system": "UMLS",
			"code": "C0004456"
		  }
		]
	  },
	  {
		"radlexId": "RID43899",
		"description": "right axillary vein",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1014",
		"leftId": "RID43900",
		"codes": [
		  {
			"system": "FMA",
			"code": "13330"
		  },
		  {
			"system": "SNOMED",
			"code": "879806001"
		  }
		]
	  },
	  {
		"radlexId": "RID43900",
		"description": "left axillary vein",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1014",
		"rightId": "RID43899",
		"codes": [
		  {
			"system": "FMA",
			"code": "13331"
		  },
		  {
			"system": "SNOMED",
			"code": "879807005"
		  }
		]
	  },
	  {
		"radlexId": "RID865",
		"description": "brachial artery",
		"containedById": "RID1968",
		"leftId": "RID45201",
		"rightId": "RID45200",
		"synonyms": [
		  "arteria brachialis",
		  "arteria brachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22689"
		  },
		  {
			"system": "SNOMED",
			"code": "17137000"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.139"
		  },
		  {
			"system": "UMLS",
			"code": "C0006087"
		  }
		]
	  },
	  {
		"radlexId": "RID45200",
		"description": "right brachial artery",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID865",
		"leftId": "RID45201",
		"codes": [
		  {
			"system": "FMA",
			"code": "22691"
		  },
		  {
			"system": "SNOMED",
			"code": "723962009"
		  }
		]
	  },
	  {
		"radlexId": "RID45201",
		"description": "left brachial artery",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID865",
		"rightId": "RID45200",
		"codes": [
		  {
			"system": "FMA",
			"code": "22692"
		  },
		  {
			"system": "SNOMED",
			"code": "723961002"
		  }
		]
	  },
	  {
		"radlexId": "RID864",
		"description": "deep brachial artery",
		"containedById": "RID1968",
		"leftId": "RID45079",
		"rightId": "RID45078",
		"synonyms": [
		  "arteria profunda brachii",
		  "profunda brachii artery",
		  "Arteria profunda brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22695"
		  },
		  {
			"system": "SNOMED",
			"code": "368518000"
		  }
		]
	  },
	  {
		"radlexId": "RID45078",
		"description": "right deep brachial artery",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID864",
		"leftId": "RID45079",
		"codes": [
		  {
			"system": "FMA",
			"code": "22696"
		  }
		]
	  },
	  {
		"radlexId": "RID45079",
		"description": "left deep brachial artery",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID864",
		"rightId": "RID45078",
		"codes": [
		  {
			"system": "FMA",
			"code": "22697"
		  }
		]
	  },
	  {
		"radlexId": "RID1015",
		"description": "brachial vein",
		"containedById": "RID1968",
		"codes": [
		  {
			"system": "FMA",
			"code": "22934"
		  },
		  {
			"system": "SNOMED",
			"code": "20115005"
		  }
		]
	  },
	  {
		"radlexId": "RID1017",
		"description": "cephalic vein",
		"containedById": "RID1968",
		"leftId": "RID44010",
		"rightId": "RID44009",
		"synonyms": [
		  "vena cephalica",
		  "cephalic vein of forearm",
		  "vena cephalica antebrachii",
		  "vena cephalica antebrachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13324"
		  },
		  {
			"system": "SNOMED",
			"code": "20699002"
		  }
		]
	  },
	  {
		"radlexId": "RID44009",
		"description": "right cephalic vein",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID1017",
		"leftId": "RID44010",
		"codes": [
		  {
			"system": "FMA",
			"code": "13325"
		  }
		]
	  },
	  {
		"radlexId": "RID44010",
		"description": "left cephalic vein",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID1017",
		"rightId": "RID44009",
		"codes": [
		  {
			"system": "FMA",
			"code": "13326"
		  }
		]
	  },
	  {
		"radlexId": "RID1016",
		"description": "basilic vein",
		"containedById": "RID1968",
		"leftId": "RID43998",
		"rightId": "RID43997",
		"synonyms": [
		  "vena basilica antebrachii",
		  "basilic vein of forearm",
		  "vena basilica",
		  "Vena basilica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22908"
		  },
		  {
			"system": "SNOMED",
			"code": "19715009"
		  }
		]
	  },
	  {
		"radlexId": "RID43997",
		"description": "right basilic vein",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID1016",
		"leftId": "RID43998",
		"codes": [
		  {
			"system": "FMA",
			"code": "22909"
		  }
		]
	  },
	  {
		"radlexId": "RID43998",
		"description": "left basilic vein",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID1016",
		"rightId": "RID43997",
		"codes": [
		  {
			"system": "FMA",
			"code": "22910"
		  }
		]
	  },
	  {
		"radlexId": "RID39247",
		"description": "median cubital vein",
		"containedById": "RID2010",
		"leftId": "RID44000",
		"rightId": "RID43999",
		"synonyms": [
		  "median antecubital vein",
		  "antecubital vein",
		  "vena mediana cubiti"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22963"
		  },
		  {
			"system": "SNOMED",
			"code": "49852007"
		  }
		]
	  },
	  {
		"radlexId": "RID43999",
		"description": "right median cubital vein",
		"containedById": "RID2010_RID5825",
		"unsidedId": "RID39247",
		"leftId": "RID44000",
		"codes": [
		  {
			"system": "FMA",
			"code": "22964"
		  }
		]
	  },
	  {
		"radlexId": "RID44000",
		"description": "left median cubital vein",
		"containedById": "RID2010_RID5824",
		"unsidedId": "RID39247",
		"rightId": "RID43999",
		"codes": [
		  {
			"system": "FMA",
			"code": "22965"
		  }
		]
	  },
	  {
		"radlexId": "RID39248",
		"description": "median antebrachial vein",
		"containedById": "RID2107",
		"leftId": "RID44002",
		"rightId": "RID44001",
		"synonyms": [
		  "vena mediana antebrachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22967"
		  },
		  {
			"system": "SNOMED",
			"code": "63013001"
		  }
		]
	  },
	  {
		"radlexId": "RID44001",
		"description": "right median antebrachial vein",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID39248",
		"leftId": "RID44002",
		"codes": [
		  {
			"system": "FMA",
			"code": "22968"
		  }
		]
	  },
	  {
		"radlexId": "RID44002",
		"description": "left median antebrachial vein",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID39248",
		"rightId": "RID44001",
		"codes": [
		  {
			"system": "FMA",
			"code": "22969"
		  }
		]
	  },
	  {
		"radlexId": "RID866",
		"description": "radial artery",
		"containedById": "RID2107",
		"leftId": "RID45137",
		"rightId": "RID45136",
		"synonyms": [
		  "arteria radialis",
		  "Arteria radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22730"
		  },
		  {
			"system": "SNOMED",
			"code": "45631007"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.740"
		  },
		  {
			"system": "UMLS",
			"code": "C0162857"
		  }
		]
	  },
	  {
		"radlexId": "RID45136",
		"description": "right radial artery",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID866",
		"leftId": "RID45137",
		"codes": [
		  {
			"system": "FMA",
			"code": "22733"
		  },
		  {
			"system": "SNOMED",
			"code": "368503001"
		  }
		]
	  },
	  {
		"radlexId": "RID45137",
		"description": "left radial artery",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID866",
		"rightId": "RID45136",
		"codes": [
		  {
			"system": "FMA",
			"code": "22734"
		  },
		  {
			"system": "SNOMED",
			"code": "368504007"
		  }
		]
	  },
	  {
		"radlexId": "RID1161",
		"description": "radial vein",
		"containedById": "RID2107",
		"leftId": "RID43989",
		"rightId": "RID43988",
		"codes": [
		  {
			"system": "FMA",
			"code": "22947"
		  },
		  {
			"system": "SNOMED",
			"code": "52359001"
		  }
		]
	  },
	  {
		"radlexId": "RID43988",
		"description": "right radial vein",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID1161",
		"leftId": "RID43989",
		"codes": [
		  {
			"system": "FMA",
			"code": "22948"
		  }
		]
	  },
	  {
		"radlexId": "RID43989",
		"description": "left radial vein",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID1161",
		"rightId": "RID43988",
		"codes": [
		  {
			"system": "FMA",
			"code": "22949"
		  }
		]
	  },
	  {
		"radlexId": "RID870",
		"description": "ulnar artery",
		"containedById": "RID2107",
		"leftId": "RID45097",
		"rightId": "RID45096",
		"synonyms": [
		  "arteria ulnaris",
		  "arteria ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22796"
		  },
		  {
			"system": "SNOMED",
			"code": "44984001"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.920"
		  },
		  {
			"system": "UMLS",
			"code": "C0162858"
		  }
		]
	  },
	  {
		"radlexId": "RID45096",
		"description": "right ulnar artery",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID870",
		"leftId": "RID45097",
		"codes": [
		  {
			"system": "FMA",
			"code": "22797"
		  },
		  {
			"system": "SNOMED",
			"code": "368505008"
		  }
		]
	  },
	  {
		"radlexId": "RID45097",
		"description": "left ulnar artery",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID870",
		"rightId": "RID45096",
		"codes": [
		  {
			"system": "FMA",
			"code": "22798"
		  },
		  {
			"system": "SNOMED",
			"code": "368506009"
		  }
		]
	  },
	  {
		"radlexId": "RID43978",
		"description": "ulnar vein",
		"containedById": "RID2107",
		"leftId": "RID43980",
		"rightId": "RID43979",
		"codes": [
		  {
			"system": "FMA",
			"code": "22950"
		  },
		  {
			"system": "SNOMED",
			"code": "17623008"
		  }
		]
	  },
	  {
		"radlexId": "RID43979",
		"description": "right ulnar vein",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID43978",
		"leftId": "RID43980",
		"codes": [
		  {
			"system": "FMA",
			"code": "22951"
		  }
		]
	  },
	  {
		"radlexId": "RID43980",
		"description": "left ulnar vein",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID43978",
		"rightId": "RID43979",
		"codes": [
		  {
			"system": "FMA",
			"code": "22952"
		  }
		]
	  },
	  {
		"radlexId": "RID867",
		"description": "deep palmar arch",
		"containedById": "RID2318",
		"synonyms": [
		  "deep palmar arterial arch"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22838"
		  },
		  {
			"system": "SNOMED",
			"code": "10119003"
		  }
		]
	  },
	  {
		"radlexId": "RID871",
		"description": "superficial palmar arch",
		"containedById": "RID2318",
		"codes": [
		  {
			"system": "FMA",
			"code": "22834"
		  },
		  {
			"system": "SNOMED",
			"code": "26818002"
		  }
		]
	  },
	  {
		"radlexId": "RID7240",
		"description": "axillary nerve",
		"containedById": "RID39518",
		"leftId": "RID27731",
		"rightId": "RID27730",
		"synonyms": [
		  "circumflex humeral nerve",
		  "nervus axillaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37072"
		  },
		  {
			"system": "SNOMED",
			"code": "74858004"
		  }
		]
	  },
	  {
		"radlexId": "RID27730",
		"description": "right axillary nerve",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID7240",
		"leftId": "RID27731",
		"codes": [
		  {
			"system": "FMA",
			"code": "37073"
		  },
		  {
			"system": "SNOMED",
			"code": "734428000"
		  }
		]
	  },
	  {
		"radlexId": "RID27731",
		"description": "left axillary nerve",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID7240",
		"rightId": "RID27730",
		"codes": [
		  {
			"system": "FMA",
			"code": "37074"
		  },
		  {
			"system": "SNOMED",
			"code": "734429008"
		  }
		]
	  },
	  {
		"radlexId": "RID7243",
		"description": "musculocutaneous nerve",
		"containedById": "RID1968",
		"leftId": "RID27719",
		"rightId": "RID27718",
		"synonyms": [
		  "nervus musculocutaneus",
		  "casserio nerve"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37064"
		  },
		  {
			"system": "SNOMED",
			"code": "66667004"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.050.540"
		  },
		  {
			"system": "UMLS",
			"code": "C0026855"
		  }
		]
	  },
	  {
		"radlexId": "RID27718",
		"description": "right musculocutaneous nerve",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID7243",
		"leftId": "RID27719",
		"codes": [
		  {
			"system": "FMA",
			"code": "37065"
		  },
		  {
			"system": "SNOMED",
			"code": "762873009"
		  }
		]
	  },
	  {
		"radlexId": "RID27719",
		"description": "left musculocutaneous nerve",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID7243",
		"rightId": "RID27718",
		"codes": [
		  {
			"system": "FMA",
			"code": "37066"
		  },
		  {
			"system": "SNOMED",
			"code": "762872004"
		  }
		]
	  },
	  {
		"radlexId": "RID7257",
		"description": "radial nerve",
		"containedById": "RID1968",
		"leftId": "RID27729",
		"rightId": "RID27728",
		"synonyms": [
		  "nervus radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37069"
		  },
		  {
			"system": "SNOMED",
			"code": "8079007"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.050.700"
		  },
		  {
			"system": "UMLS",
			"code": "C0034518"
		  }
		]
	  },
	  {
		"radlexId": "RID27728",
		"description": "right radial nerve",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID7257",
		"leftId": "RID27729",
		"codes": [
		  {
			"system": "FMA",
			"code": "37070"
		  },
		  {
			"system": "SNOMED",
			"code": "734368000"
		  }
		]
	  },
	  {
		"radlexId": "RID27729",
		"description": "left radial nerve",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID7257",
		"rightId": "RID27728",
		"codes": [
		  {
			"system": "FMA",
			"code": "37071"
		  },
		  {
			"system": "SNOMED",
			"code": "734371008"
		  }
		]
	  },
	  {
		"radlexId": "RID7246",
		"description": "median nerve",
		"containedById": "RID1968",
		"leftId": "RID27721",
		"rightId": "RID27720",
		"synonyms": [
		  "nervus medianus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14385"
		  },
		  {
			"system": "SNOMED",
			"code": "38464002"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.050.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0025058"
		  }
		]
	  },
	  {
		"radlexId": "RID27720",
		"description": "right median nerve",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID7246",
		"leftId": "RID27721",
		"codes": [
		  {
			"system": "FMA",
			"code": "37067"
		  },
		  {
			"system": "SNOMED",
			"code": "734370009"
		  }
		]
	  },
	  {
		"radlexId": "RID27721",
		"description": "left median nerve",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID7246",
		"rightId": "RID27720",
		"codes": [
		  {
			"system": "FMA",
			"code": "37068"
		  },
		  {
			"system": "SNOMED",
			"code": "734369008"
		  }
		]
	  },
	  {
		"radlexId": "RID7273",
		"description": "ulnar nerve",
		"containedById": "RID1968",
		"leftId": "RID27723",
		"rightId": "RID27722",
		"synonyms": [
		  "nervus ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37319"
		  },
		  {
			"system": "SNOMED",
			"code": "58696008"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.050.850"
		  },
		  {
			"system": "UMLS",
			"code": "C0041602"
		  }
		]
	  },
	  {
		"radlexId": "RID27722",
		"description": "right ulnar nerve",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID7273",
		"leftId": "RID27723",
		"codes": [
		  {
			"system": "FMA",
			"code": "37320"
		  },
		  {
			"system": "SNOMED",
			"code": "723834001"
		  }
		]
	  },
	  {
		"radlexId": "RID27723",
		"description": "left ulnar nerve",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID7273",
		"rightId": "RID27722",
		"codes": [
		  {
			"system": "FMA",
			"code": "37321"
		  },
		  {
			"system": "SNOMED",
			"code": "723802005"
		  }
		]
	  },
	  {
		"radlexId": "RID1936",
		"description": "deltoid muscle",
		"containedById": "RID39518",
		"leftId": "RID43060",
		"rightId": "RID43059",
		"synonyms": [
		  "deltoideus",
		  "deltoid",
		  "delt",
		  "musculus deltoideus",
		  "musculus deltoideus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32521"
		  },
		  {
			"system": "SNOMED",
			"code": "35259002"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.300"
		  }
		]
	  },
	  {
		"radlexId": "RID43059",
		"description": "right deltoid muscle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1936",
		"leftId": "RID43060",
		"synonyms": [
		  "right deltoid"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32542"
		  },
		  {
			"system": "SNOMED",
			"code": "16217661000119100"
		  }
		]
	  },
	  {
		"radlexId": "RID43060",
		"description": "left deltoid muscle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1936",
		"rightId": "RID43059",
		"synonyms": [
		  "left deltoid"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32543"
		  },
		  {
			"system": "SNOMED",
			"code": "16217701000119100"
		  }
		]
	  },
	  {
		"radlexId": "RID1940",
		"description": "subscapularis muscle",
		"containedById": "RID39518",
		"leftId": "RID43070",
		"rightId": "RID43069",
		"synonyms": [
		  "musculus subscapularis",
		  "subscapularis",
		  "Musculus subscapularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13413"
		  },
		  {
			"system": "SNOMED",
			"code": "90588001"
		  }
		]
	  },
	  {
		"radlexId": "RID43069",
		"description": "right subscapularis muscle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1940",
		"leftId": "RID43070",
		"synonyms": [
		  "right subscapularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13414"
		  }
		]
	  },
	  {
		"radlexId": "RID43070",
		"description": "left subscapularis muscle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1940",
		"rightId": "RID43069",
		"synonyms": [
		  "left subscapularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13415"
		  }
		]
	  },
	  {
		"radlexId": "RID1941",
		"description": "supraspinatus muscle",
		"containedById": "RID39518",
		"leftId": "RID43062",
		"rightId": "RID43061",
		"synonyms": [
		  "musculus supraspinatus",
		  "supraspinatus",
		  "musculus supraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9629"
		  },
		  {
			"system": "SNOMED",
			"code": "6423006"
		  }
		]
	  },
	  {
		"radlexId": "RID43061",
		"description": "right supraspinatus muscle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1941",
		"leftId": "RID43062",
		"synonyms": [
		  "right supraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32544"
		  }
		]
	  },
	  {
		"radlexId": "RID43062",
		"description": "left supraspinatus muscle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1941",
		"rightId": "RID43061",
		"synonyms": [
		  "left supraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32545"
		  }
		]
	  },
	  {
		"radlexId": "RID1939",
		"description": "infraspinatus muscle",
		"containedById": "RID39518",
		"leftId": "RID43064",
		"rightId": "RID43063",
		"synonyms": [
		  "musculus infraspinatus",
		  "infraspinatus",
		  "Musculus infraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32546"
		  },
		  {
			"system": "SNOMED",
			"code": "72573008"
		  }
		]
	  },
	  {
		"radlexId": "RID43063",
		"description": "right infraspinatus muscle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1939",
		"leftId": "RID43064",
		"synonyms": [
		  "right infraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32547"
		  }
		]
	  },
	  {
		"radlexId": "RID43064",
		"description": "left infraspinatus muscle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1939",
		"rightId": "RID43063",
		"synonyms": [
		  "left infraspinatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32548"
		  }
		]
	  },
	  {
		"radlexId": "RID1942",
		"description": "teres minor muscle",
		"containedById": "RID39518",
		"leftId": "RID43068",
		"rightId": "RID43067",
		"synonyms": [
		  "musculus teres minor",
		  "teres minor",
		  "musculus teres minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32550"
		  },
		  {
			"system": "SNOMED",
			"code": "51159009"
		  }
		]
	  },
	  {
		"radlexId": "RID43067",
		"description": "right teres minor muscle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID1942",
		"leftId": "RID43068",
		"synonyms": [
		  "right teres minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32553"
		  }
		]
	  },
	  {
		"radlexId": "RID43068",
		"description": "left teres minor muscle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID1942",
		"rightId": "RID43067",
		"synonyms": [
		  "left teres minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32554"
		  }
		]
	  },
	  {
		"radlexId": "RID2504",
		"description": "teres major muscle",
		"containedById": "RID39518",
		"leftId": "RID43066",
		"rightId": "RID43065",
		"synonyms": [
		  "musculus teres major",
		  "musculus teres major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32549"
		  },
		  {
			"system": "SNOMED",
			"code": "1193009"
		  }
		]
	  },
	  {
		"radlexId": "RID43065",
		"description": "right teres major muscle",
		"containedById": "RID39518_RID5825",
		"unsidedId": "RID2504",
		"leftId": "RID43066",
		"synonyms": [
		  "right teres major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32551"
		  }
		]
	  },
	  {
		"radlexId": "RID43066",
		"description": "left teres major muscle",
		"containedById": "RID39518_RID5824",
		"unsidedId": "RID2504",
		"rightId": "RID43065",
		"synonyms": [
		  "left teres major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32552"
		  }
		]
	  },
	  {
		"radlexId": "RID2004",
		"description": "coracobrachialis muscle",
		"containedById": "RID1968",
		"leftId": "RID43081",
		"rightId": "RID43080",
		"synonyms": [
		  "coracobrachialis",
		  "musculus coracobrachialis",
		  "pirogoff aponeurosis",
		  "Musculus coracobrachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37664"
		  },
		  {
			"system": "SNOMED",
			"code": "44202005"
		  }
		]
	  },
	  {
		"radlexId": "RID43080",
		"description": "right coracobrachialis muscle",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID2004",
		"leftId": "RID43081",
		"synonyms": [
		  "right coracobrachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37665"
		  }
		]
	  },
	  {
		"radlexId": "RID43081",
		"description": "left coracobrachialis muscle",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID2004",
		"rightId": "RID43080",
		"synonyms": [
		  "left coracobrachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37666"
		  }
		]
	  },
	  {
		"radlexId": "RID1999",
		"description": "triceps brachii muscle",
		"containedById": "RID1968",
		"leftId": "RID43085",
		"rightId": "RID43084",
		"synonyms": [
		  "musculus triceps brachii",
		  "triceps brachii",
		  "triceps muscle",
		  "Musculus triceps brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37688"
		  },
		  {
			"system": "SNOMED",
			"code": "40284004"
		  }
		]
	  },
	  {
		"radlexId": "RID43084",
		"description": "right triceps brachii muscle",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID1999",
		"leftId": "RID43085",
		"synonyms": [
		  "right triceps brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37689"
		  }
		]
	  },
	  {
		"radlexId": "RID43085",
		"description": "left triceps brachii muscle",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID1999",
		"rightId": "RID43084",
		"synonyms": [
		  "left triceps brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37690"
		  }
		]
	  },
	  {
		"radlexId": "RID1996",
		"description": "biceps brachii muscle",
		"containedById": "RID1968",
		"leftId": "RID43079",
		"rightId": "RID43078",
		"synonyms": [
		  "biceps brachii",
		  "musculus biceps brachii",
		  "musculus biceps brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37670"
		  },
		  {
			"system": "SNOMED",
			"code": "16225001"
		  }
		]
	  },
	  {
		"radlexId": "RID43078",
		"description": "right biceps brachii muscle",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID1996",
		"leftId": "RID43079",
		"synonyms": [
		  "right biceps brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37671"
		  },
		  {
			"system": "SNOMED",
			"code": "771321001"
		  }
		]
	  },
	  {
		"radlexId": "RID43079",
		"description": "left biceps brachii muscle",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID1996",
		"rightId": "RID43078",
		"synonyms": [
		  "left biceps brachii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37672"
		  },
		  {
			"system": "SNOMED",
			"code": "771320000"
		  }
		]
	  },
	  {
		"radlexId": "RID2005",
		"description": "brachialis muscle",
		"containedById": "RID1968",
		"leftId": "RID43083",
		"rightId": "RID43082",
		"synonyms": [
		  "musculus brachialis",
		  "brachialis",
		  "casserio muscle",
		  "Musculus brachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37667"
		  },
		  {
			"system": "SNOMED",
			"code": "75915005"
		  }
		]
	  },
	  {
		"radlexId": "RID43082",
		"description": "right brachialis muscle",
		"containedById": "RID1968_RID5825",
		"unsidedId": "RID2005",
		"leftId": "RID43083",
		"synonyms": [
		  "right brachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37668"
		  }
		]
	  },
	  {
		"radlexId": "RID43083",
		"description": "left brachialis muscle",
		"containedById": "RID1968_RID5824",
		"unsidedId": "RID2005",
		"rightId": "RID43082",
		"synonyms": [
		  "left brachialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37669"
		  }
		]
	  },
	  {
		"radlexId": "RID2151",
		"description": "supinator muscle",
		"containedById": "RID2107",
		"leftId": "RID43122",
		"rightId": "RID43121",
		"synonyms": [
		  "musculus supinator",
		  "Musculus supinator"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38512"
		  },
		  {
			"system": "SNOMED",
			"code": "40678005"
		  }
		]
	  },
	  {
		"radlexId": "RID43121",
		"description": "right supinator muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2151",
		"leftId": "RID43122",
		"synonyms": [
		  "right supinator"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38513"
		  }
		]
	  },
	  {
		"radlexId": "RID43122",
		"description": "left supinator muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2151",
		"rightId": "RID43121",
		"synonyms": [
		  "left supinator"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38514"
		  }
		]
	  },
	  {
		"radlexId": "RID2142",
		"description": "brachioradialis muscle",
		"containedById": "RID2107",
		"leftId": "RID43109",
		"rightId": "RID43108",
		"synonyms": [
		  "musculus brachioradialis",
		  "Musculus brachioradialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38485"
		  },
		  {
			"system": "SNOMED",
			"code": "72111005"
		  }
		]
	  },
	  {
		"radlexId": "RID43108",
		"description": "right brachioradialis muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2142",
		"leftId": "RID43109",
		"synonyms": [
		  "right brachioradialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38486"
		  }
		]
	  },
	  {
		"radlexId": "RID43109",
		"description": "left brachioradialis muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2142",
		"rightId": "RID43108",
		"synonyms": [
		  "left brachioradialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38487"
		  }
		]
	  },
	  {
		"radlexId": "RID2164",
		"description": "flexor digitorum superficialis muscle",
		"containedById": "RID2107",
		"leftId": "RID43101",
		"rightId": "RID43100",
		"synonyms": [
		  "musculus flexor digitorum superficialis",
		  "Musculus flexor digitorum superficialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38469"
		  },
		  {
			"system": "SNOMED",
			"code": "89895007"
		  }
		]
	  },
	  {
		"radlexId": "RID43100",
		"description": "right flexor digitorum superficialis muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2164",
		"leftId": "RID43101",
		"synonyms": [
		  "right flexor digitorum superficialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38470"
		  }
		]
	  },
	  {
		"radlexId": "RID43101",
		"description": "left flexor digitorum superficialis muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2164",
		"rightId": "RID43100",
		"synonyms": [
		  "left flexor digitorum superficialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38471"
		  }
		]
	  },
	  {
		"radlexId": "RID2168",
		"description": "flexor digitorum profundus muscle",
		"containedById": "RID2107",
		"leftId": "RID43103",
		"rightId": "RID43102",
		"synonyms": [
		  "musculus flexor digitorum profundus",
		  "Musculus flexor digitorum profundus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38478"
		  },
		  {
			"system": "SNOMED",
			"code": "423541009"
		  }
		]
	  },
	  {
		"radlexId": "RID43102",
		"description": "right flexor digitorum profundus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2168",
		"leftId": "RID43103",
		"synonyms": [
		  "right flexor digitorum profundus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38479"
		  }
		]
	  },
	  {
		"radlexId": "RID43103",
		"description": "left flexor digitorum profundus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2168",
		"rightId": "RID43102",
		"synonyms": [
		  "left flexor digitorum profundus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38480"
		  }
		]
	  },
	  {
		"radlexId": "RID2161",
		"description": "flexor carpi radialis muscle",
		"containedById": "RID2107",
		"leftId": "RID43095",
		"rightId": "RID43094",
		"synonyms": [
		  "musculus flexor carpi radialis",
		  "Musculus flexor carpi radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38459"
		  },
		  {
			"system": "SNOMED",
			"code": "30339000"
		  }
		]
	  },
	  {
		"radlexId": "RID43094",
		"description": "right flexor carpi radialis muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2161",
		"leftId": "RID43095",
		"synonyms": [
		  "right flexor carpi radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38460"
		  }
		]
	  },
	  {
		"radlexId": "RID43095",
		"description": "left flexor carpi radialis muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2161",
		"rightId": "RID43094",
		"synonyms": [
		  "left flexor carpi radialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38461"
		  }
		]
	  },
	  {
		"radlexId": "RID2163",
		"description": "flexor carpi ulnaris muscle",
		"containedById": "RID2107",
		"leftId": "RID43099",
		"rightId": "RID43098",
		"synonyms": [
		  "musculus flexor carpi ulnaris",
		  "musculus flexor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38465"
		  },
		  {
			"system": "SNOMED",
			"code": "14437004"
		  }
		]
	  },
	  {
		"radlexId": "RID43098",
		"description": "right flexor carpi ulnaris muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2163",
		"leftId": "RID43099",
		"synonyms": [
		  "right flexor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38466"
		  }
		]
	  },
	  {
		"radlexId": "RID43099",
		"description": "left flexor carpi ulnaris muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2163",
		"rightId": "RID43098",
		"synonyms": [
		  "left flexor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38467"
		  }
		]
	  },
	  {
		"radlexId": "RID2171",
		"description": "pronator quadratus muscle",
		"containedById": "RID2107",
		"leftId": "RID43107",
		"rightId": "RID43106",
		"synonyms": [
		  "musculus pronator quadratus",
		  "pronator quadratus",
		  "Musculus pronator quadratrus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38453"
		  },
		  {
			"system": "SNOMED",
			"code": "13869007"
		  }
		]
	  },
	  {
		"radlexId": "RID43106",
		"description": "right pronator quadratus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2171",
		"leftId": "RID43107",
		"synonyms": [
		  "right pronator quadratus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38454"
		  }
		]
	  },
	  {
		"radlexId": "RID43107",
		"description": "left pronator quadratus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2171",
		"rightId": "RID43106",
		"synonyms": [
		  "left pronator quadratus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38455"
		  }
		]
	  },
	  {
		"radlexId": "RID2160",
		"description": "pronator teres muscle",
		"containedById": "RID2107",
		"leftId": "RID43093",
		"rightId": "RID43092",
		"synonyms": [
		  "musculus pronator teres",
		  "musculus pronator teres"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38450"
		  },
		  {
			"system": "SNOMED",
			"code": "29376000"
		  }
		]
	  },
	  {
		"radlexId": "RID43092",
		"description": "right pronator teres muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2160",
		"leftId": "RID43093",
		"synonyms": [
		  "right pronator teres"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38451"
		  }
		]
	  },
	  {
		"radlexId": "RID43093",
		"description": "left pronator teres muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2160",
		"rightId": "RID43092",
		"synonyms": [
		  "left pronator teres"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38452"
		  }
		]
	  },
	  {
		"radlexId": "RID2162",
		"description": "palmaris longus muscle",
		"containedById": "RID2107",
		"leftId": "RID43097",
		"rightId": "RID43096",
		"synonyms": [
		  "musculus palmaris longus",
		  "musculus palmaris longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38462"
		  },
		  {
			"system": "SNOMED",
			"code": "49931003"
		  }
		]
	  },
	  {
		"radlexId": "RID43096",
		"description": "right palmaris longus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2162",
		"leftId": "RID43097",
		"synonyms": [
		  "right palmaris longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38463"
		  }
		]
	  },
	  {
		"radlexId": "RID43097",
		"description": "left palmaris longus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2162",
		"rightId": "RID43096",
		"synonyms": [
		  "left palmaris longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38464"
		  }
		]
	  },
	  {
		"radlexId": "RID2169",
		"description": "flexor pollicis longus muscle",
		"containedById": "RID2107",
		"leftId": "RID43105",
		"rightId": "RID43104",
		"synonyms": [
		  "musculus flexor pollicis longus",
		  "Musculus flexor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38481"
		  },
		  {
			"system": "SNOMED",
			"code": "82465007"
		  }
		]
	  },
	  {
		"radlexId": "RID43104",
		"description": "right flexor pollicis longus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2169",
		"leftId": "RID43105",
		"synonyms": [
		  "right flexor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38482"
		  }
		]
	  },
	  {
		"radlexId": "RID43105",
		"description": "left flexor pollicis longus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2169",
		"rightId": "RID43104",
		"synonyms": [
		  "left flexor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38484"
		  }
		]
	  },
	  {
		"radlexId": "RID2149",
		"description": "anconeus muscle",
		"containedById": "RID2107",
		"leftId": "RID43090",
		"rightId": "RID43089",
		"synonyms": [
		  "musculus anconeus",
		  "anconeus",
		  "Musculus anconeus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37704"
		  },
		  {
			"system": "SNOMED",
			"code": "53269004"
		  }
		]
	  },
	  {
		"radlexId": "RID43089",
		"description": "right anconeus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2149",
		"leftId": "RID43090",
		"synonyms": [
		  "right anconeus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37705"
		  }
		]
	  },
	  {
		"radlexId": "RID43090",
		"description": "left anconeus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2149",
		"rightId": "RID43089",
		"synonyms": [
		  "left anconeus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37706"
		  }
		]
	  },
	  {
		"radlexId": "RID2145",
		"description": "extensor carpi radialis longus muscle",
		"containedById": "RID2107",
		"leftId": "RID43111",
		"rightId": "RID43110",
		"synonyms": [
		  "musculus extensor carpi radialis longus",
		  "musculus extensor carpi radialis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38494"
		  },
		  {
			"system": "SNOMED",
			"code": "39421004"
		  }
		]
	  },
	  {
		"radlexId": "RID43110",
		"description": "right extensor carpi radialis longus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2145",
		"leftId": "RID43111",
		"synonyms": [
		  "right extensor carpi radialis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38495"
		  }
		]
	  },
	  {
		"radlexId": "RID43111",
		"description": "left extensor carpi radialis longus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2145",
		"rightId": "RID43110",
		"synonyms": [
		  "left extensor carpi radialis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38496"
		  }
		]
	  },
	  {
		"radlexId": "RID2144",
		"description": "extensor carpi radialis brevis muscle",
		"containedById": "RID2107",
		"leftId": "RID43113",
		"rightId": "RID43112",
		"synonyms": [
		  "extensor carpi radialis brevis",
		  "musculus extensor carpi radialis brevis",
		  "Musculus extensor carpi radialis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38497"
		  },
		  {
			"system": "SNOMED",
			"code": "86172000"
		  }
		]
	  },
	  {
		"radlexId": "RID43112",
		"description": "right extensor carpi radialis brevis muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2144",
		"leftId": "RID43113",
		"synonyms": [
		  "right extensor carpi radialis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38498"
		  }
		]
	  },
	  {
		"radlexId": "RID43113",
		"description": "left extensor carpi radialis brevis muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2144",
		"rightId": "RID43112",
		"synonyms": [
		  "left extensor carpi radialis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38499"
		  }
		]
	  },
	  {
		"radlexId": "RID2146",
		"description": "extensor carpi ulnaris muscle",
		"containedById": "RID2107",
		"leftId": "RID43120",
		"rightId": "RID43119",
		"synonyms": [
		  "musculus extensor carpi ulnaris",
		  "Musculus extensor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38506"
		  },
		  {
			"system": "SNOMED",
			"code": "113227003"
		  }
		]
	  },
	  {
		"radlexId": "RID43119",
		"description": "right extensor carpi ulnaris muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2146",
		"leftId": "RID43120",
		"synonyms": [
		  "right extensor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38507"
		  }
		]
	  },
	  {
		"radlexId": "RID43120",
		"description": "left extensor carpi ulnaris muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2146",
		"rightId": "RID43119",
		"synonyms": [
		  "left extensor carpi ulnaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38508"
		  }
		]
	  },
	  {
		"radlexId": "RID43114",
		"description": "extensor digitorum muscle",
		"containedById": "RID2107",
		"leftId": "RID43116",
		"rightId": "RID43115",
		"synonyms": [
		  "extensor digitorum l musculus extensor digitorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38500"
		  },
		  {
			"system": "SNOMED",
			"code": "50176000"
		  }
		]
	  },
	  {
		"radlexId": "RID43115",
		"description": "right extensor digitorum muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID43114",
		"leftId": "RID43116",
		"synonyms": [
		  "right extensor digitorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38501"
		  }
		]
	  },
	  {
		"radlexId": "RID43116",
		"description": "left extensor digitorum muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID43114",
		"rightId": "RID43115",
		"synonyms": [
		  "left extensor digitorum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38502"
		  }
		]
	  },
	  {
		"radlexId": "RID2148",
		"description": "extensor digiti minimi muscle",
		"containedById": "RID2107",
		"leftId": "RID43118",
		"rightId": "RID43117",
		"synonyms": [
		  "musculus extensor digiti minimi",
		  "Musculus extensor digiti minimi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38503"
		  },
		  {
			"system": "SNOMED",
			"code": "86104000"
		  }
		]
	  },
	  {
		"radlexId": "RID43117",
		"description": "right extensor digiti minimi muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2148",
		"leftId": "RID43118",
		"synonyms": [
		  "right extensor digiti minimi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38504"
		  }
		]
	  },
	  {
		"radlexId": "RID43118",
		"description": "left extensor digiti minimi muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2148",
		"rightId": "RID43117",
		"synonyms": [
		  "left extensor digiti minimi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38505"
		  }
		]
	  },
	  {
		"radlexId": "RID2154",
		"description": "abductor pollicis longus muscle",
		"containedById": "RID2107",
		"leftId": "RID43124",
		"rightId": "RID43123",
		"synonyms": [
		  "musculus abductor pollicis longus",
		  "abductor pollicis longus muscle",
		  "musculus abductor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38515"
		  },
		  {
			"system": "SNOMED",
			"code": "25541006"
		  }
		]
	  },
	  {
		"radlexId": "RID43123",
		"description": "right abductor pollicis longus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2154",
		"leftId": "RID43124",
		"synonyms": [
		  "right abductor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38516"
		  }
		]
	  },
	  {
		"radlexId": "RID43124",
		"description": "left abductor pollicis longus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2154",
		"rightId": "RID43123",
		"synonyms": [
		  "left abductor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38517"
		  }
		]
	  },
	  {
		"radlexId": "RID2156",
		"description": "extensor pollicis longus muscle",
		"containedById": "RID2107",
		"leftId": "RID43128",
		"rightId": "RID43127",
		"synonyms": [
		  "musculus extensor pollicis longus",
		  "Musculus extensor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38521"
		  },
		  {
			"system": "SNOMED",
			"code": "81440007"
		  }
		]
	  },
	  {
		"radlexId": "RID43127",
		"description": "right extensor pollicis longus muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2156",
		"leftId": "RID43128",
		"synonyms": [
		  "right extensor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38522"
		  }
		]
	  },
	  {
		"radlexId": "RID43128",
		"description": "left extensor pollicis longus muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2156",
		"rightId": "RID43127",
		"synonyms": [
		  "left extensor pollicis longus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38523"
		  }
		]
	  },
	  {
		"radlexId": "RID2155",
		"description": "extensor pollicis brevis muscle",
		"containedById": "RID2107",
		"leftId": "RID43126",
		"rightId": "RID43125",
		"synonyms": [
		  "musculus extensor pollicis brevis",
		  "Musculus extensor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38518"
		  },
		  {
			"system": "SNOMED",
			"code": "38259003"
		  }
		]
	  },
	  {
		"radlexId": "RID43125",
		"description": "right extensor pollicis brevis muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2155",
		"leftId": "RID43126",
		"synonyms": [
		  "right extensor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38519"
		  }
		]
	  },
	  {
		"radlexId": "RID43126",
		"description": "left extensor pollicis brevis muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2155",
		"rightId": "RID43125",
		"synonyms": [
		  "left extensor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38520"
		  }
		]
	  },
	  {
		"radlexId": "RID2157",
		"description": "extensor indicis muscle",
		"containedById": "RID2107",
		"leftId": "RID43130",
		"rightId": "RID43129",
		"synonyms": [
		  "musculus extensor indicis",
		  "musculus extensor indicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38524"
		  },
		  {
			"system": "SNOMED",
			"code": "23250006"
		  }
		]
	  },
	  {
		"radlexId": "RID43129",
		"description": "right extensor indicis muscle",
		"containedById": "RID2107_RID5825",
		"unsidedId": "RID2157",
		"leftId": "RID43130",
		"synonyms": [
		  "right extensor indicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38525"
		  }
		]
	  },
	  {
		"radlexId": "RID43130",
		"description": "left extensor indicis muscle",
		"containedById": "RID2107_RID5824",
		"unsidedId": "RID2157",
		"rightId": "RID43129",
		"synonyms": [
		  "left extensor indicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "38526"
		  }
		]
	  },
	  {
		"radlexId": "RID2358",
		"description": "abductor digiti minimi muscle of hand",
		"containedById": "RID2318",
		"leftId": "RID43144",
		"rightId": "RID43143",
		"synonyms": [
		  "abductor digiti quinti muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37382"
		  },
		  {
			"system": "SNOMED",
			"code": "115982000"
		  }
		]
	  },
	  {
		"radlexId": "RID43143",
		"description": "abductor digiti minimi of right hand",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2358",
		"leftId": "RID43144",
		"codes": [
		  {
			"system": "FMA",
			"code": "37396"
		  }
		]
	  },
	  {
		"radlexId": "RID43144",
		"description": "abductor digiti minimi of left hand",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2358",
		"rightId": "RID43143",
		"codes": [
		  {
			"system": "FMA",
			"code": "37397"
		  }
		]
	  },
	  {
		"radlexId": "RID2359",
		"description": "flexor digiti minimi brevis muscle of hand",
		"containedById": "RID2318",
		"leftId": "RID43146",
		"rightId": "RID43145",
		"synonyms": [
		  "musculus flexor digiti minimi brevis (manus)",
		  "musculus flexor digiti minimi brevis (manus)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37383"
		  },
		  {
			"system": "SNOMED",
			"code": "90647005"
		  }
		]
	  },
	  {
		"radlexId": "RID43145",
		"description": "flexor digiti minimi brevis of right hand",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2359",
		"leftId": "RID43146",
		"codes": [
		  {
			"system": "FMA",
			"code": "37398"
		  }
		]
	  },
	  {
		"radlexId": "RID43146",
		"description": "flexor digiti minimi brevis of left hand",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2359",
		"rightId": "RID43145",
		"codes": [
		  {
			"system": "FMA",
			"code": "37399"
		  }
		]
	  },
	  {
		"radlexId": "RID2360",
		"description": "opponens digiti minimi muscle of hand",
		"containedById": "RID2318",
		"leftId": "RID43148",
		"rightId": "RID43147",
		"synonyms": [
		  "musculus opponens digiti minimi (manus)",
		  "musculus opponens digiti minimi (manus)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37384"
		  },
		  {
			"system": "SNOMED",
			"code": "79959005"
		  }
		]
	  },
	  {
		"radlexId": "RID43147",
		"description": "opponens digiti minimi of right hand",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2360",
		"leftId": "RID43148",
		"codes": [
		  {
			"system": "FMA",
			"code": "37400"
		  }
		]
	  },
	  {
		"radlexId": "RID43148",
		"description": "opponens digiti minimi of left hand",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2360",
		"rightId": "RID43147",
		"codes": [
		  {
			"system": "FMA",
			"code": "37401"
		  }
		]
	  },
	  {
		"radlexId": "RID2356",
		"description": "palmaris brevis muscle",
		"containedById": "RID2318",
		"leftId": "RID43142",
		"rightId": "RID43141",
		"synonyms": [
		  "musculus palmaris brevis",
		  "Musculus palmaris brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37381"
		  },
		  {
			"system": "SNOMED",
			"code": "18513005"
		  }
		]
	  },
	  {
		"radlexId": "RID43141",
		"description": "right palmaris brevis muscle",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2356",
		"leftId": "RID43142",
		"synonyms": [
		  "right palmaris brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37394"
		  }
		]
	  },
	  {
		"radlexId": "RID43142",
		"description": "left palmaris brevis muscle",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2356",
		"rightId": "RID43141",
		"synonyms": [
		  "left palmaris brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37395"
		  }
		]
	  },
	  {
		"radlexId": "RID2346",
		"description": "abductor pollicis brevis muscle",
		"containedById": "RID2318",
		"leftId": "RID43134",
		"rightId": "RID43133",
		"synonyms": [
		  "musculus abductor pollicis brevis",
		  "Musculus abductor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37373"
		  },
		  {
			"system": "SNOMED",
			"code": "32573001"
		  }
		]
	  },
	  {
		"radlexId": "RID43133",
		"description": "right abductor pollicis brevis muscle",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2346",
		"leftId": "RID43134",
		"synonyms": [
		  "right abductor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37386"
		  }
		]
	  },
	  {
		"radlexId": "RID43134",
		"description": "left abductor pollicis brevis muscle",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2346",
		"rightId": "RID43133",
		"synonyms": [
		  "left abductor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37387"
		  }
		]
	  },
	  {
		"radlexId": "RID2351",
		"description": "adductor pollicis muscle",
		"containedById": "RID2318",
		"leftId": "RID43140",
		"rightId": "RID43139",
		"synonyms": [
		  "musculus adductor pollicis",
		  "musculus adductor pollicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37380"
		  },
		  {
			"system": "SNOMED",
			"code": "60114005"
		  }
		]
	  },
	  {
		"radlexId": "RID43139",
		"description": "right adductor pollicis muscle",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2351",
		"leftId": "RID43140",
		"synonyms": [
		  "right adductor pollicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37392"
		  }
		]
	  },
	  {
		"radlexId": "RID43140",
		"description": "left adductor pollicis muscle",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2351",
		"rightId": "RID43139",
		"synonyms": [
		  "left adductor pollicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37393"
		  }
		]
	  },
	  {
		"radlexId": "RID2347",
		"description": "opponens pollicis muscle",
		"containedById": "RID2318",
		"leftId": "RID43136",
		"rightId": "RID43135",
		"synonyms": [
		  "musculus opponens pollicis",
		  "Musculus opponens pollicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37379"
		  },
		  {
			"system": "SNOMED",
			"code": "79727005"
		  }
		]
	  },
	  {
		"radlexId": "RID43135",
		"description": "right opponens pollicis muscle",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2347",
		"leftId": "RID43136",
		"synonyms": [
		  "right opponens pollicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37390"
		  }
		]
	  },
	  {
		"radlexId": "RID43136",
		"description": "left opponens pollicis muscle",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2347",
		"rightId": "RID43135",
		"synonyms": [
		  "left opponens pollicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37391"
		  }
		]
	  },
	  {
		"radlexId": "RID2348",
		"description": "flexor pollicis brevis muscle",
		"containedById": "RID2318",
		"leftId": "RID43138",
		"rightId": "RID43137",
		"synonyms": [
		  "musculus flexor pollicis brevis",
		  "musculus flexor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37378"
		  },
		  {
			"system": "SNOMED",
			"code": "20588008"
		  }
		]
	  },
	  {
		"radlexId": "RID43137",
		"description": "right flexor pollicis brevis muscle",
		"containedById": "RID2318_RID5825",
		"unsidedId": "RID2348",
		"leftId": "RID43138",
		"synonyms": [
		  "right flexor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37388"
		  }
		]
	  },
	  {
		"radlexId": "RID43138",
		"description": "left flexor pollicis brevis muscle",
		"containedById": "RID2318_RID5824",
		"unsidedId": "RID2348",
		"rightId": "RID43137",
		"synonyms": [
		  "left flexor pollicis brevis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37389"
		  }
		]
	  },
	  {
		"radlexId": "RID2362",
		"description": "palmar interosseous muscle of hand",
		"containedById": "RID2318",
		"synonyms": [
		  "palmar interosseous of hand"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37419"
		  },
		  {
			"system": "SNOMED",
			"code": "85212008"
		  }
		]
	  },
	  {
		"radlexId": "RID43161",
		"description": "dorsal interosseous muscle of hand",
		"containedById": "RID2318",
		"synonyms": [
		  "dorsal interosseous of hand"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37418"
		  },
		  {
			"system": "SNOMED",
			"code": "60618007"
		  }
		]
	  },
	  {
		"radlexId": "RID2364",
		"description": "lumbrical muscle of hand",
		"containedById": "RID2318",
		"synonyms": [
		  "lumbrical of hand",
		  "hand lumbrical"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "37385"
		  },
		  {
			"system": "SNOMED",
			"code": "88229007"
		  }
		]
	  },
	  {
		"radlexId": "RID1517",
		"description": "axillary lymph node",
		"containedById": "RID1243",
		"leftId": "RID1517_RID5824",
		"rightId": "RID1517_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "276805"
		  },
		  {
			"system": "SNOMED",
			"code": "68171009"
		  }
		]
	  },
	  {
		"radlexId": "RID1517_RID5824",
		"description": "left axillary lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1517",
		"rightId": "RID1517_RID5825"
	  },
	  {
		"radlexId": "RID1517_RID5825",
		"description": "right axillary lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1517",
		"leftId": "RID1517_RID5824"
	  },
	  {
		"radlexId": "RID836",
		"description": "superior epigastric artery",
		"containedById": "RID30008",
		"leftId": "RID44830",
		"rightId": "RID44829",
		"partOfId": "RID49921",
		"synonyms": [
		  "arteria epigastrica superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "10646"
		  },
		  {
			"system": "SNOMED",
			"code": "34988000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226288"
		  }
		]
	  },
	  {
		"radlexId": "RID44829",
		"description": "right superior epigastric artery",
		"containedById": "RID30008",
		"unsidedId": "RID836",
		"leftId": "RID44830",
		"partOfId": "RID49921",
		"codes": [
		  {
			"system": "FMA",
			"code": "3988"
		  },
		  {
			"system": "UMLS",
			"code": "C0500544"
		  }
		]
	  },
	  {
		"radlexId": "RID44830",
		"description": "left superior epigastric artery",
		"containedById": "RID30008",
		"unsidedId": "RID836",
		"rightId": "RID44829",
		"partOfId": "RID49921",
		"codes": [
		  {
			"system": "FMA",
			"code": "4083"
		  },
		  {
			"system": "UMLS",
			"code": "C0500600"
		  }
		]
	  },
	  {
		"radlexId": "RID13091",
		"description": "inferior epigastric artery",
		"containedById": "RID30008",
		"leftId": "RID13091_RID5824",
		"rightId": "RID13091_RID5825",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "20686"
		  },
		  {
			"system": "SNOMED",
			"code": "78577000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226401"
		  }
		]
	  },
	  {
		"radlexId": "RID13091_RID5824",
		"description": "left inferior epigastric artery",
		"containedById": "RID30008",
		"unsidedId": "RID13091",
		"rightId": "RID13091_RID5825",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID13091_RID5825",
		"description": "right inferior epigastric artery",
		"containedById": "RID30008",
		"unsidedId": "RID13091",
		"leftId": "RID13091_RID5824",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID30014",
		"description": "wall of abdomen",
		"containedById": "RID56",
		"partOfId": "RID56",
		"synonyms": [
		  "abdominal wall"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "299989"
		  },
		  {
			"system": "UMLS",
			"code": "C0836916"
		  }
		]
	  },
	  {
		"radlexId": "RID35951",
		"description": "pancreatic artery",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "70470"
		  },
		  {
			"system": "SNOMED",
			"code": "360344003"
		  },
		  {
			"system": "UMLS",
			"code": "C0884057"
		  }
		]
	  },
	  {
		"radlexId": "RID49533",
		"description": "celiac nerve plexus",
		"containedById": "RID431",
		"partOfId": "RID16280",
		"synonyms": [
		  "celiac plexus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "6630"
		  },
		  {
			"system": "UMLS",
			"code": "C0007572"
		  }
		]
	  },
	  {
		"radlexId": "RID50378",
		"description": "set of visceral vessels",
		"containedById": "RID56",
		"partOfId": "RID13183",
		"synonyms": [
		  "visceral vessels"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C4489454"
		  }
		]
	  },
	  {
		"radlexId": "RID49962",
		"description": "set of chest vessels",
		"containedById": "RID1243",
		"partOfId": "RID13183",
		"synonyms": [
		  "chest vessels",
		  "thoracic vessels"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0884017"
		  }
		]
	  },
	  {
		"radlexId": "RID49921",
		"description": "set of abdominal vessels",
		"containedById": "RID56",
		"partOfId": "RID13183",
		"synonyms": [
		  "abdominal blood vessels",
		  "vessels of abdomen",
		  "blood vessels of abdomen",
		  "abdominal vessels"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0883990"
		  }
		]
	  },
	  {
		"radlexId": "RID49933",
		"description": "set of pelvis vessels",
		"containedById": "RID2507",
		"partOfId": "RID13183",
		"synonyms": [
		  "blood vessels of pelvis",
		  "pelvis vessels",
		  "vessels of pelvis"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0884061"
		  }
		]
	  },
	  {
		"radlexId": "RID16280",
		"description": "set of autonomic nerves",
		"containedById": "RID39569",
		"synonyms": [
		  "autonomic nerves set",
		  "autonomic nerves"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "74782"
		  },
		  {
			"system": "UMLS",
			"code": "C2323219"
		  }
		]
	  },
	  {
		"radlexId": "RID13183",
		"description": "arterial system",
		"containedById": "RID39569",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "11527006"
		  },
		  {
			"system": "UMLS",
			"code": "C0226004"
		  }
		]
	  },
	  {
		"radlexId": "RID225",
		"description": "calyx of renal collecting system",
		"containedById": "RID431",
		"partOfId": "RID205",
		"synonyms": [
		  "renal calyx",
		  "calyx"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "2334006"
		  },
		  {
			"system": "UMLS",
			"code": "C0022651"
		  }
		]
	  },
	  {
		"radlexId": "RID30781",
		"description": "back",
		"containedById": "RID39569",
		"synonyms": [
		  "dorsum",
		  "back of body proper",
		  "regiones dorsalis",
		  "regiones dorsalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14181"
		  },
		  {
			"system": "SNOMED",
			"code": "77568009"
		  },
		  {
			"system": "MESH",
			"code": "A01.923.176"
		  }
		]
	  },
	  {
		"radlexId": "RID7780",
		"description": "erector spinae muscle group",
		"containedById": "RID30781",
		"leftId": "RID7780_RID5824",
		"rightId": "RID7780_RID5825",
		"synonyms": [
		  "sacrospinalis muscle",
		  "erector spinae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71302"
		  },
		  {
			"system": "SNOMED",
			"code": "244852007"
		  },
		  {
			"system": "UMLS",
			"code": "C1305743"
		  }
		]
	  },
	  {
		"radlexId": "RID7780_RID5824",
		"description": "left erector spinae muscle group",
		"containedById": "RID30781",
		"unsidedId": "RID7780",
		"rightId": "RID7780_RID5825"
	  },
	  {
		"radlexId": "RID7780_RID5825",
		"description": "right erector spinae muscle group",
		"containedById": "RID30781",
		"unsidedId": "RID7780",
		"leftId": "RID7780_RID5824"
	  },
	  {
		"radlexId": "RID13374",
		"description": "latissimus dorsi muscle",
		"containedById": "RID30781",
		"leftId": "RID13374_RID5824",
		"rightId": "RID13374_RID5825",
		"partOfId": "RID32755",
		"synonyms": [
		  "musculus latissimus dorsi",
		  "latissimus dorsi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13357"
		  },
		  {
			"system": "SNOMED",
			"code": "15665001"
		  },
		  {
			"system": "UMLS",
			"code": "C0224362"
		  }
		]
	  },
	  {
		"radlexId": "RID13374_RID5824",
		"description": "left latissimus dorsi muscle",
		"containedById": "RID30781",
		"unsidedId": "RID13374",
		"rightId": "RID13374_RID5825",
		"partOfId": "RID32755"
	  },
	  {
		"radlexId": "RID13374_RID5825",
		"description": "right latissimus dorsi muscle",
		"containedById": "RID30781",
		"unsidedId": "RID13374",
		"leftId": "RID13374_RID5824",
		"partOfId": "RID32755"
	  },
	  {
		"radlexId": "RID31610",
		"description": "rectus abdominis",
		"containedById": "RID30008",
		"leftId": "RID31612",
		"rightId": "RID31611",
		"partOfId": "RID32809",
		"synonyms": [
		  "musculus rectus abdominis",
		  "rectus abdominus muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9628"
		  },
		  {
			"system": "SNOMED",
			"code": "31243008"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.050.800"
		  },
		  {
			"system": "UMLS",
			"code": "C0206066"
		  }
		]
	  },
	  {
		"radlexId": "RID31611",
		"description": "right rectus abdominis",
		"containedById": "RID30008",
		"unsidedId": "RID31610",
		"leftId": "RID31612",
		"partOfId": "RID32809",
		"codes": [
		  {
			"system": "FMA",
			"code": "13377"
		  },
		  {
			"system": "UMLS",
			"code": "C0507191"
		  }
		]
	  },
	  {
		"radlexId": "RID31612",
		"description": "left rectus abdominis",
		"containedById": "RID30008",
		"unsidedId": "RID31610",
		"rightId": "RID31611",
		"partOfId": "RID32809",
		"codes": [
		  {
			"system": "FMA",
			"code": "13378"
		  },
		  {
			"system": "UMLS",
			"code": "C0507192"
		  }
		]
	  },
	  {
		"radlexId": "RID31607",
		"description": "quadratus lumborum",
		"containedById": "RID32817",
		"leftId": "RID31609",
		"rightId": "RID31608",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "297558"
		  },
		  {
			"system": "SNOMED",
			"code": "6001004"
		  },
		  {
			"system": "UMLS",
			"code": "C0224380"
		  }
		]
	  },
	  {
		"radlexId": "RID31608",
		"description": "right quadratus lumborum",
		"containedById": "RID32817",
		"unsidedId": "RID31607",
		"leftId": "RID31609",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "22348"
		  },
		  {
			"system": "UMLS",
			"code": "C0815722"
		  }
		]
	  },
	  {
		"radlexId": "RID31609",
		"description": "left quadratus lumborum",
		"containedById": "RID32817",
		"unsidedId": "RID31607",
		"rightId": "RID31608",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "22349"
		  },
		  {
			"system": "UMLS",
			"code": "C0815723"
		  }
		]
	  },
	  {
		"radlexId": "RID2625",
		"description": "psoas major muscle",
		"containedById": "RID32817",
		"leftId": "RID32249",
		"rightId": "RID32248",
		"partOfId": "RID32808",
		"synonyms": [
		  "psoas major",
		  "musculus psoas major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "18060"
		  },
		  {
			"system": "SNOMED",
			"code": "57240007"
		  },
		  {
			"system": "UMLS",
			"code": "C0224419"
		  }
		]
	  },
	  {
		"radlexId": "RID32248",
		"description": "right psoas major",
		"containedById": "RID32817",
		"unsidedId": "RID2625",
		"leftId": "RID32249",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "22342"
		  },
		  {
			"system": "UMLS",
			"code": "C0815716"
		  }
		]
	  },
	  {
		"radlexId": "RID32249",
		"description": "left psoas major",
		"containedById": "RID32817",
		"unsidedId": "RID2625",
		"rightId": "RID32248",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "22343"
		  },
		  {
			"system": "UMLS",
			"code": "C0815717"
		  }
		]
	  },
	  {
		"radlexId": "RID2626",
		"description": "psoas minor muscle",
		"containedById": "RID32817",
		"leftId": "RID32251",
		"rightId": "RID32250",
		"partOfId": "RID32808",
		"synonyms": [
		  "psoas minor",
		  "musculus psoas minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22350"
		  },
		  {
			"system": "SNOMED",
			"code": "11192004"
		  },
		  {
			"system": "UMLS",
			"code": "C0224420"
		  }
		]
	  },
	  {
		"radlexId": "RID32250",
		"description": "right psoas minor",
		"containedById": "RID32817",
		"unsidedId": "RID2626",
		"leftId": "RID32251",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "22351"
		  },
		  {
			"system": "UMLS",
			"code": "C0815724"
		  }
		]
	  },
	  {
		"radlexId": "RID32251",
		"description": "left psoas minor",
		"containedById": "RID32817",
		"unsidedId": "RID2626",
		"rightId": "RID32250",
		"partOfId": "RID32808",
		"codes": [
		  {
			"system": "FMA",
			"code": "22352"
		  },
		  {
			"system": "UMLS",
			"code": "C0815725"
		  }
		]
	  },
	  {
		"radlexId": "RID29154",
		"description": "vertebra",
		"containedById": "RID39569",
		"partOfId": "RID7741",
		"codes": [
		  {
			"system": "FMA",
			"code": "9914"
		  },
		  {
			"system": "SNOMED",
			"code": "420345000"
		  },
		  {
			"system": "UMLS",
			"code": "C5441567"
		  }
		]
	  },
	  {
		"radlexId": "RID50392",
		"description": "cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID7741",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223100"
		  }
		]
	  },
	  {
		"radlexId": "RID28830",
		"description": "lumbar intervertebral disk",
		"containedById": "RID431",
		"partOfId": "RID7741",
		"synonyms": [
		  "lumb disk",
		  "lumbar intervertebral disc"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223488"
		  }
		]
	  },
	  {
		"radlexId": "RID7745",
		"description": "atlas",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "atlas [C I]",
		  "first cervical vertebra",
		  "C1 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12519"
		  },
		  {
			"system": "SNOMED",
			"code": "14806007"
		  },
		  {
			"system": "MESH",
			"code": "V02.150"
		  },
		  {
			"system": "UMLS",
			"code": "C0004170"
		  }
		]
	  },
	  {
		"radlexId": "RID7747",
		"description": "axis",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "axis [C II]",
		  "C2 vertebra",
		  "second cervical vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12520"
		  },
		  {
			"system": "SNOMED",
			"code": "39976000"
		  },
		  {
			"system": "UMLS",
			"code": "C0004457"
		  }
		]
	  },
	  {
		"radlexId": "RID29160",
		"description": "third cervical vertebra",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "C3 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12521"
		  },
		  {
			"system": "SNOMED",
			"code": "113205007"
		  },
		  {
			"system": "UMLS",
			"code": "C0817878"
		  }
		]
	  },
	  {
		"radlexId": "RID29161",
		"description": "fourth cervical vertebra",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "C4 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12522"
		  },
		  {
			"system": "SNOMED",
			"code": "5329002"
		  },
		  {
			"system": "UMLS",
			"code": "C0818197"
		  }
		]
	  },
	  {
		"radlexId": "RID29224",
		"description": "fifth cervical vertebra",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "C5 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12523"
		  },
		  {
			"system": "SNOMED",
			"code": "36978003"
		  },
		  {
			"system": "UMLS",
			"code": "C0818198"
		  }
		]
	  },
	  {
		"radlexId": "RID29162",
		"description": "sixth cervical vertebra",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "C6 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12524"
		  },
		  {
			"system": "SNOMED",
			"code": "36054005"
		  },
		  {
			"system": "UMLS",
			"code": "C0818199"
		  }
		]
	  },
	  {
		"radlexId": "RID29163",
		"description": "seventh cervical vertebra",
		"containedById": "RID7488",
		"partOfId": "RID34571",
		"synonyms": [
		  "C7 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12525"
		  },
		  {
			"system": "SNOMED",
			"code": "87391001"
		  },
		  {
			"system": "UMLS",
			"code": "C0818200"
		  }
		]
	  },
	  {
		"radlexId": "RID29198",
		"description": "first thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T1 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9165"
		  },
		  {
			"system": "SNOMED",
			"code": "64864005"
		  },
		  {
			"system": "UMLS",
			"code": "C0819161"
		  }
		]
	  },
	  {
		"radlexId": "RID29199",
		"description": "second thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T2 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9187"
		  },
		  {
			"system": "SNOMED",
			"code": "53733008"
		  },
		  {
			"system": "UMLS",
			"code": "C0819162"
		  }
		]
	  },
	  {
		"radlexId": "RID29200",
		"description": "third thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T3 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9209"
		  },
		  {
			"system": "SNOMED",
			"code": "1626008"
		  },
		  {
			"system": "UMLS",
			"code": "C0819163"
		  }
		]
	  },
	  {
		"radlexId": "RID29201",
		"description": "fourth thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T4 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9248"
		  },
		  {
			"system": "SNOMED",
			"code": "73071006"
		  },
		  {
			"system": "UMLS",
			"code": "C0819164"
		  }
		]
	  },
	  {
		"radlexId": "RID29202",
		"description": "fifth thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T5 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9922"
		  },
		  {
			"system": "SNOMED",
			"code": "56401006"
		  },
		  {
			"system": "UMLS",
			"code": "C0819165"
		  }
		]
	  },
	  {
		"radlexId": "RID29203",
		"description": "sixth thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T6 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9945"
		  },
		  {
			"system": "SNOMED",
			"code": "45296009"
		  },
		  {
			"system": "UMLS",
			"code": "C0819166"
		  }
		]
	  },
	  {
		"radlexId": "RID29204",
		"description": "seventh thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T7 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9968"
		  },
		  {
			"system": "SNOMED",
			"code": "62487009"
		  },
		  {
			"system": "UMLS",
			"code": "C0819167"
		  }
		]
	  },
	  {
		"radlexId": "RID29205",
		"description": "eight thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T8 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9991"
		  },
		  {
			"system": "SNOMED",
			"code": "11068009"
		  },
		  {
			"system": "UMLS",
			"code": "C0819168"
		  }
		]
	  },
	  {
		"radlexId": "RID29206",
		"description": "ninth thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T9 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "10014"
		  },
		  {
			"system": "SNOMED",
			"code": "82687006"
		  },
		  {
			"system": "UMLS",
			"code": "C0819169"
		  }
		]
	  },
	  {
		"radlexId": "RID29207",
		"description": "tenth thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T10 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "10037"
		  },
		  {
			"system": "SNOMED",
			"code": "7610001"
		  },
		  {
			"system": "UMLS",
			"code": "C0819170"
		  }
		]
	  },
	  {
		"radlexId": "RID29208",
		"description": "eleventh thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T11 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "10059"
		  },
		  {
			"system": "SNOMED",
			"code": "12989004"
		  },
		  {
			"system": "UMLS",
			"code": "C0819171"
		  }
		]
	  },
	  {
		"radlexId": "RID29209",
		"description": "twelfth thoracic vertebra",
		"containedById": "RID1243",
		"partOfId": "RID34572",
		"synonyms": [
		  "T12 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "10081"
		  },
		  {
			"system": "SNOMED",
			"code": "23215003"
		  },
		  {
			"system": "UMLS",
			"code": "C0819172"
		  }
		]
	  },
	  {
		"radlexId": "RID29193",
		"description": "first lumbar vertebra",
		"containedById": "RID431",
		"partOfId": "RID34573",
		"synonyms": [
		  "L1 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13072"
		  },
		  {
			"system": "SNOMED",
			"code": "66794005"
		  },
		  {
			"system": "UMLS",
			"code": "C0820011"
		  }
		]
	  },
	  {
		"radlexId": "RID29194",
		"description": "second lumbar vertebra",
		"containedById": "RID431",
		"partOfId": "RID34573",
		"synonyms": [
		  "L2 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13073"
		  },
		  {
			"system": "SNOMED",
			"code": "14293000"
		  },
		  {
			"system": "UMLS",
			"code": "C0820012"
		  }
		]
	  },
	  {
		"radlexId": "RID29195",
		"description": "third lumbar vertebra",
		"containedById": "RID431",
		"partOfId": "RID34573",
		"synonyms": [
		  "L3 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13074"
		  },
		  {
			"system": "SNOMED",
			"code": "36470004"
		  },
		  {
			"system": "UMLS",
			"code": "C0820013"
		  }
		]
	  },
	  {
		"radlexId": "RID29196",
		"description": "fourth lumbar vertebra",
		"containedById": "RID431",
		"partOfId": "RID34573",
		"synonyms": [
		  "L4 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13075"
		  },
		  {
			"system": "SNOMED",
			"code": "11994002"
		  },
		  {
			"system": "UMLS",
			"code": "C0820014"
		  }
		]
	  },
	  {
		"radlexId": "RID29197",
		"description": "fifth lumbar vertebra",
		"containedById": "RID431",
		"partOfId": "RID34573",
		"synonyms": [
		  "L5 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13076"
		  },
		  {
			"system": "SNOMED",
			"code": "49668003"
		  },
		  {
			"system": "UMLS",
			"code": "C0820015"
		  }
		]
	  },
	  {
		"radlexId": "RID29188",
		"description": "first sacral vertebra",
		"containedById": "RID2507",
		"partOfId": "RID7741",
		"synonyms": [
		  "S1 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13077"
		  },
		  {
			"system": "SNOMED",
			"code": "65985001"
		  },
		  {
			"system": "UMLS",
			"code": "C0823851"
		  }
		]
	  },
	  {
		"radlexId": "RID29189",
		"description": "second sacral vertebra",
		"containedById": "RID2507",
		"partOfId": "RID7741",
		"synonyms": [
		  "S2 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13078"
		  },
		  {
			"system": "SNOMED",
			"code": "11808007"
		  },
		  {
			"system": "UMLS",
			"code": "C0823969"
		  }
		]
	  },
	  {
		"radlexId": "RID29190",
		"description": "third sacral vertebra",
		"containedById": "RID2507",
		"partOfId": "RID7741",
		"synonyms": [
		  "S3 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13079"
		  },
		  {
			"system": "SNOMED",
			"code": "49967005"
		  },
		  {
			"system": "UMLS",
			"code": "C0823970"
		  }
		]
	  },
	  {
		"radlexId": "RID29191",
		"description": "fourth sacral vertebra",
		"containedById": "RID2507",
		"partOfId": "RID7741",
		"synonyms": [
		  "S4 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13080"
		  },
		  {
			"system": "SNOMED",
			"code": "69950008"
		  },
		  {
			"system": "UMLS",
			"code": "C0823971"
		  }
		]
	  },
	  {
		"radlexId": "RID29192",
		"description": "fifth sacral vertebra",
		"containedById": "RID2507",
		"partOfId": "RID7741",
		"synonyms": [
		  "S5 vertebra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13081"
		  },
		  {
			"system": "SNOMED",
			"code": "21452006"
		  },
		  {
			"system": "UMLS",
			"code": "C0823972"
		  }
		]
	  },
	  {
		"radlexId": "RID2524",
		"description": "coccyx",
		"containedById": "RID2507",
		"partOfId": "RID7741",
		"codes": [
		  {
			"system": "FMA",
			"code": "12527"
		  },
		  {
			"system": "SNOMED",
			"code": "278915007"
		  },
		  {
			"system": "UMLS",
			"code": "C0009194"
		  }
		]
	  },
	  {
		"radlexId": "RID50392_RID6182",
		"description": "C2/C3 cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID50392",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0920891"
		  }
		]
	  },
	  {
		"radlexId": "RID50392_RID6183",
		"description": "C3/C4 cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID50392",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223127"
		  }
		]
	  },
	  {
		"radlexId": "RID50392_RID6184",
		"description": "C4/C5 cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID50392",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223142"
		  }
		]
	  },
	  {
		"radlexId": "RID50392_RID6185",
		"description": "C5/C6 cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID50392",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223157"
		  }
		]
	  },
	  {
		"radlexId": "RID50392_RID6186",
		"description": "C6/C7 cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID50392",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223172"
		  }
		]
	  },
	  {
		"radlexId": "RID50392_RID6187",
		"description": "C7/T1 cervical intervertebral disk",
		"containedById": "RID7488",
		"partOfId": "RID50392",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223187"
		  }
		]
	  },
	  {
		"radlexId": "RID28830_RID6202",
		"description": "L1/L2 lumbar intervertebral disk",
		"containedById": "RID431",
		"partOfId": "RID28830",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223503"
		  }
		]
	  },
	  {
		"radlexId": "RID28830_RID6203",
		"description": "L2/L3 lumbar intervertebral disk",
		"containedById": "RID431",
		"partOfId": "RID28830",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223518"
		  }
		]
	  },
	  {
		"radlexId": "RID28830_RID6204",
		"description": "L3/L4 lumbar intervertebral disk",
		"containedById": "RID431",
		"partOfId": "RID28830",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223533"
		  }
		]
	  },
	  {
		"radlexId": "RID28830_RID6205",
		"description": "L4/L5 lumbar intervertebral disk",
		"containedById": "RID431",
		"partOfId": "RID28830",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0223548"
		  }
		]
	  },
	  {
		"radlexId": "RID28830_RID6206",
		"description": "L5/S1 lumbar intervertebral disk",
		"containedById": "RID431",
		"partOfId": "RID28830",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C1261195"
		  }
		]
	  },
	  {
		"radlexId": "RID28591",
		"description": "set of ribs",
		"containedById": "RID2468",
		"partOfId": "RID1243",
		"synonyms": [
		  "ribs"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71331"
		  },
		  {
			"system": "SNOMED",
			"code": "24201007"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.570.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0035561"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6151",
		"description": "first rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6151_RID5824",
		"rightId": "RID28591_RID6151_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "1st rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7597"
		  },
		  {
			"system": "SNOMED",
			"code": "48535007"
		  },
		  {
			"system": "UMLS",
			"code": "C0222819"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6151_RID5824",
		"description": "left first rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6151",
		"rightId": "RID28591_RID6151_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6151_RID5825",
		"description": "right first rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6151",
		"leftId": "RID28591_RID6151_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6152",
		"description": "second rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6152_RID5824",
		"rightId": "RID28591_RID6152_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "2nd rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7620"
		  },
		  {
			"system": "SNOMED",
			"code": "78247007"
		  },
		  {
			"system": "UMLS",
			"code": "C0222833"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6152_RID5824",
		"description": "left second rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6152",
		"rightId": "RID28591_RID6152_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6152_RID5825",
		"description": "right second rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6152",
		"leftId": "RID28591_RID6152_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6153",
		"description": "third rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6153_RID5824",
		"rightId": "RID28591_RID6153_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "3rd rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7638"
		  },
		  {
			"system": "SNOMED",
			"code": "25888004"
		  },
		  {
			"system": "UMLS",
			"code": "C0222847"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6153_RID5824",
		"description": "left third rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6153",
		"rightId": "RID28591_RID6153_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6153_RID5825",
		"description": "right third rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6153",
		"leftId": "RID28591_RID6153_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6154",
		"description": "fourth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6154_RID5824",
		"rightId": "RID28591_RID6154_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "4th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7749"
		  },
		  {
			"system": "SNOMED",
			"code": "25523003"
		  },
		  {
			"system": "UMLS",
			"code": "C0222861"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6154_RID5824",
		"description": "left fourth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6154",
		"rightId": "RID28591_RID6154_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6154_RID5825",
		"description": "right fourth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6154",
		"leftId": "RID28591_RID6154_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6155",
		"description": "fifth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6155_RID5824",
		"rightId": "RID28591_RID6155_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "5th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7776"
		  },
		  {
			"system": "SNOMED",
			"code": "15339008"
		  },
		  {
			"system": "UMLS",
			"code": "C0222875"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6155_RID5824",
		"description": "left fifth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6155",
		"rightId": "RID28591_RID6155_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6155_RID5825",
		"description": "right fifth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6155",
		"leftId": "RID28591_RID6155_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6156",
		"description": "sixth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6156_RID5824",
		"rightId": "RID28591_RID6156_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "6th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "8147"
		  },
		  {
			"system": "SNOMED",
			"code": "59558009"
		  },
		  {
			"system": "UMLS",
			"code": "C0222889"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6156_RID5824",
		"description": "left sixth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6156",
		"rightId": "RID28591_RID6156_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6156_RID5825",
		"description": "right sixth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6156",
		"leftId": "RID28591_RID6156_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6157",
		"description": "seventh rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6157_RID5824",
		"rightId": "RID28591_RID6157_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "7th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7830"
		  },
		  {
			"system": "SNOMED",
			"code": "24915002"
		  },
		  {
			"system": "UMLS",
			"code": "C0222903"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6157_RID5824",
		"description": "left seventh rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6157",
		"rightId": "RID28591_RID6157_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6157_RID5825",
		"description": "right seventh rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6157",
		"leftId": "RID28591_RID6157_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6158",
		"description": "eighth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6158_RID5824",
		"rightId": "RID28591_RID6158_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "8th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "8120"
		  },
		  {
			"system": "SNOMED",
			"code": "5953002"
		  },
		  {
			"system": "UMLS",
			"code": "C0222917"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6158_RID5824",
		"description": "left eighth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6158",
		"rightId": "RID28591_RID6158_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6158_RID5825",
		"description": "right eighth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6158",
		"leftId": "RID28591_RID6158_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6159",
		"description": "ninth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6159_RID5824",
		"rightId": "RID28591_RID6159_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "9th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "8337"
		  },
		  {
			"system": "SNOMED",
			"code": "22565002"
		  },
		  {
			"system": "UMLS",
			"code": "C0222931"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6159_RID5824",
		"description": "left ninth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6159",
		"rightId": "RID28591_RID6159_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6159_RID5825",
		"description": "right ninth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6159",
		"leftId": "RID28591_RID6159_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6160",
		"description": "tenth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6160_RID5824",
		"rightId": "RID28591_RID6160_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "10th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "8418"
		  },
		  {
			"system": "SNOMED",
			"code": "77644006"
		  },
		  {
			"system": "UMLS",
			"code": "C0222945"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6160_RID5824",
		"description": "left tenth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6160",
		"rightId": "RID28591_RID6160_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6160_RID5825",
		"description": "right tenth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6160",
		"leftId": "RID28591_RID6160_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6161",
		"description": "eleventh rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6161_RID5824",
		"rightId": "RID28591_RID6161_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "11th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "8499"
		  },
		  {
			"system": "SNOMED",
			"code": "58830002"
		  },
		  {
			"system": "UMLS",
			"code": "C0222959"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6161_RID5824",
		"description": "left eleventh rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6161",
		"rightId": "RID28591_RID6161_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6161_RID5825",
		"description": "right eleventh rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6161",
		"leftId": "RID28591_RID6161_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6162",
		"description": "twelfth rib",
		"containedById": "RID2468",
		"leftId": "RID28591_RID6162_RID5824",
		"rightId": "RID28591_RID6162_RID5825",
		"partOfId": "RID28591",
		"synonyms": [
		  "12th rib"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "8515"
		  },
		  {
			"system": "SNOMED",
			"code": "43993008"
		  },
		  {
			"system": "UMLS",
			"code": "C0222973"
		  }
		]
	  },
	  {
		"radlexId": "RID28591_RID6162_RID5824",
		"description": "left twelfth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6162",
		"rightId": "RID28591_RID6162_RID5825",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID28591_RID6162_RID5825",
		"description": "right twelfth rib",
		"containedById": "RID2468",
		"unsidedId": "RID28591_RID6162",
		"leftId": "RID28591_RID6162_RID5824",
		"partOfId": "RID28591"
	  },
	  {
		"radlexId": "RID228",
		"description": "renal pelvis",
		"containedById": "RID431",
		"partOfId": "RID205",
		"codes": [
		  {
			"system": "FMA",
			"code": "15575"
		  },
		  {
			"system": "SNOMED",
			"code": "25990002"
		  },
		  {
			"system": "MESH",
			"code": "A05.810.453.537"
		  },
		  {
			"system": "UMLS",
			"code": "C0227666"
		  }
		]
	  },
	  {
		"radlexId": "RID1529",
		"description": "crus of diaphragm",
		"containedById": "RID1243",
		"leftId": "RID1529_RID5824",
		"rightId": "RID1529_RID5825",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "947002"
		  },
		  {
			"system": "UMLS",
			"code": "C0230158"
		  }
		]
	  },
	  {
		"radlexId": "RID1529_RID5824",
		"description": "left crus of diaphragm",
		"containedById": "RID1243",
		"unsidedId": "RID1529",
		"rightId": "RID1529_RID5825"
	  },
	  {
		"radlexId": "RID1529_RID5825",
		"description": "right crus of diaphragm",
		"containedById": "RID1243",
		"unsidedId": "RID1529",
		"leftId": "RID1529_RID5824"
	  },
	  {
		"radlexId": "RID45811",
		"description": "hepatopancreatic ampulla",
		"containedById": "RID170",
		"partOfId": "RID170",
		"synonyms": [
		  "cholangiopancreatic duct",
		  "Ampulla Vateri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15076"
		  },
		  {
			"system": "SNOMED",
			"code": "67109009"
		  },
		  {
			"system": "MESH",
			"code": "A03.159.183.079.300.950 | A03.556.124.684.124.236 | A03.556.875.249.160 | A03.734.667.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0042425"
		  }
		]
	  },
	  {
		"radlexId": "RID182",
		"description": "accessory pancreatic duct",
		"containedById": "RID170",
		"partOfId": "RID170",
		"synonyms": [
		  "dorsal pandreatic duct",
		  "duct of Santorini"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14534"
		  },
		  {
			"system": "SNOMED",
			"code": "113288006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227573"
		  }
		]
	  },
	  {
		"radlexId": "RID922",
		"description": "dorsal pancreatic artery",
		"containedById": "RID431",
		"partOfId": "RID50378",
		"synonyms": [
		  "haller artery",
		  "arteria pancreatica dorsalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14787"
		  },
		  {
			"system": "UMLS",
			"code": "C0734085"
		  }
		]
	  },
	  {
		"radlexId": "RID923",
		"description": "great pancreatic artery",
		"containedById": "RID431",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria pancreatica magna",
		  "greater pancreatic artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14792"
		  },
		  {
			"system": "UMLS",
			"code": "C0734090"
		  }
		]
	  },
	  {
		"radlexId": "RID38122",
		"description": "inferior pancreatic artery",
		"containedById": "RID431",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria pancreatica inferior",
		  "testut artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14790"
		  },
		  {
			"system": "UMLS",
			"code": "C0734088"
		  }
		]
	  },
	  {
		"radlexId": "RID116",
		"description": "gastric fundus",
		"containedById": "RID397",
		"partOfId": "RID114",
		"synonyms": [
		  "fundus gastricus",
		  "fundus gastricum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14559"
		  },
		  {
			"system": "SNOMED",
			"code": "414003"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.875.875.419"
		  },
		  {
			"system": "UMLS",
			"code": "C0017129"
		  }
		]
	  },
	  {
		"radlexId": "RID303",
		"description": "fundus of uterus",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "fundus uteri",
		  "uterine fundus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "17561"
		  },
		  {
			"system": "SNOMED",
			"code": "263354004"
		  },
		  {
			"system": "UMLS",
			"code": "C0227817"
		  }
		]
	  },
	  {
		"radlexId": "RID29245",
		"description": "first part of duodenum",
		"containedById": "RID397",
		"partOfId": "RID134",
		"synonyms": [
		  "superior portion of duodenum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14926"
		  },
		  {
			"system": "SNOMED",
			"code": "56734009"
		  },
		  {
			"system": "UMLS",
			"code": "C0227299"
		  }
		]
	  },
	  {
		"radlexId": "RID137",
		"description": "second part of duodenum",
		"containedById": "RID431",
		"partOfId": "RID134",
		"synonyms": [
		  "descending portion of duodenum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14928"
		  },
		  {
			"system": "SNOMED",
			"code": "72031006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227301"
		  }
		]
	  },
	  {
		"radlexId": "RID144",
		"description": "third part of duodenum",
		"containedById": "RID431",
		"partOfId": "RID134",
		"synonyms": [
		  "pars inferior duodeni",
		  "inferior portion of duodenum",
		  "transverse part of duodenum",
		  "Horizontal part of duodenum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14929"
		  },
		  {
			"system": "SNOMED",
			"code": "72793003"
		  },
		  {
			"system": "UMLS",
			"code": "C0227302"
		  }
		]
	  },
	  {
		"radlexId": "RID146",
		"description": "fourth part of duodenum",
		"containedById": "RID397",
		"partOfId": "RID134",
		"synonyms": [
		  "ascending portion of duodenum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14930"
		  },
		  {
			"system": "SNOMED",
			"code": "63803008"
		  },
		  {
			"system": "UMLS",
			"code": "C0227303"
		  }
		]
	  },
	  {
		"radlexId": "RID39061",
		"description": "external anal sphincter",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "FMA",
			"code": "21930"
		  },
		  {
			"system": "SNOMED",
			"code": "244969008"
		  },
		  {
			"system": "UMLS",
			"code": "C0224395"
		  }
		]
	  },
	  {
		"radlexId": "RID912",
		"description": "superior pancreaticoduodenal artery",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "70437"
		  },
		  {
			"system": "SNOMED",
			"code": "15002000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226317"
		  }
		]
	  },
	  {
		"radlexId": "RID928",
		"description": "inferior pancreaticoduodenal artery",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria pancreaticoduodenalis inferior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14805"
		  },
		  {
			"system": "SNOMED",
			"code": "25727004"
		  },
		  {
			"system": "UMLS",
			"code": "C0226319"
		  }
		]
	  },
	  {
		"radlexId": "RID115",
		"description": "gastric cardia",
		"containedById": "RID56",
		"partOfId": "RID114",
		"synonyms": [
		  "cardia",
		  "cardial part of stomach",
		  "pars cardiaca gastricae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14561"
		  },
		  {
			"system": "SNOMED",
			"code": "62898002"
		  },
		  {
			"system": "UMLS",
			"code": "C0007144"
		  }
		]
	  },
	  {
		"radlexId": "RID38296",
		"description": "pancreatic tributary of splenic vein",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "pancreatic vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15388"
		  },
		  {
			"system": "UMLS",
			"code": "C2338322"
		  }
		]
	  },
	  {
		"radlexId": "RID38289",
		"description": "middle colic vein",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena colica media"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15406"
		  },
		  {
			"system": "SNOMED",
			"code": "285632004"
		  },
		  {
			"system": "UMLS",
			"code": "C0226748"
		  }
		]
	  },
	  {
		"radlexId": "RID38291",
		"description": "ileocolic vein",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena ileocolica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15408"
		  },
		  {
			"system": "SNOMED",
			"code": "285463009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226744"
		  }
		]
	  },
	  {
		"radlexId": "RID38290",
		"description": "right colic vein",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena colica dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15407"
		  },
		  {
			"system": "SNOMED",
			"code": "285564001"
		  },
		  {
			"system": "UMLS",
			"code": "C0226747"
		  }
		]
	  },
	  {
		"radlexId": "RID38297",
		"description": "short gastric vein",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "15389"
		  },
		  {
			"system": "SNOMED",
			"code": "42321004"
		  },
		  {
			"system": "UMLS",
			"code": "C0226752"
		  }
		]
	  },
	  {
		"radlexId": "RID38283",
		"description": "left gastric vein",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena gastrica sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15399"
		  },
		  {
			"system": "SNOMED",
			"code": "49253009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226737"
		  }
		]
	  },
	  {
		"radlexId": "RID38284",
		"description": "right gastric vein",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena gastrica dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15400"
		  },
		  {
			"system": "SNOMED",
			"code": "16625006"
		  },
		  {
			"system": "UMLS",
			"code": "C0226738"
		  }
		]
	  },
	  {
		"radlexId": "RID38281",
		"description": "right gastroepiploic vein",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena gastro-omentalis (epiploica) dextra",
		  "right gastro-epiploic vein",
		  "vena gastroepiploica dextra",
		  "right gastro-omental vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15397"
		  },
		  {
			"system": "SNOMED",
			"code": "20113003"
		  },
		  {
			"system": "UMLS",
			"code": "C0226750"
		  }
		]
	  },
	  {
		"radlexId": "RID38298",
		"description": "left gastroepiploic vein",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "vena gastroepiploica sinistra",
		  "left gastro-epiploic vein",
		  "left gastro-omental vein",
		  "vena gastroomentalis sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15390"
		  },
		  {
			"system": "SNOMED",
			"code": "68180009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226753"
		  }
		]
	  },
	  {
		"radlexId": "RID911",
		"description": "right gastroepiploic artery",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria gastroomentalis dextra",
		  "Right gastroomental artery",
		  "Right gastro-omental artery",
		  "Right gastro-epiploic artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14781"
		  },
		  {
			"system": "SNOMED",
			"code": "56439003"
		  },
		  {
			"system": "UMLS",
			"code": "C0226312"
		  }
		]
	  },
	  {
		"radlexId": "RID925",
		"description": "left gastroepiploic artery",
		"containedById": "RID56",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria gastroomentalis sinistra",
		  "Left gastroomental artery",
		  "Left inferior gastric artery",
		  "Left gastro-omental artery",
		  "Left gastro-epiploic artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14796"
		  },
		  {
			"system": "SNOMED",
			"code": "67671005"
		  },
		  {
			"system": "UMLS",
			"code": "C0226314"
		  }
		]
	  },
	  {
		"radlexId": "RID931",
		"description": "middle colic artery",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria colica media"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14810"
		  },
		  {
			"system": "SNOMED",
			"code": "42881009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226328"
		  }
		]
	  },
	  {
		"radlexId": "RID934",
		"description": "ileocolic artery",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria ileocolica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14815"
		  },
		  {
			"system": "SNOMED",
			"code": "120233009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226323"
		  }
		]
	  },
	  {
		"radlexId": "RID940",
		"description": "left colic artery",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria colica sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14826"
		  },
		  {
			"system": "SNOMED",
			"code": "49664001"
		  },
		  {
			"system": "UMLS",
			"code": "C0226318"
		  }
		]
	  },
	  {
		"radlexId": "RID929",
		"description": "right colic artery",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "arteria colica dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14811"
		  },
		  {
			"system": "SNOMED",
			"code": "7067009"
		  },
		  {
			"system": "UMLS",
			"code": "C0226327"
		  }
		]
	  },
	  {
		"radlexId": "RID1192",
		"description": "lumbar vein",
		"containedById": "RID431",
		"partOfId": "RID49921",
		"codes": [
		  {
			"system": "FMA",
			"code": "15370"
		  },
		  {
			"system": "SNOMED",
			"code": "9384000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226648"
		  }
		]
	  },
	  {
		"radlexId": "RID1169",
		"description": "azygos vein",
		"containedById": "RID1243",
		"partOfId": "RID49962",
		"synonyms": [
		  "vena azygos"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "4838"
		  },
		  {
			"system": "SNOMED",
			"code": "72107004"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.908.106"
		  },
		  {
			"system": "UMLS",
			"code": "C0004526"
		  }
		]
	  },
	  {
		"radlexId": "RID7694",
		"description": "thoracic duct",
		"containedById": "RID1243",
		"synonyms": [
		  "trunk of thoracic duct tree",
		  "ductus thoracicus",
		  "Ductus thoracicus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "5031"
		  },
		  {
			"system": "SNOMED",
			"code": "1732005"
		  },
		  {
			"system": "MESH",
			"code": "A15.382.520.301.750"
		  },
		  {
			"system": "UMLS",
			"code": "C0039979"
		  }
		]
	  },
	  {
		"radlexId": "RID884",
		"description": "intercostal artery",
		"containedById": "RID2468",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "281134007"
		  },
		  {
			"system": "UMLS",
			"code": "C0459917"
		  }
		]
	  },
	  {
		"radlexId": "RID7201",
		"description": "phrenic nerve",
		"containedById": "RID1243",
		"synonyms": [
		  "nervus phrenicus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "6191"
		  },
		  {
			"system": "SNOMED",
			"code": "50230006"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.150.700"
		  },
		  {
			"system": "UMLS",
			"code": "C0031774"
		  }
		]
	  },
	  {
		"radlexId": "RID27716",
		"description": "right phrenic nerve",
		"containedById": "RID1243",
		"unsidedId": "RID7201",
		"leftId": "RID27717",
		"codes": [
		  {
			"system": "FMA",
			"code": "6192"
		  },
		  {
			"system": "UMLS",
			"code": "C0501599"
		  }
		]
	  },
	  {
		"radlexId": "RID27717",
		"description": "left phrenic nerve",
		"containedById": "RID1243",
		"unsidedId": "RID7201",
		"rightId": "RID27716",
		"codes": [
		  {
			"system": "FMA",
			"code": "6191"
		  },
		  {
			"system": "UMLS",
			"code": "C0501600"
		  }
		]
	  },
	  {
		"radlexId": "RID44771",
		"description": "pericardiacophrenic artery",
		"containedById": "RID1243",
		"leftId": "RID44773",
		"rightId": "RID44772",
		"partOfId": "RID49962",
		"synonyms": [
		  "arteria pericardiacophrenica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3964"
		  },
		  {
			"system": "UMLS",
			"code": "C0500529"
		  }
		]
	  },
	  {
		"radlexId": "RID44772",
		"description": "right pericardiacophrenic artery",
		"containedById": "RID1243",
		"unsidedId": "RID44771",
		"leftId": "RID44773",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "FMA",
			"code": "3973"
		  },
		  {
			"system": "UMLS",
			"code": "C0500533"
		  }
		]
	  },
	  {
		"radlexId": "RID44773",
		"description": "left pericardiacophrenic artery",
		"containedById": "RID1243",
		"unsidedId": "RID44771",
		"rightId": "RID44772",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "FMA",
			"code": "10666"
		  },
		  {
			"system": "UMLS",
			"code": "C0504782"
		  }
		]
	  },
	  {
		"radlexId": "RID38762",
		"description": "inferior phrenic artery",
		"containedById": "RID56",
		"leftId": "RID38762_RID5824",
		"rightId": "RID38762_RID5825",
		"partOfId": "RID49921",
		"codes": [
		  {
			"system": "FMA",
			"code": "14734"
		  },
		  {
			"system": "SNOMED",
			"code": "29660000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226406"
		  }
		]
	  },
	  {
		"radlexId": "RID38762_RID5824",
		"description": "left inferior phrenic artery",
		"containedById": "RID56",
		"unsidedId": "RID38762",
		"rightId": "RID38762_RID5825",
		"partOfId": "RID49921"
	  },
	  {
		"radlexId": "RID38762_RID5825",
		"description": "right inferior phrenic artery",
		"containedById": "RID56",
		"unsidedId": "RID38762",
		"leftId": "RID38762_RID5824",
		"partOfId": "RID49921"
	  },
	  {
		"radlexId": "RID211",
		"description": "cortex of kidney",
		"containedById": "RID431",
		"leftId": "RID31790",
		"rightId": "RID31789",
		"partOfId": "RID205",
		"synonyms": [
		  "cortex renalis",
		  "renal cortex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15581"
		  },
		  {
			"system": "SNOMED",
			"code": "50403003"
		  },
		  {
			"system": "UMLS",
			"code": "C0022655"
		  }
		]
	  },
	  {
		"radlexId": "RID31789",
		"description": "cortex of right kidney",
		"containedById": "RID431",
		"leftId": "RID31790",
		"partOfId": "RID29662",
		"synonyms": [
		  "right renal cortex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15583"
		  },
		  {
			"system": "UMLS",
			"code": "C0734742"
		  }
		]
	  },
	  {
		"radlexId": "RID31790",
		"description": "cortex of left kidney",
		"containedById": "RID431",
		"unsidedId": "RID211",
		"rightId": "RID31789",
		"partOfId": "RID29663",
		"synonyms": [
		  "left renal cortex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15584"
		  },
		  {
			"system": "UMLS",
			"code": "C0734743"
		  }
		]
	  },
	  {
		"radlexId": "RID28909",
		"description": "hemidiaphragm",
		"containedById": "RID1243",
		"unsidedId": "RID211",
		"leftId": "RID1525",
		"rightId": "RID1526",
		"synonyms": [
		  "hemi-diaphragm"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "57857"
		  },
		  {
			"system": "SNOMED",
			"code": "423500004"
		  },
		  {
			"system": "UMLS",
			"code": "C1269845"
		  }
		]
	  },
	  {
		"radlexId": "RID1526",
		"description": "right hemidiaphragm",
		"containedById": "RID1243",
		"unsidedId": "RID28909",
		"leftId": "RID1525",
		"synonyms": [
		  "right hemi-diaphragm"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "57858"
		  },
		  {
			"system": "SNOMED",
			"code": "416398005"
		  },
		  {
			"system": "UMLS",
			"code": "C0929193"
		  }
		]
	  },
	  {
		"radlexId": "RID1525",
		"description": "left hemidiaphragm",
		"containedById": "RID1243",
		"unsidedId": "RID28909",
		"rightId": "RID1526",
		"synonyms": [
		  "left hemi-diaphragm"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "57857"
		  },
		  {
			"system": "SNOMED",
			"code": "416912002"
		  },
		  {
			"system": "UMLS",
			"code": "C0929194"
		  }
		]
	  },
	  {
		"radlexId": "RID2493",
		"description": "pectoralis major muscle",
		"containedById": "RID29859",
		"leftId": "RID43072",
		"rightId": "RID43071",
		"partOfId": "RID32755",
		"synonyms": [
		  "musculus pectoralis major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9627"
		  },
		  {
			"system": "SNOMED",
			"code": "60005003"
		  },
		  {
			"system": "UMLS",
			"code": "C0585574"
		  }
		]
	  },
	  {
		"radlexId": "RID43071",
		"description": "right pectoralis major",
		"containedById": "RID29859",
		"unsidedId": "RID2493",
		"leftId": "RID43072",
		"partOfId": "RID32755",
		"synonyms": [
		  "right pectoralis major muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13373"
		  },
		  {
			"system": "UMLS",
			"code": "C0507187"
		  }
		]
	  },
	  {
		"radlexId": "RID43072",
		"description": "left pectoralis major",
		"containedById": "RID29859",
		"unsidedId": "RID2493",
		"rightId": "RID43071",
		"partOfId": "RID32755",
		"synonyms": [
		  "left pectoralis major muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13374"
		  },
		  {
			"system": "UMLS",
			"code": "C0507188"
		  }
		]
	  },
	  {
		"radlexId": "RID2496",
		"description": "pectoralis minor muscle",
		"containedById": "RID29859",
		"leftId": "RID43074",
		"rightId": "RID43073",
		"partOfId": "RID32755",
		"synonyms": [
		  "musculus pectoralis minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13109"
		  },
		  {
			"system": "SNOMED",
			"code": "18686000"
		  },
		  {
			"system": "UMLS",
			"code": "C0224347"
		  }
		]
	  },
	  {
		"radlexId": "RID43073",
		"description": "right pectoralis minor",
		"containedById": "RID29859",
		"unsidedId": "RID2496",
		"leftId": "RID43074",
		"partOfId": "RID32755",
		"synonyms": [
		  "right pectoralis minor muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13375"
		  },
		  {
			"system": "UMLS",
			"code": "C0507189"
		  }
		]
	  },
	  {
		"radlexId": "RID43074",
		"description": "left pectoralis minor",
		"containedById": "RID29859",
		"unsidedId": "RID2496",
		"rightId": "RID43073",
		"partOfId": "RID32755",
		"synonyms": [
		  "left pectoralis minor muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13376"
		  },
		  {
			"system": "UMLS",
			"code": "C0507190"
		  }
		]
	  },
	  {
		"radlexId": "RID2502",
		"description": "serratus anterior muscle",
		"containedById": "RID2468",
		"leftId": "RID43053",
		"rightId": "RID43052",
		"partOfId": "RID32755",
		"synonyms": [
		  "boxer muscle",
		  "musculus serratus anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13397"
		  },
		  {
			"system": "SNOMED",
			"code": "18346003"
		  },
		  {
			"system": "UMLS",
			"code": "C0224349"
		  }
		]
	  },
	  {
		"radlexId": "RID43052",
		"description": "right serratus anterior",
		"containedById": "RID2468",
		"unsidedId": "RID2502",
		"leftId": "RID43053",
		"partOfId": "RID32755",
		"synonyms": [
		  "right serratus anterior muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13398"
		  },
		  {
			"system": "UMLS",
			"code": "C0507207"
		  }
		]
	  },
	  {
		"radlexId": "RID43053",
		"description": "left serratus anterior",
		"containedById": "RID2468",
		"unsidedId": "RID2502",
		"rightId": "RID43052",
		"partOfId": "RID32755",
		"synonyms": [
		  "left serratus anterior muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13399"
		  },
		  {
			"system": "UMLS",
			"code": "C0507208"
		  }
		]
	  },
	  {
		"radlexId": "RID2500",
		"description": "rhomboideus major muscle",
		"containedById": "RID2468",
		"leftId": "RID43055",
		"rightId": "RID43054",
		"partOfId": "RID32807",
		"synonyms": [
		  "rhomboid major",
		  "rhomboid major muscle",
		  "musculus rhomboideus major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13379"
		  },
		  {
			"system": "SNOMED",
			"code": "88530003"
		  },
		  {
			"system": "UMLS",
			"code": "C0224363"
		  }
		]
	  },
	  {
		"radlexId": "RID43054",
		"description": "right rhomboid major",
		"containedById": "RID2468",
		"unsidedId": "RID2500",
		"leftId": "RID43055",
		"partOfId": "RID32807",
		"synonyms": [
		  "right rhomboid major muscle",
		  "right rhomboideus major muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13381"
		  },
		  {
			"system": "SNOMED",
			"code": "763437004"
		  },
		  {
			"system": "UMLS",
			"code": "C0507195"
		  }
		]
	  },
	  {
		"radlexId": "RID43055",
		"description": "left rhomboid major",
		"containedById": "RID2468",
		"unsidedId": "RID2500",
		"rightId": "RID43054",
		"partOfId": "RID32807",
		"synonyms": [
		  "left rhomboid major muscle",
		  "left rhomboideus major muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13382"
		  },
		  {
			"system": "SNOMED",
			"code": "763436008"
		  },
		  {
			"system": "UMLS",
			"code": "C0507196"
		  }
		]
	  },
	  {
		"radlexId": "RID2501",
		"description": "rhomboideus minor muscle",
		"containedById": "RID2468",
		"leftId": "RID43057",
		"rightId": "RID43056",
		"partOfId": "RID32807",
		"synonyms": [
		  "rhomboid minor muscle",
		  "musculus rhomboideus minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13380"
		  },
		  {
			"system": "SNOMED",
			"code": "64453003"
		  },
		  {
			"system": "UMLS",
			"code": "C0224364"
		  }
		]
	  },
	  {
		"radlexId": "RID43056",
		"description": "right rhomboid minor",
		"containedById": "RID2468",
		"unsidedId": "RID2501",
		"leftId": "RID43057",
		"partOfId": "RID32807",
		"synonyms": [
		  "right rhomboid minor muscle",
		  "right rhomboideus minor muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13383"
		  },
		  {
			"system": "SNOMED",
			"code": "763439001"
		  },
		  {
			"system": "UMLS",
			"code": "C0507197"
		  }
		]
	  },
	  {
		"radlexId": "RID43057",
		"description": "left rhomboid minor",
		"containedById": "RID2468",
		"unsidedId": "RID2501",
		"rightId": "RID43056",
		"partOfId": "RID32807",
		"synonyms": [
		  "left rhomboideus minor muscle",
		  "left rhomboid minor muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13384"
		  },
		  {
			"system": "SNOMED",
			"code": "763438009"
		  },
		  {
			"system": "UMLS",
			"code": "C0507198"
		  }
		]
	  },
	  {
		"radlexId": "RID1937",
		"description": "trapezius muscle",
		"containedById": "RID2468",
		"leftId": "RID43046",
		"rightId": "RID43045",
		"partOfId": "RID32807",
		"synonyms": [
		  "musculus trapezius",
		  "Musculus trapezius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9626"
		  },
		  {
			"system": "SNOMED",
			"code": "31764008"
		  },
		  {
			"system": "UMLS",
			"code": "C0224361"
		  }
		]
	  },
	  {
		"radlexId": "RID43045",
		"description": "right trapezius",
		"containedById": "RID2468",
		"unsidedId": "RID1937",
		"leftId": "RID43046",
		"partOfId": "RID32807",
		"synonyms": [
		  "right trapezius muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13419"
		  },
		  {
			"system": "UMLS",
			"code": "C0920809"
		  }
		]
	  },
	  {
		"radlexId": "RID43046",
		"description": "left trapezius",
		"containedById": "RID2468",
		"unsidedId": "RID1937",
		"rightId": "RID43045",
		"partOfId": "RID32807",
		"synonyms": [
		  "left trapezius muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13420"
		  },
		  {
			"system": "UMLS",
			"code": "C0920810"
		  }
		]
	  },
	  {
		"radlexId": "RID32769",
		"description": "set of intercostal muscles",
		"containedById": "RID2468",
		"leftId": "RID32771",
		"rightId": "RID32770",
		"partOfId": "RID32755",
		"codes": [
		  {
			"system": "FMA",
			"code": "74081"
		  },
		  {
			"system": "SNOMED",
			"code": "86419007"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.900.500"
		  },
		  {
			"system": "UMLS",
			"code": "C1183784"
		  }
		]
	  },
	  {
		"radlexId": "RID32770",
		"description": "set of right intercostal muscles",
		"containedById": "RID2468",
		"unsidedId": "RID32769",
		"leftId": "RID32771",
		"partOfId": "RID32755",
		"synonyms": [
		  "right intercostal muscles set"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C1183785"
		  }
		]
	  },
	  {
		"radlexId": "RID32771",
		"description": "set of left intercostal muscles",
		"containedById": "RID2468",
		"unsidedId": "RID32769",
		"rightId": "RID32770",
		"partOfId": "RID32755",
		"synonyms": [
		  "left intercostal muscles set"
		],
		"codes": [
		  {
			"system": "UMLS",
			"code": "C1183786"
		  }
		]
	  },
	  {
		"radlexId": "RID823",
		"description": "internal thoracic artery",
		"containedById": "RID2468",
		"leftId": "RID44770",
		"rightId": "RID44769",
		"partOfId": "RID49962",
		"synonyms": [
		  "internal mammary artery",
		  "arteria thoracica interna"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3960"
		  },
		  {
			"system": "SNOMED",
			"code": "69327007"
		  },
		  {
			"system": "UMLS",
			"code": "C0226276"
		  }
		]
	  },
	  {
		"radlexId": "RID44769",
		"description": "right internal thoracic artery",
		"containedById": "RID2468",
		"unsidedId": "RID823",
		"leftId": "RID44770",
		"partOfId": "RID49962",
		"synonyms": [
		  "arteria thoracica interna dextra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3969"
		  },
		  {
			"system": "SNOMED",
			"code": "261403006"
		  },
		  {
			"system": "UMLS",
			"code": "C0500531"
		  }
		]
	  },
	  {
		"radlexId": "RID44770",
		"description": "left internal thoracic artery",
		"containedById": "RID2468",
		"unsidedId": "RID823",
		"rightId": "RID44769",
		"partOfId": "RID49962",
		"synonyms": [
		  "arteria thoracica interna sinistra"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "4068"
		  },
		  {
			"system": "SNOMED",
			"code": "261402001"
		  },
		  {
			"system": "UMLS",
			"code": "C0447054"
		  }
		]
	  },
	  {
		"radlexId": "RID49536",
		"description": "set of intercostal arteries",
		"containedById": "RID2468",
		"partOfId": "RID49962",
		"synonyms": [
		  "intercostal arteries"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "281134007"
		  },
		  {
			"system": "UMLS",
			"code": "C0459917"
		  }
		]
	  },
	  {
		"radlexId": "RID16276",
		"description": "set of intercostal nerves",
		"containedById": "RID2468",
		"synonyms": [
		  "rami ventrales nervus thoracicorum",
		  "intercostal nerves set",
		  "ventral rami of thoracic nerves",
		  "anterior rami of thoracic nerves",
		  "nervi intercostales",
		  "rami anteriores nervus thoracicorum",
		  "intercostal nerves",
		  "Nervi intercostales"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "75467"
		  },
		  {
			"system": "SNOMED",
			"code": "362881004"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.800.350"
		  },
		  {
			"system": "UMLS",
			"code": "C1963694"
		  }
		]
	  },
	  {
		"radlexId": "RID19173",
		"description": "thoracic sympathetic trunk",
		"containedById": "RID1243",
		"leftId": "RID19175",
		"rightId": "RID19174",
		"partOfId": "RID16280",
		"codes": [
		  {
			"system": "FMA",
			"code": "6262"
		  },
		  {
			"system": "SNOMED",
			"code": "77804002"
		  },
		  {
			"system": "UMLS",
			"code": "C0501653"
		  }
		]
	  },
	  {
		"radlexId": "RID19174",
		"description": "right thoracic sympathetic trunk",
		"containedById": "RID1243",
		"unsidedId": "RID19173",
		"leftId": "RID19175",
		"partOfId": "RID16280",
		"codes": [
		  {
			"system": "FMA",
			"code": "6981"
		  },
		  {
			"system": "UMLS",
			"code": "C0502215"
		  }
		]
	  },
	  {
		"radlexId": "RID19175",
		"description": "left thoracic sympathetic trunk",
		"containedById": "RID1243",
		"unsidedId": "RID19173",
		"rightId": "RID19174",
		"partOfId": "RID16280",
		"codes": [
		  {
			"system": "FMA",
			"code": "6982"
		  },
		  {
			"system": "UMLS",
			"code": "C0502216"
		  }
		]
	  },
	  {
		"radlexId": "RID43258",
		"description": "horizontal fissure of right lung",
		"containedById": "RID1302",
		"partOfId": "RID1302",
		"codes": [
		  {
			"system": "FMA",
			"code": "7441"
		  },
		  {
			"system": "SNOMED",
			"code": "83067000"
		  },
		  {
			"system": "UMLS",
			"code": "C0734040"
		  }
		]
	  },
	  {
		"radlexId": "RID43260",
		"description": "oblique fissure",
		"containedById": "RID1301",
		"leftId": "RID43260_RID5824",
		"rightId": "RID43260_RID5825",
		"partOfId": "RID1301",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0502375"
		  }
		]
	  },
	  {
		"radlexId": "RID43260_RID5824",
		"description": "left oblique fissure",
		"containedById": "RID1326",
		"unsidedId": "RID43260",
		"rightId": "RID43260_RID5825",
		"partOfId": "RID1326"
	  },
	  {
		"radlexId": "RID43260_RID5825",
		"description": "right oblique fissure",
		"containedById": "RID1302",
		"unsidedId": "RID43260",
		"leftId": "RID43260_RID5824",
		"partOfId": "RID1302"
	  },
	  {
		"radlexId": "RID1232",
		"description": "right common pulmonary vein",
		"containedById": "RID1243",
		"leftId": "RID1238",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "FMA",
			"code": "9416"
		  },
		  {
			"system": "SNOMED",
			"code": "443591004"
		  },
		  {
			"system": "UMLS",
			"code": "C0503948"
		  }
		]
	  },
	  {
		"radlexId": "RID1238",
		"description": "left common pulmonary vein",
		"containedById": "RID1243",
		"rightId": "RID1232",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "FMA",
			"code": "9417"
		  },
		  {
			"system": "SNOMED",
			"code": "443705001"
		  },
		  {
			"system": "UMLS",
			"code": "C0503949"
		  }
		]
	  },
	  {
		"radlexId": "RID43951",
		"description": "lateral thoracic vein",
		"containedById": "RID1243",
		"leftId": "RID43953",
		"rightId": "RID43952",
		"partOfId": "RID49962",
		"synonyms": [
		  "vena thoracica lateralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71210"
		  },
		  {
			"system": "SNOMED",
			"code": "206400002"
		  },
		  {
			"system": "UMLS",
			"code": "C0226632"
		  }
		]
	  },
	  {
		"radlexId": "RID43952",
		"description": "right lateral thoracic vein",
		"containedById": "RID1243",
		"unsidedId": "RID43951",
		"leftId": "RID43953",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "FMA",
			"code": "71211"
		  },
		  {
			"system": "UMLS",
			"code": "C1182894"
		  }
		]
	  },
	  {
		"radlexId": "RID43953",
		"description": "left lateral thoracic vein",
		"containedById": "RID1243",
		"unsidedId": "RID43951",
		"rightId": "RID43952",
		"partOfId": "RID49962",
		"codes": [
		  {
			"system": "FMA",
			"code": "71212"
		  },
		  {
			"system": "UMLS",
			"code": "C1182895"
		  }
		]
	  },
	  {
		"radlexId": "RID12187",
		"description": "vagus nerve",
		"containedById": "RID1243",
		"leftId": "RID27701",
		"rightId": "RID27700",
		"codes": [
		  {
			"system": "FMA",
			"code": "5731"
		  },
		  {
			"system": "SNOMED",
			"code": "88882009"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.050.050.925 | A08.800.050.600.825 | A08.800.800.060.920 | A08.800.800.120.900"
		  },
		  {
			"system": "UMLS",
			"code": "C0042276"
		  }
		]
	  },
	  {
		"radlexId": "RID27700",
		"description": "right vagus nerve",
		"containedById": "RID1243",
		"unsidedId": "RID12187",
		"leftId": "RID27701",
		"codes": [
		  {
			"system": "FMA",
			"code": "6219"
		  },
		  {
			"system": "SNOMED",
			"code": "771088001"
		  },
		  {
			"system": "UMLS",
			"code": "C0501622"
		  }
		]
	  },
	  {
		"radlexId": "RID27701",
		"description": "left vagus nerve",
		"containedById": "RID1243",
		"unsidedId": "RID12187",
		"rightId": "RID27700",
		"codes": [
		  {
			"system": "FMA",
			"code": "6220"
		  },
		  {
			"system": "SNOMED",
			"code": "771087006"
		  },
		  {
			"system": "UMLS",
			"code": "C0501623"
		  }
		]
	  },
	  {
		"radlexId": "RID28584",
		"description": "apex of lung",
		"containedById": "RID1301",
		"synonyms": [
		  "pulmonary apex",
		  "lung apex",
		  "pulm apex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7319"
		  },
		  {
			"system": "SNOMED",
			"code": "86598002"
		  },
		  {
			"system": "UMLS",
			"code": "C0225703"
		  }
		]
	  },
	  {
		"radlexId": "RID1216",
		"description": "coronary sinus",
		"containedById": "RID1385",
		"partOfId": "RID1301",
		"codes": [
		  {
			"system": "FMA",
			"code": "4706"
		  },
		  {
			"system": "SNOMED",
			"code": "90219004"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.908.194.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0456944"
		  }
		]
	  },
	  {
		"radlexId": "RID1400",
		"description": "papillary muscle",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"codes": [
		  {
			"system": "FMA",
			"code": "12154"
		  },
		  {
			"system": "SNOMED",
			"code": "35054001"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.580.680 | A07.541.510.619 | A07.541.704.750"
		  },
		  {
			"system": "UMLS",
			"code": "C0030352"
		  }
		]
	  },
	  {
		"radlexId": "RID1401",
		"description": "chordae tendineae",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"synonyms": [
		  "tendinous cords of heart"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "102298001"
		  },
		  {
			"system": "MESH",
			"code": "A07.541.510.240"
		  },
		  {
			"system": "UMLS",
			"code": "C0008484"
		  }
		]
	  },
	  {
		"radlexId": "RID39309",
		"description": "leaflet of tricuspid valve",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"synonyms": [
		  "tricuspid valve leaflet"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7237"
		  },
		  {
			"system": "SNOMED",
			"code": "32427001"
		  },
		  {
			"system": "UMLS",
			"code": "C0225928"
		  }
		]
	  },
	  {
		"radlexId": "RID1404",
		"description": "interventricular septum",
		"containedById": "RID1385",
		"partOfId": "RID1385",
		"synonyms": [
		  "ventricular septum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "7133"
		  },
		  {
			"system": "SNOMED",
			"code": "589001"
		  },
		  {
			"system": "MESH",
			"code": "A07.541.459.750"
		  },
		  {
			"system": "UMLS",
			"code": "C0225870"
		  }
		]
	  },
	  {
		"radlexId": "RID2485",
		"description": "inguinal canal",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "FMA",
			"code": "19928"
		  },
		  {
			"system": "SNOMED",
			"code": "90785001"
		  },
		  {
			"system": "MESH",
			"code": "A01.923.047.412"
		  },
		  {
			"system": "UMLS",
			"code": "C0021445"
		  }
		]
	  },
	  {
		"radlexId": "RID39500",
		"description": "levator ani",
		"containedById": "RID2507",
		"leftId": "RID39500_RID5824",
		"rightId": "RID39500_RID5825",
		"partOfId": "RID32793",
		"codes": [
		  {
			"system": "FMA",
			"code": "19087"
		  },
		  {
			"system": "SNOMED",
			"code": "79349002"
		  },
		  {
			"system": "UMLS",
			"code": "C0224384"
		  }
		]
	  },
	  {
		"radlexId": "RID39500_RID5824",
		"description": "left levator ani",
		"containedById": "RID2507",
		"unsidedId": "RID39500",
		"rightId": "RID39500_RID5825",
		"partOfId": "RID32793"
	  },
	  {
		"radlexId": "RID39500_RID5825",
		"description": "right levator ani",
		"containedById": "RID2507",
		"unsidedId": "RID39500",
		"leftId": "RID39500_RID5824",
		"partOfId": "RID32793"
	  },
	  {
		"radlexId": "RID40365",
		"description": "muscle body of obturator internus",
		"containedById": "RID2507",
		"leftId": "RID40367",
		"rightId": "RID40366",
		"synonyms": [
		  "obturator internus",
		  "Internal obturator muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22298"
		  },
		  {
			"system": "SNOMED",
			"code": "82115007"
		  },
		  {
			"system": "UMLS",
			"code": "C0224422"
		  }
		]
	  },
	  {
		"radlexId": "RID40366",
		"description": "muscle body of right obturator internus",
		"containedById": "RID2507",
		"unsidedId": "RID40365",
		"leftId": "RID40367",
		"codes": [
		  {
			"system": "FMA",
			"code": "22324"
		  },
		  {
			"system": "UMLS",
			"code": "C0815700"
		  }
		]
	  },
	  {
		"radlexId": "RID40367",
		"description": "muscle body of left obturator internus",
		"containedById": "RID2507",
		"unsidedId": "RID40365",
		"rightId": "RID40366",
		"codes": [
		  {
			"system": "FMA",
			"code": "22325"
		  },
		  {
			"system": "UMLS",
			"code": "C0815701"
		  }
		]
	  },
	  {
		"radlexId": "RID2636",
		"description": "obturator externus muscle",
		"containedById": "RID2507",
		"leftId": "RID2636_RID5824",
		"rightId": "RID2636_RID5825",
		"synonyms": [
		  "obturator externus",
		  "External obturator muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22299"
		  },
		  {
			"system": "SNOMED",
			"code": "73048009"
		  },
		  {
			"system": "UMLS",
			"code": "C0224423"
		  }
		]
	  },
	  {
		"radlexId": "RID2636_RID5824",
		"description": "left obturator externus muscle",
		"containedById": "RID2507",
		"unsidedId": "RID2636",
		"rightId": "RID2636_RID5825"
	  },
	  {
		"radlexId": "RID2636_RID5825",
		"description": "right obturator externus muscle",
		"containedById": "RID2507",
		"unsidedId": "RID2636",
		"leftId": "RID2636_RID5824"
	  },
	  {
		"radlexId": "RID953",
		"description": "obturator artery",
		"containedById": "RID2507",
		"leftId": "RID953_RID5824",
		"rightId": "RID953_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "18865"
		  },
		  {
			"system": "SNOMED",
			"code": "3156006"
		  },
		  {
			"system": "UMLS",
			"code": "C0226369"
		  }
		]
	  },
	  {
		"radlexId": "RID953_RID5824",
		"description": "left obturator artery",
		"containedById": "RID2507",
		"unsidedId": "RID953",
		"rightId": "RID953_RID5825"
	  },
	  {
		"radlexId": "RID953_RID5825",
		"description": "right obturator artery",
		"containedById": "RID2507",
		"unsidedId": "RID953",
		"leftId": "RID953_RID5824"
	  },
	  {
		"radlexId": "RID7293",
		"description": "obturator nerve",
		"containedById": "RID2507",
		"leftId": "RID25607",
		"rightId": "RID25606",
		"synonyms": [
		  "nervus obturatorius"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16487"
		  },
		  {
			"system": "SNOMED",
			"code": "60272005"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.450.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0028783"
		  }
		]
	  },
	  {
		"radlexId": "RID25606",
		"description": "right obturator nerve",
		"containedById": "RID2507",
		"unsidedId": "RID7293",
		"leftId": "RID25607",
		"codes": [
		  {
			"system": "FMA",
			"code": "16501"
		  },
		  {
			"system": "SNOMED",
			"code": "764767004"
		  },
		  {
			"system": "UMLS",
			"code": "C0735384"
		  }
		]
	  },
	  {
		"radlexId": "RID25607",
		"description": "left obturator nerve",
		"containedById": "RID2507",
		"unsidedId": "RID7293",
		"rightId": "RID25606",
		"codes": [
		  {
			"system": "FMA",
			"code": "16502"
		  },
		  {
			"system": "SNOMED",
			"code": "764668001"
		  },
		  {
			"system": "UMLS",
			"code": "C0735385"
		  }
		]
	  },
	  {
		"radlexId": "RID954",
		"description": "internal pudendal artery",
		"containedById": "RID2507",
		"leftId": "RID954_RID5824",
		"rightId": "RID954_RID5825",
		"partOfId": "RID49933",
		"codes": [
		  {
			"system": "FMA",
			"code": "18835"
		  },
		  {
			"system": "SNOMED",
			"code": "77276007"
		  },
		  {
			"system": "UMLS",
			"code": "C0226383"
		  }
		]
	  },
	  {
		"radlexId": "RID954_RID5824",
		"description": "left internal pudendal artery",
		"containedById": "RID2507",
		"unsidedId": "RID954",
		"rightId": "RID954_RID5825",
		"partOfId": "RID49933"
	  },
	  {
		"radlexId": "RID954_RID5825",
		"description": "right internal pudendal artery",
		"containedById": "RID2507",
		"unsidedId": "RID954",
		"leftId": "RID954_RID5824",
		"partOfId": "RID49933"
	  },
	  {
		"radlexId": "RID32691",
		"description": "anal canal",
		"containedById": "RID2507",
		"partOfId": "RID152",
		"synonyms": [
		  "canalis analis",
		  "anatomical anal canal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15703"
		  },
		  {
			"system": "SNOMED",
			"code": "34381000"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.124.526.070 | A03.556.249.249.070"
		  },
		  {
			"system": "UMLS",
			"code": "C0227411"
		  }
		]
	  },
	  {
		"radlexId": "RID31602",
		"description": "transversus abdominis",
		"containedById": "RID30008",
		"leftId": "RID31604",
		"rightId": "RID31603",
		"partOfId": "RID32811",
		"synonyms": [
		  "musculus transversus abdominis",
		  "transversus abdominis muscle",
		  "transverse abdominal",
		  "transversalis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15570"
		  },
		  {
			"system": "SNOMED",
			"code": "86493009"
		  },
		  {
			"system": "UMLS",
			"code": "C0224378"
		  }
		]
	  },
	  {
		"radlexId": "RID31603",
		"description": "right transversus abdominis",
		"containedById": "RID30008",
		"unsidedId": "RID31602",
		"leftId": "RID31604",
		"partOfId": "RID32811",
		"codes": [
		  {
			"system": "FMA",
			"code": "22344"
		  },
		  {
			"system": "UMLS",
			"code": "C0815718"
		  }
		]
	  },
	  {
		"radlexId": "RID31604",
		"description": "left transversus abdominis",
		"containedById": "RID30008",
		"unsidedId": "RID31602",
		"rightId": "RID31603",
		"partOfId": "RID32811",
		"codes": [
		  {
			"system": "FMA",
			"code": "22345"
		  },
		  {
			"system": "UMLS",
			"code": "C0815719"
		  }
		]
	  },
	  {
		"radlexId": "RID31596",
		"description": "external oblique",
		"containedById": "RID30008",
		"leftId": "RID31598",
		"rightId": "RID31597",
		"codes": [
		  {
			"system": "FMA",
			"code": "13335"
		  }
		]
	  },
	  {
		"radlexId": "RID31597",
		"description": "right external oblique",
		"containedById": "RID30008",
		"unsidedId": "RID31596",
		"leftId": "RID31598",
		"codes": [
		  {
			"system": "FMA",
			"code": "13336"
		  }
		]
	  },
	  {
		"radlexId": "RID31598",
		"description": "left external oblique",
		"containedById": "RID30008",
		"unsidedId": "RID31596",
		"rightId": "RID31597",
		"codes": [
		  {
			"system": "FMA",
			"code": "13337"
		  }
		]
	  },
	  {
		"radlexId": "RID31599",
		"description": "internal oblique",
		"containedById": "RID30008",
		"leftId": "RID31601",
		"rightId": "RID31600",
		"codes": [
		  {
			"system": "FMA",
			"code": "13891"
		  }
		]
	  },
	  {
		"radlexId": "RID31600",
		"description": "right internal oblique",
		"containedById": "RID30008",
		"unsidedId": "RID31599",
		"leftId": "RID31601",
		"codes": [
		  {
			"system": "FMA",
			"code": "13892"
		  }
		]
	  },
	  {
		"radlexId": "RID31601",
		"description": "left internal oblique",
		"containedById": "RID30008",
		"unsidedId": "RID31599",
		"rightId": "RID31600",
		"codes": [
		  {
			"system": "FMA",
			"code": "13893"
		  }
		]
	  },
	  {
		"radlexId": "RID358",
		"description": "vas deferens",
		"containedById": "RID2507",
		"leftId": "RID358_RID5824",
		"rightId": "RID358_RID5825",
		"sexSpecific": "Male",
		"synonyms": [
		  "Vas Deferens"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19234"
		  },
		  {
			"system": "SNOMED",
			"code": "57671007"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.444.930"
		  },
		  {
			"system": "UMLS",
			"code": "C0042360"
		  }
		]
	  },
	  {
		"radlexId": "RID358_RID5824",
		"description": "left vas deferens",
		"containedById": "RID2507",
		"unsidedId": "RID358",
		"rightId": "RID358_RID5825",
		"sexSpecific": "Male"
	  },
	  {
		"radlexId": "RID358_RID5825",
		"description": "right vas deferens",
		"containedById": "RID2507",
		"unsidedId": "RID358",
		"leftId": "RID358_RID5824",
		"sexSpecific": "Male"
	  },
	  {
		"radlexId": "RID2632",
		"description": "piriformis muscle",
		"containedById": "RID2507",
		"leftId": "RID2632_RID5824",
		"rightId": "RID2632_RID5825",
		"synonyms": [
		  "piriformis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19082"
		  },
		  {
			"system": "SNOMED",
			"code": "75699001"
		  },
		  {
			"system": "UMLS",
			"code": "C0224429"
		  }
		]
	  },
	  {
		"radlexId": "RID2632_RID5824",
		"description": "left piriformis muscle",
		"containedById": "RID2507",
		"unsidedId": "RID2632",
		"rightId": "RID2632_RID5825"
	  },
	  {
		"radlexId": "RID2632_RID5825",
		"description": "right piriformis muscle",
		"containedById": "RID2507",
		"unsidedId": "RID2632",
		"leftId": "RID2632_RID5824"
	  },
	  {
		"radlexId": "RID40392",
		"description": "muscle body of coccygeus",
		"containedById": "RID2507",
		"leftId": "RID40394",
		"rightId": "RID40393",
		"partOfId": "RID32793",
		"codes": [
		  {
			"system": "FMA",
			"code": "297908"
		  },
		  {
			"system": "SNOMED",
			"code": "3608004"
		  },
		  {
			"system": "UMLS",
			"code": "C4248647"
		  }
		]
	  },
	  {
		"radlexId": "RID40393",
		"description": "muscle body of right coccygeus",
		"containedById": "RID2507",
		"unsidedId": "RID40392",
		"leftId": "RID40394",
		"partOfId": "RID32793",
		"codes": [
		  {
			"system": "FMA",
			"code": "297910"
		  },
		  {
			"system": "UMLS",
			"code": "C4248649"
		  }
		]
	  },
	  {
		"radlexId": "RID40394",
		"description": "muscle body of left coccygeus",
		"containedById": "RID2507",
		"unsidedId": "RID40392",
		"rightId": "RID40393",
		"partOfId": "RID32793",
		"codes": [
		  {
			"system": "FMA",
			"code": "297912"
		  },
		  {
			"system": "UMLS",
			"code": "C4248650"
		  }
		]
	  },
	  {
		"radlexId": "RID13315",
		"description": "inguinal ligament",
		"containedById": "RID2507",
		"leftId": "RID13315_RID5824",
		"rightId": "RID13315_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "19855"
		  },
		  {
			"system": "SNOMED",
			"code": "82517008"
		  },
		  {
			"system": "UMLS",
			"code": "C0225043"
		  }
		]
	  },
	  {
		"radlexId": "RID13315_RID5824",
		"description": "left inguinal ligament",
		"containedById": "RID2507",
		"unsidedId": "RID13315",
		"rightId": "RID13315_RID5825"
	  },
	  {
		"radlexId": "RID13315_RID5825",
		"description": "right inguinal ligament",
		"containedById": "RID2507",
		"unsidedId": "RID13315",
		"leftId": "RID13315_RID5824"
	  },
	  {
		"radlexId": "RID13087",
		"description": "superior vesical artery",
		"containedById": "RID2507",
		"leftId": "RID13087_RID5824",
		"rightId": "RID13087_RID5825",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "18839"
		  },
		  {
			"system": "SNOMED",
			"code": "283984006"
		  },
		  {
			"system": "UMLS",
			"code": "C0226376"
		  }
		]
	  },
	  {
		"radlexId": "RID13087_RID5824",
		"description": "left superior vesical artery",
		"containedById": "RID2507",
		"unsidedId": "RID13087",
		"rightId": "RID13087_RID5825",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID13087_RID5825",
		"description": "right superior vesical artery",
		"containedById": "RID2507",
		"unsidedId": "RID13087",
		"leftId": "RID13087_RID5824",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID13086",
		"description": "inferior vesical artery",
		"containedById": "RID2507",
		"leftId": "RID13086_RID5824",
		"rightId": "RID13086_RID5825",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "18823"
		  },
		  {
			"system": "SNOMED",
			"code": "284057003"
		  },
		  {
			"system": "UMLS",
			"code": "C0226377"
		  }
		]
	  },
	  {
		"radlexId": "RID13086_RID5824",
		"description": "left inferior vesical artery",
		"containedById": "RID2507",
		"unsidedId": "RID13086",
		"rightId": "RID13086_RID5825",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID13086_RID5825",
		"description": "right inferior vesical artery",
		"containedById": "RID2507",
		"unsidedId": "RID13086",
		"leftId": "RID13086_RID5824",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID956",
		"description": "middle rectal artery",
		"containedById": "RID2507",
		"leftId": "RID956_RID5824",
		"rightId": "RID956_RID5825",
		"partOfId": "RID50378",
		"codes": [
		  {
			"system": "FMA",
			"code": "18826"
		  },
		  {
			"system": "SNOMED",
			"code": "57967006"
		  },
		  {
			"system": "UMLS",
			"code": "C0226382"
		  }
		]
	  },
	  {
		"radlexId": "RID956_RID5824",
		"description": "left middle rectal artery",
		"containedById": "RID2507",
		"unsidedId": "RID956",
		"rightId": "RID956_RID5825",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID956_RID5825",
		"description": "right middle rectal artery",
		"containedById": "RID2507",
		"unsidedId": "RID956",
		"leftId": "RID956_RID5824",
		"partOfId": "RID50378"
	  },
	  {
		"radlexId": "RID942",
		"description": "superior rectal artery",
		"containedById": "RID397",
		"partOfId": "RID50378",
		"synonyms": [
		  "superior hemorrhoidal artery",
		  "arteria rectalis superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14832"
		  },
		  {
			"system": "SNOMED",
			"code": "2539000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226331"
		  }
		]
	  },
	  {
		"radlexId": "RID947",
		"description": "lateral sacral artery",
		"containedById": "RID2507",
		"leftId": "RID947_RID5824",
		"rightId": "RID947_RID5825",
		"partOfId": "RID49933",
		"codes": [
		  {
			"system": "FMA",
			"code": "18855"
		  },
		  {
			"system": "SNOMED",
			"code": "76361006"
		  },
		  {
			"system": "UMLS",
			"code": "C0226368"
		  }
		]
	  },
	  {
		"radlexId": "RID947_RID5824",
		"description": "left lateral sacral artery",
		"containedById": "RID2507",
		"unsidedId": "RID947",
		"rightId": "RID947_RID5825",
		"partOfId": "RID49933"
	  },
	  {
		"radlexId": "RID947_RID5825",
		"description": "right lateral sacral artery",
		"containedById": "RID2507",
		"unsidedId": "RID947",
		"leftId": "RID947_RID5824",
		"partOfId": "RID49933"
	  },
	  {
		"radlexId": "RID948",
		"description": "iliolumbar artery",
		"containedById": "RID431",
		"leftId": "RID948_RID5824",
		"rightId": "RID948_RID5825",
		"partOfId": "RID49921",
		"codes": [
		  {
			"system": "FMA",
			"code": "18845"
		  },
		  {
			"system": "SNOMED",
			"code": "293947007"
		  },
		  {
			"system": "UMLS",
			"code": "C0226367"
		  }
		]
	  },
	  {
		"radlexId": "RID948_RID5824",
		"description": "left iliolumbar artery",
		"containedById": "RID431",
		"unsidedId": "RID948",
		"rightId": "RID948_RID5825",
		"partOfId": "RID49921"
	  },
	  {
		"radlexId": "RID948_RID5825",
		"description": "right iliolumbar artery",
		"containedById": "RID431",
		"unsidedId": "RID948",
		"leftId": "RID948_RID5824",
		"partOfId": "RID49921"
	  },
	  {
		"radlexId": "RID1176",
		"description": "ascending lumbar vein",
		"containedById": "RID431",
		"leftId": "RID1176_RID5824",
		"rightId": "RID1176_RID5825",
		"partOfId": "RID49921",
		"codes": [
		  {
			"system": "FMA",
			"code": "12858"
		  },
		  {
			"system": "SNOMED",
			"code": "88004007"
		  },
		  {
			"system": "UMLS",
			"code": "C0226647"
		  }
		]
	  },
	  {
		"radlexId": "RID1176_RID5824",
		"description": "left ascending lumbar vein",
		"containedById": "RID431",
		"unsidedId": "RID1176",
		"rightId": "RID1176_RID5825",
		"partOfId": "RID49921"
	  },
	  {
		"radlexId": "RID1176_RID5825",
		"description": "right ascending lumbar vein",
		"containedById": "RID431",
		"unsidedId": "RID1176",
		"leftId": "RID1176_RID5824",
		"partOfId": "RID49921"
	  },
	  {
		"radlexId": "RID7312",
		"description": "pudendal nerve",
		"containedById": "RID2507",
		"leftId": "RID27755",
		"rightId": "RID27754",
		"synonyms": [
		  "nervus pudendus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19037"
		  },
		  {
			"system": "SNOMED",
			"code": "54805005"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.720.450.680"
		  },
		  {
			"system": "UMLS",
			"code": "C0228959"
		  }
		]
	  },
	  {
		"radlexId": "RID27754",
		"description": "right pudendal nerve",
		"containedById": "RID2507",
		"unsidedId": "RID7312",
		"leftId": "RID27755",
		"codes": [
		  {
			"system": "FMA",
			"code": "21863"
		  },
		  {
			"system": "SNOMED",
			"code": "734527008"
		  },
		  {
			"system": "UMLS",
			"code": "C0739915"
		  }
		]
	  },
	  {
		"radlexId": "RID27755",
		"description": "left pudendal nerve",
		"containedById": "RID2507",
		"unsidedId": "RID7312",
		"rightId": "RID27754",
		"codes": [
		  {
			"system": "FMA",
			"code": "21864"
		  },
		  {
			"system": "SNOMED",
			"code": "734526004"
		  },
		  {
			"system": "UMLS",
			"code": "C0739916"
		  }
		]
	  },
	  {
		"radlexId": "RID33194",
		"description": "suspensory ligament of ovary",
		"containedById": "RID2507",
		"leftId": "RID33196",
		"rightId": "RID33195",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "ligamentum suspensorium ovarii"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "19822"
		  },
		  {
			"system": "SNOMED",
			"code": "74676009"
		  },
		  {
			"system": "UMLS",
			"code": "C0230313"
		  }
		]
	  },
	  {
		"radlexId": "RID33195",
		"description": "suspensory ligament of right ovary",
		"containedById": "RID2507",
		"unsidedId": "RID33194",
		"leftId": "RID33196",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "19823"
		  },
		  {
			"system": "UMLS",
			"code": "C0738137"
		  }
		]
	  },
	  {
		"radlexId": "RID33196",
		"description": "suspensory ligament of left ovary",
		"containedById": "RID2507",
		"unsidedId": "RID33194",
		"rightId": "RID33195",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "19824"
		  },
		  {
			"system": "UMLS",
			"code": "C0738138"
		  }
		]
	  },
	  {
		"radlexId": "RID301",
		"description": "ovarian ligament",
		"containedById": "RID2507",
		"leftId": "RID31696",
		"rightId": "RID31695",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "ligamentum uteroovaricum",
		  "ligament of ovary",
		  "ligamentum ovarii proprium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "55422"
		  },
		  {
			"system": "SNOMED",
			"code": "7435002"
		  },
		  {
			"system": "UMLS",
			"code": "C0230309"
		  }
		]
	  },
	  {
		"radlexId": "RID31695",
		"description": "right ovarian ligament",
		"containedById": "RID2507",
		"unsidedId": "RID301",
		"leftId": "RID31696",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "55423"
		  },
		  {
			"system": "UMLS",
			"code": "C0927073"
		  }
		]
	  },
	  {
		"radlexId": "RID31696",
		"description": "left ovarian ligament",
		"containedById": "RID2507",
		"unsidedId": "RID301",
		"rightId": "RID31695",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "55424"
		  },
		  {
			"system": "UMLS",
			"code": "C0927074"
		  }
		]
	  },
	  {
		"radlexId": "RID407",
		"description": "cul-de-sac",
		"containedById": "RID2507",
		"synonyms": [
		  "pouch of Douglas",
		  "excavatio rectouterina",
		  "recto-uterine pouch",
		  "rectouterine pouch",
		  "Rektouteriner Pouch"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14728"
		  },
		  {
			"system": "SNOMED",
			"code": "53843000"
		  },
		  {
			"system": "UMLS",
			"code": "C4551648"
		  }
		]
	  },
	  {
		"radlexId": "RID406",
		"description": "vesicouterine pouch",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"synonyms": [
		  "excavatio vesicouterina",
		  "vesico-uterine pouch"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14729"
		  },
		  {
			"system": "SNOMED",
			"code": "83570007"
		  },
		  {
			"system": "UMLS",
			"code": "C0230304"
		  }
		]
	  },
	  {
		"radlexId": "RID308",
		"description": "cervix of uterus",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID302",
		"synonyms": [
		  "cervix",
		  "canalis cervicis uteri",
		  "endocervical canal",
		  "uterine cervix",
		  "cervical canal of uterus",
		  "cervix uteri",
		  "cervical canal",
		  "canalis cervicis uteri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "17740"
		  },
		  {
			"system": "SNOMED",
			"code": "71252005"
		  },
		  {
			"system": "MESH",
			"code": "A05.360.319.679.256"
		  },
		  {
			"system": "UMLS",
			"code": "C0007874"
		  }
		]
	  },
	  {
		"radlexId": "RID31686",
		"description": "endometrium of cervix",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID302",
		"synonyms": [
		  "cervix endometrium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "18113"
		  },
		  {
			"system": "UMLS",
			"code": "C0736790"
		  }
		]
	  },
	  {
		"radlexId": "RID315",
		"description": "myometrium",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID302",
		"synonyms": [
		  "tunica muscularis uteri",
		  "outer myometrium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "17743"
		  },
		  {
			"system": "SNOMED",
			"code": "27232003"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.570.500 | A05.360.319.679.690 | A10.690.467.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0027088"
		  }
		]
	  },
	  {
		"radlexId": "RID30683",
		"description": "myometrium of cervix",
		"containedById": "RID2507",
		"sexSpecific": "Female",
		"partOfId": "RID302",
		"synonyms": [
		  "cervix myometrium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "18118"
		  },
		  {
			"system": "UMLS",
			"code": "C0736795"
		  }
		]
	  },
	  {
		"radlexId": "RID2594",
		"description": "symphysis pubis",
		"containedById": "RID2507",
		"synonyms": [
		  "pubic symphysis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16950"
		  },
		  {
			"system": "SNOMED",
			"code": "82561000"
		  },
		  {
			"system": "UMLS",
			"code": "C0034015"
		  }
		]
	  },
	  {
		"radlexId": "RID322",
		"description": "round ligament of uterus",
		"containedById": "RID2507",
		"leftId": "RID30749",
		"rightId": "RID30748",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"synonyms": [
		  "hunter ligament",
		  "ligamentum teres uteri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "20420"
		  },
		  {
			"system": "SNOMED",
			"code": "50840003"
		  },
		  {
			"system": "MESH",
			"code": "A02.513.901.875 | A05.360.319.114.815 | A10.165.669.901.875"
		  },
		  {
			"system": "UMLS",
			"code": "C0035877"
		  }
		]
	  },
	  {
		"radlexId": "RID30748",
		"description": "right round ligament of uterus",
		"containedById": "RID2507",
		"unsidedId": "RID322",
		"leftId": "RID30749",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "57789"
		  },
		  {
			"system": "SNOMED",
			"code": "890309001"
		  },
		  {
			"system": "UMLS",
			"code": "C0929141"
		  }
		]
	  },
	  {
		"radlexId": "RID30749",
		"description": "left round ligament of uterus",
		"containedById": "RID2507",
		"unsidedId": "RID322",
		"rightId": "RID30748",
		"sexSpecific": "Female",
		"partOfId": "RID270",
		"codes": [
		  {
			"system": "FMA",
			"code": "57790"
		  },
		  {
			"system": "SNOMED",
			"code": "890308009"
		  },
		  {
			"system": "UMLS",
			"code": "C0929142"
		  }
		]
	  },
	  {
		"radlexId": "RID1497",
		"description": "bronchopulmonary lymph node",
		"containedById": "RID1243",
		"leftId": "RID1501",
		"rightId": "RID1499",
		"partOfId": "RID28847",
		"synonyms": [
		  "10R+L thoracic lymph node",
		  "hilar lymph node",
		  "10 thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "5965"
		  },
		  {
			"system": "SNOMED",
			"code": "53074004"
		  },
		  {
			"system": "UMLS",
			"code": "C1305372"
		  }
		]
	  },
	  {
		"radlexId": "RID1499",
		"description": "right bronchopulmonary lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1497",
		"leftId": "RID1501",
		"partOfId": "RID28847",
		"synonyms": [
		  "right hilar lymph node",
		  "10R thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "5966"
		  },
		  {
			"system": "UMLS",
			"code": "C0501445"
		  }
		]
	  },
	  {
		"radlexId": "RID1501",
		"description": "left bronchopulmonary lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1497",
		"rightId": "RID1499",
		"partOfId": "RID28847",
		"synonyms": [
		  "left hilar lymph node",
		  "10L thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "5967"
		  },
		  {
			"system": "UMLS",
			"code": "C0501446"
		  }
		]
	  },
	  {
		"radlexId": "RID31912",
		"description": "celiac lymph node group",
		"containedById": "RID431",
		"partOfId": "RID28854",
		"synonyms": [
		  "nodi lymphoidei coeliaci",
		  "celiac nodes",
		  "set of celiac lymph nodes",
		  "celiac lymph nodes",
		  "nodi coeliaci",
		  "coeliac lymph nodes set",
		  "coeliac lymph node group"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71787"
		  },
		  {
			"system": "SNOMED",
			"code": "245286003"
		  },
		  {
			"system": "UMLS",
			"code": "C4252204"
		  }
		]
	  },
	  {
		"radlexId": "RID28852",
		"description": "set of mediastinal lymph nodes",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"synonyms": [
		  "mediastinal lymph node group"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12774"
		  },
		  {
			"system": "SNOMED",
			"code": "245276004"
		  },
		  {
			"system": "UMLS",
			"code": "C0588055"
		  }
		]
	  },
	  {
		"radlexId": "RID31997",
		"description": "hepatoportal lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "jPS 12p lymph nodes",
		  "area 12p lymph node group",
		  "Portahepatis lymph node group"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "278134"
		  },
		  {
			"system": "UMLS",
			"code": "C0447156"
		  }
		]
	  },
	  {
		"radlexId": "RID28848",
		"description": "cervical lymph node group",
		"containedById": "RID7488",
		"partOfId": "RID28847",
		"codes": [
		  {
			"system": "FMA",
			"code": "78571"
		  },
		  {
			"system": "SNOMED",
			"code": "245257001"
		  },
		  {
			"system": "UMLS",
			"code": "C0588054"
		  }
		]
	  },
	  {
		"radlexId": "RID31919",
		"description": "gastric lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "gastric lymph nodes set",
		  "gastric lymph nodes",
		  "set of gastric lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "75276"
		  }
		]
	  },
	  {
		"radlexId": "RID28854",
		"description": "abdominal lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28847",
		"synonyms": [
		  "abdominal lymph node set",
		  "set of abdominal lymph nodes",
		  "lymph node group of abdomen",
		  "abdominal lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "278485"
		  },
		  {
			"system": "SNOMED",
			"code": "245284000"
		  },
		  {
			"system": "UMLS",
			"code": "C0588058"
		  }
		]
	  },
	  {
		"radlexId": "RID28855",
		"description": "pelvic lymph node group",
		"containedById": "RID2507",
		"partOfId": "RID28847",
		"synonyms": [
		  "pelvic lymph nodes set",
		  "nodi lymphoidei pelvis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71817"
		  },
		  {
			"system": "SNOMED",
			"code": "245294005"
		  },
		  {
			"system": "UMLS",
			"code": "C0729595"
		  }
		]
	  },
	  {
		"radlexId": "RID31977",
		"description": "precaval lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "precaval lymph nodes set",
		  "nodi lymphoidei precavales",
		  "nodi precavales",
		  "nodi precavales"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71782"
		  },
		  {
			"system": "UMLS",
			"code": "C0933347"
		  }
		]
	  },
	  {
		"radlexId": "RID31968",
		"description": "mesenteric lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "mesenteric lymph nodes",
		  "set of mesenteric lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "277405"
		  }
		]
	  },
	  {
		"radlexId": "RID34263",
		"description": "Intramammary lymph node",
		"containedById": "RID1243",
		"leftId": "RID34263_RID5824",
		"rightId": "RID34263_RID5825",
		"partOfId": "RID28847",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "443808008"
		  },
		  {
			"system": "UMLS",
			"code": "C2733350"
		  }
		]
	  },
	  {
		"radlexId": "RID34263_RID5824",
		"description": "left Intramammary lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID34263",
		"rightId": "RID34263_RID5825",
		"partOfId": "RID28847"
	  },
	  {
		"radlexId": "RID34263_RID5825",
		"description": "right Intramammary lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID34263",
		"leftId": "RID34263_RID5824",
		"partOfId": "RID28847"
	  },
	  {
		"radlexId": "RID31959",
		"description": "paracolic lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "nodi lymphoidei paracolici",
		  "paracolic lymph nodes set",
		  "nodi paracolici",
		  "nodi paracolici"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71809"
		  },
		  {
			"system": "UMLS",
			"code": "C0735446"
		  }
		]
	  },
	  {
		"radlexId": "RID453",
		"description": "gastrohepatic ligament node",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "lesser curve/gastrohepatic ligament node",
		  "lesser curvature/gastrohepatic ligament node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "265341"
		  },
		  {
			"system": "UMLS",
			"code": "C2950989"
		  }
		]
	  },
	  {
		"radlexId": "RID32011",
		"description": "common iliac lymph node group",
		"containedById": "RID56",
		"leftId": "RID32013",
		"rightId": "RID32012",
		"partOfId": "RID28854",
		"synonyms": [
		  "nodi iliaci communes",
		  "common iliac lymph nodes set",
		  "nodi lymphoidei iliaci communes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71819"
		  },
		  {
			"system": "SNOMED",
			"code": "245295006"
		  },
		  {
			"system": "UMLS",
			"code": "C0229807"
		  }
		]
	  },
	  {
		"radlexId": "RID32012",
		"description": "right common iliac lymph node group",
		"containedById": "RID56",
		"unsidedId": "RID32011",
		"leftId": "RID32013",
		"partOfId": "RID28854",
		"synonyms": [
		  "right common iliac lymph nodes",
		  "set of right common iliac lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "233585"
		  },
		  {
			"system": "UMLS",
			"code": "C2330902"
		  }
		]
	  },
	  {
		"radlexId": "RID32013",
		"description": "left common iliac lymph node group",
		"containedById": "RID56",
		"unsidedId": "RID32011",
		"rightId": "RID32012",
		"partOfId": "RID28854",
		"synonyms": [
		  "left common iliac lymph nodes",
		  "set of left common iliac lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "233587"
		  },
		  {
			"system": "UMLS",
			"code": "C2335761"
		  }
		]
	  },
	  {
		"radlexId": "RID32018",
		"description": "external iliac lymph node group",
		"containedById": "RID2507",
		"leftId": "RID32020",
		"rightId": "RID32019",
		"partOfId": "RID28847",
		"synonyms": [
		  "external iliac lymph nodes set",
		  "nodi iliaci externi",
		  "nodi lymphoidei iliaci externi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71825"
		  },
		  {
			"system": "SNOMED",
			"code": "245300008"
		  },
		  {
			"system": "UMLS",
			"code": "C0229815"
		  }
		]
	  },
	  {
		"radlexId": "RID32019",
		"description": "right external iliac lymph node group",
		"containedById": "RID2507",
		"unsidedId": "RID32018",
		"leftId": "RID32020",
		"partOfId": "RID28847",
		"synonyms": [
		  "right external iliac lymph nodes",
		  "set of right external iliac lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "233599"
		  },
		  {
			"system": "UMLS",
			"code": "C2330980"
		  }
		]
	  },
	  {
		"radlexId": "RID32020",
		"description": "left external iliac lymph node group",
		"containedById": "RID2507",
		"unsidedId": "RID32018",
		"rightId": "RID32019",
		"partOfId": "RID28847",
		"synonyms": [
		  "left external iliac lymph nodes",
		  "set of left external iliac lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "233601"
		  },
		  {
			"system": "UMLS",
			"code": "C2325937"
		  }
		]
	  },
	  {
		"radlexId": "RID31931",
		"description": "pancreatic lymph node group",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "set of pancreaticosplenic lymph nodes",
		  "pancreaticosplenic lymph nodes",
		  "nodi pancreatici",
		  "set of pancreaticolienal lymph nodes",
		  "nodi lymphoidei pancreatici",
		  "pancreaticolienal lymph nodes",
		  "pancreatic lymph nodes set",
		  "pancreaticolienal lymph node group",
		  "pancreaticosplenic lymph node group"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71793"
		  },
		  {
			"system": "SNOMED",
			"code": "77778009"
		  },
		  {
			"system": "UMLS",
			"code": "C0229783"
		  }
		]
	  },
	  {
		"radlexId": "RID28857",
		"description": "pancreaticoduodenal lymph node",
		"containedById": "RID56",
		"partOfId": "RID28854",
		"synonyms": [
		  "peripancreatic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16623"
		  },
		  {
			"system": "SNOMED",
			"code": "76659008"
		  },
		  {
			"system": "UMLS",
			"code": "C0229784"
		  }
		]
	  },
	  {
		"radlexId": "RID466",
		"description": "pararectal lymph node",
		"containedById": "RID2507",
		"leftId": "RID466_RID5824",
		"rightId": "RID466_RID5825",
		"partOfId": "RID28855",
		"synonyms": [
		  "pararectal node",
		  "perirectal lymph node",
		  "rectal lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "16621"
		  },
		  {
			"system": "SNOMED",
			"code": "21875007"
		  },
		  {
			"system": "UMLS",
			"code": "C0229837"
		  }
		]
	  },
	  {
		"radlexId": "RID466_RID5824",
		"description": "left pararectal lymph node",
		"containedById": "RID2507",
		"unsidedId": "RID466",
		"rightId": "RID466_RID5825",
		"partOfId": "RID28855"
	  },
	  {
		"radlexId": "RID466_RID5825",
		"description": "right pararectal lymph node",
		"containedById": "RID2507",
		"unsidedId": "RID466",
		"leftId": "RID466_RID5824",
		"partOfId": "RID28855"
	  },
	  {
		"radlexId": "RID1523",
		"description": "retrocrural lymph node",
		"containedById": "RID1243",
		"synonyms": [
		  "retrocrural node",
		  "Retrokruraler Lymphknoten"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "265356"
		  },
		  {
			"system": "SNOMED",
			"code": "890324005"
		  },
		  {
			"system": "UMLS",
			"code": "C2953130"
		  }
		]
	  },
	  {
		"radlexId": "RID1477",
		"description": "aortopulmonary lymph node",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"synonyms": [
		  "subaortic lymph node",
		  "5 thoracic lymph node",
		  "5R+L thoracic lymph node",
		  "aortopulmonary window lymph node",
		  "Lymphknoten des aortopulmonalen Fensters"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276813"
		  },
		  {
			"system": "UMLS",
			"code": "C4248298"
		  }
		]
	  },
	  {
		"radlexId": "RID456",
		"description": "paracardiac lymph node",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"synonyms": [
		  "paracardiac node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "265350"
		  },
		  {
			"system": "UMLS",
			"code": "C2954126"
		  }
		]
	  },
	  {
		"radlexId": "RID1522",
		"description": "superior diaphragmatic lymph node",
		"containedById": "RID1243",
		"leftId": "RID1522_RID5824",
		"rightId": "RID1522_RID5825",
		"partOfId": "RID28847",
		"codes": [
		  {
			"system": "FMA",
			"code": "66167"
		  },
		  {
			"system": "UMLS",
			"code": "C0933343"
		  }
		]
	  },
	  {
		"radlexId": "RID1522_RID5824",
		"description": "left superior diaphragmatic lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1522",
		"rightId": "RID1522_RID5825",
		"partOfId": "RID28847"
	  },
	  {
		"radlexId": "RID1522_RID5825",
		"description": "right superior diaphragmatic lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1522",
		"leftId": "RID1522_RID5824",
		"partOfId": "RID28847"
	  },
	  {
		"radlexId": "RID1490",
		"description": "inferior pulmonary ligament lymph node",
		"containedById": "RID1243",
		"leftId": "RID1494",
		"rightId": "RID1492",
		"partOfId": "RID28847",
		"synonyms": [
		  "9 thoracic lymph node",
		  "9R+L thoracic lymph node",
		  "lymph node of inferior pulmonary ligament"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276867"
		  },
		  {
			"system": "UMLS",
			"code": "C4248061"
		  }
		]
	  },
	  {
		"radlexId": "RID1492",
		"description": "right inferior pulmonary ligament lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1490",
		"leftId": "RID1494",
		"partOfId": "RID28847",
		"synonyms": [
		  "9R thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276869"
		  },
		  {
			"system": "UMLS",
			"code": "C4248063"
		  }
		]
	  },
	  {
		"radlexId": "RID1494",
		"description": "left inferior pulmonary ligament lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1490",
		"rightId": "RID1492",
		"partOfId": "RID28847",
		"synonyms": [
		  "9L thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276871"
		  },
		  {
			"system": "UMLS",
			"code": "C4248073"
		  }
		]
	  },
	  {
		"radlexId": "RID28935",
		"description": "para-aortic thoracic lymph node",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"synonyms": [
		  "6R+L thoracic lymph node",
		  "6 thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276820"
		  },
		  {
			"system": "UMLS",
			"code": "C4248027"
		  }
		]
	  },
	  {
		"radlexId": "RID1521",
		"description": "pericardial lymph node",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"codes": [
		  {
			"system": "FMA",
			"code": "276807"
		  },
		  {
			"system": "UMLS",
			"code": "C3897951"
		  }
		]
	  },
	  {
		"radlexId": "RID1484",
		"description": "esophageal lymph node",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"synonyms": [
		  "8 thoracic lymph node",
		  "8R+L thoracic lymph node",
		  "paraesophageal lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "12784"
		  },
		  {
			"system": "SNOMED",
			"code": "11899006"
		  },
		  {
			"system": "UMLS",
			"code": "C0229760"
		  }
		]
	  },
	  {
		"radlexId": "RID1486",
		"description": "right paraesophageal lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1484",
		"leftId": "RID1488",
		"partOfId": "RID28847",
		"synonyms": [
		  "8R thoracic lymph node"
		]
	  },
	  {
		"radlexId": "RID1488",
		"description": "left paraesophageal lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1484",
		"rightId": "RID1486",
		"partOfId": "RID28847",
		"synonyms": [
		  "8L thoracic lymph node"
		]
	  },
	  {
		"radlexId": "RID1465",
		"description": "upper paratracheal lymph node",
		"containedById": "RID1243",
		"leftId": "RID1469",
		"rightId": "RID1467",
		"partOfId": "RID28847",
		"synonyms": [
		  "2 thoracic lymph node",
		  "2R+L thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276933"
		  },
		  {
			"system": "SNOMED",
			"code": "127927006"
		  },
		  {
			"system": "UMLS",
			"code": "C4248231"
		  }
		]
	  },
	  {
		"radlexId": "RID1467",
		"description": "right upper paratracheal lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1465",
		"leftId": "RID1469",
		"partOfId": "RID28847",
		"synonyms": [
		  "2R thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276936"
		  },
		  {
			"system": "SNOMED",
			"code": "127928001"
		  },
		  {
			"system": "UMLS",
			"code": "C4248233"
		  }
		]
	  },
	  {
		"radlexId": "RID1469",
		"description": "left upper paratracheal lymph node",
		"containedById": "RID1243",
		"unsidedId": "RID1465",
		"rightId": "RID1467",
		"partOfId": "RID28847",
		"synonyms": [
		  "2L thoracic lymph node"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "276938"
		  },
		  {
			"system": "SNOMED",
			"code": "127929009"
		  },
		  {
			"system": "UMLS",
			"code": "C4247351"
		  }
		]
	  },
	  {
		"radlexId": "RID1482",
		"description": "subcarinal lymph node",
		"containedById": "RID1243",
		"partOfId": "RID28847",
		"synonyms": [
		  "tracheobronchial node",
		  "tracheobronchial lymph node"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "28330007"
		  },
		  {
			"system": "UMLS",
			"code": "C0229753"
		  }
		]
	  },
	  {
		"radlexId": "RID28847",
		"description": "lymph node group",
		"containedById": "RID39569",
		"synonyms": [
		  "lymph nodes set",
		  "set of lymph nodes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "70776"
		  },
		  {
			"system": "SNOMED",
			"code": "245256005"
		  },
		  {
			"system": "UMLS",
			"code": "C0447155"
		  }
		]
	  },
	  {
		"radlexId": "RID32793",
		"description": "musculature of perineum",
		"containedById": "RID2507",
		"partOfId": "RID13209",
		"synonyms": [
		  "musculi perinei",
		  "perineal muscles set"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71295"
		  },
		  {
			"system": "UMLS",
			"code": "C0224382"
		  }
		]
	  },
	  {
		"radlexId": "RID103",
		"description": "lower esophageal sphincter",
		"containedById": "RID56",
		"synonyms": [
		  "lES",
		  "Inferior esophageal sphincter"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "63048"
		  },
		  {
			"system": "UMLS",
			"code": "C0227192"
		  }
		]
	  },
	  {
		"radlexId": "RID13209",
		"description": "musculoskeletal system",
		"containedById": "RID39569",
		"codes": [
		  {
			"system": "FMA",
			"code": "7482"
		  },
		  {
			"system": "SNOMED",
			"code": "26107004"
		  },
		  {
			"system": "MESH",
			"code": "A02"
		  },
		  {
			"system": "UMLS",
			"code": "C0026860"
		  }
		]
	  },
	  {
		"radlexId": "RID32755",
		"description": "musculature of thorax",
		"containedById": "RID2468",
		"partOfId": "RID13209",
		"synonyms": [
		  "set of muscles of thorax",
		  "musculi thoracis",
		  "thoracic musculature"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "71293"
		  },
		  {
			"system": "UMLS",
			"code": "C0224337"
		  }
		]
	  },
	  {
		"radlexId": "RID32809",
		"description": "musculature of anterior abdominal wall",
		"containedById": "RID30014",
		"partOfId": "RID13209",
		"synonyms": [
		  "musculature of front of abdomen",
		  "anterior abdominal wall musculature",
		  "muscles of anterior abdominal wall",
		  "set of muscles of anterior abdominal wall"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "78435"
		  },
		  {
			"system": "UMLS",
			"code": "C1744565"
		  }
		]
	  },
	  {
		"radlexId": "RID32807",
		"description": "musculature of back of thorax",
		"containedById": "RID32755",
		"partOfId": "RID13209",
		"synonyms": [
		  "set of muscles of back of thorax"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "78539"
		  },
		  {
			"system": "UMLS",
			"code": "C2333464"
		  }
		]
	  },
	  {
		"radlexId": "RID32808",
		"description": "musculature of back of abdomen",
		"containedById": "RID431",
		"partOfId": "RID13209",
		"codes": [
		  {
			"system": "FMA",
			"code": "86918"
		  },
		  {
			"system": "UMLS",
			"code": "C2325961"
		  }
		]
	  },
	  {
		"radlexId": "RID32811",
		"description": "musculature of abdomen",
		"containedById": "RID56",
		"partOfId": "RID13209",
		"synonyms": [
		  "musculi abdominis",
		  "musculature of abdominal wall",
		  "set of muscles of abdomen",
		  "abdominal musculature",
		  "muscles of abdomen"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "86917"
		  },
		  {
			"system": "UMLS",
			"code": "C4239659"
		  }
		]
	  },
	  {
		"radlexId": "RID58",
		"description": "liver",
		"containedById": "RID397",
		"codes": [
		  {
			"system": "FMA",
			"code": "7197"
		  },
		  {
			"system": "SNOMED",
			"code": "10200004"
		  },
		  {
			"system": "MESH",
			"code": "A03.620"
		  },
		  {
			"system": "UMLS",
			"code": "C0023884"
		  }
		]
	  },
	  {
		"radlexId": "RID74",
		"description": "right lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID58",
		"synonyms": [
		  "pars hepatis dextra",
		  "right part of liver",
		  "right segment of liver",
		  "lobus hepatis dexter",
		  "right hemiliver",
		  "Rechter Leberlappen"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15809"
		  },
		  {
			"system": "SNOMED",
			"code": "48521005"
		  },
		  {
			"system": "UMLS",
			"code": "C0227481"
		  }
		]
	  },
	  {
		"radlexId": "RID69",
		"description": "left lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID58",
		"synonyms": [
		  "left segment of liver",
		  "lobus hepatis sinister",
		  "left part of liver",
		  "left hemiliver",
		  "pars hepatis sinistra",
		  "lobus hepatis sinister"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "15810"
		  },
		  {
			"system": "SNOMED",
			"code": "69842003"
		  },
		  {
			"system": "UMLS",
			"code": "C0227486"
		  }
		]
	  },
	  {
		"radlexId": "RID77",
		"description": "caudate lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID74",
		"synonyms": [
		  "segment I of liver",
		  "couinaud hepatic segment I",
		  "posterior liver",
		  "segmentum hepatis I",
		  "lobus caudatus hepatis",
		  "pars posterior hepatis",
		  "spiegelian lobe",
		  "Couinaud hepatic segment I",
		  "Couinaud hepatic segment 1",
		  "posterior part of liver",
		  "posterior hepatic segment I",
		  "pars posterior hepatis",
		  "segmentum hepatis I"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13365"
		  },
		  {
			"system": "SNOMED",
			"code": "71133005"
		  },
		  {
			"system": "UMLS",
			"code": "C0227489"
		  }
		]
	  },
	  {
		"radlexId": "RID33237",
		"description": "lateral superior area of lateral segment of left lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID69",
		"synonyms": [
		  "segment II"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14513"
		  },
		  {
			"system": "UMLS",
			"code": "C0733962"
		  }
		]
	  },
	  {
		"radlexId": "RID33238",
		"description": "lateral inferior area of lateral segment of left lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID69",
		"synonyms": [
		  "segment III"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14514"
		  },
		  {
			"system": "UMLS",
			"code": "C0733963"
		  }
		]
	  },
	  {
		"radlexId": "RID33243",
		"description": "medial superior area of medial segment of left lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID69",
		"synonyms": [
		  "segment IVa"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14511"
		  },
		  {
			"system": "UMLS",
			"code": "C0733960"
		  }
		]
	  },
	  {
		"radlexId": "RID33244",
		"description": "medial inferior area of medial segment of left lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID69",
		"synonyms": [
		  "segment IVb"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14512"
		  },
		  {
			"system": "UMLS",
			"code": "C0733961"
		  }
		]
	  },
	  {
		"radlexId": "RID33240",
		"description": "anterior inferior area of anterior segment of right lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID74",
		"synonyms": [
		  "segment V",
		  "anterior medial segment"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14507"
		  },
		  {
			"system": "UMLS",
			"code": "C0733956"
		  }
		]
	  },
	  {
		"radlexId": "RID33242",
		"description": "posterior inferior area of posterior segment of right lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID74",
		"synonyms": [
		  "segment VI",
		  "anterior lateral segment"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14509"
		  },
		  {
			"system": "UMLS",
			"code": "C0733958"
		  }
		]
	  },
	  {
		"radlexId": "RID33241",
		"description": "posterior superior area of posterior segment of right lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID74",
		"synonyms": [
		  "segment VII",
		  "posterior lateral segment"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14510"
		  },
		  {
			"system": "UMLS",
			"code": "C0733959"
		  }
		]
	  },
	  {
		"radlexId": "RID33239",
		"description": "anterior superior area of anterior segment of right lobe of liver",
		"containedById": "RID58",
		"partOfId": "RID74",
		"synonyms": [
		  "segment VIII",
		  "posterior medial segment"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14508"
		  },
		  {
			"system": "UMLS",
			"code": "C0733957"
		  }
		]
	  },
	  {
		"radlexId": "RID31748",
		"description": "fossa for gallbladder",
		"containedById": "RID58",
		"partOfId": "RID58",
		"synonyms": [
		  "gallbladder fossa",
		  "fossa vesicae biliaris",
		  "fossa vesicae felleae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "14494"
		  },
		  {
			"system": "SNOMED",
			"code": "69039008"
		  },
		  {
			"system": "UMLS",
			"code": "C0227511"
		  }
		]
	  },
	  {
		"radlexId": "RID32954",
		"description": "abdominal cavity",
		"containedById": "RID56",
		"codes": [
		  {
			"system": "FMA",
			"code": "12266"
		  },
		  {
			"system": "SNOMED",
			"code": "361473009"
		  },
		  {
			"system": "MESH",
			"code": "A01.923.047.025"
		  },
		  {
			"system": "UMLS",
			"code": "C0230168"
		  }
		]
	  },
	  {
		"radlexId": "RID31555",
		"description": "abdominal part of esophagus",
		"containedById": "RID431",
		"codes": [
		  {
			"system": "FMA",
			"code": "9397"
		  },
		  {
			"system": "SNOMED",
			"code": "245407007"
		  },
		  {
			"system": "UMLS",
			"code": "C0227190"
		  }
		]
	  },
	  {
		"radlexId": "RID34560",
		"description": "amnion",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "FMA",
			"code": "80223"
		  },
		  {
			"system": "SNOMED",
			"code": "70847004"
		  },
		  {
			"system": "MESH",
			"code": "A10.615.284.277 | A16.254.750.277"
		  },
		  {
			"system": "UMLS",
			"code": "C0002630"
		  }
		]
	  },
	  {
		"radlexId": "RID34559",
		"description": "chorion",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "FMA",
			"code": "80224"
		  },
		  {
			"system": "SNOMED",
			"code": "74439004"
		  },
		  {
			"system": "MESH",
			"code": "A10.615.284.473 | A16.254.750.473"
		  },
		  {
			"system": "UMLS",
			"code": "C0008503"
		  }
		]
	  },
	  {
		"radlexId": "RID34557",
		"description": "placenta",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "FMA",
			"code": "63934"
		  },
		  {
			"system": "SNOMED",
			"code": "78067005"
		  },
		  {
			"system": "MESH",
			"code": "A16.710"
		  },
		  {
			"system": "UMLS",
			"code": "C0032043"
		  }
		]
	  },
	  {
		"radlexId": "RID34558",
		"description": "umbilical cord",
		"containedById": "RID2507",
		"codes": [
		  {
			"system": "FMA",
			"code": "85541"
		  },
		  {
			"system": "SNOMED",
			"code": "29870000"
		  },
		  {
			"system": "MESH",
			"code": "A16.378.693"
		  },
		  {
			"system": "UMLS",
			"code": "C0041633"
		  }
		]
	  },
	  {
		"radlexId": "RID29859",
		"description": "anterior chest wall",
		"containedById": "RID2468",
		"codes": [
		  {
			"system": "FMA",
			"code": "87543"
		  },
		  {
			"system": "SNOMED",
			"code": "63698005"
		  },
		  {
			"system": "UMLS",
			"code": "C0230132"
		  }
		]
	  },
	  {
		"radlexId": "RID1208",
		"description": "portal vein",
		"containedById": "RID431",
		"partOfId": "RID50378",
		"synonyms": [
		  "pv",
		  "Vena porta",
		  "PV"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "66645"
		  },
		  {
			"system": "SNOMED",
			"code": "32764006"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.908.670.567"
		  },
		  {
			"system": "UMLS",
			"code": "C0032718"
		  }
		]
	  },
	  {
		"radlexId": "RID34469",
		"description": "right portal vein",
		"containedById": "RID431",
		"partOfId": "RID50378",
		"synonyms": [
		  "right branch of portal vein",
		  "ramus dexter vena portae hepatis",
		  "right hepatic portal vein"
		]
	  },
	  {
		"radlexId": "RID34470",
		"description": "left portal vein",
		"containedById": "RID431",
		"partOfId": "RID50378",
		"synonyms": [
		  "ramus sinister vena portae hepatis",
		  "left hepatic portal vein",
		  "left branch of portal vein"
		]
	  },
	  {
		"radlexId": "RID35962",
		"description": "umbilical artery",
		"containedById": "RID2507"
	  },
	  {
		"radlexId": "RID34884",
		"description": "umbilical vein",
		"containedById": "RID2507"
	  },
	  {
		"radlexId": "RID7534",
		"description": "superficial layer of cervical fascia",
		"containedById": "RID7488",
		"synonyms": [
		  "superficial cervical fascia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "57805"
		  },
		  {
			"system": "SNOMED",
			"code": "29490003"
		  }
		]
	  },
	  {
		"radlexId": "RID7535",
		"description": "deep layer of cervical fascia",
		"containedById": "RID7488",
		"synonyms": [
		  "deep cervical fascia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "76866"
		  }
		]
	  },
	  {
		"radlexId": "RID7536",
		"description": "superficial layer of deep cervical fascia",
		"containedById": "RID7488",
		"partOfId": "RID7535",
		"synonyms": [
		  "investing layer of deep cervical fascia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "21791"
		  }
		]
	  },
	  {
		"radlexId": "RID7537",
		"description": "middle layer of deep cervical fascia",
		"containedById": "RID7488",
		"partOfId": "RID7535",
		"synonyms": [
		  "pretracheal fascia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46559"
		  },
		  {
			"system": "SNOMED",
			"code": "43649005"
		  }
		]
	  },
	  {
		"radlexId": "RID7538",
		"description": "deep layer of deep cervical fascia",
		"containedById": "RID7488",
		"partOfId": "RID7535",
		"synonyms": [
		  "prevertebral fascia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46560"
		  },
		  {
			"system": "SNOMED",
			"code": "22320007"
		  }
		]
	  },
	  {
		"radlexId": "RID584",
		"description": "common carotid artery",
		"containedById": "RID7488",
		"leftId": "RID584_RID5824",
		"rightId": "RID584_RID5825",
		"synonyms": [
		  "carotid artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3939"
		  },
		  {
			"system": "SNOMED",
			"code": "32062004"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.186.200"
		  },
		  {
			"system": "UMLS",
			"code": "C0162859"
		  }
		]
	  },
	  {
		"radlexId": "RID584_RID5824",
		"description": "left common carotid artery",
		"containedById": "RID7488",
		"unsidedId": "RID584",
		"rightId": "RID584_RID5825"
	  },
	  {
		"radlexId": "RID584_RID5825",
		"description": "right common carotid artery",
		"containedById": "RID7488",
		"unsidedId": "RID584",
		"leftId": "RID584_RID5824"
	  },
	  {
		"radlexId": "RID585",
		"description": "internal carotid artery",
		"containedById": "RID7488",
		"leftId": "RID585_RID5824",
		"rightId": "RID585_RID5825",
		"synonyms": [
		  "ICA"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3947"
		  },
		  {
			"system": "SNOMED",
			"code": "86117002"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.186.200.230"
		  },
		  {
			"system": "UMLS",
			"code": "C0007276"
		  }
		]
	  },
	  {
		"radlexId": "RID585_RID5824",
		"description": "left internal carotid artery",
		"containedById": "RID7488",
		"unsidedId": "RID585",
		"rightId": "RID585_RID5825"
	  },
	  {
		"radlexId": "RID585_RID5825",
		"description": "right internal carotid artery",
		"containedById": "RID7488",
		"unsidedId": "RID585",
		"leftId": "RID585_RID5824"
	  },
	  {
		"radlexId": "RID684",
		"description": "external carotid artery",
		"containedById": "RID7488",
		"leftId": "RID684_RID5824",
		"rightId": "RID684_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "10635"
		  },
		  {
			"system": "SNOMED",
			"code": "22286001"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.186.200.210"
		  },
		  {
			"system": "UMLS",
			"code": "C0007275"
		  }
		]
	  },
	  {
		"radlexId": "RID684_RID5824",
		"description": "left external carotid artery",
		"containedById": "RID7488",
		"unsidedId": "RID684",
		"rightId": "RID684_RID5825"
	  },
	  {
		"radlexId": "RID684_RID5825",
		"description": "right external carotid artery",
		"containedById": "RID7488",
		"unsidedId": "RID684",
		"leftId": "RID684_RID5824"
	  },
	  {
		"radlexId": "RID685",
		"description": "superior thyroid artery",
		"containedById": "RID7488",
		"leftId": "RID685_RID5824",
		"rightId": "RID685_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49472"
		  },
		  {
			"system": "SNOMED",
			"code": "72021004"
		  }
		]
	  },
	  {
		"radlexId": "RID685_RID5824",
		"description": "left superior thyroid artery",
		"containedById": "RID7488",
		"unsidedId": "RID685",
		"rightId": "RID685_RID5825"
	  },
	  {
		"radlexId": "RID685_RID5825",
		"description": "right superior thyroid artery",
		"containedById": "RID7488",
		"unsidedId": "RID685",
		"leftId": "RID685_RID5824"
	  },
	  {
		"radlexId": "RID692",
		"description": "ascending pharyngeal artery",
		"containedById": "RID7488",
		"leftId": "RID692_RID5824",
		"rightId": "RID692_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49497"
		  },
		  {
			"system": "SNOMED",
			"code": "80435006"
		  }
		]
	  },
	  {
		"radlexId": "RID692_RID5824",
		"description": "left ascending pharyngeal artery",
		"containedById": "RID7488",
		"unsidedId": "RID692",
		"rightId": "RID692_RID5825"
	  },
	  {
		"radlexId": "RID692_RID5825",
		"description": "right ascending pharyngeal artery",
		"containedById": "RID7488",
		"unsidedId": "RID692",
		"leftId": "RID692_RID5824"
	  },
	  {
		"radlexId": "RID774",
		"description": "vertebral artery",
		"containedById": "RID7488",
		"leftId": "RID44621",
		"rightId": "RID44620",
		"synonyms": [
		  "arteria vertebralis",
		  "arteria vertebralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "3956"
		  },
		  {
			"system": "SNOMED",
			"code": "85234005"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.955"
		  },
		  {
			"system": "UMLS",
			"code": "C0042559"
		  }
		]
	  },
	  {
		"radlexId": "RID44620",
		"description": "right vertebral artery",
		"containedById": "RID7488",
		"unsidedId": "RID774",
		"leftId": "RID44621",
		"codes": [
		  {
			"system": "FMA",
			"code": "3958"
		  },
		  {
			"system": "SNOMED",
			"code": "369354007"
		  }
		]
	  },
	  {
		"radlexId": "RID44621",
		"description": "left vertebral artery",
		"containedById": "RID7488",
		"unsidedId": "RID774",
		"rightId": "RID44620",
		"codes": [
		  {
			"system": "FMA",
			"code": "4066"
		  },
		  {
			"system": "SNOMED",
			"code": "369355008"
		  }
		]
	  },
	  {
		"radlexId": "RID837",
		"description": "thyrocervical trunk",
		"containedById": "RID7488",
		"leftId": "RID837_RID5824",
		"rightId": "RID837_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "3990"
		  },
		  {
			"system": "SNOMED",
			"code": "6538005"
		  }
		]
	  },
	  {
		"radlexId": "RID837_RID5824",
		"description": "left thyrocervical trunk",
		"containedById": "RID7488",
		"unsidedId": "RID837",
		"rightId": "RID837_RID5825"
	  },
	  {
		"radlexId": "RID837_RID5825",
		"description": "right thyrocervical trunk",
		"containedById": "RID7488",
		"unsidedId": "RID837",
		"leftId": "RID837_RID5824"
	  },
	  {
		"radlexId": "RID838",
		"description": "inferior thyroid artery",
		"containedById": "RID7488",
		"leftId": "RID44843",
		"rightId": "RID44842",
		"synonyms": [
		  "arteria thyroidea inferior",
		  "Arteria thyroidea inferior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "10662"
		  },
		  {
			"system": "SNOMED",
			"code": "75522005"
		  }
		]
	  },
	  {
		"radlexId": "RID44842",
		"description": "right inferior thyroid artery",
		"containedById": "RID7488",
		"unsidedId": "RID838",
		"leftId": "RID44843",
		"codes": [
		  {
			"system": "FMA",
			"code": "10697"
		  }
		]
	  },
	  {
		"radlexId": "RID44843",
		"description": "left inferior thyroid artery",
		"containedById": "RID7488",
		"unsidedId": "RID838",
		"rightId": "RID44842",
		"codes": [
		  {
			"system": "FMA",
			"code": "10680"
		  }
		]
	  },
	  {
		"radlexId": "RID853",
		"description": "costocervical trunk",
		"containedById": "RID7488",
		"leftId": "RID853_RID5824",
		"rightId": "RID853_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "10636"
		  },
		  {
			"system": "SNOMED",
			"code": "3159004"
		  }
		]
	  },
	  {
		"radlexId": "RID853_RID5824",
		"description": "left costocervical trunk",
		"containedById": "RID7488",
		"unsidedId": "RID853",
		"rightId": "RID853_RID5825"
	  },
	  {
		"radlexId": "RID853_RID5825",
		"description": "right costocervical trunk",
		"containedById": "RID7488",
		"unsidedId": "RID853",
		"leftId": "RID853_RID5824"
	  },
	  {
		"radlexId": "RID1020",
		"description": "anterior jugular vein",
		"containedById": "RID7488",
		"leftId": "RID44025",
		"rightId": "RID44024",
		"synonyms": [
		  "vena jugularis anterior",
		  "vena jugularis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13318"
		  },
		  {
			"system": "SNOMED",
			"code": "158670005"
		  }
		]
	  },
	  {
		"radlexId": "RID44024",
		"description": "right anterior jugular vein",
		"containedById": "RID7488",
		"unsidedId": "RID1020",
		"leftId": "RID44025",
		"codes": [
		  {
			"system": "FMA",
			"code": "13319"
		  }
		]
	  },
	  {
		"radlexId": "RID44025",
		"description": "left anterior jugular vein",
		"containedById": "RID7488",
		"unsidedId": "RID1020",
		"rightId": "RID44024",
		"codes": [
		  {
			"system": "FMA",
			"code": "13320"
		  }
		]
	  },
	  {
		"radlexId": "RID1024",
		"description": "internal jugular vein ",
		"containedById": "RID7488",
		"leftId": "RID1024_RID5824",
		"rightId": "RID1024_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "4724"
		  },
		  {
			"system": "SNOMED",
			"code": "12123001"
		  }
		]
	  },
	  {
		"radlexId": "RID1024_RID5824",
		"description": "left internal jugular vein ",
		"containedById": "RID7488",
		"unsidedId": "RID1024",
		"rightId": "RID1024_RID5825"
	  },
	  {
		"radlexId": "RID1024_RID5825",
		"description": "right internal jugular vein ",
		"containedById": "RID7488",
		"unsidedId": "RID1024",
		"leftId": "RID1024_RID5824"
	  },
	  {
		"radlexId": "RID1018",
		"description": "external jugular vein",
		"containedById": "RID7488",
		"leftId": "RID43902",
		"rightId": "RID43901",
		"synonyms": [
		  "vena jugularis externa",
		  "vena jugularis externa"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13110"
		  },
		  {
			"system": "SNOMED",
			"code": "71585003"
		  }
		]
	  },
	  {
		"radlexId": "RID43901",
		"description": "right external jugular vein",
		"containedById": "RID7488",
		"unsidedId": "RID1018",
		"leftId": "RID43902",
		"codes": [
		  {
			"system": "FMA",
			"code": "13111"
		  }
		]
	  },
	  {
		"radlexId": "RID43902",
		"description": "left external jugular vein",
		"containedById": "RID7488",
		"unsidedId": "RID1018",
		"rightId": "RID43901",
		"codes": [
		  {
			"system": "FMA",
			"code": "13112"
		  }
		]
	  },
	  {
		"radlexId": "RID43934",
		"description": "communicating vein between internal jugular vein and anterior jugular vein",
		"containedById": "RID7488",
		"leftId": "RID43936",
		"rightId": "RID43935",
		"codes": [
		  {
			"system": "FMA",
			"code": "52555"
		  }
		]
	  },
	  {
		"radlexId": "RID43935",
		"description": "communicating vein between right internal jugular vein and right anterior jugular vein",
		"containedById": "RID7488",
		"unsidedId": "RID43934",
		"leftId": "RID43936",
		"codes": [
		  {
			"system": "FMA",
			"code": "52556"
		  }
		]
	  },
	  {
		"radlexId": "RID43936",
		"description": "communicating vein between left internal jugular vein and left anterior jugular vein",
		"containedById": "RID7488",
		"unsidedId": "RID43934",
		"rightId": "RID43935",
		"codes": [
		  {
			"system": "FMA",
			"code": "52557"
		  }
		]
	  },
	  {
		"radlexId": "RID1037",
		"description": "superior thyroid vein",
		"containedById": "RID7488",
		"leftId": "RID1037_RID5824",
		"rightId": "RID1037_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "14323"
		  },
		  {
			"system": "SNOMED",
			"code": "18209004"
		  }
		]
	  },
	  {
		"radlexId": "RID1037_RID5824",
		"description": "left superior thyroid vein",
		"containedById": "RID7488",
		"unsidedId": "RID1037",
		"rightId": "RID1037_RID5825"
	  },
	  {
		"radlexId": "RID1037_RID5825",
		"description": "right superior thyroid vein",
		"containedById": "RID7488",
		"unsidedId": "RID1037",
		"leftId": "RID1037_RID5824"
	  },
	  {
		"radlexId": "RID1055",
		"description": "retromandibular vein",
		"containedById": "RID7488",
		"leftId": "RID43904",
		"rightId": "RID43903",
		"synonyms": [
		  "vena retromandibularis",
		  "Vena retromandibularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50928"
		  },
		  {
			"system": "SNOMED",
			"code": "36566009"
		  }
		]
	  },
	  {
		"radlexId": "RID43903",
		"description": "right retromandibular vein",
		"containedById": "RID7488",
		"unsidedId": "RID1055",
		"leftId": "RID43904",
		"codes": [
		  {
			"system": "FMA",
			"code": "50929"
		  }
		]
	  },
	  {
		"radlexId": "RID43904",
		"description": "left retromandibular vein",
		"containedById": "RID7488",
		"unsidedId": "RID1055",
		"rightId": "RID43903",
		"codes": [
		  {
			"system": "FMA",
			"code": "50930"
		  }
		]
	  },
	  {
		"radlexId": "RID1079",
		"description": "vertebral vein",
		"containedById": "RID7488",
		"leftId": "RID1079_RID5824",
		"rightId": "RID1079_RID5825",
		"synonyms": [
		  "glandula thyroidea",
		  "thyroid",
		  "glandula thyroidea",
		  "schilddr√ºsedr√ºse"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9603"
		  },
		  {
			"system": "SNOMED",
			"code": "23664000"
		  },
		  {
			"system": "UMLS",
			"code": "C0040132"
		  }
		]
	  },
	  {
		"radlexId": "RID1079_RID5824",
		"description": "left vertebral vein",
		"containedById": "RID7488",
		"unsidedId": "RID1079",
		"rightId": "RID1079_RID5825"
	  },
	  {
		"radlexId": "RID1079_RID5825",
		"description": "right vertebral vein",
		"containedById": "RID7488",
		"unsidedId": "RID1079",
		"leftId": "RID1079_RID5824"
	  },
	  {
		"radlexId": "RID7578",
		"description": "thyroid gland",
		"containedById": "RID7488",
		"synonyms": [
		  "left thyroid lobe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9603"
		  },
		  {
			"system": "SNOMED",
			"code": "69748006"
		  },
		  {
			"system": "MESH",
			"code": "A06.300.900"
		  }
		]
	  },
	  {
		"radlexId": "RID7579",
		"description": "left lobe of thyroid gland",
		"containedById": "RID7488",
		"partOfId": "RID7578",
		"synonyms": [
		  "right thyroid lobe"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13369"
		  },
		  {
			"system": "SNOMED",
			"code": "79163004"
		  }
		]
	  },
	  {
		"radlexId": "RID7581",
		"description": "right lobe of thyroid gland",
		"containedById": "RID7488",
		"partOfId": "RID7578",
		"codes": [
		  {
			"system": "FMA",
			"code": "13368"
		  },
		  {
			"system": "SNOMED",
			"code": "29565003"
		  }
		]
	  },
	  {
		"radlexId": "RID7583",
		"description": "pyramidal lobe of thyroid gland",
		"containedById": "RID7488",
		"partOfId": "RID7578",
		"synonyms": [
		  "thyroid isthmus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49180"
		  },
		  {
			"system": "SNOMED",
			"code": "40716006"
		  }
		]
	  },
	  {
		"radlexId": "RID7584",
		"description": "isthmus of thyroid gland",
		"containedById": "RID7488",
		"partOfId": "RID7578",
		"codes": [
		  {
			"system": "FMA",
			"code": "49178"
		  },
		  {
			"system": "SNOMED",
			"code": "40867004"
		  },
		  {
			"system": "UMLS",
			"code": "C0030518"
		  }
		]
	  },
	  {
		"radlexId": "RID7587",
		"description": "parathyroid gland",
		"containedById": "RID7488",
		"codes": [
		  {
			"system": "FMA",
			"code": "13890"
		  },
		  {
			"system": "SNOMED",
			"code": "111002"
		  },
		  {
			"system": "MESH",
			"code": "A06.300.560"
		  },
		  {
			"system": "UMLS",
			"code": "C0020629"
		  }
		]
	  },
	  {
		"radlexId": "RID6379_RID9080",
		"description": "extracranial head",
		"containedById": "RID9080"
	  },
	  {
		"radlexId": "RID6383_RID9080",
		"description": "intracranial head",
		"containedById": "RID9080"
	  },
	  {
		"radlexId": "RID9532",
		"description": "nasal cavity",
		"containedById": "RID7540",
		"codes": [
		  {
			"system": "FMA",
			"code": "54378"
		  },
		  {
			"system": "SNOMED",
			"code": "279549004"
		  },
		  {
			"system": "MESH",
			"code": "A04.531.449"
		  },
		  {
			"system": "UMLS",
			"code": "C0027423"
		  }
		]
	  },
	  {
		"radlexId": "RID13211",
		"description": "pharynx",
		"containedById": "RID7488",
		"codes": [
		  {
			"system": "FMA",
			"code": "46688"
		  },
		  {
			"system": "SNOMED",
			"code": "54066008"
		  },
		  {
			"system": "MESH",
			"code": "A14.724"
		  }
		]
	  },
	  {
		"radlexId": "RID9990",
		"description": "nasopharynx",
		"containedById": "RID7540",
		"partOfId": "RID13211",
		"synonyms": [
		  "nasophar"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "54878"
		  },
		  {
			"system": "SNOMED",
			"code": "71836000"
		  },
		  {
			"system": "MESH",
			"code": "A14.724.557"
		  },
		  {
			"system": "UMLS",
			"code": "C0027442"
		  }
		]
	  },
	  {
		"radlexId": "RID10003",
		"description": "oropharynx",
		"containedById": "RID7540",
		"partOfId": "RID13211",
		"codes": [
		  {
			"system": "FMA",
			"code": "54879"
		  },
		  {
			"system": "SNOMED",
			"code": "31389004"
		  },
		  {
			"system": "MESH",
			"code": "A14.724.603"
		  },
		  {
			"system": "UMLS",
			"code": "C0521367"
		  }
		]
	  },
	  {
		"radlexId": "RID10021",
		"description": "hypopharynx",
		"containedById": "RID7488",
		"partOfId": "RID13211",
		"synonyms": [
		  "laryngopharynx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "54880"
		  },
		  {
			"system": "SNOMED",
			"code": "81502006"
		  },
		  {
			"system": "MESH",
			"code": "A14.724.490"
		  },
		  {
			"system": "UMLS",
			"code": "C0014540"
		  }
		]
	  },
	  {
		"radlexId": "RID9938",
		"description": "oral cavity",
		"containedById": "RID7540",
		"synonyms": [
		  "oral cav",
		  "cavity of mouth"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "20292"
		  },
		  {
			"system": "SNOMED",
			"code": "74262004"
		  },
		  {
			"system": "MESH",
			"code": "A14.549"
		  },
		  {
			"system": "UMLS",
			"code": "C0226896"
		  }
		]
	  },
	  {
		"radlexId": "RID7589",
		"description": "larynx",
		"containedById": "RID7488",
		"codes": [
		  {
			"system": "FMA",
			"code": "55097"
		  },
		  {
			"system": "SNOMED",
			"code": "4596009"
		  },
		  {
			"system": "MESH",
			"code": "A04.329"
		  }
		]
	  },
	  {
		"radlexId": "RID7565",
		"description": "retropharyngeal space of head",
		"containedById": "RID7540",
		"leftId": "RID7565_RID5824",
		"rightId": "RID7565_RID5825",
		"synonyms": [
		  "retropharyngeal space"
		]
	  },
	  {
		"radlexId": "RID7565_RID5824",
		"description": "left retropharyngeal space of head",
		"containedById": "RID7540",
		"unsidedId": "RID7565",
		"rightId": "RID7565_RID5825"
	  },
	  {
		"radlexId": "RID7565_RID5825",
		"description": "right retropharyngeal space of head",
		"containedById": "RID7540",
		"unsidedId": "RID7565",
		"leftId": "RID7565_RID5824"
	  },
	  {
		"radlexId": "RID7569",
		"description": "masticator space",
		"containedById": "RID7540",
		"leftId": "RID7569_RID5824",
		"rightId": "RID7569_RID5825"
	  },
	  {
		"radlexId": "RID7569_RID5824",
		"description": "left masticator space",
		"containedById": "RID7540",
		"unsidedId": "RID7569",
		"rightId": "RID7569_RID5825"
	  },
	  {
		"radlexId": "RID7569_RID5825",
		"description": "right masticator space",
		"containedById": "RID7540",
		"unsidedId": "RID7569",
		"leftId": "RID7569_RID5824"
	  },
	  {
		"radlexId": "RID7572",
		"description": "perivertebral space",
		"containedById": "RID7540",
		"leftId": "RID7572_RID5824",
		"rightId": "RID7572_RID5825"
	  },
	  {
		"radlexId": "RID7572_RID5824",
		"description": "left perivertebral space",
		"containedById": "RID7540",
		"unsidedId": "RID7572",
		"rightId": "RID7572_RID5825"
	  },
	  {
		"radlexId": "RID7572_RID5825",
		"description": "right perivertebral space",
		"containedById": "RID7540",
		"unsidedId": "RID7572",
		"leftId": "RID7572_RID5824"
	  },
	  {
		"radlexId": "RID7568",
		"description": "carotid space",
		"containedById": "RID7540",
		"leftId": "RID7568_RID5824",
		"rightId": "RID7568_RID5825"
	  },
	  {
		"radlexId": "RID7568_RID5824",
		"description": "left carotid space",
		"containedById": "RID7540",
		"unsidedId": "RID7568",
		"rightId": "RID7568_RID5825"
	  },
	  {
		"radlexId": "RID7568_RID5825",
		"description": "right carotid space",
		"containedById": "RID7540",
		"unsidedId": "RID7568",
		"leftId": "RID7568_RID5824"
	  },
	  {
		"radlexId": "RID9943",
		"description": "uvula",
		"containedById": "RID9938",
		"codes": [
		  {
			"system": "FMA",
			"code": "55022"
		  },
		  {
			"system": "SNOMED",
			"code": "26140008"
		  },
		  {
			"system": "MESH",
			"code": "A14.549.617.780.729"
		  }
		]
	  },
	  {
		"radlexId": "RID7489",
		"description": "muscle of neck",
		"containedById": "RID7488",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0027532"
		  }
		]
	  },
	  {
		"radlexId": "RID7500",
		"description": "sternocleidomastoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7500_RID5824",
		"rightId": "RID7500_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13407"
		  },
		  {
			"system": "SNOMED",
			"code": "22823000"
		  }
		]
	  },
	  {
		"radlexId": "RID7500_RID5824",
		"description": "left sternocleidomastoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7500",
		"rightId": "RID7500_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7500_RID5825",
		"description": "right sternocleidomastoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7500",
		"leftId": "RID7500_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7519",
		"description": "sternohyoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7519_RID5824",
		"rightId": "RID7519_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13341"
		  },
		  {
			"system": "SNOMED",
			"code": "78752003"
		  }
		]
	  },
	  {
		"radlexId": "RID7519_RID5824",
		"description": "left sternohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7519",
		"rightId": "RID7519_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7519_RID5825",
		"description": "right sternohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7519",
		"leftId": "RID7519_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7520",
		"description": "omohyoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7520_RID5824",
		"rightId": "RID7520_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13342"
		  },
		  {
			"system": "SNOMED",
			"code": "25794004"
		  }
		]
	  },
	  {
		"radlexId": "RID7520_RID5824",
		"description": "left omohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7520",
		"rightId": "RID7520_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7520_RID5825",
		"description": "right omohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7520",
		"leftId": "RID7520_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7523",
		"description": "sternothyroid muscle",
		"containedById": "RID7488",
		"leftId": "RID7523_RID5824",
		"rightId": "RID7523_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13343"
		  },
		  {
			"system": "SNOMED",
			"code": "1087003"
		  }
		]
	  },
	  {
		"radlexId": "RID7523_RID5824",
		"description": "left sternothyroid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7523",
		"rightId": "RID7523_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7523_RID5825",
		"description": "right sternothyroid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7523",
		"leftId": "RID7523_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7524",
		"description": "thyrohyoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7524_RID5824",
		"rightId": "RID7524_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13353"
		  },
		  {
			"system": "SNOMED",
			"code": "113226007"
		  }
		]
	  },
	  {
		"radlexId": "RID7524_RID5824",
		"description": "left thyrohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7524",
		"rightId": "RID7524_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7524_RID5825",
		"description": "right thyrohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7524",
		"leftId": "RID7524_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7512",
		"description": "digastric muscle",
		"containedById": "RID7488",
		"leftId": "RID7512_RID5824",
		"rightId": "RID7512_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46291"
		  },
		  {
			"system": "SNOMED",
			"code": "52410001"
		  }
		]
	  },
	  {
		"radlexId": "RID7512_RID5824",
		"description": "left digastric muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7512",
		"rightId": "RID7512_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7512_RID5825",
		"description": "right digastric muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7512",
		"leftId": "RID7512_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7516",
		"description": "mylohyoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7516_RID5824",
		"rightId": "RID7516_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46320"
		  },
		  {
			"system": "SNOMED",
			"code": "15152006"
		  }
		]
	  },
	  {
		"radlexId": "RID7516_RID5824",
		"description": "left mylohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7516",
		"rightId": "RID7516_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7516_RID5825",
		"description": "right mylohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7516",
		"leftId": "RID7516_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7515",
		"description": "stylohyoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7515_RID5824",
		"rightId": "RID7515_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "9625"
		  },
		  {
			"system": "SNOMED",
			"code": "66145004"
		  }
		]
	  },
	  {
		"radlexId": "RID7515_RID5824",
		"description": "left stylohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7515",
		"rightId": "RID7515_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7515_RID5825",
		"description": "right stylohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7515",
		"leftId": "RID7515_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7517",
		"description": "geniohyoid muscle",
		"containedById": "RID7488",
		"leftId": "RID7517_RID5824",
		"rightId": "RID7517_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46325"
		  },
		  {
			"system": "SNOMED",
			"code": "40859007"
		  }
		]
	  },
	  {
		"radlexId": "RID7517_RID5824",
		"description": "left geniohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7517",
		"rightId": "RID7517_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7517_RID5825",
		"description": "right geniohyoid muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7517",
		"leftId": "RID7517_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7496",
		"description": "anterior scalene muscle",
		"containedById": "RID7488",
		"leftId": "RID7496_RID5824",
		"rightId": "RID7496_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13385"
		  },
		  {
			"system": "SNOMED",
			"code": "50755001"
		  }
		]
	  },
	  {
		"radlexId": "RID7496_RID5824",
		"description": "left anterior scalene muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7496",
		"rightId": "RID7496_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7496_RID5825",
		"description": "right anterior scalene muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7496",
		"leftId": "RID7496_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7497",
		"description": "middle scalene muscle",
		"containedById": "RID7488",
		"leftId": "RID7497_RID5824",
		"rightId": "RID7497_RID5825",
		"partOfId": "RID7489",
		"synonyms": [
		  "scalenus medius muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "13385"
		  },
		  {
			"system": "SNOMED",
			"code": "38630006"
		  }
		]
	  },
	  {
		"radlexId": "RID7497_RID5824",
		"description": "left middle scalene muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7497",
		"rightId": "RID7497_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7497_RID5825",
		"description": "right middle scalene muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7497",
		"leftId": "RID7497_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7498",
		"description": "posterior scalene muscle",
		"containedById": "RID7488",
		"leftId": "RID7498_RID5824",
		"rightId": "RID7498_RID5825",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13386"
		  },
		  {
			"system": "SNOMED",
			"code": "58162002"
		  }
		]
	  },
	  {
		"radlexId": "RID7498_RID5824",
		"description": "left posterior scalene muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7498",
		"rightId": "RID7498_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7498_RID5825",
		"description": "right posterior scalene muscle",
		"containedById": "RID7488",
		"unsidedId": "RID7498",
		"leftId": "RID7498_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID32236",
		"description": "rectus capitis anterior",
		"containedById": "RID7488",
		"leftId": "RID32238",
		"rightId": "RID32237",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus rectus capitis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46312"
		  },
		  {
			"system": "SNOMED",
			"code": "63528005"
		  }
		]
	  },
	  {
		"radlexId": "RID32237",
		"description": "right rectus capitis anterior",
		"containedById": "RID7488",
		"unsidedId": "RID32236",
		"leftId": "RID32238",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46313"
		  }
		]
	  },
	  {
		"radlexId": "RID32238",
		"description": "left rectus capitis anterior",
		"containedById": "RID7488",
		"unsidedId": "RID32236",
		"rightId": "RID32237",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46314"
		  }
		]
	  },
	  {
		"radlexId": "RID32311",
		"description": "rectus capitis posterior minor",
		"containedById": "RID7488",
		"leftId": "RID32313",
		"rightId": "RID32312",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus rectus capitis posterior minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32526"
		  },
		  {
			"system": "SNOMED",
			"code": "48598007"
		  }
		]
	  },
	  {
		"radlexId": "RID32312",
		"description": "right rectus capitis posterior minor",
		"containedById": "RID7488",
		"unsidedId": "RID32311",
		"leftId": "RID32313",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32532"
		  }
		]
	  },
	  {
		"radlexId": "RID32313",
		"description": "left rectus capitis posterior minor",
		"containedById": "RID7488",
		"unsidedId": "RID32311",
		"rightId": "RID32312",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32533"
		  }
		]
	  },
	  {
		"radlexId": "RID32308",
		"description": "rectus capitis posterior major",
		"containedById": "RID7488",
		"leftId": "RID32310",
		"rightId": "RID32309",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus rectus capitis posterior major"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32525"
		  },
		  {
			"system": "SNOMED",
			"code": "79201006"
		  }
		]
	  },
	  {
		"radlexId": "RID32309",
		"description": "right rectus capitis posterior major",
		"containedById": "RID7488",
		"unsidedId": "RID32308",
		"leftId": "RID32310",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32530"
		  }
		]
	  },
	  {
		"radlexId": "RID32310",
		"description": "left rectus capitis posterior major",
		"containedById": "RID7488",
		"unsidedId": "RID32308",
		"rightId": "RID32309",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32531"
		  }
		]
	  },
	  {
		"radlexId": "RID32239",
		"description": "rectus capitis lateralis",
		"containedById": "RID7488",
		"leftId": "RID32241",
		"rightId": "RID32240",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus rectus capitis lateralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46316"
		  },
		  {
			"system": "SNOMED",
			"code": "44544003"
		  }
		]
	  },
	  {
		"radlexId": "RID32240",
		"description": "right rectus capitis lateralis",
		"containedById": "RID7488",
		"unsidedId": "RID32239",
		"leftId": "RID32241",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46317"
		  }
		]
	  },
	  {
		"radlexId": "RID32241",
		"description": "left rectus capitis lateralis",
		"containedById": "RID7488",
		"unsidedId": "RID32239",
		"rightId": "RID32240",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46318"
		  }
		]
	  },
	  {
		"radlexId": "RID32314",
		"description": "obliquus capitis superior",
		"containedById": "RID7488",
		"leftId": "RID32316",
		"rightId": "RID32315",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus obliquus capitis superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32527"
		  },
		  {
			"system": "SNOMED",
			"code": "18141004"
		  }
		]
	  },
	  {
		"radlexId": "RID32315",
		"description": "right obliquus capitis superior",
		"containedById": "RID7488",
		"unsidedId": "RID32314",
		"leftId": "RID32316",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32534"
		  }
		]
	  },
	  {
		"radlexId": "RID32316",
		"description": "left obliquus capitis superior",
		"containedById": "RID7488",
		"unsidedId": "RID32314",
		"rightId": "RID32315",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32535"
		  }
		]
	  },
	  {
		"radlexId": "RID32317",
		"description": "obliquus capitis inferior",
		"containedById": "RID7488",
		"leftId": "RID32319",
		"rightId": "RID32318",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus obliquus capitis inferior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32528"
		  },
		  {
			"system": "SNOMED",
			"code": "245998004"
		  }
		]
	  },
	  {
		"radlexId": "RID32318",
		"description": "right obliquus capitis inferior",
		"containedById": "RID7488",
		"unsidedId": "RID32317",
		"leftId": "RID32319",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32536"
		  }
		]
	  },
	  {
		"radlexId": "RID32319",
		"description": "left obliquus capitis inferior",
		"containedById": "RID7488",
		"unsidedId": "RID32317",
		"rightId": "RID32318",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "32537"
		  }
		]
	  },
	  {
		"radlexId": "RID32274",
		"description": "longissimus capitis",
		"containedById": "RID7488",
		"leftId": "RID32276",
		"rightId": "RID32275",
		"partOfId": "RID7489",
		"synonyms": [
		  "trachelomastoid muscle",
		  "longissimus capitis muscle",
		  "musculus longissimus capitis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22714"
		  },
		  {
			"system": "SNOMED",
			"code": "61134003"
		  }
		]
	  },
	  {
		"radlexId": "RID32275",
		"description": "right longissimus capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32274",
		"leftId": "RID32276",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22754"
		  }
		]
	  },
	  {
		"radlexId": "RID32276",
		"description": "left longissimus capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32274",
		"rightId": "RID32275",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22756"
		  }
		]
	  },
	  {
		"radlexId": "RID32286",
		"description": "spinalis capitis",
		"containedById": "RID7488",
		"leftId": "RID32288",
		"rightId": "RID32287",
		"partOfId": "RID7489",
		"synonyms": [
		  "spinalis capitis muscle",
		  "musculus spinalis capitis",
		  "biventer cervicis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22775"
		  },
		  {
			"system": "SNOMED",
			"code": "50200003"
		  }
		]
	  },
	  {
		"radlexId": "RID32287",
		"description": "right spinalis capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32286",
		"leftId": "RID32288",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22783"
		  }
		]
	  },
	  {
		"radlexId": "RID32288",
		"description": "left spinalis capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32286",
		"rightId": "RID32287",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22784"
		  }
		]
	  },
	  {
		"radlexId": "RID32297",
		"description": "semispinalis capitis",
		"containedById": "RID7488",
		"leftId": "RID32299",
		"rightId": "RID32298",
		"partOfId": "RID7489",
		"synonyms": [
		  "complexus muscle",
		  "semispinalis capitis muscle",
		  "musculus semispinalis capitis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22830"
		  },
		  {
			"system": "SNOMED",
			"code": "2666009"
		  }
		]
	  },
	  {
		"radlexId": "RID32298",
		"description": "right semispinalis capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32297",
		"leftId": "RID32299",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22876"
		  }
		]
	  },
	  {
		"radlexId": "RID32299",
		"description": "left semispinalis capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32297",
		"rightId": "RID32298",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22877"
		  }
		]
	  },
	  {
		"radlexId": "RID32258",
		"description": "splenius capitis",
		"containedById": "RID7488",
		"leftId": "RID32260",
		"rightId": "RID32259",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus splenius capitis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22653"
		  },
		  {
			"system": "SNOMED",
			"code": "1600003"
		  }
		]
	  },
	  {
		"radlexId": "RID32259",
		"description": "right splenius capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32258",
		"leftId": "RID32260",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22728"
		  }
		]
	  },
	  {
		"radlexId": "RID32260",
		"description": "left splenius capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32258",
		"rightId": "RID32259",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22729"
		  }
		]
	  },
	  {
		"radlexId": "RID32255",
		"description": "splenius cervicis",
		"containedById": "RID7488",
		"leftId": "RID32257",
		"rightId": "RID32256",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus splenius cervicis",
		  "musculus splenius colli",
		  "splenius cervicis muscle",
		  "splenius colli muscle",
		  "musculus splenius colli"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22681"
		  },
		  {
			"system": "SNOMED",
			"code": "61046001"
		  }
		]
	  },
	  {
		"radlexId": "RID32256",
		"description": "right splenius cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32255",
		"leftId": "RID32257",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22726"
		  }
		]
	  },
	  {
		"radlexId": "RID32257",
		"description": "left splenius cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32255",
		"rightId": "RID32256",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22727"
		  }
		]
	  },
	  {
		"radlexId": "RID7504",
		"description": "levator scapulae muscle",
		"containedById": "RID7488",
		"leftId": "RID43051",
		"rightId": "RID43050",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus levator scapulae",
		  "musculus levator scapulae"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32519"
		  },
		  {
			"system": "SNOMED",
			"code": "11327007"
		  }
		]
	  },
	  {
		"radlexId": "RID43050",
		"description": "right levator scapulae",
		"containedById": "RID7488",
		"unsidedId": "RID7504",
		"leftId": "RID43051",
		"partOfId": "RID7489",
		"synonyms": [
		  "right levator scapulae muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32540"
		  }
		]
	  },
	  {
		"radlexId": "RID43051",
		"description": "left levator scapulae",
		"containedById": "RID7488",
		"unsidedId": "RID7504",
		"rightId": "RID43050",
		"partOfId": "RID7489",
		"synonyms": [
		  "left levator scapulae muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "32541"
		  }
		]
	  },
	  {
		"radlexId": "RID32245",
		"description": "longus capitis",
		"containedById": "RID7488",
		"leftId": "RID32247",
		"rightId": "RID32246",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus longus capitis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46308"
		  },
		  {
			"system": "SNOMED",
			"code": "35752005"
		  }
		]
	  },
	  {
		"radlexId": "RID32246",
		"description": "right longus capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32245",
		"leftId": "RID32247",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46309"
		  }
		]
	  },
	  {
		"radlexId": "RID32247",
		"description": "left longus capitis",
		"containedById": "RID7488",
		"unsidedId": "RID32245",
		"rightId": "RID32246",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "46310"
		  }
		]
	  },
	  {
		"radlexId": "RID32242",
		"description": "longus colli",
		"containedById": "RID7488",
		"leftId": "RID32244",
		"rightId": "RID32243",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13370"
		  },
		  {
			"system": "SNOMED",
			"code": "22756007"
		  }
		]
	  },
	  {
		"radlexId": "RID32243",
		"description": "right longus colli",
		"containedById": "RID7488",
		"unsidedId": "RID32242",
		"leftId": "RID32244",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13371"
		  }
		]
	  },
	  {
		"radlexId": "RID32244",
		"description": "left longus colli",
		"containedById": "RID7488",
		"unsidedId": "RID32242",
		"rightId": "RID32243",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "13372"
		  }
		]
	  },
	  {
		"radlexId": "RID32277",
		"description": "longissimus cervicis",
		"containedById": "RID7488",
		"leftId": "RID32279",
		"rightId": "RID32278",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus longissimus colli",
		  "longissimus cervicis muscle",
		  "musculus longissimus cervicis",
		  "transversalis cervicis muscle",
		  "musculus longissimus cervicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22711"
		  },
		  {
			"system": "SNOMED",
			"code": "50059002"
		  }
		]
	  },
	  {
		"radlexId": "RID32278",
		"description": "right longissimus cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32277",
		"leftId": "RID32279",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22757"
		  }
		]
	  },
	  {
		"radlexId": "RID32279",
		"description": "left longissimus cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32277",
		"rightId": "RID32278",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22758"
		  }
		]
	  },
	  {
		"radlexId": "RID32262",
		"description": "iliocostalis cervicis",
		"containedById": "RID7488",
		"leftId": "RID32264",
		"rightId": "RID32263",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus iliocostalis cervicis",
		  "musculus iliocostalis colli",
		  "iliocostalis cervicis muscle",
		  "cervicalis ascendens muscle",
		  "musculus iliocostalis colli"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22704"
		  },
		  {
			"system": "SNOMED",
			"code": "82631003"
		  }
		]
	  },
	  {
		"radlexId": "RID32263",
		"description": "right iliocostalis cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32262",
		"leftId": "RID32264",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22744"
		  }
		]
	  },
	  {
		"radlexId": "RID32264",
		"description": "left iliocostalis cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32262",
		"rightId": "RID32263",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22745"
		  }
		]
	  },
	  {
		"radlexId": "RID7815",
		"description": "spinalis cervicis",
		"containedById": "RID7488",
		"leftId": "RID7815_RID5824",
		"rightId": "RID7815_RID5825",
		"partOfId": "RID7489",
		"synonyms": [
		  "spinalis colli muscle",
		  "spinalis cervicis muscle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22770"
		  },
		  {
			"system": "SNOMED",
			"code": "90411004"
		  }
		]
	  },
	  {
		"radlexId": "RID7815_RID5824",
		"description": "left spinalis cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID7815",
		"rightId": "RID7815_RID5825",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID7815_RID5825",
		"description": "right spinalis cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID7815",
		"leftId": "RID7815_RID5824",
		"partOfId": "RID7489"
	  },
	  {
		"radlexId": "RID32294",
		"description": "semispinalis cervicis",
		"containedById": "RID7488",
		"leftId": "RID32296",
		"rightId": "RID32295",
		"partOfId": "RID7489",
		"synonyms": [
		  "musculus semispinalis colli",
		  "semispinalis cervicis muscle",
		  "musculus semispinalis cervicis",
		  "semispinalis colli muscle",
		  "musculus semispinalis cervicis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "22829"
		  },
		  {
			"system": "SNOMED",
			"code": "44222009"
		  }
		]
	  },
	  {
		"radlexId": "RID32295",
		"description": "right semispinalis cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32294",
		"leftId": "RID32296",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22874"
		  }
		]
	  },
	  {
		"radlexId": "RID32296",
		"description": "left semispinalis cervicis",
		"containedById": "RID7488",
		"unsidedId": "RID32294",
		"rightId": "RID32295",
		"partOfId": "RID7489",
		"codes": [
		  {
			"system": "FMA",
			"code": "22875"
		  }
		]
	  },
	  {
		"radlexId": "RID7649",
		"description": "oblique arytenoid muscle",
		"containedById": "RID7589",
		"leftId": "RID7649_RID5824",
		"rightId": "RID7649_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46583"
		  },
		  {
			"system": "SNOMED",
			"code": "89527001"
		  }
		]
	  },
	  {
		"radlexId": "RID7649_RID5824",
		"description": "left oblique arytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7649",
		"rightId": "RID7649_RID5825"
	  },
	  {
		"radlexId": "RID7649_RID5825",
		"description": "right oblique arytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7649",
		"leftId": "RID7649_RID5824"
	  },
	  {
		"radlexId": "RID7651",
		"description": "transverse arytenoid muscle",
		"containedById": "RID7589",
		"leftId": "RID7651_RID5824",
		"rightId": "RID7651_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46582"
		  },
		  {
			"system": "SNOMED",
			"code": "9891007"
		  }
		]
	  },
	  {
		"radlexId": "RID7651_RID5824",
		"description": "left transverse arytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7651",
		"rightId": "RID7651_RID5825"
	  },
	  {
		"radlexId": "RID7651_RID5825",
		"description": "right transverse arytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7651",
		"leftId": "RID7651_RID5824"
	  },
	  {
		"radlexId": "RID7643",
		"description": "posterior cricoarytenoid muscle",
		"containedById": "RID7589",
		"leftId": "RID7643_RID5824",
		"rightId": "RID7643_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46576"
		  },
		  {
			"system": "SNOMED",
			"code": "10634008"
		  }
		]
	  },
	  {
		"radlexId": "RID7643_RID5824",
		"description": "left posterior cricoarytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7643",
		"rightId": "RID7643_RID5825"
	  },
	  {
		"radlexId": "RID7643_RID5825",
		"description": "right posterior cricoarytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7643",
		"leftId": "RID7643_RID5824"
	  },
	  {
		"radlexId": "RID7645",
		"description": "lateral cricoarytenoid muscle",
		"containedById": "RID7589",
		"leftId": "RID7645_RID5824",
		"rightId": "RID7645_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46579"
		  },
		  {
			"system": "SNOMED",
			"code": "14253003"
		  }
		]
	  },
	  {
		"radlexId": "RID7645_RID5824",
		"description": "left lateral cricoarytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7645",
		"rightId": "RID7645_RID5825"
	  },
	  {
		"radlexId": "RID7645_RID5825",
		"description": "right lateral cricoarytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7645",
		"leftId": "RID7645_RID5824"
	  },
	  {
		"radlexId": "RID7647",
		"description": "thyroarytenoid muscle",
		"containedById": "RID7589",
		"leftId": "RID7647_RID5824",
		"rightId": "RID7647_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46588"
		  },
		  {
			"system": "SNOMED",
			"code": "77908003"
		  }
		]
	  },
	  {
		"radlexId": "RID7647_RID5824",
		"description": "left thyroarytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7647",
		"rightId": "RID7647_RID5825"
	  },
	  {
		"radlexId": "RID7647_RID5825",
		"description": "right thyroarytenoid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7647",
		"leftId": "RID7647_RID5824"
	  },
	  {
		"radlexId": "RID7640",
		"description": "cricothyroid muscle",
		"containedById": "RID7589",
		"leftId": "RID7640_RID5824",
		"rightId": "RID7640_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46417"
		  },
		  {
			"system": "SNOMED",
			"code": "19468002"
		  }
		]
	  },
	  {
		"radlexId": "RID7640_RID5824",
		"description": "left cricothyroid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7640",
		"rightId": "RID7640_RID5825"
	  },
	  {
		"radlexId": "RID7640_RID5825",
		"description": "right cricothyroid muscle",
		"containedById": "RID7589",
		"unsidedId": "RID7640",
		"leftId": "RID7640_RID5824"
	  },
	  {
		"radlexId": "RID7657",
		"description": "epiglottis",
		"containedById": "RID13211",
		"codes": [
		  {
			"system": "FMA",
			"code": "55130"
		  },
		  {
			"system": "SNOMED",
			"code": "61563008"
		  },
		  {
			"system": "MESH",
			"code": "A02.165.257.625.411"
		  }
		]
	  },
	  {
		"radlexId": "RID7601",
		"description": "cricoid cartilage",
		"containedById": "RID7589",
		"codes": [
		  {
			"system": "FMA",
			"code": "9615"
		  },
		  {
			"system": "SNOMED",
			"code": "8600008"
		  },
		  {
			"system": "MESH",
			"code": "A02.165.257.625.211"
		  }
		]
	  },
	  {
		"radlexId": "RID7590",
		"description": "thyroid cartilage",
		"containedById": "RID7589",
		"codes": [
		  {
			"system": "FMA",
			"code": "55099"
		  },
		  {
			"system": "SNOMED",
			"code": "52940008"
		  },
		  {
			"system": "MESH",
			"code": "A02.165.257.625.870"
		  },
		  {
			"system": "UMLS",
			"code": "C0040126"
		  }
		]
	  },
	  {
		"radlexId": "RID7606",
		"description": "arytenoid cartilage",
		"containedById": "RID7589",
		"codes": [
		  {
			"system": "FMA",
			"code": "55109"
		  },
		  {
			"system": "SNOMED",
			"code": "77578007"
		  },
		  {
			"system": "MESH",
			"code": "A02.165.257.625.083"
		  }
		]
	  },
	  {
		"radlexId": "RID7619",
		"description": "corniculate cartilage",
		"containedById": "RID7589",
		"codes": [
		  {
			"system": "FMA",
			"code": "55110"
		  },
		  {
			"system": "SNOMED",
			"code": "74241000"
		  }
		]
	  },
	  {
		"radlexId": "RID7621",
		"description": "cuneiform cartilage",
		"containedById": "RID7589",
		"codes": [
		  {
			"system": "FMA",
			"code": "55111"
		  },
		  {
			"system": "SNOMED",
			"code": "35779009"
		  }
		]
	  },
	  {
		"radlexId": "RID7563",
		"description": "salpingopharyngeus muscle",
		"containedById": "RID13211",
		"leftId": "RID7563_RID5824",
		"rightId": "RID7563_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46665"
		  },
		  {
			"system": "SNOMED",
			"code": "57021008"
		  }
		]
	  },
	  {
		"radlexId": "RID7563_RID5824",
		"description": "left salpingopharyngeus muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7563",
		"rightId": "RID7563_RID5825"
	  },
	  {
		"radlexId": "RID7563_RID5825",
		"description": "right salpingopharyngeus muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7563",
		"leftId": "RID7563_RID5824"
	  },
	  {
		"radlexId": "RID7548",
		"description": "superior constrictor muscle",
		"containedById": "RID13211",
		"leftId": "RID7548_RID5824",
		"rightId": "RID7548_RID5825",
		"synonyms": [
		  "superior pharyngeal constrictor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46621"
		  },
		  {
			"system": "SNOMED",
			"code": "82182001"
		  }
		]
	  },
	  {
		"radlexId": "RID7548_RID5824",
		"description": "left superior constrictor muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7548",
		"rightId": "RID7548_RID5825"
	  },
	  {
		"radlexId": "RID7548_RID5825",
		"description": "right superior constrictor muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7548",
		"leftId": "RID7548_RID5824"
	  },
	  {
		"radlexId": "RID7553",
		"description": "middle constrictor muscle",
		"containedById": "RID13211",
		"leftId": "RID7553_RID5824",
		"rightId": "RID7553_RID5825",
		"synonyms": [
		  "middle pharyngeal constrictor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46622"
		  },
		  {
			"system": "SNOMED",
			"code": "66138004"
		  }
		]
	  },
	  {
		"radlexId": "RID7553_RID5824",
		"description": "left middle constrictor muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7553",
		"rightId": "RID7553_RID5825"
	  },
	  {
		"radlexId": "RID7553_RID5825",
		"description": "right middle constrictor muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7553",
		"leftId": "RID7553_RID5824"
	  },
	  {
		"radlexId": "RID7560",
		"description": "palatopharyngeus muscle",
		"containedById": "RID13211",
		"leftId": "RID7560_RID5824",
		"rightId": "RID7560_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46666"
		  },
		  {
			"system": "SNOMED",
			"code": "24211000"
		  }
		]
	  },
	  {
		"radlexId": "RID7560_RID5824",
		"description": "left palatopharyngeus muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7560",
		"rightId": "RID7560_RID5825"
	  },
	  {
		"radlexId": "RID7560_RID5825",
		"description": "right palatopharyngeus muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7560",
		"leftId": "RID7560_RID5824"
	  },
	  {
		"radlexId": "RID7556",
		"description": "inferior constrictor muscle",
		"containedById": "RID13211",
		"leftId": "RID7556_RID5824",
		"rightId": "RID7556_RID5825",
		"synonyms": [
		  "inferior pharyngeal constrictor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "46623"
		  },
		  {
			"system": "SNOMED",
			"code": "80461005"
		  }
		]
	  },
	  {
		"radlexId": "RID7556_RID5824",
		"description": "left inferior constrictor muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7556",
		"rightId": "RID7556_RID5825"
	  },
	  {
		"radlexId": "RID7556_RID5825",
		"description": "right inferior constrictor muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7556",
		"leftId": "RID7556_RID5824"
	  },
	  {
		"radlexId": "RID7559",
		"description": "stylopharyngeus muscle",
		"containedById": "RID13211",
		"leftId": "RID7559_RID5824",
		"rightId": "RID7559_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46664"
		  },
		  {
			"system": "SNOMED",
			"code": "30305004"
		  }
		]
	  },
	  {
		"radlexId": "RID7559_RID5824",
		"description": "left stylopharyngeus muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7559",
		"rightId": "RID7559_RID5825"
	  },
	  {
		"radlexId": "RID7559_RID5825",
		"description": "right stylopharyngeus muscle",
		"containedById": "RID13211",
		"unsidedId": "RID7559",
		"leftId": "RID7559_RID5824"
	  },
	  {
		"radlexId": "RID1516",
		"description": "supraclavicular lymph node",
		"containedById": "RID7488",
		"leftId": "RID1516_RID5824",
		"rightId": "RID1516_RID5825",
		"partOfId": "RID28847",
		"codes": [
		  {
			"system": "FMA",
			"code": "14192"
		  },
		  {
			"system": "SNOMED",
			"code": "76838003"
		  },
		  {
			"system": "UMLS",
			"code": "C0229730"
		  }
		]
	  },
	  {
		"radlexId": "RID1516_RID5824",
		"description": "left supraclavicular lymph node",
		"containedById": "RID7488",
		"unsidedId": "RID1516",
		"rightId": "RID1516_RID5825",
		"partOfId": "RID28847"
	  },
	  {
		"radlexId": "RID1516_RID5825",
		"description": "right supraclavicular lymph node",
		"containedById": "RID7488",
		"unsidedId": "RID1516",
		"leftId": "RID1516_RID5824",
		"partOfId": "RID28847"
	  },
	  {
		"radlexId": "RID9993",
		"description": "pharyngeal tonsil",
		"containedById": "RID13211",
		"leftId": "RID9993_RID5824",
		"rightId": "RID9993_RID5825",
		"synonyms": [
		  "nasopharyngeal tonsil",
		  "adenoid"
		]
	  },
	  {
		"radlexId": "RID9993_RID5824",
		"description": "left pharyngeal tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID9993",
		"rightId": "RID9993_RID5825"
	  },
	  {
		"radlexId": "RID9993_RID5825",
		"description": "right pharyngeal tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID9993",
		"leftId": "RID9993_RID5824"
	  },
	  {
		"radlexId": "RID10010",
		"description": "palatine tonsil",
		"containedById": "RID13211",
		"leftId": "RID10010_RID5824",
		"rightId": "RID10010_RID5825"
	  },
	  {
		"radlexId": "RID10010_RID5824",
		"description": "left palatine tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID10010",
		"rightId": "RID10010_RID5825"
	  },
	  {
		"radlexId": "RID10010_RID5825",
		"description": "right palatine tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID10010",
		"leftId": "RID10010_RID5824"
	  },
	  {
		"radlexId": "RID9998",
		"description": "tubal tonsil",
		"containedById": "RID13211",
		"leftId": "RID9998_RID5824",
		"rightId": "RID9998_RID5825",
		"synonyms": [
		  "auditory tube lymph gland",
		  "Eustachian amygdala"
		]
	  },
	  {
		"radlexId": "RID9998_RID5824",
		"description": "left tubal tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID9998",
		"rightId": "RID9998_RID5825"
	  },
	  {
		"radlexId": "RID9998_RID5825",
		"description": "right tubal tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID9998",
		"leftId": "RID9998_RID5824"
	  },
	  {
		"radlexId": "RID10008",
		"description": "lingual tonsil",
		"containedById": "RID13211",
		"leftId": "RID10008_RID5824",
		"rightId": "RID10008_RID5825"
	  },
	  {
		"radlexId": "RID10008_RID5824",
		"description": "left lingual tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID10008",
		"rightId": "RID10008_RID5825"
	  },
	  {
		"radlexId": "RID10008_RID5825",
		"description": "right lingual tonsil",
		"containedById": "RID13211",
		"unsidedId": "RID10008",
		"leftId": "RID10008_RID5824"
	  },
	  {
		"radlexId": "RID13284",
		"description": "face",
		"containedById": "RID9080"
	  },
	  {
		"radlexId": "RID9573",
		"description": "orbit",
		"containedById": "RID13284",
		"leftId": "RID9573_RID5824",
		"rightId": "RID9573_RID5825"
	  },
	  {
		"radlexId": "RID9573_RID5824",
		"description": "left orbit",
		"containedById": "RID13284",
		"unsidedId": "RID9573",
		"rightId": "RID9573_RID5825"
	  },
	  {
		"radlexId": "RID9573_RID5825",
		"description": "right orbit",
		"containedById": "RID13284",
		"unsidedId": "RID9573",
		"leftId": "RID9573_RID5824"
	  },
	  {
		"radlexId": "RID9592",
		"description": "globe",
		"containedById": "RID9573",
		"leftId": "RID9592_RID5824",
		"rightId": "RID9592_RID5825",
		"synonyms": [
		  "eyeball l intraocular"
		]
	  },
	  {
		"radlexId": "RID9592_RID5824",
		"description": "left globe",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9592",
		"rightId": "RID9592_RID5825"
	  },
	  {
		"radlexId": "RID9592_RID5825",
		"description": "right globe",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9592",
		"leftId": "RID9592_RID5824"
	  },
	  {
		"radlexId": "RID9725",
		"description": "intraconal space of orbit",
		"containedById": "RID9573",
		"leftId": "RID9725_RID5824",
		"rightId": "RID9725_RID5825"
	  },
	  {
		"radlexId": "RID9725_RID5824",
		"description": "left intraconal space of orbit",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9725",
		"rightId": "RID9725_RID5825"
	  },
	  {
		"radlexId": "RID9725_RID5825",
		"description": "right intraconal space of orbit",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9725",
		"leftId": "RID9725_RID5824"
	  },
	  {
		"radlexId": "RID9726",
		"description": "extraconal space of orbit",
		"containedById": "RID9573",
		"leftId": "RID9726_RID5824",
		"rightId": "RID9726_RID5825"
	  },
	  {
		"radlexId": "RID9726_RID5824",
		"description": "left extraconal space of orbit",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9726",
		"rightId": "RID9726_RID5825"
	  },
	  {
		"radlexId": "RID9726_RID5825",
		"description": "right extraconal space of orbit",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9726",
		"leftId": "RID9726_RID5824"
	  },
	  {
		"radlexId": "RID9675",
		"description": "anterior chamber of globe",
		"containedById": "RID9592",
		"leftId": "RID9675_RID5824",
		"rightId": "RID9675_RID5825",
		"synonyms": [
		  "anterior chamber of eyeball"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "58078"
		  },
		  {
			"system": "SNOMED",
			"code": "31636006"
		  },
		  {
			"system": "UMLS",
			"code": "C0003151"
		  }
		]
	  },
	  {
		"radlexId": "RID9675_RID5824",
		"description": "left anterior chamber of globe",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9675",
		"rightId": "RID9675_RID5825"
	  },
	  {
		"radlexId": "RID9675_RID5825",
		"description": "right anterior chamber of globe",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9675",
		"leftId": "RID9675_RID5824"
	  },
	  {
		"radlexId": "RID9678",
		"description": "posterior chamber of globe",
		"containedById": "RID9592",
		"leftId": "RID9678_RID5824",
		"rightId": "RID9678_RID5825",
		"synonyms": [
		  "vitreous chamber",
		  "posterior chamber of eyeball"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "58080"
		  },
		  {
			"system": "SNOMED",
			"code": "65643003"
		  }
		]
	  },
	  {
		"radlexId": "RID9678_RID5824",
		"description": "left posterior chamber of globe",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9678",
		"rightId": "RID9678_RID5825"
	  },
	  {
		"radlexId": "RID9678_RID5825",
		"description": "right posterior chamber of globe",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9678",
		"leftId": "RID9678_RID5824"
	  },
	  {
		"radlexId": "RID9606",
		"description": "cornea",
		"containedById": "RID9592",
		"leftId": "RID9606_RID5824",
		"rightId": "RID9606_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58238"
		  },
		  {
			"system": "SNOMED",
			"code": "28726007"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.060.217"
		  },
		  {
			"system": "UMLS",
			"code": "C0010031"
		  }
		]
	  },
	  {
		"radlexId": "RID9606_RID5824",
		"description": "left cornea",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9606",
		"rightId": "RID9606_RID5825"
	  },
	  {
		"radlexId": "RID9606_RID5825",
		"description": "right cornea",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9606",
		"leftId": "RID9606_RID5824"
	  },
	  {
		"radlexId": "RID9688",
		"description": "lens",
		"containedById": "RID9592",
		"leftId": "RID9688_RID5824",
		"rightId": "RID9688_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58241"
		  },
		  {
			"system": "SNOMED",
			"code": "78076003"
		  },
		  {
			"system": "UMLS",
			"code": "C0023317"
		  }
		]
	  },
	  {
		"radlexId": "RID9688_RID5824",
		"description": "left lens",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9688",
		"rightId": "RID9688_RID5825"
	  },
	  {
		"radlexId": "RID9688_RID5825",
		"description": "right lens",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9688",
		"leftId": "RID9688_RID5824"
	  },
	  {
		"radlexId": "RID9635",
		"description": "iris",
		"containedById": "RID9592",
		"leftId": "RID9635_RID5824",
		"rightId": "RID9635_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58235"
		  },
		  {
			"system": "SNOMED",
			"code": "41296002"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.060.450"
		  },
		  {
			"system": "UMLS",
			"code": "C0022077"
		  }
		]
	  },
	  {
		"radlexId": "RID9635_RID5824",
		"description": "left iris",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9635",
		"rightId": "RID9635_RID5825"
	  },
	  {
		"radlexId": "RID9635_RID5825",
		"description": "right iris",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9635",
		"leftId": "RID9635_RID5824"
	  },
	  {
		"radlexId": "RID9682",
		"description": "vitreous body",
		"containedById": "RID9592",
		"leftId": "RID9682_RID5824",
		"rightId": "RID9682_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58827"
		  },
		  {
			"system": "SNOMED",
			"code": "47538007"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.714.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0042905"
		  }
		]
	  },
	  {
		"radlexId": "RID9682_RID5824",
		"description": "left vitreous body",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9682",
		"rightId": "RID9682_RID5825"
	  },
	  {
		"radlexId": "RID9682_RID5825",
		"description": "right vitreous body",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9682",
		"leftId": "RID9682_RID5824"
	  },
	  {
		"radlexId": "RID9651",
		"description": "retina",
		"containedById": "RID9592",
		"leftId": "RID9651_RID5824",
		"rightId": "RID9651_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58301"
		  },
		  {
			"system": "SNOMED",
			"code": "5665001"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.729"
		  },
		  {
			"system": "UMLS",
			"code": "C0035298"
		  }
		]
	  },
	  {
		"radlexId": "RID9651_RID5824",
		"description": "left retina",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9651",
		"rightId": "RID9651_RID5825"
	  },
	  {
		"radlexId": "RID9651_RID5825",
		"description": "right retina",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9651",
		"leftId": "RID9651_RID5824"
	  },
	  {
		"radlexId": "RID9594",
		"description": "sclera",
		"containedById": "RID9592",
		"leftId": "RID9594_RID5824",
		"rightId": "RID9594_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58269"
		  },
		  {
			"system": "SNOMED",
			"code": "18619003"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.784"
		  },
		  {
			"system": "UMLS",
			"code": "C0036410"
		  }
		]
	  },
	  {
		"radlexId": "RID9594_RID5824",
		"description": "left sclera",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9594",
		"rightId": "RID9594_RID5825"
	  },
	  {
		"radlexId": "RID9594_RID5825",
		"description": "right sclera",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9594",
		"leftId": "RID9594_RID5824"
	  },
	  {
		"radlexId": "RID9624",
		"description": "ciliary body",
		"containedById": "RID9592",
		"leftId": "RID9624_RID5824",
		"rightId": "RID9624_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "58295"
		  },
		  {
			"system": "SNOMED",
			"code": "29534007"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.060.160"
		  },
		  {
			"system": "UMLS",
			"code": "C0008779"
		  }
		]
	  },
	  {
		"radlexId": "RID9624_RID5824",
		"description": "left ciliary body",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9624",
		"rightId": "RID9624_RID5825"
	  },
	  {
		"radlexId": "RID9624_RID5825",
		"description": "right ciliary body",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9624",
		"leftId": "RID9624_RID5824"
	  },
	  {
		"radlexId": "RID9617",
		"description": "choroid of globe",
		"containedById": "RID9592",
		"leftId": "RID9617_RID5824",
		"rightId": "RID9617_RID5825",
		"synonyms": [
		  "choroid"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "58298"
		  },
		  {
			"system": "SNOMED",
			"code": "68703001"
		  }
		]
	  },
	  {
		"radlexId": "RID9617_RID5824",
		"description": "left choroid of globe",
		"containedById": "RID9592_RID5824",
		"unsidedId": "RID9617",
		"rightId": "RID9617_RID5825"
	  },
	  {
		"radlexId": "RID9617_RID5825",
		"description": "right choroid of globe",
		"containedById": "RID9592_RID5825",
		"unsidedId": "RID9617",
		"leftId": "RID9617_RID5824"
	  },
	  {
		"radlexId": "RID9761",
		"description": "lacrimal gland",
		"containedById": "RID9726",
		"leftId": "RID39009",
		"rightId": "RID39008",
		"synonyms": [
		  "glandula lacrimalis",
		  "glandula lacrimalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "59101"
		  },
		  {
			"system": "SNOMED",
			"code": "13561001"
		  },
		  {
			"system": "MESH",
			"code": "A09.371.463"
		  }
		]
	  },
	  {
		"radlexId": "RID39008",
		"description": "right lacrimal gland",
		"containedById": "RID9726_RID5825",
		"unsidedId": "RID9761",
		"leftId": "RID39009",
		"codes": [
		  {
			"system": "FMA",
			"code": "59102"
		  },
		  {
			"system": "SNOMED",
			"code": "18855009"
		  }
		]
	  },
	  {
		"radlexId": "RID39009",
		"description": "left lacrimal gland",
		"containedById": "RID9726_RID5824",
		"unsidedId": "RID9761",
		"rightId": "RID39008",
		"codes": [
		  {
			"system": "FMA",
			"code": "59103"
		  },
		  {
			"system": "SNOMED",
			"code": "80984007"
		  }
		]
	  },
	  {
		"radlexId": "RID10053",
		"description": "ear",
		"containedById": "RID9361",
		"leftId": "RID10053_RID5824",
		"rightId": "RID10053_RID5825"
	  },
	  {
		"radlexId": "RID10053_RID5824",
		"description": "left ear",
		"containedById": "RID9361_RID5824",
		"unsidedId": "RID10053",
		"rightId": "RID10053_RID5825"
	  },
	  {
		"radlexId": "RID10053_RID5825",
		"description": "right ear",
		"containedById": "RID9361_RID5825",
		"unsidedId": "RID10053",
		"leftId": "RID10053_RID5824"
	  },
	  {
		"radlexId": "RID10054",
		"description": "external ear",
		"containedById": "RID10053",
		"leftId": "RID10054_RID5824",
		"rightId": "RID10054_RID5825",
		"synonyms": [
		  "outer ear"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52781"
		  },
		  {
			"system": "SNOMED",
			"code": "28347008"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.272"
		  },
		  {
			"system": "UMLS",
			"code": "C0013453"
		  }
		]
	  },
	  {
		"radlexId": "RID10054_RID5824",
		"description": "left external ear",
		"containedById": "RID10053_RID5824",
		"unsidedId": "RID10054",
		"rightId": "RID10054_RID5825"
	  },
	  {
		"radlexId": "RID10054_RID5825",
		"description": "right external ear",
		"containedById": "RID10053_RID5825",
		"unsidedId": "RID10054",
		"leftId": "RID10054_RID5824"
	  },
	  {
		"radlexId": "RID13303",
		"description": "middle ear",
		"containedById": "RID10053",
		"leftId": "RID13303_RID5824",
		"rightId": "RID13303_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "56513"
		  },
		  {
			"system": "SNOMED",
			"code": "25342003"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.397"
		  }
		]
	  },
	  {
		"radlexId": "RID13303_RID5824",
		"description": "left middle ear",
		"containedById": "RID10053_RID5824",
		"unsidedId": "RID13303",
		"rightId": "RID13303_RID5825"
	  },
	  {
		"radlexId": "RID13303_RID5825",
		"description": "right middle ear",
		"containedById": "RID10053_RID5825",
		"unsidedId": "RID13303",
		"leftId": "RID13303_RID5824"
	  },
	  {
		"radlexId": "RID10199",
		"description": "inner ear",
		"containedById": "RID10053",
		"leftId": "RID10199_RID5824",
		"rightId": "RID10199_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "60909"
		  },
		  {
			"system": "SNOMED",
			"code": "22945000"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.300"
		  },
		  {
			"system": "UMLS",
			"code": "C0022889"
		  }
		]
	  },
	  {
		"radlexId": "RID10199_RID5824",
		"description": "left inner ear",
		"containedById": "RID10053_RID5824",
		"unsidedId": "RID10199",
		"rightId": "RID10199_RID5825"
	  },
	  {
		"radlexId": "RID10199_RID5825",
		"description": "right inner ear",
		"containedById": "RID10053_RID5825",
		"unsidedId": "RID10199",
		"leftId": "RID10199_RID5824"
	  },
	  {
		"radlexId": "RID10094",
		"description": "external auditory canal",
		"containedById": "RID10054",
		"leftId": "RID10094_RID5824",
		"rightId": "RID10094_RID5825",
		"synonyms": [
		  "external auditory meatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61734"
		  },
		  {
			"system": "SNOMED",
			"code": "84301002"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.272.396"
		  }
		]
	  },
	  {
		"radlexId": "RID10094_RID5824",
		"description": "left external auditory canal",
		"containedById": "RID10054_RID5824",
		"unsidedId": "RID10094",
		"rightId": "RID10094_RID5825"
	  },
	  {
		"radlexId": "RID10094_RID5825",
		"description": "right external auditory canal",
		"containedById": "RID10054_RID5825",
		"unsidedId": "RID10094",
		"leftId": "RID10094_RID5824"
	  },
	  {
		"radlexId": "RID10100",
		"description": "tympanic membrane",
		"containedById": "RID10054",
		"leftId": "RID10100_RID5824",
		"rightId": "RID10100_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "9595"
		  },
		  {
			"system": "SNOMED",
			"code": "42859004"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.272.702"
		  },
		  {
			"system": "UMLS",
			"code": "C0041445"
		  }
		]
	  },
	  {
		"radlexId": "RID10100_RID5824",
		"description": "left tympanic membrane",
		"containedById": "RID10054_RID5824",
		"unsidedId": "RID10100",
		"rightId": "RID10100_RID5825"
	  },
	  {
		"radlexId": "RID10100_RID5825",
		"description": "right tympanic membrane",
		"containedById": "RID10054_RID5825",
		"unsidedId": "RID10100",
		"leftId": "RID10100_RID5824"
	  },
	  {
		"radlexId": "RID10109",
		"description": "middle ear cavity",
		"containedById": "RID13303",
		"leftId": "RID10109_RID5824",
		"rightId": "RID10109_RID5825",
		"synonyms": [
		  "tympanic cavity"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "56461"
		  },
		  {
			"system": "SNOMED",
			"code": "51837005"
		  }
		]
	  },
	  {
		"radlexId": "RID10109_RID5824",
		"description": "left middle ear cavity",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10109",
		"rightId": "RID10109_RID5825"
	  },
	  {
		"radlexId": "RID10109_RID5825",
		"description": "right middle ear cavity",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10109",
		"leftId": "RID10109_RID5824"
	  },
	  {
		"radlexId": "RID9419",
		"description": "eustachian tube",
		"containedById": "RID9080",
		"leftId": "RID9419_RID5824",
		"rightId": "RID9419_RID5825",
		"synonyms": [
		  "pharyngotympanic tube"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9705"
		  },
		  {
			"system": "SNOMED",
			"code": "91207004"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.397.369"
		  }
		]
	  },
	  {
		"radlexId": "RID9419_RID5824",
		"description": "left eustachian tube",
		"containedById": "RID9080",
		"unsidedId": "RID9419",
		"rightId": "RID9419_RID5825"
	  },
	  {
		"radlexId": "RID9419_RID5825",
		"description": "right eustachian tube",
		"containedById": "RID9080",
		"unsidedId": "RID9419",
		"leftId": "RID9419_RID5824"
	  },
	  {
		"radlexId": "RID10223",
		"description": "cochlea",
		"containedById": "RID10199",
		"leftId": "RID10223_RID5824",
		"rightId": "RID10223_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "60201"
		  },
		  {
			"system": "SNOMED",
			"code": "80169004"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.300.246"
		  },
		  {
			"system": "UMLS",
			"code": "C0009195"
		  }
		]
	  },
	  {
		"radlexId": "RID10223_RID5824",
		"description": "left cochlea",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID10223",
		"rightId": "RID10223_RID5825"
	  },
	  {
		"radlexId": "RID10223_RID5825",
		"description": "right cochlea",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID10223",
		"leftId": "RID10223_RID5824"
	  },
	  {
		"radlexId": "RID9392",
		"description": "internal auditory canal",
		"containedById": "RID10199",
		"leftId": "RID9392_RID5824",
		"rightId": "RID9392_RID5825",
		"synonyms": [
		  "iac",
		  "internal acoustic meatus",
		  "internal acoustic canal",
		  "Canalis acusticus internus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "53163"
		  },
		  {
			"system": "SNOMED",
			"code": "61671002"
		  }
		]
	  },
	  {
		"radlexId": "RID9392_RID5824",
		"description": "left internal auditory canal",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID9392",
		"rightId": "RID9392_RID5825"
	  },
	  {
		"radlexId": "RID9392_RID5825",
		"description": "right internal auditory canal",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID9392",
		"leftId": "RID9392_RID5824"
	  },
	  {
		"radlexId": "RID10163",
		"description": "malleus",
		"containedById": "RID13303",
		"leftId": "RID10163_RID5824",
		"rightId": "RID10163_RID5825",
		"synonyms": [
		  "hammer",
		  "Malleus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52753"
		  },
		  {
			"system": "SNOMED",
			"code": "34080009"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.397.247.524"
		  },
		  {
			"system": "UMLS",
			"code": "C0024631"
		  }
		]
	  },
	  {
		"radlexId": "RID10163_RID5824",
		"description": "left malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10163",
		"rightId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10163_RID5825",
		"description": "right malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10163",
		"leftId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10165",
		"description": "handle of malleus",
		"containedById": "RID13303",
		"leftId": "RID10165_RID5824",
		"rightId": "RID10165_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "Manubrium"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52760"
		  }
		]
	  },
	  {
		"radlexId": "RID10165_RID5824",
		"description": "left handle of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10165",
		"rightId": "RID10165_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10165_RID5825",
		"description": "right handle of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10165",
		"leftId": "RID10165_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10166",
		"description": "head of malleus",
		"containedById": "RID13303",
		"leftId": "RID10166_RID5824",
		"rightId": "RID10166_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "Caput"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52761"
		  },
		  {
			"system": "SNOMED",
			"code": "77554002"
		  }
		]
	  },
	  {
		"radlexId": "RID10166_RID5824",
		"description": "left head of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10166",
		"rightId": "RID10166_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10166_RID5825",
		"description": "right head of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10166",
		"leftId": "RID10166_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10167",
		"description": "neck of malleus",
		"containedById": "RID13303",
		"leftId": "RID10167_RID5824",
		"rightId": "RID10167_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "Collum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52762"
		  },
		  {
			"system": "SNOMED",
			"code": "33741002"
		  }
		]
	  },
	  {
		"radlexId": "RID10167_RID5824",
		"description": "left neck of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10167",
		"rightId": "RID10167_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10167_RID5825",
		"description": "right neck of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10167",
		"leftId": "RID10167_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10168",
		"description": "lateral process of malleus",
		"containedById": "RID13303",
		"leftId": "RID10168_RID5824",
		"rightId": "RID10168_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "Processus mallei lateralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52770"
		  },
		  {
			"system": "SNOMED",
			"code": "62466004"
		  }
		]
	  },
	  {
		"radlexId": "RID10168_RID5824",
		"description": "left lateral process of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10168",
		"rightId": "RID10168_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10168_RID5825",
		"description": "right lateral process of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10168",
		"leftId": "RID10168_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10169",
		"description": "anterior process of malleus",
		"containedById": "RID13303",
		"leftId": "RID10169_RID5824",
		"rightId": "RID10169_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "Processus mallei anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52771"
		  },
		  {
			"system": "SNOMED",
			"code": "76016004"
		  }
		]
	  },
	  {
		"radlexId": "RID10169_RID5824",
		"description": "left anterior process of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10169",
		"rightId": "RID10169_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10169_RID5825",
		"description": "right anterior process of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10169",
		"leftId": "RID10169_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10190",
		"description": "posterior fold of malleus",
		"containedById": "RID13303",
		"leftId": "RID10190_RID5824",
		"rightId": "RID10190_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "posterior malleolar fold of tympanic membrane",
		  "Plica mallearis posterior des Trommelfells"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "56778"
		  },
		  {
			"system": "SNOMED",
			"code": "11502004"
		  }
		]
	  },
	  {
		"radlexId": "RID10190_RID5824",
		"description": "left posterior fold of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10190",
		"rightId": "RID10190_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10190_RID5825",
		"description": "right posterior fold of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10190",
		"leftId": "RID10190_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10191",
		"description": "anterior fold of malleus",
		"containedById": "RID13303",
		"leftId": "RID10191_RID5824",
		"rightId": "RID10191_RID5825",
		"partOfId": "RID10163",
		"synonyms": [
		  "anterior malleolar fold of tympanic membrane",
		  "Plica mallearis anterior des Trommelfells"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "56772"
		  },
		  {
			"system": "SNOMED",
			"code": "70757008"
		  }
		]
	  },
	  {
		"radlexId": "RID10191_RID5824",
		"description": "left anterior fold of malleus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10191",
		"rightId": "RID10191_RID5825",
		"partOfId": "RID10163_RID5824"
	  },
	  {
		"radlexId": "RID10191_RID5825",
		"description": "right anterior fold of malleus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10191",
		"leftId": "RID10191_RID5824",
		"partOfId": "RID10163_RID5825"
	  },
	  {
		"radlexId": "RID10157",
		"description": "incus",
		"containedById": "RID13303",
		"leftId": "RID10157_RID5824",
		"rightId": "RID10157_RID5825",
		"synonyms": [
		  "anvil",
		  "Incus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52752"
		  },
		  {
			"system": "SNOMED",
			"code": "35395007"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.397.247.362"
		  },
		  {
			"system": "UMLS",
			"code": "C0021181"
		  }
		]
	  },
	  {
		"radlexId": "RID10157_RID5824",
		"description": "left incus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10157",
		"rightId": "RID10157_RID5825"
	  },
	  {
		"radlexId": "RID10157_RID5825",
		"description": "right incus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10157",
		"leftId": "RID10157_RID5824"
	  },
	  {
		"radlexId": "RID10159",
		"description": "body of incus",
		"containedById": "RID13303",
		"leftId": "RID10159_RID5824",
		"rightId": "RID10159_RID5825",
		"partOfId": "RID10157",
		"synonyms": [
		  "Corpus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52763"
		  },
		  {
			"system": "SNOMED",
			"code": "17586009"
		  }
		]
	  },
	  {
		"radlexId": "RID10159_RID5824",
		"description": "left body of incus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10159",
		"rightId": "RID10159_RID5825",
		"partOfId": "RID10157_RID5824"
	  },
	  {
		"radlexId": "RID10159_RID5825",
		"description": "right body of incus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10159",
		"leftId": "RID10159_RID5824",
		"partOfId": "RID10157_RID5825"
	  },
	  {
		"radlexId": "RID10160",
		"description": "long process of incus",
		"containedById": "RID13303",
		"leftId": "RID10160_RID5824",
		"rightId": "RID10160_RID5825",
		"partOfId": "RID10157",
		"synonyms": [
		  "long limb of incus",
		  "Crus longum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52764"
		  },
		  {
			"system": "SNOMED",
			"code": "29333002"
		  }
		]
	  },
	  {
		"radlexId": "RID10160_RID5824",
		"description": "left long process of incus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10160",
		"rightId": "RID10160_RID5825",
		"partOfId": "RID10157_RID5824"
	  },
	  {
		"radlexId": "RID10160_RID5825",
		"description": "right long process of incus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10160",
		"leftId": "RID10160_RID5824",
		"partOfId": "RID10157_RID5825"
	  },
	  {
		"radlexId": "RID10161",
		"description": "lenticular process of incus",
		"containedById": "RID13303",
		"leftId": "RID10161_RID5824",
		"rightId": "RID10161_RID5825",
		"partOfId": "RID10157",
		"codes": [
		  {
			"system": "FMA",
			"code": "52775"
		  },
		  {
			"system": "SNOMED",
			"code": "59417004"
		  }
		]
	  },
	  {
		"radlexId": "RID10161_RID5824",
		"description": "left lenticular process of incus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10161",
		"rightId": "RID10161_RID5825",
		"partOfId": "RID10157_RID5824"
	  },
	  {
		"radlexId": "RID10161_RID5825",
		"description": "right lenticular process of incus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10161",
		"leftId": "RID10161_RID5824",
		"partOfId": "RID10157_RID5825"
	  },
	  {
		"radlexId": "RID10162",
		"description": "short process of incus",
		"containedById": "RID13303",
		"leftId": "RID10162_RID5824",
		"rightId": "RID10162_RID5825",
		"partOfId": "RID10157",
		"synonyms": [
		  "short limb of incus",
		  "Crus breve"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52765"
		  },
		  {
			"system": "SNOMED",
			"code": "54510003"
		  }
		]
	  },
	  {
		"radlexId": "RID10162_RID5824",
		"description": "left short process of incus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10162",
		"rightId": "RID10162_RID5825",
		"partOfId": "RID10157_RID5824"
	  },
	  {
		"radlexId": "RID10162_RID5825",
		"description": "right short process of incus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10162",
		"leftId": "RID10162_RID5824",
		"partOfId": "RID10157_RID5825"
	  },
	  {
		"radlexId": "RID10197",
		"description": "fold of incus",
		"containedById": "RID13303",
		"leftId": "RID10197_RID5824",
		"rightId": "RID10197_RID5825",
		"partOfId": "RID10157",
		"codes": [
		  {
			"system": "FMA",
			"code": "77728"
		  },
		  {
			"system": "SNOMED",
			"code": "77724009"
		  }
		]
	  },
	  {
		"radlexId": "RID10197_RID5824",
		"description": "left fold of incus",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10197",
		"rightId": "RID10197_RID5825",
		"partOfId": "RID10157_RID5824"
	  },
	  {
		"radlexId": "RID10197_RID5825",
		"description": "right fold of incus",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10197",
		"leftId": "RID10197_RID5824",
		"partOfId": "RID10157_RID5825"
	  },
	  {
		"radlexId": "RID10151",
		"description": "stapes",
		"containedById": "RID13303",
		"leftId": "RID10151_RID5824",
		"rightId": "RID10151_RID5825",
		"synonyms": [
		  "stirrup",
		  "Stapes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52751"
		  },
		  {
			"system": "SNOMED",
			"code": "22718006"
		  },
		  {
			"system": "MESH",
			"code": "A09.246.397.247.806"
		  },
		  {
			"system": "UMLS",
			"code": "C0038152"
		  }
		]
	  },
	  {
		"radlexId": "RID10151_RID5824",
		"description": "left stapes",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10151",
		"rightId": "RID10151_RID5825"
	  },
	  {
		"radlexId": "RID10151_RID5825",
		"description": "right stapes",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10151",
		"leftId": "RID10151_RID5824"
	  },
	  {
		"radlexId": "RID10153",
		"description": "head of stapes",
		"containedById": "RID13303",
		"leftId": "RID10153_RID5824",
		"rightId": "RID10153_RID5825",
		"partOfId": "RID10151",
		"synonyms": [
		  "Caput stapedis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52766"
		  },
		  {
			"system": "SNOMED",
			"code": "77141004"
		  }
		]
	  },
	  {
		"radlexId": "RID10153_RID5824",
		"description": "left head of stapes",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10153",
		"rightId": "RID10153_RID5825",
		"partOfId": "RID10151_RID5824"
	  },
	  {
		"radlexId": "RID10153_RID5825",
		"description": "right head of stapes",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10153",
		"leftId": "RID10153_RID5824",
		"partOfId": "RID10151_RID5825"
	  },
	  {
		"radlexId": "RID10154",
		"description": "anterior limb of stapes",
		"containedById": "RID13303",
		"leftId": "RID10154_RID5824",
		"rightId": "RID10154_RID5825",
		"partOfId": "RID10151",
		"synonyms": [
		  "Crus anterior stapedis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52767"
		  },
		  {
			"system": "SNOMED",
			"code": "90759000"
		  }
		]
	  },
	  {
		"radlexId": "RID10154_RID5824",
		"description": "left anterior limb of stapes",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10154",
		"rightId": "RID10154_RID5825",
		"partOfId": "RID10151_RID5824"
	  },
	  {
		"radlexId": "RID10154_RID5825",
		"description": "right anterior limb of stapes",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10154",
		"leftId": "RID10154_RID5824",
		"partOfId": "RID10151_RID5825"
	  },
	  {
		"radlexId": "RID10155",
		"description": "posterior limb of stapes",
		"containedById": "RID13303",
		"leftId": "RID10155_RID5824",
		"rightId": "RID10155_RID5825",
		"partOfId": "RID10151",
		"synonyms": [
		  "Crus posterior stapedis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52768"
		  },
		  {
			"system": "SNOMED",
			"code": "1425000"
		  }
		]
	  },
	  {
		"radlexId": "RID10155_RID5824",
		"description": "left posterior limb of stapes",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10155",
		"rightId": "RID10155_RID5825",
		"partOfId": "RID10151_RID5824"
	  },
	  {
		"radlexId": "RID10155_RID5825",
		"description": "right posterior limb of stapes",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10155",
		"leftId": "RID10155_RID5824",
		"partOfId": "RID10151_RID5825"
	  },
	  {
		"radlexId": "RID10156",
		"description": "footplate of stapes",
		"containedById": "RID13303",
		"leftId": "RID10156_RID5824",
		"rightId": "RID10156_RID5825",
		"partOfId": "RID10151",
		"synonyms": [
		  "base of stapes",
		  "footplate",
		  "Basis stapes"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52769"
		  },
		  {
			"system": "SNOMED",
			"code": "59498008"
		  }
		]
	  },
	  {
		"radlexId": "RID10156_RID5824",
		"description": "left footplate of stapes",
		"containedById": "RID13303_RID5824",
		"unsidedId": "RID10156",
		"rightId": "RID10156_RID5825",
		"partOfId": "RID10151_RID5824"
	  },
	  {
		"radlexId": "RID10156_RID5825",
		"description": "right footplate of stapes",
		"containedById": "RID13303_RID5825",
		"unsidedId": "RID10156",
		"leftId": "RID10156_RID5824",
		"partOfId": "RID10151_RID5825"
	  },
	  {
		"radlexId": "RID10202",
		"description": "vestibule of bony labyrinth",
		"containedById": "RID10199",
		"leftId": "RID10202_RID5824",
		"rightId": "RID10202_RID5825",
		"synonyms": [
		  "Vestibulum labyrinthi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "60183"
		  },
		  {
			"system": "SNOMED",
			"code": "45006007"
		  },
		  {
			"system": "UMLS",
			"code": "C0042606"
		  }
		]
	  },
	  {
		"radlexId": "RID10202_RID5824",
		"description": "left vestibule of bony labyrinth",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID10202",
		"rightId": "RID10202_RID5825"
	  },
	  {
		"radlexId": "RID10202_RID5825",
		"description": "right vestibule of bony labyrinth",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID10202",
		"leftId": "RID10202_RID5824"
	  },
	  {
		"radlexId": "RID12165",
		"description": "cochlear nerve",
		"containedById": "RID10199",
		"leftId": "RID14619",
		"rightId": "RID14618",
		"synonyms": [
		  "nervus cochlearis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "53431"
		  },
		  {
			"system": "SNOMED",
			"code": "113313006"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.120.910.120"
		  },
		  {
			"system": "UMLS",
			"code": "C0009201"
		  }
		]
	  },
	  {
		"radlexId": "RID14618",
		"description": "right cochlear nerve",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID12165",
		"leftId": "RID14619",
		"codes": [
		  {
			"system": "FMA",
			"code": "53432"
		  }
		]
	  },
	  {
		"radlexId": "RID14619",
		"description": "left cochlear nerve",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID12165",
		"rightId": "RID14618",
		"codes": [
		  {
			"system": "FMA",
			"code": "53433"
		  }
		]
	  },
	  {
		"radlexId": "RID12154",
		"description": "vestibular nerve",
		"containedById": "RID10199",
		"leftId": "RID14604",
		"rightId": "RID14603",
		"synonyms": [
		  "nervus vestibularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "53401"
		  },
		  {
			"system": "SNOMED",
			"code": "81686004"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.120.910.900"
		  },
		  {
			"system": "UMLS",
			"code": "C0042598"
		  }
		]
	  },
	  {
		"radlexId": "RID14603",
		"description": "right vestibular nerve",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID12154",
		"leftId": "RID14604",
		"codes": [
		  {
			"system": "FMA",
			"code": "53402"
		  },
		  {
			"system": "SNOMED",
			"code": "762881005"
		  }
		]
	  },
	  {
		"radlexId": "RID14604",
		"description": "left vestibular nerve",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID12154",
		"rightId": "RID14603",
		"codes": [
		  {
			"system": "FMA",
			"code": "53409"
		  },
		  {
			"system": "SNOMED",
			"code": "762880006"
		  }
		]
	  },
	  {
		"radlexId": "RID10143",
		"description": "mastoid antrum",
		"containedById": "RID9080",
		"leftId": "RID10143_RID5824",
		"rightId": "RID10143_RID5825",
		"partOfId": "RID9361",
		"codes": [
		  {
			"system": "FMA",
			"code": "55711"
		  },
		  {
			"system": "SNOMED",
			"code": "4906008"
		  }
		]
	  },
	  {
		"radlexId": "RID10143_RID5824",
		"description": "left mastoid antrum",
		"containedById": "RID9080",
		"unsidedId": "RID10143",
		"rightId": "RID10143_RID5825",
		"partOfId": "RID9361_RID5824"
	  },
	  {
		"radlexId": "RID10143_RID5825",
		"description": "right mastoid antrum",
		"containedById": "RID9080",
		"unsidedId": "RID10143",
		"leftId": "RID10143_RID5824",
		"partOfId": "RID9361_RID5825"
	  },
	  {
		"radlexId": "RID10214",
		"description": "anterior semicircular canal",
		"containedById": "RID10199",
		"leftId": "RID10214_RID5824",
		"rightId": "RID10214_RID5825",
		"synonyms": [
		  "Canalis semicircularis superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "60187"
		  },
		  {
			"system": "SNOMED",
			"code": "367615005"
		  }
		]
	  },
	  {
		"radlexId": "RID10214_RID5824",
		"description": "left anterior semicircular canal",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID10214",
		"rightId": "RID10214_RID5825"
	  },
	  {
		"radlexId": "RID10214_RID5825",
		"description": "right anterior semicircular canal",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID10214",
		"leftId": "RID10214_RID5824"
	  },
	  {
		"radlexId": "RID10216",
		"description": "posterior semicircular canal",
		"containedById": "RID10199",
		"leftId": "RID10216_RID5824",
		"rightId": "RID10216_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "60190"
		  },
		  {
			"system": "SNOMED",
			"code": "367569002"
		  }
		]
	  },
	  {
		"radlexId": "RID10216_RID5824",
		"description": "left posterior semicircular canal",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID10216",
		"rightId": "RID10216_RID5825"
	  },
	  {
		"radlexId": "RID10216_RID5825",
		"description": "right posterior semicircular canal",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID10216",
		"leftId": "RID10216_RID5824"
	  },
	  {
		"radlexId": "RID10218",
		"description": "lateral semicircular canal",
		"containedById": "RID10199",
		"leftId": "RID10218_RID5824",
		"rightId": "RID10218_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "60193"
		  },
		  {
			"system": "SNOMED",
			"code": "367616006"
		  }
		]
	  },
	  {
		"radlexId": "RID10218_RID5824",
		"description": "left lateral semicircular canal",
		"containedById": "RID10199_RID5824",
		"unsidedId": "RID10218",
		"rightId": "RID10218_RID5825"
	  },
	  {
		"radlexId": "RID10218_RID5825",
		"description": "right lateral semicircular canal",
		"containedById": "RID10199_RID5825",
		"unsidedId": "RID10218",
		"leftId": "RID10218_RID5824"
	  },
	  {
		"radlexId": "RID10029",
		"description": "nose",
		"containedById": "RID13284",
		"codes": [
		  {
			"system": "FMA",
			"code": "46472"
		  },
		  {
			"system": "SNOMED",
			"code": "45206002"
		  },
		  {
			"system": "MESH",
			"code": "A01.456.505.733"
		  },
		  {
			"system": "UMLS",
			"code": "C0028429"
		  }
		]
	  },
	  {
		"radlexId": "RID10039",
		"description": "nasal septum",
		"containedById": "RID9532",
		"partOfId": "RID9199",
		"codes": [
		  {
			"system": "FMA",
			"code": "54375"
		  },
		  {
			"system": "SNOMED",
			"code": "68426009"
		  },
		  {
			"system": "MESH",
			"code": "A04.531.591"
		  }
		]
	  },
	  {
		"radlexId": "RID9567",
		"description": "ethmoidal infundibulum",
		"containedById": "RID9532",
		"partOfId": "RID9199",
		"codes": [
		  {
			"system": "FMA",
			"code": "75769"
		  },
		  {
			"system": "SNOMED",
			"code": "80134001"
		  }
		]
	  },
	  {
		"radlexId": "RID9535",
		"description": "superior nasal meatus",
		"containedById": "RID9532",
		"leftId": "RID9535_RID5824",
		"rightId": "RID9535_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "53138"
		  },
		  {
			"system": "SNOMED",
			"code": "87880004"
		  }
		]
	  },
	  {
		"radlexId": "RID9535_RID5824",
		"description": "left superior nasal meatus",
		"containedById": "RID9532",
		"unsidedId": "RID9535",
		"rightId": "RID9535_RID5825"
	  },
	  {
		"radlexId": "RID9535_RID5825",
		"description": "right superior nasal meatus",
		"containedById": "RID9532",
		"unsidedId": "RID9535",
		"leftId": "RID9535_RID5824"
	  },
	  {
		"radlexId": "RID9536",
		"description": "middle nasal meatus",
		"containedById": "RID9532",
		"leftId": "RID9536_RID5824",
		"rightId": "RID9536_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "53139"
		  },
		  {
			"system": "SNOMED",
			"code": "87818004"
		  }
		]
	  },
	  {
		"radlexId": "RID9536_RID5824",
		"description": "left middle nasal meatus",
		"containedById": "RID9532",
		"unsidedId": "RID9536",
		"rightId": "RID9536_RID5825"
	  },
	  {
		"radlexId": "RID9536_RID5825",
		"description": "right middle nasal meatus",
		"containedById": "RID9532",
		"unsidedId": "RID9536",
		"leftId": "RID9536_RID5824"
	  },
	  {
		"radlexId": "RID9537",
		"description": "inferior nasal meatus",
		"containedById": "RID9532",
		"leftId": "RID9537_RID5824",
		"rightId": "RID9537_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "53140"
		  },
		  {
			"system": "SNOMED",
			"code": "78155005"
		  }
		]
	  },
	  {
		"radlexId": "RID9537_RID5824",
		"description": "left inferior nasal meatus",
		"containedById": "RID9532",
		"unsidedId": "RID9537",
		"rightId": "RID9537_RID5825"
	  },
	  {
		"radlexId": "RID9537_RID5825",
		"description": "right inferior nasal meatus",
		"containedById": "RID9532",
		"unsidedId": "RID9537",
		"leftId": "RID9537_RID5824"
	  },
	  {
		"radlexId": "RID9566",
		"description": "ethmoidal bulla",
		"containedById": "RID9532",
		"leftId": "RID9566_RID5824",
		"rightId": "RID9566_RID5825"
	  },
	  {
		"radlexId": "RID9566_RID5824",
		"description": "left ethmoidal bulla",
		"containedById": "RID9532",
		"unsidedId": "RID9566",
		"rightId": "RID9566_RID5825"
	  },
	  {
		"radlexId": "RID9566_RID5825",
		"description": "right ethmoidal bulla",
		"containedById": "RID9532",
		"unsidedId": "RID9566",
		"leftId": "RID9566_RID5824"
	  },
	  {
		"radlexId": "RID10049",
		"description": "superior nasal turbinate",
		"containedById": "RID9532",
		"leftId": "RID10049_RID5824",
		"rightId": "RID10049_RID5825",
		"partOfId": "RID9199",
		"codes": [
		  {
			"system": "FMA",
			"code": "57458"
		  },
		  {
			"system": "SNOMED",
			"code": "65289004"
		  }
		]
	  },
	  {
		"radlexId": "RID10049_RID5824",
		"description": "left superior nasal turbinate",
		"containedById": "RID9532",
		"unsidedId": "RID10049",
		"rightId": "RID10049_RID5825",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID10049_RID5825",
		"description": "right superior nasal turbinate",
		"containedById": "RID9532",
		"unsidedId": "RID10049",
		"leftId": "RID10049_RID5824",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID10050",
		"description": "middle nasal turbinate",
		"containedById": "RID9532",
		"leftId": "RID10050_RID5824",
		"rightId": "RID10050_RID5825",
		"partOfId": "RID9199",
		"codes": [
		  {
			"system": "FMA",
			"code": "57459"
		  },
		  {
			"system": "SNOMED",
			"code": "60962000"
		  }
		]
	  },
	  {
		"radlexId": "RID10050_RID5824",
		"description": "left middle nasal turbinate",
		"containedById": "RID9532",
		"unsidedId": "RID10050",
		"rightId": "RID10050_RID5825",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID10050_RID5825",
		"description": "right middle nasal turbinate",
		"containedById": "RID9532",
		"unsidedId": "RID10050",
		"leftId": "RID10050_RID5824",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID10051",
		"description": "inferior nasal turbinate",
		"containedById": "RID9532",
		"leftId": "RID10051_RID5824",
		"rightId": "RID10051_RID5825",
		"partOfId": "RID9199",
		"codes": [
		  {
			"system": "FMA",
			"code": "54736"
		  },
		  {
			"system": "SNOMED",
			"code": "6553002"
		  }
		]
	  },
	  {
		"radlexId": "RID10051_RID5824",
		"description": "left inferior nasal turbinate",
		"containedById": "RID9532",
		"unsidedId": "RID10051",
		"rightId": "RID10051_RID5825",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID10051_RID5825",
		"description": "right inferior nasal turbinate",
		"containedById": "RID9532",
		"unsidedId": "RID10051",
		"leftId": "RID10051_RID5824",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID9206",
		"description": "uncinate process of ethmoid",
		"containedById": "RID9532",
		"leftId": "RID9206_RID5824",
		"rightId": "RID9206_RID5825",
		"partOfId": "RID9199",
		"codes": [
		  {
			"system": "FMA",
			"code": "57455"
		  },
		  {
			"system": "SNOMED",
			"code": "306373001"
		  }
		]
	  },
	  {
		"radlexId": "RID9206_RID5824",
		"description": "left uncinate process of ethmoid",
		"containedById": "RID9532",
		"unsidedId": "RID9206",
		"rightId": "RID9206_RID5825",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID9206_RID5825",
		"description": "right uncinate process of ethmoid",
		"containedById": "RID9532",
		"unsidedId": "RID9206",
		"leftId": "RID9206_RID5824",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID28571",
		"description": "inferior nasal concha",
		"containedById": "RID9532",
		"leftId": "RID28571_RID5824",
		"rightId": "RID28571_RID5825"
	  },
	  {
		"radlexId": "RID28571_RID5824",
		"description": "left inferior nasal concha",
		"containedById": "RID9532",
		"unsidedId": "RID28571",
		"rightId": "RID28571_RID5825"
	  },
	  {
		"radlexId": "RID28571_RID5825",
		"description": "right inferior nasal concha",
		"containedById": "RID9532",
		"unsidedId": "RID28571",
		"leftId": "RID28571_RID5824"
	  },
	  {
		"radlexId": "RID7540",
		"description": "suprahyoid neck",
		"containedById": "RID13284"
	  },
	  {
		"radlexId": "RID7576",
		"description": "infrahyoid neck",
		"containedById": "RID13284"
	  },
	  {
		"radlexId": "RID9555",
		"description": "frontal sinus",
		"containedById": "RID13284",
		"leftId": "RID9555_RID5824",
		"rightId": "RID9555_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "57417"
		  },
		  {
			"system": "SNOMED",
			"code": "55060009"
		  },
		  {
			"system": "MESH",
			"code": "A04.531.621.387"
		  },
		  {
			"system": "UMLS",
			"code": "C0016734"
		  }
		]
	  },
	  {
		"radlexId": "RID9555_RID5824",
		"description": "left frontal sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9555",
		"rightId": "RID9555_RID5825"
	  },
	  {
		"radlexId": "RID9555_RID5825",
		"description": "right frontal sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9555",
		"leftId": "RID9555_RID5824"
	  },
	  {
		"radlexId": "RID9557",
		"description": "maxillary sinus",
		"containedById": "RID13284",
		"leftId": "RID9557_RID5824",
		"rightId": "RID9557_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "57715"
		  },
		  {
			"system": "SNOMED",
			"code": "15924003"
		  },
		  {
			"system": "MESH",
			"code": "A04.531.621.578"
		  },
		  {
			"system": "UMLS",
			"code": "C0024957"
		  }
		]
	  },
	  {
		"radlexId": "RID9557_RID5824",
		"description": "left maxillary sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9557",
		"rightId": "RID9557_RID5825"
	  },
	  {
		"radlexId": "RID9557_RID5825",
		"description": "right maxillary sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9557",
		"leftId": "RID9557_RID5824"
	  },
	  {
		"radlexId": "RID9569",
		"description": "sphenoid sinus",
		"containedById": "RID13284",
		"leftId": "RID9569_RID5824",
		"rightId": "RID9569_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "54683"
		  },
		  {
			"system": "SNOMED",
			"code": "24999009"
		  },
		  {
			"system": "MESH",
			"code": "A04.531.621.827"
		  },
		  {
			"system": "UMLS",
			"code": "C0037885"
		  }
		]
	  },
	  {
		"radlexId": "RID9569_RID5824",
		"description": "left sphenoid sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9569",
		"rightId": "RID9569_RID5825"
	  },
	  {
		"radlexId": "RID9569_RID5825",
		"description": "right sphenoid sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9569",
		"leftId": "RID9569_RID5824"
	  },
	  {
		"radlexId": "RID9561",
		"description": "ethmoid sinus",
		"containedById": "RID13284",
		"leftId": "RID9561_RID5824",
		"rightId": "RID9561_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "84115"
		  },
		  {
			"system": "SNOMED",
			"code": "54215007"
		  },
		  {
			"system": "MESH",
			"code": "A04.531.621.267"
		  },
		  {
			"system": "UMLS",
			"code": "C0015028"
		  }
		]
	  },
	  {
		"radlexId": "RID9561_RID5824",
		"description": "left ethmoid sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9561",
		"rightId": "RID9561_RID5825"
	  },
	  {
		"radlexId": "RID9561_RID5825",
		"description": "right ethmoid sinus",
		"containedById": "RID13284",
		"unsidedId": "RID9561",
		"leftId": "RID9561_RID5824"
	  },
	  {
		"radlexId": "RID9554",
		"description": "paranasal sinus",
		"containedById": "RID7540",
		"leftId": "RID9554_RID5824",
		"rightId": "RID9554_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "59679"
		  },
		  {
			"system": "SNOMED",
			"code": "2095001"
		  },
		  {
			"system": "UMLS",
			"code": "C0030471"
		  }
		]
	  },
	  {
		"radlexId": "RID9554_RID5824",
		"description": "left paranasal sinus",
		"containedById": "RID7540",
		"unsidedId": "RID9554",
		"rightId": "RID9554_RID5825"
	  },
	  {
		"radlexId": "RID9554_RID5825",
		"description": "right paranasal sinus",
		"containedById": "RID7540",
		"unsidedId": "RID9554",
		"leftId": "RID9554_RID5824"
	  },
	  {
		"radlexId": "RID28600",
		"description": "circle of Willis",
		"containedById": "RID6389_RID6434",
		"synonyms": [
		  "circulus arteriosus cerebri",
		  "circulus arteriosus Willisi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50454"
		  },
		  {
			"system": "SNOMED",
			"code": "11279006"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.228.351"
		  }
		]
	  },
	  {
		"radlexId": "RID648",
		"description": "anterior cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID36393",
		"rightId": "RID36392",
		"synonyms": [
		  "arteria cerebri anterior",
		  "Arteria cerebri anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50028"
		  },
		  {
			"system": "SNOMED",
			"code": "60176003"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.228.100"
		  },
		  {
			"system": "UMLS",
			"code": "C0149561"
		  }
		]
	  },
	  {
		"radlexId": "RID36392",
		"description": "right anterior cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID648",
		"leftId": "RID36393",
		"codes": [
		  {
			"system": "FMA",
			"code": "50029"
		  },
		  {
			"system": "SNOMED",
			"code": "369298005"
		  }
		]
	  },
	  {
		"radlexId": "RID36393",
		"description": "left anterior cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID648",
		"rightId": "RID36392",
		"codes": [
		  {
			"system": "FMA",
			"code": "50030"
		  },
		  {
			"system": "SNOMED",
			"code": "369299002"
		  }
		]
	  },
	  {
		"radlexId": "RID650",
		"description": "A1 segment of anterior cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID650_RID5824",
		"rightId": "RID650_RID5825",
		"partOfId": "RID648",
		"synonyms": [
		  "precommunicating part of anterior cerebral artery"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "772215000"
		  }
		]
	  },
	  {
		"radlexId": "RID650_RID5824",
		"description": "left A1 segment of anterior cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID650",
		"rightId": "RID650_RID5825",
		"partOfId": "RID36393"
	  },
	  {
		"radlexId": "RID650_RID5825",
		"description": "right A1 segment of anterior cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID650",
		"leftId": "RID650_RID5824",
		"partOfId": "RID36392"
	  },
	  {
		"radlexId": "RID651",
		"description": "A2 segment of anterior cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID651_RID5824",
		"rightId": "RID651_RID5825",
		"partOfId": "RID648",
		"synonyms": [
		  "postcommunicating part of anterior cerebral artery"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "772216004"
		  }
		]
	  },
	  {
		"radlexId": "RID651_RID5824",
		"description": "left A2 segment of anterior cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID651",
		"rightId": "RID651_RID5825",
		"partOfId": "RID36393"
	  },
	  {
		"radlexId": "RID651_RID5825",
		"description": "right A2 segment of anterior cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID651",
		"leftId": "RID651_RID5824",
		"partOfId": "RID36392"
	  },
	  {
		"radlexId": "RID656",
		"description": "pericallosal artery",
		"containedById": "RID6440",
		"leftId": "RID36435",
		"rightId": "RID36434",
		"synonyms": [
		  "arteria pericallosa",
		  "Arteria pericallosa"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50337"
		  }
		]
	  },
	  {
		"radlexId": "RID36434",
		"description": "right pericallosal artery",
		"containedById": "RID13862",
		"unsidedId": "RID656",
		"leftId": "RID36435",
		"codes": [
		  {
			"system": "FMA",
			"code": "50359"
		  }
		]
	  },
	  {
		"radlexId": "RID36435",
		"description": "left pericallosal artery",
		"containedById": "RID13863",
		"unsidedId": "RID656",
		"rightId": "RID36434",
		"codes": [
		  {
			"system": "FMA",
			"code": "50360"
		  }
		]
	  },
	  {
		"radlexId": "RID649",
		"description": "anterior communicating artery",
		"containedById": "RID6391",
		"synonyms": [
		  "arteria communicans anterior",
		  "Arteria communicans anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50169"
		  },
		  {
			"system": "SNOMED",
			"code": "8012006"
		  }
		]
	  },
	  {
		"radlexId": "RID652",
		"description": "distal medial striate artery",
		"containedById": "RID6440",
		"leftId": "RID652_RID5824",
		"rightId": "RID652_RID5825",
		"synonyms": [
		  "recurrent artery of Heubner",
		  "heubner recurrent artery",
		  "arteria striata medialis distalis",
		  "arteria striata medialis distalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50327"
		  },
		  {
			"system": "SNOMED",
			"code": "369318008"
		  }
		]
	  },
	  {
		"radlexId": "RID652_RID5824",
		"description": "left distal medial striate artery",
		"containedById": "RID13863",
		"unsidedId": "RID652",
		"rightId": "RID652_RID5825"
	  },
	  {
		"radlexId": "RID652_RID5825",
		"description": "right distal medial striate artery",
		"containedById": "RID13862",
		"unsidedId": "RID652",
		"leftId": "RID652_RID5824"
	  },
	  {
		"radlexId": "RID674",
		"description": "orbitofrontal artery",
		"containedById": "RID6440",
		"leftId": "RID674_RID5824",
		"rightId": "RID674_RID5825",
		"synonyms": [
		  "medial orbitofrontal artery",
		  "medial frontobasal artery",
		  "arteria frontobasalis medialis",
		  "orbito frontal artery",
		  "arteria frontobasalis medialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50328"
		  }
		]
	  },
	  {
		"radlexId": "RID674_RID5824",
		"description": "left orbitofrontal artery",
		"containedById": "RID13863",
		"unsidedId": "RID674",
		"rightId": "RID674_RID5825"
	  },
	  {
		"radlexId": "RID674_RID5825",
		"description": "right orbitofrontal artery",
		"containedById": "RID13862",
		"unsidedId": "RID674",
		"leftId": "RID674_RID5824"
	  },
	  {
		"radlexId": "RID655",
		"description": "polar frontal artery",
		"containedById": "RID6440",
		"leftId": "RID655_RID5824",
		"rightId": "RID655_RID5825",
		"synonyms": [
		  "frontopolar artery",
		  "arteria polaris frontalis",
		  "arteria polaris frontalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50329"
		  }
		]
	  },
	  {
		"radlexId": "RID655_RID5824",
		"description": "left polar frontal artery",
		"containedById": "RID13863",
		"unsidedId": "RID655",
		"rightId": "RID655_RID5825"
	  },
	  {
		"radlexId": "RID655_RID5825",
		"description": "right polar frontal artery",
		"containedById": "RID13862",
		"unsidedId": "RID655",
		"leftId": "RID655_RID5824"
	  },
	  {
		"radlexId": "RID661",
		"description": "callosomarginal artery",
		"containedById": "RID6440",
		"leftId": "RID36419",
		"rightId": "RID36418",
		"synonyms": [
		  "arteria callosomarginalis",
		  "arteria callosomarginalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50330"
		  },
		  {
			"system": "SNOMED",
			"code": "369338009"
		  }
		]
	  },
	  {
		"radlexId": "RID36418",
		"description": "right callosomarginal artery",
		"containedById": "RID13862",
		"unsidedId": "RID661",
		"leftId": "RID36419",
		"codes": [
		  {
			"system": "FMA",
			"code": "50347"
		  }
		]
	  },
	  {
		"radlexId": "RID36419",
		"description": "left callosomarginal artery",
		"containedById": "RID13863",
		"unsidedId": "RID661",
		"rightId": "RID36418",
		"codes": [
		  {
			"system": "FMA",
			"code": "50348"
		  }
		]
	  },
	  {
		"radlexId": "RID665",
		"description": "middle cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID36444",
		"rightId": "RID36443",
		"synonyms": [
		  "arteria cerebri media",
		  "arteria cerebri media"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50079"
		  },
		  {
			"system": "SNOMED",
			"code": "17232002"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.228.550"
		  },
		  {
			"system": "UMLS",
			"code": "C0149566"
		  }
		]
	  },
	  {
		"radlexId": "RID36443",
		"description": "right middle cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID665",
		"leftId": "RID36444",
		"codes": [
		  {
			"system": "FMA",
			"code": "50082"
		  },
		  {
			"system": "SNOMED",
			"code": "369352006"
		  }
		]
	  },
	  {
		"radlexId": "RID36444",
		"description": "left middle cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID665",
		"rightId": "RID36443",
		"codes": [
		  {
			"system": "FMA",
			"code": "50083"
		  },
		  {
			"system": "SNOMED",
			"code": "369353001"
		  }
		]
	  },
	  {
		"radlexId": "RID666",
		"description": "M1 segment of middle cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID666_RID5824",
		"rightId": "RID666_RID5825",
		"partOfId": "RID665",
		"synonyms": [
		  "sphenoid part of middle cerebral artery",
		  "horizontal segment of middle cerebral artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50365"
		  },
		  {
			"system": "SNOMED",
			"code": "414722000"
		  }
		]
	  },
	  {
		"radlexId": "RID666_RID5824",
		"description": "left M1 segment of middle cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID666",
		"rightId": "RID666_RID5825",
		"partOfId": "RID36444"
	  },
	  {
		"radlexId": "RID666_RID5825",
		"description": "right M1 segment of middle cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID666",
		"leftId": "RID666_RID5824",
		"partOfId": "RID36443"
	  },
	  {
		"radlexId": "RID671",
		"description": "M2 segment of middle cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID671_RID5824",
		"rightId": "RID671_RID5825",
		"partOfId": "RID665",
		"synonyms": [
		  "insular segment of middle cerebral artery",
		  "insular part of middle cerebral artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50368"
		  },
		  {
			"system": "SNOMED",
			"code": "414723005"
		  }
		]
	  },
	  {
		"radlexId": "RID671_RID5824",
		"description": "left M2 segment of middle cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID671",
		"rightId": "RID671_RID5825",
		"partOfId": "RID36444"
	  },
	  {
		"radlexId": "RID671_RID5825",
		"description": "right M2 segment of middle cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID671",
		"leftId": "RID671_RID5824",
		"partOfId": "RID36443"
	  },
	  {
		"radlexId": "RID680",
		"description": "M3 segment of middle cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID680_RID5824",
		"rightId": "RID680_RID5825",
		"partOfId": "RID665",
		"synonyms": [
		  "cortical part of middle cerebral artery"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "772219006"
		  }
		]
	  },
	  {
		"radlexId": "RID680_RID5824",
		"description": "left M3 segment of middle cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID680",
		"rightId": "RID680_RID5825",
		"partOfId": "RID36444"
	  },
	  {
		"radlexId": "RID680_RID5825",
		"description": "right M3 segment of middle cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID680",
		"leftId": "RID680_RID5824",
		"partOfId": "RID36443"
	  },
	  {
		"radlexId": "RID682",
		"description": "M4 segment of middle cerebral artery",
		"containedById": "RID6391",
		"leftId": "RID682_RID5824",
		"rightId": "RID682_RID5825",
		"partOfId": "RID665",
		"codes": [
		  {
			"system": "SNOMED",
			"code": "772221001"
		  }
		]
	  },
	  {
		"radlexId": "RID682_RID5824",
		"description": "left M4 segment of middle cerebral artery",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID682",
		"rightId": "RID682_RID5825",
		"partOfId": "RID36444"
	  },
	  {
		"radlexId": "RID682_RID5825",
		"description": "right M4 segment of middle cerebral artery",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID682",
		"leftId": "RID682_RID5824",
		"partOfId": "RID36443"
	  },
	  {
		"radlexId": "RID668",
		"description": "lenticulostriate artery",
		"containedById": "RID6537",
		"leftId": "RID668_RID5824",
		"rightId": "RID668_RID5825",
		"synonyms": [
		  "anterolateral central branch of middle cerebral artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50376"
		  },
		  {
			"system": "SNOMED",
			"code": "369317003"
		  }
		]
	  },
	  {
		"radlexId": "RID668_RID5824",
		"description": "left lenticulostriate artery",
		"containedById": "RID6537",
		"unsidedId": "RID668",
		"rightId": "RID668_RID5825"
	  },
	  {
		"radlexId": "RID668_RID5825",
		"description": "right lenticulostriate artery",
		"containedById": "RID6537",
		"unsidedId": "RID668",
		"leftId": "RID668_RID5824"
	  },
	  {
		"radlexId": "RID670",
		"description": "medial lenticulostriate artery",
		"containedById": "RID6537",
		"leftId": "RID670_RID5824",
		"rightId": "RID670_RID5825",
		"synonyms": [
		  "medial striate branch of middle cerebral artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50430"
		  },
		  {
			"system": "SNOMED",
			"code": "773107004"
		  }
		]
	  },
	  {
		"radlexId": "RID670_RID5824",
		"description": "left medial lenticulostriate artery",
		"containedById": "RID6537",
		"unsidedId": "RID670",
		"rightId": "RID670_RID5825"
	  },
	  {
		"radlexId": "RID670_RID5825",
		"description": "right medial lenticulostriate artery",
		"containedById": "RID6537",
		"unsidedId": "RID670",
		"leftId": "RID670_RID5824"
	  },
	  {
		"radlexId": "RID669",
		"description": "lateral lenticulostriate artery",
		"containedById": "RID6537",
		"leftId": "RID669_RID5824",
		"rightId": "RID669_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "322920"
		  },
		  {
			"system": "SNOMED",
			"code": "369319000"
		  }
		]
	  },
	  {
		"radlexId": "RID669_RID5824",
		"description": "left lateral lenticulostriate artery",
		"containedById": "RID6537",
		"unsidedId": "RID669",
		"rightId": "RID669_RID5825"
	  },
	  {
		"radlexId": "RID669_RID5825",
		"description": "right lateral lenticulostriate artery",
		"containedById": "RID6537",
		"unsidedId": "RID669",
		"leftId": "RID669_RID5824"
	  },
	  {
		"radlexId": "RID673",
		"description": "anterior temporal artery",
		"containedById": "RID6476",
		"leftId": "RID36460",
		"rightId": "RID36459",
		"synonyms": [
		  "arteria temporalis anterior",
		  "Arteria temporalis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50382"
		  },
		  {
			"system": "SNOMED",
			"code": "369310001"
		  }
		]
	  },
	  {
		"radlexId": "RID36459",
		"description": "right anterior temporal artery",
		"containedById": "RID13864",
		"unsidedId": "RID673",
		"leftId": "RID36460",
		"codes": [
		  {
			"system": "FMA",
			"code": "50383"
		  }
		]
	  },
	  {
		"radlexId": "RID36460",
		"description": "left anterior temporal artery",
		"containedById": "RID13865",
		"unsidedId": "RID673",
		"rightId": "RID36459",
		"codes": [
		  {
			"system": "FMA",
			"code": "50384"
		  }
		]
	  },
	  {
		"radlexId": "RID36456",
		"description": "polar temporal artery",
		"containedById": "RID6476",
		"leftId": "RID36458",
		"rightId": "RID36457",
		"synonyms": [
		  "arteria polaris temporalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50379"
		  }
		]
	  },
	  {
		"radlexId": "RID36457",
		"description": "right polar temporal artery",
		"containedById": "RID13864",
		"unsidedId": "RID36456",
		"leftId": "RID36458",
		"codes": [
		  {
			"system": "FMA",
			"code": "50380"
		  }
		]
	  },
	  {
		"radlexId": "RID36458",
		"description": "left polar temporal artery",
		"containedById": "RID13865",
		"unsidedId": "RID36456",
		"rightId": "RID36457",
		"codes": [
		  {
			"system": "FMA",
			"code": "50381"
		  }
		]
	  },
	  {
		"radlexId": "RID643",
		"description": "anterior choroidal artery",
		"containedById": "RID6476",
		"leftId": "RID36542",
		"rightId": "RID36541",
		"synonyms": [
		  "arteria choroidea anterior",
		  "Arteria choroidea anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50087"
		  },
		  {
			"system": "SNOMED",
			"code": "59920002"
		  }
		]
	  },
	  {
		"radlexId": "RID36541",
		"description": "right anterior choroidal artery",
		"containedById": "RID13864",
		"unsidedId": "RID643",
		"leftId": "RID36542",
		"codes": [
		  {
			"system": "FMA",
			"code": "50088"
		  }
		]
	  },
	  {
		"radlexId": "RID36542",
		"description": "left anterior choroidal artery",
		"containedById": "RID13865",
		"unsidedId": "RID643",
		"rightId": "RID36541",
		"codes": [
		  {
			"system": "FMA",
			"code": "50089"
		  }
		]
	  },
	  {
		"radlexId": "RID647",
		"description": "uncal artery",
		"containedById": "RID6476",
		"leftId": "RID36601",
		"rightId": "RID36600",
		"synonyms": [
		  "arteria uncalis",
		  "Arteria uncalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50090"
		  }
		]
	  },
	  {
		"radlexId": "RID36600",
		"description": "right uncal artery",
		"containedById": "RID13864",
		"unsidedId": "RID647",
		"leftId": "RID36601",
		"codes": [
		  {
			"system": "FMA",
			"code": "50091"
		  }
		]
	  },
	  {
		"radlexId": "RID36601",
		"description": "left uncal artery",
		"containedById": "RID13865",
		"unsidedId": "RID647",
		"rightId": "RID36600",
		"codes": [
		  {
			"system": "FMA",
			"code": "50092"
		  }
		]
	  },
	  {
		"radlexId": "RID36488",
		"description": "lateral frontobasal artery",
		"containedById": "RID6440",
		"leftId": "RID36490",
		"rightId": "RID36489",
		"synonyms": [
		  "arteria frontobasalis lateralis",
		  "arteria orbitofrontalis lateralis",
		  "arteria orbitofrontalis lateralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50442"
		  }
		]
	  },
	  {
		"radlexId": "RID36489",
		"description": "right lateral frontobasal artery",
		"containedById": "RID13862",
		"unsidedId": "RID36488",
		"leftId": "RID36490",
		"codes": [
		  {
			"system": "FMA",
			"code": "50443"
		  }
		]
	  },
	  {
		"radlexId": "RID36490",
		"description": "left lateral frontobasal artery",
		"containedById": "RID13863",
		"unsidedId": "RID36488",
		"rightId": "RID36489",
		"codes": [
		  {
			"system": "FMA",
			"code": "50444"
		  }
		]
	  },
	  {
		"radlexId": "RID676",
		"description": "artery of central sulcus",
		"containedById": "RID6440",
		"leftId": "RID676_RID5824",
		"rightId": "RID676_RID5825",
		"synonyms": [
		  "central sulcus artery",
		  "arteria sulci centralis",
		  "arteria sulci centralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "77439"
		  }
		]
	  },
	  {
		"radlexId": "RID676_RID5824",
		"description": "left artery of central sulcus",
		"containedById": "RID13863",
		"unsidedId": "RID676",
		"rightId": "RID676_RID5825"
	  },
	  {
		"radlexId": "RID676_RID5825",
		"description": "right artery of central sulcus",
		"containedById": "RID13862",
		"unsidedId": "RID676",
		"leftId": "RID676_RID5824"
	  },
	  {
		"radlexId": "RID36494",
		"description": "artery of precentral sulcus",
		"containedById": "RID6440",
		"leftId": "RID36496",
		"rightId": "RID36495",
		"synonyms": [
		  "precentral sulcus artery",
		  "arteria sulci precentralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50479"
		  }
		]
	  },
	  {
		"radlexId": "RID36495",
		"description": "artery of right precentral sulcus",
		"containedById": "RID13862",
		"unsidedId": "RID36494",
		"leftId": "RID36496",
		"synonyms": [
		  "right precentral sulcus artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50480"
		  }
		]
	  },
	  {
		"radlexId": "RID36496",
		"description": "artery of left precentral sulcus",
		"containedById": "RID13863",
		"unsidedId": "RID36494",
		"rightId": "RID36495",
		"synonyms": [
		  "left precentral sulcus artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50481"
		  }
		]
	  },
	  {
		"radlexId": "RID36497",
		"description": "artery of postcentral sulcus",
		"containedById": "RID6493",
		"leftId": "RID36499",
		"rightId": "RID36498",
		"synonyms": [
		  "postcentral sulcus artery",
		  "arteria sulci postcentralis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50482"
		  }
		]
	  },
	  {
		"radlexId": "RID36498",
		"description": "artery of right postcentral sulcus",
		"containedById": "RID13866",
		"unsidedId": "RID36497",
		"leftId": "RID36499",
		"synonyms": [
		  "right postcentral sulcus artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50483"
		  }
		]
	  },
	  {
		"radlexId": "RID36499",
		"description": "artery of left postcentral sulcus",
		"containedById": "RID13867",
		"unsidedId": "RID36497",
		"rightId": "RID36498",
		"synonyms": [
		  "left postcentral sulcus artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50484"
		  }
		]
	  },
	  {
		"radlexId": "RID35916",
		"description": "anterior parietal artery",
		"containedById": "RID6493",
		"leftId": "RID36501",
		"rightId": "RID36500",
		"synonyms": [
		  "arteria parietalis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50485"
		  },
		  {
			"system": "SNOMED",
			"code": "369307008"
		  }
		]
	  },
	  {
		"radlexId": "RID36500",
		"description": "right anterior parietal artery",
		"containedById": "RID13866",
		"unsidedId": "RID35916",
		"leftId": "RID36501",
		"codes": [
		  {
			"system": "FMA",
			"code": "50486"
		  }
		]
	  },
	  {
		"radlexId": "RID36501",
		"description": "left anterior parietal artery",
		"containedById": "RID13867",
		"unsidedId": "RID35916",
		"rightId": "RID36500",
		"codes": [
		  {
			"system": "FMA",
			"code": "50487"
		  }
		]
	  },
	  {
		"radlexId": "RID677",
		"description": "posterior parietal artery",
		"containedById": "RID6493",
		"leftId": "RID36503",
		"rightId": "RID36502",
		"synonyms": [
		  "arteria parietalis posterior",
		  "Arteria parietalis posterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50488"
		  },
		  {
			"system": "SNOMED",
			"code": "369308003"
		  }
		]
	  },
	  {
		"radlexId": "RID36502",
		"description": "right posterior parietal artery",
		"containedById": "RID13866",
		"unsidedId": "RID677",
		"leftId": "RID36503",
		"codes": [
		  {
			"system": "FMA",
			"code": "50489"
		  }
		]
	  },
	  {
		"radlexId": "RID36503",
		"description": "left posterior parietal artery",
		"containedById": "RID13867",
		"unsidedId": "RID677",
		"rightId": "RID36502",
		"codes": [
		  {
			"system": "FMA",
			"code": "50490"
		  }
		]
	  },
	  {
		"radlexId": "RID658",
		"description": "superior internal parietal artery",
		"containedById": "RID6493",
		"leftId": "RID658_RID5824",
		"rightId": "RID658_RID5825"
	  },
	  {
		"radlexId": "RID658_RID5824",
		"description": "left superior internal parietal artery",
		"containedById": "RID13867",
		"unsidedId": "RID658",
		"rightId": "RID658_RID5825"
	  },
	  {
		"radlexId": "RID658_RID5825",
		"description": "right superior internal parietal artery",
		"containedById": "RID13866",
		"unsidedId": "RID658",
		"leftId": "RID658_RID5824"
	  },
	  {
		"radlexId": "RID659",
		"description": "inferior internal parietal artery",
		"containedById": "RID6493",
		"leftId": "RID659_RID5824",
		"rightId": "RID659_RID5825"
	  },
	  {
		"radlexId": "RID659_RID5824",
		"description": "left inferior internal parietal artery",
		"containedById": "RID13867",
		"unsidedId": "RID659",
		"rightId": "RID659_RID5825"
	  },
	  {
		"radlexId": "RID659_RID5825",
		"description": "right inferior internal parietal artery",
		"containedById": "RID13866",
		"unsidedId": "RID659",
		"leftId": "RID659_RID5824"
	  },
	  {
		"radlexId": "RID731",
		"description": "middle temporal artery",
		"containedById": "RID13284",
		"leftId": "RID731_RID5824",
		"rightId": "RID731_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49666"
		  },
		  {
			"system": "SNOMED",
			"code": "20988001"
		  }
		]
	  },
	  {
		"radlexId": "RID731_RID5824",
		"description": "left middle temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID731",
		"rightId": "RID731_RID5825"
	  },
	  {
		"radlexId": "RID731_RID5825",
		"description": "right middle temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID731",
		"leftId": "RID731_RID5824"
	  },
	  {
		"radlexId": "RID642",
		"description": "posterior communicating artery",
		"containedById": "RID6537",
		"leftId": "RID36505",
		"rightId": "RID36504",
		"synonyms": [
		  "arteria communicans posterior",
		  "arteria communicans posterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50084"
		  },
		  {
			"system": "SNOMED",
			"code": "43119007"
		  }
		]
	  },
	  {
		"radlexId": "RID36504",
		"description": "right posterior communicating artery",
		"containedById": "RID6537",
		"unsidedId": "RID642",
		"leftId": "RID36505",
		"codes": [
		  {
			"system": "FMA",
			"code": "50085"
		  }
		]
	  },
	  {
		"radlexId": "RID36505",
		"description": "left posterior communicating artery",
		"containedById": "RID6537",
		"unsidedId": "RID642",
		"rightId": "RID36504",
		"codes": [
		  {
			"system": "FMA",
			"code": "50086"
		  }
		]
	  },
	  {
		"radlexId": "RID804",
		"description": "posterior cerebral artery",
		"containedById": "RID6393",
		"leftId": "RID44717",
		"rightId": "RID44716",
		"synonyms": [
		  "arteria cerebri posterior",
		  "Arteria cerebri posterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50583"
		  },
		  {
			"system": "SNOMED",
			"code": "70382005"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.228.700"
		  },
		  {
			"system": "UMLS",
			"code": "C0149576"
		  }
		]
	  },
	  {
		"radlexId": "RID44716",
		"description": "right posterior cerebral artery",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID804",
		"leftId": "RID44717",
		"codes": [
		  {
			"system": "FMA",
			"code": "50584"
		  },
		  {
			"system": "SNOMED",
			"code": "369300005"
		  }
		]
	  },
	  {
		"radlexId": "RID44717",
		"description": "left posterior cerebral artery",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID804",
		"rightId": "RID44716",
		"codes": [
		  {
			"system": "FMA",
			"code": "50585"
		  },
		  {
			"system": "SNOMED",
			"code": "369301009"
		  }
		]
	  },
	  {
		"radlexId": "RID805",
		"description": "P1 segment of posterior cerebral artery",
		"containedById": "RID6393",
		"leftId": "RID805_RID5824",
		"rightId": "RID805_RID5825",
		"partOfId": "RID804",
		"synonyms": [
		  "peduncular segment of posterior cerebral artery",
		  "precommunicating part of posterior cerebral artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50590"
		  },
		  {
			"system": "SNOMED",
			"code": "415144009"
		  }
		]
	  },
	  {
		"radlexId": "RID805_RID5824",
		"description": "left P1 segment of posterior cerebral artery",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID805",
		"rightId": "RID805_RID5825",
		"partOfId": "RID44717"
	  },
	  {
		"radlexId": "RID805_RID5825",
		"description": "right P1 segment of posterior cerebral artery",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID805",
		"leftId": "RID805_RID5824",
		"partOfId": "RID44716"
	  },
	  {
		"radlexId": "RID807",
		"description": "P2 segment of posterior cerebral artery",
		"containedById": "RID6393",
		"leftId": "RID807_RID5824",
		"rightId": "RID807_RID5825",
		"partOfId": "RID804",
		"synonyms": [
		  "postcommunicating part of posterior cerebral artery",
		  "ambient segment of posterior cerebral artery of posterior cerebral artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50591"
		  },
		  {
			"system": "SNOMED",
			"code": "415145005"
		  }
		]
	  },
	  {
		"radlexId": "RID807_RID5824",
		"description": "left P2 segment of posterior cerebral artery",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID807",
		"rightId": "RID807_RID5825",
		"partOfId": "RID44717"
	  },
	  {
		"radlexId": "RID807_RID5825",
		"description": "right P2 segment of posterior cerebral artery",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID807",
		"leftId": "RID807_RID5824",
		"partOfId": "RID44716"
	  },
	  {
		"radlexId": "RID818",
		"description": "P3 segment of posterior cerebral artery",
		"containedById": "RID6393",
		"leftId": "RID818_RID5824",
		"rightId": "RID818_RID5825",
		"partOfId": "RID804",
		"synonyms": [
		  "segmentum P3 (Arteria cerebri posterior)",
		  "arteria occipitalis lateralis",
		  "segmentum P3 (Arteria cerebri posterior)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50633"
		  },
		  {
			"system": "SNOMED",
			"code": "772214001"
		  }
		]
	  },
	  {
		"radlexId": "RID818_RID5824",
		"description": "left P3 segment of posterior cerebral artery",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID818",
		"rightId": "RID818_RID5825",
		"partOfId": "RID44717"
	  },
	  {
		"radlexId": "RID818_RID5825",
		"description": "right P3 segment of posterior cerebral artery",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID818",
		"leftId": "RID818_RID5824",
		"partOfId": "RID44716"
	  },
	  {
		"radlexId": "RID813",
		"description": "medial posterior choroidal artery",
		"containedById": "RID6677",
		"leftId": "RID813_RID5824",
		"rightId": "RID813_RID5825",
		"synonyms": [
		  "posterior medial choroidal artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50630"
		  },
		  {
			"system": "SNOMED",
			"code": "369344008"
		  }
		]
	  },
	  {
		"radlexId": "RID813_RID5824",
		"description": "left medial posterior choroidal artery",
		"containedById": "RID6677",
		"unsidedId": "RID813",
		"rightId": "RID813_RID5825"
	  },
	  {
		"radlexId": "RID813_RID5825",
		"description": "right medial posterior choroidal artery",
		"containedById": "RID6677",
		"unsidedId": "RID813",
		"leftId": "RID813_RID5824"
	  },
	  {
		"radlexId": "RID814",
		"description": "lateral posterior choroidal artery",
		"containedById": "RID6677",
		"leftId": "RID814_RID5824",
		"rightId": "RID814_RID5825",
		"synonyms": [
		  "posterior lateral choroidal artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50631"
		  },
		  {
			"system": "SNOMED",
			"code": "369343002"
		  }
		]
	  },
	  {
		"radlexId": "RID814_RID5824",
		"description": "left lateral posterior choroidal artery",
		"containedById": "RID6677",
		"unsidedId": "RID814",
		"rightId": "RID814_RID5825"
	  },
	  {
		"radlexId": "RID814_RID5825",
		"description": "right lateral posterior choroidal artery",
		"containedById": "RID6677",
		"unsidedId": "RID814",
		"leftId": "RID814_RID5824"
	  },
	  {
		"radlexId": "RID820",
		"description": "calcarine artery",
		"containedById": "RID6502",
		"leftId": "RID44758",
		"rightId": "RID44757",
		"synonyms": [
		  "ramus calcarinus (Arteria occipitalis medialis)",
		  "Arteria calcarina"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50655"
		  },
		  {
			"system": "SNOMED",
			"code": "369350003"
		  }
		]
	  },
	  {
		"radlexId": "RID44757",
		"description": "right calcarine artery",
		"containedById": "RID13868",
		"unsidedId": "RID820",
		"leftId": "RID44758",
		"codes": [
		  {
			"system": "FMA",
			"code": "50690"
		  }
		]
	  },
	  {
		"radlexId": "RID44758",
		"description": "left calcarine artery",
		"containedById": "RID13869",
		"unsidedId": "RID820",
		"rightId": "RID44757",
		"codes": [
		  {
			"system": "FMA",
			"code": "50691"
		  }
		]
	  },
	  {
		"radlexId": "RID44723",
		"description": "collicular artery",
		"containedById": "RID6768",
		"leftId": "RID44725",
		"rightId": "RID44724",
		"synonyms": [
		  "arteria collicularis",
		  "arteria quadrigeminalis",
		  "arteria quadrigeminalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50625"
		  }
		]
	  },
	  {
		"radlexId": "RID44724",
		"description": "right collicular artery",
		"containedById": "RID6768",
		"unsidedId": "RID44723",
		"leftId": "RID44725",
		"codes": [
		  {
			"system": "FMA",
			"code": "50666"
		  }
		]
	  },
	  {
		"radlexId": "RID44725",
		"description": "left collicular artery",
		"containedById": "RID6768",
		"unsidedId": "RID44723",
		"rightId": "RID44724",
		"codes": [
		  {
			"system": "FMA",
			"code": "50667"
		  }
		]
	  },
	  {
		"radlexId": "RID810",
		"description": "anterior thalamoperforating artery",
		"containedById": "RID6537",
		"leftId": "RID810_RID5824",
		"rightId": "RID810_RID5825"
	  },
	  {
		"radlexId": "RID810_RID5824",
		"description": "left anterior thalamoperforating artery",
		"containedById": "RID6537",
		"unsidedId": "RID810",
		"rightId": "RID810_RID5825"
	  },
	  {
		"radlexId": "RID810_RID5825",
		"description": "right anterior thalamoperforating artery",
		"containedById": "RID6537",
		"unsidedId": "RID810",
		"leftId": "RID810_RID5824"
	  },
	  {
		"radlexId": "RID811",
		"description": "posterior thalamoperforating artery",
		"containedById": "RID6537",
		"leftId": "RID811_RID5824",
		"rightId": "RID811_RID5825"
	  },
	  {
		"radlexId": "RID811_RID5824",
		"description": "left posterior thalamoperforating artery",
		"containedById": "RID6537",
		"unsidedId": "RID811",
		"rightId": "RID811_RID5825"
	  },
	  {
		"radlexId": "RID811_RID5825",
		"description": "right posterior thalamoperforating artery",
		"containedById": "RID6537",
		"unsidedId": "RID811",
		"leftId": "RID811_RID5824"
	  },
	  {
		"radlexId": "RID812",
		"description": "thalamogeniculate artery",
		"containedById": "RID6537",
		"leftId": "RID44727",
		"rightId": "RID44726",
		"synonyms": [
		  "arteria thalamogeniculata",
		  "arteria thalamogeniculata"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50629"
		  }
		]
	  },
	  {
		"radlexId": "RID44726",
		"description": "right thalamogeniculate artery",
		"containedById": "RID6537",
		"unsidedId": "RID812",
		"leftId": "RID44727",
		"codes": [
		  {
			"system": "FMA",
			"code": "50670"
		  }
		]
	  },
	  {
		"radlexId": "RID44727",
		"description": "left thalamogeniculate artery",
		"containedById": "RID6537",
		"unsidedId": "RID812",
		"rightId": "RID44726",
		"codes": [
		  {
			"system": "FMA",
			"code": "50671"
		  }
		]
	  },
	  {
		"radlexId": "RID679",
		"description": "posterior temporal artery",
		"containedById": "RID13284",
		"leftId": "RID36462",
		"rightId": "RID36461",
		"codes": [
		  {
			"system": "FMA",
			"code": "50458"
		  },
		  {
			"system": "SNOMED",
			"code": "369311002"
		  }
		]
	  },
	  {
		"radlexId": "RID36461",
		"description": "right posterior temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID679",
		"leftId": "RID36462",
		"codes": [
		  {
			"system": "FMA",
			"code": "50459"
		  }
		]
	  },
	  {
		"radlexId": "RID36462",
		"description": "left posterior temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID679",
		"rightId": "RID36461",
		"codes": [
		  {
			"system": "FMA",
			"code": "50460"
		  }
		]
	  },
	  {
		"radlexId": "RID711",
		"description": "occipital artery",
		"containedById": "RID13284",
		"leftId": "RID711_RID5824",
		"rightId": "RID711_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49586"
		  },
		  {
			"system": "SNOMED",
			"code": "31145008"
		  }
		]
	  },
	  {
		"radlexId": "RID711_RID5824",
		"description": "left occipital artery",
		"containedById": "RID13284",
		"unsidedId": "RID711",
		"rightId": "RID711_RID5825"
	  },
	  {
		"radlexId": "RID711_RID5825",
		"description": "right occipital artery",
		"containedById": "RID13284",
		"unsidedId": "RID711",
		"leftId": "RID711_RID5824"
	  },
	  {
		"radlexId": "RID44762",
		"description": "right lateral occipital artery",
		"containedById": "RID13284",
		"leftId": "RID44763",
		"codes": [
		  {
			"system": "FMA",
			"code": "50643"
		  }
		]
	  },
	  {
		"radlexId": "RID44763",
		"description": "left lateral occipital artery",
		"containedById": "RID13284",
		"rightId": "RID44762",
		"codes": [
		  {
			"system": "FMA",
			"code": "50644"
		  }
		]
	  },
	  {
		"radlexId": "RID44764",
		"description": "medial occipital artery",
		"containedById": "RID13284",
		"leftId": "RID44766",
		"rightId": "RID44765",
		"synonyms": [
		  "segmentum P4 (Arteria cerebri posterioris)",
		  "arteria occipitalis medialis",
		  "arteria occipitalis medialis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50638"
		  },
		  {
			"system": "SNOMED",
			"code": "118922002"
		  }
		]
	  },
	  {
		"radlexId": "RID44765",
		"description": "right medial occipital artery",
		"containedById": "RID13284",
		"unsidedId": "RID44764",
		"leftId": "RID44766",
		"codes": [
		  {
			"system": "FMA",
			"code": "50645"
		  }
		]
	  },
	  {
		"radlexId": "RID44766",
		"description": "left medial occipital artery",
		"containedById": "RID13284",
		"unsidedId": "RID44764",
		"rightId": "RID44765",
		"codes": [
		  {
			"system": "FMA",
			"code": "50646"
		  }
		]
	  },
	  {
		"radlexId": "RID819",
		"description": "parieto-occipital artery",
		"containedById": "RID6393",
		"leftId": "RID44756",
		"rightId": "RID44755",
		"synonyms": [
		  "parietal occipital artery",
		  "ramus parietooccipitalis (Arteria occipitalis medialis)",
		  "ramus parietooccipitalis (Arteria occipitalis medialis)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50654"
		  }
		]
	  },
	  {
		"radlexId": "RID44755",
		"description": "right parietal occipital artery",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID819",
		"leftId": "RID44756",
		"codes": [
		  {
			"system": "FMA",
			"code": "50688"
		  }
		]
	  },
	  {
		"radlexId": "RID44756",
		"description": "left parietal occipital artery",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID819",
		"rightId": "RID44755",
		"codes": [
		  {
			"system": "FMA",
			"code": "50689"
		  }
		]
	  },
	  {
		"radlexId": "RID821",
		"description": "splenial artery",
		"containedById": "RID6537",
		"leftId": "RID44751",
		"rightId": "RID44750",
		"synonyms": [
		  "ramus corporis callosi dorsalis (Arteria occipitalis medialis)",
		  "posterior pericallosal artery",
		  "ramus corporis callosi dorsalis (Arteria occipitalis medialis)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50652"
		  }
		]
	  },
	  {
		"radlexId": "RID44750",
		"description": "right splenial artery",
		"containedById": "RID6537",
		"unsidedId": "RID821",
		"leftId": "RID44751",
		"codes": [
		  {
			"system": "FMA",
			"code": "50684"
		  }
		]
	  },
	  {
		"radlexId": "RID44751",
		"description": "left splenial artery",
		"containedById": "RID6537",
		"unsidedId": "RID821",
		"rightId": "RID44750",
		"codes": [
		  {
			"system": "FMA",
			"code": "50685"
		  }
		]
	  },
	  {
		"radlexId": "RID607",
		"description": "ophthalmic artery",
		"containedById": "RID9725",
		"leftId": "RID36255",
		"rightId": "RID36254",
		"synonyms": [
		  "arteria ophthalmica",
		  "arteria ophthalmica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49868"
		  },
		  {
			"system": "SNOMED",
			"code": "53549008"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.622"
		  },
		  {
			"system": "UMLS",
			"code": "C0029078"
		  }
		]
	  },
	  {
		"radlexId": "RID36254",
		"description": "right ophthalmic artery",
		"containedById": "RID9725_RID5825",
		"unsidedId": "RID607",
		"leftId": "RID36255",
		"codes": [
		  {
			"system": "FMA",
			"code": "49869"
		  }
		]
	  },
	  {
		"radlexId": "RID36255",
		"description": "left ophthalmic artery",
		"containedById": "RID9725_RID5824",
		"unsidedId": "RID607",
		"rightId": "RID36254",
		"codes": [
		  {
			"system": "FMA",
			"code": "49870"
		  }
		]
	  },
	  {
		"radlexId": "RID791",
		"description": "basilar artery",
		"containedById": "RID6381_RID6434",
		"synonyms": [
		  "arteria basilaris",
		  "Arteria basilaris"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50542"
		  },
		  {
			"system": "SNOMED",
			"code": "59011009"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.106"
		  },
		  {
			"system": "UMLS",
			"code": "C0004811"
		  }
		]
	  },
	  {
		"radlexId": "RID803",
		"description": "superior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"leftId": "RID44671",
		"rightId": "RID44670",
		"synonyms": [
		  "arteria superior cerebelli",
		  "arteria superior cerebelli"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50573"
		  },
		  {
			"system": "SNOMED",
			"code": "51691006"
		  }
		]
	  },
	  {
		"radlexId": "RID44670",
		"description": "right superior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID803",
		"leftId": "RID44671",
		"codes": [
		  {
			"system": "FMA",
			"code": "50574"
		  }
		]
	  },
	  {
		"radlexId": "RID44671",
		"description": "left superior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID803",
		"rightId": "RID44670",
		"codes": [
		  {
			"system": "FMA",
			"code": "50575"
		  }
		]
	  },
	  {
		"radlexId": "RID794",
		"description": "anterior inferior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"leftId": "RID44690",
		"rightId": "RID44689",
		"synonyms": [
		  "arteria inferior anterior cerebelli",
		  "AICA"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50544"
		  },
		  {
			"system": "SNOMED",
			"code": "50395001"
		  }
		]
	  },
	  {
		"radlexId": "RID44689",
		"description": "right anterior inferior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID794",
		"leftId": "RID44690",
		"codes": [
		  {
			"system": "FMA",
			"code": "50545"
		  }
		]
	  },
	  {
		"radlexId": "RID44690",
		"description": "left anterior inferior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID794",
		"rightId": "RID44689",
		"codes": [
		  {
			"system": "FMA",
			"code": "50546"
		  }
		]
	  },
	  {
		"radlexId": "RID779",
		"description": "posterior inferior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"leftId": "RID44641",
		"rightId": "RID44640",
		"synonyms": [
		  "PICA",
		  "arteria inferior posterior cerebelli"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50518"
		  },
		  {
			"system": "SNOMED",
			"code": "45242005"
		  }
		]
	  },
	  {
		"radlexId": "RID44640",
		"description": "right posterior inferior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID779",
		"leftId": "RID44641",
		"codes": [
		  {
			"system": "FMA",
			"code": "50519"
		  }
		]
	  },
	  {
		"radlexId": "RID44641",
		"description": "left posterior inferior cerebellar artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID779",
		"rightId": "RID44640",
		"codes": [
		  {
			"system": "FMA",
			"code": "50520"
		  }
		]
	  },
	  {
		"radlexId": "RID781",
		"description": "anterior medullary segment of PICA",
		"containedById": "RID6815",
		"leftId": "RID781_RID5824",
		"rightId": "RID781_RID5825"
	  },
	  {
		"radlexId": "RID781_RID5824",
		"description": "left anterior medullary segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID781",
		"rightId": "RID781_RID5825"
	  },
	  {
		"radlexId": "RID781_RID5825",
		"description": "right anterior medullary segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID781",
		"leftId": "RID781_RID5824"
	  },
	  {
		"radlexId": "RID783",
		"description": "posterior medullary segment of PICA",
		"containedById": "RID6815",
		"leftId": "RID783_RID5824",
		"rightId": "RID783_RID5825"
	  },
	  {
		"radlexId": "RID783_RID5824",
		"description": "left posterior medullary segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID783",
		"rightId": "RID783_RID5825"
	  },
	  {
		"radlexId": "RID783_RID5825",
		"description": "right posterior medullary segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID783",
		"leftId": "RID783_RID5824"
	  },
	  {
		"radlexId": "RID784",
		"description": "supratonsillar segment of PICA",
		"containedById": "RID6815",
		"leftId": "RID784_RID5824",
		"rightId": "RID784_RID5825"
	  },
	  {
		"radlexId": "RID784_RID5824",
		"description": "left supratonsillar segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID784",
		"rightId": "RID784_RID5825"
	  },
	  {
		"radlexId": "RID784_RID5825",
		"description": "right supratonsillar segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID784",
		"leftId": "RID784_RID5824"
	  },
	  {
		"radlexId": "RID786",
		"description": "retrotonsillar segment of PICA",
		"containedById": "RID6815",
		"leftId": "RID786_RID5824",
		"rightId": "RID786_RID5825"
	  },
	  {
		"radlexId": "RID786_RID5824",
		"description": "left retrotonsillar segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID786",
		"rightId": "RID786_RID5825"
	  },
	  {
		"radlexId": "RID786_RID5825",
		"description": "right retrotonsillar segment of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID786",
		"leftId": "RID786_RID5824"
	  },
	  {
		"radlexId": "RID787",
		"description": "inferior vermian artery of PICA",
		"containedById": "RID6815",
		"leftId": "RID787_RID5824",
		"rightId": "RID787_RID5825"
	  },
	  {
		"radlexId": "RID787_RID5824",
		"description": "left inferior vermian artery of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID787",
		"rightId": "RID787_RID5825"
	  },
	  {
		"radlexId": "RID787_RID5825",
		"description": "right inferior vermian artery of PICA",
		"containedById": "RID6815",
		"unsidedId": "RID787",
		"leftId": "RID787_RID5824"
	  },
	  {
		"radlexId": "RID795",
		"description": "labyrinthine artery",
		"containedById": "RID9361",
		"leftId": "RID44692",
		"rightId": "RID44691",
		"synonyms": [
		  "arteria labyrinthi",
		  "arteria labyrinthi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50548"
		  },
		  {
			"system": "SNOMED",
			"code": "89471000"
		  }
		]
	  },
	  {
		"radlexId": "RID44691",
		"description": "right labyrinthine artery",
		"containedById": "RID9361_RID5825",
		"unsidedId": "RID795",
		"leftId": "RID44692",
		"codes": [
		  {
			"system": "FMA",
			"code": "50549"
		  }
		]
	  },
	  {
		"radlexId": "RID44692",
		"description": "left labyrinthine artery",
		"containedById": "RID9361_RID5824",
		"unsidedId": "RID795",
		"rightId": "RID44691",
		"codes": [
		  {
			"system": "FMA",
			"code": "50550"
		  }
		]
	  },
	  {
		"radlexId": "RID44660",
		"description": "pontine artery",
		"containedById": "RID6381_RID6434",
		"leftId": "RID44662",
		"rightId": "RID44661",
		"codes": [
		  {
			"system": "FMA",
			"code": "50560"
		  },
		  {
			"system": "SNOMED",
			"code": "369356009"
		  }
		]
	  },
	  {
		"radlexId": "RID44661",
		"description": "right pontine artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID44660",
		"leftId": "RID44662",
		"codes": [
		  {
			"system": "FMA",
			"code": "50561"
		  },
		  {
			"system": "SNOMED",
			"code": "734480009"
		  }
		]
	  },
	  {
		"radlexId": "RID44662",
		"description": "left pontine artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID44660",
		"rightId": "RID44661",
		"codes": [
		  {
			"system": "FMA",
			"code": "50562"
		  },
		  {
			"system": "SNOMED",
			"code": "734479006"
		  }
		]
	  },
	  {
		"radlexId": "RID793",
		"description": "circumflex pontine artery",
		"containedById": "RID6381_RID6434",
		"leftId": "RID793_RID5824",
		"rightId": "RID793_RID5825"
	  },
	  {
		"radlexId": "RID793_RID5824",
		"description": "left circumflex pontine artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID793",
		"rightId": "RID793_RID5825"
	  },
	  {
		"radlexId": "RID793_RID5825",
		"description": "right circumflex pontine artery",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID793",
		"leftId": "RID793_RID5824"
	  },
	  {
		"radlexId": "RID789",
		"description": "anterior spinal artery",
		"containedById": "RID39569",
		"leftId": "RID44639",
		"rightId": "RID44638",
		"synonyms": [
		  "arteria spinalis anterior",
		  "arteria spinalis anterior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50531"
		  },
		  {
			"system": "SNOMED",
			"code": "17388009"
		  }
		]
	  },
	  {
		"radlexId": "RID44638",
		"description": "right anterior spinal artery",
		"containedById": "RID39569",
		"unsidedId": "RID789",
		"leftId": "RID44639",
		"codes": [
		  {
			"system": "FMA",
			"code": "50532"
		  }
		]
	  },
	  {
		"radlexId": "RID44639",
		"description": "left anterior spinal artery",
		"containedById": "RID39569",
		"unsidedId": "RID789",
		"rightId": "RID44638",
		"codes": [
		  {
			"system": "FMA",
			"code": "50533"
		  }
		]
	  },
	  {
		"radlexId": "RID696",
		"description": "lingual artery",
		"containedById": "RID13284",
		"leftId": "RID696_RID5824",
		"rightId": "RID696_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49526"
		  },
		  {
			"system": "SNOMED",
			"code": "113264009"
		  }
		]
	  },
	  {
		"radlexId": "RID696_RID5824",
		"description": "left lingual artery",
		"containedById": "RID13284",
		"unsidedId": "RID696",
		"rightId": "RID696_RID5825"
	  },
	  {
		"radlexId": "RID696_RID5825",
		"description": "right lingual artery",
		"containedById": "RID13284",
		"unsidedId": "RID696",
		"leftId": "RID696_RID5824"
	  },
	  {
		"radlexId": "RID701",
		"description": "facial artery",
		"containedById": "RID13284",
		"leftId": "RID701_RID5824",
		"rightId": "RID701_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49549"
		  },
		  {
			"system": "SNOMED",
			"code": "23074001"
		  }
		]
	  },
	  {
		"radlexId": "RID701_RID5824",
		"description": "left facial artery",
		"containedById": "RID13284",
		"unsidedId": "RID701",
		"rightId": "RID701_RID5825"
	  },
	  {
		"radlexId": "RID701_RID5825",
		"description": "right facial artery",
		"containedById": "RID13284",
		"unsidedId": "RID701",
		"leftId": "RID701_RID5824"
	  },
	  {
		"radlexId": "RID734",
		"description": "maxillary artery",
		"containedById": "RID13284",
		"leftId": "RID734_RID5824",
		"rightId": "RID734_RID5825",
		"synonyms": [
		  "internal maxillary artery"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49675"
		  },
		  {
			"system": "SNOMED",
			"code": "63082002"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.523"
		  },
		  {
			"system": "UMLS",
			"code": "C0024949"
		  }
		]
	  },
	  {
		"radlexId": "RID734_RID5824",
		"description": "left maxillary artery",
		"containedById": "RID13284",
		"unsidedId": "RID734",
		"rightId": "RID734_RID5825"
	  },
	  {
		"radlexId": "RID734_RID5825",
		"description": "right maxillary artery",
		"containedById": "RID13284",
		"unsidedId": "RID734",
		"leftId": "RID734_RID5824"
	  },
	  {
		"radlexId": "RID36453",
		"description": "temporal artery",
		"containedById": "RID13284",
		"leftId": "RID36455",
		"rightId": "RID36454",
		"codes": [
		  {
			"system": "FMA",
			"code": "50438"
		  },
		  {
			"system": "SNOMED",
			"code": "15672000"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.114.228.868"
		  }
		]
	  },
	  {
		"radlexId": "RID36454",
		"description": "right temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID36453",
		"leftId": "RID36455",
		"codes": [
		  {
			"system": "FMA",
			"code": "50446"
		  }
		]
	  },
	  {
		"radlexId": "RID36455",
		"description": "left temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID36453",
		"rightId": "RID36454",
		"codes": [
		  {
			"system": "FMA",
			"code": "50447"
		  }
		]
	  },
	  {
		"radlexId": "RID34446",
		"description": "superficial cerebral vein",
		"containedById": "RID9196",
		"leftId": "RID34446_RID5824",
		"rightId": "RID34446_RID5825",
		"synonyms": [
		  "cortical cerebral vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50982"
		  }
		]
	  },
	  {
		"radlexId": "RID34446_RID5824",
		"description": "left superficial cerebral vein",
		"containedById": "RID9196",
		"unsidedId": "RID34446",
		"rightId": "RID34446_RID5825"
	  },
	  {
		"radlexId": "RID34446_RID5825",
		"description": "right superficial cerebral vein",
		"containedById": "RID9196",
		"unsidedId": "RID34446",
		"leftId": "RID34446_RID5824"
	  },
	  {
		"radlexId": "RID36152",
		"description": "inferior cerebral vein",
		"containedById": "RID6391",
		"leftId": "RID36152_RID5824",
		"rightId": "RID36152_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50986"
		  },
		  {
			"system": "SNOMED",
			"code": "72468004"
		  }
		]
	  },
	  {
		"radlexId": "RID36152_RID5824",
		"description": "left inferior cerebral vein",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID36152",
		"rightId": "RID36152_RID5825"
	  },
	  {
		"radlexId": "RID36152_RID5825",
		"description": "right inferior cerebral vein",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID36152",
		"leftId": "RID36152_RID5824"
	  },
	  {
		"radlexId": "RID1124",
		"description": "superficial middle cerebral vein",
		"containedById": "RID6381_RID6434",
		"leftId": "RID36103",
		"rightId": "RID36102",
		"synonyms": [
		  "vena media superficialis cerebri",
		  "vena media superficialis cerebri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50983"
		  },
		  {
			"system": "SNOMED",
			"code": "28195005"
		  }
		]
	  },
	  {
		"radlexId": "RID36102",
		"description": "right superficial middle cerebral vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1124",
		"leftId": "RID36103",
		"codes": [
		  {
			"system": "FMA",
			"code": "50984"
		  }
		]
	  },
	  {
		"radlexId": "RID36103",
		"description": "left superficial middle cerebral vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1124",
		"rightId": "RID36102",
		"codes": [
		  {
			"system": "FMA",
			"code": "50985"
		  }
		]
	  },
	  {
		"radlexId": "RID36164",
		"description": "deep middle cerebral vein",
		"containedById": "RID6391",
		"leftId": "RID36166",
		"rightId": "RID36165",
		"synonyms": [
		  "vena media profunda cerebri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51309"
		  },
		  {
			"system": "SNOMED",
			"code": "23540009"
		  }
		]
	  },
	  {
		"radlexId": "RID36165",
		"description": "right deep middle cerebral vein",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID36164",
		"leftId": "RID36166",
		"codes": [
		  {
			"system": "FMA",
			"code": "51311"
		  }
		]
	  },
	  {
		"radlexId": "RID36166",
		"description": "left deep middle cerebral vein",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID36164",
		"rightId": "RID36165",
		"codes": [
		  {
			"system": "FMA",
			"code": "51310"
		  }
		]
	  },
	  {
		"radlexId": "RID36147",
		"description": "superior anastomotic vein",
		"containedById": "RID9196",
		"leftId": "RID36149",
		"rightId": "RID36148",
		"synonyms": [
		  "vena anastomotica superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51238"
		  },
		  {
			"system": "SNOMED",
			"code": "8133004"
		  }
		]
	  },
	  {
		"radlexId": "RID36148",
		"description": "right superior anastomotic vein",
		"containedById": "RID9196",
		"unsidedId": "RID36147",
		"leftId": "RID36149",
		"codes": [
		  {
			"system": "FMA",
			"code": "51240"
		  }
		]
	  },
	  {
		"radlexId": "RID36149",
		"description": "left superior anastomotic vein",
		"containedById": "RID9196",
		"unsidedId": "RID36147",
		"rightId": "RID36148",
		"codes": [
		  {
			"system": "FMA",
			"code": "51241"
		  }
		]
	  },
	  {
		"radlexId": "RID36150",
		"description": "right inferior anastomotic vein",
		"containedById": "RID9196",
		"leftId": "RID36151",
		"codes": [
		  {
			"system": "FMA",
			"code": "51242"
		  }
		]
	  },
	  {
		"radlexId": "RID36151",
		"description": "left inferior anastomotic vein",
		"containedById": "RID9196",
		"rightId": "RID36150",
		"codes": [
		  {
			"system": "FMA",
			"code": "51243"
		  }
		]
	  },
	  {
		"radlexId": "RID36153",
		"description": "vein of uncus",
		"containedById": "RID6381_RID6434",
		"leftId": "RID36155",
		"rightId": "RID36154",
		"synonyms": [
		  "vena uncalis",
		  "uncus vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51288"
		  },
		  {
			"system": "SNOMED",
			"code": "369365002"
		  }
		]
	  },
	  {
		"radlexId": "RID36154",
		"description": "vein of right uncus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36153",
		"leftId": "RID36155",
		"synonyms": [
		  "right uncus vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51297"
		  }
		]
	  },
	  {
		"radlexId": "RID36155",
		"description": "vein of left uncus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36153",
		"rightId": "RID36154",
		"synonyms": [
		  "left uncus vein"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51298"
		  }
		]
	  },
	  {
		"radlexId": "RID36161",
		"description": "anterior cerebral vein",
		"containedById": "RID6381_RID6434",
		"leftId": "RID36163",
		"rightId": "RID36162",
		"codes": [
		  {
			"system": "FMA",
			"code": "51306"
		  },
		  {
			"system": "SNOMED",
			"code": "55155007"
		  }
		]
	  },
	  {
		"radlexId": "RID36162",
		"description": "right anterior cerebral vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36161",
		"leftId": "RID36163",
		"codes": [
		  {
			"system": "FMA",
			"code": "51307"
		  }
		]
	  },
	  {
		"radlexId": "RID36163",
		"description": "left anterior cerebral vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36161",
		"rightId": "RID36162",
		"codes": [
		  {
			"system": "FMA",
			"code": "51308"
		  }
		]
	  },
	  {
		"radlexId": "RID1142",
		"description": "internal cerebral vein",
		"containedById": "RID6391",
		"leftId": "RID36191",
		"rightId": "RID36190",
		"codes": [
		  {
			"system": "FMA",
			"code": "51003"
		  },
		  {
			"system": "SNOMED",
			"code": "78776006"
		  }
		]
	  },
	  {
		"radlexId": "RID36190",
		"description": "right internal cerebral vein",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID1142",
		"leftId": "RID36191",
		"codes": [
		  {
			"system": "FMA",
			"code": "51004"
		  }
		]
	  },
	  {
		"radlexId": "RID36191",
		"description": "left internal cerebral vein",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID1142",
		"rightId": "RID36190",
		"codes": [
		  {
			"system": "FMA",
			"code": "51005"
		  }
		]
	  },
	  {
		"radlexId": "RID1132",
		"description": "great cerebral vein",
		"containedById": "RID6677",
		"leftId": "RID36189",
		"rightId": "RID36188",
		"synonyms": [
		  "vein of Galen",
		  "vena magna cerebri",
		  "vena magna cerebri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50993"
		  },
		  {
			"system": "SNOMED",
			"code": "56341001"
		  }
		]
	  },
	  {
		"radlexId": "RID36188",
		"description": "right great cerebral vein",
		"containedById": "RID6677",
		"unsidedId": "RID1132",
		"leftId": "RID36189",
		"codes": [
		  {
			"system": "FMA",
			"code": "50994"
		  }
		]
	  },
	  {
		"radlexId": "RID36189",
		"description": "left great cerebral vein",
		"containedById": "RID6677",
		"unsidedId": "RID1132",
		"rightId": "RID36188",
		"codes": [
		  {
			"system": "FMA",
			"code": "50995"
		  }
		]
	  },
	  {
		"radlexId": "RID1152",
		"description": "basal vein",
		"containedById": "RID6381_RID6434",
		"leftId": "RID36160",
		"rightId": "RID36159",
		"synonyms": [
		  "vena basalis",
		  "posterior mesencephalic vein",
		  "rosenthal vein",
		  "basal vein of Rosenthal",
		  "Vena basalis Rosenthal"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50990"
		  },
		  {
			"system": "SNOMED",
			"code": "10992007"
		  }
		]
	  },
	  {
		"radlexId": "RID36159",
		"description": "right basal vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1152",
		"leftId": "RID36160",
		"codes": [
		  {
			"system": "FMA",
			"code": "50991"
		  }
		]
	  },
	  {
		"radlexId": "RID36160",
		"description": "left basal vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1152",
		"rightId": "RID36159",
		"codes": [
		  {
			"system": "FMA",
			"code": "50992"
		  }
		]
	  },
	  {
		"radlexId": "RID36674",
		"description": "superior cerebellar vein",
		"containedById": "RID6381_RID6434",
		"leftId": "RID36676",
		"rightId": "RID36675",
		"codes": [
		  {
			"system": "FMA",
			"code": "51232"
		  },
		  {
			"system": "SNOMED",
			"code": "369377007"
		  }
		]
	  },
	  {
		"radlexId": "RID36675",
		"description": "right superior cerebellar vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36674",
		"leftId": "RID36676",
		"codes": [
		  {
			"system": "FMA",
			"code": "52452"
		  }
		]
	  },
	  {
		"radlexId": "RID36676",
		"description": "left superior cerebellar vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36674",
		"rightId": "RID36675",
		"codes": [
		  {
			"system": "FMA",
			"code": "52476"
		  }
		]
	  },
	  {
		"radlexId": "RID36677",
		"description": "inferior cerebellar vein",
		"containedById": "RID6381_RID6434",
		"leftId": "RID36679",
		"rightId": "RID36678",
		"codes": [
		  {
			"system": "FMA",
			"code": "51233"
		  },
		  {
			"system": "SNOMED",
			"code": "369378002"
		  }
		]
	  },
	  {
		"radlexId": "RID36678",
		"description": "right inferior cerebellar vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36677",
		"leftId": "RID36679",
		"codes": [
		  {
			"system": "FMA",
			"code": "52450"
		  }
		]
	  },
	  {
		"radlexId": "RID36679",
		"description": "left inferior cerebellar vein",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID36677",
		"rightId": "RID36678",
		"codes": [
		  {
			"system": "FMA",
			"code": "52451"
		  }
		]
	  },
	  {
		"radlexId": "RID1127",
		"description": "superior sagittal sinus",
		"containedById": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "50767"
		  },
		  {
			"system": "SNOMED",
			"code": "24773008"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.908.224.667"
		  }
		]
	  },
	  {
		"radlexId": "RID1131",
		"description": "inferior sagittal sinus",
		"containedById": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "50768"
		  },
		  {
			"system": "SNOMED",
			"code": "33886005"
		  }
		]
	  },
	  {
		"radlexId": "RID1129",
		"description": "straight sinus",
		"containedById": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "50769"
		  },
		  {
			"system": "SNOMED",
			"code": "38745009"
		  }
		]
	  },
	  {
		"radlexId": "RID1122",
		"description": "transverse sinus",
		"containedById": "RID6381_RID6434",
		"leftId": "RID1122_RID5824",
		"rightId": "RID1122_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50763"
		  },
		  {
			"system": "SNOMED",
			"code": "28448002"
		  }
		]
	  },
	  {
		"radlexId": "RID1122_RID5824",
		"description": "left transverse sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1122",
		"rightId": "RID1122_RID5825"
	  },
	  {
		"radlexId": "RID1122_RID5825",
		"description": "right transverse sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1122",
		"leftId": "RID1122_RID5824"
	  },
	  {
		"radlexId": "RID1092",
		"description": "sigmoid sinus",
		"containedById": "RID6381_RID6434",
		"leftId": "RID1092_RID5824",
		"rightId": "RID1092_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50782"
		  },
		  {
			"system": "SNOMED",
			"code": "54110006"
		  }
		]
	  },
	  {
		"radlexId": "RID1092_RID5824",
		"description": "left sigmoid sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1092",
		"rightId": "RID1092_RID5825"
	  },
	  {
		"radlexId": "RID1092_RID5825",
		"description": "right sigmoid sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1092",
		"leftId": "RID1092_RID5824"
	  },
	  {
		"radlexId": "RID1094",
		"description": "cavernous sinus",
		"containedById": "RID6392",
		"leftId": "RID1094_RID5824",
		"rightId": "RID1094_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50772"
		  },
		  {
			"system": "SNOMED",
			"code": "18782006"
		  },
		  {
			"system": "MESH",
			"code": "A07.015.908.224.334"
		  }
		]
	  },
	  {
		"radlexId": "RID1094_RID5824",
		"description": "left cavernous sinus",
		"containedById": "RID6392_RID5824",
		"unsidedId": "RID1094",
		"rightId": "RID1094_RID5825"
	  },
	  {
		"radlexId": "RID1094_RID5825",
		"description": "right cavernous sinus",
		"containedById": "RID6392_RID5825",
		"unsidedId": "RID1094",
		"leftId": "RID1094_RID5824"
	  },
	  {
		"radlexId": "RID1119",
		"description": "sphenoparietal sinus",
		"containedById": "RID6392",
		"leftId": "RID1119_RID5824",
		"rightId": "RID1119_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50776"
		  },
		  {
			"system": "SNOMED",
			"code": "6608009"
		  }
		]
	  },
	  {
		"radlexId": "RID1119_RID5824",
		"description": "left sphenoparietal sinus",
		"containedById": "RID6392_RID5824",
		"unsidedId": "RID1119",
		"rightId": "RID1119_RID5825"
	  },
	  {
		"radlexId": "RID1119_RID5825",
		"description": "right sphenoparietal sinus",
		"containedById": "RID6392_RID5825",
		"unsidedId": "RID1119",
		"leftId": "RID1119_RID5824"
	  },
	  {
		"radlexId": "RID1121",
		"description": "superior petrosal sinus",
		"containedById": "RID6381_RID6434",
		"leftId": "RID1121_RID5824",
		"rightId": "RID1121_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50771"
		  },
		  {
			"system": "SNOMED",
			"code": "52066009"
		  }
		]
	  },
	  {
		"radlexId": "RID1121_RID5824",
		"description": "left superior petrosal sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1121",
		"rightId": "RID1121_RID5825"
	  },
	  {
		"radlexId": "RID1121_RID5825",
		"description": "right superior petrosal sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1121",
		"leftId": "RID1121_RID5824"
	  },
	  {
		"radlexId": "RID1093",
		"description": "inferior petrosal sinus",
		"containedById": "RID6381_RID6434",
		"leftId": "RID1093_RID5824",
		"rightId": "RID1093_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "50770"
		  },
		  {
			"system": "SNOMED",
			"code": "57657004"
		  }
		]
	  },
	  {
		"radlexId": "RID1093_RID5824",
		"description": "left inferior petrosal sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1093",
		"rightId": "RID1093_RID5825"
	  },
	  {
		"radlexId": "RID1093_RID5825",
		"description": "right inferior petrosal sinus",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID1093",
		"leftId": "RID1093_RID5824"
	  },
	  {
		"radlexId": "RID1126",
		"description": "occipital sinus",
		"containedById": "RID6381_RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "50781"
		  },
		  {
			"system": "SNOMED",
			"code": "48917006"
		  }
		]
	  },
	  {
		"radlexId": "RID39320",
		"description": "anterior intercavernous sinus",
		"containedById": "RID6392",
		"synonyms": [
		  "anterior cavernous sinus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50774"
		  },
		  {
			"system": "SNOMED",
			"code": "26747001"
		  }
		]
	  },
	  {
		"radlexId": "RID39321",
		"description": "posterior intercavernous sinus",
		"containedById": "RID6392",
		"synonyms": [
		  "posterior cavernous sinus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50775"
		  },
		  {
			"system": "SNOMED",
			"code": "8546004"
		  }
		]
	  },
	  {
		"radlexId": "RID1095",
		"description": "superior ophthalmic vein",
		"containedById": "RID9725",
		"leftId": "RID36056",
		"rightId": "RID36055",
		"synonyms": [
		  "vena ophthalmica superior",
		  "vena ophthalmica superior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51246"
		  },
		  {
			"system": "SNOMED",
			"code": "82509000"
		  }
		]
	  },
	  {
		"radlexId": "RID36055",
		"description": "right superior ophthalmic vein",
		"containedById": "RID9725_RID5825",
		"unsidedId": "RID1095",
		"leftId": "RID36056",
		"codes": [
		  {
			"system": "FMA",
			"code": "51248"
		  }
		]
	  },
	  {
		"radlexId": "RID36056",
		"description": "left superior ophthalmic vein",
		"containedById": "RID9725_RID5824",
		"unsidedId": "RID1095",
		"rightId": "RID36055",
		"codes": [
		  {
			"system": "FMA",
			"code": "51249"
		  }
		]
	  },
	  {
		"radlexId": "RID1117",
		"description": "inferior ophthalmic vein",
		"containedById": "RID9725",
		"leftId": "RID36101",
		"rightId": "RID36100",
		"synonyms": [
		  "vena ophthalmica inferior",
		  "vena ophthalmica inferior"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "51247"
		  },
		  {
			"system": "SNOMED",
			"code": "81117001"
		  }
		]
	  },
	  {
		"radlexId": "RID36100",
		"description": "right inferior ophthalmic vein",
		"containedById": "RID9725_RID5825",
		"unsidedId": "RID1117",
		"leftId": "RID36101",
		"codes": [
		  {
			"system": "FMA",
			"code": "51250"
		  }
		]
	  },
	  {
		"radlexId": "RID36101",
		"description": "left inferior ophthalmic vein",
		"containedById": "RID9725_RID5824",
		"unsidedId": "RID1117",
		"rightId": "RID36100",
		"codes": [
		  {
			"system": "FMA",
			"code": "51251"
		  }
		]
	  },
	  {
		"radlexId": "RID9912",
		"description": "temporalis muscle",
		"containedById": "RID13284",
		"leftId": "RID9912_RID5824",
		"rightId": "RID9912_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49006"
		  },
		  {
			"system": "SNOMED",
			"code": "52927003"
		  },
		  {
			"system": "UMLS",
			"code": "C0039487"
		  }
		]
	  },
	  {
		"radlexId": "RID9912_RID5824",
		"description": "left temporalis muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9912",
		"rightId": "RID9912_RID5825"
	  },
	  {
		"radlexId": "RID9912_RID5825",
		"description": "right temporalis muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9912",
		"leftId": "RID9912_RID5824"
	  },
	  {
		"radlexId": "RID9908",
		"description": "masseter muscle",
		"containedById": "RID13284",
		"leftId": "RID9908_RID5824",
		"rightId": "RID9908_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "48996"
		  },
		  {
			"system": "SNOMED",
			"code": "79368004"
		  },
		  {
			"system": "MESH",
			"code": "A02.633.567.600.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0024876"
		  }
		]
	  },
	  {
		"radlexId": "RID9908_RID5824",
		"description": "left masseter muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9908",
		"rightId": "RID9908_RID5825"
	  },
	  {
		"radlexId": "RID9908_RID5825",
		"description": "right masseter muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9908",
		"leftId": "RID9908_RID5824"
	  },
	  {
		"radlexId": "RID9911",
		"description": "medial pterygoid muscle",
		"containedById": "RID13284",
		"leftId": "RID9911_RID5824",
		"rightId": "RID9911_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49011"
		  },
		  {
			"system": "SNOMED",
			"code": "85002005"
		  }
		]
	  },
	  {
		"radlexId": "RID9911_RID5824",
		"description": "left medial pterygoid muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9911",
		"rightId": "RID9911_RID5825"
	  },
	  {
		"radlexId": "RID9911_RID5825",
		"description": "right medial pterygoid muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9911",
		"leftId": "RID9911_RID5824"
	  },
	  {
		"radlexId": "RID9905",
		"description": "lateral pterygoid muscle",
		"containedById": "RID13284",
		"leftId": "RID9905_RID5824",
		"rightId": "RID9905_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49015"
		  },
		  {
			"system": "SNOMED",
			"code": "88938001"
		  }
		]
	  },
	  {
		"radlexId": "RID9905_RID5824",
		"description": "left lateral pterygoid muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9905",
		"rightId": "RID9905_RID5825"
	  },
	  {
		"radlexId": "RID9905_RID5825",
		"description": "right lateral pterygoid muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9905",
		"leftId": "RID9905_RID5824"
	  },
	  {
		"radlexId": "RID9887",
		"description": "occipitofrontalis muscle",
		"containedById": "RID9080",
		"leftId": "RID9887_RID5824",
		"rightId": "RID9887_RID5825",
		"synonyms": [
		  "epicranius muscle",
		  "occipitofrontalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "9624"
		  },
		  {
			"system": "SNOMED",
			"code": "62431001"
		  }
		]
	  },
	  {
		"radlexId": "RID9887_RID5824",
		"description": "left occipitofrontalis muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9887",
		"rightId": "RID9887_RID5825"
	  },
	  {
		"radlexId": "RID9887_RID5825",
		"description": "right occipitofrontalis muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9887",
		"leftId": "RID9887_RID5824"
	  },
	  {
		"radlexId": "RID9875",
		"description": "orbicularis oculi muscle",
		"containedById": "RID13284",
		"leftId": "RID9875_RID5824",
		"rightId": "RID9875_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46779"
		  },
		  {
			"system": "SNOMED",
			"code": "56753004"
		  }
		]
	  },
	  {
		"radlexId": "RID9875_RID5824",
		"description": "left orbicularis oculi muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9875",
		"rightId": "RID9875_RID5825"
	  },
	  {
		"radlexId": "RID9875_RID5825",
		"description": "right orbicularis oculi muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9875",
		"leftId": "RID9875_RID5824"
	  },
	  {
		"radlexId": "RID9869",
		"description": "nasalis muscle",
		"containedById": "RID13284",
		"leftId": "RID9869_RID5824",
		"rightId": "RID9869_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46770"
		  },
		  {
			"system": "SNOMED",
			"code": "82298000"
		  }
		]
	  },
	  {
		"radlexId": "RID9869_RID5824",
		"description": "left nasalis muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9869",
		"rightId": "RID9869_RID5825"
	  },
	  {
		"radlexId": "RID9869_RID5825",
		"description": "right nasalis muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9869",
		"leftId": "RID9869_RID5824"
	  },
	  {
		"radlexId": "RID9854",
		"description": "levator labii superioris muscle",
		"containedById": "RID13284",
		"leftId": "RID9854_RID5824",
		"rightId": "RID9854_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46805"
		  },
		  {
			"system": "SNOMED",
			"code": "10062000"
		  }
		]
	  },
	  {
		"radlexId": "RID9854_RID5824",
		"description": "left levator labii superioris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9854",
		"rightId": "RID9854_RID5825"
	  },
	  {
		"radlexId": "RID9854_RID5825",
		"description": "right levator labii superioris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9854",
		"leftId": "RID9854_RID5824"
	  },
	  {
		"radlexId": "RID9863",
		"description": "zygomaticus major muscle",
		"containedById": "RID13284",
		"leftId": "RID9863_RID5824",
		"rightId": "RID9863_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46810"
		  },
		  {
			"system": "SNOMED",
			"code": "80352009"
		  }
		]
	  },
	  {
		"radlexId": "RID9863_RID5824",
		"description": "left zygomaticus major muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9863",
		"rightId": "RID9863_RID5825"
	  },
	  {
		"radlexId": "RID9863_RID5825",
		"description": "right zygomaticus major muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9863",
		"leftId": "RID9863_RID5824"
	  },
	  {
		"radlexId": "RID9864",
		"description": "zygomaticus minor muscle",
		"containedById": "RID13284",
		"leftId": "RID9864_RID5824",
		"rightId": "RID9864_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46811"
		  },
		  {
			"system": "SNOMED",
			"code": "69596008"
		  }
		]
	  },
	  {
		"radlexId": "RID9864_RID5824",
		"description": "left zygomaticus minor muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9864",
		"rightId": "RID9864_RID5825"
	  },
	  {
		"radlexId": "RID9864_RID5825",
		"description": "right zygomaticus minor muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9864",
		"leftId": "RID9864_RID5824"
	  },
	  {
		"radlexId": "RID9860",
		"description": "depressor anguli oris muscle",
		"containedById": "RID13284",
		"leftId": "RID9860_RID5824",
		"rightId": "RID9860_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46828"
		  },
		  {
			"system": "SNOMED",
			"code": "21040006"
		  }
		]
	  },
	  {
		"radlexId": "RID9860_RID5824",
		"description": "left depressor anguli oris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9860",
		"rightId": "RID9860_RID5825"
	  },
	  {
		"radlexId": "RID9860_RID5825",
		"description": "right depressor anguli oris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9860",
		"leftId": "RID9860_RID5824"
	  },
	  {
		"radlexId": "RID9867",
		"description": "mentalis muscle",
		"containedById": "RID13284",
		"leftId": "RID9867_RID5824",
		"rightId": "RID9867_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46825"
		  },
		  {
			"system": "SNOMED",
			"code": "65930000"
		  }
		]
	  },
	  {
		"radlexId": "RID9867_RID5824",
		"description": "left mentalis muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9867",
		"rightId": "RID9867_RID5825"
	  },
	  {
		"radlexId": "RID9867_RID5825",
		"description": "right mentalis muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9867",
		"leftId": "RID9867_RID5824"
	  },
	  {
		"radlexId": "RID9853",
		"description": "depressor labii inferior muscle",
		"containedById": "RID13284",
		"leftId": "RID9853_RID5824",
		"rightId": "RID9853_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46816"
		  },
		  {
			"system": "SNOMED",
			"code": "77172000"
		  }
		]
	  },
	  {
		"radlexId": "RID9853_RID5824",
		"description": "left depressor labii inferior muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9853",
		"rightId": "RID9853_RID5825"
	  },
	  {
		"radlexId": "RID9853_RID5825",
		"description": "right depressor labii inferior muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9853",
		"leftId": "RID9853_RID5824"
	  },
	  {
		"radlexId": "RID9866",
		"description": "buccinator muscle",
		"containedById": "RID13284",
		"leftId": "RID9866_RID5824",
		"rightId": "RID9866_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46834"
		  },
		  {
			"system": "SNOMED",
			"code": "71249002"
		  }
		]
	  },
	  {
		"radlexId": "RID9866_RID5824",
		"description": "left buccinator muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9866",
		"rightId": "RID9866_RID5825"
	  },
	  {
		"radlexId": "RID9866_RID5825",
		"description": "right buccinator muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9866",
		"leftId": "RID9866_RID5824"
	  },
	  {
		"radlexId": "RID9857",
		"description": "orbicularis oris muscle",
		"containedById": "RID13284",
		"codes": [
		  {
			"system": "FMA",
			"code": "46841"
		  },
		  {
			"system": "SNOMED",
			"code": "66977000"
		  }
		]
	  },
	  {
		"radlexId": "RID9862",
		"description": "risoris muscle",
		"containedById": "RID13284",
		"leftId": "RID9862_RID5824",
		"rightId": "RID9862_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46838"
		  },
		  {
			"system": "SNOMED",
			"code": "89602001"
		  }
		]
	  },
	  {
		"radlexId": "RID9862_RID5824",
		"description": "left risoris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9862",
		"rightId": "RID9862_RID5825"
	  },
	  {
		"radlexId": "RID9862_RID5825",
		"description": "right risoris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9862",
		"leftId": "RID9862_RID5824"
	  },
	  {
		"radlexId": "RID9881",
		"description": "depressor supercilii muscle",
		"containedById": "RID13284",
		"leftId": "RID9881_RID5824",
		"rightId": "RID9881_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46798"
		  },
		  {
			"system": "SNOMED",
			"code": "88465000"
		  }
		]
	  },
	  {
		"radlexId": "RID9881_RID5824",
		"description": "left depressor supercilii muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9881",
		"rightId": "RID9881_RID5825"
	  },
	  {
		"radlexId": "RID9881_RID5825",
		"description": "right depressor supercilii muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9881",
		"leftId": "RID9881_RID5824"
	  },
	  {
		"radlexId": "RID9880",
		"description": "corrugator supercilii muscle",
		"containedById": "RID13284",
		"leftId": "RID9880_RID5824",
		"rightId": "RID9880_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46794"
		  },
		  {
			"system": "SNOMED",
			"code": "88011006"
		  }
		]
	  },
	  {
		"radlexId": "RID9880_RID5824",
		"description": "left corrugator supercilii muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9880",
		"rightId": "RID9880_RID5825"
	  },
	  {
		"radlexId": "RID9880_RID5825",
		"description": "right corrugator supercilii muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9880",
		"leftId": "RID9880_RID5824"
	  },
	  {
		"radlexId": "RID9873",
		"description": "procerus muscle",
		"containedById": "RID13284",
		"codes": [
		  {
			"system": "FMA",
			"code": "46769"
		  },
		  {
			"system": "SNOMED",
			"code": "75220003"
		  }
		]
	  },
	  {
		"radlexId": "RID9855",
		"description": "levator labii superioris alaeque nasi muscle",
		"containedById": "RID13284",
		"leftId": "RID9855_RID5824",
		"rightId": "RID9855_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46802"
		  },
		  {
			"system": "SNOMED",
			"code": "49147000"
		  }
		]
	  },
	  {
		"radlexId": "RID9855_RID5824",
		"description": "left levator labii superioris alaeque nasi muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9855",
		"rightId": "RID9855_RID5825"
	  },
	  {
		"radlexId": "RID9855_RID5825",
		"description": "right levator labii superioris alaeque nasi muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9855",
		"leftId": "RID9855_RID5824"
	  },
	  {
		"radlexId": "RID9706",
		"description": "superior oblique muscle",
		"containedById": "RID9573",
		"leftId": "RID9706_RID5824",
		"rightId": "RID9706_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49039"
		  },
		  {
			"system": "SNOMED",
			"code": "66041005"
		  }
		]
	  },
	  {
		"radlexId": "RID9706_RID5824",
		"description": "left superior oblique muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9706",
		"rightId": "RID9706_RID5825"
	  },
	  {
		"radlexId": "RID9706_RID5825",
		"description": "right superior oblique muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9706",
		"leftId": "RID9706_RID5824"
	  },
	  {
		"radlexId": "RID9701",
		"description": "superior rectus muscle",
		"containedById": "RID9573",
		"leftId": "RID9701_RID5824",
		"rightId": "RID9701_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49035"
		  },
		  {
			"system": "SNOMED",
			"code": "5815008"
		  }
		]
	  },
	  {
		"radlexId": "RID9701_RID5824",
		"description": "left superior rectus muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9701",
		"rightId": "RID9701_RID5825"
	  },
	  {
		"radlexId": "RID9701_RID5825",
		"description": "right superior rectus muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9701",
		"leftId": "RID9701_RID5824"
	  },
	  {
		"radlexId": "RID9702",
		"description": "inferior rectus muscle",
		"containedById": "RID9573",
		"leftId": "RID9702_RID5824",
		"rightId": "RID9702_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49036"
		  },
		  {
			"system": "SNOMED",
			"code": "47869003"
		  }
		]
	  },
	  {
		"radlexId": "RID9702_RID5824",
		"description": "left inferior rectus muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9702",
		"rightId": "RID9702_RID5825"
	  },
	  {
		"radlexId": "RID9702_RID5825",
		"description": "right inferior rectus muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9702",
		"leftId": "RID9702_RID5824"
	  },
	  {
		"radlexId": "RID9703",
		"description": "medial rectus muscle",
		"containedById": "RID9573",
		"leftId": "RID9703_RID5824",
		"rightId": "RID9703_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49037"
		  },
		  {
			"system": "SNOMED",
			"code": "24937009"
		  }
		]
	  },
	  {
		"radlexId": "RID9703_RID5824",
		"description": "left medial rectus muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9703",
		"rightId": "RID9703_RID5825"
	  },
	  {
		"radlexId": "RID9703_RID5825",
		"description": "right medial rectus muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9703",
		"leftId": "RID9703_RID5824"
	  },
	  {
		"radlexId": "RID9704",
		"description": "lateral rectus muscle",
		"containedById": "RID9573",
		"leftId": "RID9704_RID5824",
		"rightId": "RID9704_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49038"
		  },
		  {
			"system": "SNOMED",
			"code": "31836009"
		  }
		]
	  },
	  {
		"radlexId": "RID9704_RID5824",
		"description": "left lateral rectus muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9704",
		"rightId": "RID9704_RID5825"
	  },
	  {
		"radlexId": "RID9704_RID5825",
		"description": "right lateral rectus muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9704",
		"leftId": "RID9704_RID5824"
	  },
	  {
		"radlexId": "RID9709",
		"description": "inferior oblique muscle",
		"containedById": "RID9573",
		"leftId": "RID9709_RID5824",
		"rightId": "RID9709_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49040"
		  },
		  {
			"system": "SNOMED",
			"code": "57516003"
		  }
		]
	  },
	  {
		"radlexId": "RID9709_RID5824",
		"description": "left inferior oblique muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9709",
		"rightId": "RID9709_RID5825"
	  },
	  {
		"radlexId": "RID9709_RID5825",
		"description": "right inferior oblique muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9709",
		"leftId": "RID9709_RID5824"
	  },
	  {
		"radlexId": "RID9707",
		"description": "trochlea of superior oblique muscle",
		"containedById": "RID9573",
		"leftId": "RID9707_RID5824",
		"rightId": "RID9707_RID5825"
	  },
	  {
		"radlexId": "RID9707_RID5824",
		"description": "left trochlea of superior oblique muscle",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9707",
		"rightId": "RID9707_RID5825"
	  },
	  {
		"radlexId": "RID9707_RID5825",
		"description": "right trochlea of superior oblique muscle",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9707",
		"leftId": "RID9707_RID5824"
	  },
	  {
		"radlexId": "RID9718",
		"description": "common tendinous ring of extraocular muscles",
		"containedById": "RID9573",
		"leftId": "RID9718_RID5824",
		"rightId": "RID9718_RID5825",
		"synonyms": [
		  "common tendinous ring"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "49071"
		  }
		]
	  },
	  {
		"radlexId": "RID9718_RID5824",
		"description": "left common tendinous ring of extraocular muscles",
		"containedById": "RID9573_RID5824",
		"unsidedId": "RID9718",
		"rightId": "RID9718_RID5825"
	  },
	  {
		"radlexId": "RID9718_RID5825",
		"description": "right common tendinous ring of extraocular muscles",
		"containedById": "RID9573_RID5825",
		"unsidedId": "RID9718",
		"leftId": "RID9718_RID5824"
	  },
	  {
		"radlexId": "RID9900",
		"description": "superior longitudinal muscle of tongue",
		"containedById": "RID9080",
		"leftId": "RID9900_RID5824",
		"rightId": "RID9900_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46693"
		  },
		  {
			"system": "SNOMED",
			"code": "31318000"
		  }
		]
	  },
	  {
		"radlexId": "RID9900_RID5824",
		"description": "left superior longitudinal muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9900",
		"rightId": "RID9900_RID5825"
	  },
	  {
		"radlexId": "RID9900_RID5825",
		"description": "right superior longitudinal muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9900",
		"leftId": "RID9900_RID5824"
	  },
	  {
		"radlexId": "RID9901",
		"description": "inferior longitudinal muscle of tongue",
		"containedById": "RID9080",
		"leftId": "RID9901_RID5824",
		"rightId": "RID9901_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46694"
		  },
		  {
			"system": "SNOMED",
			"code": "1122009"
		  }
		]
	  },
	  {
		"radlexId": "RID9901_RID5824",
		"description": "left inferior longitudinal muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9901",
		"rightId": "RID9901_RID5825"
	  },
	  {
		"radlexId": "RID9901_RID5825",
		"description": "right inferior longitudinal muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9901",
		"leftId": "RID9901_RID5824"
	  },
	  {
		"radlexId": "RID9902",
		"description": "transverse muscle of tongue",
		"containedById": "RID9080",
		"leftId": "RID9902_RID5824",
		"rightId": "RID9902_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46695"
		  },
		  {
			"system": "SNOMED",
			"code": "53123009"
		  }
		]
	  },
	  {
		"radlexId": "RID9902_RID5824",
		"description": "left transverse muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9902",
		"rightId": "RID9902_RID5825"
	  },
	  {
		"radlexId": "RID9902_RID5825",
		"description": "right transverse muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9902",
		"leftId": "RID9902_RID5824"
	  },
	  {
		"radlexId": "RID9894",
		"description": "genioglossus muscle",
		"containedById": "RID9080",
		"leftId": "RID9894_RID5824",
		"rightId": "RID9894_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46690"
		  },
		  {
			"system": "SNOMED",
			"code": "37507008"
		  }
		]
	  },
	  {
		"radlexId": "RID9894_RID5824",
		"description": "left genioglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9894",
		"rightId": "RID9894_RID5825"
	  },
	  {
		"radlexId": "RID9894_RID5825",
		"description": "right genioglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9894",
		"leftId": "RID9894_RID5824"
	  },
	  {
		"radlexId": "RID9895",
		"description": "hyoglossus muscle",
		"containedById": "RID9080",
		"leftId": "RID9895_RID5824",
		"rightId": "RID9895_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46691"
		  },
		  {
			"system": "SNOMED",
			"code": "44335003"
		  }
		]
	  },
	  {
		"radlexId": "RID9895_RID5824",
		"description": "left hyoglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9895",
		"rightId": "RID9895_RID5825"
	  },
	  {
		"radlexId": "RID9895_RID5825",
		"description": "right hyoglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9895",
		"leftId": "RID9895_RID5824"
	  },
	  {
		"radlexId": "RID9896",
		"description": "chondroglossus muscle",
		"containedById": "RID9080",
		"leftId": "RID9896_RID5824",
		"rightId": "RID9896_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46700"
		  },
		  {
			"system": "SNOMED",
			"code": "43104006"
		  }
		]
	  },
	  {
		"radlexId": "RID9896_RID5824",
		"description": "left chondroglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9896",
		"rightId": "RID9896_RID5825"
	  },
	  {
		"radlexId": "RID9896_RID5825",
		"description": "right chondroglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9896",
		"leftId": "RID9896_RID5824"
	  },
	  {
		"radlexId": "RID9897",
		"description": "ceratoglossus muscle",
		"containedById": "RID9080",
		"leftId": "RID9897_RID5824",
		"rightId": "RID9897_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46720"
		  }
		]
	  },
	  {
		"radlexId": "RID9897_RID5824",
		"description": "left ceratoglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9897",
		"rightId": "RID9897_RID5825"
	  },
	  {
		"radlexId": "RID9897_RID5825",
		"description": "right ceratoglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9897",
		"leftId": "RID9897_RID5824"
	  },
	  {
		"radlexId": "RID9898",
		"description": "styloglossus muscle",
		"containedById": "RID7488",
		"leftId": "RID9898_RID5824",
		"rightId": "RID9898_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46692"
		  },
		  {
			"system": "SNOMED",
			"code": "30206001"
		  }
		]
	  },
	  {
		"radlexId": "RID9898_RID5824",
		"description": "left styloglossus muscle",
		"containedById": "RID7488",
		"unsidedId": "RID9898",
		"rightId": "RID9898_RID5825"
	  },
	  {
		"radlexId": "RID9898_RID5825",
		"description": "right styloglossus muscle",
		"containedById": "RID7488",
		"unsidedId": "RID9898",
		"leftId": "RID9898_RID5824"
	  },
	  {
		"radlexId": "RID9899",
		"description": "palatoglossus muscle",
		"containedById": "RID9080",
		"leftId": "RID9899_RID5824",
		"rightId": "RID9899_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46697"
		  },
		  {
			"system": "SNOMED",
			"code": "26296007"
		  }
		]
	  },
	  {
		"radlexId": "RID9899_RID5824",
		"description": "left palatoglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9899",
		"rightId": "RID9899_RID5825"
	  },
	  {
		"radlexId": "RID9899_RID5825",
		"description": "right palatoglossus muscle",
		"containedById": "RID9080",
		"unsidedId": "RID9899",
		"leftId": "RID9899_RID5824"
	  },
	  {
		"radlexId": "RID9903",
		"description": "vertical muscle of tongue",
		"containedById": "RID9080",
		"leftId": "RID9903_RID5824",
		"rightId": "RID9903_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "46696"
		  },
		  {
			"system": "SNOMED",
			"code": "41575008"
		  }
		]
	  },
	  {
		"radlexId": "RID9903_RID5824",
		"description": "left vertical muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9903",
		"rightId": "RID9903_RID5825"
	  },
	  {
		"radlexId": "RID9903_RID5825",
		"description": "right vertical muscle of tongue",
		"containedById": "RID9080",
		"unsidedId": "RID9903",
		"leftId": "RID9903_RID5824"
	  },
	  {
		"radlexId": "RID9710",
		"description": "levator palpebrae superioris muscle",
		"containedById": "RID13284",
		"leftId": "RID9710_RID5824",
		"rightId": "RID9710_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49041"
		  },
		  {
			"system": "SNOMED",
			"code": "58641002"
		  }
		]
	  },
	  {
		"radlexId": "RID9710_RID5824",
		"description": "left levator palpebrae superioris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9710",
		"rightId": "RID9710_RID5825"
	  },
	  {
		"radlexId": "RID9710_RID5825",
		"description": "right levator palpebrae superioris muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9710",
		"leftId": "RID9710_RID5824"
	  },
	  {
		"radlexId": "RID9750",
		"description": "superior tarsal muscle",
		"containedById": "RID13284",
		"leftId": "RID9750_RID5824",
		"rightId": "RID9750_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49058"
		  },
		  {
			"system": "SNOMED",
			"code": "71497004"
		  }
		]
	  },
	  {
		"radlexId": "RID9750_RID5824",
		"description": "left superior tarsal muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9750",
		"rightId": "RID9750_RID5825"
	  },
	  {
		"radlexId": "RID9750_RID5825",
		"description": "right superior tarsal muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9750",
		"leftId": "RID9750_RID5824"
	  },
	  {
		"radlexId": "RID9751",
		"description": "inferior tarsal muscle",
		"containedById": "RID13284",
		"leftId": "RID9751_RID5824",
		"rightId": "RID9751_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49059"
		  },
		  {
			"system": "SNOMED",
			"code": "38440003"
		  }
		]
	  },
	  {
		"radlexId": "RID9751_RID5824",
		"description": "left inferior tarsal muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9751",
		"rightId": "RID9751_RID5825"
	  },
	  {
		"radlexId": "RID9751_RID5825",
		"description": "right inferior tarsal muscle",
		"containedById": "RID13284",
		"unsidedId": "RID9751",
		"leftId": "RID9751_RID5824"
	  },
	  {
		"radlexId": "RID39003",
		"description": "sublingual gland",
		"containedById": "RID7540",
		"leftId": "RID39005",
		"rightId": "RID39004",
		"synonyms": [
		  "glandula sublingualis",
		  "rivinus' gland"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "59791"
		  },
		  {
			"system": "SNOMED",
			"code": "88481005"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.500.760.687"
		  }
		]
	  },
	  {
		"radlexId": "RID39004",
		"description": "right sublingual gland",
		"containedById": "RID7540",
		"unsidedId": "RID39003",
		"leftId": "RID39005",
		"codes": [
		  {
			"system": "FMA",
			"code": "59804"
		  },
		  {
			"system": "SNOMED",
			"code": "81831003"
		  }
		]
	  },
	  {
		"radlexId": "RID39005",
		"description": "left sublingual gland",
		"containedById": "RID7540",
		"unsidedId": "RID39003",
		"rightId": "RID39004",
		"codes": [
		  {
			"system": "FMA",
			"code": "59805"
		  },
		  {
			"system": "SNOMED",
			"code": "64303008"
		  }
		]
	  },
	  {
		"radlexId": "RID9968",
		"description": "submandibular gland",
		"containedById": "RID7540",
		"leftId": "RID39007",
		"rightId": "RID39006",
		"synonyms": [
		  "glandula submandibularis",
		  "glandula submandibularis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "55093"
		  },
		  {
			"system": "SNOMED",
			"code": "385296007"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.500.760.812"
		  },
		  {
			"system": "UMLS",
			"code": "C0038556"
		  }
		]
	  },
	  {
		"radlexId": "RID39006",
		"description": "right submandibular gland",
		"containedById": "RID7540",
		"unsidedId": "RID9968",
		"leftId": "RID39007",
		"codes": [
		  {
			"system": "FMA",
			"code": "59802"
		  },
		  {
			"system": "SNOMED",
			"code": "91590006"
		  }
		]
	  },
	  {
		"radlexId": "RID39007",
		"description": "left submandibular gland",
		"containedById": "RID7540",
		"unsidedId": "RID9968",
		"rightId": "RID39006",
		"codes": [
		  {
			"system": "FMA",
			"code": "59803"
		  },
		  {
			"system": "SNOMED",
			"code": "48065005"
		  }
		]
	  },
	  {
		"radlexId": "RID28744",
		"description": "parotid gland",
		"containedById": "RID7540",
		"leftId": "RID38999",
		"rightId": "RID38998",
		"synonyms": [
		  "glandula parotidea",
		  "parotid"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "59790"
		  },
		  {
			"system": "SNOMED",
			"code": "45289007"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.500.760.464"
		  }
		]
	  },
	  {
		"radlexId": "RID38998",
		"description": "right parotid gland",
		"containedById": "RID7540",
		"unsidedId": "RID28744",
		"leftId": "RID38999",
		"codes": [
		  {
			"system": "FMA",
			"code": "59797"
		  },
		  {
			"system": "SNOMED",
			"code": "85706002"
		  }
		]
	  },
	  {
		"radlexId": "RID38999",
		"description": "left parotid gland",
		"containedById": "RID7540",
		"unsidedId": "RID28744",
		"rightId": "RID38998",
		"codes": [
		  {
			"system": "FMA",
			"code": "59798"
		  },
		  {
			"system": "SNOMED",
			"code": "44178003"
		  }
		]
	  },
	  {
		"radlexId": "RID9989",
		"description": "retromolar trigone",
		"containedById": "RID7540",
		"leftId": "RID9989_RID5824",
		"rightId": "RID9989_RID5825"
	  },
	  {
		"radlexId": "RID9989_RID5824",
		"description": "left retromolar trigone",
		"containedById": "RID7540",
		"unsidedId": "RID9989",
		"rightId": "RID9989_RID5825"
	  },
	  {
		"radlexId": "RID9989_RID5825",
		"description": "right retromolar trigone",
		"containedById": "RID7540",
		"unsidedId": "RID9989",
		"leftId": "RID9989_RID5824"
	  },
	  {
		"radlexId": "RID9196",
		"description": "skull",
		"containedById": "RID9080",
		"synonyms": [
		  "calvarium",
		  "cranium"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "89546000"
		  },
		  {
			"system": "UMLS",
			"code": "C0037303"
		  }
		]
	  },
	  {
		"radlexId": "RID28731",
		"description": "base of cranium",
		"containedById": "RID9196",
		"synonyms": [
		  "cranial base",
		  "basicranium",
		  "skull base",
		  "base of skull"
		]
	  },
	  {
		"radlexId": "RID9919",
		"description": "scalp",
		"containedById": "RID9080",
		"codes": [
		  {
			"system": "UMLS",
			"code": "C0036270"
		  }
		]
	  },
	  {
		"radlexId": "RID9805",
		"description": "coronal suture",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52928"
		  },
		  {
			"system": "SNOMED",
			"code": "29012004"
		  },
		  {
			"system": "UMLS",
			"code": "C0224527"
		  }
		]
	  },
	  {
		"radlexId": "RID9806",
		"description": "sagittal suture",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52929"
		  },
		  {
			"system": "SNOMED",
			"code": "29012004"
		  },
		  {
			"system": "UMLS",
			"code": "C0224526"
		  }
		]
	  },
	  {
		"radlexId": "RID9807",
		"description": "lambdoid suture",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52933"
		  },
		  {
			"system": "SNOMED",
			"code": "32170006"
		  },
		  {
			"system": "UMLS",
			"code": "C0224528"
		  }
		]
	  },
	  {
		"radlexId": "RID10148",
		"description": "petrosquamous suture",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"synonyms": [
		  "petrosquamosal suture",
		  "petrosquamosal fissure",
		  "petrosquamous fissure"
		]
	  },
	  {
		"radlexId": "RID9814",
		"description": "metopic suture",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"synonyms": [
		  "frontal suture"
		]
	  },
	  {
		"radlexId": "RID28599",
		"description": "zygomatic arch",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"synonyms": [
		  "zyg arch"
		]
	  },
	  {
		"radlexId": "RID9590",
		"description": "superior orbital fissure",
		"containedById": "RID9080",
		"leftId": "RID9590_RID5824",
		"rightId": "RID9590_RID5825",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "54799"
		  },
		  {
			"system": "SNOMED",
			"code": "66394008"
		  },
		  {
			"system": "UMLS",
			"code": "C0222686"
		  }
		]
	  },
	  {
		"radlexId": "RID9590_RID5824",
		"description": "left superior orbital fissure",
		"containedById": "RID9080",
		"unsidedId": "RID9590",
		"rightId": "RID9590_RID5825",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9590_RID5825",
		"description": "right superior orbital fissure",
		"containedById": "RID9080",
		"unsidedId": "RID9590",
		"leftId": "RID9590_RID5824",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9591",
		"description": "inferior orbital fissure",
		"containedById": "RID9080",
		"leftId": "RID9591_RID5824",
		"rightId": "RID9591_RID5825",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "54802"
		  },
		  {
			"system": "SNOMED",
			"code": "30862007"
		  },
		  {
			"system": "UMLS",
			"code": "C0230063"
		  }
		]
	  },
	  {
		"radlexId": "RID9591_RID5824",
		"description": "left inferior orbital fissure",
		"containedById": "RID9080",
		"unsidedId": "RID9591",
		"rightId": "RID9591_RID5825",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9591_RID5825",
		"description": "right inferior orbital fissure",
		"containedById": "RID9080",
		"unsidedId": "RID9591",
		"leftId": "RID9591_RID5824",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9779",
		"description": "temporomandibular joint",
		"containedById": "RID9080",
		"leftId": "RID9779_RID5824",
		"rightId": "RID9779_RID5825",
		"synonyms": [
		  "TMJ"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "54832"
		  },
		  {
			"system": "SNOMED",
			"code": "53620006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.583.861 | A14.907"
		  },
		  {
			"system": "UMLS",
			"code": "C0039493"
		  }
		]
	  },
	  {
		"radlexId": "RID9779_RID5824",
		"description": "left temporomandibular joint",
		"containedById": "RID9080",
		"unsidedId": "RID9779",
		"rightId": "RID9779_RID5825"
	  },
	  {
		"radlexId": "RID9779_RID5825",
		"description": "right temporomandibular joint",
		"containedById": "RID9080",
		"unsidedId": "RID9779",
		"leftId": "RID9779_RID5824"
	  },
	  {
		"radlexId": "RID9361",
		"description": "temporal bone",
		"containedById": "RID9196",
		"leftId": "RID9361_RID5824",
		"rightId": "RID9361_RID5825",
		"partOfId": "RID9196",
		"synonyms": [
		  "temp bone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52737"
		  },
		  {
			"system": "SNOMED",
			"code": "60911003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.885"
		  },
		  {
			"system": "UMLS",
			"code": "C0039484"
		  }
		]
	  },
	  {
		"radlexId": "RID9361_RID5824",
		"description": "left temporal bone",
		"containedById": "RID9196",
		"unsidedId": "RID9361",
		"rightId": "RID9361_RID5825",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9361_RID5825",
		"description": "right temporal bone",
		"containedById": "RID9196",
		"unsidedId": "RID9361",
		"leftId": "RID9361_RID5824",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9470",
		"description": "nasal bone",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52745"
		  },
		  {
			"system": "SNOMED",
			"code": "74386004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.324.665 | A04.531.378"
		  },
		  {
			"system": "UMLS",
			"code": "C0027422"
		  }
		]
	  },
	  {
		"radlexId": "RID9199",
		"description": "ethmoid bone",
		"containedById": "RID28731",
		"partOfId": "RID9196",
		"synonyms": [
		  "ethmoid"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52740"
		  },
		  {
			"system": "SNOMED",
			"code": "52374004"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.292"
		  },
		  {
			"system": "UMLS",
			"code": "C0015027"
		  }
		]
	  },
	  {
		"radlexId": "RID9202",
		"description": "crista galli",
		"containedById": "RID9199",
		"partOfId": "RID9199"
	  },
	  {
		"radlexId": "RID9458",
		"description": "zygomatic bone",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52747"
		  },
		  {
			"system": "SNOMED",
			"code": "13881006"
		  },
		  {
			"system": "UMLS",
			"code": "C0043539"
		  }
		]
	  },
	  {
		"radlexId": "RID9207",
		"description": "frontal bone",
		"containedById": "RID28731",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52734"
		  },
		  {
			"system": "SNOMED",
			"code": "74872008"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.375"
		  },
		  {
			"system": "UMLS",
			"code": "C0016732"
		  }
		]
	  },
	  {
		"radlexId": "RID9330",
		"description": "occipital bone",
		"containedById": "RID28731",
		"partOfId": "RID9196"
	  },
	  {
		"radlexId": "RID9281",
		"description": "sphenoid bone",
		"containedById": "RID28731",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52736"
		  },
		  {
			"system": "SNOMED",
			"code": "73117003"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.802"
		  },
		  {
			"system": "UMLS",
			"code": "C0037884"
		  }
		]
	  },
	  {
		"radlexId": "RID9332",
		"description": "clivus",
		"containedById": "RID9281",
		"partOfId": "RID9281"
	  },
	  {
		"radlexId": "RID9471",
		"description": "lacrimal bone",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "52741"
		  },
		  {
			"system": "SNOMED",
			"code": "6229007"
		  },
		  {
			"system": "UMLS",
			"code": "C0222733"
		  }
		]
	  },
	  {
		"radlexId": "RID9280",
		"description": "parietal bone",
		"containedById": "RID9080",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "9613"
		  },
		  {
			"system": "SNOMED",
			"code": "24924006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.651"
		  },
		  {
			"system": "UMLS",
			"code": "C0030558"
		  }
		]
	  },
	  {
		"radlexId": "RID9236",
		"description": "maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "9711"
		  },
		  {
			"system": "SNOMED",
			"code": "24924006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.324.502.645 | A14.521.645"
		  },
		  {
			"system": "UMLS",
			"code": "C0024947"
		  }
		]
	  },
	  {
		"radlexId": "RID9082",
		"description": "mandible",
		"containedById": "RID13284",
		"codes": [
		  {
			"system": "FMA",
			"code": "52748"
		  },
		  {
			"system": "SNOMED",
			"code": "91609006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.324.502.632 | A14.521.632"
		  },
		  {
			"system": "UMLS",
			"code": "C0024687"
		  }
		]
	  },
	  {
		"radlexId": "RID28576",
		"description": "mandibular rami",
		"containedById": "RID13284",
		"partOfId": "RID9082"
	  },
	  {
		"radlexId": "RID9083",
		"description": "body of mandible",
		"containedById": "RID13284",
		"partOfId": "RID9082",
		"synonyms": [
		  "mandible body",
		  "mandibular body"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52827"
		  },
		  {
			"system": "SNOMED",
			"code": "11048003"
		  },
		  {
			"system": "UMLS",
			"code": "C0222746"
		  }
		]
	  },
	  {
		"radlexId": "RID9110",
		"description": "condyle of mandible",
		"containedById": "RID13284",
		"partOfId": "RID9082",
		"synonyms": [
		  "condyloid process of mandible",
		  "condylar process of mandible",
		  "mandibular condyle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "59331"
		  },
		  {
			"system": "SNOMED",
			"code": "67183008"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.324.502.632.600 | A14.521.632.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0024688"
		  }
		]
	  },
	  {
		"radlexId": "RID9115",
		"description": "coronoid process of mandible",
		"containedById": "RID13284",
		"partOfId": "RID9082",
		"codes": [
		  {
			"system": "FMA",
			"code": "52833"
		  },
		  {
			"system": "SNOMED",
			"code": "124002"
		  },
		  {
			"system": "UMLS",
			"code": "C0222752"
		  }
		]
	  },
	  {
		"radlexId": "RID9578",
		"description": "supraorbital margin",
		"containedById": "RID9080",
		"partOfId": "RID9207",
		"synonyms": [
		  "supra-orbital margin l supraorbital ridge"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52833"
		  },
		  {
			"system": "SNOMED",
			"code": "54472000"
		  },
		  {
			"system": "UMLS",
			"code": "C0222695"
		  }
		]
	  },
	  {
		"radlexId": "RID9364",
		"description": "mastoid process of temporal bone",
		"containedById": "RID9080",
		"partOfId": "RID9361",
		"synonyms": [
		  "mastoid process"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "59066005"
		  }
		]
	  },
	  {
		"radlexId": "RID9415",
		"description": "styloid process of temporal bone",
		"containedById": "RID9080",
		"partOfId": "RID9361",
		"synonyms": [
		  "styloid"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52877"
		  },
		  {
			"system": "SNOMED",
			"code": "73115006"
		  },
		  {
			"system": "UMLS",
			"code": "C0222714"
		  }
		]
	  },
	  {
		"radlexId": "RID9286",
		"description": "sella turcica",
		"containedById": "RID9281",
		"partOfId": "RID9281",
		"synonyms": [
		  "pituitary fossa",
		  "sella"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "54709"
		  },
		  {
			"system": "SNOMED",
			"code": "42575006"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.802.662"
		  },
		  {
			"system": "UMLS",
			"code": "C0036609"
		  }
		]
	  },
	  {
		"radlexId": "RID9335",
		"description": "foramen magnum",
		"containedById": "RID9330",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "75306"
		  },
		  {
			"system": "SNOMED",
			"code": "24532009"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.572.434"
		  },
		  {
			"system": "UMLS",
			"code": "C0016519"
		  }
		]
	  },
	  {
		"radlexId": "RID9501",
		"description": "jugular foramen",
		"containedById": "RID9196",
		"partOfId": "RID9196",
		"codes": [
		  {
			"system": "FMA",
			"code": "56432"
		  },
		  {
			"system": "SNOMED",
			"code": "42209000"
		  },
		  {
			"system": "MESH",
			"code": "A01.456.830.200.500 | A02.835.232.781.750.400.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0222712"
		  }
		]
	  },
	  {
		"radlexId": "RID9262",
		"description": "palatine process of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"codes": [
		  {
			"system": "FMA",
			"code": "52896"
		  },
		  {
			"system": "SNOMED",
			"code": "63231007"
		  },
		  {
			"system": "UMLS",
			"code": "C0222742"
		  }
		]
	  },
	  {
		"radlexId": "RID9246",
		"description": "anterior nasal spine of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"codes": [
		  {
			"system": "FMA",
			"code": "75770"
		  },
		  {
			"system": "SNOMED",
			"code": "767496007"
		  },
		  {
			"system": "UMLS",
			"code": "C1184907"
		  }
		]
	  },
	  {
		"radlexId": "RID9247",
		"description": "zygomaticomaxillary suture of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"synonyms": [
		  "zygomaticomaxillary suture",
		  "Sutura zygomaticomaxillaris der Maxilla"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52953"
		  },
		  {
			"system": "SNOMED",
			"code": "22054000"
		  },
		  {
			"system": "UMLS",
			"code": "C0224546"
		  }
		]
	  },
	  {
		"radlexId": "RID9248",
		"description": "infratemporal fossa of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"synonyms": [
		  "infratemporal fossa"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "75308"
		  },
		  {
			"system": "SNOMED",
			"code": "69541002"
		  },
		  {
			"system": "MESH",
			"code": "A01.456.830.600 | A02.835.232.781.750.700"
		  },
		  {
			"system": "UMLS",
			"code": "C0230011"
		  }
		]
	  },
	  {
		"radlexId": "RID9252",
		"description": "nasal surface of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"codes": [
		  {
			"system": "FMA",
			"code": "57703"
		  },
		  {
			"system": "UMLS",
			"code": "C0929078"
		  }
		]
	  },
	  {
		"radlexId": "RID9261",
		"description": "zygomatic process of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"codes": [
		  {
			"system": "FMA",
			"code": "52895"
		  },
		  {
			"system": "SNOMED",
			"code": "23224007"
		  },
		  {
			"system": "UMLS",
			"code": "C0222741"
		  }
		]
	  },
	  {
		"radlexId": "RID9271",
		"description": "alveolar part of maxilla",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"synonyms": [
		  "alveolar process of maxilla",
		  "alveolar ridge of maxilla"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "52897"
		  },
		  {
			"system": "UMLS",
			"code": "C0932532"
		  }
		]
	  },
	  {
		"radlexId": "RID9320",
		"description": "pterygoid fossa",
		"containedById": "RID13284",
		"partOfId": "RID9236",
		"codes": [
		  {
			"system": "FMA",
			"code": "84970"
		  },
		  {
			"system": "UMLS",
			"code": "C0926735"
		  }
		]
	  },
	  {
		"radlexId": "RID9298",
		"description": "optic canal",
		"containedById": "RID9281",
		"codes": [
		  {
			"system": "FMA",
			"code": "54774"
		  },
		  {
			"system": "SNOMED",
			"code": "55024004"
		  },
		  {
			"system": "UMLS",
			"code": "C0450102"
		  }
		]
	  },
	  {
		"radlexId": "RID7091",
		"description": "meningeal cluster",
		"containedById": "RID9196",
		"synonyms": [
		  "meninges",
		  "brain covering",
		  "cluster of meninges"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "231572"
		  },
		  {
			"system": "UMLS",
			"code": "C2332324"
		  }
		]
	  },
	  {
		"radlexId": "RID7527",
		"description": "hyoid bone",
		"containedById": "RID7488",
		"codes": [
		  {
			"system": "FMA",
			"code": "52749"
		  },
		  {
			"system": "SNOMED",
			"code": "21387005"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.409"
		  },
		  {
			"system": "UMLS",
			"code": "C0020417"
		  }
		]
	  },
	  {
		"radlexId": "RID9510",
		"description": "pterygopalatine fossa",
		"containedById": "RID13284",
		"codes": [
		  {
			"system": "FMA",
			"code": "75309"
		  },
		  {
			"system": "SNOMED",
			"code": "35375001"
		  },
		  {
			"system": "MESH",
			"code": "A02.835.232.781.670"
		  },
		  {
			"system": "UMLS",
			"code": "C0230039"
		  }
		]
	  },
	  {
		"radlexId": "RID9316",
		"description": "pterygoid process of sphenoid bone",
		"containedById": "RID9080",
		"partOfId": "RID9281",
		"codes": [
		  {
			"system": "FMA",
			"code": "54682"
		  },
		  {
			"system": "SNOMED",
			"code": "68751009"
		  },
		  {
			"system": "UMLS",
			"code": "C0222730"
		  }
		]
	  },
	  {
		"radlexId": "RID6434",
		"description": "brain",
		"containedById": "RID6383_RID9080",
		"synonyms": [
		  "encephalon",
		  "gehirn"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50801"
		  },
		  {
			"system": "SNOMED",
			"code": "12738006"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211"
		  },
		  {
			"system": "UMLS",
			"code": "C0006104"
		  }
		]
	  },
	  {
		"radlexId": "RID6389_RID6434",
		"description": "supratentorial brain",
		"containedById": "RID6383_RID9080",
		"partOfId": "RID6434"
	  },
	  {
		"radlexId": "RID6381_RID6434",
		"description": "infratentorial brain",
		"containedById": "RID6383_RID9080",
		"partOfId": "RID6434"
	  },
	  {
		"radlexId": "RID6677",
		"description": "brainstem",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6434",
		"synonyms": [
		  "truncus encephali",
		  "truncus encephali"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "79876"
		  },
		  {
			"system": "SNOMED",
			"code": "15926001"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.132"
		  },
		  {
			"system": "UMLS",
			"code": "C0006121"
		  }
		]
	  },
	  {
		"radlexId": "RID6768",
		"description": "midbrain",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6677",
		"synonyms": [
		  "mesencephalon",
		  "mesencephali"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61993"
		  },
		  {
			"system": "SNOMED",
			"code": "61962009"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.132.659"
		  },
		  {
			"system": "UMLS",
			"code": "C0025462"
		  }
		]
	  },
	  {
		"radlexId": "RID6728",
		"description": "pons",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6677",
		"synonyms": [
		  "pons of Varolius",
		  "pons Varolii",
		  "pontine"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "67943"
		  },
		  {
			"system": "SNOMED",
			"code": "49557009"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.132.810.428.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0032639"
		  }
		]
	  },
	  {
		"radlexId": "RID6781",
		"description": "midbrain tectum",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6768",
		"synonyms": [
		  "neuraxis tectum",
		  "tectum of midbrain",
		  "tectum of mesencephali"
		]
	  },
	  {
		"radlexId": "RID6770",
		"description": "peduncle of midbrain",
		"containedById": "RID6381_RID6434",
		"leftId": "RID34069",
		"rightId": "RID34068",
		"partOfId": "RID6768",
		"synonyms": [
		  "pedunculus cerebri",
		  "pedunculi cerebri",
		  "cerebral peduncle",
		  "pedunculi cerebri",
		  "midbrain peduncle"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "62394"
		  },
		  {
			"system": "SNOMED",
			"code": "36159002"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.132.659.413"
		  },
		  {
			"system": "UMLS",
			"code": "C0007793"
		  }
		]
	  },
	  {
		"radlexId": "RID34068",
		"description": "right cerebral peduncle",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6770",
		"leftId": "RID34069",
		"partOfId": "RID6768",
		"codes": [
		  {
			"system": "FMA",
			"code": "278580"
		  },
		  {
			"system": "UMLS",
			"code": "C4254429"
		  }
		]
	  },
	  {
		"radlexId": "RID34069",
		"description": "left cerebral peduncle",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6770",
		"rightId": "RID34068",
		"partOfId": "RID6768",
		"codes": [
		  {
			"system": "FMA",
			"code": "278582"
		  },
		  {
			"system": "UMLS",
			"code": "C4254428"
		  }
		]
	  },
	  {
		"radlexId": "RID6681",
		"description": "medulla oblongata",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6677",
		"codes": [
		  {
			"system": "FMA",
			"code": "62004"
		  },
		  {
			"system": "SNOMED",
			"code": "26519002"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.132.810.591.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0025148"
		  }
		]
	  },
	  {
		"radlexId": "RID14141",
		"description": "right side of medulla oblongata",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6681",
		"codes": [
		  {
			"system": "FMA",
			"code": "271155"
		  },
		  {
			"system": "UMLS",
			"code": "C2951635"
		  }
		]
	  },
	  {
		"radlexId": "RID14142",
		"description": "left side of medulla oblongata",
		"containedById": "RID6381_RID6434",
		"partOfId": "RID6681",
		"codes": [
		  {
			"system": "FMA",
			"code": "271157"
		  },
		  {
			"system": "UMLS",
			"code": "C2950368"
		  }
		]
	  },
	  {
		"radlexId": "RID6815",
		"description": "cerebellum",
		"containedById": "RID6381_RID6434",
		"synonyms": [
		  "epencephalon-1"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "67944"
		  },
		  {
			"system": "SNOMED",
			"code": "113305005"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.132.810.428.200"
		  },
		  {
			"system": "UMLS",
			"code": "C0007765"
		  }
		]
	  },
	  {
		"radlexId": "RID7196",
		"description": "great auricular nerve",
		"containedById": "RID9080",
		"leftId": "RID27709",
		"rightId": "RID27708",
		"synonyms": [
		  "greater auricular nerve",
		  "nervus auricularis magnus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "6872"
		  },
		  {
			"system": "SNOMED",
			"code": "43279006"
		  },
		  {
			"system": "UMLS",
			"code": "C1744553"
		  }
		]
	  },
	  {
		"radlexId": "RID27708",
		"description": "right great auricular nerve",
		"containedById": "RID9080",
		"unsidedId": "RID7196",
		"leftId": "RID27709",
		"codes": [
		  {
			"system": "FMA",
			"code": "55155"
		  },
		  {
			"system": "UMLS",
			"code": "C0926898"
		  }
		]
	  },
	  {
		"radlexId": "RID27709",
		"description": "left great auricular nerve",
		"containedById": "RID9080",
		"unsidedId": "RID7196",
		"rightId": "RID27708",
		"codes": [
		  {
			"system": "FMA",
			"code": "55156"
		  },
		  {
			"system": "UMLS",
			"code": "C0934464"
		  }
		]
	  },
	  {
		"radlexId": "RID7449",
		"description": "lesser occipital nerve",
		"containedById": "RID9080",
		"leftId": "RID23088",
		"rightId": "RID23087",
		"synonyms": [
		  "nervus occipitalis minor"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "6871"
		  },
		  {
			"system": "SNOMED",
			"code": "75998006"
		  },
		  {
			"system": "UMLS",
			"code": "C4763249"
		  }
		]
	  },
	  {
		"radlexId": "RID23087",
		"description": "right lesser occipital nerve",
		"containedById": "RID9080",
		"unsidedId": "RID7449",
		"leftId": "RID23088",
		"codes": [
		  {
			"system": "FMA",
			"code": "65388"
		  },
		  {
			"system": "UMLS",
			"code": "C0932761"
		  }
		]
	  },
	  {
		"radlexId": "RID23088",
		"description": "left lesser occipital nerve",
		"containedById": "RID9080",
		"unsidedId": "RID7449",
		"rightId": "RID23087",
		"codes": [
		  {
			"system": "FMA",
			"code": "65389"
		  },
		  {
			"system": "UMLS",
			"code": "C0932762"
		  }
		]
	  },
	  {
		"radlexId": "RID726",
		"description": "superficial temporal artery",
		"containedById": "RID13284",
		"leftId": "RID726_RID5824",
		"rightId": "RID726_RID5825",
		"codes": [
		  {
			"system": "FMA",
			"code": "49650"
		  },
		  {
			"system": "SNOMED",
			"code": "15672000"
		  },
		  {
			"system": "UMLS",
			"code": "C0226130"
		  }
		]
	  },
	  {
		"radlexId": "RID726_RID5824",
		"description": "left superficial temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID726",
		"rightId": "RID726_RID5825"
	  },
	  {
		"radlexId": "RID726_RID5825",
		"description": "right superficial temporal artery",
		"containedById": "RID13284",
		"unsidedId": "RID726",
		"leftId": "RID726_RID5824"
	  },
	  {
		"radlexId": "RID718",
		"description": "posterior auricular artery",
		"containedById": "RID13284",
		"codes": [
		  {
			"system": "FMA",
			"code": "49624"
		  },
		  {
			"system": "SNOMED",
			"code": "20360001"
		  },
		  {
			"system": "UMLS",
			"code": "C0226125"
		  }
		]
	  },
	  {
		"radlexId": "RID15522",
		"description": "zone of adenohypophysis",
		"containedById": "RID6537",
		"partOfId": "RID38674",
		"synonyms": [
		  "subdivision of anterior lobe of pituitary gland",
		  "adenohypophysis zone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "74629"
		  },
		  {
			"system": "SNOMED",
			"code": "62818001"
		  },
		  {
			"system": "MESH",
			"code": "A06.300.747.500 | A06.688.357.750.500 | A08.186.211.180.497.352.435.500.500 | A08.186.211.200.317.357.352.435.500.500 | A08.713.357.750.500"
		  },
		  {
			"system": "UMLS",
			"code": "C1184197"
		  }
		]
	  },
	  {
		"radlexId": "RID15527",
		"description": "zone of neurohypophysis",
		"containedById": "RID6537",
		"partOfId": "RID38674",
		"synonyms": [
		  "subdivision of posterior lobe of pituitary gland",
		  "neurohypophysis zone"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "74633"
		  },
		  {
			"system": "SNOMED",
			"code": "37512009"
		  },
		  {
			"system": "MESH",
			"code": "A06.300.747.875 | A06.688.178.875 | A06.688.357.750.875 | A08.186.211.180.497.352.435.500.875 | A08.186.211.200.317.357.352.435.500.875 | A08.713.049.875 | A08.713.357.750.875"
		  },
		  {
			"system": "UMLS",
			"code": "C1184201"
		  }
		]
	  },
	  {
		"radlexId": "RID9940",
		"description": "bony palate",
		"containedById": "RID9938",
		"synonyms": [
		  "hard palate"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "59857"
		  },
		  {
			"system": "UMLS",
			"code": "C0930593"
		  }
		]
	  },
	  {
		"radlexId": "RID9942",
		"description": "soft palate",
		"containedById": "RID9938",
		"codes": [
		  {
			"system": "FMA",
			"code": "55021"
		  },
		  {
			"system": "SNOMED",
			"code": "49460000"
		  },
		  {
			"system": "MESH",
			"code": "A14.549.617.780"
		  },
		  {
			"system": "UMLS",
			"code": "C0030219"
		  }
		]
	  },
	  {
		"radlexId": "RID9970",
		"description": "tongue",
		"containedById": "RID9938",
		"codes": [
		  {
			"system": "FMA",
			"code": "54640"
		  },
		  {
			"system": "SNOMED",
			"code": "49460000"
		  },
		  {
			"system": "MESH",
			"code": "A03.556.500.885 | A14.549.885"
		  },
		  {
			"system": "UMLS",
			"code": "C0040408"
		  }
		]
	  },
	  {
		"radlexId": "RID7094",
		"description": "falx cerebri",
		"containedById": "RID9196",
		"partOfId": "RID7091",
		"synonyms": [
		  "cerebral falx"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "83967"
		  },
		  {
			"system": "SNOMED",
			"code": "80401008"
		  },
		  {
			"system": "UMLS",
			"code": "C0228120"
		  }
		]
	  },
	  {
		"radlexId": "RID6641",
		"description": "optic chiasm",
		"containedById": "RID6391",
		"synonyms": [
		  "optic chiasma",
		  "decussation of optic nerve fibers",
		  "chiasma nervorum opticorum",
		  "chiasma",
		  "chiasma opticum",
		  "chiasma"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "62045"
		  },
		  {
			"system": "SNOMED",
			"code": "244453006"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.317.578 | A08.800.800.120.680.600"
		  },
		  {
			"system": "UMLS",
			"code": "C0029126"
		  }
		]
	  },
	  {
		"radlexId": "RID22696",
		"description": "optic tract",
		"containedById": "RID6393",
		"leftId": "RID22698",
		"rightId": "RID22697",
		"synonyms": [
		  "tractus opticus",
		  "optic lemniscus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "62046"
		  },
		  {
			"system": "SNOMED",
			"code": "53238003"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.317.689"
		  },
		  {
			"system": "UMLS",
			"code": "C0152405"
		  }
		]
	  },
	  {
		"radlexId": "RID22697",
		"description": "right optic tract",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID22696",
		"leftId": "RID22698",
		"codes": [
		  {
			"system": "FMA",
			"code": "62382"
		  },
		  {
			"system": "SNOMED",
			"code": "736419004"
		  },
		  {
			"system": "UMLS",
			"code": "C1179137"
		  }
		]
	  },
	  {
		"radlexId": "RID22698",
		"description": "left optic tract",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID22696",
		"rightId": "RID22697",
		"codes": [
		  {
			"system": "FMA",
			"code": "67936"
		  },
		  {
			"system": "SNOMED",
			"code": "736418007"
		  },
		  {
			"system": "UMLS",
			"code": "C1180364"
		  }
		]
	  },
	  {
		"radlexId": "RID12003",
		"description": "optic nerve",
		"containedById": "RID9725",
		"leftId": "RID22695",
		"rightId": "RID22694",
		"synonyms": [
		  "cranial nerve II",
		  "nervus opticus [II]",
		  "optic nerve [II]",
		  "nervus opticus",
		  "nerve II",
		  "CN II"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "50863"
		  },
		  {
			"system": "SNOMED",
			"code": "18234004"
		  },
		  {
			"system": "MESH",
			"code": "A08.800.800.120.680"
		  },
		  {
			"system": "UMLS",
			"code": "C0029130"
		  }
		]
	  },
	  {
		"radlexId": "RID22694",
		"description": "right optic nerve",
		"containedById": "RID9725_RID5825",
		"unsidedId": "RID12003",
		"leftId": "RID22695",
		"codes": [
		  {
			"system": "FMA",
			"code": "50875"
		  },
		  {
			"system": "SNOMED",
			"code": "724380004"
		  },
		  {
			"system": "UMLS",
			"code": "C0923926"
		  }
		]
	  },
	  {
		"radlexId": "RID22695",
		"description": "left optic nerve",
		"containedById": "RID9725_RID5824",
		"unsidedId": "RID12003",
		"rightId": "RID22694",
		"codes": [
		  {
			"system": "FMA",
			"code": "50878"
		  },
		  {
			"system": "SNOMED",
			"code": "724379002"
		  },
		  {
			"system": "UMLS",
			"code": "C0923928"
		  }
		]
	  },
	  {
		"radlexId": "RID6523",
		"description": "mammillary body",
		"containedById": "RID6537",
		"leftId": "RID26777",
		"rightId": "RID26776",
		"synonyms": [
		  "corpus mamillaris",
		  "corpus mammillare",
		  "corpus mamillare",
		  "mamillary body",
		  "corpus mamillare",
		  "corpus mammillare"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "74877"
		  },
		  {
			"system": "SNOMED",
			"code": "39803005"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.180.497.362.500 | A08.186.211.200.317.357.362.500"
		  },
		  {
			"system": "UMLS",
			"code": "C0024670"
		  }
		]
	  },
	  {
		"radlexId": "RID26776",
		"description": "right mammillary body",
		"containedById": "RID6537",
		"unsidedId": "RID6523",
		"leftId": "RID26777",
		"codes": [
		  {
			"system": "FMA",
			"code": "273252"
		  },
		  {
			"system": "UMLS",
			"code": "C2953290"
		  }
		]
	  },
	  {
		"radlexId": "RID26777",
		"description": "left mammillary body",
		"containedById": "RID6537",
		"unsidedId": "RID6523",
		"rightId": "RID26776",
		"codes": [
		  {
			"system": "FMA",
			"code": "273254"
		  },
		  {
			"system": "UMLS",
			"code": "C2950123"
		  }
		]
	  },
	  {
		"radlexId": "RID49873",
		"description": "set of teeth",
		"containedById": "RID9938",
		"synonyms": [
		  "teeth"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "314001"
		  }
		]
	  },
	  {
		"radlexId": "RID6440",
		"description": "frontal lobe",
		"containedById": "RID6391",
		"leftId": "RID13863",
		"rightId": "RID13862",
		"partOfId": "RID6434",
		"synonyms": [
		  "regio frontalis",
		  "lobus frontalis",
		  "frontal cortex",
		  "frontal region",
		  "lobus frontalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61824"
		  },
		  {
			"system": "SNOMED",
			"code": "83251001"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.287.500.270"
		  },
		  {
			"system": "UMLS",
			"code": "C0016733"
		  }
		]
	  },
	  {
		"radlexId": "RID13862",
		"description": "right frontal lobe",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID6440",
		"leftId": "RID13863",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72969"
		  },
		  {
			"system": "SNOMED",
			"code": "15046008"
		  },
		  {
			"system": "UMLS",
			"code": "C0228193"
		  }
		]
	  },
	  {
		"radlexId": "RID13863",
		"description": "left frontal lobe",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID6440",
		"rightId": "RID13862",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72970"
		  },
		  {
			"system": "SNOMED",
			"code": "74298007"
		  },
		  {
			"system": "UMLS",
			"code": "C0228194"
		  }
		]
	  },
	  {
		"radlexId": "RID6493",
		"description": "parietal lobe",
		"containedById": "RID6394",
		"leftId": "RID13867",
		"rightId": "RID13866",
		"partOfId": "RID6434",
		"synonyms": [
		  "parietal cortex",
		  "parietal region",
		  "lobus parietalis",
		  "regio parietalis",
		  "regio parietalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61826"
		  },
		  {
			"system": "SNOMED",
			"code": "16630005"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.287.500.670"
		  },
		  {
			"system": "UMLS",
			"code": "C0030560"
		  }
		]
	  },
	  {
		"radlexId": "RID13866",
		"description": "right parietal lobe",
		"containedById": "RID6394_RID5825",
		"unsidedId": "RID6493",
		"leftId": "RID13867",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72973"
		  },
		  {
			"system": "SNOMED",
			"code": "47876008"
		  },
		  {
			"system": "UMLS",
			"code": "C0228207"
		  }
		]
	  },
	  {
		"radlexId": "RID13867",
		"description": "left parietal lobe",
		"containedById": "RID6394_RID5824",
		"unsidedId": "RID6493",
		"rightId": "RID13866",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72974"
		  },
		  {
			"system": "SNOMED",
			"code": "9003000"
		  },
		  {
			"system": "UMLS",
			"code": "C0228208"
		  }
		]
	  },
	  {
		"radlexId": "RID6476",
		"description": "temporal lobe",
		"containedById": "RID6392",
		"leftId": "RID13865",
		"rightId": "RID13864",
		"partOfId": "RID6434",
		"synonyms": [
		  "temp lobe",
		  "lobus temporalis",
		  "temporal cortex"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61825"
		  },
		  {
			"system": "SNOMED",
			"code": "78277001"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.287.500.863"
		  },
		  {
			"system": "UMLS",
			"code": "C0039485"
		  }
		]
	  },
	  {
		"radlexId": "RID13864",
		"description": "right temporal lobe",
		"containedById": "RID6392_RID5825",
		"unsidedId": "RID6476",
		"leftId": "RID13865",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72971"
		  },
		  {
			"system": "SNOMED",
			"code": "78029007"
		  },
		  {
			"system": "UMLS",
			"code": "C0228232"
		  }
		]
	  },
	  {
		"radlexId": "RID13865",
		"description": "left temporal lobe",
		"containedById": "RID6392_RID5824",
		"unsidedId": "RID6476",
		"rightId": "RID13864",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72972"
		  },
		  {
			"system": "SNOMED",
			"code": "52718009"
		  },
		  {
			"system": "UMLS",
			"code": "C0228233"
		  }
		]
	  },
	  {
		"radlexId": "RID6502",
		"description": "occipital lobe",
		"containedById": "RID6393",
		"leftId": "RID13869",
		"rightId": "RID13868",
		"partOfId": "RID6434",
		"synonyms": [
		  "occipital cortex",
		  "occipital region",
		  "lobus occipitalis",
		  "regio occipitalis",
		  "regio occipitalis"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "67325"
		  },
		  {
			"system": "SNOMED",
			"code": "31065004"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.287.500.571"
		  },
		  {
			"system": "UMLS",
			"code": "C0028785"
		  }
		]
	  },
	  {
		"radlexId": "RID13868",
		"description": "right occipital lobe",
		"containedById": "RID6393_RID5825",
		"unsidedId": "RID6502",
		"leftId": "RID13869",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72975"
		  },
		  {
			"system": "SNOMED",
			"code": "59144001"
		  },
		  {
			"system": "UMLS",
			"code": "C0228218"
		  }
		]
	  },
	  {
		"radlexId": "RID13869",
		"description": "left occipital lobe",
		"containedById": "RID6393_RID5824",
		"unsidedId": "RID6502",
		"rightId": "RID13868",
		"partOfId": "RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "72976"
		  },
		  {
			"system": "SNOMED",
			"code": "32373000"
		  },
		  {
			"system": "UMLS",
			"code": "C0228219"
		  }
		]
	  },
	  {
		"radlexId": "RID6537",
		"description": "set of basal ganglia",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6434",
		"synonyms": [
		  "basal ganglia"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "84013"
		  },
		  {
			"system": "SNOMED",
			"code": "32610002"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.287.249"
		  },
		  {
			"system": "UMLS",
			"code": "C0004781"
		  }
		]
	  },
	  {
		"radlexId": "RID9279",
		"description": "maxillary dental arcade",
		"containedById": "RID9938",
		"codes": [
		  {
			"system": "FMA",
			"code": "55634"
		  },
		  {
			"system": "UMLS",
			"code": "C0927216"
		  }
		]
	  },
	  {
		"radlexId": "RID9106",
		"description": "mandibular dental arcade",
		"containedById": "RID9938",
		"codes": [
		  {
			"system": "FMA",
			"code": "55635"
		  },
		  {
			"system": "UMLS",
			"code": "C0927217"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID5827_RID9127",
		"description": "right maxillary central incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID5827_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 8",
		  "tooth 8",
		  "right upper central incisor tooth",
		  ""
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "422653006"
		  },
		  {
			"system": "UMLS",
			"code": "C1827697"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID39121_RID9127",
		"description": "right maxillary lateral incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID39121_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 7",
		  "tooth 7"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "424877001"
		  },
		  {
			"system": "UMLS",
			"code": "C1828371"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID9126",
		"description": "right maxillary canine tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID9126",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 6",
		  "tooth 6",
		  "right maxillary cuspid tooth",
		  ""
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "860767006"
		  },
		  {
			"system": "UMLS",
			"code": "C5234862"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID5996_RID9129",
		"description": "right maxillary first premolar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID5996_RID9129",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 5",
		  "tooth 5",
		  "right maxillary first bicuspid tooth",
		  ""
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "57826002"
		  },
		  {
			"system": "UMLS",
			"code": "C0227038"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID5998_RID9129",
		"description": "right maxillary second premolar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID5998_RID9129",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 4",
		  "tooth 4",
		  "right maxillary second bicuspid tooth",
		  ""
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "36492000"
		  },
		  {
			"system": "UMLS",
			"code": "C0227037"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID5996_RID9128",
		"description": "right maxillary first molar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID5996_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 3",
		  "tooth 3",
		  "right maxillary 1st molar tooth",
		  ""
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "865995000"
		  },
		  {
			"system": "UMLS",
			"code": "C5234861"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID5998_RID9128",
		"description": "right maxillary second molar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID5998_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 2",
		  "tooth 2"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "863902006"
		  },
		  {
			"system": "UMLS",
			"code": "C5234882"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9279_RID6000_RID9128",
		"description": "right maxillary third molar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9279_RID6000_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 1",
		  "tooth 1",
		  "right maxillary wisdom tooth",
		  ""
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "68085002"
		  },
		  {
			"system": "UMLS",
			"code": "C0227032"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID5827_RID9127",
		"description": "left maxillary central incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID5827_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 9",
		  "tooth 9"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "424399000"
		  },
		  {
			"system": "UMLS",
			"code": "C1827264"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID39121_RID9127",
		"description": "left maxillary lateral incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID39121_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 10",
		  "tooth 10"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "423185002"
		  },
		  {
			"system": "UMLS",
			"code": "C1827422"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID9126",
		"description": "left maxillary canine tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID9126",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 11",
		  "tooth 11"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "860780009"
		  },
		  {
			"system": "UMLS",
			"code": "C5234863"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID5996_RID9129",
		"description": "left maxillary first premolar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID5996_RID9129",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 12",
		  "tooth 12"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "61897005"
		  },
		  {
			"system": "UMLS",
			"code": "C0227047"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID5998_RID9129",
		"description": "left maxillary second premolar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID5998_RID9129",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 13",
		  "tooth 13"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "23226009"
		  },
		  {
			"system": "UMLS",
			"code": "C0227048"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID5996_RID9128",
		"description": "left maxillary first molar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID5996_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 14",
		  "tooth 14"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "865988009"
		  },
		  {
			"system": "UMLS",
			"code": "C5234864"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID5998_RID9128",
		"description": "left maxillary second molar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID5998_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 15",
		  "tooth 15"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "863901004"
		  },
		  {
			"system": "UMLS",
			"code": "C5234865"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9279_RID6000_RID9128",
		"description": "left maxillary third molar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9279_RID6000_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA 16",
		  "tooth 16"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "87704003"
		  },
		  {
			"system": "UMLS",
			"code": "C0227053"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID5827_RID9127",
		"description": "right mandibular central incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID5827_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 25",
		  "tooth 25"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "424575004"
		  },
		  {
			"system": "UMLS",
			"code": "C1827665"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID39121_RID9127",
		"description": "right mandibular lateral incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID39121_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 26",
		  "tooth 26"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "423937004"
		  },
		  {
			"system": "UMLS",
			"code": "C1827730"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID9126",
		"description": "right mandibular canine tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID9126",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 27",
		  "tooth 27"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "860785004"
		  },
		  {
			"system": "UMLS",
			"code": "C5234869"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID5996_RID9129",
		"description": "right mandibular first premolar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID5996_RID9129",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 28",
		  "tooth 28"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "80140008"
		  },
		  {
			"system": "UMLS",
			"code": "C0447300"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID5998_RID9129",
		"description": "right mandibular second premolar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID5998_RID9129",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 29",
		  "tooth 29"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "8873007"
		  },
		  {
			"system": "UMLS",
			"code": "C0227070"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID5996_RID9128",
		"description": "right mandibular first molar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID5996_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 30",
		  "tooth 30"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "866005003"
		  },
		  {
			"system": "UMLS",
			"code": "C5234870"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID5998_RID9128",
		"description": "right mandibular second molar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID5998_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 31",
		  "tooth 31"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "863899008"
		  },
		  {
			"system": "UMLS",
			"code": "C5234883"
		  }
		]
	  },
	  {
		"radlexId": "RID5825_RID9106_RID6000_RID9128",
		"description": "right mandibular third molar tooth",
		"containedById": "RID9938",
		"leftId": "RID5824_RID9106_RID6000_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 32",
		  "tooth 32"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "38994002"
		  },
		  {
			"system": "UMLS",
			"code": "C0227075"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID5827_RID9127",
		"description": "left mandibular central incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID5827_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 24",
		  "tooth 24"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "425106001"
		  },
		  {
			"system": "UMLS",
			"code": "C1827384"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID39121_RID9127",
		"description": "left mandibular lateral incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID39121_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 23",
		  "tooth 23"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "423331005"
		  },
		  {
			"system": "UMLS",
			"code": "C1827807"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID9126",
		"description": "left mandibular canine tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID9126",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 22",
		  "tooth 22"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "860782001"
		  },
		  {
			"system": "UMLS",
			"code": "C5234868"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID5996_RID9129",
		"description": "left mandibular first premolar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID5996_RID9129",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 21",
		  "tooth 21"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "2400006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227060"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID5998_RID9129",
		"description": "left mandibular second premolar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID5998_RID9129",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 20",
		  "tooth 20"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "24573005"
		  },
		  {
			"system": "UMLS",
			"code": "C0227059"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID5996_RID9128",
		"description": "left mandibular first molar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID5996_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 19",
		  "tooth 19"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "866006002"
		  },
		  {
			"system": "UMLS",
			"code": "C5234867"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID5998_RID9128",
		"description": "left mandibular second molar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID5998_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 18",
		  "tooth 18"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "863898000"
		  },
		  {
			"system": "UMLS",
			"code": "C5234866"
		  }
		]
	  },
	  {
		"radlexId": "RID5824_RID9106_RID6000_RID9128",
		"description": "left mandibular third molar tooth",
		"containedById": "RID9938",
		"rightId": "RID5825_RID9106_RID6000_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA 17",
		  "tooth 17"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "74344005"
		  },
		  {
			"system": "UMLS",
			"code": "C0227054"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9279_RID5827_RID9127",
		"description": "deciduous right maxillary central incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9279_RID5827_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA E",
		  "tooth E"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "88824007"
		  },
		  {
			"system": "UMLS",
			"code": "C0227085"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9279_RID39121_RID9127",
		"description": "deciduous right maxillary lateral incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9279_RID39121_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA D",
		  "tooth D"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "65624003"
		  },
		  {
			"system": "UMLS",
			"code": "C0447233"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9279_RID9126",
		"description": "deciduous right maxillary canine tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9279_RID9126",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA C",
		  "tooth C"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "30618001"
		  },
		  {
			"system": "UMLS",
			"code": "C0447231"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9279_RID5996_RID9128",
		"description": "deciduous right maxillary first molar tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9279_RID5996_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA B",
		  "tooth B"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "17505006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227088"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9279_RID5998_RID9128",
		"description": "deciduous right maxillary second molar tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9279_RID5998_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA A",
		  "tooth A"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "27855007"
		  },
		  {
			"system": "UMLS",
			"code": "C0227089"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9279_RID5827_RID9127",
		"description": "deciduous left maxillary central incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9279_RID5827_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA F",
		  "tooth F"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "51678005"
		  },
		  {
			"system": "UMLS",
			"code": "C0457268"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9279_RID39121_RID9127",
		"description": "deciduous left maxillary lateral incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9279_RID39121_RID9127",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA G",
		  "tooth G"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "43622005"
		  },
		  {
			"system": "UMLS",
			"code": "C0447240"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9279_RID9126",
		"description": "deciduous left maxillary canine tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9279_RID9126",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA H",
		  "tooth H"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "73937000"
		  },
		  {
			"system": "UMLS",
			"code": "C0447238"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9279_RID5996_RID9128",
		"description": "deciduous left maxillary first molar tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9279_RID5996_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA I",
		  "tooth I"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "45234009"
		  },
		  {
			"system": "UMLS",
			"code": "C0227093"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9279_RID5998_RID9128",
		"description": "deciduous left maxillary second molar tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9279_RID5998_RID9128",
		"partOfId": "RID9279",
		"synonyms": [
		  "ADA J",
		  "tooth J"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "51943008"
		  },
		  {
			"system": "UMLS",
			"code": "C0447236"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9106_RID5827_RID9127",
		"description": "deciduous right mandibular central incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9106_RID5827_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA P",
		  "tooth P"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "67834006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227095"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9106_RID39121_RID9127",
		"description": "deciduous right mandibular lateral incisor tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9106_RID39121_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA Q",
		  "tooth Q"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "22445006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227101"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9106_RID9126",
		"description": "deciduous right mandibular canine tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9106_RID9126",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA R",
		  "tooth R"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "6062009"
		  },
		  {
			"system": "UMLS",
			"code": "C0227097"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9106_RID5996_RID9128",
		"description": "deciduous right mandibular first molar tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9106_RID5996_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA S",
		  "tooth S"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "58646007"
		  },
		  {
			"system": "UMLS",
			"code": "C0447244"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5825_RID9106_RID5998_RID9128",
		"description": "deciduous right mandibular second molar tooth",
		"containedById": "RID9938",
		"leftId": "RID9131_RID5824_RID9106_RID5998_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA T",
		  "tooth T"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "61868007"
		  },
		  {
			"system": "UMLS",
			"code": "C0447243"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9106_RID5827_RID9127",
		"description": "deciduous left mandibular central incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9106_RID5827_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA O",
		  "tooth O"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "89552004"
		  },
		  {
			"system": "UMLS",
			"code": "C0447254"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9106_RID39121_RID9127",
		"description": "deciduous left mandibular lateral incisor tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9106_RID39121_RID9127",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA N",
		  "tooth N"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "14770005"
		  },
		  {
			"system": "UMLS",
			"code": "C1533616"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9106_RID9126",
		"description": "deciduous left mandibular canine tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9106_RID9126",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA M",
		  "tooth M"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "43281008"
		  },
		  {
			"system": "UMLS",
			"code": "C0447255"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9106_RID5996_RID9128",
		"description": "deciduous left mandibular first molar tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9106_RID5996_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA L",
		  "tooth L"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "38896004"
		  },
		  {
			"system": "UMLS",
			"code": "C0447251"
		  }
		]
	  },
	  {
		"radlexId": "RID9131_RID5824_RID9106_RID5998_RID9128",
		"description": "deciduous left mandibular second molar tooth",
		"containedById": "RID9938",
		"rightId": "RID9131_RID5825_RID9106_RID5998_RID9128",
		"partOfId": "RID9106",
		"synonyms": [
		  "ADA K",
		  "tooth K"
		],
		"codes": [
		  {
			"system": "SNOMED",
			"code": "49330006"
		  },
		  {
			"system": "UMLS",
			"code": "C0227104"
		  }
		]
	  },
	  {
		"radlexId": "RID6456",
		"description": "central sulcus",
		"containedById": "RID6389_RID6434",
		"synonyms": [
		  "central fissure",
		  "fissure of Rolando"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "83752"
		  },
		  {
			"system": "SNOMED",
			"code": "28294002"
		  },
		  {
			"system": "UMLS",
			"code": "C0228188"
		  }
		]
	  },
	  {
		"radlexId": "RID6457",
		"description": "precentral sulcus",
		"containedById": "RID6391",
		"codes": [
		  {
			"system": "FMA",
			"code": "83800"
		  },
		  {
			"system": "SNOMED",
			"code": "78674001"
		  },
		  {
			"system": "UMLS",
			"code": "C0228201"
		  }
		]
	  },
	  {
		"radlexId": "RID6458",
		"description": "superior frontal sulcus",
		"containedById": "RID6391",
		"codes": [
		  {
			"system": "FMA",
			"code": "83755"
		  },
		  {
			"system": "SNOMED",
			"code": "4121003"
		  },
		  {
			"system": "UMLS",
			"code": "C0228198"
		  }
		]
	  },
	  {
		"radlexId": "RID6459",
		"description": "inferior frontal sulcus",
		"containedById": "RID6391",
		"codes": [
		  {
			"system": "FMA",
			"code": "83757"
		  },
		  {
			"system": "SNOMED",
			"code": "279343004"
		  },
		  {
			"system": "UMLS",
			"code": "C0262251"
		  }
		]
	  },
	  {
		"radlexId": "RID6482",
		"description": "uncus",
		"containedById": "RID6392",
		"synonyms": [
		  "uncus hippocampi",
		  "pyriform area (Crosby)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "74884"
		  },
		  {
			"system": "SNOMED",
			"code": "73226006"
		  },
		  {
			"system": "UMLS",
			"code": "C0228252"
		  }
		]
	  },
	  {
		"radlexId": "RID6545",
		"description": "caudate nucleus",
		"containedById": "RID6537",
		"leftId": "RID21020",
		"rightId": "RID21019",
		"synonyms": [
		  "nucleus caudatus"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61833"
		  },
		  {
			"system": "SNOMED",
			"code": "11000004"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.287.249.487.550.184"
		  },
		  {
			"system": "UMLS",
			"code": "C0007461"
		  }
		]
	  },
	  {
		"radlexId": "RID21019",
		"description": "right caudate nucleus",
		"containedById": "RID6537",
		"unsidedId": "RID6545",
		"leftId": "RID21020",
		"codes": [
		  {
			"system": "FMA",
			"code": "72826"
		  },
		  {
			"system": "UMLS",
			"code": "C2334749"
		  }
		]
	  },
	  {
		"radlexId": "RID21020",
		"description": "left caudate nucleus",
		"containedById": "RID6537",
		"unsidedId": "RID6545",
		"rightId": "RID21019",
		"codes": [
		  {
			"system": "FMA",
			"code": "72827"
		  },
		  {
			"system": "UMLS",
			"code": "C2330782"
		  }
		]
	  },
	  {
		"radlexId": "RID6576",
		"description": "pineal gland",
		"containedById": "RID6537",
		"synonyms": [
		  "glandula pinealis",
		  "pineal body",
		  "corpus pineale",
		  "epiphysis cerebri",
		  "conarium",
		  "conarium",
		  "corpus pineale"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "62033"
		  },
		  {
			"system": "SNOMED",
			"code": "45793000"
		  },
		  {
			"system": "MESH",
			"code": "A06.300.635 | A06.688.733 | A08.186.211.180.200.680 | A08.186.211.200.317.200.620 | A08.713.733"
		  },
		  {
			"system": "UMLS",
			"code": "C0031939"
		  }
		]
	  },
	  {
		"radlexId": "RID6578",
		"description": "thalamus",
		"containedById": "RID6537",
		"synonyms": [
		  "thalamic",
		  "Dorsal thalamus",
		  "Dorsal thalamus (Anthoney)"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "62007"
		  },
		  {
			"system": "SNOMED",
			"code": "42695009"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.317.826"
		  },
		  {
			"system": "UMLS",
			"code": "C0039729"
		  }
		]
	  },
	  {
		"radlexId": "RID13495",
		"description": "right thalamus",
		"containedById": "RID6537",
		"codes": [
		  {
			"system": "FMA",
			"code": "258714"
		  },
		  {
			"system": "UMLS",
			"code": "C2328150"
		  }
		]
	  },
	  {
		"radlexId": "RID13496",
		"description": "left thalamus",
		"containedById": "RID6537",
		"codes": [
		  {
			"system": "FMA",
			"code": "258716"
		  },
		  {
			"system": "UMLS",
			"code": "C2340044"
		  }
		]
	  },
	  {
		"radlexId": "RID6911",
		"description": "anterior commissure",
		"containedById": "RID6537",
		"synonyms": [
		  "commissura anterior",
		  "commissura anterior cerebri",
		  "commissura rostralis",
		  "commissura anterior cerebri"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61961"
		  },
		  {
			"system": "SNOMED",
			"code": "62872008"
		  },
		  {
			"system": "UMLS",
			"code": "C0152335"
		  }
		]
	  },
	  {
		"radlexId": "RID6914",
		"description": "posterior commissure",
		"containedById": "RID6537",
		"synonyms": [
		  "commissura posterior",
		  "epithalamic commissure",
		  "commissura epithalami",
		  "commissura epithalamica",
		  "caudal commissure",
		  "commissura epithalamica"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "62072"
		  },
		  {
			"system": "SNOMED",
			"code": "279336005"
		  },
		  {
			"system": "UMLS",
			"code": "C0152327"
		  }
		]
	  },
	  {
		"radlexId": "RID6915",
		"description": "corpus callosum",
		"containedById": "RID6389_RID6434",
		"codes": [
		  {
			"system": "FMA",
			"code": "86464"
		  },
		  {
			"system": "SNOMED",
			"code": "88442005"
		  },
		  {
			"system": "MESH",
			"code": "A08.186.211.200.885.800.750"
		  },
		  {
			"system": "UMLS",
			"code": "C0010090"
		  }
		]
	  },
	  {
		"radlexId": "RID6916",
		"description": "splenium of corpus callosum",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6915",
		"synonyms": [
		  "corpus callosum, splenium",
		  "corpus callosum splenium",
		  "splenium corporis callosi",
		  "splenium corpus callosi",
		  "splenium corporis callosi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61948"
		  },
		  {
			"system": "SNOMED",
			"code": "23347006"
		  },
		  {
			"system": "UMLS",
			"code": "C0152319"
		  }
		]
	  },
	  {
		"radlexId": "RID6917",
		"description": "body of corpus callosum",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6915",
		"synonyms": [
		  "truncus corporis callosi",
		  "corpus callosum truncus",
		  "truncus corpus callosi",
		  "corpus callosum, body",
		  "trunk of corpus callosum",
		  "corpus callosum, corpus",
		  "corpus callosum body",
		  "corpus callosum, corpus",
		  "truncus corpus callosi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61947"
		  },
		  {
			"system": "SNOMED",
			"code": "74938001"
		  },
		  {
			"system": "UMLS",
			"code": "C0152320"
		  }
		]
	  },
	  {
		"radlexId": "RID6918",
		"description": "genu of corpus callosum",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6915",
		"synonyms": [
		  "corpus callosum genu",
		  "rostrum of corpus callosum (Mai)",
		  "genu corpus callosi",
		  "genu corporis callosi",
		  "corpus callosum, genu",
		  "genu corporis callosi"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "61946"
		  },
		  {
			"system": "SNOMED",
			"code": "70215001"
		  },
		  {
			"system": "UMLS",
			"code": "C0152321"
		  }
		]
	  },
	  {
		"radlexId": "RID36630",
		"description": "right side of genu of corpus callosum",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6915",
		"synonyms": [
		  "right half of genu of corpus callosum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "261109"
		  },
		  {
			"system": "UMLS",
			"code": "C2336446"
		  }
		]
	  },
	  {
		"radlexId": "RID36631",
		"description": "left side of genu of corpus callosum",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6915",
		"synonyms": [
		  "left half of genu of corpus callosum"
		],
		"codes": [
		  {
			"system": "FMA",
			"code": "261111"
		  },
		  {
			"system": "UMLS",
			"code": "C2338053"
		  }
		]
	  },
	  {
		"radlexId": "RID6919",
		"description": "rostrum of corpus callosum",
		"containedById": "RID6389_RID6434",
		"partOfId": "RID6915",
		"synonyms": [
		  "rostrum corporis callosi",
		  "corpus callosum rostrum",
		  "rostrum corpus callosi",
		  "corpus callosum rostrum"
		]
	  },
	  {
		"radlexId": "RID38674",
		"description": "pituitary gland",
		"containedById": "RID6537",
		"synonyms": [
		  "hypophysis cerebri",
		  "hypophysis",
		  "pituitary",
		  "glandula pituitaria",
		  "hypophysis"
		]
	  },
	  {
		"radlexId": "RID6639",
		"description": "hypothalamus",
		"containedById": "RID6537",
		"synonyms": [
		  "preoptico-hypothalamic region",
		  "preoptico-hypothalamic area"
		]
	  },
	  {
		"radlexId": "RID6661",
		"description": "anterior hypothalamic region",
		"containedById": "RID6537",
		"partOfId": "RID6639",
		"synonyms": [
		  "chiasmal zone",
		  "regio hypothalamica anterior"
		]
	  },
	  {
		"radlexId": "RID6665",
		"description": "intermediate hypothalamic region",
		"containedById": "RID6537",
		"partOfId": "RID6639",
		"synonyms": [
		  "regio hypothalamica intermedia",
		  "intermediate hypothalamic area",
		  "area hypothalamica intermedia",
		  "area hypothalamica intermedia"
		]
	  },
	  {
		"radlexId": "RID6674",
		"description": "posterior hypothalamic region",
		"containedById": "RID6537",
		"partOfId": "RID6639",
		"synonyms": [
		  "posterior hypothalamus",
		  "mammillary level of hypothalamus",
		  "regio hypothalamica posterior",
		  "mammillary region"
		]
	  },
	  {
		"radlexId": "RID7124",
		"description": "lateral ventricle",
		"containedById": "RID6391",
		"leftId": "RID13789",
		"rightId": "RID13788"
	  },
	  {
		"radlexId": "RID13788",
		"description": "right lateral ventricle",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID7124",
		"leftId": "RID13789"
	  },
	  {
		"radlexId": "RID13789",
		"description": "left lateral ventricle",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID7124",
		"rightId": "RID13788"
	  },
	  {
		"radlexId": "RID7125",
		"description": "body of lateral ventricle",
		"containedById": "RID6391",
		"leftId": "RID13807",
		"rightId": "RID13806",
		"synonyms": [
		  "central part of lateral ventricle",
		  "ventriculus lateralis, pars centralis",
		  "corpus ventriculi lateralis",
		  "ventriculus lateralis, corpus",
		  "lateral ventricular body",
		  "pars centralis ventriculi lateralis",
		  "pars centralis (ventriculi lateralis)",
		  "Corpus des lateralen Ventrikel",
		  "corpus ventriculi lateralis"
		]
	  },
	  {
		"radlexId": "RID13806",
		"description": "body of right lateral ventricle",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID7125",
		"leftId": "RID13807",
		"codes": [
		  {
			"system": "FMA",
			"code": "242376"
		  }
		]
	  },
	  {
		"radlexId": "RID13807",
		"description": "body of left lateral ventricle",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID7125",
		"rightId": "RID13806",
		"codes": [
		  {
			"system": "FMA",
			"code": "242378"
		  }
		]
	  },
	  {
		"radlexId": "RID7126",
		"description": "frontal horn of lateral ventricle",
		"containedById": "RID6391",
		"leftId": "RID13799",
		"rightId": "RID13798",
		"synonyms": [
		  "cornu anterius ventriculi lateralis",
		  "cornu frontale ventriculi lateralis",
		  "ventriculus lateralis, cornu anterius",
		  "anterior horn of lateral ventricle",
		  "cornu anterius (ventriculi lateralis)",
		  "cornu frontale (ventriculi lateralis)",
		  "cornu anterius (ventriculi lateralis)",
		  "cornu frontale ventriculi lateralis"
		]
	  },
	  {
		"radlexId": "RID13798",
		"description": "frontal horn of right lateral ventricle",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID7126",
		"leftId": "RID13799",
		"codes": [
		  {
			"system": "FMA",
			"code": "242360"
		  }
		]
	  },
	  {
		"radlexId": "RID13799",
		"description": "frontal horn of left lateral ventricle",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID7126",
		"rightId": "RID13798",
		"codes": [
		  {
			"system": "FMA",
			"code": "242362"
		  }
		]
	  },
	  {
		"radlexId": "RID7127",
		"description": "occipital horn of lateral ventricle",
		"containedById": "RID6391",
		"leftId": "RID13801",
		"rightId": "RID13800",
		"synonyms": [
		  "posterior horn of lateral ventricle",
		  "cornu occipitale ventriculi lateralis",
		  "ventriculus lateralis, cornu occipitale",
		  "cornu posterius (ventriculi lateralis)",
		  "cornu posterius ventriculi lateralis",
		  "ventriculus lateralis, cornu posterius",
		  "cornu occipitale (ventriculi lateralis)",
		  "ventriculus lateralis, cornu occipitale",
		  "cornu posterius ventriculi lateralis"
		]
	  },
	  {
		"radlexId": "RID13800",
		"description": "occipital horn of right lateral ventricle",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID7127",
		"leftId": "RID13801",
		"codes": [
		  {
			"system": "FMA",
			"code": "242364"
		  }
		]
	  },
	  {
		"radlexId": "RID13801",
		"description": "occipital horn of left lateral ventricle",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID7127",
		"rightId": "RID13800",
		"codes": [
		  {
			"system": "FMA",
			"code": "242366"
		  }
		]
	  },
	  {
		"radlexId": "RID7128",
		"description": "temporal horn of lateral ventricle",
		"containedById": "RID6391",
		"leftId": "RID13803",
		"rightId": "RID13802",
		"synonyms": [
		  "cornu inferius ventriculi lateralis",
		  "cornu temporale (ventriculi lateralis)",
		  "ventriculus lateralis, cornu inferius",
		  "ventriculus lateralis, cornu temporale",
		  "inferior horn of lateral ventricle",
		  "cornu inferius (ventriculi lateralis)",
		  "cornu temporale ventriculi lateralis",
		  "cornu inferius (ventriculi lateralis)",
		  "cornu temporale (ventriculi lateralis)"
		]
	  },
	  {
		"radlexId": "RID13802",
		"description": "temporal horn of right lateral ventricle",
		"containedById": "RID6391_RID5825",
		"unsidedId": "RID7128",
		"leftId": "RID13803",
		"codes": [
		  {
			"system": "FMA",
			"code": "242368"
		  }
		]
	  },
	  {
		"radlexId": "RID13803",
		"description": "temporal horn of left lateral ventricle",
		"containedById": "RID6391_RID5824",
		"unsidedId": "RID7128",
		"rightId": "RID13802",
		"codes": [
		  {
			"system": "FMA",
			"code": "242370"
		  }
		]
	  },
	  {
		"radlexId": "RID7137",
		"description": "third ventricle",
		"containedById": "RID6391",
		"synonyms": [
		  "3 vent",
		  "ventriculus tertius",
		  "3rd ventricle"
		]
	  },
	  {
		"radlexId": "RID7171",
		"description": "cerebral aqueduct",
		"containedById": "RID6381_RID6434",
		"synonyms": [
		  "aqueduct (Sylvius)",
		  "aqueductus cerebri",
		  "cerebral aqueduct of Sylvius",
		  "aqueduct of midbrain",
		  "iter",
		  "aquaeductus Sylvii",
		  "aquaeductus cerebri",
		  "aqueduct of Sylvius",
		  "aqueduct",
		  "Sylvian aqueduct",
		  "aqueductus mesencephali",
		  "aquaductus mesencephali",
		  "aque",
		  "aquaeductus Sylvii",
		  "aqueductus cerebri"
		]
	  },
	  {
		"radlexId": "RID7174",
		"description": "median aperture of fourth ventricle",
		"containedById": "RID6381_RID6434",
		"synonyms": [
		  "foramen Magendie",
		  "foramen Magendie"
		]
	  },
	  {
		"radlexId": "RID7178",
		"description": "interventricular foramen",
		"containedById": "RID6391",
		"synonyms": [
		  "foramen of Monro"
		]
	  },
	  {
		"radlexId": "RID7147",
		"description": "fourth ventricle",
		"containedById": "RID6381_RID6434",
		"synonyms": [
		  "ventriculus quartus",
		  "ventriculus quartuus",
		  "ventriculus quartuus",
		  "4th ventricle"
		]
	  },
	  {
		"radlexId": "RID17726",
		"description": "tract of spinal cord",
		"containedById": "RID39569",
		"synonyms": [
		  "spinal cord tract"
		]
	  },
	  {
		"radlexId": "RID7099",
		"description": "cavum trigeminale",
		"containedById": "RID9361",
		"synonyms": [
		  "trigeminal cave",
		  "Meckel cave"
		]
	  },
	  {
		"radlexId": "RID12024",
		"description": "trigeminal nerve",
		"containedById": "RID9080",
		"synonyms": [
		  "nervus trigeminus",
		  "trigem",
		  "trigeminal nerve [V]",
		  "cranial nerve V",
		  "nerve V",
		  "nervus trigeminus [V]",
		  "nerve V",
		  "nervus trigeminus [V]",
		  "CN V"
		]
	  },
	  {
		"radlexId": "RID6897",
		"description": "superior cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"leftId": "RID18078",
		"rightId": "RID18077",
		"partOfId": "RID6815",
		"synonyms": [
		  "brachium conjuctivum",
		  "tractus cerebello-tegmentalis mesencephali",
		  "pedunculus cerebellaris superior",
		  "crus cerebello-cerebrale",
		  "pedunculus cerebellaris rostralis",
		  "brachium conjunctivum",
		  "tractus cerebello-rubralis",
		  "crus cerebello-cerebrale",
		  "tractus cerebello-tegmentalis mesencephali"
		]
	  },
	  {
		"radlexId": "RID18077",
		"description": "right superior cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID6897",
		"leftId": "RID18078",
		"partOfId": "RID6815"
	  },
	  {
		"radlexId": "RID18078",
		"description": "left superior cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID6897",
		"rightId": "RID18077",
		"partOfId": "RID6815"
	  },
	  {
		"radlexId": "RID6895",
		"description": "middle cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"leftId": "RID18080",
		"rightId": "RID18079",
		"partOfId": "RID6815",
		"synonyms": [
		  "crus ponto-cerebellare",
		  "pedunculus cerebellaris medialis",
		  "pedunculus cerebellaris medius",
		  "pedunculus cerebellaris pontinus",
		  "brachium pontis",
		  "crus cerebelli ad pontem",
		  "pedunculus cerebellaris pontinus",
		  "pedunculus cerebellaris medialis"
		]
	  },
	  {
		"radlexId": "RID18079",
		"description": "right middle cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID6895",
		"leftId": "RID18080",
		"partOfId": "RID6815"
	  },
	  {
		"radlexId": "RID18080",
		"description": "left middle cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID6895",
		"rightId": "RID18079",
		"partOfId": "RID6815"
	  },
	  {
		"radlexId": "RID6893",
		"description": "inferior cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"leftId": "RID18082",
		"rightId": "RID18081",
		"partOfId": "RID6815",
		"synonyms": [
		  "pedunculus cerebellaris inferior",
		  "crus cerebelli ad medullam oblongatam",
		  "pedunculus cerebellaris caudalis",
		  "crus medullo-cerebellare",
		  "restiform body",
		  "corpus restiforme",
		  "crus medullo-cerebellare",
		  "crus cerebelli ad medullam oblongatam"
		]
	  },
	  {
		"radlexId": "RID18081",
		"description": "right inferior cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID6893",
		"leftId": "RID18082",
		"partOfId": "RID6815"
	  },
	  {
		"radlexId": "RID18082",
		"description": "left inferior cerebellar peduncle",
		"containedById": "RID6381_RID6434",
		"unsidedId": "RID6893",
		"rightId": "RID18081",
		"partOfId": "RID6815"
	  },
	  {
		"radlexId": "RID13857",
		"description": "cerebral hemisphere",
		"containedById": "RID6389_RID6434",
		"leftId": "RID13859",
		"rightId": "RID13858",
		"synonyms": [
		  "hemispherium cerebri",
		  "hemispherium cerebralis",
		  "Hemisph√§re"
		]
	  },
	  {
		"radlexId": "RID13858",
		"description": "right cerebral hemisphere",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID13857",
		"leftId": "RID13859",
		"synonyms": [
		  "rechte Hemisph√§re"
		]
	  },
	  {
		"radlexId": "RID13859",
		"description": "left cerebral hemisphere",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID13857",
		"rightId": "RID13858",
		"synonyms": [
		  "linke Hemisph√§re"
		]
	  },
	  {
		"radlexId": "RID6941",
		"description": "internal capsule",
		"containedById": "RID6537",
		"leftId": "RID17021",
		"rightId": "RID17020",
		"synonyms": [
		  "internal capsule radiations",
		  "capsula interna"
		]
	  },
	  {
		"radlexId": "RID17020",
		"description": "right internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID6941",
		"leftId": "RID17021"
	  },
	  {
		"radlexId": "RID17021",
		"description": "left internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID6941",
		"rightId": "RID17020"
	  },
	  {
		"radlexId": "RID6942",
		"description": "anterior limb of internal capsule",
		"containedById": "RID6537",
		"leftId": "RID17024",
		"rightId": "RID17023",
		"synonyms": [
		  "crus anterius capsulae internae",
		  "capsula interna, pars anterior",
		  "Crus anterior Capsulae internae"
		]
	  },
	  {
		"radlexId": "RID17023",
		"description": "anterior limb of right internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID6942",
		"leftId": "RID17024",
		"codes": [
		  {
			"system": "FMA",
			"code": "72908"
		  }
		]
	  },
	  {
		"radlexId": "RID17024",
		"description": "anterior limb of left internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID6942",
		"rightId": "RID17023",
		"codes": [
		  {
			"system": "FMA",
			"code": "72909"
		  }
		]
	  },
	  {
		"radlexId": "RID17028",
		"description": "posterior limb of internal capsule",
		"containedById": "RID6537",
		"leftId": "RID17030",
		"rightId": "RID17029",
		"synonyms": [
		  "capsula interna, pars posterior",
		  "crus posterius capsulae internae",
		  "hinterer Kapselschenkel"
		]
	  },
	  {
		"radlexId": "RID17029",
		"description": "posterior limb of right internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID17028",
		"leftId": "RID17030",
		"codes": [
		  {
			"system": "FMA",
			"code": "72912"
		  }
		]
	  },
	  {
		"radlexId": "RID17030",
		"description": "posterior limb of left internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID17028",
		"rightId": "RID17029",
		"codes": [
		  {
			"system": "FMA",
			"code": "72913"
		  }
		]
	  },
	  {
		"radlexId": "RID17025",
		"description": "genu of internal capsule",
		"containedById": "RID6537",
		"leftId": "RID17027",
		"rightId": "RID17026",
		"synonyms": [
		  "internal capsule genu",
		  "genu capsulae internae",
		  "Kapselknie"
		]
	  },
	  {
		"radlexId": "RID17026",
		"description": "genu of right internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID17025",
		"leftId": "RID17027",
		"synonyms": [
		  "right internal capsule genu",
		  "rechtes Kapselknie"
		]
	  },
	  {
		"radlexId": "RID17027",
		"description": "genu of left internal capsule",
		"containedById": "RID6537",
		"unsidedId": "RID17025",
		"rightId": "RID17026",
		"synonyms": [
		  "left internal capsule genu",
		  "linkes Kapselknie"
		]
	  },
	  {
		"radlexId": "RID6908",
		"description": "external capsule",
		"containedById": "RID6537",
		"leftId": "RID17041",
		"rightId": "RID17040",
		"synonyms": [
		  "capsula externa"
		]
	  },
	  {
		"radlexId": "RID17040",
		"description": "right external capsule",
		"containedById": "RID6537",
		"unsidedId": "RID6908",
		"leftId": "RID17041"
	  },
	  {
		"radlexId": "RID17041",
		"description": "left external capsule",
		"containedById": "RID6537",
		"unsidedId": "RID6908",
		"rightId": "RID17040"
	  },
	  {
		"radlexId": "RID6549",
		"description": "lentiform nucleus",
		"containedById": "RID6537",
		"leftId": "RID20918",
		"rightId": "RID20917",
		"synonyms": [
		  "nucleus lentiformis",
		  "lenticular nucleus"
		]
	  },
	  {
		"radlexId": "RID20917",
		"description": "right lentiform nucleus",
		"containedById": "RID6537",
		"unsidedId": "RID6549",
		"leftId": "RID20918"
	  },
	  {
		"radlexId": "RID20918",
		"description": "left lentiform nucleus",
		"containedById": "RID6537",
		"unsidedId": "RID6549",
		"rightId": "RID20917"
	  },
	  {
		"radlexId": "RID6551",
		"description": "putamen",
		"containedById": "RID6537",
		"leftId": "RID21015",
		"rightId": "RID21014",
		"synonyms": [
		  "nucleus putamen"
		]
	  },
	  {
		"radlexId": "RID21014",
		"description": "right putamen",
		"containedById": "RID6537",
		"unsidedId": "RID6551",
		"leftId": "RID21015"
	  },
	  {
		"radlexId": "RID21015",
		"description": "left putamen",
		"containedById": "RID6537",
		"unsidedId": "RID6551",
		"rightId": "RID21014"
	  },
	  {
		"radlexId": "RID21016",
		"description": "globus pallidus",
		"containedById": "RID6537",
		"leftId": "RID21018",
		"rightId": "RID21017",
		"synonyms": [
		  "nucleus pallidus",
		  "pallidum",
		  "pallidum"
		]
	  },
	  {
		"radlexId": "RID21017",
		"description": "right globus pallidus",
		"containedById": "RID6537",
		"unsidedId": "RID21016",
		"leftId": "RID21018",
		"synonyms": [
		  "globus pallidus of right cerebral hemisphere"
		]
	  },
	  {
		"radlexId": "RID21018",
		"description": "left globus pallidus",
		"containedById": "RID6537",
		"unsidedId": "RID21016",
		"rightId": "RID21017",
		"synonyms": [
		  "globus pallidus of left cerebral hemisphere"
		]
	  },
	  {
		"radlexId": "RID9558",
		"description": "ostiomeatal unit",
		"containedById": "RID9080",
		"synonyms": [
		  "ostiomeatal complex",
		  "osteomeatal complex",
		  "osteomeatal complex",
		  "osteomeatal unit"
		]
	  },
	  {
		"radlexId": "RID6391",
		"description": "frontal brain region",
		"containedById": "RID6389_RID6434",
		"leftId": "RID6391_RID5824",
		"rightId": "RID6391_RID5825"
	  },
	  {
		"radlexId": "RID6391_RID5824",
		"description": "left frontal brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6391",
		"rightId": "RID6391_RID5825"
	  },
	  {
		"radlexId": "RID6391_RID5825",
		"description": "right frontal brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6391",
		"leftId": "RID6391_RID5824"
	  },
	  {
		"radlexId": "RID6392",
		"description": "temporal brain region",
		"containedById": "RID6389_RID6434",
		"leftId": "RID6392_RID5824",
		"rightId": "RID6392_RID5825"
	  },
	  {
		"radlexId": "RID6392_RID5824",
		"description": "left temporal brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6392",
		"rightId": "RID6392_RID5825"
	  },
	  {
		"radlexId": "RID6392_RID5825",
		"description": "right temporal brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6392",
		"leftId": "RID6392_RID5824"
	  },
	  {
		"radlexId": "RID6393",
		"description": "occipital brain region",
		"containedById": "RID6389_RID6434",
		"leftId": "RID6393_RID5824",
		"rightId": "RID6393_RID5825"
	  },
	  {
		"radlexId": "RID6393_RID5824",
		"description": "left occipital brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6393",
		"rightId": "RID6393_RID5825"
	  },
	  {
		"radlexId": "RID6393_RID5825",
		"description": "right occipital brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6393",
		"leftId": "RID6393_RID5824"
	  },
	  {
		"radlexId": "RID6394",
		"description": "parietal brain region",
		"containedById": "RID6389_RID6434",
		"leftId": "RID6394_RID5824",
		"rightId": "RID6394_RID5825"
	  },
	  {
		"radlexId": "RID6394_RID5824",
		"description": "left parietal brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6394",
		"rightId": "RID6394_RID5825"
	  },
	  {
		"radlexId": "RID6394_RID5825",
		"description": "right parietal brain region",
		"containedById": "RID6389_RID6434",
		"unsidedId": "RID6394",
		"leftId": "RID6394_RID5824"
	  }
	]
  }`);