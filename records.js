// 用户数据
const Users = [
    {
    username: 'admin',
    passwordHash: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
    registerDate: '2026-01-01',
    score: 0,
    bilibiliNames: [],
    isAdmin: true,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '123',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-26',
    score: 36,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '黑の辉',
    passwordHash: '12ced0ec03813e27df453d63214a467698e285ab6f52f4d030205ee1426c2d08',
    registerDate: '2026-05-26',
    score: 62,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Athrun',
    passwordHash: 'b8e1736a8ee520bae9b04563bd7931347b3089bc1853a673b57b01eba5451864',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'qwert',
    passwordHash: 'cf0b854f5a17fdad773d462438d4d7328722b817d40a74ecb8d9ad79f98aa251',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Redamancy',
    passwordHash: '9d5447b027868815764a5a8f1d665e8d65000dbc915933bb463dd50ab6f5d26e',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'zxxx',
    passwordHash: 'cb704cd2f1dd5971474de688ca7bd1cc13a4788b4450569d14e86e529a3517e3',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '四倍体植物',
    passwordHash: 'b991ecc4b6aaf9ebdc50af46a288e333f372863c7363702b478fc78890990565',
    registerDate: '2026-05-26',
    score: 196,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '阿吸吸',
    passwordHash: '8eb6e0d05bb0c748545dd20f46bc0c6c2a9966d1c337e8ed72d11416ac317d94',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'xdd',
    passwordHash: 'cc2e018aa6eb9612ccd027bbdcdc9b8c8d351789f14cae4d688a876c18938235',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'laurel',
    passwordHash: 'efdf873df854dedc3f342dde8c8c244cd4d0920ff935de30c4d836e1e577c1dc',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ab138644945',
    passwordHash: '7d139b37660cb6ac4f1e08470bc7f2261e466edc89ce0ac9a35f0db2ef091e7d',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '超绝可爱希罗娜',
    passwordHash: '8bb8da95870c38c136565ecb5609a76e61165280084b4f510a93b1bd4bb7e271',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'fxdss',
    passwordHash: 'e7a3490c8a3d5519ca0f49330734c4f7ac8f84fab325fd2767ccc0a8716b369b',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '242622832',
    passwordHash: '2a783f04d8a93db475187f67ad00d96f2b65e074b89d394e3300a628ee7e8829',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ほたる',
    passwordHash: 'f61f06834d5d5909591c5304177bc0e55c0bcfafef702e2e609311cca360ffee',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'chenwei',
    passwordHash: '62dafd9e9b3d43edc00c42a9ca354f339a923eb0971156b968bf60a30b938ee5',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Ryuna1',
    passwordHash: '529c8cb8a3eadd86f0cb52e11315f069d315f929804ff01ce2afdae5334b3e1d',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Ruiri',
    passwordHash: '54dbb124e96f06344f7e6a5b6cd9b44f0cafebb8ed099ab6d1cd877b7c66542d',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'yice',
    passwordHash: '0434a4014dc65966ba29fc9d5cbe7ba847ccaa35449dc64a534192d6dcb212f4',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'JOKER',
    passwordHash: '336725ca117fddc24a155ba8d38222f4253e0fe2836ef1d9ebbd3abf51c76316',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '132',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kamira64',
    passwordHash: '83c5c6b5c4d84415db0907f795c12eeb0c5a476398d13b157e9515d0978e4a9d',
    registerDate: '2026-05-27',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ruirui1729',
    passwordHash: '1a945c5d41f67d2c9cf88b8b8e472d93522bf14d4906064713535aa1a5356b29',
    registerDate: '2026-05-27',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sui',
    passwordHash: 'f9c95c193f8c8f60b4cb497c2c3bf74ccd8a7994e5b69d66ee665c5a71010887',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'jun',
    passwordHash: 'd75f0386cee3ad8fdb6544ab6699b11b1ce44ef34679986042274aa028749d16',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ささくれ',
    passwordHash: 'a96d8c8f09e32bf09eea108d4198a2741e008ce26b54d387e3b9861b0c9d4fb0',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'たそー',
    passwordHash: 'd4178d583027a8e0392191be71cd02c5576196f5e7bbb4ea58340ab8e6890aeb',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'yyjyyj',
    passwordHash: '56c977f4811e64aa5bb88c14d2e5b3433ff2f9fd24355de6d569833e39b3dc2f',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'cocoa',
    passwordHash: '365baf48d649d2bd4a2f1f1be437ad4d9389e91735e03288414c6d7cd725c132',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ゆうせい',
    passwordHash: '566812d29a984f11c5eca05266c911e5ed706912f4fb77f139ccc812619cfb88',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'bili_59125816',
    passwordHash: '3c37de7cd5b431d20e7b4f1e089ba0ab67d316f41b6ced71735325e19a454ea7',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'newuer',
    passwordHash: 'db40711ed31bce714eee3729269e28480e419b861ebb13d29580bd3f8f93bbb8',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '祖安水稻公主',
    passwordHash: '95b6d69b38993d127e0a30e49ab12a83bc94cc3cf2330a282021c4d0c573fe19',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'dratos',
    passwordHash: 'cbb9ffa28ef1f6aa371a8afee297216d766772af376e8552b0e47caa26315982',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kami_asdf',
    passwordHash: '636f4a9e5cbc4fbc969ddab80f2f86b47e8cb5fc1d1d585342a5ead7fb917408',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'juri',
    passwordHash: '3086d1a39ad7c7d49cbf2eb3d538572c0b8836bd764dc22544d931e2e42cdd25',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'swd',
    passwordHash: 'cec43b4f69a821adc56ebc2f964db9b35b129910e718aa931b980937c83895c8',
    registerDate: '2026-05-27',
    score: 32,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '空客连夜堆山',
    passwordHash: '7eee64ff7a6a83df1509c2e07e09bee99131e41e4b0c53718cec80b05ff40565',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'da4ja',
    passwordHash: '0f98c542a2ade535703a6115bdcd966a24c451002ad14ff70c94e8a8199a798f',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '心柜子',
    passwordHash: '9dc43a433e5ae49db6704848f068ebbb5de29b94c4c786d1fb9eebc7dfde1f63',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Ray',
    passwordHash: '2bf388d33c84c6a50ac99cb4a719c044299c4f447e4e04550784bb6d9771df61',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'muusama',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'hookane_gensin',
    passwordHash: '6387b30dedef51a5835377114c73e4367f5db8b1c3d8b1c229b029055ab5597d',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'minato',
    passwordHash: '906150b4fbf04256c14fdc8c68e95ade790bcd9204f47a90f0addd15d261fc04',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'glotto',
    passwordHash: '25c7ca60af22b13f6b1648a3df86b2961b5656c3c9b5e62a7b8086802ae2a337',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kosesimasita',
    passwordHash: 'e736525f052bc0103b9510173260284fe92a79f9993a2c5f2d01bc675831affe',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'winzero',
    passwordHash: '7df2b7c91ea67e354060282e43c1bfeb42102e0b4453b6104c61aa53ee044097',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'fox',
    passwordHash: '21cd2a3c3131f5e4d3bcdbc3c90a4deade8b1a846fb07212e0ca490255ce92a5',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'てんぷら',
    passwordHash: 'db16894d573bd023b4aa61ffdc35deb6bf8074322b0ce7147ac372bf677d65df',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'マラニー',
    passwordHash: 'e42bb8878250cbabc741a708b368d32547405016a70f80b7e13bc316d5a3071e',
    registerDate: '2026-05-27',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'tetete',
    passwordHash: 'bd8223613a5f7c2d09a7a90aa8fb3ae534842543863377e21337e146eaca895e',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '1264566655',
    passwordHash: '497bd11e17e97cb928564f73e9794ea802efe185c354827ec27fd53051d03919',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '风与叶相随',
    passwordHash: 'c921b709074339fd841a28b8c0465761e8aa690093ba5e414cf4b46932395d98',
    registerDate: '2026-05-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Lego102Lego',
    passwordHash: '3b96d3d0829a11e0cc72d1872057663417bf61fb8dfdbe146e8fa629e4fda14d',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'xianshiyishi',
    passwordHash: '4e747b3171d83372c01822958208a532830ac7e0f07b72db56c496fc1c8394d5',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'takeshi',
    passwordHash: '9d20aa860a2ae9e0edf986308261620eb08166531988ab19fb4b1d6987c13b84',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '珍惜.',
    passwordHash: '72d81f03f9ccafd3fcb01c7467da4a82569737c12240b3650ff38cb931d23f06',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ssssss',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'xmwang',
    passwordHash: 'aeae080fc27ea50e69501885d40ddfef2a6e837c8c96fbb8b7bfbf2b26a01b91',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '黑松露海苔卷',
    passwordHash: 'c0c4a69b17a7955ac230bfc8db4a123eaa956ccf3c0022e68b8d4e2f5b699d1f',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'atwelle',
    passwordHash: '7353f3d01b5e59b961a4548b80a9ee754c59b58aba1b58a9b25df0cc4cb8e9d2',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '水亦寒',
    passwordHash: '80765b0cb02843b181592bda2db28ccf4fd22c5784559c6310208f04a786ea5f',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '17320105',
    passwordHash: 'e6ef25ee9f77cf002d311c0f735225c57fe1f5ae2ced8b344aa36e183382b5be',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '一介平民02',
    passwordHash: '81dfc9dff4698dee99f34816f8d88634f708dbec8b579a5c9020c13dd1d46905',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'chiemimimi',
    passwordHash: '98f4adb5cc1029327f0371339cf60703845dd71c9ceeaa875805ed83079ae172',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'murphy',
    passwordHash: 'c1ddb9476181eefddecb3b763ca404f3d0b4d6a7420f67e3e53bc9fe187a3081',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'rks热开水？',
    passwordHash: '280ba56da58c335c2fbd0683345203c8e64beb8197650476e86f4c68dc289c3a',
    registerDate: '2026-05-28',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sy2356',
    passwordHash: 'bc6d941a4a7ce16315bc1ac9ebb29eb0d147f76fb856021a38c8dcecd04ff984',
    registerDate: '2026-05-28',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'david214467',
    passwordHash: 'd7477832d0ece103f9804efbd939b7b02d4c119657dc65f2b138094a6c69ef2e',
    registerDate: '2026-05-28',
    score: 962,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'neonrider',
    passwordHash: '7f0457660b261323eec2caeecdec8f382b3cae6ad84793dd589b584e36972ff4',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'SmileyZoe',
    passwordHash: '70f49b7e12a42e2b6d9ef589b87766f651d410b052f306da39e99b59d75afa4d',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '503406',
    passwordHash: 'e42e1a479e0c226c010c25f46bba9abe9758ec05780add0c6e424ed5a70e7d8d',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Sevio_柒言',
    passwordHash: '4a08fefca932cd3d51a514b7aa5caa99c85e8b1c5670d8f6e8b3c5fd522f9cd6',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Psywe',
    passwordHash: '132c8b95c86f64da216b6cef6b0c7830a4b6246b0118b3edaeb117c363e9b19e',
    registerDate: '2026-05-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '2462242',
    passwordHash: '3043dc0a24bb511f9fce01d7ce0e3004523a07fcadb330acaf57b6065252c4c5',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'yawnkat',
    passwordHash: '8f973d0964544763ed23b666b40327646183ede3e9c0f59fe0a42d35573cb1fb',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Karon',
    passwordHash: '81167c127c482bad9ce41c8f2e5baedbceb89ae34bf536321cee3f066a17443b',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'loveeee',
    passwordHash: '1a7b1a8cfcf64659cd09bc4a1c98d822e73c8e6c54053c9066deeb89d9d73dbb',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'LTZLF',
    passwordHash: '48e4fe32be1bcfacf1db28cf6f12caf5f6998647a6413ef24598e2624c9213b5',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'hana_6979',
    passwordHash: 'f0fad89582471effd3c20356cc30995134ca9460f922b15a13979e5aab3ec7eb',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'azz',
    passwordHash: '22af88fa58535dbfa6768b7ca0340fc8512d4bd3574ef373243b320c5dafff28',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '10969atk@gmail.com',
    passwordHash: '3398db0fe362116929d4c70525fb0fa35e16a4d5dcba4a861487dde9422a39a4',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'yumo',
    passwordHash: 'eefe99ec6e1283453cf630498f90db3abdf420afc30643c83078f95e4682ea81',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'zzz',
    passwordHash: '6534b55301adea092e05d884f0fba71ed9dbee59d863e93851fb12de15a75021',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'oudon',
    passwordHash: '81933f8654c82d208709d1076ce03ba2571a227558740b931eb81ed701beaef4',
    registerDate: '2026-05-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'lly',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'maka',
    passwordHash: '17053e28c867da31d284d966d9fa507e591d000fe20445a5d6b41f6843ebac4f',
    registerDate: '2026-05-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'BANANA genshin',
    passwordHash: '7fda8fc9e10cd8740fd7568852b20c9ec65220c5f6860b22da396f997f7ba8d5',
    registerDate: '2026-05-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'bbvv999',
    passwordHash: '53a4ba08b174f0747ca97dfdb656504e92bf269f3fd15f6dc5bc70b8d4871b1e',
    registerDate: '2026-05-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'hehenin',
    passwordHash: '0b6592bb4c7237748a1eac14d2d64d1d6ce1165dfcdac98d7103276ef61fb5c5',
    registerDate: '2026-05-30',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sa3aegis@gmail.com',
    passwordHash: 'aa8ea67305f231e7f3fbe637ada57bd2af5267b0fb79774f31b51088e3daaa2d',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'dhyj',
    passwordHash: '05ba47d5369f728937533eb78904d3502c6f27599b542a268a0a4d5b2afc6fa2',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kevinhan',
    passwordHash: 'c90298ddb472db14e9329987b773819186753866fdf9d6bbdb295a7a27158e47',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '杉云ys',
    passwordHash: '46c349203bbb726dd346181915039e20f048299ee790dc60d5ba0b77bc1e8d9c',
    registerDate: '2026-05-31',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ゆうせい0925',
    passwordHash: '2556aa4881d4309ca7837ca623003916a1ad3a1f257192e5da2a12495956c4f5',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '。。。',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '也是好上了--',
    passwordHash: '059a00192592d5444bc0caad7203f98b506332e2cf7abb35d684ea9bf7c18f08',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'xxx',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'えっっ',
    passwordHash: 'c93d58631f042b3c6be29a443663961260af3cc08bf6449ddb3b227fab288162',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'みやけん',
    passwordHash: '6d367b9019b39ed097da1380d0d96b9c9d01ac51edd765c1f2a19eb1e31ef9eb',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'midra',
    passwordHash: 'd99f6af8ba2040cabaa49c6a9e793b4319fae5b2cd179e6d14f47a3eeb80c63e',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'o.O',
    passwordHash: 'b97d70fd9f21401ad41dd53335ba914c19eea7f32ff731f4d4928efe4a6d6a79',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '大哥大',
    passwordHash: 'ab48a17a59644eacdc315f427db6875b3df01a15eb00c61920dc8beaf3a60038',
    registerDate: '2026-05-31',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Sin',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-06-01',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'baerar',
    passwordHash: '371f8d2f66ca10fcc4651e2f86fd70f1ca3014f8f519e69a2f26f1a4dc7c7441',
    registerDate: '2026-06-01',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '墨清zhf',
    passwordHash: 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f',
    registerDate: '2026-06-02',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'suumo',
    passwordHash: 'd4aa96afe32234e5a9e6e25f3dc03a6d69a028aff7ab017933209d91a8f71be3',
    registerDate: '2026-06-02',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'machamocha',
    passwordHash: 'a7411a3704a56d0f9319ab779f26e6b14ab739435ecfa99f4b7c8dafb649b7d8',
    registerDate: '2026-06-02',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '布偶家的花花',
    passwordHash: 'be058902cc4bc34329f5a1b768b3e77174badd25aa251f3488ec32c2147394f3',
    registerDate: '2026-06-02',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Giocorso7',
    passwordHash: '2face4656ef0a0053989b9c278e217e44616edc710809e680bb21a477f92f384',
    registerDate: '2026-06-03',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Achille20',
    passwordHash: 'ffe881b7db18c2b2a9a376fa5b7fdfd608aedcb648e78bb7554cc211ae70966d',
    registerDate: '2026-06-03',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'starhurt',
    passwordHash: 'cb920d892dd5796b3fe7f6407dd4a5268e4563192477e00124629b77bc5fcbb1',
    registerDate: '2026-06-03',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ーたそ',
    passwordHash: 'd4178d583027a8e0392191be71cd02c5576196f5e7bbb4ea58340ab8e6890aeb',
    registerDate: '2026-06-04',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'dino123',
    passwordHash: '8f03b101fd6b6acee02753ff39836dc01120cd0a3e859ecb6e17801862fa54d4',
    registerDate: '2026-06-04',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kabukibu',
    passwordHash: '1932cb91dc59c3416a6790104a450385f8f047166de42d97ffd45161dd06f231',
    registerDate: '2026-06-04',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'mao',
    passwordHash: 'a01366fb923818a750c72628dbfe344c4c438f9557f71a61f40a411fc9381b86',
    registerDate: '2026-06-04',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'arry',
    passwordHash: 'b09bb5a2615a037eb60d2564866645b7669876c2b7fa5b97a21546ec97988ea5',
    registerDate: '2026-06-04',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kuku',
    passwordHash: 'c549d021ca546832fe6dfe4bd4e59e30317c6911c6499cf121e686eec2d1ee77',
    registerDate: '2026-06-05',
    score: 2,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ihuber',
    passwordHash: 'b00eb5d774f0833f8dedbb4bae1a443027ea280639145889aef4715f2d410691',
    registerDate: '2026-06-05',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'midra',
    passwordHash: 'd99f6af8ba2040cabaa49c6a9e793b4319fae5b2cd179e6d14f47a3eeb80c63e',
    registerDate: '2026-06-05',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'laijian',
    passwordHash: '0517f83de3de2d34cc1c14026cb2da9ca8413f575de5b8d14943bb6b0d3c7303',
    registerDate: '2026-06-05',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ipcd1596',
    passwordHash: 'acfa9cd33e8a1a209f1d935bd40e8f445a5e0490cb3704c6cd7059e0673eaa78',
    registerDate: '2026-06-05',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '5685',
    passwordHash: '93f9ab4d9b863322e68249d3c0ad5d05097c4bc399d4a20cf8be59cc0f770db2',
    registerDate: '2026-06-05',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'PYWBKTDA',
    passwordHash: '35a1ad8cecbc9bf4c28c75ee682d79330be52d91088415482aa847f641e36462',
    registerDate: '2026-06-06',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'zoushuhong2001',
    passwordHash: 'b25eff9585d6748c3efbc7f9382188364c2ae8712346b544102c124b40c8d0d0',
    registerDate: '2026-06-06',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'iona',
    passwordHash: 'e68aa84c95a5fac5b4dc22033e8a70fc3346968423d9c0499d981defbe3a799d',
    registerDate: '2026-06-06',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '83uei',
    passwordHash: 'a27eb332d1d90bd5bf24b3a4928a8737bd50509f2aecd47926841f2ecf36af3c',
    registerDate: '2026-06-06',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '小氵夕',
    passwordHash: '819b65cd782445019100960e2178a50a2208513ed51c036927fcc5e0b2507edb',
    registerDate: '2026-06-06',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '卡玛sei亚',
    passwordHash: '44a8791805a39e4f223102cfeee5810650cf16d66b31172f802fd812bafe9c95',
    registerDate: '2026-06-07',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'hajiqian',
    passwordHash: '20a115fbfc1d85cc1f573e7545d3edee1f7020673c0f23b17e46326a1aa35525',
    registerDate: '2026-06-07',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'jddjck',
    passwordHash: 'e9cb035386cb837104cfefad5aa7d052c3e2a343dc09f75451228fe325451e8f',
    registerDate: '2026-06-08',
    score: 4,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '3482086657',
    passwordHash: '59bdf8a7b4eb91dfa31d80a131ea6fd9404a0efcb4eaedb25d931135c2ecfcf3',
    registerDate: '2026-06-08',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '13717450051',
    passwordHash: '548e663e6bf3a97aa575ca5776017a6de3fd7270688ec84ccbc145a642bcec12',
    registerDate: '2026-06-09',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '陈述药词',
    passwordHash: 'a980c26d9f48c43fc27c5ade9165cdc0aea2d185e6a545e5f496b3f4adcece65',
    registerDate: '2026-06-09',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'hdz',
    passwordHash: '8cdbdb25a23001b9af9ba3ab58efb74bd573d519cf09a94286d9f017dce9ae91',
    registerDate: '2026-06-09',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'yannuo',
    passwordHash: '0027c76a231d4e230cb890ebb0c0e26c050b6cd922d08a2e0cf24aa71eeca2a7',
    registerDate: '2026-06-09',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Carameldayo',
    passwordHash: '98ad367c1d1c0f369f81ef3106d591a04c39ede19e32897732ca95fa1f8993ab',
    registerDate: '2026-06-09',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'kiko',
    passwordHash: 'fdf969e18270138afd51e5d513774211ede127c628db794348a158e73798ed6b',
    registerDate: '2026-06-10',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'wuxi',
    passwordHash: 'c4318372f98f4c46ed3a32c16ee4d7a76c832886d887631c0294b3314f34edf1',
    registerDate: '2026-06-10',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '1311259792',
    passwordHash: 'c433834dfc5f8eba9f49be305eabd2fa36ec8c116ebd18bbbd1beb4638be1789',
    registerDate: '2026-06-10',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ggg8588556',
    passwordHash: 'cdb10e222ce5567c18a04e9527a46238bcd20fc09957b96fa20f9d775f0fd0d1',
    registerDate: '2026-06-10',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '3039549526',
    passwordHash: 'fdb658f384feaffed8695f9598d528740551c80c7885c5c6eca0f95f8d66fc59',
    registerDate: '2026-06-11',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'USER',
    passwordHash: '384fde3636e6e01e0194d2976d8f26410af3e846e573379cb1a09e2f0752d8cc',
    registerDate: '2026-06-11',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'あきすての',
    passwordHash: '9f72afaa655fb17a0f6315bdb148f7c2bb9bfa7cb7e130f2cb91250f21ea83c2',
    registerDate: '2026-06-11',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'asphyxia',
    passwordHash: 'e72f713f29ec9b6ca6578aa3421729e6264485cf41cfffbca14bcb23b4134e67',
    registerDate: '2026-06-12',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '2075663310',
    passwordHash: 'dddd07d6cacead56ec0e2d0d8e9d7dc134f6ae0999a7e3658ca842740ed358b6',
    registerDate: '2026-06-12',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'あーめ',
    passwordHash: '4e3fb11f9b0b16e5deca32a5d58b24cca9d8f0fc1e5547416fa6be866edebcb4',
    registerDate: '2026-06-13',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'oosan424',
    passwordHash: '2534fea589719cf4bf92f16a0d4095f8b36263a3148fd6fa202bdb24ff66a001',
    registerDate: '2026-06-15',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Flamberk',
    passwordHash: '7b56d86c0e93d7ecba367a3eb3eb510b34f31066b170f1f4af777ed4fbd758d7',
    registerDate: '2026-06-15',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '菲林斯',
    passwordHash: '3c1bde65e8ef9dedbfc0d2b29ca248e77b1e6a9db1f57e738425c7b9abaf9e8c',
    registerDate: '2026-06-15',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sairisan',
    passwordHash: '87a86c7714a5f5a10c29620b5fe898d04f991f61a05fa0c3c0ac6b89434efe8d',
    registerDate: '2026-06-15',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Dracent777',
    passwordHash: '3eae013131a3daa920fd4d2fcffe762d2d4c8ac9c8c3db70280134d0818012fc',
    registerDate: '2026-06-15',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'test',
    passwordHash: '3669ffb921cca6ee1edfe0f1e620fc2379771e9a8bd92659904540e984f3209e',
    registerDate: '2026-06-16',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '豆包AI',
    passwordHash: '3669ffb921cca6ee1edfe0f1e620fc2379771e9a8bd92659904540e984f3209e',
    registerDate: '2026-06-16',
    score: 30,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'aaazo',
    passwordHash: '28cbebbbbdf9cc55139f35d5e0d5ef466ebb2114431f1ca137f3d1c2baeadf35',
    registerDate: '2026-06-16',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Richie',
    passwordHash: '6c595b1084708a3dfb52fb815cdae8da0475ede8beda3ca3e3d1215a0d32e69c',
    registerDate: '2026-06-16',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'lqwyz',
    passwordHash: '11819e64d08614c3f550f2d59ebef9391b4dbeeb57f79acfc74fd15c211c0bd6',
    registerDate: '2026-06-16',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'lumine1',
    passwordHash: '4d2a101b8d0c1616e868f552f5ee16ad8d4a476e6b8b296eeb418b910df29099',
    registerDate: '2026-06-17',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'たそーー',
    passwordHash: 'd4178d583027a8e0392191be71cd02c5576196f5e7bbb4ea58340ab8e6890aeb',
    registerDate: '2026-06-17',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'zzzjjjjkkkk',
    passwordHash: '50ee23f421cc42fff4265277e5a594787e7cceaefe427d976aeca5ce7dbf0a5e',
    registerDate: '2026-06-17',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '岩永琴子',
    passwordHash: 'c4cd1d94f47b9d559a3b67a9880938abf419a9b00dbd371e5db14197d2def8ad',
    registerDate: '2026-06-18',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '淋见钟',
    passwordHash: 'a87d55e1c5b8960fb1684db8c94e69cf517b97d93f985b42e831114542a8e3e3',
    registerDate: '2026-06-18',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ken0yuan',
    passwordHash: '8659ce659847c98bca17f4943ec527106151c208ca8ddcd796deed6e945e4523',
    registerDate: '2026-06-18',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'zziw',
    passwordHash: 'b43830da6444dbb83d0a3b9dc91f92ad51d49a1d7ffca19a5cb948d635d08f67',
    registerDate: '2026-06-18',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'tyoa_huka@icloud.com',
    passwordHash: '4e3fb11f9b0b16e5deca32a5d58b24cca9d8f0fc1e5547416fa6be866edebcb4',
    registerDate: '2026-06-19',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ゆーあ',
    passwordHash: '4e3fb11f9b0b16e5deca32a5d58b24cca9d8f0fc1e5547416fa6be866edebcb4',
    registerDate: '2026-06-19',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ddddd',
    passwordHash: '059a00192592d5444bc0caad7203f98b506332e2cf7abb35d684ea9bf7c18f08',
    registerDate: '2026-06-20',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'qiangu',
    passwordHash: '3d291b445d399f49d252893b699f94394c2b6fd86561a33c0d5bfcd950c5c8b5',
    registerDate: '2026-06-20',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '白夜的小猫',
    passwordHash: '16e9376f01133eea1b075ee6b45012d4c1788fb88ca00b103bf9352be7b8253a',
    registerDate: '2026-06-21',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'yukinya',
    passwordHash: 'c73744028a591a8decf33aacc23c6696694ef2f103a6b766ccbaaeada6406f17',
    registerDate: '2026-06-21',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Luminous',
    passwordHash: '66c3ad427967286b750079d5a36417999c25d6d4a4f44ead404c8aef6a558ed8',
    registerDate: '2026-06-22',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sr.miru.senyou',
    passwordHash: 'b4f9efba9d9a42d9535b9a4ce8e0c26ebb11541919302a24ebffc18df096b8af',
    registerDate: '2026-06-22',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '心已烟污',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-06-22',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '13958944670',
    passwordHash: '57a5958c40879acf429bc30ed1aa9cb92636b929adb38aa82bc43a75b38b87f2',
    registerDate: '2026-06-23',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '天心无忧',
    passwordHash: '51f2c1a3f6c06eb9a76f98eb88363ae7b56cc2122a5f432bea2772e53bae2fb4',
    registerDate: '2026-06-23',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'tianyao0522',
    passwordHash: 'f3e01cd21aee996ad3e3264c19204750624fbb1d20db2209b389b9219cc569ca',
    registerDate: '2026-06-23',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sounusmo',
    passwordHash: 'c24007b6e63659810fd7e2025c3d56bf1b75dd0b8c4cdaa00b0b08abc20df32f',
    registerDate: '2026-06-23',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Lanthdia',
    passwordHash: '24e25bedfaffc894d145a598f952175bb6b8853c4e23f347b8aacce7f1c4d110',
    registerDate: '2026-06-23',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'takeshi1',
    passwordHash: '9d20aa860a2ae9e0edf986308261620eb08166531988ab19fb4b1d6987c13b84',
    registerDate: '2026-06-24',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '莱艮芬德',
    passwordHash: 'f0189a20ee9a1374e9cf8806cb71cb813fdf2c39fd8f5e1fd2101fd2edfc0b34',
    registerDate: '2026-06-24',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '494851035',
    passwordHash: '9e0945e83b017e78ad52e0c1e8b809b780c497ca9c15ee34edc8bce25475fb1b',
    registerDate: '2026-06-24',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '31212',
    passwordHash: '2558a34d4d20964ca1d272ab26ccce9511d880579593cd4c9e01ab91ed00f325',
    registerDate: '2026-06-25',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'とろろ',
    passwordHash: 'dbc5e84bd3b188c611f3cf8ece3db191cf5e9aca3388dc6b089f104f3d4d9926',
    registerDate: '2026-06-25',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'neikos496',
    passwordHash: '3c532b0726d247e00483995b51e950066c8d779194bd507ca870bae033422cac',
    registerDate: '2026-06-25',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'smkj',
    passwordHash: 'd56b3fe9392b4ea03348ffbb70fa931de6d381e4cd04de3e634b4dece69a39ef',
    registerDate: '2026-06-25',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'xyz',
    passwordHash: '1d322d85176f35f0a9d656eb9c2d6960d1037ca99e66944a2387ba191c3e096b',
    registerDate: '2026-06-25',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'mashiro',
    passwordHash: 'e9d80a8049b912adedfc392ceeccf4f3c1f15c2459a3148712475fa30aab9e26',
    registerDate: '2026-06-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'KKSK1116',
    passwordHash: 'ded1f4bce2ffa73c61386aaa444bfb1fc610a007e17a8743347415a0028070bd',
    registerDate: '2026-06-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'tim',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-06-26',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'あああ',
    passwordHash: '118ffba6ea4e2c4bcd6f23f5868e0e57713ecb68e7337aebd9efb3a162e22c9f',
    registerDate: '2026-06-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '245271829',
    passwordHash: '5406210ee315a40368f8f8801448279133ac7e4f166506723ca17c4163f6c21a',
    registerDate: '2026-06-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ianshaw',
    passwordHash: '2bf9ba581d460b9fbb5e3f4eddfaff0bae05718a4dfb7b80313e0bc80b989a98',
    registerDate: '2026-06-27',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '13937711875',
    passwordHash: '52ea026afa4a6e1ed9314074836d22e280f41113eb0a13222df7d1740addc2bc',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Noviluna',
    passwordHash: 'ec447b96ff87f3a973250852a773c62b0ac4cd740ee62bd0c39d3bf650d27c9e',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Mizu_upper',
    passwordHash: 'd40be69c5ca575e2862d1baf3a0ca9ab90d0ffc7eb9f23803399d9c47e52a0ee',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'sagiri',
    passwordHash: '177e3fe91b4695a1267afbd26915341c612cf7f47e44d524599449ca66387e1e',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'hajiha',
    passwordHash: 'c0d332f416b8f1acd4968a2594d2c2bb5d4545cbb43fb403445d7924c670d3ed',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'ifeilingx',
    passwordHash: 'b905109d5a5bbdbe30351f8855b86358f1afb0133fa96f50fc917b01d10506db',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'xyutuc',
    passwordHash: 'b905109d5a5bbdbe30351f8855b86358f1afb0133fa96f50fc917b01d10506db',
    registerDate: '2026-06-28',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'tuanmaocou',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-06-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '六月.',
    passwordHash: 'e824b32b41a016340145fc5ff28effda7bcf295a1a529b66eff7a5701d9f4bb4',
    registerDate: '2026-06-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '148244647@qq.com',
    passwordHash: '4dc067eb9d24df6036d49a87c527ef594f93220265f94ab37d274e55a072b69a',
    registerDate: '2026-06-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Vegeta',
    passwordHash: 'e6c258f96bde0d19549f7237c2d7f4d68703c79f407f0a1798037560b0ffa9fc',
    registerDate: '2026-06-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '依依依',
    passwordHash: '792cb40a7917cd9ef8b26f5e112e39ab202d6fb37bb27f5ef228721dedefd64b',
    registerDate: '2026-06-29',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'youakasakura',
    passwordHash: '4c7f705cbdd80edf67f1c32576b06f6bef6f1b195df5b1e2c345eb5f6d33fd5f',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'greatlove',
    passwordHash: '7b40a394fa8d50e0e2a6302b4dd5cb185b6c0fe5d0e795a873b47dfdbab31413',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '11111',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'wzc1201',
    passwordHash: 'e1209bc8ab14cbee16aa7ce50214df947965f5bc6be65e58eefca6de31efcf40',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '玛卡巴卡',
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: 'Djk',
    passwordHash: 'c3bce6f80c4f1b24f757376ad88dfde4f9ab86f1f4bec903b80c8ebd8cf97a08',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
},
    {
    username: '2178',
    passwordHash: 'dfea915644112bef7072ce34098abe9ac0383205a0ffed22c1f16aac78599866',
    registerDate: '2026-06-30',
    score: 0,
    bilibiliNames: [],
    isAdmin: false,
    resetCount: 0,
    lastResetDate: null
}
];

