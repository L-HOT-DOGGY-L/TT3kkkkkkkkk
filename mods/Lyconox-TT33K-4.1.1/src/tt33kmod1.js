"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let db;
class KhyberTokarev {
    container;
    postSptLoad(container) {
        this.container = container;
    }
    postDBLoad(container) {
        const jsonUtil = container.resolve("JsonUtil");
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const locales = Object.values(tables.locales.global);
        const items = tables.templates.items;
        const handbook = tables.templates.handbook;
        const mastering = tables.globals.config.Mastering;
        const importerUtil = container.resolve("ImporterUtil");
        const modLoader = container.resolve("PreSptModLoader");
        db = importerUtil.loadRecursive(`${modLoader.getModPath("Lyconox-TT33K-4.1.1")}db/`);
        const muzzleJp943id = "lyconoxjp943id", muzzleJp943 = jsonUtil.clone(items["5bffd7ed0db834001d23ebf9"]);
        muzzleJp943._id = muzzleJp943id;
        muzzleJp943._props.Accuracy -= 1;
        muzzleJp943._props.ConflictingItems.push("5bffd7ed0db834001d23ebf9");
        muzzleJp943._props.Prefab.path = "tt33mod1/muzzle_jp94_3.bundle";
        muzzleJp943._props.Weight = 0.0233;
        muzzleJp943._props.Recoil -= 2;
        muzzleJp943._props.Velocity += .3;
        items[muzzleJp943id] = muzzleJp943;
        items["571a279b24597720b4066566"]._props.Slots[0]._props.filters[0].Filter.push(muzzleJp943id);
        const mountTt33Shortid = "lyconoxmounttt33short", mountTt33Short = jsonUtil.clone(items["5a9d6d21a2750c00137fa649"]);
        mountTt33Short._id = mountTt33Shortid;
        mountTt33Short._props.Prefab.path = "tt33mod1/mount_tt_short.bundle";
        mountTt33Short._props.Slots = [
            {
                "_id": "5a9e5f18a2750c003215715c",
                "_mergeSlotWithChildren": false,
                "_name": "mod_tactical",
                "_parent": mountTt33Shortid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "644a3df63b0b6f03e101e065"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        mountTt33Short._props.Width = 1;
        mountTt33Short._props.Weight = 0.023;
        items["571a12c42459771f627b58a0"]._props.Slots[4]._props.filters[0].Filter.push(mountTt33Shortid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[4]._props.filters[0].Filter.push(mountTt33Shortid);
        items[mountTt33Shortid] = mountTt33Short;
        const mountTt33nrmRailid = "lyconoxmounttt33normalrail";
        const mountTt33nrmRail = jsonUtil.clone(items["5a9d6d34a2750c00141e07da"]);
        mountTt33nrmRail._id = mountTt33nrmRailid;
        mountTt33nrmRail._props.Prefab.path = "tt33mod1/mount_rail_tt_nl.bundle";
        mountTt33nrmRail._props.Slots = [
            {
                "_id": "5a9d6d34a2750c00141e07dd",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount_000",
                "_parent": mountTt33nrmRailid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a9d6d00a2750c5c985b5305",
                                "59e0bdb186f774156f04ce82",
                                "623c2f652febb22c2777d8d7"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            },
            {
                "_id": "5a9d6d34a2750c00141e07de",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount_001",
                "_parent": mountTt33nrmRailid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a9d6d00a2750c5c985b5305",
                                "59e0bdb186f774156f04ce82",
                                "623c2f652febb22c2777d8d7"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            },
            {
                "_id": "5ab24ef9e5b5b00fe93c920b",
                "_mergeSlotWithChildren": false,
                "_name": "mod_scope",
                "_parent": mountTt33nrmRailid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "57ae0171245977343c27bfcf",
                                "609bab8b455afd752b2e6138",
                                "58d39d3d86f77445bb794ae7",
                                "616554fe50224f204c1da2aa",
                                "615d8d878004cc50514c3233",
                                "577d128124597739d65d0e56",
                                "58d2664f86f7747fec5834f6",
                                "5a33b2c9c4a282000c5a9511",
                                "570fd721d2720bc5458b4596",
                                "584984812459776a704a82a6"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        mountTt33nrmRail._props.Ergonomics = 2;
        mountTt33nrmRail._props.Recoil = -2;
        mountTt33nrmRail._props.Weight = 0.034;
        mountTt33nrmRail._props.Width = 2;
        items[mountTt33nrmRailid] = mountTt33nrmRail;
        const mountTt33nrmDecoid = "lyconoxmounttt33normaldeco";
        const mountTt33nrmDeco = jsonUtil.clone(items["5a9d6d34a2750c00141e07da"]);
        mountTt33nrmDeco._id = mountTt33nrmDecoid;
        mountTt33nrmDeco._props.Prefab.path = "tt33mod1/mount_deco_tt_nl.bundle";
        mountTt33nrmDeco._props.Slots = [{
                "_id": "5a9d6d34a2750c00141e07dd",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount_000",
                "_parent": mountTt33nrmDecoid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a9d6d00a2750c5c985b5305",
                                "59e0bdb186f774156f04ce82",
                                "623c2f652febb22c2777d8d7"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            },
            {
                "_id": "5a9d6d34a2750c00141e07de",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount_001",
                "_parent": mountTt33nrmDecoid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a9d6d00a2750c5c985b5305",
                                "59e0bdb186f774156f04ce82",
                                "623c2f652febb22c2777d8d7"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }];
        mountTt33nrmDeco._props.Ergonomics = 3;
        mountTt33nrmDeco._props.Width = 1;
        mountTt33nrmDeco._props.Recoil = -.5;
        mountTt33nrmDeco._props.Weight = 0.023;
        items[mountTt33nrmDecoid] = mountTt33nrmDeco;
        const mountTt33nrmid = "lyconoxmounttt33normal";
        const mountTt33nrm = jsonUtil.clone(items["5a9d6d21a2750c00137fa649"]);
        mountTt33nrm._id = mountTt33nrmid;
        mountTt33nrm._props.Ergonomics = -1;
        mountTt33nrm._props.Prefab.path = "tt33mod1/mount_tt_nl.bundle";
        mountTt33nrm._props.Width = 1;
        mountTt33nrm._props.Slots = [
            {
                "_id": "5a9d6e86a2750c00171b3f7b",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount",
                "_parent": mountTt33nrmid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                mountTt33nrmDecoid,
                                mountTt33nrmRailid
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            },
            {
                "_id": "5c8a52462e2216000e69ecc1",
                "_mergeSlotWithChildren": false,
                "_name": "mod_tactical",
                "_parent": mountTt33nrmid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a800961159bd4315e3a1657",
                                "57fd23e32459772d0805bcf1",
                                "544909bb4bdc2d6f028b4577",
                                "5c06595c0db834001a66af6c",
                                "5cc9c20cd7f00c001336c65d",
                                "5d2369418abbc306c62e0c80",
                                "5b07dd285acfc4001754240d",
                                "56def37dd2720bec348b456a",
                                "5a7b483fe899ef0016170d15",
                                "5a5f1ce64f39f90b401987bc",
                                "560d657b4bdc2da74d8b4572",
                                "5b3a337e5acfc4704b4a19a0",
                                "5c5952732e2216398b5abda2",
                                "57d17e212459775a1179a0f5",
                                "6267c6396b642f77f56f5c1c",
                                "6272370ee4013c5d7e31f418",
                                "6272379924e29f06af4d5ecb",
                                "626becf9582c3e319310b837",
                                "644a3df63b0b6f03e101e065"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        mountTt33nrm._props.Weight = 0.05;
        items["571a12c42459771f627b58a0"]._props.Slots[4]._props.filters[0].Filter.push(mountTt33nrmid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[4]._props.filters[0].Filter.push(mountTt33nrmid);
        items[mountTt33nrmid] = mountTt33nrm;
        const muzzleTtmafiaid = "lyconoxmuzzlettmafiaid", muzzleTtmafia = jsonUtil.clone(items["5bffd7ed0db834001d23ebf9"]);
        muzzleTtmafia._id = muzzleTtmafiaid;
        muzzleTtmafia._props.Accuracy += 2;
        muzzleTtmafia._props.ConflictingItems = ["571a279b24597720b4066566"];
        muzzleTtmafia._props.Prefab.path = "tt33mod1/muzzle_tt_mafia.bundle";
        muzzleTtmafia._props.Weight = 0.0233;
        muzzleTtmafia._props.Recoil -= 4;
        muzzleTtmafia._props.Slots = [
            {
                "_id": "5bffd9000db83400232feb12",
                "_mergeSlotWithChildren": false,
                "_name": "mod_muzzle",
                "_parent": muzzleTtmafiaid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5bffd7ed0db834001d23ebf9"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        muzzleTtmafia._props.CoolFactor = 1.03;
        items[muzzleTtmafiaid] = muzzleTtmafia;
        items["571a12c42459771f627b58a0"]._props.Slots[3]._props.filters[0].Filter.push(muzzleTtmafiaid);
        const barrelTt33Mafiaid = "lyconoxmafiatt33barrelthrid", barrelTt33Mafia = jsonUtil.clone(items["571a279b24597720b4066566"]);
        barrelTt33Mafia._id = barrelTt33Mafiaid;
        barrelTt33Mafia._props.Accuracy += 1;
        barrelTt33Mafia._props.CenterOfImpact -= .032;
        barrelTt33Mafia._props.CoolFactor = 1.02;
        barrelTt33Mafia._props.Ergonomics -= 2;
        barrelTt33Mafia._props.HeatFactor = .8;
        barrelTt33Mafia._props.Loudness = 3;
        barrelTt33Mafia._props.Prefab.path = "tt33mod1/barrel_tt_165mm_mafia.bundle";
        barrelTt33Mafia._props.Weight += 0.003;
        barrelTt33Mafia._props.Recoil -= 2;
        barrelTt33Mafia._props.Velocity += .01;
        items[barrelTt33Mafiaid] = barrelTt33Mafia;
        const barrelAkid = "lyconoxbarrelakid", barrelAk = jsonUtil.clone(items["5bffd7ed0db834001d23ebf9"]);
        barrelAk._id = barrelAkid;
        barrelAk._props.Prefab.path = "tt33mod1/barrel_tt_ak.bundle";
        barrelAk._props.ConflictingItems = [barrelTt33Mafiaid, muzzleTtmafiaid, "5bffd7ed0db834001d23ebf9"];
        barrelAk._props.Recoil -= 4;
        barrelAk._props.Ergonomics = -14;
        barrelAk._props.HeatFactor = 1.01;
        barrelAk._props.Accuracy += 3;
        barrelAk._props.CoolFactor = 1.08;
        barrelAk._props.DurabilityBurnModificator = .74;
        barrelAk._props.Velocity += 1;
        barrelAk._props.Weight = 0.23;
        barrelAk._props.Width = 2;
        barrelAk._props.RaidModdable = false;
        barrelAk._props.ExtraSizeLeft = 1;
        barrelAk._props.DeviationMax -= .3;
        barrelAk._props.Slots = [
            {
                "_name": "mod_muzzle",
                "_id": "571a29612459771fd90bb671",
                "_parent": barrelAkid,
                "_props": {
                    "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                                "571a28e524597720b4066567",
                                muzzleJp943id
                            ]
                        }
                    ]
                },
                "_required": false,
                "_mergeSlotWithChildren": false,
                "_proto": "55d30c4c4bdc2db4468b457e"
            }
        ];
        items[barrelAkid] = barrelAk;
        items["571a279b24597720b4066566"]._props.Slots[0]._props.filters[0].Filter.push(barrelAkid);
        const adapterAkid = "lyconoxadapterakid", adapterAk = jsonUtil.clone(items[mountTt33Shortid]);
        adapterAk._id = adapterAkid;
        adapterAk._props.Prefab.path = "tt33mod1/mount_tt_ak.bundle";
        adapterAk._props.Ergonomics -= 3;
        adapterAk._props.RaidModdable = false;
        adapterAk._props.ConflictingItems = [barrelTt33Mafiaid];
        adapterAk._props.Slots = [
            {
                "_name": "mod_handguard",
                "_id": "59d64ec286f774171d1e0a43",
                "_parent": adapterAkid,
                "_props": {
                    "filters": [
                        {
                            "Shift": 0,
                            "Filter": [
                                "5cf4e3f3d7f00c06595bc7f0",
                                "5648ae314bdc2d3d1c8b457f",
                                "5d2c829448f0353a5c7d6674",
                                "5cbda392ae92155f3c17c39f",
                                "5cbda9f4ae9215000e5b9bfc",
                                "5648b0744bdc2d363b8b4578",
                                "5648b1504bdc2d9d488b4584",
                                "59d64f2f86f77417193ef8b3",
                                "57cff947245977638e6f2a19",
                                "57cffd8224597763b03fc609",
                                "57cffddc24597763133760c6",
                                "57cffe0024597763b03fc60b",
                                "57cffe20245977632f391a9d",
                                "5c9a07572e221644f31c4b32",
                                "5c9a1c3a2e2216000e69fb6a",
                                "5c9a1c422e221600106f69f0",
                                "59e6284f86f77440d569536f",
                                "59e898ee86f77427614bd225",
                                "5a9d56c8a2750c0032157146",
                                "5d1b198cd7ad1a604869ad72",
                                "5d4aaa73a4b9365392071175",
                                "5d4aaa54a4b9365392071170",
                                "5f6331e097199b7db2128dc2",
                                "5c17664f2e2216398b5a7e3c",
                                "5c617a5f2e2216000f1e81b3",
                                "5648b4534bdc2d3d1c8b4580",
                                "5efaf417aeb21837e749c7f2",
                                "6389f1dfc879ce63f72fc43e",
                                "647dba3142c479dde701b654",
                                "647dd2b8a12ebf96c3031655"
                            ]
                        }
                    ]
                },
                "_required": true,
                "_mergeSlotWithChildren": false,
                "_proto": "55d30c4c4bdc2db4468b457e"
            }
        ];
        adapterAk._props.Weight = 0.02;
        adapterAk._props.Width = 1;
        items[adapterAkid] = adapterAk;
        items["571a12c42459771f627b58a0"]._props.Slots[4]._props.filters[0].Filter.push(adapterAkid);
        const roundTt33timbsid = "5736035624597764307316CA", roundTt33timbs = jsonUtil.clone(items["573603562459776430731618"]);
        roundTt33timbs._id = roundTt33timbsid;
        roundTt33timbs._props.ArmorDamage = 45;
        roundTt33timbs._props.BallisticCoeficient = 0.181;
        roundTt33timbs._props.BulletMassGram = 5.5;
        roundTt33timbs._props.CanSellOnRagfair = false;
        roundTt33timbs._props.Damage = 44;
        roundTt33timbs._props.DurabilityBurnModificator = 1.7;
        roundTt33timbs._props.FragmentationChance = 0.13;
        roundTt33timbs._props.HeatFactor = 1.7;
        roundTt33timbs._props.InitialSpeed = 609;
        roundTt33timbs._props.PenetrationChance = 0.9;
        roundTt33timbs._props.PenetrationPower = 60;
        roundTt33timbs._props.PenetrationPowerDiviation = 0.3;
        roundTt33timbs._props.Prefab.path = "tt33mod1/ammo_tt_762x25mm_sabot.bundle";
        items[roundTt33timbsid] = roundTt33timbs;
        items["571a29dc2459771fb2755a6a"]._props.Cartridges[0]._props.filters[0].Filter.push(roundTt33timbsid); //mag tt 8
        items["571a12c42459771f627b58a0"]._props.Chambers[0]._props.filters[0].Filter.push(roundTt33timbsid); //tt
        items["5b3b713c5acfc4330140bd8d"]._props.Chambers[0]._props.filters[0].Filter.push(roundTt33timbsid); //tt gold
        items["5ea034eb5aad6446a939737b"]._props.Cartridges[0]._props.filters[0].Filter.push(roundTt33timbsid); //mag ppsh 35
        items["5ea034f65aad6446a939737e"]._props.Cartridges[0]._props.filters[0].Filter.push(roundTt33timbsid); //mag ppsh 71
        const stockType80bayonetid = "lyconoxstocktype80id", stockType80bayonet = jsonUtil.clone(items["5a17fb9dfcdbcbcae6687291"]);
        stockType80bayonet._id = stockType80bayonetid;
        stockType80bayonet._props.Slots = [];
        stockType80bayonet._props.Prefab.path = "tt33mod1/stock_type80.bundle";
        stockType80bayonet._props.Weight = 0.223;
        stockType80bayonet._props.Width = 2;
        stockType80bayonet._props.Recoil -= 1;
        items[stockType80bayonetid] = stockType80bayonet;
        const mountType54adapterid = "lyconoxtype54adapterid", mountType54adapter = jsonUtil.clone(items["5649b2314bdc2d79388b4576"]);
        mountType54adapter._id = mountType54adapterid;
        mountType54adapter._props.Slots = [{
                "_id": "5649db764bdc2d363b8b4583",
                "_mergeSlotWithChildren": false,
                "_name": "mod_stock",
                "_parent": mountType54adapterid,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "5a17fb9dfcdbcbcae6687291",
                                stockType80bayonetid
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": true
            }];
        mountType54adapter._props.Prefab.path = "tt33mod1/mout_type54_adapter.bundle";
        mountType54adapter._props.Recoil = 0;
        mountType54adapter._props.Weight = 0.02;
        items[mountType54adapterid] = mountType54adapter;
        const gripType54id = "lyconoxtype54pistolgripid", gripType54 = jsonUtil.clone(items["571a282c2459771fb2755a69"]);
        gripType54._id = gripType54id;
        gripType54._props.Ergonomics += 1;
        gripType54._props.Prefab.path = "tt33mod1/pistolgrip_type_54.bundle";
        gripType54._props.Slots = [
            {
                "_id": "5649db764bdc2d363b8b4583",
                "_mergeSlotWithChildren": false,
                "_name": "mod_tactical",
                "_parent": gripType54id,
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                mountType54adapterid
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        items[gripType54id] = gripType54;
        const magTt33Longid = "lyconoxtt33khybermag", magTt33Long = jsonUtil.clone(items["571a29dc2459771fb2755a6a"]);
        magTt33Long._props.Weight = 0.16;
        magTt33Long._props.Cartridges[0]._max_count = 25;
        magTt33Long._props.Ergonomics = -3;
        magTt33Long._props.LoadUnloadModifier = 23;
        magTt33Long._props.CheckOverride = 0;
        magTt33Long._props.CheckTimeModifier = 36;
        magTt33Long._props.MalfunctionChance = 0.15;
        magTt33Long._props.Height = 2;
        magTt33Long._props.ExtraSizeDown = 1;
        magTt33Long._props.Prefab.path = "tt33mod1/magazine_long.bundle";
        magTt33Long._props.Cartridges[0]._props.filters[0].Filter.push(roundTt33timbsid);
        magTt33Long._id = magTt33Longid;
        items[magTt33Longid] = magTt33Long;
        items["571a12c42459771f627b58a0"]._props.Slots[2]._props.filters[0].Filter.push(magTt33Longid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[2]._props.filters[0].Filter.push(magTt33Longid);
        const magTt33Tacid = "lyconoxtt33tacmag", magTt33Tac = jsonUtil.clone(items["571a29dc2459771fb2755a6a"]);
        magTt33Tac._props.Weight += .05;
        magTt33Tac._props.Cartridges[0]._max_count = 12;
        magTt33Tac._props.Ergonomics -= 1;
        magTt33Tac._props.LoadUnloadModifier = -19;
        magTt33Tac._props.CheckOverride = 0;
        magTt33Tac._props.CheckTimeModifier = 36;
        magTt33Tac._props.MalfunctionChance = 0.02;
        magTt33Tac._props.Height = 1;
        magTt33Tac._props.VisibleAmmoRangesString = "1-3";
        magTt33Tac._props.Prefab.path = "tt33mod1/magazine_tac.bundle";
        magTt33Tac._props.Cartridges[0]._props.filters[0].Filter.push(roundTt33timbsid);
        magTt33Tac._id = magTt33Tacid;
        items[magTt33Tacid] = magTt33Tac;
        items["571a12c42459771f627b58a0"]._props.Slots[2]._props.filters[0].Filter.push(magTt33Tacid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[2]._props.filters[0].Filter.push(magTt33Tacid);
        const magTt33Drumid = "lyconoxtt33drummag", magTt33Drum = jsonUtil.clone(items["571a29dc2459771fb2755a6a"]);
        magTt33Drum._id = magTt33Drumid;
        magTt33Drum._props.Weight = 1;
        magTt33Drum._props.CheckOverride = 0;
        magTt33Drum._props.CanSellOnRagfair = true;
        magTt33Drum._props.Cartridges[0]._max_count = 75;
        magTt33Drum._props.Ergonomics = -10;
        magTt33Drum._props.LoadUnloadModifier = 35;
        magTt33Drum._props.CheckTimeModifier = 48;
        magTt33Drum._props.MalfunctionChance = 0.213;
        magTt33Drum._props.Height = 2;
        magTt33Drum._props.Width = 2;
        magTt33Drum._props.ExtraSizeDown = 1;
        magTt33Drum._props.VisibleAmmoRangesString = "1-8";
        magTt33Drum._props.Prefab.path = "tt33mod1/magazine_drum.bundle";
        magTt33Drum._props.Cartridges[0]._props.filters[0].Filter.push(roundTt33timbsid);
        magTt33Drum._id = magTt33Drumid;
        items[magTt33Drumid] = magTt33Drum;
        items["571a12c42459771f627b58a0"]._props.Slots[2]._props.filters[0].Filter.push(magTt33Drumid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[2]._props.filters[0].Filter.push(magTt33Drumid);
        items["571a12c42459771f627b58a0"]._props.Slots[1]._props.filters[0].Filter.push(gripType54id);
        items["571a12c42459771f627b58a0"]._props.Slots[0]._props.filters[0].Filter.push(barrelTt33Mafiaid);
        items["571a12c42459771f627b58a0"]._props.Slots[3]._props.filters[0].Filter.push(muzzleTtmafiaid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[1]._props.filters[0].Filter.push(gripType54id);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[0]._props.filters[0].Filter.push(barrelTt33Mafiaid);
        items["5b3b713c5acfc4330140bd8d"]._props.Slots[3]._props.filters[0].Filter.push(muzzleTtmafiaid);
        const pistolTt33Khyberid = "lyconoxtt33khyber", pistolTt33KhyberGoldid = "lyconoxtt33khybergold", pistolType54id = "lyconoxtype54", pistolTt33Khyber = jsonUtil.clone(items["571a12c42459771f627b58a0"]), pistolTt33KhyberGold = jsonUtil.clone(items["5b3b713c5acfc4330140bd8d"]), pistolType54 = jsonUtil.clone(items["571a12c42459771f627b58a0"]);
        pistolTt33Khyber._id = pistolTt33Khyberid;
        pistolTt33KhyberGold._id = pistolTt33KhyberGoldid;
        pistolType54._id = pistolType54id;
        pistolTt33Khyber._props.weapFireType = ["fullauto", "single"];
        pistolTt33Khyber._props.bFirerate = 840;
        pistolTt33Khyber._props.DurabilityBurnRatio = 1.5;
        pistolTt33Khyber._props.CanSellOnRagfair = false;
        pistolTt33KhyberGold._props.weapFireType = ["fullauto", "single"];
        pistolTt33KhyberGold._props.bFirerate = 850;
        pistolTt33KhyberGold._props.DurabilityBurnRatio = 1.47;
        pistolTt33KhyberGold._props.CanSellOnRagfair = false;
        pistolType54._props.SingleFireRate = 800;
        pistolType54._props.Prefab.path = "tt33mod1/weapon_toz_tt_762x25tt_container.bundle";
        pistolType54._props.CanSellOnRagfair = false;
        pistolType54._props.RecoilCenter[1] = +.3;
        items[pistolTt33Khyberid] = pistolTt33Khyber;
        items[pistolTt33KhyberGoldid] = pistolTt33KhyberGold;
        items[pistolType54id] = pistolType54;
        addidtot(roundTt33timbsid, "5a7c2eca46aef81a7ca2145d", 500, 1500, "5449016a4bdc2d6f028b456f", 2, "5b47574386f77428ca22b33b", 1920, false);
        addidtot(mountType54adapterid, "58330581ace78e27b8b10cee", 2, 18540, "5449016a4bdc2d6f028b456f", 2, "5b5f755f86f77447ec5d770e", 23731, true);
        addidtot(gripType54id, "58330581ace78e27b8b10cee", 4, 4980, "5449016a4bdc2d6f028b456f", 1, "5b5f761f86f774094242f1a1", 6374, true);
        addidtot(stockType80bayonetid, "58330581ace78e27b8b10cee", 3, 12000, "5449016a4bdc2d6f028b456f", 3, "5b5f757486f774093e6cb507", 15360, true);
        addidtot(muzzleJp943id, "58330581ace78e27b8b10cee", 2, 8900, "5449016a4bdc2d6f028b456f", 2, "5b5f724186f77447ed5636ad", 11392, true);
        addidtot(muzzleTtmafiaid, "5a7c2eca46aef81a7ca2145d", 3, 21000, "5449016a4bdc2d6f028b456f", 3, "5b5f72f786f77447ec5d7702", 26800, true);
        addidtot(barrelTt33Mafiaid, "5a7c2eca46aef81a7ca2145d", 3, 12000, "5449016a4bdc2d6f028b456f", 1, "5b5f75c686f774094242f19f", 15360, true);
        addidtot(mountTt33Shortid, "5a7c2eca46aef81a7ca2145d", 3, 3400, "5449016a4bdc2d6f028b456f", 1, "5b5f755f86f77447ec5d770e", 4352, true);
        addidtot(mountTt33nrmid, "58330581ace78e27b8b10cee", 3, 2000, "5449016a4bdc2d6f028b456f", 1, "5b5f755f86f77447ec5d770e", 2560, true);
        addidtot(mountTt33nrmRailid, "58330581ace78e27b8b10cee", 2, 8000, "5449016a4bdc2d6f028b456f", 2, "5b5f755f86f77447ec5d770e", 10240, true);
        addidtot(mountTt33nrmDecoid, "58330581ace78e27b8b10cee", 2, 4600, "5449016a4bdc2d6f028b456f", 1, "5b5f755f86f77447ec5d770e", 5888, true);
        addidtot(pistolTt33Khyberid, "5a7c2eca46aef81a7ca2145d", 3, 8500, "5449016a4bdc2d6f028b456f", 1, "5b5f792486f77447ed5636b3", 10880, true);
        addidtot(pistolTt33KhyberGoldid, "5a7c2eca46aef81a7ca2145d", 3, 1, "5b3b713c5acfc4330140bd8d", 1, "5b5f792486f77447ed5636b3", 110000, false);
        addidtot(pistolType54id, "5a7c2eca46aef81a7ca2145d", 3, 5, "571a12c42459771f627b58a0", 1, "5b5f792486f77447ed5636b3", 40000, false);
        addidtot(magTt33Longid, "5a7c2eca46aef81a7ca2145d", 10, 2380, "5449016a4bdc2d6f028b456f", 1, "5b5f754a86f774094242f19b", 3046, true);
        addidtot(magTt33Tacid, "5a7c2eca46aef81a7ca2145d", 10, 3380, "5449016a4bdc2d6f028b456f", 1, "5b5f754a86f774094242f19b", 4326, true);
        addidtot(magTt33Drumid, "5a7c2eca46aef81a7ca2145d", 3, 23000, "5449016a4bdc2d6f028b456f", 2, "5b5f754a86f774094242f19b", 35260, true);
        addidtot(barrelAkid, "5a7c2eca46aef81a7ca2145d", 3, 12000, "5449016a4bdc2d6f028b456f", 1, "5b5f75c686f774094242f19f", 15360, true);
        addidtot(adapterAkid, "5a7c2eca46aef81a7ca2145d", 3, 2000, "5449016a4bdc2d6f028b456f", 1, "5b5f75c686f774094242f19f", 2560, true);
        const tt33kmid = [], tt33kgmid = [], type54mid = [];
        for (let i = 0; i < 5; i++) {
            tt33kmid.push(generateRandomID());
            tt33kgmid.push(generateRandomID());
            type54mid.push(generateRandomID());
        }
        const tt33kp = {
            _id: tt33kmid[0],
            _type: "Preset",
            _changeWeaponName: false,
            _name: "TT Kv Default",
            _parent: tt33kmid[1],
            _encyclopedia: pistolTt33Khyberid,
            _items: [
                {
                    _id: tt33kmid[1],
                    _tpl: pistolTt33Khyberid
                },
                {
                    _id: tt33kmid[2],
                    _tpl: "571a26d524597720680fbe8a",
                    parentId: tt33kmid[1],
                    slotId: "mod_barrel"
                },
                {
                    _id: tt33kmid[3],
                    _tpl: "571a282c2459771fb2755a69",
                    parentId: tt33kmid[1],
                    slotId: "mod_pistol_grip"
                },
                {
                    _id: tt33kmid[4],
                    _tpl: "571a29dc2459771fb2755a6a",
                    parentId: tt33kmid[1],
                    slotId: "mod_magazine"
                }
            ]
        };
        const tt33kgp = {
            _id: tt33kgmid[0],
            _type: "Preset",
            _changeWeaponName: false,
            _name: "Gold TT Kv Default",
            _parent: tt33kgmid[1],
            _encyclopedia: pistolTt33KhyberGoldid,
            _items: [
                {
                    _id: tt33kgmid[1],
                    _tpl: pistolTt33KhyberGoldid
                },
                {
                    _id: tt33kgmid[2],
                    _tpl: "5b3baf8f5acfc40dc5296692",
                    parentId: tt33kgmid[1],
                    slotId: "mod_barrel"
                },
                {
                    _id: tt33kgmid[3],
                    _tpl: "5b3cadf35acfc400194776a0",
                    parentId: tt33kgmid[1],
                    slotId: "mod_pistol_grip"
                },
                {
                    _id: tt33kgmid[4],
                    _tpl: "571a29dc2459771fb2755a6a",
                    parentId: tt33kgmid[1],
                    slotId: "mod_magazine"
                }
            ]
        };
        const type54p = {
            _id: type54mid[0],
            _type: "Preset",
            _changeWeaponName: false,
            _name: "Type 54 Default",
            _parent: type54mid[1],
            _encyclopedia: pistolType54id,
            _items: [
                {
                    _id: type54mid[1],
                    _tpl: pistolType54id
                },
                {
                    _id: type54mid[2],
                    _tpl: "571a26d524597720680fbe8a",
                    parentId: type54mid[1],
                    slotId: "mod_barrel"
                },
                {
                    _id: type54mid[3],
                    _tpl: gripType54id,
                    parentId: type54mid[1],
                    slotId: "mod_pistol_grip"
                },
                {
                    _id: type54mid[4],
                    _tpl: "571a29dc2459771fb2755a6a",
                    parentId: type54mid[1],
                    slotId: "mod_magazine"
                }
            ]
        };
        addPreset(tt33kp);
        addPreset(tt33kgp);
        addPreset(type54p);
        const quest = tables.templates.quests;
        for (const id in quest)
            if (quest[id]._id == "596b455186f77457cb50eccb") {
                quest[id].conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(pistolTt33Khyberid);
                quest[id].conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(pistolTt33KhyberGoldid);
                quest[id].conditions.AvailableForFinish[0].counter.conditions[0].weapon.push(pistolType54id);
            }
        for (const slot in mastering)
            if (mastering[slot].Name == "TT") {
                mastering[slot].Level2 = 100;
                mastering[slot].Level3 = 125;
                mastering[slot].Templates.push(pistolTt33Khyberid);
                mastering[slot].Templates.push(pistolTt33KhyberGoldid);
                mastering[slot].Templates.push(pistolType54id);
            }
        for (const locale of locales)
            for (const [idIndex, idName] of Object.entries(db.locales.global.en.itemids))
                for (const [des, value] of Object.entries(idName))
                    locale[`${idIndex} ${des}`] = value;
        for (const localeID in db.locales.global)
            if (localeID != "en")
                for (const [idIndex, idName] of Object.entries(db.locales.global[localeID].itemids))
                    for (const [des, value] of Object.entries(idName))
                        tables.locales.global[localeID][`${idIndex} ${des}`] = value;
        function addidtot(itemID, traderID, countNum, price, currency, loyal, type, hbprice, unlock) {
            handbook.Items.push({
                "Id": itemID,
                "ParentId": type,
                "Price": hbprice
            });
            items[itemID]._props.CanSellOnRagfair = unlock;
            if (traderID != "0") {
                tables.traders[traderID].assort.items.push({
                    "_id": itemID,
                    "_tpl": itemID,
                    "parentId": "hideout",
                    "slotId": "hideout",
                    "upd": {
                        "UnlimitedCount": false,
                        "StackObjectsCount": countNum,
                        "BuyRestrictionMax": countNum,
                        "BuyRestrictionCurrent": 0
                    }
                });
                tables.traders[traderID].assort.barter_scheme[itemID] = [
                    [{
                            "count": price,
                            "_tpl": currency
                        }]
                ];
                tables.traders[traderID].assort.loyal_level_items[itemID] = loyal;
            }
        }
        function addPreset(preset, makingChangeOnExistingPreset = false) {
            if (!makingChangeOnExistingPreset)
                tables.globals.ItemPresets[preset._id] = preset;
        }
        function generateRandomID() {
            const hexChars = "0123456789abcdefABCDEF";
            let result = "";
            for (let i = 0; i < 24; i++)
                result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
            return result;
        }
    }
}
module.exports = { mod: new KhyberTokarev() };