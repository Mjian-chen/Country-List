import React from 'react';
import ReactDOM from 'react-dom';
import './sass/theme.scss' ;
import {SearchBar,NavBar} from 'antd-mobile';

//热门国家
class HotCountry extends React.Component{
    constructor() {
        super();
        this.state = {
        } ;
    }
    render(){
        return (<div className='hot-country-list'>
                    <div className='h-c-title'>热门</div>
                    {
                        this.props.hotCountrys.map(item=>{
                            return (<div className='h-c-item' key={`hot_${item.code}`} onClick={()=>this.props.selectCountry(item)}>{item.nameZh}</div>)
                        })
                    }
                </div>);
    }
}
//国家城市列表
class NomalCountryList extends React.Component{
    constructor() {
        super();
        this.state = {
            countrys:[] ,
        } ;
    }
    //根据用户输入的值来筛选对应的国际
    searchByVal(list,val){
        if(!val)return list
        return list.filter(item=>{
            return item.code.indexOf(val)>-1||item.nameZh.indexOf(val)>-1||item.nameEn.indexOf(val)>-1 ;
                    
        })
    }
    render(){
        return (<div className='nomal-country-list'>
                    {
                        this.props.letters.map(l=>{
                           return this.searchByVal(this.props.countrys,this.props.searchVal).filter(c=>{
                                    return l == c.code.slice(0,1) ;
                                }).map((item,index)=>{
                                    return (<div key={`country_${item.code}`}>
                                                <div className='letter' style={index==0?{}:{display:'none'}} id={`letter_${l}`}>{l}</div>
                                                <div className='country d-f-c-v' onClick={()=>this.props.selectCountry(item)}>{item.nameZh}({item.code})</div>
                                            </div>)
                                })
                        })
                    }
                </div>)
    }
}

