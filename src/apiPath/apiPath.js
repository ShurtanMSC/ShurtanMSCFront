export const apiPath = {


    /** CRUD **/

    add:"add",
    edit:"edit",
    all:"all",

                                /**     super-admin-controller    **/
    // Users
    addUser: 'user/add',
    editUser: 'user/edit',
    deleteUser: 'user/delete/',
    allUsers: 'user/all',
    byIdUser: 'user/',

    // Mining System
    addMining: 'mining/add',
    editMining: 'mining/edit',
    deleteMining: 'mining/delete/',
    allMinings: 'mining/all',
    byIdMining: 'mining/',

    // Uppg
    addUppg: 'uppg/add',
    editUppg: 'uppg/edit',
    deleteUppg: 'uppg/delete/',
    allUppgs: 'uppg/all',
    byIdUppg: 'uppg/',

    // Collection Point
    addCollection: 'collection/add',
    editCollection: 'collection/edit',
    deleteCollection: 'collection/delete/',
    allCollections: 'collection/all',
    byIdCollection: 'collection/',

    // Well
    addWell: 'well/add',
    editWell: 'well/edit',
    deleteWell: 'well/delete/',
    allWells: 'well/all',
    byIdWell: 'well/',


                                /**     well-controller     **/
    // Well action
    getAllWells: 'all',
    getAllActionByUppg: 'all/action/uppg/',
    wellsWithAction: 'all/actions',
    wellsWithActionByCollectionPoint: 'all/actions/collection_point/',
    wellsByCollectionPoint: 'all/collection_point/',
    getAllByMiningSystem: 'all/mining_system/',
    getCountByInWork: 'count_by_in_work',
    addActionWell: 'manually/add/action',
    getOneWellWithAction: 'one/action/',
    getOneWell: 'one/',


                                /**     uppg-controller     **/
    //uppg action
    getAllUppgs: 'all',
    uppgsWithAction: 'all/actions',
    uppgsWithActionByMiningSystem: 'all/actions/mining_system/',
    uppgsByMiningSystem: 'all/mining_system/',
    getOneUppg: 'one/',
    getOneUppgWithAction: 'one/action/',
    addActionUppg: 'manually/add/action',


                           /**     collection-point-controller     **/
    //collection point  action
    allCollectionPoints: 'all',
    collectionsWithActionByMiningSystem: 'all/action/mining_system/',
    allCollectionsWithAction: 'all/actions',
    collectionsByMiningSystem: 'all/mining_system/',
    collectionsByUppg: 'all/uppg/',
    oneCollectionWithAction: 'one/action/',
    addActionCollection: 'manually/add/action',
    getOneCollection:'one/',


                           /**     mining-system-controller     **/
    //collection point  action
    allMiningSystems: 'all',
    allMiningSystemsWithAction: 'all/actions',
    oneMiningSystemWithAction: 'one/action/',
    getMiningSystem:'one/',


                        /**     gas-composition-controller     **/
    //collection point  action
    saveGasComposition: 'add',
    allGasComposition: 'all',
    editGasComposition: 'edit',
    getGasCompositionById:'',
    deleteGasComposition: 'delete/',
    saveMiningSystemGasComposition: 'molar/add',
    allMiningSystemGasComposition: 'molar/all',
    editMiningSystemGasComposition: 'molar/edit',
    getMiningSystemGasComposition:'molar/',
    deleteMiningSystemGasComposition: 'molar/delete/',















}
