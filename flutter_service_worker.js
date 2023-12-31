'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9568945900042a1dc0dc191d0482bd3",
".git/config": "567ce598102bad763bc40039662ea307",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "925e04e02d0abedc25fdb1b7b19c77ea",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30a4cc5e0039a4b912e608a3127bcaa3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f76bc1e706bc2bd5424f4bbff406de16",
".git/logs/refs/heads/master": "f76bc1e706bc2bd5424f4bbff406de16",
".git/logs/refs/remotes/portfolio/master": "c8166c567107478079066c7f5267ce79",
".git/objects/00/c7c6c065512d458dfe020b3bc310f2705af5de": "8f12f5f131d4f308401977e4a42b178a",
".git/objects/01/43797cad1876eab5b469c0b192c825bd0bde72": "e108c7632d78de1486fd0e877a7bf9bf",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/c66cec77497cc6ff125c17369903d700b290e5": "5c9e2330d4f058bfb20bbb989bf66c74",
".git/objects/03/def153b23437af73458a70149f4b4a629b5a4f": "801d54e0eb81d42164e9c35228b5f91e",
".git/objects/05/32b44a46da4cec5b9356f471fc8b52033d5d9b": "0d7b9df57b943a5b1aba5721e732f39e",
".git/objects/07/2aaecf42b16559cfffbec8e1e54213d04b866c": "953834cc7dd4d5ebc36fd2ced080bfcd",
".git/objects/08/863248e0fcab7b95aeed6ec573a824ab456a3b": "8806fb8b03c1504a908bc6a7c9c60c64",
".git/objects/09/54b9330fdec95bc32f668d0575393e8ac1cd4e": "cf84efda60cf2e789ac742b277fb76bc",
".git/objects/09/b8db3372103387f10a17dcdcb5b0219df1c5f1": "8c4569662deb5cc5c85aa5e403547d4a",
".git/objects/0a/055ee5c96ec20e83575320f03069c17ab47bde": "b6f1d43c19ac69e724cc5348741df978",
".git/objects/0a/43d8b75e6c7fc8b774cfd98552ee5bd1dc704c": "1a7301f5c4ad9b2bf33caef010280b9b",
".git/objects/0c/135303c0f34fae9baf1fe0b06070eb62ea7aee": "d16bba9b2d17386c8957d704f5572c91",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0e/08d49fc58d11dbcc8933059548bcf69da520ab": "afe7c9401f772600ef1ebcd52d9eaa32",
".git/objects/0f/e81acd3de6fe2f55fdde2f6c94f5995990a021": "6d4a0f40727d4f026dcc262963b88e38",
".git/objects/12/74e31b4710854ea34cf514bb9c07aea8558eb7": "5f72d969ef6a7b07bd64e3e4b5d8d7eb",
".git/objects/13/84a0f4afe5f9e2c3d863844965eaed297ec863": "0769758f0dd9bdd7e695c8eb03e8757d",
".git/objects/14/466bc8d5711c4da8696e54c0de2cb197bcc13c": "0dd3e8035a8e586ccea78388a4f0bb0a",
".git/objects/15/5a8c7bcdb8ab0af436fea6cd04494939d388e1": "2b3ed8b5b6614c72dc12ed5901fc1fd7",
".git/objects/16/2696e3f0954addd02551778bbb25b2ccaf3404": "504e8f9adc090190837b4e7c8e1fd76c",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/18/1e58db86c23b1076706d6f90f92bb21df6c561": "a00f130196096abd8a3df86a60ef4a83",
".git/objects/18/d2b3b531784c7d3e0c5ba503dee0c75b5803c5": "9d4a370a2774ab3f9dfbf7e1462e624d",
".git/objects/19/1bcd5a228f5d365bf65d55ffc1416d2606cf93": "b29b3da6bec80fafa7c5b077bdf877d8",
".git/objects/1a/21599bff3055a309aa1b2828483236ef663696": "8d816a08b8db9a956266193df07b43ed",
".git/objects/1b/5d2bf8258cef1d2476caabfcbc92b95bcfaf4c": "527ed1055137167389f2310c9fc09b37",
".git/objects/1b/efd61c8bbef4365ce2de31086a14835e060b7a": "53282c1b4984d3dde8211297cca194c5",
".git/objects/1c/537fd3e8bd4dc7822f280e44e3d1c7e0aa7349": "4b3c6135ff22c917571ffd08139f2869",
".git/objects/21/825c0ed29528b7d5f78f4d05d0369cd79eb8f3": "2ca7a8bc2bf5a80068a8dac15cdac4a1",
".git/objects/21/cfd7cda9440384376d298f9fca0c8e5903d2a2": "ee521e4dbcc0582fa6c693ebb45d59e9",
".git/objects/22/0526b685889f95ea20ef00dab2115bdac7bfbf": "37d4e8617008aa34145bfbfc703789a3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b191750c8ac4742f13e622c2345a69b08ec488": "8c909f720f095a1c66febd759acb11bb",
".git/objects/29/cf8fa70b1a62de0864cc6ce4d41070f837deac": "699105f242ca4efb4f664d9985393e6f",
".git/objects/2a/3dc2b5e201ef2ce12ca1b0554de7d7078e2333": "f47d84498f78b7a055ebb3d0cccf3c0d",
".git/objects/2a/4c07cd1d1ca55dc9de84bcd06aa60f88abbaad": "f86c194118336b4ce5c2b7a6488eeded",
".git/objects/2d/912743714b4b9b057eca71ba08cce604504f83": "2bf4f2a971ee106f7b99eb5424c38bc2",
".git/objects/2e/be1cb12f74c3629754b3c7e5709d73598d1b6e": "43558f09960e0dfb8b26c1d4c99673f3",
".git/objects/2f/05888981603e7cd504fdffeed211d88779a58f": "739c806a083f09e34242b2dd8c818118",
".git/objects/2f/a4d1c13275b211de75961d392f6ef2ea4ca8a7": "524bb38ea4a54caafd433e7ece1c93da",
".git/objects/2f/c15f89865e59129c5dbe0e5da42abc82504f54": "12e6d697787fed18fba6cb32e1d19cce",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/9fdf7818c98284bc80289cec473f05f0cf1c62": "7f505acf74f1196ef2ed6e5bb33cb83a",
".git/objects/32/7081853fbe395af0de27abc2c8832f9dec5995": "49153cb851c1009cadf1eb44b0d7a13d",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/9b568b57d8e6ecaf154bff6a72abd4f2b57d87": "92da8f240ade82109278a61e3ea9be8d",
".git/objects/37/6301eecec6b454c6fbe8716b9260462a4a6971": "8f56b403906253118ceca45aea3d7cc8",
".git/objects/38/0e8d04afd1697ab4e9f756677dcc0570d2fdc7": "d9d43c9b5ad9459af909ba562a456238",
".git/objects/39/50982cdbd3573ffa76857905b9aa8732e26b20": "1c713cb4c24a01b7285ffd0b45bb3097",
".git/objects/39/9f38ea3ee41d9c7af83c0ab0e4a726ec35fc60": "a5a273f2104dcc3089dcf1ca098812f2",
".git/objects/3a/95f8cefd9bb5dbfe354996540f054fab629e03": "2eb9cfd432ad4bcff5f06efad3adce58",
".git/objects/3b/d2229efba7b767d49c13fa03206cbe69a79f38": "962278529df2b3dd233351010a8effbc",
".git/objects/3c/8103458dd9f37c02fdd91ef6ed90a8b2fd0769": "721e1946afafa2df3fa2bcb50f686f42",
".git/objects/3d/90dcff58c800c93b2365f26123efec67a458cc": "7314b8f1048922f45f01b87a181189f9",
".git/objects/42/90d520169654a2d9ad200375d92e3c3295214d": "4d3a5d7735fe79c5c55ae587fefce72a",
".git/objects/42/b30baf5965e6e55971012ee8a8a919445c39a5": "abda859824796debe7dada8b30c66f95",
".git/objects/44/f62a0cba4c059d0519c55152d14e9521e74332": "38361671af54064741e18d120be5798c",
".git/objects/46/fbeb73b8e449f2836c52509821c6cef1ea9723": "218b77e9190904c796b4a58df12a9127",
".git/objects/48/11fa063310b42b6758a0d11ffbcd78aa719ed2": "64d482dafa811f48d465c60b8dbc46ac",
".git/objects/48/b7aad2e6a10ca01d92f772ab56fc5a38b77850": "2674de30956339733d68dc4b2f4be016",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/371e8e9d1de4957be734c7b4984e34231f5a21": "61e6fdad625595297f421b0e4a174f34",
".git/objects/4d/d3a808dcf693e3e9fe876c2793040b21a6d846": "2ed0fe14b832ef2542b0df2a83c31cd1",
".git/objects/4f/158306cd6a2f8ff2b7704590b24bb62c61f8bd": "f8dc7074e18487bcc99cbbfb97149651",
".git/objects/51/33f045544b4dab022a85fa92f1d0ede650f538": "266755d7581ad97b787d85b754365fdf",
".git/objects/52/96208669de2342e39c07aad7a7b6e083a77b23": "7e85a0fd2f8b570d046caa00cbe88678",
".git/objects/52/c7ec5b71a454757161f432153e8ef646d585f8": "8d0ecd0bf16e2bcff7fbd03f9ff90f40",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/0cb593981bd0d3a67f3fb57db008f87dd704ec": "ce3fbf13c8f06f0918a754fd77a7db49",
".git/objects/5d/502c5d0308fbc5a20a520f9d6aa1b164e1b38b": "e5c99c78000c197d96590674d85d4919",
".git/objects/5f/93c3ad5b63f75c9848e26d490bc63ffadb7124": "170518614386163def54afa51cf4ff48",
".git/objects/60/9be7c42d936f638b067a76a1d384fa1c6c5177": "3cab97b0edff574716eacf0fc2235759",
".git/objects/64/a7d35c97b99ed9d09d817bf085fede70ef2867": "dc49be01ab1d44bce436715927d9652e",
".git/objects/67/57d1d321e75bc4a83ccaf046b13a5067652309": "3dcd879d9ba9b041b95b7598527a192c",
".git/objects/69/c88684726c74ed98c7cd22ad6499b177754314": "f541e0213dfd1fd03a423cd96f4ab41d",
".git/objects/69/d4c8ebf7127c25d3b9a6589c0a909a94f9f6f4": "93202af869071985caabe97486b844c1",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6c/aa0fab717099137c4441db4f2a95acdc26e7df": "5ca217924e2546dd796aab14045e64b7",
".git/objects/6d/146efd94e5487c79cc1775768ea0158d3451ed": "7e509e2446f3e752b949b5217735517e",
".git/objects/70/7bc4ff4f0a3fb3fa87f3d4d45e9e1c8f67d572": "8a3de276d9e39fdbe1ad738492809753",
".git/objects/72/a3e000afb89ec0a755f8d75e040f042f44812b": "4c2e5bbdc3cbf35a28548f13016c3e58",
".git/objects/73/ffa706f744d1a6e044313434c7f83ea0b8af75": "25eaf12f75d1cf62b4345d402c6f60fb",
".git/objects/74/4ec7f26daaae4740903b3e4cd619d6f12c7fd0": "adb71685c693081746f28a700d6e9d7a",
".git/objects/74/b19fc089e8007bbcb4c250350e854106e67938": "2059a03058d24c5a933034e8d871ea34",
".git/objects/76/b3d1a3508d120c55b79f579c66bd89372249b3": "148e5bb943abfcb531a8d0a9b0765db8",
".git/objects/79/12b5db8bbf92795af6b331f8d69ba616432b89": "d75e66ffff42e7a9f1612f18699b0bab",
".git/objects/79/d608b11bbf70494000f8eef8d3bbfe90540670": "42c06e16ff901ef67fb1c85e4c966ddb",
".git/objects/7a/5b92e25ecf9ea46092316c9c0f0365676f0b03": "0388ec08bb8adb5fd2d2052bcb84a268",
".git/objects/7b/325d303009b1cb785afbdd4abd5439327ca9b0": "568edaa8a2e219b06eb647611c6bb7bc",
".git/objects/7b/87c62bdb715d95cd0aa8b4fa43ab84a573b706": "35489ecf20688074f3494e2814348399",
".git/objects/7e/2457983dbce8163719991afdfbf7e133e3ae10": "cfedf2910713b36cdd290508dd2aa916",
".git/objects/7f/202cef432a24030054a2f2b66a45e08d0cf4ae": "832fe55085a405528a7cd8a9040e8c84",
".git/objects/80/c8f8a492ee353fd9d7b70bee40ad5cec1dcaf8": "c614ae3fc28e0647ef27119357d43e38",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/92d45a757eae394ebff6df20f585259885c2b2": "c97816a98841028dd7f30a86c6ad37ff",
".git/objects/87/6378486a1f514bf36949f76c9ef16d43fc6bcb": "621b92b78c37bd302db14a2ffc3be0d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/70614be5617fbaeab054c285c3757062b2c0ac": "f7b21074355efb3fd8049db62187264c",
".git/objects/8d/692665927fac8703f3fbc72b7cf437bda9dba2": "f3a17cc2356e13168668a1ff599ff3b9",
".git/objects/8e/b61d5e71a3b9be534116630be3038ae3dbf950": "2c30f0b24fa964c2882b4deee9f76af9",
".git/objects/8e/ea8b2bbf6818f659bc15a672208e46ced95937": "7f38f3f29887ea2899abb13cc6da5548",
".git/objects/91/8e0a870a5885d7b0490ed0c25ec5eb54b9c835": "eae192c631411e6d5915907c4c13c5ac",
".git/objects/92/7518e1a8fd049fd5a39606881a29a0683693e5": "58b59e7a82a48301774b0f4dfb930c1b",
".git/objects/92/addee818fa75085b28b2898aee8ae46a5ca586": "c5d56a02e4a645b049628a7a1ecd9ef4",
".git/objects/93/8b84b292f3da4e7fcbf66a86ceed39f5ee1593": "e1f6c9c5138c37f7d91bb1e8183b62af",
".git/objects/94/9ab3b5cb7af0f541c51469f41e4838fd18a735": "2bdcbb53ef50af07df41d74c1aaa2c5d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9a/5359ba034229c8c5a0cd050246d673c4eb0269": "5dcaba064be84470cc60786fa46887db",
".git/objects/9c/49077963a173be64f4d2968b1f5c2ed9bf4fac": "b7686d8a0506b13b51485fd7867e0539",
".git/objects/9f/b648ba5d50b3971615695b23e5468e31dd456a": "74b4ffe0a882a06ce9a2544983349b43",
".git/objects/a1/8ec503527ab9bc5d90ca7a87ed8ea33d7eb063": "861a7df23b356c065ba67d0af55eac35",
".git/objects/a1/a162b201a093bfa93caaa1b3ba5d06f8fb35ef": "961f8d9793563d57f94977fbb0bc2dec",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/3cd533bb470679e80f4912906ecea713e61aa0": "d9d45d6f73db475521ffff06fbb7fb21",
".git/objects/a3/760ba94cbe37b64a96e5437bb168302a6844a7": "75c4c346551ae7457eea63b94df27d9f",
".git/objects/a4/c4cf8114acbc009d17cb4516afbac5fecaa74b": "e8cce19fbcf8d594fc882ffc9dea7e4d",
".git/objects/a6/a026ab5535ed7746a54b13b07999d3500b7717": "a6ebff1232388bc2fdc9622b14050da6",
".git/objects/a7/e51e32a8f46d7a08bd535e036fd401c0a655ef": "6776e922b558e3b41375316cf7337871",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/b1e179d94a2ae1f0681e1b47b2fe958b5af0a6": "a09cff780075f5c0b6170935dc08b3f2",
".git/objects/aa/0dd0c753d3e696272c9b26b647c102df7bf434": "c5697a389675ec90a57b822023087690",
".git/objects/af/2456ca9ea144b3d7fcbec6ab9ba979760966c1": "c742fb87496936ba1f149847f8ef0bb6",
".git/objects/af/3f1a488880375585cfa63cb45955255f3ad3c9": "ee25a9bfc4637f3b418ca21b4c9aa704",
".git/objects/b1/1c8d88f43bdc636a362aeca4639cd80edc06d3": "1e4116437c959dec1c71eab84e733cac",
".git/objects/b1/8b6cb38cdbf0c156ea71ed0693238c29e003d9": "b003955add498a19c76b72c27544b30a",
".git/objects/b1/99e5848c44cd39412a99a56c1dcc409e2c7bdc": "918fe75567d42fd1409fe2e280e596a4",
".git/objects/b1/f2d64d06696239301a8d9137cc89b5312b7b7b": "ec67c93efb544fa636c796d2d8b4d080",
".git/objects/b2/6b7e6b61d9e6c4eaf61154c68108005b15b2f1": "ca6dcc6ae1462bf7bd461fbfbdcbe762",
".git/objects/b3/2664a841c08334e3c71fa62875a276f47de30c": "6a126802230bee792278aad61c32ede7",
".git/objects/b4/0ceec78083b086ee8bd28e968048eab1d63c67": "39ff0316eaeeda7f78e04a6da14cc5f4",
".git/objects/b5/77cad7176d3c92fb67812a7060f3e7defdf812": "801a441e9f90c9b6a9709e77ab645008",
".git/objects/b5/a3ac4e91626b6dd74e08423794b6deb132dc53": "fc08791376e9d16d9edf48a057985aea",
".git/objects/b6/3efe8f822dcce495504068beabf647356db0ef": "cf9b42d58dfd14419a515b21ff0cfcd3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f2bc8dfe7c70b6a3d15260187d40dcf2157a36": "d61efbe9e2445146423307a184e67246",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b8/f9c2d4d4a9a22032f04e9333c7ee3d2df18bf6": "14c9311a1e3683fd6776001331853821",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cbb600dbe8c9173db8a0360dab8957d8830637": "f6d756c380f75805dee581937963af1e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/a1e5e7c1104e1cd3cd89546143bdd46d046063": "251edd0fe2a89a861c821a9240998fbb",
".git/objects/bd/0946b2a5a7a08a86a426f190916a8bd17fbfed": "7041fa43bfda6418abc45355ea72b68a",
".git/objects/bd/58fbb2d0f0848b1a7ab7a18681649b6cd6fd02": "d000faa748a50dd5fd95e2d85065bf3a",
".git/objects/c0/759278b196e3ed36403d1622bcc847e3155334": "87d19da9d6755f2a4238eefae8baa9ee",
".git/objects/c4/4e27be6557b53fdb32b0842df479c336b4b997": "e706b94168f1a83165a12763f39282e3",
".git/objects/c4/d83c614232be6dc3fc60f2f3613e99cc7dc96f": "6aad8d298775d196ae6d680b3629f490",
".git/objects/c7/32cb0427d7fb5bb297adbfa9392327ffe4c6bd": "f0346fc1df43adeac392620064b69549",
".git/objects/c9/1355864dd39287d1bb488af471e9520dc81086": "b779e4f223a0835e4b04d3907ea560a3",
".git/objects/ca/95d2c9a48dea3e46c65d665a9279533128c410": "db1e5e6bbd1de825e352331c9d05e26a",
".git/objects/ca/b19790aa73e4926fdffd4e58bb1a94680f9a07": "9927a41ee6e2e9619cf8f8d078af35e9",
".git/objects/cb/341199e4dc378001185a71d64001278c7ee420": "bb79c2102cbdcc5d4d1e9650415652c9",
".git/objects/cb/8a2c6c8fbe9df956521cd4642f32d67aa82388": "375568993d0a64c53f82e46cd189a6dc",
".git/objects/d1/3e99b1882cae6c047f698f8aaf792ad3379e07": "359f47df49758a9bc47e75ae429dbe92",
".git/objects/d2/ea70840d05ac36d632e92a875b3f2e9fc546f3": "aaacf6f6381a150c3ad93a1ab84fa26e",
".git/objects/d3/56841c8e9261cd587ba2e48ff57795bd1eb858": "4ef720c731256d60eeef421306799a36",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/4e95a48959bb71b564b17b8601395886379128": "f9067af5878d31fb6850fa5de754cc10",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/66b0a3146761f4eb1fd65d5a7af885924b8d1e": "1bc68ff9a28de8f501c03476fa630953",
".git/objects/d9/80c2dbf80e574dfb3ce981f0ab2b6b7d11770e": "f9b96164368f57e05c270d4eadf011a5",
".git/objects/d9/d01a4e0822b1752afdaefa8662c9a3f9508dea": "abbea10209897e1df10b9c49b1fb9718",
".git/objects/db/070dd22b6decb12e80a1759bf920f28a8eb6ff": "f6ecc9a70090a525c1f4ac5194c4a70e",
".git/objects/db/49b99af7f91a76a2d8f29d9fcd3b202874da14": "4a36e51b859c211aa59b47fff5481c97",
".git/objects/df/0fe922a7583e59e026dfb9236ce4dc9d3c405e": "edd05c16654674a709af2800b8377923",
".git/objects/e0/430c5854254caa294875d28175606b9278704e": "fcdcbca82e7ab8407fdfd2911a5f5e8e",
".git/objects/e0/9ffd175a79a3b9787c739ac354cc65850b1068": "eafff4b240d2013c8e3bfdf6b681ea17",
".git/objects/e0/f5ef14ac7a48271e149a640ea0eaffcb1bc4ae": "176f0b2861f8d256df2d30a41641ebbc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ee11233a64344bc8ec8793051a7c341286b99f": "e7d3c8617c774353e56654d5c87d5bb2",
".git/objects/ee/0ad43d09163d58ddadd188482d401e8a39784c": "750b57016a0b69d0acbe59eeeaa41eb2",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f1/da461c2d3a56e5772bce09065abaa8d25a8fbe": "a043be589266a89cd0ff9e96dec27751",
".git/objects/f3/46cba7c06de4fef10c442e4d70dd202895dcf4": "04b17fdefa712154750bbebd52e8e54d",
".git/objects/f5/ae30c80c2b081b4e8a5440b5d67d6a0ed92d8f": "f0f8760f4612bada236120d6c1c447e6",
".git/objects/fa/329ade54ed50db61007738f89396fdf8a70d9e": "cb959f64e8be53d0754ce002032c1619",
".git/objects/fb/5a5a1af838204a0e2ddb5712a535385c9d3114": "c1c35a1e1bb35cc6cb7586d620f1eefe",
".git/objects/fb/c0c8a981f45ba3c22f448c1d4405444e8257f4": "f4b001dec0b9f7ab8519f9402e076f88",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/bbd58edd9269589e5c05d72c45f4a2b517c61a": "92f942633cc64fcd3b2a5344149763cd",
".git/objects/fe/9ad98e050cd57b380b99b37724449e33237547": "2f5e2f3f570a012ba70b17982d29c019",
".git/objects/ff/376490cfbfc9f4ae56d3d6490345dc9800eb02": "df9f3f83f8f15ea5859375ad3afa500b",
".git/objects/ff/575623654fe962bfb0ef6098694c91458b9e05": "23adeaa3c8c52e994604811daf3fd554",
".git/ORIG_HEAD": "603012ed2ff102006b6accec834f0664",
".git/refs/heads/master": "5d691f5830ecbc03cdaa6add830253b5",
".git/refs/remotes/portfolio/master": "5d691f5830ecbc03cdaa6add830253b5",
"404.html": "537d2e22e8fd4943505f57b40d099515",
"ads.txt": "fddc88f1c003f37384eaaa52fdf90295",
"assets/AssetManifest.bin": "9114f99ae37e933c7c28d2da6662b7b0",
"assets/AssetManifest.json": "48f117e8de5acf31f71754329d234e36",
"assets/assets/background.jpg": "1c11681885386bc62e497c49429ae717",
"assets/assets/me.jpg": "16e01365e4f5a25ae812832048997f5c",
"assets/assets/projects/campusconnect.jpg": "ca013b2a7dcdb6a60e81818205e22744",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0af112e6285ac0970a0a31de5546c4cb",
"assets/loading.gif": "3ed06dc3eca00e372ecf339e21c53ad3",
"assets/NOTICES": "61ff2c1376d799fced0dee5e75a9dcdd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4c4d59d048a39934dae39f90bc938bb3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c66f558ba3161c913945ff8e97974a0a",
"assets/packages/icon_icons/assets/social_media/add_icon-icons.com_74429.png": "8eee1fa9827e753c4309fbbb2e3f2e6f",
"assets/packages/icon_icons/assets/social_media/ajouter-un-document.png": "beec7f50b16cfe23c936d396979ad2aa",
"assets/packages/icon_icons/assets/social_media/ajouter.png": "3e901597308cba363453d893ee749940",
"assets/packages/icon_icons/assets/social_media/alarmClock.png": "b384d541e21b6725d90746b544cc7095",
"assets/packages/icon_icons/assets/social_media/angle-cercle-vers-le-bas.png": "bab4ddc1a940fa6efad046d4f3b7aec9",
"assets/packages/icon_icons/assets/social_media/appel-telephonique.png": "6536cb562ec76e2eddd00f1d88f5ce3c",
"assets/packages/icon_icons/assets/social_media/bag.png": "9e762182febbb0983c317ac8799fc230",
"assets/packages/icon_icons/assets/social_media/basketball.png": "eb7e545d237eb001fcbfaaeddbf9fd68",
"assets/packages/icon_icons/assets/social_media/bookBlue.png": "3448f69be90f299991cc184ac9851030",
"assets/packages/icon_icons/assets/social_media/books.png": "abc9a80b1cdc099f39d3b0ce75c3febc",
"assets/packages/icon_icons/assets/social_media/burrito.png": "074cf0dd9e6aeb893e5374dfd2f92043",
"assets/packages/icon_icons/assets/social_media/cake.png": "dfc330d50adaa06402a2e3653385ab89",
"assets/packages/icon_icons/assets/social_media/calendrier.png": "ba3bd022fc75d48b8258fdafa6429477",
"assets/packages/icon_icons/assets/social_media/chargement-de-camion.png": "f1ad311ad7b08f40180b27e1a0c516f2",
"assets/packages/icon_icons/assets/social_media/chercher.png": "41a3709e5f7a3405a6a5c8e951202045",
"assets/packages/icon_icons/assets/social_media/chips.png": "ea4aeb722c7bd94367a882cb613b29b8",
"assets/packages/icon_icons/assets/social_media/classroom.png": "0e4a32a0b38caa7c7ef6b75b5850da7c",
"assets/packages/icon_icons/assets/social_media/close.png": "933659523fb494b6081cdd16902e7ce1",
"assets/packages/icon_icons/assets/social_media/coeur.png": "a84ccc86bd0c6c6c9b4081e8c8ff4e28",
"assets/packages/icon_icons/assets/social_media/coffee.png": "6bc61e02ae695b68df6a07a06474085a",
"assets/packages/icon_icons/assets/social_media/coloredPencil.png": "391acc2077ef285d0a48ecdc3ecd09a1",
"assets/packages/icon_icons/assets/social_media/cookie.png": "e316bd3be8654511035e01c86e0f1204",
"assets/packages/icon_icons/assets/social_media/degree.png": "aa353a35abd246361470861fb1a7078a",
"assets/packages/icon_icons/assets/social_media/document.png": "67ae81c2dbb557fa776056b29d255439",
"assets/packages/icon_icons/assets/social_media/donut.png": "df4b11ecb7842aaa3f4309848337061d",
"assets/packages/icon_icons/assets/social_media/drawing.png": "0d0fe988dc0cf97989c8c8d7b32f5913",
"assets/packages/icon_icons/assets/social_media/emojiAngry.png": "e41e5ae685cfae3b451300ed8d91be47",
"assets/packages/icon_icons/assets/social_media/emojiClap.png": "0911bffc37ec28ec64f1d6b5ffb06fa0",
"assets/packages/icon_icons/assets/social_media/emojiCool.png": "f84e1cc64b5d42e1d075a9a5c8837f6b",
"assets/packages/icon_icons/assets/social_media/emojiEyesLove.png": "a7cc77567353f82b9000dfa0d6e9a7c0",
"assets/packages/icon_icons/assets/social_media/emojiLaughing.png": "2e182d0ab3c73b3ebdb43f44caea44a7",
"assets/packages/icon_icons/assets/social_media/emojiSleeping.png": "3bbf699b81421eb9e020b26a6eaa1376",
"assets/packages/icon_icons/assets/social_media/empojiPartying.png": "27eabf87a9636a279d07515341ada428",
"assets/packages/icon_icons/assets/social_media/enveloppe.png": "9f687eb0dbfb2216f56f866d7c863e08",
"assets/packages/icon_icons/assets/social_media/excel.png": "33e7d9fbc9c96517c91bf57bb3cd9ec3",
"assets/packages/icon_icons/assets/social_media/facebook.png": "2baca0735b3a6caebab89dedd3694c98",
"assets/packages/icon_icons/assets/social_media/face_nerd_emo_emoticon_emoji_icon_209625.png": "e700da155dea559029654a451ffe6a23",
"assets/packages/icon_icons/assets/social_media/femaleAvatar.png": "1b22d5eccac16233d8cf646c108c0bc2",
"assets/packages/icon_icons/assets/social_media/figma.png": "11bda884d5a2d5f5e90fa7ca0f8740d0",
"assets/packages/icon_icons/assets/social_media/fleche-vers-le-carre.png": "17106f6688698ee3e5261b0ffe796e38",
"assets/packages/icon_icons/assets/social_media/football.png": "406190d45e3522c4a899dddd6e47b0f6",
"assets/packages/icon_icons/assets/social_media/globe.png": "f9aff58f95e889fbceca14c9bdf05c33",
"assets/packages/icon_icons/assets/social_media/iceCream.png": "94cd346a7dea00e89c6e61c6c868614f",
"assets/packages/icon_icons/assets/social_media/idea.png": "0af85e9ebf1d94d2dc7d45759d7856eb",
"assets/packages/icon_icons/assets/social_media/image.png": "229ebfd86c42d80abdd2e945e66501fc",
"assets/packages/icon_icons/assets/social_media/impression(1).png": "5d586c56666e20a3f2cfbbd06579eeb8",
"assets/packages/icon_icons/assets/social_media/impression.png": "733b03dce3e6d02bdcc7bd82f6559332",
"assets/packages/icon_icons/assets/social_media/instagram.png": "e9b15b731eafbfc16355b811c81af450",
"assets/packages/icon_icons/assets/social_media/jouer.png": "5124a12003d6efcd806dccd35a110fe6",
"assets/packages/icon_icons/assets/social_media/line.png": "c238e914d9dd4f6411e8df02e6159cfa",
"assets/packages/icon_icons/assets/social_media/linkedin.png": "328d8521ce26b902fc81a93516c08330",
"assets/packages/icon_icons/assets/social_media/lollipop.png": "f4031de749d02eb5bb9cbc330b46851f",
"assets/packages/icon_icons/assets/social_media/love.png": "9847fd80ec9eea8d4d3e12159233bac6",
"assets/packages/icon_icons/assets/social_media/maison.png": "1e9308e312724d08193f30ee37a0582d",
"assets/packages/icon_icons/assets/social_media/mallette.png": "a3a5b7d591b37ea8736a51bb0647cc21",
"assets/packages/icon_icons/assets/social_media/marker.png": "4f944e76e863624fbdca97becfad3826",
"assets/packages/icon_icons/assets/social_media/marqueur(1).png": "9f660ef59f584b0b3bdc12e59a566cbc",
"assets/packages/icon_icons/assets/social_media/marqueur.png": "b0ba90acd4445af4e24e87ddc026982d",
"assets/packages/icon_icons/assets/social_media/moon.png": "7a50f46f2346138952f9410a2716fb7a",
"assets/packages/icon_icons/assets/social_media/mug-chaud-alt.png": "70cab012f675cf1ac3490d83664a85d6",
"assets/packages/icon_icons/assets/social_media/musique-alt.png": "6971d4b168587748d65b2324ffd22bc3",
"assets/packages/icon_icons/assets/social_media/oeil.png": "202974a3ca7d078c422e11ed60c4ad12",
"assets/packages/icon_icons/assets/social_media/office.png": "0ba163471f768c557082dde1da2b9e37",
"assets/packages/icon_icons/assets/social_media/open.png": "2a032af6ea206d072dbd6d2808b80998",
"assets/packages/icon_icons/assets/social_media/outlook.png": "25f2e81445fc5c98a3cecfbb13523655",
"assets/packages/icon_icons/assets/social_media/panier(1).png": "0b8a1fe9d1ba02cd03e7d6c4077c9fe7",
"assets/packages/icon_icons/assets/social_media/panier-ajouter.png": "6c4a42299d4264c156e4ca3825db469c",
"assets/packages/icon_icons/assets/social_media/panier.png": "2e6c0164bcd95157c8f8064e55945137",
"assets/packages/icon_icons/assets/social_media/party.png": "b45a1f5a8c49e0a6a784b65a1507f050",
"assets/packages/icon_icons/assets/social_media/pencil.png": "47fcf7249e1a685ff9345ae3064002ac",
"assets/packages/icon_icons/assets/social_media/pizza.png": "c270047e9deeb24b6a91dd99832367b4",
"assets/packages/icon_icons/assets/social_media/poubelle.png": "7b26b995aaeae2cb27e827590346f95b",
"assets/packages/icon_icons/assets/social_media/powerpoint.png": "f228cca7e17151421baa1cd1b49654e4",
"assets/packages/icon_icons/assets/social_media/printYellow.png": "c0dd8fa2f628dfcc18ea8d3f9f81ca2b",
"assets/packages/icon_icons/assets/social_media/raindrop.png": "1d96fc052cb93e5d66410f2eaa05e7f2",
"assets/packages/icon_icons/assets/social_media/reglages.png": "c79f8dee3d202f8911e7e8fafe5f8263",
"assets/packages/icon_icons/assets/social_media/robot.png": "b9f62d1ce1f6424cdb6c84441af0cbda",
"assets/packages/icon_icons/assets/social_media/school.png": "a2ecc085b4c5b9c2bb68599af2f4e3cb",
"assets/packages/icon_icons/assets/social_media/search.png": "af507287b7244f476c5e79ed1e305951",
"assets/packages/icon_icons/assets/social_media/signet.png": "7fbf6b77b580f5802702451959fbb71c",
"assets/packages/icon_icons/assets/social_media/slack.png": "b9634118631fc3fe7635a43321c0be44",
"assets/packages/icon_icons/assets/social_media/spotify.png": "4fc39dab289233f859bba4e754fa101c",
"assets/packages/icon_icons/assets/social_media/star.png": "0e2ad370e38e5fe13e068af5854d12cb",
"assets/packages/icon_icons/assets/social_media/summer.png": "006ae093369037b450e0d20e64cb03cd",
"assets/packages/icon_icons/assets/social_media/sushi.png": "38a061de9bca66424c3216bd33673595",
"assets/packages/icon_icons/assets/social_media/tacos.png": "dffa7226771da471408d7424e6981856",
"assets/packages/icon_icons/assets/social_media/teams.png": "34ba0f521fb7944207e768501f79bdfb",
"assets/packages/icon_icons/assets/social_media/telegram.png": "c5b5c4263ccacf44d467462c9d2c04fe",
"assets/packages/icon_icons/assets/social_media/tool.png": "8232935d85546d03eda6955172033737",
"assets/packages/icon_icons/assets/social_media/trophy.png": "51325b7895c7c9260be052695f2dfc69",
"assets/packages/icon_icons/assets/social_media/twitter.png": "207b03fc7db7bb96364f96d53cdd36a9",
"assets/packages/icon_icons/assets/social_media/utilisateur.png": "335bceb80dbb3ed0677e1056e286fc03",
"assets/packages/icon_icons/assets/social_media/viber.png": "eab238178ccc6a39b8886d57ca8a2ebe",
"assets/packages/icon_icons/assets/social_media/wallet.png": "a5f291dbc64b04570e55243e195ab017",
"assets/packages/icon_icons/assets/social_media/whatsapp.png": "099332d134c9702c7dbd26db31d0530b",
"assets/packages/icon_icons/assets/social_media/word.png": "50df1ed7be2e4020bbc009c9c0c517ca",
"assets/packages/icon_icons/assets/social_media/youtube.png": "c1b380706822205e84258a0d33a971de",
"assets/packages/icon_icons/assets/social_media/zoom.png": "12ecfd9deeb177cbceaa95274b0f1da9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "16abc0904d8cdf1483485e82245a88cd",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9eec87c923db4dabe3ec026547030742",
"/": "9eec87c923db4dabe3ec026547030742",
"main.dart.js": "28e12e33a3eb14b292d7fa5aab35c72d",
"manifest.json": "ed0677b3836b9675ad365e55eb6a6acb",
"version.json": "22afaa4f108fbcc27e09fdfe094ae7b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