// 通关记录数据
const Records = [
        {
            id: 1,
            player: '眞過分',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 1,
            constgold: 0,
            notes: '3星武器',
            video: 'https://www.bilibili.com/video/BV1CLhmziEsF',
            status: 'approved',
            submitTime: '2025/8/28 21:34:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 2,
            player: 'CHiwenKi',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 101,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 1,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1YBakzuEsb/',
            status: 'approved',
            submitTime: '2025/9/4 7:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 3,
            player: 'うみラ',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 0,
            notes: '精3大月卡武器',
            video: 'https://www.bilibili.com/video/BV1qpaSzYE2U/',
            status: 'approved',
            submitTime: '2025/9/4 23:04:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 4,
            player: '晓风月落疏影斜',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 1,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV15degzsEjy/',
            status: 'approved',
            submitTime: '2025/8/20 17:31:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 5,
            player: '小渣渣��',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1dPtAzsE1W/',
            status: 'approved',
            submitTime: '2025/8/6 16:02:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 6,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 3,
            constgold: 0,
            notes: '神乐瓦',
            video: 'https://www.bilibili.com/video/BV1KqtRz9EBa/',
            status: 'approved',
            submitTime: '2025/8/12 13:25:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 7,
            player: '情灬惋惜',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 3,
            constgold: 0,
            notes: '精5螭骨火神',
            video: 'https://www.bilibili.com/video/BV1ophCzLEje/',
            status: 'approved',
            submitTime: '2025/8/31 14:01:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 8,
            player: '糖渡',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 2
                    },
                {
                        character: '菲谢尔',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 2,
            notes: '精2鸟枪',
            video: 'https://www.bilibili.com/video/BV1Syt6zQEa4/',
            status: 'approved',
            submitTime: '2025/8/8 2:12:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 9,
            player: 'listener021',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 3,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1pqtzzBEGc/',
            status: 'approved',
            submitTime: '2025/8/7 20:15:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 10,
            player: '稻妻小墨言',
            mainc: '恰斯卡',
            team: [
                {
                        character: '恰斯卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1xVtbz5ERd/',
            status: 'approved',
            submitTime: '2025/8/9 18:35:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 11,
            player: '舞之叶',
            mainc: '恰斯卡',
            team: [
                {
                        character: '恰斯卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 4,
            constgold: 0,
            notes: '若水恰',
            video: 'https://www.bilibili.com/video/BV17iewzTEMp/',
            status: 'approved',
            submitTime: '2025/8/19 20:36:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 12,
            player: 'yum_YE',
            mainc: '恰斯卡',
            team: [
                {
                        character: '恰斯卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 4,
            constgold: 2,
            notes: '2莫等效1命',
            video: 'https://www.bilibili.com/video/BV1rttHzDE6T',
            status: 'approved',
            submitTime: '2025/8/9 2:01:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 13,
            player: 'Angel恋纸',
            mainc: '恰斯卡',
            team: [
                {
                        character: '恰斯卡',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 5,
            constgold: 1,
            notes: '飞雷恰',
            video: 'https://www.bilibili.com/video/BV1NXtBzzEg5/',
            status: 'approved',
            submitTime: '2025/8/7 21:11:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 14,
            player: 'くろがねいつき（黑の辉）',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏洛蒂',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 108,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 5,
            constgold: 0,
            notes: '没有爱可菲',
            video: 'https://www.bilibili.com/video/BV1bPeazzEpW/',
            status: 'approved',
            submitTime: '2025/8/22 22:44:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 15,
            player: 'Akuuuuuukin',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 1
                    }
            ],
            time: 105,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 7,
            constgold: 0,
            notes: '护摩爱',
            video: 'https://www.bilibili.com/video/BV1tzbJzbEk6/',
            status: 'approved',
            submitTime: '2025/8/15 9:45:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 16,
            player: 'yq_不爆仙人版',
            mainc: '嘉明',
            team: [
                {
                        character: '嘉明',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 0,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1GfeyznEvQ/',
            status: 'approved',
            submitTime: '2025/8/27 13:35:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 17,
            player: 'Karon_Li2',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 2,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1cWtKzuEDX/',
            status: 'approved',
            submitTime: '2025/8/7 8:40:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 18,
            player: 'aAASK_',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 2,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV18renzyEKt/',
            status: 'approved',
            submitTime: '2025/8/24 23:10:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 19,
            player: 'Karon_Li2',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 2,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1sYbnzpENJ/',
            status: 'approved',
            submitTime: '2025/8/15 16:44:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 20,
            player: '晓风月落疏影斜',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '烟绯',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 3,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1kdYvzqEaZ/',
            status: 'approved',
            submitTime: '2025/8/16 18:21:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 21,
            player: 'Nukeyowo',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 3,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1cHeCzoEb3/',
            status: 'approved',
            submitTime: '2025/8/27 9:23:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 22,
            player: '从而忘却之外',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 1,
            notes: '精3大月卡武器',
            video: 'https://www.bilibili.com/video/BV12ht8zDE9S/',
            status: 'approved',
            submitTime: '2025/8/10 0:52:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 23,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Eftoz7EgC/',
            status: 'approved',
            submitTime: '2025/8/13 9:55:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 24,
            player: 'eva935',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 0,
            notes: '1命塔利雅',
            video: 'https://www.bilibili.com/video/BV1eTYezHEGU/',
            status: 'approved',
            submitTime: '2025/8/16 13:12:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 25,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 111,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1MjbEzxErx/',
            status: 'approved',
            submitTime: '2025/8/15 9:40:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 26,
            player: '羊套橘子',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 5,
            constgold: 0,
            notes: '波波剑丝',
            video: 'https://www.bilibili.com/video/BV1CBbezxEbb/',
            status: 'approved',
            submitTime: '2025/8/14 4:18:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 27,
            player: 'くろがねいつき（黑の辉）',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏洛蒂',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1QdY1z7E6B/',
            status: 'approved',
            submitTime: '2025/8/17 19:45:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 28,
            player: 'kanjzyane',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1jMaCzUEZ1/',
            status: 'approved',
            submitTime: '2025/9/4 4:01:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 29,
            player: '蕟QWQ',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 1,
            notes: '板砖希',
            video: 'https://www.bilibili.com/video/BV1bGemzJE97/',
            status: 'approved',
            submitTime: '2025/8/28 0:30:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 30,
            player: 'ooooo宁',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 1,
            notes: '苍古希',
            video: 'https://www.bilibili.com/video/BV14Tt4z6Eop/',
            status: 'approved',
            submitTime: '2025/8/9 15:02:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 31,
            player: 'tiaopidehiahia',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 112,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1nGtpzDEtf/',
            status: 'approved',
            submitTime: '2025/8/8 23:59:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 32,
            player: '有风来过的痕迹',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1RttPzoErU/',
            status: 'approved',
            submitTime: '2025/8/6 19:52:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 33,
            player: '殇の火',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 99,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 4,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1GhtpzBECJ/',
            status: 'approved',
            submitTime: '2025/8/8 22:01:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 34,
            player: '舞之叶',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的玳龟 · 坚盾轰霆',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1V8YYzmEtq/',
            status: 'approved',
            submitTime: '2025/8/8 23:59:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 35,
            player: '米酒Yahalo',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1AEtKzCEnW/',
            status: 'approved',
            submitTime: '2025/8/7 0:57:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 36,
            player: '末北Neko',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 2,
            constgold: 0,
            notes: '创作体验服',
            video: 'https://www.bilibili.com/video/BV1cXgpzkExr/',
            status: 'approved',
            submitTime: '2025/7/23 12:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 37,
            player: '漪棘',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 2,
            constgold: 0,
            notes: '创作体验服',
            video: 'https://www.bilibili.com/video/BV1xwgszsEye/',
            status: 'approved',
            submitTime: '2025/7/23 12:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 38,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1qkb8zTENb/',
            status: 'approved',
            submitTime: '2025/8/13 12:55:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 39,
            player: 'Karon_Li2',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 2,
            constgold: 0,
            notes: '3星武器',
            video: 'https://www.bilibili.com/video/BV1FQYQzLEWu/',
            status: 'approved',
            submitTime: '2025/8/21 17:38:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 40,
            player: '木村拓冶',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '卡齐娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 98,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1DktPz7EY3/',
            status: 'approved',
            submitTime: '2025/8/6 20:33:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 41,
            player: '变成星星吧kirara',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 116,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 2,
            constgold: 1,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1BLamz8EV7/',
            status: 'approved',
            submitTime: '2025/9/4 19:37:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 42,
            player: '霓裳羽衣miyano',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 118,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 2,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ixa6zzEzo/',
            status: 'approved',
            submitTime: '2025/9/4 1:02:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 43,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '夜兰',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 3,
            constgold: 0,
            notes: '精5决斗，剧诗buff',
            video: 'https://www.bilibili.com/video/BV173a3z4EMp/',
            status: 'approved',
            submitTime: '2025/9/3 12:38:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 44,
            player: '滤叶y',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 3,
            constgold: 0,
            notes: '金珀',
            video: 'https://www.bilibili.com/video/BV1vFY8z6EgZ/',
            status: 'approved',
            submitTime: '2025/8/19 7:24:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 45,
            player: 'くろがねいつき（黑の辉）',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1sNamzTEAc',
            status: 'approved',
            submitTime: '2025/9/4 18:58:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 46,
            player: 'Light__Quantum',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '枫原万叶',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 3,
            constgold: 0,
            notes: '精5大月卡武器',
            video: 'https://www.bilibili.com/video/BV1aubrzbE4X/',
            status: 'approved',
            submitTime: '2025/8/14 22:35:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 47,
            player: '萤烛映星',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的皮皮潘偶像 · 百诈瞬变',
            gold: 3,
            constgold: 1,
            notes: '精4大月卡武器',
            video: 'https://www.bilibili.com/video/BV1eXegz4EvH/',
            status: 'approved',
            submitTime: '2025/8/20 13:06:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 48,
            player: '眞过分&CHiwenKi',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 110,
            boss: '兆载永劫龙兽 · 歼灭构型',
            gold: 2,
            constgold: 0,
            notes: '精5螭骨剑',
            video: 'https://www.bilibili.com/video/BV1VkWPzCEug/',
            status: 'approved',
            submitTime: '2025/9/19 7:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 49,
            player: '眞过分',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '兆载永劫龙兽 · 歼灭构型',
            gold: 3,
            constgold: 0,
            notes: '精5螭骨剑',
            video: 'https://www.bilibili.com/video/BV1daptzyEu9/',
            status: 'approved',
            submitTime: '2025/9/17 19:44:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 50,
            player: '凝度_Du',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '兆载永劫龙兽 · 歼灭构型',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1qppWzNEEr/',
            status: 'approved',
            submitTime: '2025/9/17 12:02:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 51,
            player: '变成星星吧kirara',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '兆载永劫龙兽 · 歼灭构型',
            gold: 4,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1bY4qzzEtD/',
            status: 'approved',
            submitTime: '2025/10/15 17:30:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 52,
            player: 'CHiwenKi',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 110,
            boss: '兆载永劫龙兽 · 歼灭构型',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ptpezrEeq/',
            status: 'approved',
            submitTime: '2025/10/15 17:30:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 53,
            player: '非气转移',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '���糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '兆载永劫龙兽 · 歼灭构型',
            gold: 5,
            constgold: 0,
            notes: '精3夜壶≈冲浪',
            video: 'https://www.bilibili.com/video/BV1UG4LzCERd',
            status: 'approved',
            submitTime: '2025/10/10 3:16:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 54,
            player: '末北Neko',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '柯莱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 1,
            constgold: 0,
            notes: '1级武器',
            video: 'https://www.bilibili.com/video/BV1hBa6zhExF',
            status: 'approved',
            submitTime: '2025/9/4 12:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 55,
            player: '阿布relax丶',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 106,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1PKpvz1EXJ/',
            status: 'approved',
            submitTime: '2025/9/18 14:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 56,
            player: '米酒Yahalo',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '雷泽',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 49,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1SDJozVEwK/',
            status: 'approved',
            submitTime: '2025/9/22 3:38:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 57,
            player: '眞过分',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '丽莎',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 41,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1wMxkzTE3F/',
            status: 'approved',
            submitTime: '2025/10/9 15:15:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 58,
            player: '名侦探雾切',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 32,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 1,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1M5x8z1EGF',
            status: 'approved',
            submitTime: '2025/10/5 7:43:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 59,
            player: '阿布relax丶',
            mainc: '妮露',
            team: [
                {
                        character: '妮露',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '纳西妲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '瑶瑶',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1TPpqzREaM/',
            status: 'approved',
            submitTime: '2025/9/18 17:33:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 60,
            player: '艾伦auk',
            mainc: '纳西妲',
            team: [
                {
                        character: '纳西妲',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夜兰',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '雷电将军',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1UC48zUE6y/',
            status: 'approved',
            submitTime: '2025/10/14 20:39:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 61,
            player: '艾伦auk',
            mainc: '纳西妲',
            team: [
                {
                        character: '纳西妲',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '夜兰',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1NcWjzcEHH/',
            status: 'approved',
            submitTime: '2025/9/20 8:28:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 62,
            player: '烤鱼要无了',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 4,
            constgold: 0,
            notes: '95级，精1大月卡',
            video: 'https://www.bilibili.com/video/BV1GAHAzeEE2',
            status: 'approved',
            submitTime: '2025/10/2 16:46:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 63,
            player: '---大风纪官---',
            mainc: '艾尔海森',
            team: [
                {
                        character: '艾尔海森',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '纳西妲',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 5,
            constgold: 0,
            notes: '3星武器',
            video: 'https://www.bilibili.com/video/BV16U4xzfEmh',
            status: 'approved',
            submitTime: '2025/10/11 13:44:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 64,
            player: '变成星星吧kirara',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '纳西妲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 4,
            constgold: 0,
            notes: '精2大月卡武器',
            video: 'https://www.bilibili.com/video/BV1CF4vzWEWD/',
            status: 'approved',
            submitTime: '2025/10/15 13:18:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 65,
            player: '我是中中啊',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '纳西妲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的岩居蟹 · 百万爆轰',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1vdHszqE1C/',
            status: 'approved',
            submitTime: '2025/10/2 0:29:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 66,
            player: '秋茶JM',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 92,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1J4p8zdEZm/',
            status: 'approved',
            submitTime: '2025/9/17 22:18:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 67,
            player: '秋茶JM',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1TXWVzZEg5/',
            status: 'approved',
            submitTime: '2025/9/19 19:59:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 68,
            player: '秋茶JM',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 75,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1KYHpz1EAn/',
            status: 'approved',
            submitTime: '2025/10/1 22:54:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 69,
            player: 'Ladivpubuli',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1yepbzwEWS/',
            status: 'approved',
            submitTime: '2025/9/18 0:52:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 70,
            player: 'Lin-Eric',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 111,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 3,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1mXJRzPEfg/',
            status: 'approved',
            submitTime: '2025/9/22 0:50:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 71,
            player: 'Lin-Eric',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 5,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 93,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 3,
            constgold: 0,
            notes: '5命伊安珊',
            video: 'https://www.bilibili.com/video/BV1sTnpzzEa5/',
            status: 'approved',
            submitTime: '2025/9/25 1:25:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 72,
            player: '眞过分',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1jgn5zvE77/',
            status: 'approved',
            submitTime: '2025/9/29 14:32:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 73,
            player: 'CHiwenKi',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 107,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1QonvzXEze/',
            status: 'approved',
            submitTime: '2025/9/27 17:43:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 74,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 107,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1suptz8EbY/',
            status: 'approved',
            submitTime: '2025/9/17 20:50:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 75,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 4,
            constgold: 1,
            notes: '等效0命莫娜',
            video: 'https://www.bilibili.com/video/BV1JindzZE1z/',
            status: 'approved',
            submitTime: '2025/9/28 20:16:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 76,
            player: '末北Neko',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1XvJDzFEAo/',
            status: 'approved',
            submitTime: '2025/9/24 12:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 77,
            player: '今天依然细雨纷飞',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '九条裟罗',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1L6HtzLEyn/',
            status: 'approved',
            submitTime: '2025/10/2 10:46:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 78,
            player: 'CHiwenKi',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV18hn8zKE6Q',
            status: 'approved',
            submitTime: '2025/9/25 17:18:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 79,
            player: 'Nukeyowo',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1aRnGzdEVi/',
            status: 'approved',
            submitTime: '2025/9/26 20:17:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 80,
            player: '风吹过九忠',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '枫原万叶',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 119,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 5,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1WMn3zuEfn/',
            status: 'approved',
            submitTime: '2025/9/26 17:24:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 81,
            player: '奕欢_y',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '大月卡武器',
            video: 'https://www.bilibili.com/video/BV1xr2MBnEsP/',
            status: 'approved',
            submitTime: '2025/11/7 17:24:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 82,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV14y1mBoE42/',
            status: 'approved',
            submitTime: '2025/11/8 11:21:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 83,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1RwySBgEHC/',
            status: 'approved',
            submitTime: '2025/10/29 18:34:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 84,
            player: '凌凌还是好困',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 4,
            constgold: 5,
            notes: '雾切丝',
            video: 'https://www.bilibili.com/video/BV12u17BuErS/',
            status: 'approved',
            submitTime: '2025/11/1 16:45:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 85,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 2
                    },
                {
                        character: '迪奥娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 4,
            constgold: 1,
            notes: '95级',
            video: 'https://www.bilibili.com/video/BV1ig1XBxEXJ/',
            status: 'approved',
            submitTime: '2025/11/8 16:56:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 86,
            player: '氪星难民',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 4,
            constgold: 0,
            notes: '祭礼龙',
            video: 'https://www.bilibili.com/video/BV1S4kRBrE34/',
            status: 'approved',
            submitTime: '2025/11/10 0:56:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 87,
            player: 'Light__Quantum',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 4,
            constgold: 0,
            notes: '大月卡武器',
            video: 'https://www.bilibili.com/video/BV1GqkkBjEvZ/',
            status: 'approved',
            submitTime: '2025/11/11 18:57:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 88,
            player: '风扬轻语',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '瑶瑶',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 3,
            constgold: 0,
            notes: '大月卡武器',
            video: 'https://www.bilibili.com/video/BV1Cd16BKEZh/',
            status: 'approved',
            submitTime: '2025/11/4 8:48:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 89,
            player: '小渣渣花',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 118,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 1,
            notes: '天空班',
            video: 'https://www.bilibili.com/video/BV1bpyYBQEPi/',
            status: 'approved',
            submitTime: '2025/10/31 0:30:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 90,
            player: '八风寻',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '大月卡武器*2',
            video: 'https://www.bilibili.com/video/BV1DXySBKEYV/',
            status: 'approved',
            submitTime: '2025/10/29 16:12:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 91,
            player: '最ニ网管',
            mainc: '迪卢克',
            team: [
                {
                        character: '迪卢克',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '闲云',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '凯亚',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 3,
            constgold: 2,
            notes: '满命迪卢克等效1命',
            video: 'https://www.bilibili.com/video/BV1ePybBEEmC',
            status: 'approved',
            submitTime: '2025/10/30 14:02:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 92,
            player: '凝渡_Du',
            mainc: '牛顿',
            team: [
                {
                        character: '希格雯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '琴',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 99,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 2,
            constgold: 2,
            notes: '伊涅芙无需专武，琴等效1命',
            video: 'https://www.bilibili.com/video/BV1iJ13BMEtu/',
            status: 'approved',
            submitTime: '2025/11/1 7:45:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 93,
            player: '八风寻',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 103,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 3,
            constgold: 0,
            notes: '大月卡武器*2',
            video: 'https://www.bilibili.com/video/BV1Bx17BtEBD/',
            status: 'approved',
            submitTime: '2025/11/5 9:32:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 94,
            player: 'Gfelix',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 3,
            constgold: 0,
            notes: '大月卡武器',
            video: 'https://www.bilibili.com/video/BV1HDkfBkEid/',
            status: 'approved',
            submitTime: '2025/11/10 17:09:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 95,
            player: '风清雨稀月淡',
            mainc: '牛顿',
            team: [
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 68,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 0,
            constgold: 1,
            notes: '1级1星武器，无圣遗物，等效0命',
            video: 'https://www.bilibili.com/video/BV1491HBRE1j/',
            status: 'approved',
            submitTime: '2025/11/5 6:45:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 96,
            player: '凝渡_Du',
            mainc: '牛顿',
            team: [
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 85,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 0,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1141ABhENi/',
            status: 'approved',
            submitTime: '2025/11/3 8:00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 97,
            player: 'JX67',
            mainc: '牛顿',
            team: [
                {
                        character: '希格雯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1c71PB4EGr/',
            status: 'approved',
            submitTime: '2025/10/31 11:59:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 98,
            player: 'lz北罗',
            mainc: '牛顿',
            team: [
                {
                        character: '希格雯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 74,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 2,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ZVyxByEFj/',
            status: 'approved',
            submitTime: '2025/10/31 19:40:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 99,
            player: '漪棘',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 0,
            notes: '黑樱枪仆人',
            video: 'https://www.bilibili.com/video/BV1X51tB1EgU/',
            status: 'approved',
            submitTime: '2025/11/6 5:11:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 100,
            player: '疏檠',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    }
            ],
            time: 119,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 2,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1j51XBXEeA/',
            status: 'approved',
            submitTime: '2025/11/8 16:58:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 101,
            player: 'kanjzyane',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Lp1iBVErU/',
            status: 'approved',
            submitTime: '2025/11/4 2:31:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 104,
            player: '-泠汐_',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '霜夜巡天灵主 �� 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '1命爱诺',
            video: 'https://www.bilibili.com/video/BV1G2ymBYE2z/',
            status: 'approved',
            submitTime: '2025/10/29 12:3:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 105,
            player: '舞之叶',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Yi14BkEE8/',
            status: 'approved',
            submitTime: '2025/11/6 14:40:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 140,
            player: 'TheHaiKo',
            mainc: '牛顿',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 110,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV1KjqsBuEUF',
            status: 'approved',
            submitTime: '2025/12/15 22:57:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 139,
            player: '米酒Yahalo',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV1EoqtBBEZY/',
            status: 'approved',
            submitTime: '2025/12/16 6:42:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 138,
            player: 'Ender_cy',
            mainc: '雷泽',
            team: [
                {
                        character: '雷泽',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 118,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 0,
            constgold: 5,
            notes: '风鹰班，天空菲谢尔',
            video: 'www.bilibili.com/video/BV12nmiBhEBh',
            status: 'approved',
            submitTime: '2025/12/14 13:26:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 137,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV1eDmKBbEuy/',
            status: 'approved',
            submitTime: '2025/12/11 10:40:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 136,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '坎蒂丝',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV17smTBKEtc/',
            status: 'approved',
            submitTime: '2025/12/11 10:30:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 135,
            player: '梦醒是一只猫猫',
            mainc: '温迪',
            team: [
                {
                        character: '温迪',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '珐露珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 111,
            boss: '���经百战的暝视龙 · 霜雪苛念',
            gold: 2,
            constgold: 1,
            notes: '70级弹弓温迪，精5狼牙杜林，天空班',
            video: 'www.bilibili.com/video/BV1EdmxBoE2E/',
            status: 'approved',
            submitTime: '2025/12/10 17:21:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 134,
            player: '漪棘',
            mainc: '嘉明',
            team: [
                {
                        character: '嘉明',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 0,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV1NHmsBwExr/',
            status: 'approved',
            submitTime: '2025/12/10 11:12:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 133,
            player: 'Lin-Eric',
            mainc: '牛顿',
            team: [
                {
                        character: '琴',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '枫原万叶',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 19,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 2,
            constgold: 2,
            notes: '',
            video: 'www.bilibili.com/video/BV1JZmxBxEWi',
            status: 'approved',
            submitTime: '2025/12/10 15:48:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 132,
            player: 'hzgck',
            mainc: '牛顿',
            team: [
                {
                        character: '琴',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 83,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 0,
            constgold: 2,
            notes: '',
            video: 'www.bilibili.com/video/BV1dAmsB5EjT/',
            status: 'approved',
            submitTime: '2025/12/10 12:10:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 131,
            player: '霂枔Official',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 4,
            constgold: 5,
            notes: '',
            video: 'www.bilibili.com/video/BV1Pbm4BNEj1/',
            status: 'approved',
            submitTime: '2025/12/10 14:43:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 130,
            player: '木村拓冶',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 96,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV1E6m4BoEbw/',
            status: 'approved',
            submitTime: '2025/12/10 14:58:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 129,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 97,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV1PpmsBhEjR/',
            status: 'approved',
            submitTime: '2025/12/10 11:36:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 128,
            player: 'yq_不爆仙人版',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 5,
            notes: '雾切丝柯克',
            video: 'www.bilibili.com/video/BV1RrmsB7EC6/',
            status: 'approved',
            submitTime: '2025/12/10 11:50:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 127,
            player: '三月兔nana',
            mainc: '迪卢克',
            team: [
                {
                        character: '迪卢克',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 1,
            constgold: 11,
            notes: '100级迪卢克，精5大月卡，风鹰班',
            video: 'www.bilibili.com/video/BV18YmxBkEnQ/',
            status: 'approved',
            submitTime: '2025/12/10 16:54:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 126,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '夜兰',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 12,
            constgold: 1,
            notes: '板砖芙',
            video: 'www.bilibili.com/video/BV1d2mbB8Eon/',
            status: 'approved',
            submitTime: '2025/12/10 18:40:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 125,
            player: '凌凌还是好困',
            mainc: '牛顿',
            team: [
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 16,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1MCmtByEUn/',
            status: 'approved',
            submitTime: '2025/12/10 20:0:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 124,
            player: '热尊',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '希格雯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '恰斯卡',
                        constellation: 6,
                        weapon: 5
                    }
            ],
            time: 10,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 2,
            constgold: 0,
            notes: '摔伤325*4=1400w，无需恰',
            video: 'www.bilibili.com/video/BV16WSyBEEAk/',
            status: 'approved',
            submitTime: '2025/12/1 15:18:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 123,
            player: '小叮当xwx',
            mainc: '雷电将军',
            team: [
                {
                        character: '雷电将军',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '九条裟罗',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 5,
            constgold: 5,
            notes: '100级断浪雷神，餐叉夏，天空班，天空九条',
            video: 'https://www.bilibili.com/video/BV1kU2MByEHh',
            status: 'approved',
            submitTime: '2025/11/7 15:46:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 122,
            player: 'XTD111',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 1,
            notes: '精5螭骨剑玛，风鹰班',
            video: 'www.bilibili.com/video/BV1PySmBaEkB',
            status: 'approved',
            submitTime: '2025/12/2 0:37:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 121,
            player: 'CHiwenKi',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV19ySqBDE4W/',
            status: 'approved',
            submitTime: '2025/11/30 21:24:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 120,
            player: '阿源_wuii_',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '精5决斗仆',
            video: 'www.bilibili.com/video/BV1pQSKB1EHp',
            status: 'approved',
            submitTime: '2025/11/30 15:1:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 119,
            player: '冰封icyseal',
            mainc: '牛顿',
            team: [
                {
                        character: '温迪',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 27,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'www.bilibili.com/video/BV13eS7BoEEi/',
            status: 'approved',
            submitTime: '2025/11/28 22:54:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 118,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 1,
            notes: '95级胡桃，但是胡桃命座免费',
            video: 'www.bilibili.com/video/BV11HyKBBEL3',
            status: 'approved',
            submitTime: '2025/11/21 1:27:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 117,
            player: '小呜有点困',
            mainc: '牛顿',
            team: [
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '刻晴',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 12,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 1,
            notes: '',
            video: 'www.bilibili.com/video/BV1ezU6BZESe/',
            status: 'approved',
            submitTime: '2025/11/24 18:19:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 116,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 5,
            constgold: 1,
            notes: '',
            video: 'www.bilibili.com/video/BV1tEUHB8EwW/',
            status: 'approved',
            submitTime: '2025/11/22 10:30:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 115,
            player: '玲绪玲绪玲lx',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 14,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 1,
            notes: '',
            video: 'www.bilibili.com/video/BV1hAUSB5EKE/',
            status: 'approved',
            submitTime: '2025/11/25 17:36:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 114,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 2,
            notes: '95级胡桃，班尼特天空换原木刀是能出的，不差这1.6%的伤害，但是号上教官套充能差点意思',
            video: 'www.bilibili.com/video/BV11HyKBBEL3',
            status: 'approved',
            submitTime: '2025/11/21 1:27:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 113,
            player: '凌凌还是好困',
            mainc: '牛顿',
            team: [
                {
                        character: '琴',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '梦见月瑞希',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 15,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 2,
            notes: '瑞希未使用',
            video: 'https://www.bilibili.com/video/BV119yFBHEFH/',
            status: 'approved',
            submitTime: '2025/11/20 11:58:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 112,
            player: 'OverideaHQ',
            mainc: '牛顿',
            team: [
                {
                        character: '琴',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 21,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 1,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1qNCfBKEa4/',
            status: 'approved',
            submitTime: '2025/11/20 9:3:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 111,
            player: '小辉辉',
            mainc: '恰斯卡',
            team: [
                {
                        character: '恰斯卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 4,
            constgold: 1,
            notes: '',
            video: 'www.douyin.com/video/7536436461237144847',
            status: 'approved',
            submitTime: '2025/8/9 12:22:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 110,
            player: '米酒Yahalo',
            mainc: '牛顿',
            team: [
                {
                        character: '希格雯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 3,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 2,
            constgold: 2,
            notes: '琴等效1命',
            video: 'www.bilibili.com/video/BV1EfC2BrESK/',
            status: 'approved',
            submitTime: '2025/11/15 23:39:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 109,
            player: 'マラニー',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 85,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 5,
            constgold: 6,
            notes: '希专提升和100级几乎完全相等直接等效5金100级,有两次没暴击去掉最后一口85秒',
            video: 'www.bilibili.com/video/BV1dJC9BnEwb/',
            status: 'approved',
            submitTime: '2025/11/16 17:19:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 108,
            player: 'K9P9K',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '卡齐娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '精5大月卡',
            video: 'https://www.bilibili.com/video/BV1NL1kBGEbf/',
            status: 'approved',
            submitTime: '2025/11/4 14:15:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 107,
            player: '一只普通的魈厨',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的霜役人 · 涉血芒锋',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1P2yDBFEAo/',
            status: 'approved',
            submitTime: '2025/11/1 23:41:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 106,
            player: '河豚体123',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的执灯人 · 哀恸回响',
            gold: 6,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1kFC7BbEGR/',
            status: 'approved',
            submitTime: '2025/11/12 12:9:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 144,
            player: 'JX67',
            mainc: '温迪',
            team: [
                {
                        character: '温迪',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '珐露珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1CBqyBREsV/',
            status: 'approved',
            submitTime: '2025/12/21 5:26:0',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 147,
            player: '阿源_wuii_',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 2,
            constgold: 3,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Jxq1BXEnT/',
            status: 'approved',
            submitTime: '2025-12-21T12:27',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 148,
            player: 'SanKuru',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 2,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1FpBbByEfh/',
            status: 'approved',
            submitTime: '2025-12-23T03:32',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 149,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏洛蒂',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1vciEBwEY3/',
            status: 'approved',
            submitTime: '2026-01-04T21:36',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 150,
            player: '很菜的叶子',
            mainc: '雷电将军',
            team: [
                {
                        character: '雷电将军',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '九条裟罗',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 4,
            constgold: 3,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1dJikBKEDQ/',
            status: 'approved',
            submitTime: '2026-01-04T11:34',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 151,
            player: 'Csw_伟',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 1,
            constgold: 1,
            notes: '95级火神',
            video: 'https://www.bilibili.com/video/BV1FgiMBLEwB/',
            status: 'approved',
            submitTime: '2026-01-11T19:21',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 152,
            player: 'kanjzyane',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1UdBYBqEgB/',
            status: 'approved',
            submitTime: '2025-12-26T19:19',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 153,
            player: 'SanKuru',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV13CBQBbEWT/',
            status: 'approved',
            submitTime: '2025-12-25T19:55',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 154,
            player: '艾鸠_',
            mainc: '6.2金幻化',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '牛顿',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 1
                    }
            ],
            time: 180,
            boss: '6.2金幻化',
            gold: 10,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1fcqkBGEns/',
            status: 'approved',
            submitTime: '2025-12-20T20:14',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 155,
            player: '米酒Yahalo',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1GQmLBSEF2/',
            status: 'approved',
            submitTime: '2025-12-12T14:03',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 156,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏洛蒂',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 3,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV13fi1BTE4H/',
            status: 'approved',
            submitTime: '2026-01-07T20:34',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 157,
            player: 'CHiwenKi',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1oLvpB5EsL/',
            status: 'approved',
            submitTime: '2025-12-29T13:57',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 158,
            player: 'Nukeyowo',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1kfB4B3Em5/',
            status: 'approved',
            submitTime: '2025-12-22T21:41',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 159,
            player: '三年胖50斤',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 6,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1U9v2BvEuQ/',
            status: 'approved',
            submitTime: '2025-12-29T08:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 160,
            player: '鸽梓-',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '提纳里',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 3,
            constgold: 6,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1eTqQBFEoD/',
            status: 'approved',
            submitTime: '2025-12-19T00:51',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 161,
            player: '最ニ网管',
            mainc: '迪卢克',
            team: [
                {
                        character: '迪卢克',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 0,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1PXB4BjEm3/',
            status: 'approved',
            submitTime: '2025-12-22T22:56',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 162,
            player: '最ニ网管',
            mainc: '迪卢克',
            team: [
                {
                        character: '迪卢克',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '凯亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 0,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV13ymRBZEVc/',
            status: 'approved',
            submitTime: '2025-12-13T22:43',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 163,
            player: 'Hamlat',
            mainc: '迪卢克',
            team: [
                {
                        character: '迪卢克',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 108,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 0,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1QDqmB5EAJ',
            status: 'approved',
            submitTime: '2025-12-21T16:16',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 164,
            player: '怀念个锤子',
            mainc: '宵宫',
            team: [
                {
                        character: '宵宫',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 1,
            notes: '95级霄宫',
            video: 'https://www.bilibili.com/video/BV16bBgBoESw/',
            status: 'approved',
            submitTime: '2025-12-24T08:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 165,
            player: '敏感易碎小女孩',
            mainc: '魈',
            team: [
                {
                        character: '魈',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '珐露珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '闲云',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 4,
            constgold: 5,
            notes: '和濮鸢魈天空闲',
            video: 'https://www.bilibili.com/video/BV1tTmuBxEEJ/',
            status: 'approved',
            submitTime: '2025-12-11T12:27',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 166,
            player: 'Hamlat',
            mainc: '魈',
            team: [
                {
                        character: '魈',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 97,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 4,
            constgold: 2,
            notes: '天空魈1命未使用',
            video: 'https://www.bilibili.com/video/BV1qQBjBKE7Z/',
            status: 'approved',
            submitTime: '2025-12-24T19:49',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 167,
            player: '最ニ网管',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1C7B6B2EPb/',
            status: 'approved',
            submitTime: '2025-12-27T12:38',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 168,
            player: '阿源_wuii_',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 104,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 2,
            constgold: 3,
            notes: '100级菲林斯',
            video: 'https://www.bilibili.com/video/BV1Bz6fBwE7o/',
            status: 'approved',
            submitTime: '2026-01-12T10:11',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 169,
            player: '米酒Yahalo',
            mainc: '6.2紫幻化',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '牛顿',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '雷泽',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 318,
            boss: '6.2紫幻化',
            gold: 2,
            constgold: 2,
            notes: '00奈00鹿61班61菲谢尔',
            video: 'https://www.bilibili.com/video/BV1xHq7BQEmB/',
            status: 'approved',
            submitTime: '2025-12-18T09:30',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 170,
            player: '米酒Yahalo',
            mainc: '可莉',
            team: [
                {
                        character: '可莉',
                        constellation: 2,
                        weapon: 5
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 3,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1W2qtBLE5s/',
            status: 'approved',
            submitTime: '2025-12-16T05:49',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 171,
            player: '玲绪玲绪玲lx',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 73,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 0,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1nqvzBPEM8/',
            status: 'approved',
            submitTime: '2025-12-28T10:36',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 172,
            player: '雾中寻花香',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 23,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 0,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1SXv2BKEAq',
            status: 'approved',
            submitTime: '2025-12-29T03:54',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 173,
            player: '米酒Yahalo',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV16MqxBYE6N',
            status: 'approved',
            submitTime: '2025-12-16T05:08',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 174,
            player: 'C云谲',
            mainc: '牛顿',
            team: [
                {
                        character: '基尼奇',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 111,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1s5BQBEESX/',
            status: 'approved',
            submitTime: '2025-12-25T21:09',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 175,
            player: '阿源_wuii_',
            mainc: '牛顿',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1PrvpB4EJw/',
            status: 'approved',
            submitTime: '2025-12-29T12:45',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 176,
            player: '白云归空',
            mainc: '牛顿',
            team: [
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 20,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 1,
            constgold: 0,
            notes: '琴未使用',
            video: 'https://www.bilibili.com/video/BV1wwmGB4EfY/',
            status: 'approved',
            submitTime: '2025-12-11T22:53',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 177,
            player: '艾伦auk',
            mainc: '久岐忍',
            team: [
                {
                        character: '久岐忍',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '纳西妲',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/mTJuo6G',
            status: 'approved',
            submitTime: '2026-01-12T20:53',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 178,
            player: 'Tan90Plays',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1o7ikBqEhs/',
            status: 'approved',
            submitTime: '2026-01-04T11:29',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 179,
            player: '糖醋の排骨',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 5,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 3,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1vZmgBgErC/',
            status: 'approved',
            submitTime: '2025-12-12T00:40',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 180,
            player: '羊套橘子',
            mainc: '丝柯克',
            team: [
                {
                        character: '莫娜',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 3,
            constgold: 4,
            notes: '',
            video: 'https://b23.tv/qkIZP4Z',
            status: 'approved',
            submitTime: '2025-12-18T05:10',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 181,
            player: '羊套橘子',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/lZGLCuo',
            status: 'approved',
            submitTime: '2026-01-01T09:03',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 182,
            player: '智乃不吃芹菜',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 24,
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 0,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/mSVnyeK',
            status: 'approved',
            submitTime: '2025-12-28T13:09',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 183,
            player: '最ニ网管',
            mainc: '嘉明',
            team: [
                {
                        character: '嘉明',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 101,
            boss: '实验性场力发生装置 · 极端势能',
            gold: 0,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV17FB2BWECd/',
            status: 'approved',
            submitTime: '2025-12-24T23:30',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 184,
            player: '-泠汐_',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 3.5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Baz5BNEEx',
            status: 'approved',
            submitTime: '2026-01-21T13:03',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 185,
            player: '八风寻',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 3
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 1.5,
            notes: '审核：携带武器幻化且未正确展示面板',
            video: 'https://b23.tv/jZA3gwO',
            status: 'approved',
            submitTime: '2026-01-22T15:26',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 186,
            player: '羊套橘子',
            mainc: '哥伦比娅',
            team: [
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1PLzcBzE3a?vd_source=a9b3bee7dd21ef08abda168355b010b6',
            status: 'approved',
            submitTime: '2026-01-23T00:47',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 187,
            player: '羊套橘子',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '早柚',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 23,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 1,
            notes: '等效0命琴',
            video: 'https://www.bilibili.com/video/BV1HfzgBcEBb',
            status: 'approved',
            submitTime: '2026-01-24T05:31',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 188,
            player: '八风寻',
            mainc: '哥伦比娅',
            team: [
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/kV9yadC',
            status: 'approved',
            submitTime: '2026-01-24T01:24',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 189,
            player: 'GrilledFish',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '杜林',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '爱诺',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 110,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 5,
            constgold: 1,
            notes: '杜林2命但是几乎没提升\n审核：携带武器幻化并且未正确展示配置',
            video: 'https://www.bilibili.com/video/BV15AzzBwEpY/?pop_share=1&spm_id_from=333.40164.0.0',
            status: 'denied',
            submitTime: '2026-01-23T22:00',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 190,
            player: '影子-ombre',
            mainc: '��林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 1,
            notes: '1命菲林斯手操模拟0命\n每轮只放两小e两小q\n且第二个小e手操在6s外释放\n具体可看右下角在第二个小e刷新后会额外出现两秒计时器\n审核备注：审核时视频未公开展示，显示为视频不见了',
            video: 'https://www.bilibili.com/video/BV14DzyBeETw/',
            status: 'denied',
            submitTime: '2026-01-24T22:26',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 191,
            player: '阿源_wuii_',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 98,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '凹暴击',
            video: 'https://b23.tv/eXsICyd',
            status: 'approved',
            submitTime: '2026-01-25T18:05',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 192,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1KuzGBVED5?vd_source=c416aa380d558540a88006023b9e4fa7&spm_id_from=333.788.videopod.episodes',
            status: 'approved',
            submitTime: '2026-01-21T10:50',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 193,
            player: '刚创的新号',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 35,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 8,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1vFztBeEd3/?spm_id_from=333.1387.homepage.video_card.click&vd_source=31097e861f549191b9b5606a45514499',
            status: 'approved',
            submitTime: '2026-01-26T02:50',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 194,
            player: '阿源_wuii_',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 97,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/gkTOFtP',
            status: 'approved',
            submitTime: '2026-01-25T18:05',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 195,
            player: '刚创的新号',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 92,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ig6KB3Enj/?spm_id_from=333.1365.list.card_archive.click&vd_source=c0be0cf96170ce1a177276b1ed13a1eb',
            status: 'approved',
            submitTime: '2026-01-30T13:00',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 196,
            player: 'kanjzyane',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 89,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://bilibili.com/video/BV1ZU6JBQE3g/?spm_id_from=333.1387.homepage.video_card.click',
            status: 'approved',
            submitTime: '2026-01-31T23:38',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 197,
            player: '阿源_wuii_',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '卡齐娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/8eqrImR',
            status: 'approved',
            submitTime: '2026-02-01T15:46',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 198,
            player: '犹可追',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1XQFAz5ETo/?=0178403741a4dcb6eef94f3b7cbeec77',
            status: 'approved',
            submitTime: '2026-02-02T13:45',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 199,
            player: 'K9P9K',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '牛顿',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 174,
            boss: '6.3金幻化',
            gold: 12,
            constgold: 7,
            notes: '最低金金皮',
            video: 'https://b23.tv/5ZP8Awa',
            status: 'approved',
            submitTime: '2026-01-25T19:00',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 200,
            player: 'K9P9K',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 2,
            constgold: 3,
            notes: '莫娜等效0命，4命暴击溢出\n审核：莫娜12命等效不了，改3常驻金了',
            video: 'https://b23.tv/7zoxXmA',
            status: 'approved',
            submitTime: '2026-01-21T16:44',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 201,
            player: '阿源_wuii_',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '���齐娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 1,
            constgold: 0,
            notes: '严格等效 可以逐帧检查',
            video: 'https://b23.tv/Z8AcA0r',
            status: 'approved',
            submitTime: '2026-02-03T16:28',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 202,
            player: '成狗成果',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 3,
            constgold: 0,
            notes: '审核：携带武器幻化且未正确展示面板\n后续已补充',
            video: 'https://www.bilibili.com/video/BV1AjFMzyEub/?share_source=copy_web&vd_source=3f82456d9b0692bcb0680e514633e52d',
            status: 'approved',
            submitTime: '2026-02-02T19:47',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 203,
            player: '幻谬之瞳',
            mainc: '丝柯克',
            team: [
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 3,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1YB6EB6EVW?vd_source=392b1cf208fef5f64979d82e271cdaaa',
            status: 'approved',
            submitTime: '2026-01-28T17:18',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 204,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 4,
            constgold: 1,
            notes: '1莫等效0莫',
            video: 'https://www.bilibili.com/video/BV1kmfDBbExC',
            status: 'approved',
            submitTime: '2026-02-03T22:15',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 205,
            player: 'hope_小立',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 5,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1nkzFBwE8P/?vd_source=676b1171881babbd6fa49c5b605c58b7#reply115940461121949',
            status: 'approved',
            submitTime: '2026-01-23T09:15',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 206,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 3,
            constgold: 1,
            notes: '1命莫娜等效0命',
            video: 'https://b23.tv/7oCtw2V',
            status: 'approved',
            submitTime: '2026-02-04T00:05',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 207,
            player: '幻缪之瞳',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 3,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/?vd_source=392b1cf208fef5f64979d82e271cdaaa',
            status: 'approved',
            submitTime: '2026-02-04T15:38',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 208,
            player: 'Sevio_柒言',
            mainc: '恰斯卡',
            team: [
                {
                        character: '恰斯卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 5,
            constgold: 0,
            notes: '黑曜2+1恰斯卡\n0+0晨星伊涅芙\n西风纺月爱诺\n西风勇者伊安珊',
            video: 'https://www.bilibili.com/video/BV1hCfoB4ELT/?share_source=copy_web&vd_source=f6828a7b0cfe5ebea9f77233b416573d',
            status: 'approved',
            submitTime: '2026-02-04T19:15',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 209,
            player: '梦翼yi',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 3,
            constgold: 0,
            notes: '精5霜辰',
            video: 'https://www.bilibili.com/video/BV11afZBXEm8/',
            status: 'approved',
            submitTime: '2026-02-04T16:56',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 210,
            player: 'okomenoie',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 96,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1sPzbBDEzp/',
            status: 'approved',
            submitTime: '2026-01-26T01:15',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 211,
            player: '丿丶快乐',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV19pzKBuEfp/',
            status: 'approved',
            submitTime: '2026-01-23T14:59',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 212,
            player: 'C云谲',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 4,
            constgold: 0,
            notes: '大月卡菲少',
            video: 'https://www.bilibili.com/video/BV1Tiz7BFEDe/',
            status: 'approved',
            submitTime: '2026-01-21T21:39',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 213,
            player: 'Kotomi_99',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 4,
            constgold: 0,
            notes: '护摩菲，大月卡机少',
            video: 'https://www.bilibili.com/video/BV1jdzwBcEcC/',
            status: 'approved',
            submitTime: '2026-01-23T05:43',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 214,
            player: '凉雨成疾stranger',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 3
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 3,
            constgold: 3,
            notes: '精3鸟枪，大月卡机少',
            video: 'https://www.bilibili.com/video/BV1EKFuzgEhd/',
            status: 'approved',
            submitTime: '2026-02-03T02:29',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 215,
            player: 'Kotomi_99',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 4,
            constgold: 0,
            notes: '西风菲，月卡少',
            video: 'https://www.bilibili.com/video/BV1Bk6BBzEdk/',
            status: 'approved',
            submitTime: '2026-01-31T01:17',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 216,
            player: '渊云图',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    },
                {
                        character: '希诺宁',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 110,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 2,
            constgold: 5,
            notes: '流浪乐章小玛',
            video: 'https://www.bilibili.com/video/BV11SzyBNEiM/',
            status: 'approved',
            submitTime: '2026-01-24T22:34',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 217,
            player: 'GMTPJ',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 108,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 4,
            constgold: 1,
            notes: '鸟枪菲，峡湾机，西风少',
            video: 'https://www.bilibili.com/video/BV12HzEBtEsd/',
            status: 'approved',
            submitTime: '2026-01-21T20:49',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 218,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 6,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV11U6qB1EFz/',
            status: 'approved',
            submitTime: '2026-01-30T19:40',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 219,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 3,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1w2zLByEzL/',
            status: 'approved',
            submitTime: '2026-01-21T18:39',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 220,
            player: '长歌_Echo',
            mainc: '克洛琳德',
            team: [
                {
                        character: '克洛琳德',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 66,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 10,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/IynDVMc',
            status: 'approved',
            submitTime: '2026-02-04T21:36',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 221,
            player: '叮当爱天涯',
            mainc: '雷电将军',
            team: [
                {
                        character: '雷电将军',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '九条裟罗',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '杜林',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 101,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 9.2,
            constgold: 0,
            notes: '100级3+0雷神带鱼获=5金\n\n100级九条带落霞占比小于10%=0.2金\n\n90级2+0杜林带匣里灭辰=3金\n\n90级夏沃蕾带餐叉=1金\n\n共9.2金',
            video: 'https://b23.tv/gSlVoyR',
            status: 'approved',
            submitTime: '2026-02-04T20:17',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 222,
            player: 'CHiwenKi',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1zBzXByEtn/?spm_id_from=333.1387.homepage.video_card.click',
            status: 'approved',
            submitTime: '2026-01-28T22:48',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 223,
            player: '成狗成果',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1CLFkzGEha/?share_source=copy_web&vd_source=3f82456d9b0692bcb0680e514633e52d',
            status: 'approved',
            submitTime: '2026-02-06T22:11',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 224,
            player: '阿源_wuii_',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 3,
            constgold: 0,
            notes: '精5大月卡*3',
            video: 'https://www.bilibili.com/video/BV1w8cuzmEMK',
            status: 'approved',
            submitTime: '2026-02-09T22:50',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 225,
            player: '阿源_wuii_',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 3,
            constgold: 0,
            notes: '大月卡少女',
            video: 'https://www.bilibili.com/video/BV1qFFxzEELh/',
            status: 'approved',
            submitTime: '2026-02-08T01:21',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 226,
            player: '羊套橘子',
            mainc: '牛顿',
            team: [
                {
                        character: '可莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '北斗',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 75,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1StFRzQEfo/',
            status: 'approved',
            submitTime: '2026-02-11T04:26',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 227,
            player: '羊套橘子',
            mainc: '牛顿',
            team: [
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '岩主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 69,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 0,
            notes: '仅三人',
            video: 'https://b23.tv/wEDa4CJ',
            status: 'approved',
            submitTime: '2026-02-14T16:55',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 228,
            player: '糖果味',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV18NcqzBEWD/',
            status: 'approved',
            submitTime: '2026-02-16T19:21',
            cup: '新月杯',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 229,
            player: '糖果味Ooo',
            mainc: '6.3紫幻化',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '牛顿',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 265,
            boss: '6.3紫幻化',
            gold: 4,
            constgold: 1,
            notes: 'c1龙等效c0龙',
            video: 'https://www.bilibili.com/video/BV1MefzBzEaS/',
            status: 'approved',
            submitTime: '2026-02-23T20:29',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 230,
            player: '霂枔Official',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 2,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1JAfcB7EpP/',
            status: 'approved',
            submitTime: '2026-02-22T20:27',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 231,
            player: '霂枔Official',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏洛蒂',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 3,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1MwfnBUEKb/',
            status: 'approved',
            submitTime: '2026-02-21T20:08',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 232,
            player: '刚创的新号',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 2,
            constgold: 0,
            notes: '大月卡少',
            video: 'https://www.bilibili.com/video/BV1rtfBB9EuJ/',
            status: 'approved',
            submitTime: '2026-02-23T22:44',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 233,
            player: 'Max',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '坎蒂丝',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 104,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 1,
            constgold: 1,
            notes: '95级玛拉妮',
            video: 'https://www.youtube.com/watch?v=xCt6Rn8QMR0',
            status: 'approved',
            submitTime: '2026-02-24T00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 234,
            player: 'Yuenn',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 3,
            notes: '100级菲林斯',
            video: 'https://www.youtube.com/watch?v=L3H71_6a_6g',
            status: 'approved',
            submitTime: '2026-02-16T00:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 235,
            player: '阿源_wuii_',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 2,
            constgold: 0,
            notes: '大月卡机，大月卡少',
            video: 'https://www.bilibili.com/video/BV12YZJByEnq/',
            status: 'approved',
            submitTime: '2026-02-14T23:06',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 236,
            player: '玲绪玲绪玲lx',
            mainc: '牛顿',
            team: [
                {
                        character: '岩主',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '钟离',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '琴',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 11,
            boss: '历经百战的火刃突击队员 · 决死武装',
            gold: 1,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV15KZsBBET8/',
            status: 'approved',
            submitTime: '2026-02-15T13:54',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 237,
            player: '阿源_wuii_',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 99,
            boss: '铁甲熔火帝皇 · 敕命远征',
            gold: 1,
            constgold: 3,
            notes: '100级月卡龙',
            video: 'https://www.bilibili.com/video/BV1x6ZWBxEhx/',
            status: 'approved',
            submitTime: '2026-02-15T14:57',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 238,
            player: '芙芙物语',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深黯魇语之主 · 袭掠锋刃',
            gold: 4,
            constgold: 0,
            notes: '大月卡少，大月卡机',
            video: 'https://www.bilibili.com/video/BV1x2zkBbETc',
            status: 'approved',
            submitTime: '2026-01-24T19:05',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 239,
            player: 'Lin-Eric',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '凯亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 99,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 3,
            constgold: 0,
            notes: '精5螭骨',
            video: 'https://www.bilibili.com/video/BV1DaPKz8EkH/',
            status: 'approved',
            submitTime: '2026-03-04T15:19',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 240,
            player: '糖果味Ooo',
            mainc: '温迪',
            team: [
                {
                        character: '温迪',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '珐露珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1a9PrzwEHc/',
            status: 'approved',
            submitTime: '2026-03-05T14:03',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 241,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '重拳出击鸭·重甲武库',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1PSPkz9Esj/',
            status: 'approved',
            submitTime: '2026-03-05T20:48',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 242,
            player: '枫糖与猫',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1U3Pqz5EsW/',
            status: 'approved',
            submitTime: '2026-03-04T22:42',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 243,
            player: '___IKobe',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 2,
            constgold: 0,
            notes: '100级菲谢尔，影响不大',
            video: 'https://www.bilibili.com/video/BV1JoPKzVETh/',
            status: 'approved',
            submitTime: '2026-03-04T14:08',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 244,
            player: '阿源_wuii_',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1XAPNz8EQx',
            status: 'approved',
            submitTime: '2026-03-04T10:44',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 245,
            player: 'Kotomi_99',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '重拳出击鸭·重甲武库',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1D1PvzVEJQ/',
            status: 'approved',
            submitTime: '2026-03-04T18:55',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 246,
            player: '八风寻',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '重拳出击鸭·重甲武库',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV11eP1zhEsj/',
            status: 'approved',
            submitTime: '2026-03-05T22:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 247,
            player: '敏感易碎小女孩',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '重拳出击鸭·重甲武库',
            gold: 4,
            constgold: 1,
            notes: '95级火神',
            video: 'https://www.bilibili.com/video/BV1j9PPzqEXk/',
            status: 'approved',
            submitTime: '2026-03-04T10:46',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 248,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '坎蒂丝',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV18hPPzpEBL/',
            status: 'approved',
            submitTime: '2026-03-04T12:07',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 249,
            player: 'listener021',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '枫原万叶',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '瑶瑶',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/nPEQIBb',
            status: 'approved',
            submitTime: '2026-03-05T22:51',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 251,
            player: '无想的狐狸',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 3,
            constgold: 3,
            notes: '',
            video: 'https://b23.tv/BFbJPOz',
            status: 'approved',
            submitTime: '2026-03-06T22:07',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 252,
            player: '刚创的新号',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1f3P4zeECu/',
            status: 'approved',
            submitTime: '2026-03-06T22:08',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 253,
            player: '八风寻',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 3
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 3,
            notes: '',
            video: 'https://www.bilibili.com/video/BV19JPsznEWk/',
            status: 'approved',
            submitTime: '2026-03-06T16:46',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 254,
            player: 'HeitaST',
            mainc: '仆人',
            team: [
                {
                        character: '甘雨',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 116,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 7,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1JRNczAEjm/?share_source=copy_web&vd_source=805e56e13cbe6e209c77896e029d49e0',
            status: 'approved',
            submitTime: '2026-03-07T21:17',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 255,
            player: 'C云谲',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/x9oUUle',
            status: 'approved',
            submitTime: '2026-03-08T03:47',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 256,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '坎蒂丝',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏洛蒂',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 1,
            constgold: 0,
            notes: '终抵群星',
            video: 'https://www.bilibili.com/video/BV15cNFznEaG/',
            status: 'approved',
            submitTime: '2026-03-10T18:31',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 257,
            player: 'Lin-Eric',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1y7Nuz8EHs/',
            status: 'approved',
            submitTime: '2026-03-08T13:22',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 258,
            player: '三年胖50斤',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '重拳出击鸭·重甲武库',
            gold: 3,
            constgold: 1,
            notes: '95级火神',
            video: 'https://www.bilibili.com/video/BV1qXPfzdEEp/',
            status: 'approved',
            submitTime: '2026-03-10T18:51',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 259,
            player: '-小松老师-',
            mainc: '神里绫华',
            team: [
                {
                        character: '神里绫华',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 6,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1HyPfzwE23/',
            status: 'approved',
            submitTime: '2026-03-10T10:59',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 260,
            player: 'hv铁幕之下',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 5,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 2,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Y9PRzzEiR/',
            status: 'approved',
            submitTime: '2026-03-10T02:36',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 261,
            player: '精灵物語',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 5,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '重拳出击鸭·重甲武库',
            gold: 6,
            constgold: 6,
            notes: '95级丝柯克',
            video: 'https://b23.tv/tKNdtrc',
            status: 'approved',
            submitTime: '2026-03-11T02:46',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 262,
            player: 'Nukeyowo',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莱依拉',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1aQcRzFEXT',
            status: 'approved',
            submitTime: '2026-03-11T08:35',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 263,
            player: '霂枔Official',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '重拳出击鸭·重甲武库',
            gold: 5,
            constgold: 0,
            notes: '精5霜辰奈',
            video: 'https://www.bilibili.com/video/BV1WxwLzBEru',
            status: 'approved',
            submitTime: '2026-03-16T16:26',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 264,
            player: 'kanjzyane',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '重拳出击鸭·重甲武库',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV17pwTzBETE/',
            status: 'approved',
            submitTime: '2026-03-15T15:55',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 265,
            player: '刚创的新号',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '重拳出击鸭·重甲武库',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1JYwPzPE2i/',
            status: 'approved',
            submitTime: '2026-03-12T08:31',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 266,
            player: '飞行矮矮堇瓜',
            mainc: '哥伦比娅',
            team: [
                {
                        character: '哥伦比娅',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '重拳出击鸭·重甲武库',
            gold: 4,
            constgold: 3,
            notes: '100级少女',
            video: 'https://www.bilibili.com/video/BV174Pyz7Ewi/',
            status: 'approved',
            submitTime: '2026-03-06T01:11',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 267,
            player: '热尊',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '重拳出击鸭·重甲武库',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1bENPzsELh/',
            status: 'approved',
            submitTime: '2026-03-08T01:06',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 268,
            player: 'listener021',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    }
            ],
            time: 105,
            boss: '重拳出击鸭·重甲武库',
            gold: 7,
            constgold: 2,
            notes: '95级仆',
            video: 'https://www.bilibili.com/video/BV1h5PXztEAX/',
            status: 'approved',
            submitTime: '2026-03-09T16:59',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 269,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '重拳出击鸭·重甲武库',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1PSPkz9Esj/',
            status: 'approved',
            submitTime: '2026-03-05T20:48',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 270,
            player: '精灵物語',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 1,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 3,
            constgold: 2,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1cJwuzEESr/',
            status: 'approved',
            submitTime: '2026-03-15T20:44',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 271,
            player: '米酒Yahalo',
            mainc: '法尔伽',
            team: [
                {
                        character: '法尔伽',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '温迪',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1pAPBzzEvs/',
            status: 'approved',
            submitTime: '2026-03-05T08:30',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 272,
            player: '孩子伊卡洛斯',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 8,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1AUPKzUEL7/?vd_source=e0563779522843abfa6d1eb97e2e08ec',
            status: 'approved',
            submitTime: '2026-03-04T13:28',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 273,
            player: '孩子伊卡洛斯',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深罪浸礼者 · 肃烈狂音',
            gold: 7,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ozm1BgEFh/?vd_source=e0563779522843abfa6d1eb97e2e08ec',
            status: 'approved',
            submitTime: '2025-12-15T18:22',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 274,
            player: 'Karon_Li2',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 3,
            notes: '',
            video: 'https://b23.tv/J28amhh',
            status: 'approved',
            submitTime: '2026-03-19T13:59',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 275,
            player: '羊套橘子',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1FSXFBeEZq?vd_source=a9b3bee7dd21ef08abda168355b010b6',
            status: 'approved',
            submitTime: '2026-03-24T06:34',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 276,
            player: '雨落の烟火',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 109,
            boss: '水形幻人 · 极旋湍流',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV14KuuzkEqa/',
            status: 'approved',
            submitTime: '2025-07-11T14:08',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 277,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 101,
            boss: '熔岩辉龙像 · 炽烈流焰',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1fAugzYEMw/',
            status: 'approved',
            submitTime: '2025-07-11T19:20',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 278,
            player: 'C云谲',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '瑶瑶',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '熔岩辉龙像 · 炽烈流焰',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1pYGKzMEMu',
            status: 'approved',
            submitTime: '2025-07-10T06:25',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 279,
            player: '糖渡',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '熔岩辉龙像 · 炽烈流焰',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1QfGJzoEC3',
            status: 'approved',
            submitTime: '2025-07-08T16:23',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 280,
            player: '阿布relax丶',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '柯莱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '熔岩辉龙像 · 炽烈流焰',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1z73MzAEcy',
            status: 'approved',
            submitTime: '2025-07-03T15:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 281,
            player: '秋茶JM',
            mainc: '克洛琳德',
            team: [
                {
                        character: '克洛琳德',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '熔岩辉龙像 · 炽烈流焰',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1YruwzvEsC',
            status: 'approved',
            submitTime: '2025-07-13T19:04',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 282,
            player: '最ニ网管',
            mainc: '嘉明',
            team: [
                {
                        character: '嘉明',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/QEW3k7R',
            status: 'approved',
            submitTime: '2026-03-09T22:01',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 283,
            player: '最ニ网管',
            mainc: '烟绯',
            team: [
                {
                        character: '烟绯',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '闲云',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '凯亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 107,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 7,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/fQp9nKQ',
            status: 'approved',
            submitTime: '2026-03-08T11:48',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 284,
            player: '奕欢_y',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '重拳出击鸭·重甲武库',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/U6nrXRh',
            status: 'approved',
            submitTime: '2026-03-27T23:50',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 285,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '重拳出击鸭·重甲武库',
            gold: 6,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1WH9jBDE4c/',
            status: 'approved',
            submitTime: '2026-04-01T18:26',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 286,
            player: '阿源_wuii_',
            mainc: '6.3紫幻化',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 351,
            boss: '6.3紫幻化',
            gold: 6,
            constgold: 12,
            notes: '6.4紫幻化',
            video: 'https://www.bilibili.com/video/BV1WLXkBoE2K/',
            status: 'approved',
            submitTime: '2026-03-31T17:05',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 287,
            player: '羊套橘子',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1Fx9ABrEnu?vd_source=a9b3bee7dd21ef08abda168355b010b6',
            status: 'approved',
            submitTime: '2026-04-03T07:13',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 288,
            player: '也是好上了-',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1bgSZBvEHv/',
            status: 'approved',
            submitTime: '2026-04-06T15:18',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 289,
            player: '阿源_wuii_',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 105,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1FZSQBuEsx',
            status: 'approved',
            submitTime: '2026-04-06T02:36',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 290,
            player: '心-向往',
            mainc: '神里绫华',
            team: [
                {
                        character: '神里绫华',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '申鹤',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://【5金绫华115秒N6冰锅-哔哩哔哩】 https://b23.tv/n8ZT6UR',
            status: 'approved',
            submitTime: '2026-03-20T17:56',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 291,
            player: '霂枔Official',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 3,
            constgold: 8,
            notes: '100级丝',
            video: 'https://b23.tv/dDlQPHL',
            status: 'approved',
            submitTime: '2026-04-15T12:43',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 292,
            player: 'hv铁幕之下',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 5,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 5,
            notes: '',
            video: 'https://b23.tv/ufPVxji',
            status: 'approved',
            submitTime: '2026-04-16T04:25',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 293,
            player: '阿源_wuii_',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/fbzOGYv',
            status: 'approved',
            submitTime: '2026-04-15T13:52',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 294,
            player: '糖果味Ooo',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莉奈娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '蕴光月守宫·根牙磐错',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/P2nqH7l',
            status: 'approved',
            submitTime: '2026-04-15T10:18',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 295,
            player: '鸽梓-',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 4,
            constgold: 6,
            notes: '100级小玛',
            video: 'https://www.bilibili.com/video/BV1tDd7BqEAK',
            status: 'approved',
            submitTime: '2026-04-18T03:59',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 296,
            player: '陈述药词',
            mainc: '神里绫华',
            team: [
                {
                        character: '神里绫华',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '申鹤',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 8,
            constgold: 1,
            notes: '',
            video: 'https://b23.tv/IULFn63',
            status: 'approved',
            submitTime: '2026-04-17T17:26',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 297,
            player: '陈述药词',
            mainc: '神里绫华',
            team: [
                {
                        character: '神里绫华',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '申鹤',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 8,
            constgold: 1,
            notes: '',
            video: 'https://b23.tv/IULFn63',
            status: 'approved',
            submitTime: '2026-04-17T17:26',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 298,
            player: '刚创的新号',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莉奈娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1w5dpBBEAn',
            status: 'approved',
            submitTime: '2026-04-18T17:45',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 299,
            player: '稻荷羽祭',
            mainc: '林尼',
            team: [
                {
                        character: '林尼',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1fRdnBhEJt/',
            status: 'approved',
            submitTime: '2026-04-18T12:19',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 300,
            player: '基本压力1206',
            mainc: '莉奈娅',
            team: [
                {
                        character: '莉奈娅',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '蕴光月守宫·根牙磐错',
            gold: 4,
            constgold: 1,
            notes: '',
            video: 'https://www.bilibili.com/video/BV17QdzBjEva/',
            status: 'approved',
            submitTime: '2026-04-17T13:28',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 301,
            player: '梦翼yi',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1gjdvBREs7/',
            status: 'approved',
            submitTime: '2026-04-17T00:19',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 302,
            player: 'サン San',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.youtube.com/watch?v=T3aVlUtNk3s',
            status: 'approved',
            submitTime: '2026-04-19T02:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 303,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '坎蒂丝',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV17GowBGERe/',
            status: 'approved',
            submitTime: '2026-04-20T00:27',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 304,
            player: 'kanjzyane',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 108,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1nyQ5BgEZ6/',
            status: 'approved',
            submitTime: '2026-04-15T10:33',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 305,
            player: '风蒲之舞',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV14CQEB4E8J/',
            status: 'approved',
            submitTime: '2026-04-15T17:41',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 306,
            player: 'XTD111',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 97,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ZQdtB2EYy?vd_source=8f95d06b986154a1d54fc34c9fdf8a63',
            status: 'approved',
            submitTime: '2026-04-16T13:49',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 307,
            player: '沫陌膜墨',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 3,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 5,
            constgold: 1,
            notes: '无解帧',
            video: 'https://b23.tv/nE5K8t5',
            status: 'approved',
            submitTime: '2026-04-15T17:29',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 308,
            player: '梦翼yi',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1kAdrBoE38/',
            status: 'approved',
            submitTime: '2026-04-20T20:05',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 309,
            player: '糖醋の排骨',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 4,
            constgold: 5,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1fGdrBDEJW/',
            status: 'approved',
            submitTime: '2026-04-20T20:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 310,
            player: '派蒙今晚吃什么',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 107,
            boss: '蕴光月守宫·根牙磐错',
            gold: 3,
            constgold: 1,
            notes: '95级火神',
            video: 'https://www.bilibili.com/video/BV1egdvBfE4F/',
            status: 'approved',
            submitTime: '2026-04-17T00:34',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 311,
            player: '-泠汐_',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1YTQ7BAE1z/',
            status: 'approved',
            submitTime: '2026-04-15T13:20',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 312,
            player: '-木yu-',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV16ndfBuEAv/',
            status: 'approved',
            submitTime: '2026-04-19T23:17',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 313,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '重云',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '蕴光月守宫·根牙磐错',
            gold: 6,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1SBdeBSEnE/',
            status: 'approved',
            submitTime: '2026-04-17T00:41',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 314,
            player: '也是好上了-',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '雷泽',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 6,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV12toFBpEkF/',
            status: 'approved',
            submitTime: '2026-04-19T20:18',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 315,
            player: '伏昼',
            mainc: '莉奈娅',
            team: [
                {
                        character: '莉奈娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1LfQjBBEkE',
            status: 'approved',
            submitTime: '2026-04-15T12:13',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 316,
            player: '沫陌膜墨',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 5,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的十六倍曼陀草·风滚狂蔓',
            gold: 4,
            constgold: 1,
            notes: '风鹰几乎白板',
            video: 'https://【【幽境危战n6曼巴草】低练仆杜皇砂，魔导摔门的恩情还不完-哔哩哔哩】 https://b23.tv/6wfCQkK',
            status: 'approved',
            submitTime: '2026-03-27T19:41',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: [{"username":"123","voteTime":"2026-05-26T11:52:04.313Z"}]
        },
        {
            id: 317,
            player: '奕欢_y',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1JCdzBQEzC/',
            status: 'approved',
            submitTime: '2026-04-17T15:03',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: [{"username":"123","voteTime":"2026-05-26T11:52:16.905Z"},{"username":"黑の辉","voteTime":"2026-05-26T13:58:20.940Z"}]
        },
        {
            id: 318,
            player: 'softcitlali',
            mainc: '哥伦比娅',
            team: [
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 3,
            constgold: 0,
            notes: '5命爱诺',
            video: 'https://www.bilibili.com/video/BV1ERQjB3EAV/?vd_source=8d7a3a71004859437dea79fb20efc428',
            status: 'approved',
            submitTime: '2026-04-15T12:44',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:16:55.011Z"},{"username":"jddjck","voteTime":"2026-06-09T03:09:22.070Z"},{"username":"kuku","voteTime":"2026-06-21T08:34:27.334Z"}]
        },
        {
            id: 319,
            player: 'ささくれ',
            mainc: '莫娜',
            team: [
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 8,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1hbo4BqEiu/',
            status: 'approved',
            submitTime: '2026-04-22T22:50',
            cup: '无',
            submitter: null,
            goldErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:18:12.200Z"},{"username":"jddjck","voteTime":"2026-06-09T03:10:33.224Z"}],
            noErrorUsers: []
        },
        {
            id: 320,
            player: 'ささくれ',
            mainc: '莫娜',
            team: [
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 8,
            notes: '',
            video: 'https://b23.tv/DSnSpp0',
            status: 'pending',
            submitTime: '2026-04-24T10:07',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 321,
            player: 'ささくれ',
            mainc: '莫娜',
            team: [
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 2
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 0,
            constgold: 10,
            notes: '',
            video: 'https://b23.tv/pJVC0pc',
            status: 'pending',
            submitTime: '2026-04-24T14:38',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 322,
            player: 'Karon_Li2',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1B5drBJEGt/?spm_id_from=333.1387.homepage.video_card.click&vd_source=e1f6067843df5f3b49f21d8c39d3728d',
            status: 'pending',
            submitTime: '2026-04-20T20:49',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 323,
            player: 'ささくれ',
            mainc: '莫娜',
            team: [
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 0,
            constgold: 7,
            notes: '霜辰莫娜',
            video: 'www.bilibili.com/video/BV1nq9eBeEDB/',
            status: 'pending',
            submitTime: '2026-04-30T22:00',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 324,
            player: '超绝可爱希罗娜',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '蕴光月守宫·根牙磐错',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1g9RsBdEja/?vd_source=8dfec1daf286869ab73fa4e7f1de39ff',
            status: 'pending',
            submitTime: '2026-05-06T12:47',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 325,
            player: '刚创的新号',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '蕴光月守宫·根牙磐错',
            gold: 2,
            constgold: 3,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1RH9QBqEdH',
            status: 'pending',
            submitTime: '2026-04-29T17:18',
            cup: '无',
            submitter: '123',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"123","voteTime":"2026-05-26T12:31:42.314Z"}]
        },
        {
            id: 326,
            player: '荷欢欢',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '雷泽',
                        constellation: 3,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '蕴光月守宫·根牙磐错',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/d6MWLUj',
            status: 'pending',
            submitTime: '2026-05-15T08:26',
            cup: '无',
            submitter: '四倍体植物',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:18:46.599Z"}]
        },
        {
            id: 327,
            player: '刚创的新号',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 2,
            constgold: 3,
            notes: '',
            video: 'https://b23.tv/fJimGy9',
            status: 'pending',
            submitTime: '2026-05-10T09:08',
            cup: '无',
            submitter: '四倍体植物',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:18:55.311Z"}]
        },
        {
            id: 328,
            player: '热尊',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 5,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/oNgNKBE',
            status: 'pending',
            submitTime: '2026-05-02T23:58',
            cup: '无',
            submitter: '四倍体植物',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:19:00.094Z"}]
        },
        {
            id: 329,
            player: '珊瑚一心',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 2,
            constgold: 3,
            notes: '',
            video: 'https://b23.tv/fICkuCv',
            status: 'pending',
            submitTime: '2026-05-02T10:32',
            cup: '无',
            submitter: '四倍体植物',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:19:05.092Z"}]
        },
        {
            id: 330,
            player: '梦翼yi',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://b23.tv/HEwsE4X',
            status: 'approved',
            submitTime: '2026-05-27T00:04',
            cup: '无',
            submitter: '四倍体植物',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:19:12.091Z"}]
        },
        {
            id: 331,
            player: '米酒Yahalo',
            mainc: '莫娜',
            team: [
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '行秋',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 80,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 0,
            constgold: 10,
            notes: '',
            video: 'https://b23.tv/PLcqcxV',
            status: 'pending',
            submitTime: '2026-04-28T14:52',
            cup: '无',
            submitter: '四倍体植物',
            goldErrorUsers: [],
            noErrorUsers: [{"username":"四倍体植物","voteTime":"2026-05-26T16:19:18.518Z"}]
        },
        {
            id: 332,
            player: 'Corolla-S',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '蕴光月守宫·根牙磐错',
            gold: 3,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1y15f62Ek2/',
            status: 'approved',
            submitTime: '2026-05-18T06:37',
            cup: '无',
            submitter: '黑の辉',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 333,
            player: '空客连夜堆山',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '烟绯',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 97,
            boss: '开眼者',
            gold: 8,
            constgold: 0,
            notes: '砂糖需要草套减抗，注意烟绯套盾防止被烧死',
            video: 'https://b23.tv/CvxAFZt',
            status: 'pending',
            submitTime: '2026-05-27T18:39',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 334,
            player: 'マラニー',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的凛狼',
            gold: 3,
            constgold: 3,
            notes: '精5月卡武器',
            video: 'https://b23.tv/Idd51pu',
            status: 'pending',
            submitTime: '2026-05-27T21:07',
            cup: '无',
            submitter: 'マラニー',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 335,
            player: 'rks热开水1',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '水形幻人 · 极旋湍流',
            gold: 2,
            constgold: 0,
            notes: '锻造武器，非绿玩，217f，取消大招动画，奈圣遗物255分',
            video: 'https://www.bilibili.com/video/BV13FVp6SEJe/?share_source=copy_web&vd_source=02713b2a67ba2927452e1a69478d61a3',
            status: 'pending',
            submitTime: '2026-05-28T18:30',
            cup: '无',
            submitter: 'rks热开水？',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 336,
            player: 'churnj',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 3,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '蓝砚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 38,
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 8,
            constgold: 1,
            notes: '',
            video: 'https://b23.tv/Urh7gns',
            status: 'pending',
            submitTime: '2026-05-01T22:41',
            cup: '无',
            submitter: 'sy2356',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 337,
            player: '呵呵nin',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '开眼者',
            gold: 6,
            constgold: 0,
            notes: '此面板为水星星先爆炸后火星星爆炸的最低面板练度（大概？应该是吧）',
            video: 'https://www.bilibili.com/video/BV1dMVG6aE2C/?spm_id_from=333.999.0.0&vd_source=eaf7b94db5e54fb4f80ccc4c0df77c6a',
            status: 'pending',
            submitTime: '2026-05-30T16:00',
            cup: '无',
            submitter: 'hehenin',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 338,
            player: '稻荷习习祭',
            mainc: '林尼',
            team: [
                {
                        character: '林尼',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '尼可',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 110,
            boss: '水形幻人 · 极旋湍流',
            gold: 2,
            constgold: 0,
            notes: '110s成绩放在视频p2',
            video: '【【6.6幽境危战】心气拏云欲问巅，严格2金林尼N6水人110s-哔哩哔哩】 https://b23.tv/nEpn6Kj',
            status: 'pending',
            submitTime: '2026-05-27T16:15',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 339,
            player: '杉云ys',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '历经百战的凛狼',
            gold: 4,
            constgold: 0,
            notes: '',
            video: '【行至山巅！真4金魔导奈芙尔114s击杀N6冰狼！手机60帧绿玩！绽放小c的上限究竟在哪里！-哔哩哔哩】 https://b23.tv/wmiLXxM',
            status: 'pending',
            submitTime: '2026-05-30T23:05',
            cup: '无',
            submitter: '杉云ys',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 340,
            player: 'Karon',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 3,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '历经百战的凛狼',
            gold: 2,
            constgold: 0,
            notes: '',
            video: 'https://www.youtube.com/watch?v=ZfSP8ROkC5k',
            status: 'pending',
            submitTime: '2026-06-05T19:03',
            cup: '无',
            submitter: null,
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 341,
            player: '陈述药词',
            mainc: '神里绫华',
            team: [
                {
                        character: '神里绫华',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '申鹤',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '水形幻人 · 极旋湍流',
            gold: 9,
            constgold: 0,
            notes: '',
            video: '【【幽境危战n6】7q极限斩杀！1神1爱0芙难度6水人119s-哔哩哔哩】 https://b23.tv/zJx3V7X',
            status: 'pending',
            submitTime: '2026-06-02T17:30',
            cup: '无',
            submitter: '陈述药词',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 342,
            player: 'kamira64',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '塔利雅',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '坎蒂丝',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '秘源机兵统御械 · 毁灭武装',
            gold: 2,
            constgold: 0,
            notes: '手操60帧',
            video: 'https://www.bilibili.com/video/BV1Z1XTBJEvF/?spm_id_from=333.1387.homepage.video_card.click&vd_source=e1f6067843df5f3b49f21d8c39d3728d',
            status: 'pending',
            submitTime: '2026-03-28T01:11',
            cup: '无',
            submitter: 'kamira64',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 343,
            player: 'るいな',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 2
                    },
                {
                        character: '爱可菲',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    }
            ],
            time: 66,
            boss: '水形幻人 · 极旋湍流',
            gold: 9,
            constgold: 3,
            notes: '',
            video: 'https://youtu.be/YkbvVMBtspw?si=xtyHWaJ0ht6Gi6X1',
            status: 'pending',
            submitTime: '2026-06-12T20:46',
            cup: '无',
            submitter: 'ruirui1729',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 345,
            player: 'eva935',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的凛狼',
            gold: 1,
            constgold: 10,
            notes: '100级莫娜',
            video: 'https://www.bilibili.com/video/BV1gJEF6NEzK/',
            status: 'pending',
            submitTime: '2026-06-04T14:10',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 346,
            player: '三年胖50斤-阿周',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '开眼者',
            gold: 1,
            constgold: 10,
            notes: '100级莫娜',
            video: 'https://www.bilibili.com/video/BV12ejG6xEsL/',
            status: 'pending',
            submitTime: '2026-06-17T00:43',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 347,
            player: '米酒Yahalo',
            mainc: '杜林',
            team: [
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 104,
            boss: '水形幻人 · 极旋湍流',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1CqE16JEWo',
            status: 'pending',
            submitTime: '2026-06-12T18:24',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 348,
            player: '糖果味Ooo',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 5
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '水形幻人 · 极旋湍流',
            gold: 2,
            constgold: 5,
            notes: 'r5鸟枪菲，r5圣祭者机',
            video: 'https://www.bilibili.com/video/BV12dGX6ZECs',
            status: 'pending',
            submitTime: '2026-05-28T15:24',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 349,
            player: 'kanjzyane',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '雷泽',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '水形幻人 · 极旋湍流',
            gold: 1,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1FHVo6aEke',
            status: 'pending',
            submitTime: '2026-06-01T12:45',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 350,
            player: 'XTD111',
            mainc: '玛薇卡',
            team: [
                {
                        character: '玛薇卡',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '欧洛伦',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 79,
            boss: '水形幻人 · 极旋湍流',
            gold: 1,
            constgold: 3,
            notes: '100级火神',
            video: 'https://www.bilibili.com/video/BV1yXE963EYU',
            status: 'pending',
            submitTime: '2026-06-10T16:24',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 351,
            player: '黑の辉',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '重云',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '安柏',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 5,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '开眼者',
            gold: 4,
            constgold: 7,
            notes: '95级丝柯克，水火星流程',
            video: 'https://www.bilibili.com/video/BV1tyVu63EJZ/',
            status: 'pending',
            submitTime: '2026-05-30T13:40',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 352,
            player: '霂枔Official',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '芙宁娜',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '开眼者',
            gold: 4,
            constgold: 10,
            notes: '100级丝柯克，双水星强杀流程',
            video: 'https://www.bilibili.com/video/BV1CmGy6wEkR',
            status: 'pending',
            submitTime: '2026-05-27T16:33',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 353,
            player: '最ニ网管',
            mainc: '嘉明',
            team: [
                {
                        character: '嘉明',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '闲云',
                        constellation: 2,
                        weapon: 1
                    }
            ],
            time: 118,
            boss: '历经百战的凛狼',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1ZWGU6PEAj',
            status: 'pending',
            submitTime: '2026-05-27T23:56',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 354,
            player: '糖醋の排骨',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 4,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的凛狼',
            gold: 2,
            constgold: 3,
            notes: '',
            video: 'https://www.bilibili.com/video/BV1z3Gy6oEUV?',
            status: 'pending',
            submitTime: '2026-05-27T17:23',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 355,
            player: 'listener021',
            mainc: '仆人',
            team: [
                {
                        character: '仆人',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的凛狼',
            gold: 2,
            constgold: 8,
            notes: 'r1鸟枪仆人',
            video: 'https://www.bilibili.com/video/BV1ooVz6CEoy',
            status: 'pending',
            submitTime: '2026-06-02T15:54',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 356,
            player: '羽小然',
            mainc: '克洛琳德',
            team: [
                {
                        character: '克洛琳德',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 114,
            boss: '水形幻人 · 极旋湍流',
            gold: 3,
            constgold: 1,
            notes: 'r1天空弓皇女，r1狼牙杜林',
            video: 'https://www.bilibili.com/video/BV1Y9j66jEkG',
            status: 'pending',
            submitTime: '2026-06-19T21:14',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 357,
            player: '米酒Yahalo',
            mainc: '丝柯克',
            team: [
                {
                        character: '丝柯克',
                        constellation: 0,
                        weapon: 1
                    },
                {
                        character: '爱可菲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '罗莎莉亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '水形幻人 · 极旋湍流',
            gold: 3,
            constgold: 5,
            notes: '100级莫娜，可等效4莫共5常驻金',
            video: 'https://www.bilibili.com/video/BV1HhjK6PEXh',
            status: 'approved',
            submitTime: '2026-06-16T09:14',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 358,
            player: '雪地猫ui',
            mainc: '莉奈娅',
            team: [
                {
                        character: '莉奈娅',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '烟绯',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '五郎',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 113,
            boss: '开眼者',
            gold: 4,
            constgold: 0,
            notes: 'r5玉珑少女',
            video: 'https://www.bilibili.com/video/BV1ozG164ED8',
            status: 'pending',
            submitTime: '2026-05-27T14:27',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 359,
            player: '米酒Yahalo',
            mainc: '兹白',
            team: [
                {
                        character: '兹白',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '叶洛亚',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '烟绯',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '开眼者',
            gold: 2,
            constgold: 0,
            notes: '双锻造双西风，无大月卡',
            video: 'https://www.bilibili.com/video/BV1Yv7f6NEKy',
            status: 'pending',
            submitTime: '2026-06-04T16:14',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 360,
            player: '米酒Yahalo',
            mainc: '夜兰',
            team: [
                {
                        character: '夜兰',
                        constellation: 6,
                        weapon: 5
                    },
                {
                        character: '莫娜',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的凛狼',
            gold: 12,
            constgold: 13,
            notes: '夜莫双100级',
            video: 'https://www.bilibili.com/video/BV1A57468Edo',
            status: 'pending',
            submitTime: '2026-06-25T00:47',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 361,
            player: '梦翼yi',
            mainc: '奈芙尔',
            team: [
                {
                        character: '奈芙尔',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '开眼者',
            gold: 2,
            constgold: 0,
            notes: 'r5霜辰奈',
            video: 'https://www.bilibili.com/video/BV1bwGU6JETU',
            status: 'pending',
            submitTime: '2026-05-28T01:44',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 362,
            player: '一只普通的魈厨',
            mainc: '基尼奇',
            team: [
                {
                        character: '基尼奇',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '开眼者',
            gold: 3,
            constgold: 0,
            notes: 'r5螭骨基',
            video: 'https://www.bilibili.com/video/BV18bG96KEH4',
            status: 'pending',
            submitTime: '2026-05-28T13:54',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 363,
            player: '雾夕寒川',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '开眼者',
            gold: 3,
            constgold: 0,
            notes: '峡湾机，玉珑少',
            video: 'https://www.bilibili.com/video/BV18KVV6XE7x',
            status: 'pending',
            submitTime: '2026-05-30T22:28',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 364,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '行��',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '茜特菈莉',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '开眼者',
            gold: 4,
            constgold: 3,
            notes: 'r5峡湾100级胡桃，胡桃1命不计入成本',
            video: 'https://www.bilibili.com/video/BV1PWEt6KEuy',
            status: 'pending',
            submitTime: '2026-06-07T21:38',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 365,
            player: 'Light__Quantum',
            mainc: '胡桃',
            team: [
                {
                        character: '胡桃',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '尼可',
                        constellation: 0,
                        weapon: 0
                    }
            ],
            time: 117,
            boss: '水形幻人 · 极旋湍流',
            gold: 2,
            constgold: 3,
            notes: '百级r5决斗胡桃，胡桃1命不计入成本',
            video: 'https://www.bilibili.com/video/BV1jhVV6iESP',
            status: 'pending',
            submitTime: '2026-05-30T21:18',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 366,
            player: '邦协会刘邦',
            mainc: '那维莱特',
            team: [
                {
                        character: '那维莱特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '布伦妮',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '火主',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 116,
            boss: '历经百战的凛狼',
            gold: 8,
            constgold: 2,
            notes: '95级龙王，布伦妮闲专等效天空',
            video: 'https://www.bilibili.com/video/BV12P7p6SEAj',
            status: 'pending',
            submitTime: '2026-06-27T18:57',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 367,
            player: '芙芙物语',
            mainc: '伊涅芙',
            team: [
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '哥伦比娅',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '历经百战的凛狼',
            gold: 4,
            constgold: 0,
            notes: '穹镜锻造机，纺月绝弦皇，千岩月卡少',
            video: 'https://www.bilibili.com/video/BV13EVG6dEqv',
            status: 'pending',
            submitTime: '2026-05-30T15:32',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 368,
            player: 'Hamlat',
            mainc: '迪卢克',
            team: [
                {
                        character: '迪卢克',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '闲云',
                        constellation: 2,
                        weapon: 5
                    },
                {
                        character: '凯亚',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的凛狼',
            gold: 3,
            constgold: 6,
            notes: '100级卢，闲云r5天空书等效r1，迪卢克下落玩法6卢等效1卢',
            video: 'https://www.bilibili.com/video/BV1VCVL6KER2',
            status: 'pending',
            submitTime: '2026-05-31T12:00',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 369,
            player: '氪星难民',
            mainc: '法尔伽',
            team: [
                {
                        character: '法尔伽',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '尼可',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '布伦妮',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '历经百战的凛狼',
            gold: 3,
            constgold: 0,
            notes: '法尔伽精3螭骨',
            video: 'https://www.bilibili.com/video/BV1TPG26gEFt',
            status: 'pending',
            submitTime: '2026-05-27T22:23',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 370,
            player: '阿源_wuii_',
            mainc: '菲林斯',
            team: [
                {
                        character: '菲林斯',
                        constellation: 2,
                        weapon: 5
                    },
                {
                        character: '伊涅芙',
                        constellation: 0,
                        weapon: 5
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '爱诺',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '历经百战的凛狼',
            gold: 4,
            constgold: 16,
            notes: '菲机双100级r5鸟枪，机可压掉100机+r5鸟枪换r5圣祭者',
            video: 'https://www.bilibili.com/video/BV1dbEY6TE8C',
            status: 'pending',
            submitTime: '2026-06-11T12:30',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 371,
            player: '怀念个锤子',
            mainc: '洛恩',
            team: [
                {
                        character: '洛恩',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '杜林',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '尼可',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '布伦妮',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '历经百战的凛狼',
            gold: 5,
            constgold: 1,
            notes: '天空书尼可',
            video: 'https://www.bilibili.com/video/BV16Yjf6kELN',
            status: 'pending',
            submitTime: '2026-06-22T07:30',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 372,
            player: 'nuoyQAQ',
            mainc: '玛拉妮',
            team: [
                {
                        character: '玛拉妮',
                        constellation: 1,
                        weapon: 0
                    },
                {
                        character: '玛薇卡',
                        constellation: 1,
                        weapon: 1
                    },
                {
                        character: '莫娜',
                        constellation: 2,
                        weapon: 0
                    },
                {
                        character: '砂糖',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 119,
            boss: '开眼者',
            gold: 3,
            constgold: 4,
            notes: '狼末火神',
            video: 'https://www.bilibili.com/video/BV1YDV66qEKu/',
            status: 'pending',
            submitTime: '2026-06-02T22:32',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 373,
            player: 'MeiosisQWQ',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 1
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '迪奥娜',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 112,
            boss: '开眼者',
            gold: 4,
            constgold: 0,
            notes: '',
            video: 'https://www.bilibili.com/video/BV17aGX6LEKU/',
            status: 'pending',
            submitTime: '2026-05-28T16:33',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 374,
            player: '剁椒肥鯮',
            mainc: '瓦雷莎',
            team: [
                {
                        character: '瓦雷莎',
                        constellation: 2,
                        weapon: 2
                    },
                {
                        character: '伊安珊',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '香菱',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 115,
            boss: '水形幻人 · 极旋湍流',
            gold: 3,
            constgold: 3,
            notes: '95级，精2四风牛',
            video: 'https://www.bilibili.com/video/BV1hsGQ6cED3',
            status: 'pending',
            submitTime: '2026-05-28T10:39',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 375,
            player: 'dppJirachi',
            mainc: '可莉',
            team: [
                {
                        character: '可莉',
                        constellation: 1,
                        weapon: 2
                    },
                {
                        character: '班尼特',
                        constellation: 6,
                        weapon: 1
                    },
                {
                        character: '夏沃蕾',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 118,
            boss: '水形幻人 · 极旋湍流',
            gold: 1,
            constgold: 3,
            notes: '风鹰班，精2四风可莉，可莉一命不计入成本',
            video: 'https://www.bilibili.com/video/BV18GJp6wEGH',
            status: 'pending',
            submitTime: '2026-06-13T22:53',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        },
        {
            id: 376,
            player: '艾伦auk',
            mainc: '菈乌玛',
            team: [
                {
                        character: '菈乌玛',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '纳西妲',
                        constellation: 0,
                        weapon: 0
                    },
                {
                        character: '菲谢尔',
                        constellation: 6,
                        weapon: 0
                    },
                {
                        character: '久岐忍',
                        constellation: 6,
                        weapon: 0
                    }
            ],
            time: 120,
            boss: '水形幻人 · 极旋湍流',
            gold: 2,
            constgold: 0,
            notes: '教官r1霜辰草神',
            video: 'https://www.bilibili.com/video/BV1NrGk6bEwK',
            status: 'pending',
            submitTime: '2026-05-27T12:36',
            cup: '无',
            submitter: 'david214467',
            goldErrorUsers: [],
            noErrorUsers: []
        }
    ];

// 确保Records和Users可以被其他脚本访问
window.Records = Records;
window.Users = Users;