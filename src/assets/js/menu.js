const menus = [{
  code : "1",
  name : "首页",
  url : "/",
  submenus:[]
},
{
  code : "2",
  name : "走进燃气",
  url : "",
  submenus:[
    {
      code : "9",
      name : "公司介绍",
      url : "",
      parentCode : "2"
    },
    {
      code : "10",
      name : "领导致辞",
      url : "",
      parentCode : "2"
    },
    {
      code : "11",
      name : "资质荣誉",
      url : "",
      parentCode : "2"
    },
    {
      code : "12",
      name : "组织机构",
      url : "",
      parentCode : "2"
    },
    {
      code : "13",
      name : "企业大事",
      url : "",
      parentCode : "2"
    },
    {
      code : "14",
      name : "网点分布",
      url : "",
      parentCode : "2"
    },
    {
      code : "15",
      name : "站点地图",
      url : "",
      parentCode : "2"
    }
  ]
},
{
  code : "3",
  name : "企业文化",
  url : "",
  submenus:[
    {
      code : "16",
      name : "企业理念",
      url : "",
      parentCode : "3"
    },
    {
      code : "17",
      name : "员工风采",
      url : "",
      parentCode : "3"
    },
    {
      code : "18",
      name : "企业掠影",
      url : "",
      parentCode : "3"
    }
  ]
},{
  code : "4",
  name : "新闻中心",
  url : "",
  submenus:[
    {
      code : "19",
      name : "最新公告",
      url : "",
      parentCode : "4"
    },
    {
      code : "20",
      name : "公司新闻",
      url : "",
      parentCode : "4"
    },
    {
      code : "21",
      name : "行业新闻",
      url : "",
      parentCode : "4"
    },
    {
      code : "22",
      name : "视频新闻",
      url : "",
      parentCode : "4"
    },
    {
      code : "34",
      name : "图片新闻",
      url : "",
      parentCode : "4"
    }
  ]
},{
  code : "5",
  name : "客户服务",
  url : "",
  submenus:[
    {
      code : "23",
      name : "服务承诺",
      url : "",
      parentCode : "5"
    },
    {
      code : "24",
      name : "收费标准",
      url : "",
      parentCode : "5"
    },
    {
      code : "25",
      name : "服务指南",
      url : "",
      parentCode : "5"
    },
    {
      code : "26",
      name : "产品展示",
      url : "",
      parentCode : "5"
    }
  ]
},{
  code : "6",
  name : "燃气知识",
  url : "",
  submenus:[
    {
      code : "27",
      name : "基本常识",
      url : "",
      parentCode : "6"
    },
    {
      code : "28",
      name : "安全用气",
      url : "",
      parentCode : "6"
    },
    {
      code : "29",
      name : "常见问题",
      url : "",
      parentCode : "6"
    }
  ]
},{
  code : "7",
  name : "技术与应用",
  url : "",
  submenus:[
    {
      code : "30",
      name : "技术文库",
      url : "",
      parentCode : "7"
    },
    {
      code : "31",
      name : "政策法规",
      url : "",
      parentCode : "7"
    }
  ]
},{
  code : "8",
  name : "网上营业厅",
  url : "",
  submenus:[]
}];

export const bannerPics = [
  {url:"../../static/img/banner1.jpg"},
  {url:"../../static/img/banner2.jpg"},
  {url:"../../static/img/banner3.jpg"}
];

export const swiftMenus = [{
 url : "../../static/img/swift-menu-1.png",
 name : "服务承诺"
},
{
 url : "../../static/img/swift-menu-2.png",
 name : "服务网点"
},
{
 url : "../../static/img/swift-menu-3.png",
 name : "收费标准"
},
{
 url : "../../static/img/swift-menu-4.png",
 name : "问卷调查"
}];

export default menus;
