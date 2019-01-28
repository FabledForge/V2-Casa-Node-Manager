function listAllContainers() {
  return [ { Id: '61ad53f326128a34fe358ef44fe5a9c168721ea40d0d7bd362d89d90bb07d821',
    Names: [ '/lnd' ],
    Image: 'casacomputer/lnd:arm',
    ImageID: 'sha256:f802dbc107d08534d32372914eb4713c0b70edd7b124c4ea254510089821892f',
    Command: './chains/lnd/start-lnd.sh',
    Created: 1546536478,
    Ports: [],
    Labels:
      { 'com.docker.compose.config-hash': '4ac6af7cd473656d9295c23c99098d3dc687382793c75390e9c27d222921b58f',
        'com.docker.compose.container-number': '1',
        'com.docker.compose.oneoff': 'False',
        'com.docker.compose.project': 'applications',
        'com.docker.compose.service': 'lnd',
        'com.docker.compose.version': '1.22.0-rc2' },
    State: 'running',
    Status: 'Up About a minute',
    HostConfig: { NetworkMode: 'host' },
    NetworkSettings: { Networks: [Object] },
    Mounts: [ [Object] ] },
    { Id: '783d06d776a0f7e36d814a7a5acc57b11fd773f5f0f867ca6142b1d69335e251',
      Names: [ '/bitcoind' ],
      Image: 'casacomputer/bitcoind:arm',
      ImageID: 'sha256:b9cadee1a558acb23457132923c5acff94486819c94f5c0e5f12ee4ac66729ce',
      Command: './chains/bitcoind/start_bitcoind.sh',
      Created: 1546536468,
      Ports: [],
      Labels:
        { 'com.docker.compose.config-hash': '2e6e4c0f2c7bc5fc680c4411363e194aba8390f7fceaadb32195f59a531907d0',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'bitcoind',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 2 minutes',
      HostConfig: { NetworkMode: 'host' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [ [Object] ] },
    { Id: '1d934b7eb6ce78bb53fb240242450a769d16ef1d50f45c150aa0370cf90fc722',
      Names: [ '/lnapi' ],
      Image: 'casacomputer/lnapi:arm',
      ImageID: 'sha256:3a21fd40810c9efccae33cdb59a4da62b41ae4c7acc5893109bd74d2d508005e',
      Command: 'npm start',
      Created: 1546536461,
      Ports: [],
      Labels:
        { 'com.docker.compose.config-hash': '84bcd5e8887bcf763b66529958122b563cc9fbf8cc548595e6f6347a873e3903',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'lnapi',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 2 minutes',
      HostConfig: { NetworkMode: 'host' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [ [Object], [Object] ] },
    { Id: 'c267ccc037a5d76a545717dcffb3622d20d2153ce8f22b2930e88f3e3026c9f6',
      Names: [ '/space-fleet' ],
      Image: 'casacomputer/space-fleet:arm',
      ImageID: 'sha256:ade22b045b12205f32e725d9f597afbdc2f2959fc4f09099d01ce05e3948f204',
      Command: 'yarn start',
      Created: 1546442615,
      Ports: [ [Object] ],
      Labels:
        { 'com.docker.compose.config-hash': 'fb5cb1adfe6cb1918592312382cd04fa8fa1b527005d643857065c292cce7bcc',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'space-fleet',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 26 hours',
      HostConfig: { NetworkMode: 'applications_arpanet' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [] },
    { Id: 'e4bf1e72d8a29b7b7f5a9c0164b45af4e7d8a76e8869f91bbf0dd0b8ef3ed4de',
      Names: [ '/manager' ],
      Image: 'casacomputer/manager:arm',
      ImageID: 'sha256:b47a45306b7ea11a8033ecfc59d78f191dff8591ed8009379dd89591ea097c6d',
      Command: 'npm start',
      Created: 1546442540,
      Ports: [ [Object] ],
      Labels:
        { casa: 'persist',
          'com.docker.compose.config-hash': 'b455d993f2e7820b78550144e0e9a81369156d5bf43dd30d969a9799d326a3cd',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'manager',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 3 minutes',
      HostConfig: { NetworkMode: 'applications_manager' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [ [Object], [Object], [Object], [Object], [Object], [Object] ] },
    { Id: '1c16ecee258ec8cee741803692fd39d655c8c6819b94b36a545abfb36b0a45da',
      Names: [ '/update-manager' ],
      Image: 'casacomputer/update-manager:arm',
      ImageID: 'sha256:b3a38dcdcde739429ba492f6e6187701ec5bbd0f463d389b214f2a81b63c9adb',
      Command: 'npm start',
      Created: 1546442525,
      Ports: [ [Object], [Object] ],
      Labels:
        { casa: 'persist',
          'com.docker.compose.config-hash': '1cd15dd24a2898c549421d417fb56d8cbb6e5afa42a3b125bf29dfc7c9ca246b',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'update-manager',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 26 hours',
      HostConfig: { NetworkMode: 'applications_update-manager' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [ [Object], [Object], [Object], [Object], [Object] ] },
    { Id: '26bd64b8bd0451178bd123c224e2c5233aa8aacc4ac25756873b107fcb88b060',
      Names: [ '/logspout' ],
      Image: 'casacomputer/logspout:arm',
      ImageID: 'sha256:f26a40a7995173552a3e747fe3a4c99109c9167ecdade90dfa872caef4e6163e',
      Command: '/bin/logspout syslog://syslog:514',
      Created: 1545507619,
      Ports: [ [Object] ],
      Labels:
        { 'com.docker.compose.config-hash': '018008f6f7c03b7f8e9490ba44232dc738a83deecec7155d683d0bff71b62158',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'logspout',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 26 hours',
      HostConfig: { NetworkMode: 'applications_logs' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [ [Object], [Object] ] },
    { Id: '6a24d255c7997a6d54a939b27026328d012c360877b1892549b1a422cdb6540f',
      Names: [ '/syslog' ],
      Image: 'casacomputer/syslog:arm',
      ImageID: 'sha256:46ec04258359fb91a66377bb36f816ea16c6a71e04c279239bae749ed6471bb3',
      Command: '/usr/sbin/rsyslogd -n',
      Created: 1545507610,
      Ports: [ [Object], [Object] ],
      Labels:
        { 'com.docker.compose.config-hash': 'f2a6907ee14f5f3ac21e21bf84c02ca50b53c5ce77b485540c97327e2de9095a',
          'com.docker.compose.container-number': '1',
          'com.docker.compose.oneoff': 'False',
          'com.docker.compose.project': 'applications',
          'com.docker.compose.service': 'syslog',
          'com.docker.compose.version': '1.22.0-rc2' },
      State: 'running',
      Status: 'Up 26 hours',
      HostConfig: { NetworkMode: 'applications_logs' },
      NetworkSettings: { Networks: [Object] },
      Mounts: [ [Object] ] } ];
}

function listImages() {
  return [ { Containers: -1,
    Created: 1546225789,
    Id: 'sha256:ade22b045b12205f32e725d9f597afbdc2f2959fc4f09099d01ce05e3948f204',
    Labels: null,
    ParentId: '',
    RepoDigests:
      [ 'casacomputer/space-fleet@sha256:8518e5fa0ab0e0d64ad63790db79a77e366fee2bd423fdb6b7f85c2b86184411' ],
    RepoTags: [ 'casacomputer/space-fleet:arm' ],
    SharedSize: -1,
    Size: 1088628885,
    VirtualSize: 1088628885 },
    { Containers: -1,
      Created: 1545894579,
      Id: 'sha256:b47a45306b7ea11a8033ecfc59d78f191dff8591ed8009379dd89591ea097c6d',
      Labels: { casa: 'persist' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/manager@sha256:11e0b19f885b11c13a713588a31cb11f337a45942b128f4758dd549c7f9badfa' ],
      RepoTags: [ 'casacomputer/manager:arm' ],
      SharedSize: -1,
      Size: 813608171,
      VirtualSize: 813608171 },
    { Containers: -1,
      Created: 1545894530,
      Id: 'sha256:3a21fd40810c9efccae33cdb59a4da62b41ae4c7acc5893109bd74d2d508005e',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/lnapi@sha256:b8a9245bb21c7af69d016b46ecfe3085672fd7717addfaa3462b260dab51daf9' ],
      RepoTags: [ 'casacomputer/lnapi:arm' ],
      SharedSize: -1,
      Size: 871775497,
      VirtualSize: 871775497 },
    { Containers: -1,
      Created: 1545087321,
      Id: 'sha256:f802dbc107d08534d32372914eb4713c0b70edd7b124c4ea254510089821892f',
      Labels: {},
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/lnd@sha256:e19b70aba1a6733a5cee93bc4b38ae6ae3c58baba7103a10c46015388ffd4840' ],
      RepoTags: [ 'casacomputer/lnd:arm' ],
      SharedSize: -1,
      Size: 51214969,
      VirtualSize: 51214969 },
    { Containers: -1,
      Created: 1545082477,
      Id: 'sha256:0aee28d6280c4ced78b12d5f2dfd7a973cdf7306b8d1954451fdeacdcaa00011',
      Labels: { casa: 'persist' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/manager@sha256:6379cde4e117bbc5217f63e1f5d1fb8c1133360286b4b598a26c22576d3a7d66' ],
      RepoTags: null,
      SharedSize: -1,
      Size: 813596013,
      VirtualSize: 813596013 },
    { Containers: -1,
      Created: 1545082077,
      Id: 'sha256:b9cadee1a558acb23457132923c5acff94486819c94f5c0e5f12ee4ac66729ce',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/bitcoind@sha256:bcd3df20d1b8f9fa1d1022418d91206a3ad72b40948c5cda45dc6716a50f9223' ],
      RepoTags: [ 'casacomputer/bitcoind:arm' ],
      SharedSize: -1,
      Size: 237518434,
      VirtualSize: 237518434 },
    { Containers: -1,
      Created: 1545081899,
      Id: 'sha256:46ec04258359fb91a66377bb36f816ea16c6a71e04c279239bae749ed6471bb3',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/syslog@sha256:ac36cfc552fafe725a1b511f7cbdd8a4c9ad039480059b159176149aec376332' ],
      RepoTags: [ 'casacomputer/syslog:arm' ],
      SharedSize: -1,
      Size: 116151378,
      VirtualSize: 116151378 },
    { Containers: -1,
      Created: 1545081804,
      Id: 'sha256:a53f4887338a5021c1d21331eb54601900575995eb4ce711dee8773b1d05a62a',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/device-host@sha256:030edda4b7198860912e26c192739b7a9b2304514f878c1603aa053c68132cbb' ],
      RepoTags: [ 'casacomputer/device-host:arm' ],
      SharedSize: -1,
      Size: 7755843,
      VirtualSize: 7755843 },
    { Containers: -1,
      Created: 1545081803,
      Id: 'sha256:eed275487dd667de965333ae1b078569b5765dc52b586cedc3fe26a841a122ea',
      Labels:
        { casa: 'persist',
          maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/welcome@sha256:7997490435db05f9fcdac228e204da6ec4a9745c7f8a7dcde7057938f837868f' ],
      RepoTags: [ 'casacomputer/welcome:arm' ],
      SharedSize: -1,
      Size: 18443946,
      VirtualSize: 18443946 },
    { Containers: -1,
      Created: 1542234222,
      Id: 'sha256:b3a38dcdcde739429ba492f6e6187701ec5bbd0f463d389b214f2a81b63c9adb',
      Labels: { casa: 'persist' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/update-manager@sha256:40e39a15e0a87a44ab0b1e62eec4097230b20593b6fc458246eff85be1a372ae' ],
      RepoTags: [ 'casacomputer/update-manager:arm' ],
      SharedSize: -1,
      Size: 806071069,
      VirtualSize: 806071069 },
    { Containers: -1,
      Created: 1530064798,
      Id: 'sha256:f26a40a7995173552a3e747fe3a4c99109c9167ecdade90dfa872caef4e6163e',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/logspout@sha256:33034b1f413969486f8bf61727030a80017d1a837ee8660eab7db6f6d6387a1e' ],
      RepoTags: [ 'casacomputer/logspout:arm' ],
      SharedSize: -1,
      Size: 14637419,
      VirtualSize: 14637419 } ];
}

// Contains the base set of images, and updated images for the manager, and a few old images.
function listImagesWithUpdate() {
  return [ { Containers: -1,
    Created: 1546974832,
    Id: 'sha256:3a21fd40810c9efccae33cdb59a4da62b41ae4c7acc5893109bd74d2d508005e',
    Labels: null,
    ParentId: '',
    RepoDigests:
      [ 'casacomputer/lnapi@sha256:d3d04d9566065e6333089736a0360acdf7b3a240f95b9c8a351c72154614d782' ],
    RepoTags: [ 'casacomputer/lnapi:arm' ],
    SharedSize: -1,
    Size: 875122096,
    VirtualSize: 875122096 },
    { Containers: -1,
      Created: 1546900530,
      Id: 'sha256:ade22b045b12205f32e725d9f597afbdc2f2959fc4f09099d01ce05e3948f204',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/space-fleet@sha256:9c37fba3ce70011ad30d2caa7ae35f95a2e56fbadacdec04949261ad5c5ba079' ],
      RepoTags: [ 'casacomputer/space-fleet:arm' ],
      SharedSize: -1,
      Size: 1090367109,
      VirtualSize: 1090367109 },
    { Containers: -1,
      Created: 1546897705,
      Id: 'sha256:b9cadee1a558acb23457132923c5acff94486819c94f5c0e5f12ee4ac66729ce',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/bitcoind@sha256:72f28d10a355031f51dc2b70fe0e526703a42bec18abf324ed66755679868a33' ],
      RepoTags: [ 'casacomputer/bitcoind:arm' ],
      SharedSize: -1,
      Size: 237912562,
      VirtualSize: 237912562 },
    { Containers: -1,
      Created: 1546897514,
      Id: 'sha256:46ec04258359fb91a66377bb36f816ea16c6a71e04c279239bae749ed6471bb3',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/syslog@sha256:3767b342116f7a958ba0258da33652165ad840a42ee1c7ed7acac76eef24decb' ],
      RepoTags: [ 'casacomputer/syslog:arm' ],
      SharedSize: -1,
      Size: 116185976,
      VirtualSize: 116185976 },
    { Containers: -1,
      Created: 1546897424,
      Id: 'sha256:7cd6acddb9cca5292bdad55736df135992fec5aaaf9699725caf767d40f90c14',
      Labels:
        { casa: 'persist',
          maintainer: 'NGINX Docker Maintainers <docker-maint@nginx.com>' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/welcome@sha256:91113c2c6bfa08af79b4a70c8aa64ddaae1aa1e1769fbab333322e6624cbbf7c' ],
      RepoTags: [ 'casacomputer/welcome:arm' ],
      SharedSize: -1,
      Size: 18444004,
      VirtualSize: 18444004 },
    { Containers: -1,
      Created: 1546897420,
      Id: 'sha256:3d1b1362ccd126df616b4706ccf4df9211d38013dd8f011f7c4b13935388abb8',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/device-host@sha256:acee1219b6d3643633b95201abae023b5a845b74932fc4b366b2f07e8953db2a' ],
      RepoTags: [ 'casacomputer/device-host:arm' ],
      SharedSize: -1,
      Size: 7756164,
      VirtualSize: 7756164 },
    { Containers: -1,
      Created: 1546892319,
      Id: 'sha256:cc88920358333c4616efb5f0718dd69c66f352e2085d6d22a6024b3a5fca2245',
      Labels: { casa: 'persist' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/manager@sha256:fc518e18b9941cfbd3aff56a2053a2d6f315738fe3b3c694a706b5df84a98455' ],
      RepoTags: [ 'casacomputer/manager:arm' ],
      SharedSize: -1,
      Size: 816345434,
      VirtualSize: 816345434 },
    { Containers: -1,
      Created: 1545894579,
      Id: 'sha256:b47a45306b7ea11a8033ecfc59d78f191dff8591ed8009379dd89591ea097c6d',
      Labels: { casa: 'persist' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/manager@sha256:11e0b19f885b11c13a713588a31cb11f337a45942b128f4758dd549c7f9badfa' ],
      RepoTags: null,
      SharedSize: -1,
      Size: 813608171,
      VirtualSize: 813608171 },
    { Containers: -1,
      Created: 1545087321,
      Id: 'sha256:f802dbc107d08534d32372914eb4713c0b70edd7b124c4ea254510089821892f',
      Labels: {},
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/lnd@sha256:e19b70aba1a6733a5cee93bc4b38ae6ae3c58baba7103a10c46015388ffd4840' ],
      RepoTags: [ 'casacomputer/lnd:arm' ],
      SharedSize: -1,
      Size: 51214969,
      VirtualSize: 51214969 },
    { Containers: -1,
      Created: 1542234222,
      Id: 'sha256:b3a38dcdcde739429ba492f6e6187701ec5bbd0f463d389b214f2a81b63c9adb',
      Labels: { casa: 'persist' },
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/update-manager@sha256:40e39a15e0a87a44ab0b1e62eec4097230b20593b6fc458246eff85be1a372ae' ],
      RepoTags: [ 'casacomputer/update-manager:arm' ],
      SharedSize: -1,
      Size: 806071069,
      VirtualSize: 806071069 },
    { Containers: -1,
      Created: 1530064798,
      Id: 'sha256:f26a40a7995173552a3e747fe3a4c99109c9167ecdade90dfa872caef4e6163e',
      Labels: null,
      ParentId: '',
      RepoDigests:
        [ 'casacomputer/logspout@sha256:33034b1f413969486f8bf61727030a80017d1a837ee8660eab7db6f6d6387a1e' ],
      RepoTags: [ 'casacomputer/logspout:arm' ],
      SharedSize: -1,
      Size: 14637419,
      VirtualSize: 14637419 } ];
}

module.exports = {
  listAllContainers,
  listImages,
  listImagesWithUpdate,
};