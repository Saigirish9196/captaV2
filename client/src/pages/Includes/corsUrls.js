const flag= 'Test'
var Api= 'http://localhost:3001' //testAPi
if (flag=='Dev'){
    //const Api= 'https://ap-south-1.console.aws.amazon.com/codesuite/codepipeline/pipeline/' //Production APi
     Api= 'https://capta-server.vercel.app'
}
const ApiUrls= {
    //add all api urls her
    'login':Api+'/login',
    'register':Api+'/register',
    'addUser':Api+'/user/add',
    'ManageUser':Api+'/user/manage',
    'AddInstitution':Api+'/college/add',
    'ManageInstitution':Api+'/college/manage',
    'MouCreate':Api+'/mou/create',
    'MouConfirm':Api+'/mou/confirm',
    'MouManage':Api+'/mou/manage',
    'ModuleCreate':Api+'/mou/create',
    'ModuleConfirmation':Api +'/module/confirmation/create',
    'ModuleManage': Api + '/module/confirmation/manage',
    'ModuleStatus' : Api + '/module/status',
    'createCurriculum' : Api + '/curriculum/create',
    'ManageCurriculum' : Api + '/curriculum/manage',
    'fetchCurriculumNames' : Api + '/curriculum/names',
    'createModuleCurriculum' : Api + '/module/create',
    'ManageModuleCurriculum' : Api + '/module/manage',
    'createBatch' : Api + '/batch/create',
    'manageBatch' : Api + '/batch/manage',
    'allocateBatch' : Api + '/batch/allocate',
    //Abc$ada
}

export default ApiUrls;