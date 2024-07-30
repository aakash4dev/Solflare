"use strict";(self.webpackChunk_solflare_extension=self.webpackChunk_solflare_extension||[]).push([["src_common_components_Notifier_index_js-src_pages_Home_index_tsx"],{"./src/common/components/Notifier/FullMessageModal.tsx":function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,n)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&s(t,e,o);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const r=o("../../../node_modules/react/jsx-runtime.js"),a=i(o("../../../node_modules/react/index.js")),l=o("../../../node_modules/react-i18next/dist/es/index.js"),c=o("../../../node_modules/react-redux/es/index.js"),d=o("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),u=o("../../../node_modules/@mui/material/index.js"),f=o("../../../node_modules/lodash/lodash.js"),h=o("../../libs/foundation-ui/dist/index.js"),p=o("../../libs/shared/dist/components/UniversalModal/index.js"),m=o("../../libs/shared/dist/store/actions/common.js");t.default=({onClose:e,notification:t})=>{const{t:o}=(0,l.useTranslation)(),s=(0,c.useDispatch)(),n=t.messageOriginal,{icon:i,color:_}=(0,a.useMemo)((()=>{switch(t.variant){case"error":return{icon:d.faClose,color:"error"};case"warning":return{icon:d.faUnlink,color:"warning"};default:return{icon:d.faUnlink,color:"default"}}}),[t.variant]);return(0,r.jsx)(p.UniversalModal,{title:(0,f.capitalize)(t.variant),onClose:e,footer:(0,r.jsx)(h.Button,{onClick:e,children:o("action_close")}),children:(0,r.jsx)(h.ConfirmTransaction,{avatar:(0,r.jsx)(h.IconAvatar,{background:_,size:"xl",icon:i}),transactionFromItem:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Typography,{component:"div",variant:"bodyS",sx:{wordBreak:"break-word",maxHeight:64,overflowX:"auto"},children:n}),(0,r.jsx)(u.Divider,{sx:{mt:1.5,mb:1,borderColor:"semantic.borderSecondary"}}),(0,r.jsxs)(u.Box,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(h.Button,{size:"s",variant:"tertiary",left:(0,r.jsx)(h.IconV2,{icon:d.faCopy,size:"s"}),onClick:()=>s((0,m.copyClipboard)(n)),children:o("action_copy")}),(0,r.jsx)(h.Button,{size:"s",variant:"tertiary",left:(0,r.jsx)(h.IconV2,{icon:d.faExternalLink}),onClick:()=>window.open("https://academy.solflare.com/guides/?get_help=true","_blank"),children:"Contact support"})]})]})})})}},"./src/common/components/Notifier/index.js":function(e,t,o){var s=this&&this.__decorate||function(e,t,o,s){var n,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i<3?n(r):i>3?n(t,o,r):n(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o("../../libs/shared/dist/store/actions/snackbar.js"),r=n(o("../../../node_modules/prop-types/index.js")),a=n(o("../../../node_modules/react/index.js")),l=o("../../../node_modules/react-redux/es/index.js"),c=n(o("./src/common/components/Notifier/selector.js")),d=o("./src/common/components/Notifier/withNotifier.js");let u=class extends a.default.Component{constructor(){super(...arguments),this.state={displayed:[]},this.storeDisplayed=e=>{this.setState((t=>({displayed:[...t.displayed,e]})))},this.removeDisplayed=e=>{this.setState((t=>({displayed:[...t.displayed.filter((t=>e!==t))]})))},this.processSnackbars=()=>{this.props.snackbars.notifications.forEach((({key:e,message:t,options:o={},dismissed:s=!1})=>{s?this.props.closeSnackbar(e):this.state.displayed.includes(e)||(this.props.enqueueSnackbar(t,{key:e,...o,onClose:(e,t,s)=>{o.onClose&&o.onClose(e,t,s)},onExited:(e,t)=>{this.props.removeSnackbar(t),this.removeDisplayed(t)}}),this.storeDisplayed(e))}))}}componentDidUpdate(e){e.snackbars!==this.props.snackbars&&this.processSnackbars()}render(){return null}};u.propTypes={enqueueSnackbar:r.default.func,closeSnackbar:r.default.func,removeSnackbar:r.default.func,snackbars:r.default.object},u=s([(0,l.connect)(c.default,{removeSnackbar:i.removeSnackbar}),d.withNotifier],u),t.default=u},"./src/common/components/Notifier/selector.js":(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=o("../../libs/shared/dist/store/selectors/list.js"),n=o("../../../node_modules/reselect/es/index.js");t.default=(0,n.createStructuredSelector)({snackbars:s.snackbarsListSelector})},"./src/common/components/Notifier/withNotifier.js":function(e,t,o){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.withNotifier=void 0;const n=o("../../../node_modules/react/jsx-runtime.js"),i=o("../../../node_modules/@mui/material/index.js"),r=o("../../../node_modules/@mui/material/index.js"),a=s(o("../../../node_modules/react/index.js")),l=s(o("./src/common/components/Notifier/FullMessageModal.tsx")),c=(0,r.styled)(i.Box)`
  position: fixed;
  top: 63px;
  width: 100%;
  z-index: 20000;
`,d=(0,r.styled)(i.Box)`
  display: flex;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  max-width: calc(100% - 32px);
  transform: translate(-50%, -50%);
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    border-radius: 19px;
    background: #131519;
  }
`,u=(0,r.styled)(i.Box)`
  border: 1px solid transparent;
  border-radius: 19px;
  padding: 2px 8px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`,f=(0,r.styled)(i.LinearProgress)`
  background: rgba(245, 252, 255, 0.1);
  height: 1px;
  & .MuiLinearProgress-bar {
    background: linear-gradient(90deg, #3dd28b 0%, rgba(61, 210, 139, 0) 88.53%);
  }
`,h={success:"success.main",error:"error.main",info:"info.main",warning:"warning.main"},p={success:"black",error:"black",info:"black",warning:"blackd"};t.withNotifier=e=>{class t extends a.default.Component{constructor(){super(...arguments),this.state={notification:null,showNotification:!1,snack:null,loading:!1,showFullMessage:!1,showFullMessageData:null},this.enqueueSnackbar=(e,t)=>{const{key:o,messageShort:s,...n}=t;if(!0===n.loading)return this.removeSnackbar(),void this.setState({loading:!0,notification:null});this.setState({notification:null,loading:!1}),clearTimeout(this.timeout);const i=o??(new Date).getTime()+Math.random(),r={key:i,...n,message:s??e,messageOriginal:e,open:!0,entered:!1,requestClose:!1,variant:n.variant??"info",autoHideDuration:n.autoHideDuration??5e4,onExited:n?.onExited};return n.persist&&(r.autoHideDuration=void 0),this.setState({notification:r,showNotification:!0}),this.timeout=setTimeout((()=>this.closeSnackbar()),r.autoHideDuration),i},this.closeSnackbar=()=>{this.setState({showNotification:!1})},this.removeSnackbar=()=>{this.setState({notification:null,showNotification:!1})},this.handleMessageClick=()=>{const{notification:e}=this.state;e?.onClick?e.onClick():(this.closeSnackbar(),this.setState({showFullMessage:!0,showFullMessageData:e}))},this.renderFixedProgress=e=>(0,n.jsx)(i.LinearProgress,{variant:"determinate",value:100,sx:{height:"1px",backgroundColor:h[e]??"transparent",variant:e,"& .MuiLinearProgress-bar":{backgroundColor:h[e]??"transparent"}}}),this.renderNotification=()=>{const{notification:e,loading:t,showNotification:o,showFullMessageData:s}=this.state;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c,{children:[t&&(0,n.jsx)(f,{}),(0,n.jsx)(i.Zoom,{in:o,timeout:500,children:(0,n.jsx)(i.Box,{children:this.renderFixedProgress(e?.variant)})}),(0,n.jsx)(i.Fade,{in:o,timeout:500,mountOnEnter:!0,unmountOnExit:!0,children:(0,n.jsx)(i.Box,{children:e?.message&&(0,n.jsx)(d,{onClick:this.handleMessageClick,children:(0,n.jsx)(u,{sx:{borderColor:h[e?.variant],backgroundColor:p[e?.variant]},children:(0,n.jsx)(i.Typography,{variant:"label",sx:{fontWeight:600,textAlign:"center",lineHeight:"18px",color:"white"},children:e?.message})})})})})]}),this.state.showFullMessage&&(0,n.jsx)(l.default,{notification:s,onClose:()=>this.setState({showFullMessage:!1})})]})}}componentWillUnmount(){clearTimeout(this.timeout)}render(){return(0,n.jsxs)(n.Fragment,{children:[this.renderNotification(),(0,n.jsx)(e,{...this.props,enqueueSnackbar:this.enqueueSnackbar,closeSnackbar:this.closeSnackbar,removeSnackbar:this.removeSnackbar})]})}}return t}},"./src/pages/Home/index.tsx":function(e,t,o){var s=o("../../../node_modules/console-browserify/index.js"),n=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,n)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o("../../../node_modules/react/jsx-runtime.js"),c=r(o("../../../node_modules/react/index.js")),d=o("../../../node_modules/react-redux/es/index.js"),u=o("../../../node_modules/react-router/esm/react-router.js"),f=a(o("../../../node_modules/webextension-polyfill/dist/browser-polyfill.js")),h=o("../../libs/wallet-core/dist/shared.js"),p=a(o("../../libs/shared/dist/storage/solflareService.js")),m=o("../../libs/shared/dist/store/actions/wallet.js"),_=o("../../libs/shared/dist/utils/urlParams.js"),g=a(o("./src/pages/Unlock/index.tsx")),{data:b,tabId:x}=(0,_.getConfirmUrlParams)();t.default=()=>{const e=(0,u.useHistory)(),t=(0,d.useDispatch)(),[o,n]=(0,c.useState)(null),i=(0,c.useCallback)((async()=>{const o=await p.default.solflaredata.get();if(o){if(o.locked){const e=await p.default.solflarexpass.get();if(e){const{locked:n,data:i}=o;try{const o=await(0,h.decryptJson)(i,e);await t((0,m.login)({locked:n,data:o,password:e},!1))}catch(e){s.log(e),await p.default.clearPassInStore()}}return void n(o)}await t((0,m.login)(o))}else e.replace("/access")}),[t,e]);return(0,c.useEffect)((()=>{i();const e=async()=>{x?await f.default.tabs.sendMessage(x,{channel:"solflarePopupToContent",data:{error:"Popup closed",id:b?.id}}):await f.default.runtime.sendMessage({channel:"solflarePopupToContent",data:{error:"Popup closed",id:b?.id}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[i]),o?(0,l.jsx)(g.default,{storedData:o}):null}},"./src/pages/Unlock/ConfirmForgotPasswordModal/index.tsx":function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,n)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&s(t,e,o);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const r=o("../../../node_modules/react/jsx-runtime.js"),a=i(o("../../../node_modules/react/index.js")),l=o("../../../node_modules/react-i18next/dist/es/index.js"),c=o("../../../node_modules/react-redux/es/index.js"),d=o("../../libs/foundation-ui/dist/index.js"),u=o("../../libs/shared/dist/store/actions/config.js"),f=o("../../libs/shared/dist/utils/extension.js");t.default=({onCancel:e})=>{const{t,i18n:o}=(0,l.useTranslation)(),s=(0,c.useDispatch)(),[n,i]=(0,a.useState)(!1);return(0,r.jsxs)(d.Drawer,{onOpenChange:e,open:!0,children:[(0,r.jsx)(d.DrawerTitle,{center:t("header_settings_logout")}),(0,r.jsxs)(d.FrictionSection,{children:[(0,r.jsx)(d.Alert,{variant:"error",title:t("unlock_and_forgot_clear_warning_card_header"),message:t("settings_security_log_out_error")}),(0,r.jsx)(d.Paragraph,{children:t("settings_security_log_out_notice")}),(0,r.jsx)(d.Control,{id:"logout-check",label:t("settings_security_log_out_checkbox_label"),action:(0,r.jsx)(d.Checkbox,{checked:n,onChange:e=>i(!!e.target.checked)})})]}),(0,r.jsx)(d.DrawerActions,{children:(0,r.jsxs)(d.ButtonGroup,{children:[(0,r.jsx)(d.Button,{variant:"secondary",onClick:e,children:t("action_cancel")}),(0,r.jsx)(d.Button,{variant:"destructive",onClick:async e=>{e.preventDefault(),n&&(await s((0,u.logout)({language:o.language})),f.isExtension?window.location.reload():window.location.href="/")},disabled:!n,children:t("action_logout")})]})})]})}},"./src/pages/Unlock/index.tsx":function(e,t,o){var s=this&&this.__createBinding||(Object.create?function(e,t,o,s){void 0===s&&(s=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,s,n)}:function(e,t,o,s){void 0===s&&(s=o),e[s]=t[o]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&s(t,e,o);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o("../../../node_modules/react/jsx-runtime.js"),l=i(o("../../../node_modules/react/index.js")),c=o("../../../node_modules/react-i18next/dist/es/index.js"),d=o("../../../node_modules/react-redux/es/index.js"),u=o("../../../node_modules/@mui/material/styles/index.js"),f=o("../../../node_modules/lodash/lodash.js"),h=o("../../libs/wallet-core/dist/mnemonic.js"),p=o("../../libs/wallet-core/dist/shared.js"),m=o("../../libs/foundation-ui/dist/index.js"),_=o("../../libs/shared/dist/features/confirmDialog/index.js"),g=o("../../libs/shared/dist/store/actions/wallet.js"),b=r(o("./src/pages/Unlock/ConfirmForgotPasswordModal/index.tsx")),x=(0,u.styled)(m.TextField)({"& input:-webkit-autofill":{transition:"background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s"},"& input:-webkit-autofill:hover":{transition:"background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s"},"& input:-webkit-autofill:focus":{transition:"background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s"},"& input:-webkit-autofill:active":{transition:"background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s"}});t.default=({storedData:e})=>{const{t}=(0,c.useTranslation)(),o=(0,d.useDispatch)(),{confirm:s}=(0,_.useConfirmDialog)(),[n,i]=(0,l.useState)(""),[r,u]=(0,l.useState)(null),[j,w]=(0,l.useState)(!1),k=(0,l.useCallback)((async s=>{s.preventDefault();try{const t=(0,p.hashPassword)(n),s=await(0,p.decryptJson)(e?.data,t);await o((0,g.login)({locked:!0,data:s,password:t}))}catch(s){try{const t=(0,p.legacyHashPassword)(n),s=await(0,p.decryptJson)(e?.data,t),i=(0,f.keys)(s.wallets);for(const e of i){const o=s.wallets[e];if(o.type===p.MNEMONIC&&o.locked){const n=h.MnemonicWallet.fromObject(o),i=await n.unlock(t);s.wallets[e]=i.toObject()}}const r=(0,p.hashPassword)(n);await o((0,g.login)({locked:!0,data:s,password:r})),await o((0,g.persistReduxData)())}catch(e){u(s?.message||t("error_unable_to_unlock_wallet"))}}}),[n,e?.data,o,t]),v=(0,l.useCallback)((e=>{i(e.currentTarget.value),u(null)}),[]),y=(0,l.useCallback)((async e=>{e.preventDefault(),await s({confirmButtonText:t("action_continue"),title:t("unlock_and_forgot_caution_forgot_password"),message:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.Alert,{variant:"warning",title:t("unlock_and_forgot_caution_warning_card_header"),message:t("unlock_and_forgot_caution_warning_card_description")}),(0,a.jsx)(m.Paragraph,{children:t("unlock_and_forgot_description")})]})})&&w(!0)}),[s,t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.Unlock,{children:(0,a.jsxs)(m.PageContent,{children:[(0,a.jsx)(m.LoginContent,{illustration:(0,a.jsx)(m.SolflareBadge,{}),children:(0,a.jsxs)(m.LoginForm,{children:[(0,a.jsx)(m.LoginFormHeader,{children:t("unlock_and_forgot_enter_password")}),(0,a.jsx)(x,{name:"password",type:"password",placeholder:t("form_password"),value:n,onChange:v,error:!!r,hint:r&&(0,a.jsx)(m.Label,{error:!0,children:r})}),(0,a.jsx)(m.Button,{onClick:k,children:t("action_unlock")})]})}),(0,a.jsx)(m.FooterActions,{variant:"fixed",children:(0,a.jsx)(m.ButtonLink,{onClick:y,children:t("unlock_and_forgot_forgot_password_question")})})]})}),j&&(0,a.jsx)(b.default,{onCancel:()=>w(!1)})]})}},"../../libs/shared/dist/utils/urlParams.js":(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getConfirmUrlParams=void 0;const s=o("../../libs/shared/dist/utils/origin.js");t.getConfirmUrlParams=function(){const e=new URLSearchParams(window.location.hash.slice(1)),t=e.get("origin")||"",o=e.get("title")||"",n=e.get("blinkUrl")||"",i=(0,s.getHostFromOrigin)(t),r=e.get("data")||"";let a;try{a=JSON.parse(r)}catch(e){a=null}const l=parseInt(e.get("tabId")||"",10)||null;return{params:e,origin:t,title:o,host:i,data:a,tabId:l,blinkUrl:n}}}}]);
//# sourceMappingURL=src_common_components_Notifier_index_js-src_pages_Home_index_tsx.js.map