//右边字母选择
class RightLetter extends React.Component{
    constructor() {
        super();
        this.state = {} ;
    }
    render(){
        return (<div className='country-list-letter d-f-column'>
                {
                    this.props.letters.map(item=>{
                        return <div key={'letter_'+item} onClick={()=>this.props.selectLetter(item)}>{item}</div>
                    })
                }   
                </div>)
    }
}
export default class CountryList extends React.Component{
    constructor() {
        super();
        this.state = {
            letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] ,
            searchVal:'',
            countrys:[],
            hotCountrys:[]
            
        } ;
    }
    changeVal(val){
        this.setState({searchVal:val}) ;
    }
    componentDidMount(){
        //获取数据
        let hotCountrys = [{"code":"CHN","nameZh":"中国","nameEn":"China","prefix":"86"},{"code":"MAC","nameZh":"中国澳门","nameEn":"Macao","prefix":"86"},{"code":"ABW","nameZh":"阿鲁巴","nameEn":"Aruba","prefix":"86"}],
        countrys = [{"code":"CHN","nameZh":"中国","nameEn":"China","prefix":"86"},{"code":"MAC","nameZh":"中国澳门","nameEn":"Macao","prefix":"86"},{"code":"ABW","nameZh":"阿鲁巴","nameEn":"Aruba","prefix":"86"},{"code":"AFG","nameZh":"阿富汗","nameEn":"Afghanistan","prefix":"86"},{"code":"AGO","nameZh":"安哥拉","nameEn":"Angola","prefix":"86"},{"code":"AIA","nameZh":"安圭拉","nameEn":"Anguilla","prefix":"86"},{"code":"ALA","nameZh":"阿兰群岛（波罗的海中芬兰所属群岛）","nameEn":"Åland Islands","prefix":"86"},{"code":"ALB","nameZh":"阿尔巴尼亚","nameEn":"Albania","prefix":"86"},{"code":"AND","nameZh":"安道尔","nameEn":"Andorra","prefix":"86"},{"code":"ARE","nameZh":"阿联酋","nameEn":"United Arab Emirates (the)","prefix":"86"},{"code":"ARG","nameZh":"阿根廷","nameEn":"Argentina","prefix":"86"},{"code":"ARM","nameZh":"亚美尼亚","nameEn":"Armenia","prefix":"86"},{"code":"ASM","nameZh":"美属萨摩亚","nameEn":"American Samoa","prefix":"86"},{"code":"ATA","nameZh":"南极洲","nameEn":"Antarctica","prefix":"86"},{"code":"ATF","nameZh":"法属南部领地","nameEn":"French Southern Territories (the)","prefix":"86"},{"code":"ATG","nameZh":"安提瓜和巴布达","nameEn":"Antigua and Barbuda","prefix":"86"},{"code":"AUS","nameZh":"澳大利亚","nameEn":"Australia","prefix":"86"},{"code":"AUT","nameZh":"奥地利","nameEn":"Austria","prefix":"86"},{"code":"AZE","nameZh":"阿塞拜疆","nameEn":"Azerbaijan","prefix":"86"},{"code":"BDI","nameZh":"布隆迪","nameEn":"Burundi","prefix":"86"},{"code":"BEL","nameZh":"比利时","nameEn":"Belgium","prefix":"86"},{"code":"BEN","nameZh":"贝宁","nameEn":"Benin","prefix":"86"},{"code":"BES","nameZh":"博内尔岛、圣尤斯特歇斯岛和萨巴岛","nameEn":"Bonaire, Sint Eustatius and Saba","prefix":"86"},{"code":"BFA","nameZh":"布基纳法索","nameEn":"Burkina Faso","prefix":"86"},{"code":"BGD","nameZh":"孟加拉","nameEn":"Bangladesh","prefix":"86"},{"code":"BGR","nameZh":"保加利亚","nameEn":"Bulgaria","prefix":"86"},{"code":"BHR","nameZh":"巴林","nameEn":"Bahrain","prefix":"86"},{"code":"BHS","nameZh":"巴哈马","nameEn":"Bahamas (the)","prefix":"86"},{"code":"BIH","nameZh":"波斯尼亚和黑塞哥维那","nameEn":"Bosnia and Herzegovina","prefix":"86"},{"code":"BLM","nameZh":"加勒比海圣巴特岛","nameEn":"Saint Barthélemy","prefix":"86"},{"code":"BLR","nameZh":"白俄罗斯","nameEn":"Belarus","prefix":"86"},{"code":"BLZ","nameZh":"伯利兹","nameEn":"Belize","prefix":"86"},{"code":"BMU","nameZh":"百慕大","nameEn":"Bermuda","prefix":"86"},{"code":"BOL","nameZh":"玻利维亚","nameEn":"Bolivia (Plurinational State of)","prefix":"86"},{"code":"BRA","nameZh":"巴西","nameEn":"Brazil","prefix":"86"},{"code":"BRB","nameZh":"巴巴多斯","nameEn":"Barbados","prefix":"86"},{"code":"BRN","nameZh":"文莱","nameEn":"Brunei Darussalam","prefix":"86"},{"code":"BTN","nameZh":"不丹","nameEn":"Bhutan","prefix":"86"},{"code":"BVT","nameZh":"布维岛","nameEn":"Bouvet Island","prefix":"86"},{"code":"BWA","nameZh":"博茨瓦纳","nameEn":"Botswana","prefix":"86"},{"code":"CAF","nameZh":"中非","nameEn":"Central African Republic (the)s","prefix":"86"},{"code":"CAI","nameZh":"加那利群岛","nameEn":"Canary Islands","prefix":"86"},{"code":"CAN","nameZh":"加拿大","nameEn":"Canada","prefix":"86"},{"code":"CCK","nameZh":"科科斯（基林）群岛","nameEn":"Cocos (Keeling) Islands (the)","prefix":"86"},{"code":"CEU","nameZh":"休达","nameEn":"Ceuta","prefix":"86"},{"code":"CHE","nameZh":"瑞士","nameEn":"Switzerland","prefix":"86"},{"code":"CHL","nameZh":"智利","nameEn":"Chile","prefix":"86"},{"code":"CIV","nameZh":"科特迪瓦","nameEn":"1","prefix":"86"},{"code":"CMR","nameZh":"喀麦隆","nameEn":"Cameroon","prefix":"86"},{"code":"COD","nameZh":"刚果（金）","nameEn":"Congo (the Democratic Republic of the)","prefix":"86"},{"code":"COG","nameZh":"刚果（布）","nameEn":"Congo (the)","prefix":"86"},{"code":"COK","nameZh":"库克群岛","nameEn":"Cook Islands (the)","prefix":"86"},{"code":"COL","nameZh":"哥伦比亚","nameEn":"Colombia","prefix":"86"},{"code":"COM","nameZh":"科摩罗","nameEn":"Comoros (the)","prefix":"86"},{"code":"CPV","nameZh":"佛得角","nameEn":"Cabo Verde","prefix":"86"},{"code":"CRI","nameZh":"哥斯达黎加","nameEn":"Costa Rica","prefix":"86"},{"code":"CUB","nameZh":"古巴","nameEn":"Cuba","prefix":"86"},{"code":"CUW","nameZh":"库腊索岛","nameEn":"Curaçao","prefix":"86"},{"code":"CXR","nameZh":"圣诞岛","nameEn":"Christmas Island","prefix":"86"},{"code":"CYM","nameZh":"开曼群岛","nameEn":"Cayman Islands (the)","prefix":"86"},{"code":"CYP","nameZh":"塞浦路斯","nameEn":"Cyprus","prefix":"86"},{"code":"CZE","nameZh":"捷克","nameEn":"Czechia","prefix":"86"},{"code":"DEU","nameZh":"德国","nameEn":"Germany","prefix":"86"},{"code":"DJI","nameZh":"吉布提","nameEn":"Djibouti","prefix":"86"},{"code":"DMA","nameZh":"多米尼克","nameEn":"Dominica","prefix":"86"},{"code":"DNK","nameZh":"丹麦","nameEn":"Denmark","prefix":"86"},{"code":"DOM","nameZh":"多米尼加","nameEn":"Dominican Republic (the)","prefix":"86"},{"code":"DZA","nameZh":"阿尔及利亚","nameEn":"Algeria","prefix":"86"},{"code":"ECU","nameZh":"厄瓜多尔","nameEn":"Ecuador","prefix":"86"},{"code":"EGY","nameZh":"埃及","nameEn":"Egypt","prefix":"86"},{"code":"ERI","nameZh":"厄立特里亚","nameEn":"Eritrea","prefix":"86"},{"code":"ESH","nameZh":"西撒哈拉","nameEn":"Western Sahara*","prefix":"86"},{"code":"ESP","nameZh":"西班牙","nameEn":"Spain","prefix":"86"},{"code":"EST","nameZh":"爱沙尼亚","nameEn":"Estonia","prefix":"86"},{"code":"ETH","nameZh":"埃塞俄比亚","nameEn":"Ethiopia","prefix":"86"},{"code":"FIN","nameZh":"芬兰","nameEn":"Finland","prefix":"86"},{"code":"FJI","nameZh":"斐济","nameEn":"Fiji","prefix":"86"},{"code":"FLK","nameZh":"福克兰群岛(马尔维纳斯)","nameEn":"Falkland Islands (the) [Malvinas]","prefix":"86"},{"code":"FRA","nameZh":"法国","nameEn":"France","prefix":"86"},{"code":"FRO","nameZh":"法罗群岛","nameEn":"Faroe Islands (the)","prefix":"86"},{"code":"FSM","nameZh":"密克罗尼西亚(联邦)","nameEn":"Micronesia (Federated States of)","prefix":"86"},{"code":"GAB","nameZh":"加蓬","nameEn":"Gabon","prefix":"86"},{"code":"GAM","nameZh":"盖比群岛","nameEn":"Gambier Islands","prefix":"86"},{"code":"GBR","nameZh":"英国","nameEn":"United Kingdom of Great Britain and Northern Ireland (the)","prefix":"86"},{"code":"GEO","nameZh":"格鲁吉亚","nameEn":"Georgia","prefix":"86"},{"code":"GGY","nameZh":"根西岛","nameEn":"Guernsey","prefix":"86"},{"code":"GHA","nameZh":"加纳","nameEn":"Ghana","prefix":"86"},{"code":"GIB","nameZh":"直布罗陀","nameEn":"Gibraltar","prefix":"86"},{"code":"GIN","nameZh":"几内亚","nameEn":"Guinea","prefix":"86"},{"code":"GLP","nameZh":"瓜德罗普","nameEn":"Guadeloupe","prefix":"86"},{"code":"GMB","nameZh":"冈比亚","nameEn":"Gambia (the)","prefix":"86"},{"code":"GNB","nameZh":"几内亚比绍","nameEn":"Guinea-Bissau","prefix":"86"},{"code":"GNQ","nameZh":"赤道几内亚","nameEn":"Equatorial Guinea","prefix":"86"},{"code":"GRC","nameZh":"希腊","nameEn":"Greece","prefix":"86"},{"code":"GRD","nameZh":"格林纳达","nameEn":"Grenada","prefix":"86"},{"code":"GRL","nameZh":"格陵兰","nameEn":"Greenland","prefix":"86"},{"code":"GTM","nameZh":"危地马拉","nameEn":"Guatemala","prefix":"86"},{"code":"GUF","nameZh":"法属圭亚那","nameEn":"French Guiana","prefix":"86"},{"code":"GUM","nameZh":"关岛","nameEn":"Guam","prefix":"86"},{"code":"GUY","nameZh":"圭亚那","nameEn":"Guyana","prefix":"86"},{"code":"HKG","nameZh":"中国香港","nameEn":"Hong Kong","prefix":"86"},{"code":"HMD","nameZh":"赫德岛和麦克唐纳岛","nameEn":"Heard Island and McDonald Islands","prefix":"86"},{"code":"HND","nameZh":"洪都拉斯","nameEn":"Honduras","prefix":"86"},{"code":"HRV","nameZh":"克罗地亚","nameEn":"Croatia","prefix":"86"},{"code":"HTI","nameZh":"海地","nameEn":"Haiti","prefix":"86"},{"code":"HUN","nameZh":"匈牙利","nameEn":"Hungary","prefix":"86"},{"code":"IDN","nameZh":"印度尼西亚","nameEn":"Indonesia","prefix":"86"},{"code":"IMN","nameZh":"马恩岛","nameEn":"Isle of Man","prefix":"86"},{"code":"IND","nameZh":"印度","nameEn":"India","prefix":"86"},{"code":"IOT","nameZh":"英属印度洋领地","nameEn":"British Indian Ocean Territory (the)","prefix":"86"},{"code":"IRL","nameZh":"爱尔兰","nameEn":"Ireland","prefix":"86"},{"code":"IRN","nameZh":"伊朗","nameEn":"Iran (Islamic Republic of)","prefix":"86"},{"code":"IRQ","nameZh":"伊拉克","nameEn":"Iraq","prefix":"86"},{"code":"ISL","nameZh":"冰岛","nameEn":"Iceland","prefix":"86"},{"code":"ISR","nameZh":"以色列","nameEn":"Israel","prefix":"86"},{"code":"ITA","nameZh":"意大利","nameEn":"Italy","prefix":"86"},{"code":"JAM","nameZh":"牙买加","nameEn":"Jamaica","prefix":"86"},{"code":"JEY","nameZh":"泽西岛","nameEn":"Jersey","prefix":"86"},{"code":"JOR","nameZh":"约旦","nameEn":"Jordan","prefix":"86"},{"code":"JPN","nameZh":"日本","nameEn":"Japan","prefix":"86"},{"code":"KAZ","nameZh":"哈萨克斯坦","nameEn":"Kazakhstan","prefix":"86"},{"code":"KEN","nameZh":"肯尼亚","nameEn":"Kenya","prefix":"86"},{"code":"KGZ","nameZh":"吉尔吉斯斯坦","nameEn":"Kyrgyzstan","prefix":"86"},{"code":"KHM","nameZh":"柬埔寨","nameEn":"Cambodia","prefix":"86"},{"code":"KIR","nameZh":"基里巴斯","nameEn":"Kiribati","prefix":"86"},{"code":"KNA","nameZh":"圣基茨和尼维斯","nameEn":"Saint Kitts and Nevis","prefix":"86"},{"code":"KOR","nameZh":"韩国","nameEn":"Korea (the Republic of)","prefix":"86"},{"code":"KWT","nameZh":"科威特","nameEn":"Kuwait","prefix":"86"},{"code":"LAO","nameZh":"老挝","nameEn":"Llic (the)","prefix":"86"},{"code":"LBN","nameZh":"黎巴嫩","nameEn":"Lebanon","prefix":"86"},{"code":"LBR","nameZh":"利比里亚","nameEn":"Liberia","prefix":"86"},{"code":"LBY","nameZh":"利比亚","nameEn":"Libya","prefix":"86"},{"code":"LCA","nameZh":"圣卢西亚","nameEn":"Saint Lucia","prefix":"86"},{"code":"LIE","nameZh":"列支敦士登","nameEn":"Liechtenstein","prefix":"86"},{"code":"LKA","nameZh":"斯里兰卡","nameEn":"Sri Lanka","prefix":"86"},{"code":"LSO","nameZh":"莱索托","nameEn":"Lesotho","prefix":"86"},{"code":"LTU","nameZh":"立陶宛","nameEn":"Lithuania","prefix":"86"},{"code":"LUX","nameZh":"卢森堡","nameEn":"Luxembourg","prefix":"86"},{"code":"LVA","nameZh":"拉脱维亚","nameEn":"Latvia","prefix":"86"},{"code":"MAF","nameZh":"圣马丁(法国)","nameEn":"Saint Martin (French part)","prefix":"86"},{"code":"MAI","nameZh":"马克萨斯群岛","nameEn":"Marquesas Islands","prefix":"86"},{"code":"MAR","nameZh":"摩洛哥","nameEn":"Morocco","prefix":"86"},{"code":"MCO","nameZh":"摩纳哥","nameEn":"Monaco","prefix":"86"},{"code":"MDA","nameZh":"摩尔多瓦","nameEn":"Moldova (the Republic of)","prefix":"86"},{"code":"MDG","nameZh":"马达加斯加","nameEn":"Madagascar","prefix":"86"},{"code":"MDV","nameZh":"马尔代夫","nameEn":"Maldives","prefix":"86"},{"code":"MEL","nameZh":"梅利利亚","nameEn":"Melilla","prefix":"86"},{"code":"MEX","nameZh":"墨西哥","nameEn":"Mexico","prefix":"86"},{"code":"MHL","nameZh":"马绍尔群岛","nameEn":"Marshall Islands (the)","prefix":"86"},{"code":"MKD","nameZh":"马其顿","nameEn":"Macedonia (the former Yugoslav Republic of)","prefix":"86"},{"code":"MLI","nameZh":"马里","nameEn":"Mali","prefix":"86"},{"code":"MLT","nameZh":"马耳他","nameEn":"Malta","prefix":"86"},{"code":"MMR","nameZh":"缅甸","nameEn":"Myanmar","prefix":"86"},{"code":"MNE","nameZh":"黑山共和国","nameEn":"Montenegro","prefix":"86"},{"code":"MNG","nameZh":"蒙古","nameEn":"Mongolia","prefix":"86"},{"code":"MNP","nameZh":"北马里亚纳自由联邦","nameEn":"Northern Mariana Islands (the)","prefix":"86"},{"code":"MOZ","nameZh":"莫桑比克","nameEn":"Mozambique","prefix":"86"},{"code":"MRT","nameZh":"毛里塔尼亚","nameEn":"Mauritania","prefix":"86"},{"code":"MSR","nameZh":"蒙特塞拉特","nameEn":"Montserrat","prefix":"86"},{"code":"MTQ","nameZh":"马提尼克","nameEn":"Martinique","prefix":"86"},{"code":"MUS","nameZh":"毛里求斯","nameEn":"Mauritius","prefix":"86"},{"code":"MWI","nameZh":"马拉维","nameEn":"Malawi","prefix":"86"},{"code":"MYS","nameZh":"马来西亚","nameEn":"Malaysia","prefix":"86"},{"code":"MYT","nameZh":"马约特","nameEn":"Mayotte","prefix":"86"},{"code":"NAM","nameZh":"纳米比亚","nameEn":"Namibia","prefix":"86"},{"code":"NCL","nameZh":"新喀里多尼亚","nameEn":"New Caledonia","prefix":"86"},{"code":"NER","nameZh":"尼日尔","nameEn":"Niger (the)","prefix":"86"},{"code":"NFK","nameZh":"诺福克岛","nameEn":"Norfolk Island","prefix":"86"},{"code":"NGA","nameZh":"尼日利亚","nameEn":"Nigeria","prefix":"86"},{"code":"NIC","nameZh":"尼加拉瓜","nameEn":"Nicaragua","prefix":"86"},{"code":"NIU","nameZh":"纽埃","nameEn":"Niue","prefix":"86"},{"code":"NLD","nameZh":"荷兰","nameEn":"Netherlands (the)","prefix":"86"},{"code":"NOR","nameZh":"挪威","nameEn":"Norway","prefix":"86"},{"code":"NPL","nameZh":"尼泊尔","nameEn":"Nepal","prefix":"86"},{"code":"NRU","nameZh":"瑙鲁","nameEn":"Nauru","prefix":"86"},{"code":"NZL","nameZh":"新西兰","nameEn":"New Zealand","prefix":"86"},{"code":"OMN","nameZh":"阿曼","nameEn":"Oman","prefix":"86"},{"code":"PAK","nameZh":"巴基斯坦","nameEn":"Pakistan","prefix":"86"},{"code":"PAN","nameZh":"巴拿马","nameEn":"Panama","prefix":"86"},{"code":"PCN","nameZh":"皮特凯恩","nameEn":"Pitcairn","prefix":"86"},{"code":"PER","nameZh":"秘鲁","nameEn":"Peru","prefix":"86"},{"code":"PHL","nameZh":"菲律宾","nameEn":"Philippines (the)","prefix":"86"},{"code":"PLW","nameZh":"帕劳","nameEn":"Palau","prefix":"86"},{"code":"PNG","nameZh":"巴布亚新几内亚","nameEn":"Papua New Guinea","prefix":"86"},{"code":"POL","nameZh":"波兰","nameEn":"Poland","prefix":"86"},{"code":"PRI","nameZh":"波多黎各","nameEn":"Puerto Rico","prefix":"86"},{"code":"PRK","nameZh":"朝鲜","nameEn":"Korea ()","prefix":"86"},{"code":"PRT","nameZh":"葡萄牙","nameEn":"Portugal","prefix":"86"},{"code":"PRY","nameZh":"巴拉圭","nameEn":"Paraguay","prefix":"86"},{"code":"PSE","nameZh":"巴勒斯坦","nameEn":"Palestine, State of","prefix":"86"},{"code":"PYF","nameZh":"法属波利尼西亚","nameEn":"French Polynesia","prefix":"86"},{"code":"QAT","nameZh":"卡塔尔","nameEn":"Qatar","prefix":"86"},{"code":"REU","nameZh":"留尼汪","nameEn":"Réunion","prefix":"86"},{"code":"ROU","nameZh":"罗马尼亚","nameEn":"Romania","prefix":"86"},{"code":"RUS","nameZh":"俄罗斯联邦","nameEn":"Russian Federation (the)","prefix":"86"},{"code":"RWA","nameZh":"卢旺达","nameEn":"Rwanda","prefix":"86"},{"code":"SAU","nameZh":"沙特阿拉伯","nameEn":"Saudi Arabia","prefix":"86"},{"code":"SDN","nameZh":"苏丹","nameEn":"Sudan (the)","prefix":"86"},{"code":"SEN","nameZh":"塞内加尔","nameEn":"Senegal","prefix":"86"},{"code":"SGP","nameZh":"新加坡","nameEn":"Singapore","prefix":"86"},{"code":"SGS","nameZh":"南乔治亚岛和南桑德韦奇岛","nameEn":"South Georgia and the South Sandwich Islands","prefix":"86"},{"code":"SHN","nameZh":"圣赫勒拿","nameEn":"Saint Helena, Ascension and Tristan da Cunha","prefix":"86"},{"code":"SJM","nameZh":"斯瓦尔巴岛和扬马延岛","nameEn":"Svalbard and Jan Mayen","prefix":"86"},{"code":"SLB","nameZh":"所罗门群岛","nameEn":"Solomon Islands","prefix":"86"},{"code":"SLE","nameZh":"塞拉利昂","nameEn":"Sierra Leone","prefix":"86"},{"code":"SLV","nameZh":"萨尔瓦多","nameEn":"El Salvador","prefix":"86"},{"code":"SMR","nameZh":"圣马力诺","nameEn":"San Marino","prefix":"86"},{"code":"SOC","nameZh":"社会群岛","nameEn":"Society Islands","prefix":"86"},{"code":"SOM","nameZh":"索马里","nameEn":"Somalia","prefix":"86"},{"code":"SPM","nameZh":"圣皮埃尔和密克隆","nameEn":"Saint Pierre and Miquelon","prefix":"86"},{"code":"SRB","nameZh":"塞尔维亚共和国","nameEn":"Serbia","prefix":"86"},{"code":"SSD","nameZh":"南苏丹","nameEn":"South Sudan","prefix":"86"},{"code":"STP","nameZh":"圣多美和普林西比","nameEn":"Sao Tome and Principe","prefix":"86"},{"code":"SUR","nameZh":"苏里南","nameEn":"Suriname","prefix":"86"},{"code":"SVK","nameZh":"斯洛伐克","nameEn":"Slovakia","prefix":"86"},{"code":"SVN","nameZh":"斯洛文尼亚","nameEn":"Slovenia","prefix":"86"},{"code":"SWE","nameZh":"瑞典","nameEn":"Sweden","prefix":"86"},{"code":"SWZ","nameZh":"斯威士兰","nameEn":"Swaziland","prefix":"86"},{"code":"SXM","nameZh":"荷属圣马丁岛","nameEn":"Sint Maarten (Dutch part)","prefix":"86"},{"code":"SYC","nameZh":"塞舌尔","nameEn":"Seychelles","prefix":"86"},{"code":"SYR","nameZh":"叙利亚","nameEn":"Syrian Arab Republic","prefix":"86"},{"code":"TCA","nameZh":"特克斯和凯科斯群岛","nameEn":"Turks and Caicos Islands (the)","prefix":"86"},{"code":"TCD","nameZh":"乍得","nameEn":"Chad","prefix":"86"},{"code":"TGO","nameZh":"多哥","nameEn":"Togo","prefix":"86"},{"code":"THA","nameZh":"泰国","nameEn":"Thailand","prefix":"86"},{"code":"TJK","nameZh":"塔吉克斯坦","nameEn":"Tajikistan","prefix":"86"},{"code":"TKL","nameZh":"托克劳","nameEn":"Tokelau","prefix":"86"},{"code":"TKM","nameZh":"土库曼斯坦","nameEn":"Turkmenistan","prefix":"86"},{"code":"TLS","nameZh":"东帝汶","nameEn":"Timor-Leste","prefix":"86"},{"code":"TON","nameZh":"汤加","nameEn":"Tonga","prefix":"86"},{"code":"TTO","nameZh":"特立尼达和多巴哥","nameEn":"Trinidad and Tobago","prefix":"86"},{"code":"TUA","nameZh":"土阿莫土群岛","nameEn":"Tuamotu Islands ","prefix":"86"},{"code":"TUB","nameZh":"土布艾群岛","nameEn":"Tubai Islands","prefix":"86"},{"code":"TUN","nameZh":"突尼斯","nameEn":"Tunisia","prefix":"86"},{"code":"TUR","nameZh":"土耳其","nameEn":"Turkey","prefix":"86"},{"code":"TUV","nameZh":"图瓦卢","nameEn":"Tuvalu","prefix":"86"},{"code":"TWN","nameZh":"中国台湾","nameEn":"Taiwan (Province of China)","prefix":"86"},{"code":"TZA","nameZh":"坦桑尼亚","nameEn":"Tanzania, United Republic of","prefix":"86"},{"code":"UGA","nameZh":"乌干达","nameEn":"Uganda","prefix":"86"},{"code":"UKR","nameZh":"乌克兰","nameEn":"Ukraine","prefix":"86"},{"code":"UMI","nameZh":"美国本土外小岛屿","nameEn":"United States Minor Outlying Islands (the)","prefix":"86"},{"code":"URY","nameZh":"乌拉圭","nameEn":"Uruguay","prefix":"86"},{"code":"USA","nameZh":"美国","nameEn":"United States of America (the)","prefix":"86"},{"code":"UZB","nameZh":"乌兹别克斯坦","nameEn":"Uzbekistan","prefix":"86"},{"code":"VAT","nameZh":"梵蒂冈","nameEn":"Holy See (the)","prefix":"86"},{"code":"VCT","nameZh":"圣文森特和格林纳丁斯","nameEn":"Saint Vincent and the Grenadines","prefix":"86"},{"code":"VEN","nameZh":"委内瑞拉","nameEn":"Venezuela (Bolivarian Republic of)","prefix":"86"},{"code":"VGB","nameZh":"英属维尔京群岛","nameEn":"Virgin Islands (British)","prefix":"86"},{"code":"VIR","nameZh":"美属维尔京群岛","nameEn":"Virgin Islands (U.S.)","prefix":"86"},{"code":"VNM","nameZh":"越南","nameEn":"Viet Nam","prefix":"86"},{"code":"VUT","nameZh":"瓦努阿图","nameEn":"Vanuatu","prefix":"86"},{"code":"WLF","nameZh":"瓦利斯和富图纳","nameEn":"Wallis and Futuna","prefix":"86"},{"code":"WSM","nameZh":"萨摩亚","nameEn":"Samoa","prefix":"86"},{"code":"YEM","nameZh":"也门","nameEn":"Yemen","prefix":"86"},{"code":"ZAF","nameZh":"南非","nameEn":"South Africa","prefix":"86"},{"code":"ZAO","nameZh":"非洲其他国家(地区)","nameEn":"Africa other","prefix":"86"},{"code":"ZAS","nameZh":"亚洲其他国家(地区)","nameEn":"Asia other","prefix":"86"},{"code":"ZEU","nameZh":"欧洲其他国家(地区)","nameEn":"Europe other","prefix":"86"},{"code":"ZMB","nameZh":"赞比亚","nameEn":"Zambia","prefix":"86"},{"code":"ZNA","nameZh":"北美洲其他国家(地区)","nameEn":"North America other","prefix":"86"},{"code":"ZOC","nameZh":"大洋洲其他国家(地区)","nameEn":"Oceania other","prefix":"86"},{"code":"ZSA","nameZh":"拉丁美洲其他国家(地区)","nameEn":"South America other","prefix":"86"},{"code":"ZUN","nameZh":"联合国及机构和国际组织","nameEn":"UN and oth.intl org","prefix":"86"},{"code":"ZWE","nameZh":"津巴布韦","nameEn":"Zimbabwe","prefix":"86"},{"code":"ZZZ","nameZh":"国(地)别不详","nameEn":"Countries(reg.) unknow","prefix":"86"}] ;
        this.setState({hotCountrys,countrys}) ;
    }
    //这里要将对应的列表滑动到显示的位置
    selectLetter(letter){
        let el = document.getElementById(`letter_${letter}`) ;
        if(!el)return 
        document.getElementsByClassName(`country-list-content`)[0].scrollTop = el.offsetTop - document.getElementsByClassName(`am-search`)[0].clientHeight ;
    }
    selectCountry(country){
        console.log(country) ;
    }
    render(){
        return (<div className='view-content country-list-page'>
                    <NavBar mode='light'>选择国家/地区</NavBar>
                    <SearchBar placeholder="国家/地区" maxLength={20} onChange={this.changeVal.bind(this)}/>
                    <div className='country-list-content'>
                        <HotCountry hotCountrys={this.state.hotCountrys} selectCountry={this.selectCountry}/>
                        <NomalCountryList letters={this.state.letters} searchVal={this.state.searchVal} selectCountry={this.selectCountry} countrys={this.state.countrys}/>
                    </div>
                    <RightLetter selectLetter={this.selectLetter} letters={this.state.letters}/>
            </div>)
    }
}


ReactDOM.render((<CountryList />),document.getElementById('index')) ;




