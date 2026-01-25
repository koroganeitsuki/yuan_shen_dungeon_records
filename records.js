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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
        },
        {
            id: 5,
            player: '小渣渣花',
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
                        character: '砂糖',
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
        },
        {
            id: 103,
            player: '测试玩家2',
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
            time: 115,
            boss: '深邃摹结株 · 虚暗幻变',
            gold: 2,
            constgold: 0,
            notes: '测试备注2',
            video: 'https://www.bilibili.com/video/BV1234567890',
            status: 'denied',
            submitTime: '2025/11/15 10:30:00',
            cup: '无'
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
            boss: '霜夜巡天灵主 · 惊恨憎愤',
            gold: 2,
            constgold: 0,
            notes: '1命爱诺',
            video: 'https://www.bilibili.com/video/BV1G2ymBYE2z/',
            status: 'approved',
            submitTime: '2025/10/29 12:3:0',
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            boss: '历经百战的暝视龙 · 霜雪苛念',
            gold: 2,
            constgold: 1,
            notes: '70级弹弓温迪，精5狼牙杜林，天空班',
            video: 'www.bilibili.com/video/BV1EdmxBoE2E/',
            status: 'approved',
            submitTime: '2025/12/10 17:21:0',
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            video: 'https:/www.bilibili.com/video/BV1kU2MByEHh/',
            status: 'approved',
            submitTime: '2025/11/7 15:46:0',
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '无'
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
            cup: '新月杯'
        },
        {
            id: 185,
            player: '星座になれたら',
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
            constgold: 3,
            notes: '',
            video: 'https://b23.tv/jZA3gwO',
            status: 'approved',
            submitTime: '2026-01-22T15:26',
            cup: '新月杯'
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
            cup: '无'
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
            cup: '无'
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
            status: 'pending',
            submitTime: '2026-01-24T01:24',
            cup: '新月杯'
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
            notes: '杜林2命但是几乎没提升',
            video: 'https://www.bilibili.com/video/BV15AzzBwEpY/?pop_share=1&spm_id_from=333.40164.0.0',
            status: 'pending',
            submitTime: '2026-01-23T22:00',
            cup: '新月杯'
        },
        {
            id: 190,
            player: '影子-ombre',
            mainc: '菲林斯',
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
            notes: '1命菲林斯手操模拟0命\n每轮只放两小e两小q\n且第二个小e手操在6s外释放\n具体可看右下角在第二个小e刷新后会额外出现两秒计时器',
            video: 'https://www.bilibili.com/video/BV14DzyBeETw/',
            status: 'pending',
            submitTime: '2026-01-24T22:26',
            cup: '新月杯'
        }
    ];

// 确保Records可以被其他脚本访问
window.Records = Records;