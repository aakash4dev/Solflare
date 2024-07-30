"use strict";(self.webpackChunk_solflare_extension=self.webpackChunk_solflare_extension||[]).push([["libs_shared_dist_components_BlockedOriginConnectWarning_index_js-libs_shared_dist_components_-2221b8"],{"../../libs/shared/dist/components/BlockedOriginConnectWarning/index.js":(e,s,n)=>{Object.defineProperty(s,"__esModule",{value:!0});const i=n("../../../node_modules/react/jsx-runtime.js"),t=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),a=n("../../libs/foundation-ui/dist/index.js"),o=n("../../libs/shared/dist/components/DappAvatar/index.js");s.default=({host:e,title:s,onReject:n})=>(0,i.jsx)(a.PagePortal,{size:"fullPage",children:(0,i.jsxs)(a.FullPageConfirm,{children:[(0,i.jsx)(a.PageTitle,{center:"Unsafe Website Blocked"}),(0,i.jsxs)(a.PageContent,{gap:"l",children:[(0,i.jsx)(a.AppInterectionHero,{title:s||e,subtitle:s?e:void 0,avatar:(0,i.jsx)(o.DappAvatar,{host:e,size:"l"})}),(0,i.jsx)(a.SectionContainer,{children:(0,i.jsx)(a.MessageContent,{paragraph:"For your safety, we've prevented access to this website. It's flagged on the community-maintained list of scam and phishing websites.",actions:(0,i.jsx)(a.Button,{onClick:()=>window.open("https://academy.solflare.com/guides/?get_help=true","_blank"),size:"s",variant:"tertiary",left:(0,i.jsx)(a.IconV2,{icon:t.faExternalLink}),children:"Contact support"})})}),(0,i.jsx)(a.FooterActions,{variant:"inContent",children:(0,i.jsx)(a.ButtonGroup,{children:(0,i.jsx)(a.Button,{onClick:n,children:"Back to safety"})})})]})]})})},"../../libs/shared/dist/components/FcmNotifications/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=n("../../../node_modules/react-redux/es/index.js"),d=n("../../../node_modules/react-router-dom/esm/react-router-dom.js"),l=n("../../libs/foundation-ui/dist/index.js"),c=n("../../libs/shared/dist/constants/networks.js"),u=n("../../libs/shared/dist/features/notifications/index.js"),f=n("../../libs/shared/dist/features/settings/index.js"),m=n("../../libs/shared/dist/hooks/useMetamask/index.js"),p=i(n("../../libs/shared/dist/storage/solflareService.js")),g=n("../../libs/shared/dist/store/selectors/config.js"),j=n("../../libs/shared/dist/store/selectors/data.js"),h=n("../../libs/shared/dist/utils/extension.js"),_=n("../../libs/shared/dist/utils/notifications.js");s.default=()=>{const{t:e}=(0,o.useTranslation)(),s=(0,d.useHistory)();(0,u.useRegisterNotifications)();const n=(0,r.useSelector)(g.networkSelector),i=(0,r.useSelector)(j.notificationsDataSelector),[x,b]=(0,a.useState)(!1),{isMetamask:y}=(0,m.useMetamask)(),{setNotificationsEnabled:A}=(0,u.useSetNotificationsEnabled)({onDenied:()=>s.push(f.ROUTE.NOTIFICATIONS.HOME)}),S=(0,a.useCallback)((async()=>{let e=await p.default.solflareEnableNotificationsModal.get();null!==e?(e="true"===e?0:parseInt(e,10),(0===e||Date.now()>e+(0,_.bannerCooldown)())&&b(!0)):b(!0)}),[]),T=!!i.enabled;(0,a.useEffect)((()=>{!(0,_.availableNotifications)()||n.cluster!==c.CLUSTERS.mainnet||T||!h.isExtension&&location.pathname.includes("/provider")||!h.isExpandedView&&h.isExtension||S()}),[S,n.cluster,i.loading,T]);const M=()=>{const e=Date.now();p.default.solflareEnableNotificationsModal.set(e).then((()=>b(!1)))};return T||!x||y?null:(0,t.jsx)(l.WebPersistentBanner,{title:e("notifications_prompt_title"),message:e("notifications_prompt_text"),onClose:M,variant:"info",action:(0,t.jsx)(l.Button,{size:"s",variant:"contrast",onClick:()=>{A(!0),M()},children:e("notifications_prompt_enable")})})}},"../../libs/shared/dist/features/dappCommunication/api/index.js":function(e,s,n){var i=n("../../../node_modules/console-browserify/index.js"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.addPriorityFeeMultiple=s.addPriorityFee=s.addPriorityFeesRequest=void 0;const a=t(n("../../../node_modules/base64-js/index.js")),o=t(n("../../../node_modules/bs58/index.js")),r=n("../../libs/shared/dist/api/index.js");async function d(e,s,n){const i=new AbortController,t=setTimeout((()=>i.abort()),1500),{body:d}=await(0,r.post)(`https://wallet-api.solflare.com/v2/tx/priority-fees/${n}`,{txs:e.map((e=>a.default.fromByteArray(o.default.decode(e)))),origin:s},{signal:i.signal});return clearTimeout(t),{...d,txs:e.map(((e,s)=>d?.txs?.[s]?o.default.encode(a.default.toByteArray(d.txs[s])):e))}}s.addPriorityFeesRequest=d,s.addPriorityFee=async function(e,s,n){try{if(!e)throw new Error("Transaction not found");const{txs:i}=await d([e],s,n);return i[0]}catch(s){return i.log(s),e}},s.addPriorityFeeMultiple=async function(e,s,n){try{if(!e?.length)throw new Error("Transactions not found");const{txs:i}=await d(e,s,n);return i}catch(s){return i.log(s),e}}},"../../libs/shared/dist/features/dappCommunication/components/MessageAnalysisLoading/index.js":(e,s,n)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.MessageAnalysisLoading=void 0;const i=n("../../../node_modules/react/jsx-runtime.js"),t=n("../../../node_modules/react-i18next/dist/es/index.js"),a=n("../../libs/foundation-ui/dist/index.js"),o=n("../../libs/shared/dist/hooks/useMetamask/index.js");s.MessageAnalysisLoading=()=>{const{t:e}=(0,t.useTranslation)(),{isMetamask:s}=(0,o.useMetamask)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.TXSimulationList,{children:(0,i.jsx)(a.TXSimulationSection,{title:(0,i.jsx)(a.SectionTitle,{title:e("transaction_message"),tooltip:(0,i.jsx)(a.InfoTooltip,{tooltip:e("transaction_message_tooltip")})}),children:(0,i.jsx)(a.TXMessageLoading,{})})}),(0,i.jsx)(a.FooterActions,{variant:"inContent",children:!s&&(0,i.jsxs)(a.ButtonGroup,{children:[(0,i.jsx)(a.Button,{variant:"secondary",disabled:!0,children:e("action_reject_case")}),(0,i.jsx)(a.Button,{disabled:!0,children:e("action_approve_case")})]})})]})}},"../../libs/shared/dist/features/dappCommunication/components/SignAllSerializedTransactions/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=n("../../libs/foundation-ui/dist/index.js"),d=i(n("../../libs/shared/dist/features/transactionAnalysis/components/AnalysisRenderer/index.js")),l=i(n("../../libs/shared/dist/features/transactionAnalysis/components/DynamicAnalysisTransaction/index.js")),c=n("../../libs/shared/dist/features/transactionAnalysis/hooks/useTransactionAnalysis.js"),u=n("../../libs/shared/dist/features/dappCommunication/context/index.js"),f=n("../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js"),m=n("../../libs/shared/dist/features/dappCommunication/hooks/useSignAllSerializedTransactions.js"),p=n("../../libs/shared/dist/features/dappCommunication/queries/usePrioritizeTransactions.js");s.default=({transactions:e,onSign:s,onReject:n})=>{const{t:i}=(0,o.useTranslation)(),{isLoading:g,transactions:j}=(0,p.usePrioritizeTransactions)(e),{sign:h,transactionsBase64:_,transactionsMessageBase58:x}=(0,m.useSignAllSerializedTransactions)(j,s,n),{updateParams:b}=(0,u.useSignTxOnDappFeatureFlags)();(0,f.useAutoApprove)(h);const{staticAnalysis:y,dynamicAnalysis:A,isStaticAnalysisDangerConfirmed:S,confirmStaticAnalysisDanger:T}=(0,c.useTransactionAnalysis)(x,"signAllTransactions",!g);return(0,a.useEffect)((()=>{b(y,A)}),[y.data,y.isLoading,y.isError,A.data,A.isLoading,A.isError,b]),(0,t.jsx)(d.default,{title:(0,t.jsx)(r.PageTitle,{center:i("approve_transaction_few")}),staticAnalysis:y,dynamicAnalysis:A,isStaticAnalysisDangerConfirmed:S,confirmStaticAnalysisDanger:T,retryStaticAnalysis:y.refetch,onReject:n,onApprove:h,isLoading:g,successRender:()=>(0,t.jsx)(r.TXSimulationList,{children:A.data?.transactions.map(((e,s)=>(0,t.jsx)(l.default,{transaction:e,rawTransaction:_[s]},s)))})})}},"../../libs/shared/dist/features/dappCommunication/components/SignAllTransactionMessages/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=n("../../libs/foundation-ui/dist/index.js"),d=i(n("../../libs/shared/dist/features/transactionAnalysis/components/AnalysisRenderer/index.js")),l=i(n("../../libs/shared/dist/features/transactionAnalysis/components/DynamicAnalysisTransaction/index.js")),c=n("../../libs/shared/dist/features/transactionAnalysis/hooks/useTransactionAnalysis.js"),u=n("../../libs/shared/dist/features/dappCommunication/context/index.js"),f=n("../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js"),m=n("../../libs/shared/dist/features/dappCommunication/hooks/useSignAllTransactionMessages.js");s.default=({messages:e,onSign:s,onReject:n})=>{const{t:i}=(0,o.useTranslation)(),{sign:p,transactionsBase64:g,transactionMessagesBase58:j}=(0,m.useSignAllTransactionMessages)(e,s,n),{updateParams:h}=(0,u.useSignTxOnDappFeatureFlags)();(0,f.useAutoApprove)(p);const{staticAnalysis:_,dynamicAnalysis:x,isStaticAnalysisDangerConfirmed:b,confirmStaticAnalysisDanger:y}=(0,c.useTransactionAnalysis)(j,"signAllTransactions");return(0,a.useEffect)((()=>{h(_,x)}),[_.data,_.isLoading,_.isError,x.data,x.isLoading,x.isError,h]),(0,t.jsx)(d.default,{title:(0,t.jsx)(r.PageTitle,{center:i("approve_transaction_few")}),staticAnalysis:_,dynamicAnalysis:x,isStaticAnalysisDangerConfirmed:b,confirmStaticAnalysisDanger:y,retryStaticAnalysis:_.refetch,onReject:n,onApprove:p,successRender:()=>(0,t.jsx)(r.TXSimulationList,{children:x.data?.transactions.map(((e,s)=>(0,t.jsx)(l.default,{transaction:e,rawTransaction:g[s]},s)))})})}},"../../libs/shared/dist/features/dappCommunication/components/SignAndSendSerializedTransaction/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=n("../../libs/foundation-ui/dist/index.js"),d=i(n("../../libs/shared/dist/features/transactionAnalysis/components/AnalysisRenderer/index.js")),l=i(n("../../libs/shared/dist/features/transactionAnalysis/components/DynamicAnalysisTransaction/index.js")),c=n("../../libs/shared/dist/features/transactionAnalysis/hooks/useTransactionAnalysis.js"),u=n("../../libs/shared/dist/features/dappCommunication/context/index.js"),f=n("../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js"),m=n("../../libs/shared/dist/features/dappCommunication/hooks/useSignAndSendSerializedTransaction.js"),p=n("../../libs/shared/dist/features/dappCommunication/queries/usePrioritizeTransactions.js");s.default=({transaction:e,sendOptions:s,onSign:n,onReject:i})=>{const{t:g}=(0,o.useTranslation)(),{isLoading:j,transactions:h}=(0,p.usePrioritizeTransactions)([e]),{signAndSend:_,transactionBase64:x,transactionMessageBase58:b}=(0,m.useSignAndSendSerializedTransaction)(h[0],s,n,i),{updateParams:y}=(0,u.useSignTxOnDappFeatureFlags)();(0,f.useAutoApprove)(_);const{staticAnalysis:A,dynamicAnalysis:S,isStaticAnalysisDangerConfirmed:T,confirmStaticAnalysisDanger:M}=(0,c.useTransactionAnalysis)([b],"signAndSendTransaction",!j);return(0,a.useEffect)((()=>{y(A,S)}),[A.data,A.isLoading,A.isError,S.data,S.isLoading,S.isError,y]),(0,t.jsx)(d.default,{title:(0,t.jsx)(r.PageTitle,{center:g("approve_transaction_one")}),staticAnalysis:A,dynamicAnalysis:S,isStaticAnalysisDangerConfirmed:T,confirmStaticAnalysisDanger:M,retryStaticAnalysis:A.refetch,onReject:i,onApprove:_,isLoading:j,successRender:()=>(0,t.jsx)(r.TXSimulationList,{children:S.data?.transactions.map(((e,s)=>(0,t.jsx)(l.default,{transaction:e,rawTransaction:x},s)))})})}},"../../libs/shared/dist/features/dappCommunication/components/SignContainer/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.SignContainer=void 0;const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react-i18next/dist/es/index.js"),o=n("../../../node_modules/@mui/material/index.js"),r=n("../../libs/foundation-ui/dist/index.js"),d=n("../../libs/rise-ui/dist/index.js"),l=n("../../libs/shared/dist/hooks/index.js"),c=n("../../libs/shared/dist/wallet/index.js"),u=i(n("../../libs/shared/dist/wallet/components/KeystoneQRConfirm/index.js")),f=i(n("../../libs/shared/dist/wallet/components/LedgerConfirm/index.js"));s.SignContainer=({children:e})=>{const{t:s}=(0,a.useTranslation)(),{isKeystonePending:n,isLedgerPending:i}=(0,c.useSolflareWallet)(),{width:m}=(0,l.useScreenSize)();return(0,t.jsxs)(o.Container,{maxWidth:"sm",sx:{marginTop:"16px"},children:[(0,t.jsx)(r.PagePortal,{size:"fullPage",children:(0,t.jsx)(r.FullPageConfirm,{children:e})}),n&&(m<=375?(0,t.jsx)(r.PagePortal,{size:"fullPage",children:(0,t.jsx)(u.default,{isExtension:!0,title:s("approve_transaction_one")})}):(0,t.jsx)(d.Modal,{open:!0,scroll:"body",disableScrollLock:!1,children:(0,t.jsx)(u.default,{title:s("approve_transaction_one")})})),i&&(m<=375?(0,t.jsx)(r.PagePortal,{size:"fullPage",children:(0,t.jsx)(f.default,{title:s("approve_transaction_one")})}):(0,t.jsx)(d.Modal,{open:!0,scroll:"body",disableScrollLock:!1,children:(0,t.jsx)(f.default,{title:s("approve_transaction_one")})}))]})}},"../../libs/shared/dist/features/dappCommunication/components/SignMessage/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=i(n("../../../node_modules/bs58/index.js")),d=n("../../libs/foundation-ui/dist/index.js"),l=n("../../libs/shared/dist/features/transactionAnalysis/types.js"),c=n("../../libs/shared/dist/utils/buffer.js"),u=n("../../libs/shared/dist/features/transactionAnalysis/components/Container/index.js"),f=i(n("../../libs/shared/dist/features/transactionAnalysis/components/StaticAnalysisRenderer/index.js")),m=n("../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js"),p=n("../../libs/shared/dist/features/dappCommunication/hooks/useMessageAnalysis.js"),g=n("../../libs/shared/dist/features/dappCommunication/hooks/useSignMessage.js"),j=n("../../libs/shared/dist/features/dappCommunication/utils/helpers.js"),h=n("../../libs/shared/dist/features/dappCommunication/components/MessageAnalysisLoading/index.js");s.default=({message:e,display:s,onSign:n,onReject:i})=>{const[_,x]=(0,a.useState)(!1),{t:b}=(0,o.useTranslation)(),y=(0,a.useMemo)((()=>r.default.encode((0,c.objectToUint8Array)(e))),[e]),{sign:A,decodedMessage:S}=(0,g.useSignMessage)(y,s,n,i);(0,m.useAutoApprove)(A);const{isTransactionDetected:T,staticAnalysis:M,isStaticAnalysisDangerConfirmed:v,confirmStaticAnalysisDanger:C}=(0,p.useMessageAnalysis)(y,"signMessage"),w=M.data?.action!==l.SimulationAction.NONE;return(0,t.jsx)(u.Container,{title:(0,t.jsx)(d.PageTitle,{center:b("transaction_sign_message")}),simulationAction:(0,j.getSignMessageSimulationAction)(T,M),children:T?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Alert,{variant:"error",title:b("transaction_malicious_alert_title"),message:b("transaction_malicious_alert_message")}),(0,t.jsx)(d.FooterActions,{variant:"inContent",children:(0,t.jsx)(d.Button,{variant:"secondary",onClick:i,children:b("action_close")})})]}):(0,t.jsx)(f.default,{staticAnalysis:M,isStaticAnalysisDangerConfirmed:v,onContinue:C,onReject:i,onRetry:M.refetch,loadingRender:()=>(0,t.jsx)(h.MessageAnalysisLoading,{}),successRender:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.TXSimulationList,{children:(0,t.jsx)(d.TXMessage,{title:(0,t.jsx)(d.SectionTitle,{title:b("transaction_message"),tooltip:(0,t.jsx)(d.InfoTooltip,{tooltip:b("transaction_message_tooltip")})}),children:(0,t.jsx)(d.Paragraph,{children:S})})}),(0,t.jsxs)(d.FooterActions,{variant:"inContent",children:[w&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.TXWarning,{children:M?.data?.alerts.filter((e=>"criticalWarning"===e.severity)).map((({severity:e,key:s,...n})=>(0,t.jsx)(d.Alert,{variant:e,...n},s)))}),(0,t.jsx)(d.Control,{id:"warning-check",label:b("transaction_trust_checkbox"),action:(0,t.jsx)(d.Checkbox,{checked:_,onChange:e=>x(!!e.target.checked)})})]}),(0,t.jsxs)(d.ButtonGroup,{children:[(0,t.jsx)(d.Button,{variant:"secondary",onClick:i,children:b("action_reject_case")}),(0,t.jsx)(d.Button,{disabled:w&&!_,onClick:A,children:b("action_approve_case")})]})]})]})})})}},"../../libs/shared/dist/features/dappCommunication/components/SignSerializedTransaction/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=n("../../libs/foundation-ui/dist/index.js"),d=i(n("../../libs/shared/dist/features/transactionAnalysis/components/AnalysisRenderer/index.js")),l=i(n("../../libs/shared/dist/features/transactionAnalysis/components/DynamicAnalysisTransaction/index.js")),c=n("../../libs/shared/dist/features/transactionAnalysis/hooks/useTransactionAnalysis.js"),u=n("../../libs/shared/dist/features/dappCommunication/context/index.js"),f=n("../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js"),m=n("../../libs/shared/dist/features/dappCommunication/hooks/useSignSerializedTransaction.js"),p=n("../../libs/shared/dist/features/dappCommunication/queries/usePrioritizeTransactions.js");s.default=({transaction:e,onSign:s,onReject:n})=>{const{t:i}=(0,o.useTranslation)(),{isLoading:g,transactions:j}=(0,p.usePrioritizeTransactions)([e]),{sign:h,transactionBase64:_,transactionMessageBase58:x}=(0,m.useSignSerializedTransaction)(j[0],s,n),{updateParams:b}=(0,u.useSignTxOnDappFeatureFlags)();(0,f.useAutoApprove)(h);const{staticAnalysis:y,dynamicAnalysis:A,isStaticAnalysisDangerConfirmed:S,confirmStaticAnalysisDanger:T}=(0,c.useTransactionAnalysis)([x],"signTransaction",!g);return(0,a.useEffect)((()=>{b(y,A)}),[y.data,y.isLoading,y.isError,A.data,A.isLoading,A.isError,b]),(0,t.jsx)(d.default,{title:(0,t.jsx)(r.PageTitle,{center:i("approve_transaction_one")}),staticAnalysis:y,dynamicAnalysis:A,isStaticAnalysisDangerConfirmed:S,confirmStaticAnalysisDanger:T,retryStaticAnalysis:y.refetch,onReject:n,onApprove:h,isLoading:g,successRender:()=>(0,t.jsx)(r.TXSimulationList,{children:A.data?.transactions.map(((e,s)=>(0,t.jsx)(l.default,{transaction:e,rawTransaction:_},s)))})})}},"../../libs/shared/dist/features/dappCommunication/components/SignTransactionMessage/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/react-i18next/dist/es/index.js"),r=n("../../libs/foundation-ui/dist/index.js"),d=i(n("../../libs/shared/dist/features/transactionAnalysis/components/AnalysisRenderer/index.js")),l=i(n("../../libs/shared/dist/features/transactionAnalysis/components/DynamicAnalysisTransaction/index.js")),c=n("../../libs/shared/dist/features/transactionAnalysis/hooks/useTransactionAnalysis.js"),u=n("../../libs/shared/dist/features/dappCommunication/context/index.js"),f=n("../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js"),m=n("../../libs/shared/dist/features/dappCommunication/hooks/useSignTransactionMessage.js");s.default=({message:e,onSign:s,onReject:n})=>{const{t:i}=(0,o.useTranslation)(),{sign:p,transactionBase64:g,transactionMessageBase58:j}=(0,m.useSignTransactionMessage)(e,s,n),{updateParams:h}=(0,u.useSignTxOnDappFeatureFlags)();(0,f.useAutoApprove)(p);const{staticAnalysis:_,dynamicAnalysis:x,isStaticAnalysisDangerConfirmed:b,confirmStaticAnalysisDanger:y}=(0,c.useTransactionAnalysis)([j],"signTransaction");return(0,a.useEffect)((()=>{h(_,x)}),[_.data,_.isLoading,_.isError,x.data,x.isLoading,x.isError,h]),(0,t.jsx)(d.default,{title:(0,t.jsx)(r.PageTitle,{center:i("approve_transaction_one")}),staticAnalysis:_,dynamicAnalysis:x,isStaticAnalysisDangerConfirmed:b,confirmStaticAnalysisDanger:y,retryStaticAnalysis:_.refetch,onReject:n,onApprove:p,successRender:()=>(0,t.jsx)(r.TXSimulationList,{children:x.data?.transactions.map(((e,s)=>(0,t.jsx)(l.default,{transaction:e,rawTransaction:g},s)))})})}},"../../libs/shared/dist/features/dappCommunication/hooks/useAutoApprove.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useAutoApprove=void 0;const t=n("../../../node_modules/react/index.js"),a=n("../../libs/wallet-core/dist/burner.js"),o=n("../../libs/wallet-core/dist/mnemonic.js"),r=n("../../libs/wallet-core/dist/privateKey.js"),d=i(n("../../libs/shared/dist/storage/solflareService.js")),l=n("../../libs/shared/dist/wallet/index.js"),c=n("../../libs/shared/dist/features/dappCommunication/context/index.js");s.useAutoApprove=e=>{const{wallet:s}=(0,l.useSolflareWallet)(),{origin:n}=(0,c.useDappInfo)(),i=(0,t.useCallback)((async()=>{const i=await d.default.solflaretrustedappsperwallet.get(),t=i[s.publicKey]?.[n];t?.autoApprove&&e()}),[e,n,s.publicKey]);(0,t.useEffect)((()=>{(s?.instance instanceof a.BurnerWallet||s?.instance instanceof o.MnemonicWallet||s?.instance instanceof r.PrivateKeyWallet)&&i()}),[i,s?.instance])}},"../../libs/shared/dist/features/dappCommunication/hooks/useMessageAnalysis.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useMessageAnalysis=void 0;const t=n("../../../node_modules/react/index.js"),a=i(n("../../../node_modules/bs58/index.js")),o=n("../../libs/shared/dist/features/transactionAnalysis/queries/useStaticAnalysis.js"),r=n("../../libs/shared/dist/features/dappCommunication/utils/helpers.js");s.useMessageAnalysis=(e,s,n=!0)=>{const[i,d]=(0,t.useState)(!1),l=(0,t.useMemo)((()=>(0,r.isTransactionInMessage)(a.default.decode(e))),[e]);return{isTransactionDetected:l,staticAnalysis:(0,o.useStaticAnalysis)([e],s,n&&!l),isStaticAnalysisDangerConfirmed:i,confirmStaticAnalysisDanger:(0,t.useCallback)((()=>{d(!0)}),[])}}},"../../libs/shared/dist/features/dappCommunication/hooks/useSignAllSerializedTransactions.js":function(e,s,n){var i=n("../../../node_modules/console-browserify/index.js"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useSignAllSerializedTransactions=void 0;const a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),r=t(n("../../../node_modules/base64-js/index.js")),d=t(n("../../../node_modules/bs58/index.js")),l=n("../../libs/shared/dist/wallet/index.js"),c=n("../../libs/shared/dist/features/dappCommunication/utils/signAllSerializedTransactions.js");s.useSignAllSerializedTransactions=(e,s,n)=>{const t=(0,l.useSolflareWallet)(),u=(0,a.useMemo)((()=>e.reduce(((e,s)=>{const n=o.VersionedTransaction.deserialize(d.default.decode(s));return[...e,r.default.fromByteArray(n.serialize())]}),[])),[e]),f=(0,a.useMemo)((()=>e.reduce(((e,s)=>{const n=o.VersionedTransaction.deserialize(d.default.decode(s));return[...e,d.default.encode(n.message.serialize())]}),[])),[e]);return{sign:async()=>{try{const n=await(0,c.signAllSerializedTransactions)(t,e);s(n)}catch(e){i.log(e),n()}},transactions:e,transactionsBase64:u,transactionsMessageBase58:f}}},"../../libs/shared/dist/features/dappCommunication/hooks/useSignAllTransactionMessages.js":function(e,s,n){var i=n("../../../node_modules/console-browserify/index.js"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useSignAllTransactionMessages=void 0;const a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),r=t(n("../../../node_modules/base64-js/index.js")),d=t(n("../../../node_modules/bs58/index.js")),l=n("../../libs/shared/dist/wallet/index.js"),c=n("../../libs/shared/dist/features/dappCommunication/utils/signAllTransactionMessages.js");s.useSignAllTransactionMessages=(e,s,n)=>{const t=(0,l.useSolflareWallet)(),u=(0,a.useMemo)((()=>e.reduce(((e,s)=>{const n=o.VersionedMessage.deserialize(d.default.decode(s)),i=new o.VersionedTransaction(n);return[...e,r.default.fromByteArray(i.serialize())]}),[])),[e]);return{sign:async()=>{try{const n=await(0,c.signAllTransactionMessages)(t,e);s(n)}catch(e){i.log(e),n()}},messages:e,transactionsBase64:u,transactionMessagesBase58:e}}},"../../libs/shared/dist/features/dappCommunication/hooks/useSignAndSendSerializedTransaction.js":function(e,s,n){var i=n("../../../node_modules/console-browserify/index.js"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useSignAndSendSerializedTransaction=void 0;const a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),r=t(n("../../../node_modules/base64-js/index.js")),d=t(n("../../../node_modules/bs58/index.js")),l=n("../../libs/shared/dist/contexts/solana/index.js"),c=n("../../libs/shared/dist/wallet/index.js"),u=n("../../libs/shared/dist/features/dappCommunication/utils/signSerializedTransaction.js");s.useSignAndSendSerializedTransaction=(e,s,n,t)=>{const f=(0,c.useSolflareWallet)(),{sendConnection:m}=(0,l.useSolanaConnection)(),p=(0,a.useMemo)((()=>{const s=o.VersionedTransaction.deserialize(d.default.decode(e));return r.default.fromByteArray(s.serialize())}),[e]),g=(0,a.useMemo)((()=>{const s=o.VersionedTransaction.deserialize(d.default.decode(e));return d.default.encode(s.message.serialize())}),[e]);return{signAndSend:async()=>{try{const i=await(0,u.signSerializedTransaction)(f,e),t=await m.sendRawTransaction(d.default.decode(i),s);n(t)}catch(e){i.log(e),t()}},transaction:e,transactionBase64:p,transactionMessageBase58:g}}},"../../libs/shared/dist/features/dappCommunication/hooks/useSignMessage.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useSignMessage=void 0;const t=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/react-i18next/dist/es/index.js"),o=i(n("../../../node_modules/bs58/index.js")),r=n("../../libs/shared/dist/utils/signDataLogger.js"),d=n("../../libs/shared/dist/wallet/index.js"),l=n("../../libs/shared/dist/features/dappCommunication/context/index.js"),c=n("../../libs/shared/dist/features/dappCommunication/utils/decodeSignMessage.js"),u=n("../../libs/shared/dist/features/dappCommunication/utils/helpers.js"),f=n("../../libs/shared/dist/features/dappCommunication/utils/signMessage.js");s.useSignMessage=(e,s,n,i)=>{const m=(0,d.useSolflareWallet)(),{t:p}=(0,a.useTranslation)(),{origin:g,title:j}=(0,l.useDappInfo)();return{sign:async()=>{try{if((0,u.isTransactionInMessage)(o.default.decode(e)))throw new Error("Transaction detected");const i=await(0,f.signMessage)(m,e);(0,r.logSignedData)({message:(0,c.decodeSignMessage)(o.default.decode(e),s)??"",origin:g,title:j}),n(i)}catch(e){i()}},decodedMessage:(0,t.useMemo)((()=>(0,c.decodeSignMessage)(o.default.decode(e),s)??p("error_unable_to_decode_message")),[s,e,p]),messageBase58:e}}},"../../libs/shared/dist/features/dappCommunication/hooks/useSignSerializedTransaction.js":function(e,s,n){var i=n("../../../node_modules/console-browserify/index.js"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useSignSerializedTransaction=void 0;const a=n("../../../node_modules/react/index.js"),o=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),r=t(n("../../../node_modules/base64-js/index.js")),d=t(n("../../../node_modules/bs58/index.js")),l=n("../../libs/shared/dist/wallet/index.js"),c=n("../../libs/shared/dist/features/dappCommunication/utils/signSerializedTransaction.js");s.useSignSerializedTransaction=(e,s,n)=>{const t=(0,l.useSolflareWallet)(),u=(0,a.useMemo)((()=>{const s=o.VersionedTransaction.deserialize(d.default.decode(e));return r.default.fromByteArray(s.serialize())}),[e]),f=(0,a.useMemo)((()=>{const s=o.VersionedTransaction.deserialize(d.default.decode(e));return d.default.encode(s.message.serialize())}),[e]);return{sign:async()=>{try{const n=await(0,c.signSerializedTransaction)(t,e);s(n)}catch(e){i.log(e),n()}},transaction:e,transactionBase64:u,transactionMessageBase58:f}}},"../../libs/shared/dist/features/dappCommunication/hooks/useSignTransactionMessage.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useSignTransactionMessage=void 0;const t=n("../../../node_modules/react/index.js"),a=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),o=i(n("../../../node_modules/base64-js/index.js")),r=i(n("../../../node_modules/bs58/index.js")),d=n("../../libs/shared/dist/wallet/index.js"),l=n("../../libs/shared/dist/features/dappCommunication/utils/signTransactionMessage.js");s.useSignTransactionMessage=(e,s,n)=>{const i=(0,d.useSolflareWallet)(),c=(0,t.useMemo)((()=>{const s=a.VersionedMessage.deserialize(r.default.decode(e)),n=new a.VersionedTransaction(s);return o.default.fromByteArray(n.serialize())}),[e]);return{sign:async()=>{try{const n=await(0,l.signTransactionMessage)(i,e);s(n)}catch(e){n()}},message:e,transactionBase64:c,transactionMessageBase58:e}}},"../../libs/shared/dist/features/dappCommunication/index.js":(e,s,n)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.useSignTxOnDappFeatureFlags=s.useDappInfo=s.SignTxOnDappFeatureFlagsProvider=s.DappInfoContext=s.TransactionAnalysisLoading=s.MessageAnalysisLoading=void 0;var i=n("../../libs/shared/dist/features/dappCommunication/components/MessageAnalysisLoading/index.js");Object.defineProperty(s,"MessageAnalysisLoading",{enumerable:!0,get:function(){return i.MessageAnalysisLoading}});var t=n("../../libs/shared/dist/features/transactionAnalysis/components/TransactionAnalysisLoading/index.js");Object.defineProperty(s,"TransactionAnalysisLoading",{enumerable:!0,get:function(){return t.TransactionAnalysisLoading}});var a=n("../../libs/shared/dist/features/dappCommunication/context/index.js");Object.defineProperty(s,"DappInfoContext",{enumerable:!0,get:function(){return a.DappInfoContext}}),Object.defineProperty(s,"SignTxOnDappFeatureFlagsProvider",{enumerable:!0,get:function(){return a.SignTxOnDappFeatureFlagsProvider}}),Object.defineProperty(s,"useDappInfo",{enumerable:!0,get:function(){return a.useDappInfo}}),Object.defineProperty(s,"useSignTxOnDappFeatureFlags",{enumerable:!0,get:function(){return a.useSignTxOnDappFeatureFlags}})},"../../libs/shared/dist/features/dappCommunication/queries/usePrioritizeTransactions.js":(e,s,n)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.usePrioritizeTransactions=void 0;const i=n("../../../node_modules/@tanstack/react-query/build/lib/index.js"),t=n("../../libs/shared/dist/contexts/solana/index.js"),a=n("../../libs/shared/dist/features/dappCommunication/api/index.js"),o=n("../../libs/shared/dist/features/dappCommunication/context/index.js");s.usePrioritizeTransactions=e=>{const{cluster:s}=(0,t.useSolanaConnection)(),{origin:n}=(0,o.useDappInfo)(),r=(0,i.useQuery)({queryKey:["prioritizeTransactions",s,...e],queryFn:()=>(0,a.addPriorityFeeMultiple)(e,n,s||"mainnet"),staleTime:1/0,cacheTime:1/0,refetchOnMount:!1,retry:!1});return{isLoading:r.isFetching,transactions:r.data??e}}},"../../libs/shared/dist/features/dappCommunication/utils/decodeSignMessage.js":(e,s,n)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.decodeSignMessage=void 0;const i=n("../../libs/shared/dist/utils/string.js");s.decodeSignMessage=(e,s="utf8")=>"utf8"===s?(new TextDecoder).decode(e):"hex"===s?`0x${(0,i.arrayToHexString)(e)}`:void 0},"../../libs/shared/dist/features/dappCommunication/utils/helpers.js":(e,s,n)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.isTransactionSigned=s.getSignMessageSimulationAction=s.isTransactionInMessage=void 0;const i=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),t=n("../../libs/shared/dist/features/transactionAnalysis/types.js");s.isTransactionInMessage=e=>{try{const s=i.VersionedMessage.deserialize(e);return!!s&&s.header?.numRequiredSignatures<=64&&!!s.recentBlockhash&&s.compiledInstructions?.length>0}catch(e){return!1}},s.getSignMessageSimulationAction=(e,s)=>e?t.SimulationAction.BLOCK:s.error?t.SimulationAction.WARN:s.data?.action,s.isTransactionSigned=function(e){if(!e||!e.signatures)return!1;if(e instanceof i.Transaction){for(const s of e.signatures)if(s&&s.signature&&s.signature.length>0&&Uint8Array.from(s.signature).some((e=>0!==e)))return!0}else for(const s of e.signatures)if(s&&s.length>0&&s.some((e=>0!==e)))return!0;return!1}},"../../libs/shared/dist/features/dappCommunication/utils/signAllSerializedTransactions.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.signAllSerializedTransactions=void 0;const t=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),a=i(n("../../../node_modules/bs58/index.js"));s.signAllSerializedTransactions=async(e,s)=>{if(!e.publicKey)throw new Error("Wallet not connected");const n=s.map((e=>t.VersionedTransaction.deserialize(a.default.decode(e)))),i=await e.signAllTransactions(n.map((e=>e.message.serialize())));if(!i)throw new Error("Transactions rejected");return n.map(((s,n)=>(s.addSignature(new t.PublicKey(e.publicKey),i[n]),s))).map((e=>a.default.encode(e.serialize())))}},"../../libs/shared/dist/features/dappCommunication/utils/signAllTransactionMessages.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.signAllTransactionMessages=void 0;const t=i(n("../../../node_modules/bs58/index.js"));s.signAllTransactionMessages=async(e,s)=>{if(!e.publicKey)throw new Error("Wallet not connected");const n=await e.signAllTransactions(s.map((e=>t.default.decode(e))));if(!n)throw new Error("Transaction rejected");return n.map((e=>t.default.encode(e)))}},"../../libs/shared/dist/features/dappCommunication/utils/signMessage.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.signMessage=void 0;const t=i(n("../../../node_modules/bs58/index.js"));s.signMessage=async(e,s)=>{if(!e.publicKey)throw new Error("Wallet not connected");const n=await e.signMessage(t.default.decode(s));if(!n)throw new Error("Transaction rejected");return t.default.encode(n)}},"../../libs/shared/dist/features/dappCommunication/utils/signSerializedTransaction.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.signSerializedTransaction=void 0;const t=n("../../../node_modules/@solana/web3.js/lib/index.browser.esm.js"),a=i(n("../../../node_modules/bs58/index.js"));s.signSerializedTransaction=async(e,s)=>{if(!e.publicKey)throw new Error("Wallet not connected");const n=t.VersionedTransaction.deserialize(a.default.decode(s)),i=await e.signTransaction(n.message.serialize());if(!i)throw new Error("Transaction rejected");return n.addSignature(new t.PublicKey(e.publicKey),i),a.default.encode(n.serialize())}},"../../libs/shared/dist/features/dappCommunication/utils/signTransactionMessage.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.signTransactionMessage=void 0;const t=i(n("../../../node_modules/bs58/index.js"));s.signTransactionMessage=async(e,s)=>{if(!e.publicKey)throw new Error("Wallet not connected");const n=await e.signTransaction(t.default.decode(s));if(!n)throw new Error("Transaction rejected");return t.default.encode(n)}},"../../libs/shared/dist/utils/buffer.js":(e,s,n)=>{var i=n("../../../node_modules/buffer/index.js").Buffer;Object.defineProperty(s,"__esModule",{value:!0}),s.nullSanitizer=s.objectToUint8Array=void 0;const t=n("../../../node_modules/lodash/lodash.js");s.objectToUint8Array=function(e){if(e.length)return Uint8Array.from(e);{const s=(0,t.max)((0,t.keys)(e).map((e=>parseInt(e,10))));return Uint8Array.from({...e,length:s+1})}},s.nullSanitizer=function(e){if(!e)return e;const s=i.alloc(e.length,e).filter((e=>0!==e));return(new TextDecoder).decode(s)}},"../../libs/shared/dist/utils/signDataLogger.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.logSignedData=void 0;const t=n("../../../node_modules/uuid/dist/esm-browser/index.js"),a=i(n("../../libs/shared/dist/storage/solflareService.js"));s.logSignedData=async({message:e,origin:s,title:n})=>{const i=await a.default.solflaresigneddata.get()||[],o=(0,t.v4)();return i.length>100&&i.shift(),i.push({id:o,message:e,origin:s,title:n,timestamp:Math.floor(+new Date/1e3)}),a.default.solflaresigneddata.set(i)}},"../../libs/shared/dist/utils/string.js":(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.arrayToHexString=void 0,s.arrayToHexString=function(e){return Array.prototype.map.call(e,(e=>`00${e.toString(16)}`.slice(-2))).join("")}},"../../libs/shared/dist/wallet/components/LedgerConfirm/index.js":function(e,s,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const t=n("../../../node_modules/react/jsx-runtime.js"),a=n("../../../node_modules/react-i18next/dist/es/index.js"),o=i(n("../../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),r=n("../../libs/foundation-ui/dist/index.js"),d=i(n("../../libs/shared/dist/assets/ledger-confirm.svg")),l=o.default.img`
  width: 150px;
  margin: 24px auto 0 auto;
`;s.default=({title:e})=>{const{t:s}=(0,a.useTranslation)();return(0,t.jsxs)(r.PageContent,{children:[(0,t.jsx)(r.PageTitle,{center:e||s("confirm_transaction_title")}),(0,t.jsx)(r.Typography,{variant:"textM",alignCenter:!0,children:s("approve_ledger_transaction")}),(0,t.jsx)(l,{src:d.default,alt:"Ledger"})]})}},"../../libs/shared/dist/assets/ledger-confirm.svg":(e,s,n)=>{e.exports=n.p+"assets/ledger-confirm.3f00ff7f..svg"}}]);
//# sourceMappingURL=libs_shared_dist_components_BlockedOriginConnectWarning_index_js-libs_shared_dist_components_-2221b8.js.map