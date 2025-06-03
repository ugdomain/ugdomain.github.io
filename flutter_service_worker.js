'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "18dd813368545290d2bc6be009ceac49",
".git/config": "f33f5a64f8a0984ed3f0d55e73351916",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f266768b58754cb4add54ef9b686c57",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e4c5ea1cec2d34d5ed28309e1b016f2",
".git/logs/refs/heads/main": "5ce1cc982dc79b4a55994b3ee80e2c5a",
".git/logs/refs/remotes/origin/main": "1ecadadce5d56b0bea7382f44ddfb682",
".git/objects/03/f1e039262f85c9ae035e4e0774f8ec04ddf632": "8a7a3fd8d15d134fef3d26688abcf445",
".git/objects/03/f94a54aeb4ed2d79ad01a257d1967cbed121c2": "a15f95742b8b18ba4b767e1b944b73e4",
".git/objects/08/a9721731789b196c36ddc70857c9c1bed3c4a2": "0a2ec31792675c974bc774fbb010e0c7",
".git/objects/09/8652195ec943a68458f1ed18bb15e223333009": "37827a365398b55854d4d2f7732c8ceb",
".git/objects/0a/acfb6e025fd77afcb6d8a7fcb615b1db0116e5": "1abc41e04b8bec1d8e7f85112de535eb",
".git/objects/0c/61cd6ab4e2a7a86093d49188384adb29f799be": "98c6fae0bb0dd593ae4ac0306a6f6a1b",
".git/objects/0d/7907d5bbc50f164d3bf9e104108986b3e2cbc2": "04f416e59bfc0c0ef9d96fc0e2107ce0",
".git/objects/12/76f1c8ab4c494ba28cc3aa3a0b101b3178392f": "a4e6908a337878d4b8b8acb67bd343cc",
".git/objects/13/08c6a4373a3052c8c573689f1290a59b768dbc": "5e8bf3251e1937083a1383f513caac8f",
".git/objects/14/4818fa3826310f246fc84c2fa085525a39018d": "c875f77473b7acb485999f3681e7b308",
".git/objects/14/9ecca695e8f1777a2b57d7289d68fd689708b4": "43e48d8149a91036818a67dba1a04ff1",
".git/objects/15/232f3351f88d926c41bc529a439ee829cd6ffd": "ab7dbaf6a3f4256d35f4acb043b11be1",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/cff4c6bad55d9e91fb162aef2843d879cd1d82": "3fdaf07f686b4370fc36f0325e5b90b8",
".git/objects/1d/c926dce0c846ee65798812c7b17d50fb7cab84": "1f27093e751e90c85ad9e7e3ea3bb02f",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/1e/092f004bb836a7d1411c12be41e18d4d6d0aad": "75ec4b3ef0dbe54c4765184abd8e4d8f",
".git/objects/20/31bdc991ffcb8bb7526e13e667c0e0472c650d": "eb6390f47e376c1da38220c4f907f76f",
".git/objects/21/d5e9d69a1fb217e9afcefd473b8f386e75228d": "e75b08ce314815bf01762a1748d4a6f8",
".git/objects/24/6ae63d82bb9e474f0c9360aa8d9f6e21ad2937": "6128736ff001c7bb55bb72a78cd5f52f",
".git/objects/24/77405572d073fb2e3cd33f565031f16efb6b78": "a7eda2d1106209723c8a4d74833e5626",
".git/objects/25/51bf1ebbb6dba213062efe619cdf1abe0a76bb": "40d220180c664db025a05a1f32283b74",
".git/objects/26/8128024a02b1c725c1f84562692022b9b7d794": "32eb6f9cda27a08f91aff3e55fad7d21",
".git/objects/2c/61699c12a40652676e0d489c7416a0dbd2a5c0": "2e6ba98d9e416f6f3b639a79e0b2d404",
".git/objects/2d/127f237c613bb67b5dc05e0b772c5ae54f8fff": "082c1bf719119166c13e58fa8e4db723",
".git/objects/2e/e9cbe6a77623740e0e1e2b105bec24dc9bd79e": "4e0265408c34feb018e406e5e8ac0d81",
".git/objects/32/cc2200dee5859078fa68fea2cf81f0f1519944": "24febed93c53efb765ca2551102f445f",
".git/objects/32/fb5cec1a21e6009068b1fd031f045f0654ed9f": "22b54581122c9cccd9a299feeca20f46",
".git/objects/35/950e3bb9f182e3972837eb3d2255bdba699221": "5ebf8d37079430596e4e7106bd9ca1ae",
".git/objects/38/829b1be653c11b93196def6d0405643b646b0a": "1348e5c106a24a0b82a01fa2488e77e6",
".git/objects/39/65d97d628c5ecce2247813b36df6f617ded39d": "6f630775eea8cfabd08cbbeef0daa8de",
".git/objects/3a/fca5a6ec02eef574dc6c371ddeff82df494933": "b48ddd3cd6c43e5cd5b599032af166c1",
".git/objects/3d/07538ac757f206556e52fefb670dd972ed89d4": "759070b003787a4d9442a74b0394148e",
".git/objects/41/d65b64cf2688407a3c8ce8bd7ba191b6341fb5": "15d15373b0dc7906fae51fb0e2a1591e",
".git/objects/44/721ff568ae454fd6ed038b37de74be61f20158": "d9d0f9e45c8015c0b06b47540cffe65f",
".git/objects/44/d98a863bd0ed9dc9b73ccac28b703d79c4e3eb": "2b14531bfdd81084b6b0c72993e490b1",
".git/objects/44/decb58519d675a02ba83d92d44afa64b6849fe": "297e679149ca721968703520df4ac914",
".git/objects/46/d2924e18c6a24b367d9932503a5903f68b68a3": "09b9d919b59f50c4b07d79848833c094",
".git/objects/48/beba323e1b74802789b244654290d765041e88": "dfc65cd459b4bbac5c1166387032e734",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/d52ef55fb146eccd453dd464bbb671f6a5fb3b": "8695bcd535f24557195e0786a1c562c7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/bd85148a400345f59969e5eabdb29c4b6c541a": "f0ef88a45aa4db7ea2ad6dde8371edc6",
".git/objects/5c/fda64b1654c602122218e0f706624819d0177a": "07c7064ed9550962986bc5fd1895c16f",
".git/objects/5e/4ecfebea8b64b6b0a897563ab089d24d988fa8": "62708b80592abc54c45deffbc0027d67",
".git/objects/64/df7fc8b655cac258efd291f9c9c2ec163d810b": "9466dd4275dbecd61edced553fe3d6c1",
".git/objects/65/601a5ff7a68e3a3b867b525774061312c7da7c": "de11a4e46c22be44e5d993c7dc0df4b8",
".git/objects/6b/0f350b65b3901f6a00a23d5f6051d4d9070df9": "e22871872bc0bce6636aaf93c729bbb9",
".git/objects/6c/9e908974f70aca7f95c76fea470b35b2729abd": "a6a31eaefd588fc46946b25333f4b735",
".git/objects/6e/931b2138bf1bc0fdca1ac60c18d4c0fa98735d": "f69b243050384dc7a0b5adbedee9feb0",
".git/objects/6e/98c30768dbecfa43319b25c5b407b67dace8e5": "3702bf41264f904c78c265a2b9fcf21d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/0b6d3f2566b5dd97c204e4d17e0b52a0aa5807": "8d6060b5fedcfc441f87cef9e42fbd41",
".git/objects/73/61c007216feddc96762b4816341d2eb1759460": "4d75fe0e0cb6674a85db3943be1806a9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/7f3ca2f1d562554f30d4c025d6385f2e95ec8a": "17d2fdae3001985038aefa8706050e46",
".git/objects/79/f29d9e829f3f85f13b3d93c6f318e93d16d4e9": "a0af27e2b5fdc1d975a686927106236f",
".git/objects/7a/c2037e185bf3b6df841a36e60ae68f3c7f727a": "0a3c4eb0f9857dff045186fce72ad347",
".git/objects/7f/d2c95bac95f1f2bf21d5b92746dea5f19b70b1": "21694a556027055a31e8bfa38aa43009",
".git/objects/82/03ddb300e9180f1f006c6474bf8962edc89fa2": "ac467f78e765ed111c0f0f2b1e759600",
".git/objects/83/4b406d7a8321a67d5fb534f34ca02fd9c7ae0d": "4f1e6927822c669d5cbae6141030e27b",
".git/objects/83/630af9b63255e28c8aeb8662a739782628bb94": "33aa89e5e5f5dccd3d0b27b586e651c8",
".git/objects/85/1ed12206458dee40da01777e2573d37d494dd5": "88eee6008a76b285e14492f75573d522",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/17011b06980ecd2c6ef435bd128b3cc9516520": "36c789d466dc57b7b3cb30b9b68879e6",
".git/objects/92/9791cdf2ee5b52e2c5eaf09d8a6d5348984532": "ab80cfcc68884f5cdfbc43708b4f4dcd",
".git/objects/96/8114e9c12043a4ff0ac889e5f113ea5e8e507a": "b85d628c5d0d6de998e04f0ed0794632",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/d921e207f6cbe050dc50dfa2836e8773de02b7": "4ed16bd2ea54c04d75f306d266c11411",
".git/objects/9c/106e770721ca273311b0fed64f3bb5111c8929": "ea8cb910330d8a18a40f7890629274c0",
".git/objects/9d/666d7cb91dbd95d8c87e33354765e286858bf4": "e93b4d79e85001b9254bc4f23fae01a3",
".git/objects/9f/15c1180bdb3ebd23153005d79b7301f01d9876": "88eadbc93dd3737473f13df82a5be7a7",
".git/objects/a0/c7bbcaf8838374680cca031f51e94e1f18b2f9": "bcfd013363630700304be1dd9698e6aa",
".git/objects/a4/8e7fc89dfde80cb46bbef43a9790aba5932cc7": "01b238c76b462ebc5d7bb60ca3c5da61",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a7/a4a2ceaf56256cceaadbdbec91d6c8ffce97c0": "df965ab0a1c714b07b8fa89c21d3bab6",
".git/objects/b3/fee9b7281ae842b9230800a84b18741ad7fc58": "46920ccc870562837aaca7cd31d30258",
".git/objects/b7/1cf9eda7e888003877b624061c88d609d9a73b": "0a1d81d628a85571af0cb4ba164f0c45",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/0a4276dd2095b9e461468de86427a62c5bb16c": "8b965703b7cd414992e09b742a70e93f",
".git/objects/bf/1c1d699cb3b4dcb4393e58c555fa17835e3072": "cb9caf672ba88670ed0a00b8bb40f2f0",
".git/objects/c0/8d8efae13b8c4394c47a9f472c3276f9ec58b0": "3f8f5463a47d81a44d73b9e9ec3ef2cf",
".git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "6a5802fd93c23b446375be0361b55c08",
".git/objects/c3/f51c68c4d4fe55b9c8aadbc82cd72be6eacc4b": "7966110bb6fec7473dcc1605b403d746",
".git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "c7098e473a1fff4a06cf5b48046ed03b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/55470dea52a9761a428df250db46afd0991b83": "b03c04d08d8aad863bb143c8e7d35d5a",
".git/objects/c9/5e619760ba666f5f52ac8f3734701feb691967": "afcab2a99ef585c48987b691ce11a0e9",
".git/objects/ca/8880f0b32197bea4d5ba80f406fdede809a118": "d9daa09a84b4be7723ed92479c963dcc",
".git/objects/cb/90f1bcecb1f2b07ad109066e91ead03ad2ec6e": "076cc7d27d41026fc09e4b6913b5df67",
".git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "9461d3028da79a0612a5279bb9791892",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/a62d13c8bcecadcf2bf0bc736961a3d981f9f9": "9280fed80776a2afb627cad7b2104bde",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2527b86ff6d139bfb116a5311004be439ea4bc": "dec63774514e710b9247e4cf74a63208",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/054489047a8cdcd13489a80e34100ec13af71f": "df1a038b626048c7db5950cba2ab1017",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/f955238aa6c5c05b1a0ddba4fb10e217e1af45": "35c133e14defd306573fce888ff7ac36",
".git/objects/e3/feb2a03b0ff293fdb373b2d19868ac2e7b520f": "83bfdb6786a6aed27b68a1566261fa74",
".git/objects/e4/a9b921d50d1969cc0dad2b75748404518c11a3": "7a8b3ac76f81b008a5703906df1c40fb",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/2176f3d5729467fce25147532974d9180bb2ef": "d902967359e4a9d03d3111005e717112",
".git/objects/e8/9a7b4cdcf423e4ff4d21e733cb648254a91e91": "66be0c6d580bc20b144091154f57ff4a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/14d6daf79c6f26edfbecbf342ff75ec8d75246": "464350f4f243bf616434615b94a16ef7",
".git/objects/ed/df89f786c90c7f7b725aff9bee6d26c97a5670": "2f4a46d508082f4df8f74170c2e399de",
".git/objects/ee/b3db73146fc15b67ed9e5b6aa263dd1ed3641b": "0d630e1490aba0360e28cede290ca7ff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/eade40ee0c59e25d45a074986af30a9b65a05a": "f77d2d4429d75251cfa958d382cffb7e",
".git/objects/f4/b0ef60fce78f6486b0188909f66620eaa69b44": "fbba3059e93fa9de586c9cb35aba9249",
".git/objects/f5/9e7daf956e392873c6e5e00724d6c20f3ecd8c": "1921f0262d6a8455ad35eece6a1537c1",
".git/objects/f7/fd0ca8ee259c339680f15af6364bb2529dd834": "89c4f90bf232fed690f6d60d37927963",
".git/objects/f8/68b9b7d62ca98364db2596cce2b7d685408ff3": "7349ba7cd12a5c455bc453ad01a78ec8",
".git/objects/fc/a7e0d349f8495947019e40e5ad26101f1f0dc9": "ba04baa1e3f9e01973fd334ae9948846",
".git/objects/fd/1c73c8aad6fd1442704399d70f125641fa0bb7": "83842d7d1c467a4b6ff193505216100b",
".git/objects/fe/57407fca7662805dda21f2043386c1147c54a5": "ae7d05b5ba7874b2d335cef103af5580",
".git/objects/ff/e264767b28c0304b34ae99728b0f6b12e40a6c": "5e7c15ce4271f20cbb15382e6b0bd1a9",
".git/refs/heads/main": "5332d3254cb4887305da21ad792f5b7d",
".git/refs/remotes/origin/main": "5332d3254cb4887305da21ad792f5b7d",
"assets/AssetManifest.bin": "8f7f04e067f41776c112d61ddbb39277",
"assets/AssetManifest.bin.json": "ecd048d3d605de0f5c151f79d00b7974",
"assets/AssetManifest.json": "791084bfaaf40ab619ec69f2da3a4559",
"assets/assets/aic/s1.png": "7513b0e9f91d08207331d93305a7127c",
"assets/assets/aic/s2.png": "6900d3fdeeaf0392a6122bdf027b1241",
"assets/assets/aic/s3.png": "0e7801707f2bcf4a5a020bce767203b1",
"assets/assets/aic/s4.png": "0ae7e2d9dc6d49e4081c29a5f41819a5",
"assets/assets/alj_c/s1.png": "f30176ea73574c6ba5fac287ab3dcc62",
"assets/assets/alj_c/s2.png": "7a9c65ad15b22578ccc2a70d2dea8e45",
"assets/assets/alj_c/s3.png": "3c94d738a8598efce7c5dd5235f244d2",
"assets/assets/alj_c/s4.png": "8a60e9d2e2bc77042f4fd17580d681eb",
"assets/assets/alj_s/s1.png": "b54cc45d6269c4c88d7f33cead6b6c7b",
"assets/assets/alj_s/s2.png": "fd421e6297563a64e32cf41674ebe53d",
"assets/assets/alj_s/s3.png": "1980ff7859a3da87e4fab4e80580e931",
"assets/assets/alj_s/s4.png": "7cc88adf63fd71cd7078e847e5647fca",
"assets/assets/background_pic.jpeg": "b2ce5c5d9a09099ce80de758e633f407",
"assets/assets/icons/facebook-icons.png": "3b3d19e69c445f637a99795116299cca",
"assets/assets/icons/github-icon.png": "c0f4af18c1ad16e6b50458637588aeaf",
"assets/assets/icons/gmail-icon.png": "c25182fadc8f30c5e68de161f3cec81b",
"assets/assets/icons/instagram-icon.png": "eb525ae7cbcf1a7af5d61a504631e9db",
"assets/assets/icons/linkedin-icon.png": "9e8a61705f4d6f7d8d34d8b06e4d6f3a",
"assets/assets/icons/whatsapp-icon.png": "f4106eb4ce434a19019882bb3a1e5297",
"assets/assets/login_top.webp": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/my_pic.jpg": "b2812aee97990e5f0360cf559005ea87",
"assets/assets/playstore.webp": "8eb4d26f51fc9cd2e0238901a5cc837b",
"assets/assets/saic/s1.png": "f477d9c783cf185c2b359cd38673fc83",
"assets/assets/saic/s2.png": "24f3efbbb850b6dac9daca5931c5507e",
"assets/assets/saic/s3.png": "591dba2f50177f5a4656b870543c6360",
"assets/assets/saic/s4.png": "cc4414f8a82eb2de7e7c419be8155a76",
"assets/assets/tfm_c/1.0.login.jpg": "b04a9c5426e92e4ad193e6c106d933f8",
"assets/assets/tfm_c/2.0.home.jpg": "d8376a8f6bb5d6c2c6113738dc2015be",
"assets/assets/tfm_c/3.1.pending_pickups_list.jpg": "1363d81ae436d10bc4598f22b45cce6f",
"assets/assets/tfm_c/4.0.DRS.jpg": "711892a5bfb700a5b69b857dc31e46ca",
"assets/assets/tfm_s/s1.jpg": "98e738fa284603b7b5e3a750ecfeb6bd",
"assets/assets/tfm_s/s2.jpg": "7af9e55a0ab047f225a9d997fac40c02",
"assets/assets/tfm_s/s3.jpg": "68215283b108588a6c970d5ca4a8e2ef",
"assets/assets/tfm_s/s4.jpg": "a62fef5718f878b2ec294deb90c13856",
"assets/assets/tfm_sec/s1.png": "b6e681f774534e4c8f5fb0b45fb0124f",
"assets/assets/tfm_sec/s2.png": "a1323881d72f0456f4fb13c1396fa678",
"assets/assets/tfm_sec/s3.png": "5f312b98700f13fd9a0dbe82e57eb163",
"assets/assets/tfm_sec/s4.png": "47498caf68b508e1bfae3b421372f55c",
"assets/assets/usman.jpg": "c918d225fb4073582b4261b9d0b89d53",
"assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"assets/fonts/MaterialIcons-Regular.otf": "b447806604157f3d285df6cc72faa877",
"assets/NOTICES": "c0cd7407aa63ea5bcfa34e299168204a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "09e9604ec8c86b352bdf205895556c93",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b36e70f72ad46d91f428f1ed7f0857af",
"icons/Icon-192.png": "a6eecd750a020c62886e0d1616ead820",
"icons/Icon-512.png": "a337e21345a2998bf16e64efb173794e",
"icons/Icon-maskable-192.png": "a6eecd750a020c62886e0d1616ead820",
"icons/Icon-maskable-512.png": "a337e21345a2998bf16e64efb173794e",
"index.html": "196c1ee157de47f5257d0140534de3fb",
"/": "196c1ee157de47f5257d0140534de3fb",
"main.dart.js": "958515866e3ba338c8e09b54a2716e81",
"manifest.json": "3d8f434410fd6d9915a7dbd987317e1e",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
