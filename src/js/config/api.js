import { LTYAPI } from '../../js/config/config'
const GG_TEXT = 'http://47.90.1.122:8080/google-search/searchImg/GGWD'
const GG_IMAGE = 'http://47.90.1.122:8080/google-search/searchImg/GG'
const SK_TEXT = 'http://47.90.1.122:8080/google-search/searchImg/SKWD'
const SG_IMAGE = LTYAPI.default +'searchImg/SG'
const SG_TEXT = LTYAPI.default +'searchImg/SGWD'
const TE_IMAGE = 'http://47.90.1.122:8080/google-search/searchImg/TE'
const NT_TEXT = 'http://soso.nipic.com/'
const WT_TEXT = 'http://so.ooopic.com/jumpkid.php'
const QT_TEXT = 'http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?'
const IMG360 = 'http://image.so.com/i'

const STID = LTYAPI.default +'yunFile/getLtyYunFileByStId'
const STUPLOAD = LTYAPI.upload +'yuanyin_file/ltyimg/stQueryByUpload'

export {
    GG_IMAGE,
    GG_TEXT,
    SK_TEXT,
    SG_IMAGE,
    SG_TEXT,
    TE_IMAGE,
    STID,
    STUPLOAD,
    NT_TEXT,
    WT_TEXT,
    QT_TEXT,
    IMG360
}