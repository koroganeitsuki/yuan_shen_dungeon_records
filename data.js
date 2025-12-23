// 资源访问路径前缀
const access = '';
// const access = 'https://homdgcat.wiki/homdgcat-res/';

// 数据存储模块
const DataStore = {
    // 资源访问路径前缀
    // access: './',

    // 元素属性颜色映射
    elementColors: {
        '物理': '#EEEEEE',
        '火': '#FF5511',
        '水': '#33AAFF',
        '雷': '#CC33FF',
        '冰': '#99EEFF',
        '风': '#00FFCC',
        '岩': '#FFBB55',
        '草': '#77FF44'
    },
    
    // 角色数据
    characters: [
        // 纳塔角色
        { id: 'mavika', name: '玛薇卡', avatar: access + 'Avatar/UI_AvatarIcon_Mavuika.png', element: '火' },
        { id: 'jinqi', name: '基尼奇', avatar: access + 'Avatar/UI_AvatarIcon_Kinich.png', element: '草' },
        { id: 'qiaska', name: '恰斯卡', avatar: access + 'Avatar/UI_AvatarIcon_Chasca.png', element: '风' },
        { id: 'oulun', name: '欧洛伦', avatar: access + 'Avatar/UI_AvatarIcon_Olorun.png', element: '雷' },
        { id: 'xinuoning', name: '希诺宁', avatar: access + 'Avatar/UI_AvatarIcon_Xilonen.png', element: '岩' },
        { id: 'kazina', name: '卡齐娜', avatar: access + 'Avatar/UI_AvatarIcon_Kachina.png', element: '岩' },
        { id: 'malani', name: '玛拉妮', avatar: access + 'Avatar/UI_AvatarIcon_Mualani.png', element: '水' },
        { id: 'ianyishan', name: '伊安珊', avatar: access + 'Avatar/UI_AvatarIcon_Iansan.png', element: '雷' },
        { id: 'valeisha', name: '瓦蕾莎', avatar: access + 'Avatar/UI_AvatarIcon_Varesa.png', element: '雷' },
        { id: 'Citlali', name: '茜特菈莉', avatar: access + 'Avatar/UI_AvatarIcon_Citlali.png', element: '冰' },
        
        // 枫丹角色
        { id: 'navilet', name: '那维莱特', avatar: access + 'Avatar/UI_AvatarIcon_Neuvillette.png', element: '水' },
        { id: 'funingna', name: '芙宁娜', avatar: access + 'Avatar/UI_AvatarIcon_Furina.png', element: '水' },
        { id: 'xiawolei', name: '夏沃蕾', avatar: access + 'Avatar/UI_AvatarIcon_Chevreuse.png', element: '火' },
        { id: 'naliya', name: '娜维娅', avatar: access + 'Avatar/UI_AvatarIcon_Navia.png', element: '岩' },
        { id: 'laiwusili', name: '莱欧斯利', avatar: access + 'Avatar/UI_AvatarIcon_Wriothesley.png', element: '冰' },
        { id: 'xialuoti', name: '夏洛蒂', avatar: access + 'Avatar/UI_AvatarIcon_Charlotte.png', element: '冰' },
        { id: 'linni', name: '林尼', avatar: access + 'Avatar/UI_AvatarIcon_Liney.png', element: '火' },
        { id: 'linniete', name: '琳妮特', avatar: access + 'Avatar/UI_AvatarIcon_Linette.png', element: '风' },
        { id: 'feimini', name: '菲米尼', avatar: access + 'Avatar/UI_AvatarIcon_Freminet.png', element: '冰' },
        { id: 'xigewen', name: '希格雯', avatar: access + 'Avatar/UI_AvatarIcon_Sigewinne.png', element: '水' },
        { id: 'aimailie', name: '艾梅莉埃', avatar: access + 'Avatar/UI_AvatarIcon_Emilie.png', element: '草' },
        { id: 'keluolinde', name: '克洛琳德', avatar: access + 'Avatar/UI_AvatarIcon_Clorinde.png', element: '雷' },
        { id: 'aikefei', name: '爱可菲', avatar: access + 'Avatar/UI_AvatarIcon_Escoffier.png', element: '冰' },
        
        // 须弥角色
        { id: 'naxida', name: '纳西妲', avatar: access + 'Avatar/UI_AvatarIcon_Nahida.png', element: '草' },
        { id: 'aierhaisen', name: '艾尔海森', avatar: access + 'Avatar/UI_AvatarIcon_Alhatham.png', element: '草' },
        { id: 'tinali', name: '提纳里', avatar: access + 'Avatar/UI_AvatarIcon_Tighnari.png', element: '草' },        
        { id: 'kawei', name: '卡维', avatar: access + 'Avatar/UI_AvatarIcon_Kaveh.png', element: '草' },
        { id: 'dixiuya', name: '迪希雅', avatar: access + 'Avatar/UI_AvatarIcon_Dehya.png', element: '火' },
        { id: 'sainuo', name: '赛诺', avatar: access + 'Avatar/UI_AvatarIcon_Cyno.png', element: '雷' },
        { id: 'nilu', name: '妮露', avatar: access + 'Avatar/UI_AvatarIcon_Nilou.png', element: '水' },
        { id: 'kelai', name: '柯莱', avatar: access + 'Avatar/UI_AvatarIcon_Collei.png', element: '草' },
        { id: 'duoli', name: '多莉', avatar: access + 'Avatar/UI_AvatarIcon_Dori.png', element: '雷' },
        { id: 'kandisi', name: '坎蒂丝', avatar: access + 'Avatar/UI_AvatarIcon_Candace.png', element: '水' },
        { id: 'laiyila', name: '莱依拉', avatar: access + 'Avatar/UI_AvatarIcon_Layla.png', element: '冰' },
        { id: 'falushan', name: '珐露珊', avatar: access + 'Avatar/UI_AvatarIcon_Faruzan.png', element: '风' },
        { id: 'liulangzhe', name: '流浪者', avatar: access + 'Avatar/UI_AvatarIcon_Wanderer.png', element: '风' },        
        
        
        // 稻妻角色
        { id: 'lei dian jiang jun', name: '雷电将军', avatar: access + 'Avatar/UI_AvatarIcon_Shougun.png', element: '雷' },
        { id: 'yae shenzi', name: '八重神子', avatar: access + 'Avatar/UI_AvatarIcon_Yae.png', element: '雷' },
        { id: 'sara', name: '九条裟罗', avatar: access + 'Avatar/UI_AvatarIcon_Sara.png', element: '雷' },
        { id: 'shenli linghua', name: '神里绫华', avatar: access + 'Avatar/UI_AvatarIcon_Ayaka.png', element: '冰' },
        { id: 'shenli lingren', name: '神里绫人', avatar: access + 'Avatar/UI_AvatarIcon_Ayato.png', element: '水' },
        { id: 'xiangong', name: '宵宫', avatar: access + 'Avatar/UI_AvatarIcon_Yoimiya.png', element: '火' },
        { id: 'wan ye', name: '枫原万叶', avatar: access + 'Avatar/UI_AvatarIcon_Kazuha.png', element: '风' },        
        { id: 'kuki shinobu', name: '久岐忍', avatar: access + 'Avatar/UI_AvatarIcon_Shinobu.png', element: '雷' },
        { id: 'sayu', name: '早柚', avatar: access + 'Avatar/UI_AvatarIcon_Sayu.png', element: '风' },
        { id: 'arataki itto', name: '荒泷一斗', avatar: access + 'Avatar/UI_AvatarIcon_Itto.png', element: '岩' },
        { id: 'gorou', name: '五郎', avatar: access + 'Avatar/UI_AvatarIcon_Gorou.png', element: '岩' },
        { id: 'thoma', name: '托马', avatar: access + 'Avatar/UI_AvatarIcon_Tohma.png', element: '火' },
        { id: 'shikanoin heizou', name: '鹿野院平藏', avatar: access + 'Avatar/UI_AvatarIcon_Heizo.png', element: '风' },
        { id: 'mizuki', name: '梦见月瑞希', avatar: access + 'Avatar/UI_AvatarIcon_Mizuki.png', element: '风' },
        { id: 'qiliangliang', name: '绮良良', avatar: access + 'Avatar/UI_AvatarIcon_Momoka.png', element: '草' },
        { id: 'qianzhi', name: '千织', avatar: access + 'Avatar/UI_AvatarIcon_Chiori.png', element: '岩' },

        //璃月角色
        { id: 'baitu', name: '白术', avatar: access + 'Avatar/UI_AvatarIcon_Baizhuer.png', element: '草' },
        { id: 'yaoyao', name: '瑶瑶', avatar: access + 'Avatar/UI_AvatarIcon_Yaoyao.png', element: '草' },
        { id: 'hutao', name: '胡桃', avatar: access + 'Avatar/UI_AvatarIcon_Hutao.png', element: '火' },
        { id: 'yelan', name: '夜兰', avatar: access + 'Avatar/UI_AvatarIcon_Yelan.png', element: '水' },
        { id: 'xiao', name: '魈', avatar: access + 'Avatar/UI_AvatarIcon_Xiao.png', element: '风' },
        { id: 'xianyun', name: '闲云', avatar: access + 'Avatar/UI_AvatarIcon_Liuyun.png', element: '风' },
        { id: 'gan yu', name: '甘雨', avatar: access + 'Avatar/UI_AvatarIcon_Ganyu.png', element: '冰' },
        { id: 'albedo', name: '阿贝多', avatar: access + 'Avatar/UI_AvatarIcon_Albedo.png', element: '岩' },
        { id: 'zhongli', name: '钟离', avatar: access + 'Avatar/UI_AvatarIcon_Zhongli.png', element: '岩' },
        { id: 'keqing', name: '刻晴', avatar: access + 'Avatar/UI_AvatarIcon_Keqing.png', element: '雷' },
        { id: 'qiqi', name: '七七', avatar: access + 'Avatar/UI_AvatarIcon_Qiqi.png', element: '冰' },
        { id: 'ningguang', name: '凝光', avatar: access + 'Avatar/UI_AvatarIcon_Ningguang.png', element: '岩' },
        { id: 'yunjin', name: '云堇', avatar: access + 'Avatar/UI_AvatarIcon_Yunjin.png', element: '岩' },
        { id: 'xiangling', name: '香菱', avatar: access + 'Avatar/UI_AvatarIcon_Xiangling.png', element: '火' },
        { id: 'xingqiu', name: '行秋', avatar: access + 'Avatar/UI_AvatarIcon_Xingqiu.png', element: '水' },
        { id: 'beidou', name: '北斗', avatar: access + 'Avatar/UI_AvatarIcon_Beidou.png', element: '雷' },
        { id: 'yanfei', name: '烟绯', avatar: access + 'Avatar/UI_AvatarIcon_Feiyan.png', element: '火' },
        { id: 'xinyan', name: '辛焱', avatar: access + 'Avatar/UI_AvatarIcon_Xinyan.png', element: '火' },
        { id: 'gaming', name: '嘉明', avatar: access + 'Avatar/UI_AvatarIcon_Gaming.png', element: '火' },
      
        // 蒙德角色
        { id: 'diluc', name: '迪卢克', avatar: access + 'Avatar/UI_AvatarIcon_Diluc.png', element: '火' },
        { id: 'venti', name: '温迪', avatar: access + 'Avatar/UI_AvatarIcon_Venti.png', element: '风' },
        { id: 'jean', name: '琴', avatar: access + 'Avatar/UI_AvatarIcon_Qin.png', element: '风' },
        { id: 'kaeya', name: '凯亚', avatar: access + 'Avatar/UI_AvatarIcon_Kaeya.png', element: '冰' },
        { id: 'lisa', name: '丽莎', avatar: access + 'Avatar/UI_AvatarIcon_Lisa.png', element: '雷' },
        { id: 'amber', name: '安柏', avatar: access + 'Avatar/UI_AvatarIcon_Ambor.png', element: '火' },
        { id: 'barbara', name: '芭芭拉', avatar: access + 'Avatar/UI_AvatarIcon_Barbara.png', element: '水' },
        { id: 'razor', name: '雷泽', avatar: access + 'Avatar/UI_AvatarIcon_Razor.png', element: '雷' },
        { id: 'bennett', name: '班尼特', avatar: access + 'Avatar/UI_AvatarIcon_Bennett.png', element: '火' },
        { id: 'noelle', name: '诺艾尔', avatar: access + 'Avatar/UI_AvatarIcon_Noel.png', element: '岩' },
        { id: 'fischl', name: '菲谢尔', avatar: access + 'Avatar/UI_AvatarIcon_Fischl.png', element: '雷' },
        { id: 'diona', name: '迪奥娜', avatar: access + 'Avatar/UI_AvatarIcon_Diona.png', element: '冰' },
        { id: 'sucrose', name: '砂糖', avatar: access + 'Avatar/UI_AvatarIcon_Sucrose.png', element: '风' },
        { id: 'chongyun', name: '重云', avatar: access + 'Avatar/UI_AvatarIcon_Chongyun.png', element: '冰' },
        { id: 'rosaria', name: '罗莎莉亚', avatar: access + 'Avatar/UI_AvatarIcon_Rosaria.png', element: '冰' },
        { id: 'eula', name: '优菈', avatar: access + 'Avatar/UI_AvatarIcon_Eula.png', element: '冰' },
        { id: 'mika', name: '米卡', avatar: access + 'Avatar/UI_AvatarIcon_Mika.png', element: '冰' },
        { id: 'taliya', name: '塔利雅', avatar: access + 'Avatar/UI_AvatarIcon_Dahlia.png', element: '水' },
        { id: 'Mona', name: '莫娜', avatar: access + 'Avatar/UI_AvatarIcon_Mona.png', element: '水' },
        
        // 至冬角色
        { id: 'servant', name: '仆人', avatar: access + 'Avatar/UI_AvatarIcon_Arlecchino.png', element: '火' },
        { id: 'tartaglia', name: '达达利亚', avatar: access + 'Avatar/UI_AvatarIcon_Tartaglia.png', element: '水' },
        
        // 其他角色
      { id: 'Columbina', name: '哥伦比娅', avatar: access + 'Avatar/UI_AvatarIcon_Columbina.png', element: '水' },
      { id: 'Zibai', name: '兹白', avatar: access + 'Avatar/UI_AvatarIcon_Zibai.png', element: '岩' },
      { id: 'Durin', name: '杜林', avatar: access + 'Avatar/UI_AvatarIcon_Durin.png', element: '火' },
        { id: 'sikoke', name: '丝柯克', avatar: access + 'Avatar/UI_AvatarIcon_SkirkNew.png', element: '冰' },
        { id: 'newton', name: '牛顿', avatar: 'Avatar/R.png', element: '物理' },
        { id: 'feilinsi', name: '菲林斯', avatar: access + 'Avatar/UI_AvatarIcon_Flins.png', element: '雷' },
        { id: 'lauma', name: '菈乌玛', avatar: access + 'Avatar/UI_AvatarIcon_Lauma.png', element: '草' },
        { id: 'nefer', name: '奈芙尔', avatar: access + 'Avatar/UI_AvatarIcon_Nefer.png', element: '草' },
        { id: 'ainuo', name: '爱诺', avatar: access + 'Avatar/UI_AvatarIcon_Aino.png', element: '水' },
        { id: 'yiniefu', name: '伊涅芙', avatar: access + 'Avatar/UI_AvatarIcon_Ineffa.png', element: '雷' },                
        { id: 'huozhu', name: '火主', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '火' },
        { id: 'fengzhu', name: '风主', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '风' },
        { id: 'leizhu', name: '雷主', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '雷' },
        { id: 'yuanren', name: '原人', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '物理' },
        { id: 'yanzhu', name: '岩主', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '岩' },
        { id: 'caozhu', name: '草主', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '草' },
        { id: 'shuizhu', name: '水主', avatar: access + 'Avatar/UI_AvatarIcon_PlayerBoy.png', element: '水' },
        { id: 'ailei', name: '埃洛伊', avatar: access + 'Avatar/UI_AvatarIcon_Aloy.png', element: '冰' }
    ],
    
    // BOSS数据
    bosses: [
        { id: 'abyss_dendrite', name: '深邃摹结株 · 虚暗幻变', avatar: access + 'monster/UI_MonsterIcon_TheAbyss_Dendrite.png', element: '物理' },
        { id: 'electric_tortoise', name: '历经百战的玳龟 · 坚盾轰霆', avatar: access + 'monster/UI_MonsterIcon_Tortoise_Electric.png', element: '雷' },
        { id: 'tenoyollotzin', name: '历经百战的皮皮潘偶像 · 百诈瞬变', avatar: access + 'monster/UI_MonsterIcon_Tenoyollotzin.png', element: '雷' },
        { id: 'abd_dragon', name: '兆载永劫龙兽 · 歼灭构型', avatar: access + 'monster/abd.png', element: '物理' },
        { id: 'hermit_crab', name: '历经百战的岩居蟹 · 百万爆轰', avatar: access + 'monster/UI_MonsterIcon_HermitCrab_Mature_Elite.png', element: '水' },
        { id: 'rodya', name: '历经百战的火刃突击队员 · 决死武装', avatar: access + 'monster/UI_MonsterIcon_Oprichnik_Male_Strong_LanceArquebus_Rodya.png', element: '火' },
        { id: 'herra_frost', name: '霜夜巡天灵主 · 惊恨憎愤', avatar: access + 'monster/UI_MonsterIcon_HerraFrost.png', element: '物理' },
        { id: 'sigurd', name: '历经百战的执灯人 · 哀恸回响', avatar: access + 'monster/UI_MonsterIcon_WildHunt_Male_Sigurd.png', element: '冰' },
        { id: 'fatuus_ice', name: '历经百战的霜役人 · 涉血芒锋', avatar: access + 'monster/UI_MonsterIcon_Fatuus_Escadron_Ice.png', element: '冰' },
      { id: 'Archdeacon', name: '深罪浸礼者 · 肃烈狂音', avatar: access + 'UI_Img_LeyLineChallenge_Archdeacon.png', element: '雷' },
      { id: 'Shamansaurus', name: '历经百战的暝视龙 · 霜雪苛念', avatar: access + 'UI_Img_LeyLineChallenge_Natsaurus_Shamansaurus_Normal.png', element: '冰' },
      { id: 'Gravitas', name: '实验性场力发生装置 · 极端势能', avatar: access + 'UI_Img_LeyLineChallenge_Gravitas.png', element: '岩' }
    
    ],
    
    // 通关记录数据（从records.js中读取）
    get records() {
        return window.Records || [];
    },
    
    // 获取所有已通过的记录
    getApprovedRecords: function() {
        // 确保Records存在并且是数组
        const records = window.Records && Array.isArray(window.Records) ? window.Records : [];
        return records.filter(record => record.status === 'approved');
    },
    
    // 获取所有待审核的记录
    getPendingRecords: function() {
        // 确保Records存在并且是数组
        const records = window.Records && Array.isArray(window.Records) ? window.Records : [];
        return records.filter(record => record.status === 'pending');
    },
    
    // 获取所有记录
    getAllRecords: function() {
        // 确保Records存在并且是数组
        return window.Records && Array.isArray(window.Records) ? window.Records : [];
    },
    
    // 根据ID获取记录
    getRecordById: function(id) {
        // 确保Records存在并且是数组
        const records = window.Records && Array.isArray(window.Records) ? window.Records : [];
        return records.find(record => record.id === id);
    },
    
    // // 更新记录
    // updateRecord: function(updatedRecord) {
    //     const index = this.records.findIndex(record => record.id === updatedRecord.id);
    //     if (index !== -1) {
    //         this.records[index] = updatedRecord;
    //         return true;
    //     }
    //     return false;
    // },
    
    // // 删除记录
    // deleteRecord: function(id) {
    //     const index = this.records.findIndex(record => record.id === id);
    //     if (index !== -1) {
    //         this.records.splice(index, 1);
    //         return true;
    //     }
    //     return false;
    // },
    
    // // 添加新记录
    // addRecord: function(newRecord) {
    //     // 生成新ID
    //     const newId = this.records.length > 0 ? Math.max(...this.records.map(r => r.id)) + 1 : 1;
    //     newRecord.id = newId;
    //     newRecord.status = 'pending';
    //     newRecord.submitTime = new Date().toLocaleString('zh-CN');
    //     this.records.push(newRecord);
    //     return newId;
    // },
    
    // 获取角色列表
    getCharacters: function() {
        return this.characters;
    },
    
    // 获取BOSS列表
    getBosses: function() {
        return this.bosses;
    },
    
    // 根据名称获取角色
    getCharacterByName: function(name) {
        return this.characters.find(char => char.name === name);
    },
    
    // 根据名称获取BOSS
    getBossByName: function(name) {
        return this.bosses.find(boss => boss.name === name);
    }
};
